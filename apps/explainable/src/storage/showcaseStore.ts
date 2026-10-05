import { z } from 'zod';
const DemoCaseSchema = z.object({ id: z.string().regex(/^CASE_[A-Za-z0-9_-]+$/), title: z.string().trim().min(1), number: z.string().trim().min(1), archived: z.boolean(), step: z.number().int().min(0).max(3) });
export const WorkspaceSchema = z.object({ version: z.literal(1), cases: z.array(DemoCaseSchema).max(100), currentCaseId: z.string().nullable() }).superRefine((w, ctx) => {
  if (new Set(w.cases.map(c => c.id)).size !== w.cases.length || (w.currentCaseId !== null && !w.cases.some(c => c.id === w.currentCaseId))) ctx.addIssue({ code: 'custom', message: 'Invalid workspace identities.' });
});
export type DemoCase = z.infer<typeof DemoCaseSchema>;
export type DemoWorkspace = z.infer<typeof WorkspaceSchema>;
export const initialWorkspace = (): DemoWorkspace => ({ version: 1, cases: [{ id: 'CASE_quickbite-demo', title: 'QuickBite damaged delivery', number: 'DEMO-001', archived: false, step: 0 }], currentCaseId: 'CASE_quickbite-demo' });
let database: Promise<IDBDatabase> | undefined;
function open() {
  database ??= new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('ExplainableTrustShowcaseV1', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('workspace');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('Browser storage is blocked.'));
  });
  return database;
}
export async function loadDemoWorkspace(): Promise<DemoWorkspace> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const request = db.transaction('workspace').objectStore('workspace').get('current');
    request.onsuccess = () => { try { resolve(request.result === undefined ? initialWorkspace() : WorkspaceSchema.parse(request.result)); } catch (e) { reject(e); } };
    request.onerror = () => reject(request.error);
  });
}
export async function saveDemoWorkspace(workspace: DemoWorkspace) {
  const value = WorkspaceSchema.parse(workspace);
  const db = await open();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction('workspace', 'readwrite');
    transaction.objectStore('workspace').put(value, 'current');
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}
