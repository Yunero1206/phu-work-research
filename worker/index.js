import { siteCss } from "./styles.js";

// ============================================================================
// Pham Thanh Phu — Work & Research Master Cloudflare Worker
// Authored case narratives and linked Google Drive source assets
// ============================================================================


// ============================================================================
// Favicon SVG Asset & Constants
// ============================================================================
const SITE_FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#14222c"/><text x="16" y="22" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-weight="800" font-size="18" fill="#faf8f5" text-anchor="middle">P</text><circle cx="24" cy="8" r="3.5" fill="#c25e2e"/></svg>`;
const SITE_FAVICON_DATA_URL = `data:image/svg+xml,${encodeURIComponent(SITE_FAVICON_SVG)}`;

const HOME_CAT_WEBP = Uint8Array.from(atob("UklGRrIgAABXRUJQVlA4IKYgAADQ4wCdASqgBRwBPpFIoEwlpCMioVUo0LASCWlu7p7BLqr+llbZAe0tNOdGtJ231H9of9h3Jf8zxf8zHyeYWcl9q8db6U8b/lZqF+397f3jzC/bD7z/3PRw/C85/EB4N+gJ+p/R70gPYXsKdN0NLKP+yPzcYGFU6AGtHm7h+M5Pgu8JyphF5kxxxHRAEIrAsoH1q2ZCKwLKB9atmQisC36dsAEIrAsoIDsjOrsZCKwK9dJwS7/sLjyzBwLY0yEVjFYXrJ885GuPQzUykOLdEhXZuufR8es8qUaCkD0MUxgWb1ngeQksL0aMci/FUm26D2N52GQexEAQe+YRNls5wQ6SiL0aH1romnuv2/BkYWKzbCI0/pRCMzV404r4+z+yiA7H+s93QytpEPSrequd5fPSgD/S5ZUvSGuOHTySNIr1g65fjtsRWsM9ND67NlEIuWuzIRNGX6IdFjAeQD5uVkwdbUrUachI/cQ8TrNKJ0z+esOuB61UU3tjyh+d83NzsqoMd/5AYMSUumUkTNgGGIjMhFYFlA+tWzenJsDCqn6VKueMAFBxgYLAhVJRliSmTYEbruRbW9oVuiNmMDMFHYF8atXvSOWoMD1fyQAsjonO3HJ2swHAoprEo0FCAfwoaymnLAtdNYF24aUOiIsL0jiZSPsnMKusBATHHQMLHInj4bwNMb8JYIFrSTa6IxGIc3b7evmc7WJ54MTSbWlHsjEdoVV6p3Zql3qWXaIF1xu7gGiKdKMb5QsrwHHWrZkIrbCSw78q/t7MOsnzRxCJ1A4L++KvaAu1cfHvFUPrFhei7jDP6WZn9TdQCiRDJi4NP4KhUK8x0dJd/ZnNN0qwXdBX3N/jeS20PRJEDea6Lv9g5JTs4OVkQO6Rtl7r0pYiLpJFN+PW5vx6hgkoQUHtEyl2JhrnyQGZ1/1NFXvpGDF2uudkLtvm55b2496RIj4inD5UoZUBrvKd6a/iMQVkY2CGOKqjaCnn+s3icGhTSKckZM953+x2nd9pOMise//wEqh8wElegFXgESZa7c2dKQUisrRq1FUIU52iVXLoG1vq3RQZfGYukAqkb2HkmFDO0dcHiOweGAFuhGBJsz5iqB7b3QSRBe/ESy9FP+oB2cnBWDgasfE2qX631bDWbBjQ1bIhTbW8/qWOzOY4b7aQsKY1qhuJlzOfN+6QeQvxdmUXrc6Fcb/ZZSY/V5UEmVMHFIqO85+wHZJjlpWgMz/XXcN47usX+abXHww/nOyvscTMn0CI7O0pasGg3jwWMfnqZD/7ySXgGvydq3w+VzYHqHLQEjcJ8+0b77OGMEyz521rcibb1OLAzn5HoYktD+ul/GUWI/A5+I4swkKYRPofunXn1sI/CBVIvlNGnw/3ojFSP0GOYidw5NYgHqQC22zFTvNFu6Ue3Y6joPdQY+uk7l6Bjd682erd4Ct/GJbx2pZBaXKKA9TeED8wPiQAXE2fZjUQkiR5RTk60QgIT88PJ6bbZmd00FCd9v8VMUUoGT8yGMu+ETk2KDE9ls1m7kVkk1Ew6auZRW8UKzi3KfZJDE95vmtUhXZIYhIIEoU3GF9HdcsV5fCvpVDll53rXN2dXMA1F7mJ/7K8EqO22bHo9XSnri8q6oiTffL8evUXbEz27IuQph2Kiy7lYc0uZjBjIm67Yt08a1BeEVgWWKsCyiw0u+/7lzAbYoDnqXOXOFCQT72KSMgfkUnm1oNsp8qcCNy5QMqijTZdmP1bdey7EwB4Os3NvoZktaPsp4IFfVuExDW1hYqiNayDDx44ufV0BdYjvOONZe0Gma0xF6NEB1qKq2rM+WKsCGSPjsL2KL/OBr5Wv4XwwEPQxfdUA/9aN2DJoQPDuIgqJqSUQj5AsaZqh1pAFXbqVLD6zb7uDOni8RCaPelJpmt7ybs8QBCKwLKBkfLZCKvt/Hsu9s3PxUyB62YuDkLVjBO+co2MnkR20jhRIu6UHl3gh2ET81cF3NPGBgs1TkVFkPAlk8qc3KF05GifMmzkHqstuV4hAGgSy434oPpAE+Vii2V2oqgVyuudmQozTf2pNnk3V4vmzhpTslfEr8nzjLQeUuQVsXh54R+14SjYo2Szl235Do4MGgjjAfuC1WmQ+iXQiiFxidE0v9hIAryPgtoW0S31AS1oM/0+U1PCylkD/tG8T/gSIlv9i9Aju5qrocO5K4k/54zu2SOwDOU3rPjCZtpOmv+RtjPjjDJhBeD4Xa5QRWQJhW1YFlCLlIcvxGPX5iRDKeRqEE6T31E9wHgPm1E0fubrC0wqtZfpuXicxl00WmAyqJiIvh85uaCdvw/cI0SA3uEYscuPZ4J5WKPPWytrVnGCcRTkjHq8fZylvyGgHbc7KB9atmQitniETTT9bnbMhFmEVjBa95lz3lHPWSKcsFrnxZaGR2C15jwM9viAsKwD/LiZkIrAjQuAAP769v/Euz/UX9xexHm2KZ4bMOEFwuqjUnknNS/H0gICWTKUOa3ORSCHLLkQj0IDCsDpTSiw7yfCdVwdYlSfm7WWm5J2vcgXZFF8cQdeJjZrpSlFxwQzl2uShuMBsouLdM5TSWxcu0cZsHhhU6NyKAD16Wfo70Nq8OhY8hytVkOW/JF4jY5swrkCTApUDY1moLRqlP1NUODlP69znzkbmgDFgs3mjZvBZ1D9y8krEL/sLgdjAu4X8enQPf9p2aOY0A71dy/H8+yxJL+sBzhKDy3a5GSoIq6A9m13+URTvYbb0nLpmb+1Yylt5qIeTFsbWVvFvTBFXCFhGKRk9B9ZToYZoAW0+V817L7gX3KRw5sx0JNrhc17zA+LCF3kX/e9FNCVW/iXyKzaeKkKrmDoHhqEebg5nOttj9jc+uaJlwf6gHANFLqnLhymGm/x3btJ6coDwOCtm5uiM8Y7YPKeuiURSRDEb9ir1OgsrqwP4nppXjgbCn1jeNqkPiSGSc+h8jUsPgmZ+tu9ZeaGidHkv8G6k6D4QNnKDqZuoDSiShvKqWpIjLsWKI8W+pFasMO7Ph97XlO+7u5BbTooWu8EG73LiSHA4dxJMFPBYxAbtI+dsf6NUaOiRmLxFUweJ2NY5LmTLaIDBQrt2/RhgRQ2DWs+NB9f3iJ+AfHgYT4f7F9Z3qARy5yYZLTlh+HVgvZ8rxbN4JKLBJYstXD/4mj9vYKvqBjNEyWZl81QjgPNNxAfEsDBxxtcBPy7X9gfvrtYO0f3voMJ8K4WrsSa2CI2r7/FZY+dZ/M/4I3QWkEq2qyH/NpHeal7q0F0he+h7FH60/Xn4C8yJnI1ta3TweVsXOofJtNBvskr3l/RbGg2h5zH2znTw0No34Gsc/78hU9pGpDgr8jANfWFcHoZFSfb0puQC7HLNWhR9HDxJw6NakLiSiooojtcbzeB50NK1+YWUaN7sJHvig/eUOXjBwS5XIkN0+/XHXHboND3Rs8Ym1d7GWx5x5tB3s99/d8UkVBC8VoOTZl2pkXe0nYEJILGxxQnXyNv7kEJhclivh4y1GehlfinY6qnceDdyZmYSrxzuDe1KMCvM7o/sgfTCU4b/j6zDEHGGrVojn8dduUwRDjSU9Xzpi0B1riEnINN0f/AGp16/MPN591pHq3BzSMw0tkpqggzcxzUU11CcjXGCZIp76jJr1msH+eTmr00WcgDPVz9fdwHfLGUK7d/+K18dagsm/v1OCllSrIbRddkublz0g4HCWsTwlrIvPq+cuck83Zi2NVos5tQ5ohbfCTHDRCIztb4oW9PcAe9TMVFnEsuIY4RyjzCeziM9Fzdgnn6tWhoKJ6oW9hggZ3NqVQbF7/BhZbp71NfbGQVhIsn9KhrZeRqx+c9xc8GAQIzEoyYWLk8Mod01SOqB/s6KH67/EYE8fKuMhl1ybXaEek531acQSuxnQ3d/oII0ayYb/zWchzF5+2EGILTU5SJTVSaNopmfL17x7t1/UT4Do1Tk2wUa0NtTFmDQYq/U9Hrr9kLREZz8cf/RHttuseXYp/Jc97/zVuPeGp1lgbpBh5ssc2RYc/VBWSCYRlkPIfqN0S1uUeJ5b2qPXVJNBv24DpUzzcJbL9LBcHSw/NhkWqkJOYwz0PCeJ7DJsPZ6erhb+NFOu4r48vuN/qWbfdh6EVv4n7F2PRHmSIK4HwDdgPR86Xgrv9pmuAusbECoiYyAoBF90j0UKAMpBtmpznZflFFC0E194knrlngiTDA+ZAS+Ek06LnTOOJYkMSrWIFivFyKRxCyvgjbS9XxGm2nCUR3T8Rk6v+ldTivGwMls5OVZxb/aGLSsBbptuqwcdmiP91InVzQDEQfG0O1JHBkN+KorgK1ijHRIIKZmiqfQBwgtm4xtI6AcG8uiX1ywCjS8fsLvFhs8TtG3AUudLNnz0S2ilXJq3Ph7N0DMUJFuYDOhPYs3p4ToNysr/RSdFYK4crDkNvDAdMbb/a29MjJJXx1rSFi6O2calX8T7aYrljyy0TejZ7mQnCjKjMhDM+1VOKtEidDlh+fXuVYK3HS7JPOFfSWcQcA3960oQlAdv1VBG2PiEY/os4wajSseU5m4cppDUoS2FGAZND6E5HiXZw93bdaACqw62z7KA2UgBFnxVxgqp+MwGKyPe+wMBC23REFHeW6LlTo9/croxi9YeggLSMK2TLu9RhVf8FUHMH3U+eKJsfmVoy3rnYvAGXWMeOzY8SUD7Ch6I0CrKdv+T39GWqsGje9VM5SES7gfz3VKSuTKeC74Z2iV5Rb0KwHewngBFN8zZjjJtp1kLMx8mZ3dd4e5zDWvoPKrec+kncpwUcnkrdzZ5bqGTTTR7flGjoueBHBvADPfUxTrp2fZvNF3lsf8CTs4NzVQ040x72wKTJDufJEge032Oz9KwMz6lEIxJxIe0ZfbDoUp4W4iP6zAYhxSbJfPiVyqdS5y8n92lrk2wfrokSdw7igFd6RTDtMJYhDQWHZIH6AagMQNWrx3b37PyyucJgJCUmGrKVKVasnG3u3YclXN5dkd9iDSl1kP0DyYMSZRWvTfv0/zPPf5NSQW+sY7YpKONdodTHlikigdgk3Z4Cu4Nl6zGKiZBgbGYbaUbJFosnvvUrj5IigjY0LJoN6HfjbcamIbfbpfYaJqYKUdWvFvHzwmAemnWCL/hgGQBz3peT6zjn37lSPZNwgVWBk4nseUuHbxcVTT5RtnKxvgYoEF9gXS1hLkM7I1Bbw0Hmd7HyIbK/n4gUPM9Th4mtev1UqqoRaJSn7+FWofgx9MjS7DUCo4aMvEPAxG+dxfc/pMJya2u6l38WOocDh3+SuIyM2g3pRAcDivatDQ5aaycykcaMm9HvJQ6PcqE8Kcd4uL1gBGqVOJqEM1vBan+KaT2NQs5Ko2fti4V+ywNdrVnmjuuxyvzD3dLQNuTju+4PM1ESL/lYAv94DBn0VvDm0jNyfhSMlQu5dEl74zOY7phUGlPIfBchyj7dGnAxUdw2mTbpATOX/sVp8nLi45UGnjOCN6pQj+z+BateuiukDjXtvQS4IGl5SyUSWlawvniEYepKeyeqwE9Zp+S6eyXUN6SIbjRtyZIsKwHgudtXzqmYPg1wVwdwoga6OHoOpMKEbDhPdK9j/c6AqL2C1DrjBVPuwrfauFCs+OhpOBUlIgqCFoL44E70vcCdkSad0vC/h1WMRzrp7t26POViW6kNHSBb6NK6Ub363Y7kve+vS8Widn8+kvMIxE6woq9FQjAwtv7XUKu+djf68Ij3fsZGIJLqrXOnVr4lChD6QSr02rejCiSsj5putIqwkCxrbYtD+snjN4W1JHjuVhrnKHpKxUhfSkzKktAAq5TpXogLcZG/mcF+VqJTssoKiqCp1lmUkRBHr5XLL+OrR5vzZ1bghxSvvrFQIT6QpwQEA1Q7bdzFvsWvfv95q/WhGjPANWabhtS88DQKdssLATtRCZX635Wp8CCK0q+WB9y5W1DM+WaPJ81KYvWIZFpXXRAOhqISJKgXTxNm3LOruIEiAZHCGumdlK+/tVHsV1OWEFJd0diuo6b8XloN1+f72iUDIE6w7j66WF/kim1nFTdz45IFa53jzlvRzmFqGEiqtx6F0PVd3twHNQLHcl6LuOzq2KwEYfRUnM7UXiMvT5uUsH9d+XQN+kPnecW8FV3jmc2FIT8PUZ/H7hsJ//MlhPgErNsf4/lhjDQ3rSidEJ9ZU55GXxZH8KfYNq87OPQj9edi6m4sM365468p8WJkNjNEWGgfLaffkfjUjCDrJ6Rnw0/GfypHKDkWtCdmCmLOGcRfV42ds/n9BAmKA+XKGsI/NyhHHBVNX/KIsK79H7etKYerMN1xU7aU2lM1GvcwD6V/xP5OpV0i3jqkqPe4pcHnOZ2Yn2z8UB2uwcSh7QRc72YogFpdE/ebLTGnm2i0qPXog+2w5klr8oW0Ep/UYwP9TFRqIkn7hs+khsJJigWPVN0BvsowEfn5R6wYhILopQWCMfnVh+wYiUKT2SPXR+hkkmqIVc8vZ67w5qHA3wFDx+x/5cPCHg04fCXNX3XrO+cjcWcNH06SfJ/HpcJbagecnAI1VOi1vD9NlyH5C/gKicH9LfCPcNlxMsGSZbs36zB2fCikJxynlL75XWsxtR00W7ubzfazFKMPbqTvI1GRRWVuQU2RW0nzPpNrN0nOTFFmkoU3RnbZ42qmvY1DEMOJuLhFQPA0Oyjw+bi9agJx7cSl4L2I9EQD2iQfYYm+a6aXY/grfHMzrxO9Ced8jfWO+rk4SK1lT8pJFyeVWI+gQFWC4eEq7Fw5ood0c9yvJKMhlTgRUhsbdbJaAqVZLVXFOlW6b/OvBoTDCqJzI4mO6M8S93bwrr7YiOVWSLl1ywHQnv3rz+3CFjn/anulLATmuQ1AZBylA3+v6g8hcu9kjeqATMKZopXrhjTxs6s9I7LxfHM3zE4czs7vTaQWk35WBtVOs7DMfTLRfL7OCG3gIlgl4x+xhKgQLoKXjQvDwcH0uKQQug+dOr/7nha4iQ/YizBSEo0NAqMiMWo6Ji00IgGKkghlfDVgYWti/pk1Fd/hih0fpepc1b3Aq3fXe+nYYMNs+Epq315YIFscd9qvhww/c4eP/TB+cdUGqCPFubTwh4jv+kU9HnYRD/FuGTvLFgsKDE0g2O1jU++bqMCjbhROMNsAEu5Tm30hDbFn2vKeNphvvBYR8WDrGNDkhhvrXZyORo1nXfpI9ljDjsyKQPYDMJoEZvGLwUyEif2K0Q1R9xFb0H9hjEtNnebT3p7ftbKdRWwNj2sAZNbjI05aH8DZl+V0U3UuRIFSHo4le2fYcU6tWrt67Xtdx5OgOiAO1MogdrsGQp838QzaPVK3Ms0wLvHVFQMYXBR06gXP0G7JyUOysjGZQ27ziHY4Wu+oAAxkz9niOhLnHui7sFXDAbU1ElI6eBzz58VUvsoVH8Kh0xXaF2j2pgAmxrqhQIg1sD6UljT21lQss1mLEKaC8S0TS50iTO17N3XQoTBnHOrqctL8hU/8Lj4WoEZmvO/QyB9gBqvMGI6YBdZMSWSgldABU4AnxOsWP2dnrCa71iESvWo0W2BY0l7HstYyUlz8zGnmTAEH3r5Ri5mHx6Fr/TZEQmXVnr9ayWXe38DfL7eFYQDDSGuS4GcShdYMv02ZTzBjFVpOASsIZ4OWeEtTUpBpf6gy5wL9OeQUBfxvXOqAr8AlL/5/xugNZjelzNgusMD1uCmZLVmRkrTSEGRLj3NKUDj+PepnkJ/n7NlP/H9nj2iuexmUteFNfFoqShi7eVQma7DRuCA8SlLW2UXhf63LwoCTSLnC/Biu8Hp1/EOMeZBD3GNLOXsgbaFgEabm4LzruxF4QCkPuWYRng5E6jPd+YJPv+sLvilKjoNBAopRRWhO/kEDI4zaQVcbGUSjJcp2ov8Y8AMVZUmhcqSxVJpAVPI63SzkjZf/KEqJRhQVOrWylmPaz0bGK+Nlmp/CZ239+1Ihi0hL8528Wyopov0iSbgxtGC4Y36IxcWK2lLO4OiD5YfgKBvCyJwC9YBN14j5A+2QBBLC/lqz2fDFHi9Gyhl4nq4ZbJJLwVP2u32wouVv6iYn4DQoj/3FqLhX2ay2vM7wqd7hMfUH46e6/83A+a5wB5E1V3Kri7lxJrH/aeQ1A0HpAybhIEm+tuCo+/zgiE3b9Le6p/3ZfUiod1toVbirhURWRpx53S2to70nqXDBv2UQRvnMmG6t7/9gOcB8RAG7gLT6VBBwCTAN5QrQNbyHbtiNtNJmWOR+QZZRylDVh+rwlccpAkk8N5EvrP8K4AEpupRk0MHT44eklPCHzFhd4GJ1YW4ZUCX8/UUDSAQfEGeMKK84XruJ5R1UOSx8XisxbfAbLUzXMTe3umuoXC15wdC1VJsPPcgjhG9iB168ZH11WJfw7xLr7f45vQuRI6PvKyvd0NtXP3TmORTlADl+N/jioDdS97tKARMk+GrjLE6Q7r9yC7vk0AmvRhPKY2D1jXWes4e9nhxSIijrJz213RoxWBObduH3yYKK8wd3cyUdn+pAUKSBtTWmWbhG4A0wND8Ik9x2NkBl7O84NJckd43/1g55ZGEArkgOssGEJeujDynvMLR8Qrwk4l6LAWeMfyoe2NrcpRsdseZptZN2Rv/J4NQPwuJ9EV6gkV1UlJrupgRCuigBdNJpbh5hb4hDk2sVd2R2HclWA/GCD72h/ht7bL6kI3a6zsjpk1WGc/av86orvO3j+MULkezmnma3pnc47gGLHAXOzA1OBvrfUrq6W9pNxyO8iaL880dK3Sw5+HWaDAEeQRCRFb0SMqlSJxRWQ/SMTkmQFq7AntYi7dGIC8i2qTY+GhiL79Jqcj02WoAEEEYgqkPSv3M+vqNijeKy9TyqeNtawtIyrBF6/php9CthUbpugTU2IZQPvRKU/fUHFF3Q3IfsNjVmkH9vi7lYnd711sZLgWVnbbpN+SvVa3Bz5qYWqn10++qJZEZwY6sdv7D5IeyK5qu25lr8OUS7a8rog6NXMWSpA4mx6FlIvzUbPiJdeeP+ekl20mkMH92EHqjCVjZ7dWA5vWzciOZuHYGmQvoIL0VNtUka6Q29egA3HaCE7+iem+0RPmgw4R8ZRxLL+Cq/PgPAjPhljH+o1EX0lmvvEDhF4mNg8xIM0+MgdARph7ajICWAXTEeC9RQgGJxvs/ikf8TtMsS4UOUONEB9kx9b/OEgFST8cr57mbmqWESuL/DwK5pWwSlVuFjG53ZlvTU9DEx8iCuUAAH8KFcjE9ayG49yq2qoP0Kd2WDYI2+eNVD3rOM7DTSFdj/lLj3tdLd+cfvw2W8Xg5MP5CchXJAtpGVpclmTJbH96YCu2TfoQYc+J/P3YMfX5lWPgeuOOR5MTNNAG3Xz7H4UPU7kQwyxseUjRMUhFqGOV/vvjgb7qMhcRP1yiMMIfCHJKS0/QTlpPOohUIecXJoWfx/FOs/8lqv0fYAj3p1IC6PJha1RS9dSsxwmNWogIZatGYa0E+3+WJf/U5Zb0Fyl0YNlKgmubtWnZHaLzrpjxu0E2bLoPoTr3UFrNsSpuROcStvo5uGgNMCxRTyuNHgBeAXoR23FcPhOrEPo4lOjbq6zzYcxSBJ241dS6epkVoKiyaNwgM7y+WXAqdNBXP82b5JQIOYdHtscd3EGxC/kZ1Dvb+BFtWtiHR2ozbqs9kXyZC4wrQMEQzjGzbi/jswUrQCBErZ+zjPx0YlmqSpHPiqxz2DH55gwoF4xGhZ/ueC59kSOZlp3eyYuNlVPFF2SvbnRUMrcrHP/izVxZEcsyvzbfqnDZY8En2bXF6UdlSS8rCCHWCpRgW3jZ1VcfyZPE1+AxvZk5zUJKS7bIItF2EyfDpwS2EbLP8SSOvFr4rKDyy4ngAdAJIOm7dtG6btf6NSAurkHeikxxOcgitmcaOY+SNdS1Wiw/fzdnyq2EZsOaFkwdcdQIYEFQ924JoZZfQCOUpNWiS4jremtTw3O3/H0DVS5C5D3k5ymoMznB67LxUDf79jQDN6Xt4A272LgbJsNEj0pGbjxQSom/3VS6Ut39evFfBHhHKV6occSpLLywVT1+InyNyybUNQ7NkDAeUs1KLdhIxXsoNGpUxl6HbELFKospk54rfEGhPtQHFw7Th4SXUPNVg7zTQ3fiOfrWB4rHEAYG6hkvnPmcKrbggLOMViyWjnVyqn3PDbzH6J82ZSlDoXoFiWpD2B+mg+9qCUCX36wN7+SxUVczJ6feCTjH0G7v5J4rVecRQgPTAgA4dZnv9AGFVNMZ9d0Bt5/7FliZAjb+2pqHTPq6Wzr/UTD6rWGP2WvoJlxJbYLRtp6DsrjJaRkih11y3OeOjJc+xim8TuXv5EccHrcRPJMkqA2uVvOv/4WEvr8o7sAEmEOltWscuCaevGWdNmC/KBlDj2XBXJm15WazuVqv5bljQCTnn84AcPTnJzXQmhxvDLiwboAE640Hdh4IJLSgClfErLfHYBH/h4OXZWjrc6W58MeFFCg7oh1ZmWi+y2Gsx5jsK693Hv0du+du0YtErGfTVM3x+wsBl6tLi+RDN6qmr0iV7qDH1QGbUQLdPXsY1m2HAe6yLP5V3Ptk7l9XViy0RlkCiFZ3yVUI54u6qCdyw0o9bg6TsPgz0Yw9jfV+G1d9aYroM11GYkfvf/XaABEmWUkLZIfs2XxlYNvliu0u1iDUG7SjycaXJspSR9HkEG0HAipk+ukpg0n5ZdFMDOt033yt8kFYDANJDrcpf8rI5zuxtd4Dywi/pVRFukjSI726Cc9FhXHmQDreoEoTPabRamamzG2Vw7hgRd/2EEz36dOENDjOqnIdToZpD5SYOmZI67t6Mw9cX3iu1UBRMzuDh2tkOBL7/z1nnZ6oxrY5UgZdRdXBnheDAfH+gJQ1pcUXPIqS2cyNfGkaVUynANJyXXiXOGaGwpg2SkzaE7Fx/uUGotk6Z1lvKUix74TnOYEzSjNRw4rQzm80oMLPJxzzt3XncuGoihjgDZiusFjqNciirwx8Y6Y9jDK0ITjz/xulEPj+9eLXA7GxWC4j6CEbUrS1oyK2ZFygULTtopXuF2xMcuA5KwbviRwJI856xFazsF+6YXt1sdpKZi0myj8GZ1AF0tVUzPM6JUAzKycUgAMQlNlsXCKtMmhSdAmjN7gAAA="), character => character.charCodeAt(0));
const PHU_PORTRAIT_WEBP = Uint8Array.from(atob("UklGRgQSAABXRUJQVlA4IPgRAADwjACdASosASwBPpFCnUmlo6MqqBFK8VASCWcIkVVJ3xAPhuQkCLfwHobkXIovO36/xUX7XcZvoTS4iKaxDrZxTcCv3goMEWEGXhdTELyqVfCzCiIAm1EJRJgDZW+XHfIgYda24/evpq19fIjTxu93qz/Uitsy9pNSyllNW4TPeiWfgWriwIHD5aVRu18P44C3vH8sB/ZBV9Y/An7e2hkKAyJk8NDumL/+YNC/iLF/hHJkrLyu1Sf3vB6EzARbEnSAq2AIuAsi7u9R2Ph9YFlHDYWCWdk/dfpdXhj5opEu+cF1R3FTq/RH+QV4lBB5ybDx4oWS1+KwOrMcbQZ+T8eLLNDmNhAUNxxt+xDKkYtlmHhMM6JfDFrgKpPNE4i/xokvH8NjS4fQd6GkMTi0fiREdn4tggv9/V4TjkGi3SnrUvLmGuVvYNigdn/iv1a8WEv1RBXKDz9zp0WkDDSQWYfZ3diqtMNy4HieZhATnj/gPL2R/dOT4hUfJZbm2Zb9ADQkc9vX9TGgE/Q56bYkVyp5dNhZyig3TDjZT6aTMyX+2tj8SUGsz36/ZZsFSR2ovIUAwrHHngJFdcbcsLzoxmvSW3HcbSfeyvvvg32gNJcR3RmD6Js7ev280P6EjNEFb4mIOi9QuisgVpFkvvWd0PRGVpaXcKsS0FTWcVHL5OSDKaz6R+cz+TBs6cV6DgTxQWEQn+PJtjz37EhGal63PiSj8kgn5cmAjKGpNs3guzqCNbYI+XkJIGV803SdrGmnaE6dgwIHsnbJlGyLTx5uNPKOebuiiBMCmG30qvxk+IlWHDZmAIzdS5nwKf3EFr9dhN7PqjiRE+fvTMB/6Ecp4jUXdz1eWphBkHo70qB6pdf6azRlXBm5I16+xlcvcj/x1csWYhrJAt066JpyiA5kLtOGz+0a7Ay7TSC+tIvKPiCAOM5nCJMmWQh1wGZ7K3e00vcCybTyJtOJQF0vqfJXXvMvVq5aJcM2Wmyhro5LEyGg1popagSlEPtoeB0ZdTkaQCCPtHn0ZIqcWLBiSQ6GLIKAx3DQSJuG4LLrLM/SQq2H9mbYDBGmcUl865y2XSGSlvVCFtIRA9gILrzIJM1nA0LIjnOMGg8bfB4vXaoMb2Jms97NeWzRexK9UOITUKXGikxySzRfBi+e0DxogB/AYjQ941eBAFXm+tB+C/q5uQcqJRW69TTAw0uQk3c2wKX8V24/hr6LJYxbdYGF/Lo4NGwe6TnpWMcHOwt4TGZnANtfBcmpRT49kWgRpX1kbCcwy9UpDhBJWYz1MNdWt0gzTNSzXBfwhU5RBMfEQGPFVgdpIIIdOvdA8MyLPtgFtQ5tSCl++9uB6a0KGTZE8EMxcPREzNvyBhbJa32WF1wNN+HqcNN+PrxxX+Y8feqP7rHkH3GxXdg88rJwjzO5H6idyav7JX1BoF2QzMx45Pmp8vAHW73L/I/TItHOuKrupNWL2+QbxNxKh4H9Q5SbnkVbJ2yNMnEOFwsqmjKVqHrIgH6pAAD+VGZtGP4e1vVlBT/RYltn3QgacrbXVoFElMV6OTL9Qm/1LzearVmxRhGs4KLSU+NmE2pPtvpmgzDpMNacVdWs/DfTUbtQEDm6uxPRQDn/GZqoCzXEV8LL+OxQXoHEi8wpm6e1WoGNCVByolu52JOldiU9UnTyx7ec9FW4WZVCwTE18BllGXZUZglpv6te8cQgyrT8OmZb9Xox0Aamxac1U9OEG6UlZuLg5RaLEqL64VBz7LjDn+d25bty6+UcaBQZcGuKP0457DFkoHLqE8Z7YfW5s4V76J/zXjo1qti6KUP0y00N8pyZ+DhlxaC8nHlU1V8cohBCW6y6/ssAZEvqgGZ2YxX4c2PTtTqiKXYjd4iapBdymx4wMjVX9GyOWLX1s7K5UcMQOSE7KNGq9aL3/EKHmR8sj1lWQ0iWtm/YhhJ0ZKhQNzlNi4mlPBjNZiqacP2aRPKj5E4Ty76V85XJ10udjlgIOCx1+hs5oyr+RUubnSiJUy36LZvULZO32VCBOObxwZxzM7zi1AdxJ0st0V4AZfGmsdzMEBE0UiG+a7w6pgAExmvdDbwzxNWzW7N/qhQ+QE2oeknOGvbjvVBUo6EHoKe28IZLYe7e3B43fsJ8UCgoWmFI2POGvaUjpWvxXil8CG5/E2oye9Hru2tnb5zymlV6sUu6RE+bbiawsxflFEoGzbR62cFE0HKSj+10fLwJUk5Q8lpJBvq+bRJMwyIflKd0goDQli2K0KHTZeyleH/UKiA1BNuYjz8IJzHpFngJWXvFqtiDSO5IXDyuyG8hUq7c1zrXwr72yaOYPWSUBABxCbmMaWI2jWk8pzr2uAdrjzuWOwi9eX22yPzGF6AN2mTMET2Jmf12dioh5cnmplHvO6UUFG4Wzp36vo6Wcv9mEdah8sTnrdUUhBBfDDz/BzgXWRwRkgRGEA5ymNquOAQdjuifiCnWAd/2C4vSv+2vHmYcXa6E5/GMtYNW11h3UKgCCeE6oAezHkEgnaY2V0bzXKqG5+oCF8RYrYfSGgvvqWkLyamnKh1rXHGZqE5R+k7YW3A2N0xe+kx/VW2caFfK4p/s15Re2F0l0IeTMJbdvnH7Phv9yTs9EcCgbGq23T9957ntaxDJ4PHZPU6TNvkJ/zmm73+84p1zMvDvp0nJ6IqIhBWqV/7bCPhy9tqQXNO4ut2ibivUTydm7vmv15ZYtRz1pJ/23DoeK175b18aW8ZZZ2E3LXeBEvWhDO7ZnEB10XEo/dP716Zo7S/llCw69PcX+LTIQDb+SN5vSYlD8BcAabIK3lDiwfghT4tdp55Kmp1CKG5D/pAcqxTJOL8QWqYkXsxgx7+ZTnIIXyEfaCivRUvTv3qO6VDAorCsMm52YXrPH+Ox7PsF/cW1syms2wdXQsa3R8BmCsaaMkV0n3hJTtosa/HabaT9xcqWtHzofS/Mh6PPYfDA+lqJe3xt1kUlpTeJXyIJbCPwUQ1DOdCuOLHTAg+KPa71kCYiaAy4PK8EB1hLmfUGvd1aWcIT4Qy5/BtRxNFISKoJlcqHTjGx+Hyt9WX/TGgG7vp2slpzUI2F6lU4iphW15CJGZqXW6XyndUve9elhRw8ru+dJyGtN+644uvHTJE7QFbnPP4Yg8t+2uUdGQ9UMFpv16siEvYtm3Pt+B5GMzM2EusPTCnj+5YuO1ppIs/mQT8OteUIPUdWL15i9jPlOMVKAgqBPe6PxIldwYp3uQVk1SFQOvO9g/a6RKAtm/GJKhHYJSX1bEnFoLyRA90xSfC9WM+rnUr6DIuVlbHkeb3oAm2N1J31ugyNKRKETReyhK74IEworg3ceXVlOQmwu8Zd95YnsRkllthlDcb0OYeJPw50xhEGEVf6rgFZTiYZERyHDlbkRsUSyLsnXDYT3fkTDz0g3KCc3NQA8UkF+B8vrFkDp+qP9JngZKKzEvczRg00QW12b1VXGwLzfAwbGbvkvdyq4XPUzLwG57xPAG8K3EMJ4/4JjZilLxZP+gWeZ2HT0vZQPng2cW7B11ggl2ZMOvH8gAXUPvPXb6yMfz5XlyvMJyHMMu7/Y4hbI0YL28E9B6oSjMHJgQzCRTyYWoz1oGCfsxchPHN1CXy6l4CNezMFjBr+so1gCoKU5pFWUWqENPHX7IaSNNCZtphG8n2i+uDH4fZ3tdD6dl+lQFXW9yWoktTDhKigHpiuqO0OMePsFvZm0KTqinR1BGNnz/QoCFF4Ym15I4k1CuLZv+NoHw4GhFEeVC2lMxFEBQadzWKbJIP2TH87/kAH9M/JCCjtu8eiNOCZBPm/Vgv09vcsBCaZSmKAR+5qzvToJKY97XEVIxSVkS7tbmoh2YIIb0u4LkNtHkun6g3pPyHaY1JGOKrDACfJ/Ruk7y9zvz1c5UJ+x9Hlfi0CSxH92u8InuCqPg4QLgYclS/HZE5ttWmYj5SxPrWuCok7gw/KUZArYN632+xBCxXyqMDFSm0W3joGLJ+5oPd8IPhJg/u3bWl1+703LzMKTHd+4sUlMGAx4Udnoc1NiQB56MiAUgi/uQBmGUadFOD8w3vEHTsmPnLZxJvL8p13Wppbk4iw8i+jmxKWn6RLCs7cdu5ZnJPL7lduWceRnKe5Kkf3ki0iDBv3psoJ+0SspYDXLMRPF1LFwZKDPI4Yj9qRkKHvKvdAPX61lgPnNg7qahhI4zqQEI74ZODlJcbejy3gLk4dm1pql3vbBDHhrYfbIYHunxEVSOphpSWnvslDbK8pRJPjMqOhGeaTSrPj8D7DHKtndED2ejgdkorwsR3ikS063MIzDYZWdYOdJsFm9CDTtBVsyLDm+cbJenEN4rkms80B7gaIUfnH8lS5Qk8Pef2KgnqP08aV62aI/qi1NBSwhh5GgWsFSQT9rsxdUvvZKXf6r0NObgkU4rVAhL2qcYgwZ4UvxxEsx14uG88grUve4/6B0ZVXgat7lXhgQanIrpXI2xP1yKO5+MHzUYHeYiYu69SdsIuQfYQt2RANI7zhFYhiHydv+HHvGxvMjmMFxZhcCKMOpxdVh8oEhZ9LUY/ZYYbl0UYYmS1iZBrnSpyKqPesikpB/m5qLIwO2hSpp/q/dIV1cg4jpD8tbkdVPihi58djLrPZrVn4hQpVMCI6JOash+vWCvytKi4Y+bqDNeT3M7iLiXqFg/Y4D7DPiN/0GYSZ1VMkN3J7XbbC9R5zGOm8NxCMXC3cgQquNGMg4/5LKrAwnINxX/ycTz7LUeeWZnFJGaMSqCPe8n5Ro9veJ81pCodvu6krzeaNVaeFEnztFIE+N2xAuXnfbX6uoInckCvszx94GINUICYtrgHcxcDTPE69j4AeTeo4XfMnFReU0UGVic6O0uRHdUVpB53iZWwI27VVdzFEI8gGomAgBvWgbOC7qWr5HRWANCNq/jnNG28zOfiYqOKKglfji9kxwjfiUWHdeAYv/RJBtHwsoe/G/2NRl+xezHvIAah09AgusEfDVEIaOsM6Bm58zehR2DMvm6JMTREspg92kBmS2VnIzNL9cJGL4kBBMEkUzX3YvC2/HujqhC8X5y/E6BMdCC5RIQ5tKjhA6LIZbsARXcYn27XMyYmpMfO3SVzx3P8oYSr1A3Wsc48tsPADE9Ihx515/nAIS9NuGNjSdA0cmpRopD1XIQnulkbSuoijZo8afQmxvUwYaKWgI5bvtSzEdOXyAKieCqot30gTKzgnpLFkXpC09UjA2UMNKydoZvnAvq5ncdd4gwt+buLCQabWVzgUPXaP3/wsqwvz+tYM9KwC2AfC28To2DH2gZ91Ie8vkNrnu0dd2kDTB2sCj5SEUZCshxWPI7oCa43BerlL+3nL4Hl81zS+cOUUVaOUeXugxPu2MDGF/40f6sPwb3ObdQnGJTAoTRd2yqFzdBtUgnosNKWTHuE9VG9lhhWbznPnFW0ms1vDhqSlk5hjqf5tSF0IqI/PT/b68Q+zlPvT3fG67s8t7em2UBVyY3nF2bb8tpD8EiJO8/k8NwzWmejhPrZ5f8A5oQxGuDxYs8XeSO1fFttDq+L1i52cpp9oDFZeh1NGaUJLXbC4MaqXUTwZx8iCDdMZnRStGBTYQHS9NXjKjZlzXxgOuAVHkbuiOF5Ws2yqmWzU7ojEuojdwNPSmsuX0lkt0280El8qZJ1y41rbSTAw7iYgn4dMcFL0zq5cpYTgmvD5YuXL34zeBqQ5zmVBzE13y7+1XJtIs6yrsF9RiCck4lvuDpQE+s/JsX5gFbsoxPrO9MwmKuavkprjs71ziox/fXVn05YmgQjhrHj2Ky1mxMRqelkYt/FfMZQaCyBsncQEsVbL45ZXpF1chUAjcHXIe+kA8b2LapcXgwTECaq6BIZbYq7rrg28OMq4htmPE/n4LqxWrQRoj+D8ha951tySsnFwGhB7JrPk8fdSKp5KQ5UZRxvKq46eBMYrl+9wZAp57cwlMpYdpM8Bgq8oM4JjjkRqDJA5yhJfV6VIahYU+hObpaBSW/9I6HoO+ASUeY5vS7Tx6EHAZ5qMPVkCdfxIzlExet/yL9tHg76mLin5gmbfqelbZYrgC02tmAMhxjen25BG2J4GajYi5SZk8XHzsfXa6tmy6TnhaEZGyjQL/Xe3AAAA"), character => character.charCodeAt(0));

const finalModes = [
  {
    "id": "product-ops",
    "num": "01",
    "label": "Product & Operating Work",
    "short": "Product & Ops",
    "description": "Observed problems translated into product direction, operating architecture, ownership, metrics, stage gates, or execution design."
  },
  {
    "id": "evidence-first",
    "num": "02",
    "label": "Evidence-First Cases & Trust Research",
    "short": "Evidence & Trust",
    "description": "Specific contradictions, events, and trust pathways reconstructed with conclusions proportional to the available evidence."
  },
  {
    "id": "essays",
    "num": "03",
    "label": "Research Essays & Working Hypotheses",
    "short": "Essays & Hypotheses",
    "description": "Propositions developed from real product, platform, or organizational observations and kept open to comparative or empirical testing."
  },
  {
    "id": "concepts",
    "num": "04",
    "label": "Concepts & Product Explorations",
    "short": "Concepts",
    "description": "Early directions made visible enough to inspect and test, without being presented as validated products or implemented systems."
  }
];

const finalWorkLibrary = [
  {
    "index": 1,
    "path": "/work/vinamilk-trusted-nutrition",
    "title": "Vinamilk: Trusted Nutrition Product-Service Discovery",
    "question": "What trusted nutrition proposition deserves to exist, and can its valued attributes survive delivery, scale, and later governance?",
    "maturity": "Developed outside-in research",
    "type": "Product-Service Discovery Research",
    "tags": "Strategy under uncertainty · Stage-gated investment · Operating blueprint · Capability stewardship",
    "mode": "product-ops"
  },
  {
    "index": 2,
    "path": "/work/creator-platform-operating-model",
    "title": "MFan: From Trust-Chain Integration to Fan Journey Continuity",
    "question": "MFan now presents an integrated front door. Can one membership promise remain coherent through purchase, activation, benefit use, exception recovery, and reporting close?",
    "maturity": "Reader Edition · 7 Sep 2026",
    "type": "Independent Outside-In Platform Operations Case",
    "tags": "Trust-chain integration · Membership continuity · Accepted handoff · Exception recovery · Reporting close",
    "mode": "product-ops"
  },
  {
    "index": 3,
    "path": "/work/elfie-trust-safe-activation",
    "title": "Elfie Product Case: Trust-Safe Activation",
    "question": "How can a health product reach first value and retained routine while making role, consent, data quality, and sharing boundaries visible?",
    "maturity": "Developed Work Sample",
    "type": "Product Strategy Work Sample",
    "tags": "Product diagnosis · Activation pathway · Event instrumentation · Experiments and roadmap",
    "mode": "product-ops"
  },
  {
    "index": 4,
    "path": "/work/post-signing-artist-label-operations",
    "title": "Post-Signing Artist / Label Operations",
    "question": "Why does a signed partnership still require so much invisible coordination to succeed?",
    "maturity": "Working Model",
    "type": "Operating Model / Role-Understanding Work Sample",
    "tags": "Decision rights · Approval and commitment records · Change control · Incident and portfolio operations",
    "mode": "product-ops"
  },
  {
    "index": 5,
    "path": "/work/shopee-account-restrictions",
    "title": "Shopee Account Restrictions: Customer Resolution Under Platform Uncertainty",
    "question": "After a marketplace restricts a customer account, what must remain visible and actionable so the customer can understand, preserve, contest, resolve, or escalate?",
    "maturity": "Developed Work Sample",
    "type": "Evidence-Based Product Operations Case",
    "tags": "Customer-resolution pathway · Evidence coding · Affected-interest recovery · Policy/legal boundaries · Pilot and metrics",
    "mode": "product-ops"
  },
  {
    "index": 6,
    "path": "/work/fanme-controlled-growth",
    "title": "FanMe Controlled Growth Pilot: Building a Repeatable Artist-Launch Operating System",
    "question": "Can FanMe use one controlled artist launch to make the fan journey reliable, contain operational risk, and build capability that transfers to the next artist?",
    "maturity": "Developed Work Sample",
    "type": "Controlled Growth & Launch Operations Case",
    "tags": "Launch readiness · Controlled traffic waves · Rights and commitment controls · Recovery · Scale gates and transfer testing",
    "mode": "product-ops"
  },
  {
    "index": 7,
    "path": "/work/datvietvac-ownership-belonging",
    "title": "DatVietVAC: Ownership & Belonging Merchandise Growth Case",
    "question": "Can verified fan contribution persist beyond a purchase or event as ownership, history, or recognition, without turning novelty into uncontrolled cost or operational complexity?",
    "maturity": "Developed Work Sample",
    "type": "Merchandise Growth & IP Commercialization Case",
    "tags": "IP commercialization · Customer-history mechanics · Merchandise/event continuity · Reward economics · Ownership & governance · Pilot and scale gates",
    "mode": "product-ops"
  },
  {
    "index": 8,
    "path": "/work/datvietvac-fandom-cards",
    "title": "DatVietVAC Fandom Cards: From Official Fandom Pack to a Gated Collectibles Product Line",
    "question": "Can an official 12-card fandom pack turn visible existing demand into something fans carry, share, display, and trade in everyday life, then earn repeated drops, a product line, and only later a conditional annual box or collectibles pod?",
    "maturity": "Developed Work Sample",
    "type": "Merchandise Initiative / Gated Product-Line Case",
    "tags": "Observed outside-channel demand · 12-card social inventory · Everyday circulation · Physical manufacturing signature · Pilot economics · Single-SOW production and rights · Earned scale gates",
    "mode": "product-ops"
  },
  {
  "index": 9,
  "path": "/work/vieshop-fan-centred-merchandise-system",
  "title": "VieSHOP: From Campaign Storefront to a Fan-Centred Merchandise System",
  "question": "How can an official store become reliable enough to transact, open enough to explore, and structured enough to learn across artists and IPs?",
  "maturity": "Working V2 · 23 Aug 2026",
  "type": "Independent Product / Commerce Case",
  "tags": "Commerce foundation · Merchandise growth · Artist/IP discovery · Control roadmap",
  "mode": "product-ops"
},
  {
  "index": 10,
  "path": "/work/datvietvac-who-owns-the-fan-promise",
  "title": "DatVietVAC: Who Owns the Fan Promise?",
  "question": "Once VieSHOP accepts a fan transaction, can the selling entity prove what it committed to, trace the obligation through execution, and close it without the customer having to force a response?",
  "maturity": "Case V1.1 · Evidence V1.2 · 31 Aug 2026",
  "type": "Independent Outside-In Operations Case",
  "tags": "Accepted-order accountability · Backlog reconciliation · Customer recovery · State integrity · Artist/IP exposure",
  "mode": "product-ops"
},
  {
    "index": 11,
    "path": "/work/explainable-trust",
    "title": "Explainable Trust: Traceable Case Reconstruction",
    "question": "An interactive showcase of evidence-led case reconstruction: authored scenarios pass application validation and reveal stable identities, revision history, source-linked reasoning, and unresolved gaps.",
    "summary": "An interactive showcase of evidence-led case reconstruction: authored scenarios pass application validation and reveal stable identities, revision history, source-linked reasoning, and unresolved gaps.",
    "maturity": "Interactive Static Showcase",
    "type": "Built Product Prototype",
    "tags": "Local-first case ledger · Source-linked reasoning · Stable-ID correction · Explicit gaps and actions · Provenance graph",
    "mode": "product-ops",
    "evidenceBasis": "Runnable Application · Repository Behavior · Automated Tests · Product Screenshots"
  },
  {
    "index": 12,
    "path": "/work/vietnam-diamond-market-crisis",
    "title": "Vietnam’s 2026 Diamond-Market Crisis",
    "question": "What can be reconstructed through observable events, stakeholder decisions, enterprise responses, and public records, and where does the evidence stop?",
    "maturity": "Research cut-off: 21 July 2026",
    "type": "Evidence-First Case Study",
    "tags": "Claim architecture · Source preservation · Alternative readings · Evidence boundaries",
    "mode": "evidence-first"
  },
  {
    "index": 13,
    "path": "/work/diamond-trust-chain-collapse",
    "title": "Diamond Trust Chain Collapse: When Final Proof Needs Proof",
    "question": "What happens when a certificate compresses a complex trust chain into one market signal, and that signal itself becomes uncertain?",
    "maturity": "Evidence Building",
    "type": "Research Essay",
    "tags": "Trust-chain reconstruction · Guarantee drift · Reverse proof · Recovery architecture",
    "mode": "evidence-first"
  },
  {
    "index": 14,
    "path": "/work/adobe-account-restriction",
    "title": "Adobe Account Restriction: When Enforcement Interrupts the Work",
    "question": "When enforcement interrupts an already-paid work tool, what must remain visible and recoverable beyond the account decision itself?",
    "maturity": "Evidence-First Research",
    "type": "Independent Comparative Case",
    "tags": "Comparative evidence · Workflow continuity · Resolution states · Explainable resolution · Evidence boundaries",
    "mode": "evidence-first"
  },
  {
    "index": 15,
    "path": "/work/pathway-lens-operational-cycles",
    "title": "Pathway Lens: AI Risk, Drift, Evidence, and Recovery Cycles",
    "question": "A working AI research lens for tracing how an output, signal, recommendation, or action becomes reliance, record, execution, transaction, memory, or real-world consequence.",
    "maturity": "Working Model & Framework",
    "type": "AI & Systems Governance",
    "tags": "System Lens · Drift Lens · Pathway Lens · Governance Lens · Recovery",
    "mode": "evidence-first"
  },
  {
    "index": 16,
    "path": "/work/ai-judgment-decisions",
    "title": "Does AI Improve Decisions - or Develop Judgment?",
    "question": "Can AI improve the immediate decision and also strengthen the user’s ability to evaluate evidence and uncertainty independently over time?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Answer-centered vs evidence-centered AI · Delayed transfer · Falsifiers · Safe delegation",
    "mode": "essays"
  },
  {
    "index": 17,
    "path": "/work/ai-apprenticeship",
    "title": "AI Apprenticeship: Before AI Becomes an Actor",
    "question": "Before AI receives operational authority, should it first learn how an organization understands mission, boundaries, evidence, exceptions, and recovery?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Observer-to-actor progression · Contextual learning · Power and surveillance · Human responsibility",
    "mode": "essays"
  },
  {
    "index": 18,
    "path": "/work/zalopay-smes-when-paid-not-done",
    "title": "ZaloPay & SMEs: When Paid Is Not Yet Done",
    "question": "What operational work still begins after a small merchant receives payment?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Share of Operations · Orders and inventory · Cash-flow visibility · Dependency boundaries",
    "mode": "essays"
  },
  {
    "index": 19,
    "path": "/work/metub-creator-economy",
    "title": "METUB & Creator Economy: When Creating Becomes Operating",
    "question": "What infrastructure do creators need when creating becomes a business, and what responsibility does a platform inherit?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Share of Operations · Share of Stability · Creator continuity · Rights, payment, and recovery",
    "mode": "essays"
  },
  {
    "index": 20,
    "path": "/work/momo-ai-paylater",
    "title": "MoMo AI PayLater: Risk Begins After Yes",
    "question": "Can an AI-enabled credit product define success beyond approval and conversion by considering the consequence the user must live with afterward?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Conversion-first vs trust-first · Affordability context · Repayment experience · Long-term trust",
    "mode": "essays"
  },
  {
    "index": 21,
    "path": "/work/artist-fandom-page",
    "title": "Artist Fandom Page & Fan Dashboard",
    "question": "How can fans discover artists, join official communities, receive benefits, buy products, attend events, get support, and return through one clearer relationship layer?",
    "maturity": "Concept Exploration",
    "type": "Concept",
    "tags": "Fan-facing surfaces · Fan ID · Entitlement · Commerce, ticketing, support, and reporting",
    "mode": "concepts"
  },
  {
  "index": 22,
  "path": "/work/zalo-scam-emergency-mode",
  "title": "Zalo Scam Emergency Mode",
  "question": "Can Zalo make account, conversation, unsafe-object, report, and payment context understandable before trust becomes an irreversible transfer—and preserve that context through recovery?",
  "maturity": "Reader Edition · 7 Sep 2026",
  "type": "Independent Outside-In Trust & Safety Case",
  "tags": "Conversation safety · Evidence continuity · Zalo–Zalopay handoff · Recovery ownership",
  "mode": "concepts"
},
  {
    "index": 23,
    "path": "/work/vieworld",
    "title": "VieWorld: Independent Fandom Ecosystem & Working Prototype",
    "question": "What makes a fandom feel like a place, and what must remain coherent when a Moment ends?",
    "maturity": "Working Prototype · Source audit 4 Oct 2026",
    "type": "Independent Ecosystem & Product Build",
    "tags": "Free community · Moment and continuity · Scoped access · Ownership and expression · Operating authority",
    "mode": "product-ops",
    "evidenceBasis": "Authored presentations · Product screenshots · Reported prototype audit"
  }
];

const caseDocuments = {
  "/work/vinamilk-trusted-nutrition": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj",
    "fileName": "vinamilk_paper_1_trusted_nutrition_product_service_discovery.docx",
    "label": "📄 Preview: vinamilk_paper_1_trusted_nutrition_product_service_discovery.docx ↗",
    "title": "Vinamilk Paper 1: Trusted Nutrition Product-Service Discovery"
  },
  {
    "type": "paper",
    "driveId": "1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5",
    "fileName": "vinamilk_paper_2_everyday_milk_delivery_operations_scale.docx",
    "label": "📄 Preview: vinamilk_paper_2_everyday_milk_delivery_operations_scale.docx ↗",
    "title": "Vinamilk Paper 2: Everyday Milk Delivery Operations & Scale"
  },
  {
    "type": "paper",
    "driveId": "13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh",
    "fileName": "vinamilk_paper_3_beyond_the_market_capability_allocation_governance.docx",
    "label": "📄 Preview: vinamilk_paper_3_beyond_the_market_capability_allocation_governance.docx ↗",
    "title": "Vinamilk Paper 3: Beyond-the-Market Capability Allocation Governance"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj\" data-title=\"vinamilk paper 1 trusted nutrition product service discovery (PDF)\">📄 vinamilk paper 1 trusted nutrition product service discovery (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5\" data-title=\"vinamilk paper 2 everyday milk delivery operations scale (PDF)\">📄 vinamilk paper 2 everyday milk delivery operations scale (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh\" data-title=\"vinamilk paper 3 beyond the market capability allocation governance (PDF)\">📄 vinamilk paper 3 beyond the market capability allocation governance (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n> **This case started with a quiet-store observation. The first instinct was to redesign the store; the research became more interesting when I asked whether the product and occasion had been proven before the channel was redesigned.**\n> \n\n> **Type:** Product-Service Discovery & Operating Research\n**Stage:** Developed outside-in research\n**Evidence basis:** Direct observation, public company information, comparative product and operating patterns, and clearly labeled hypotheses\n**Last updated:** July 2026\n**Boundary:** Current demand, internal feasibility, and implementation readiness remain unvalidated. Each later stage depends on evidence produced by the earlier gate.\n> \n\n## Case at a glance\n\n- **Observation:** Some Vinamilk-branded stores appeared quiet, with limited reasons for customers to stay, return, or consume products immediately.\n- **Initial instinct:** Redesign the retail experience with seating, served drinks, takeaway, delivery, and a stronger digital layer.\n- **Reframe:** Before changing the channel, determine whether there is a product and consumption occasion that customers would willingly pay for again.\n- **Core decision:** Discover a repeatable trusted-nutrition proposition first; choose the operating format only after the proposition earns evidence.\n- **Boundary:** Current demand, internal feasibility, and implementation readiness remain unvalidated.\n\n## Decision path\n\n```\nQuiet-store observation\n        ↓\nProduct architecture\nWhat form is worth testing?\n        ↓\nOccasion & paid repeat\nWho buys, when, why, at what price, and do they return?\n        ↓\nIndustrialization\nCan valued attributes survive simplification?\n        ↓\nChannel choice\nStore / Kiosk / Partner / Other format\n        ↓\nScale decision\nProceed / Narrow / Redirect / Stop\n```\n\n> **Test the product architecture first, the occasion second, the operating model third, and the channel format fourth.**\n> \n\n---\n\n## Why trust changes the problem\n\n> **A nutrition product is not merely a formulation or a drink. It is a trust package whose value depends on the integrity, transparency, and consistency of every step from nutritional science to consumption.**\n> \n\nA beverage chain may primarily compete through taste, convenience, price, and environment. Vinamilk carries a different customer expectation.\n\nCustomers may also ask:\n\n- What is the drink made from?\n- Is it fresh milk, powder, concentrate, or a hybrid?\n- How much sugar and protein does one serving contain?\n- Is the water and ice controlled?\n- Was it prepared to a standard?\n- How long is it safe and enjoyable to consume?\n- Does the process preserve the nutritional promise?\n\nFor Vinamilk, trust is not a communication layer added after product development. It is an operating outcome that must be designed into the entire product-service system.\n\n---\n\n## Stage 1 — Discover what deserves to exist\n\nThe first decision is:\n\n> **What trusted nutrition proposition deserves to exist?**\n> \n\nIt does not assume that “Everyday Milk,” a particular store format, or even liquid milk is the correct answer.\n\nIt establishes a discovery program for testing:\n\n- Liquid, powder, concentrate, and hybrid product architectures.\n- Taste, texture, ice compatibility, and consumption-window stability.\n- Nutritional, safety, and trust integrity.\n- Customer occasion, willingness to pay, and paid repeat behavior.\n- Premium and everyday propositions.\n- Simplification and industrialization potential.\n- Sustainability implications across ingredients, packaging, waste, water, energy, and cold chain.\n\nIts purpose is twofold:\n\n1. Produce a decision about the current proposition.\n2. Establish the foundations of a reusable organizational capability for evaluating future trusted-nutrition opportunities through evidence rather than assumption.\n\nThe discovery program may legitimately conclude that the proposition should stop, remain premium-only, move to a different channel, or advance to operating design.\n\n> **Gate:** Is there a validated Product-Occasion Brief strong enough to justify operating design?\n> \n\n---\n\n## Stage 2 — Preserve what customers valued\n\nThis stage activates only after Stage 1 produces an authoritative, validated Product-Occasion Brief.\n\nThe next decision is:\n\n> **How can Vinamilk deliver, learn from, and scale the validated proposition without losing its nutritional, trust, or operational integrity?**\n> \n\nIt covers:\n\n- Innovation and everyday operating formats.\n- Product industrialization and serving standards.\n- Store, kiosk, partner-channel, and other format choices.\n- Product, recipe, nutrition, and trust master data.\n- SOP, training, QA, audit, and traceability.\n- Make / Buy / Customize / Partner / Reuse decisions.\n- Fulfilment, pickup, delivery, and digital capabilities.\n- KPI, guardrails, stage gates, and replication.\n- Sustainability controls and future circular options.\n\nThe store remains important, but it is no longer treated as the default solution. It may be a laboratory, a channel, a learning environment, or one format among several.\n\n> **Gate:** Can the proposition survive simplification, repeated delivery, and real operating constraints without losing the attributes that created trust and repeat behavior?\n> \n\n---\n\n## Operating choice — Innovation Store vs. Everyday Format\n\nThe distinction is functional, not decorative.\n\n### Milk Innovation / Occasion Development Store\n\nIts job is to learn:\n\n- What taste and sensory attributes customers value.\n- Which nutrition and trust signals create confidence.\n- Which occasions generate paid repeat behavior.\n- Which formulations and preparation methods are worth industrializing.\n- Which propositions belong in other channels.\n\nIt optimizes for **preference and learning**.\n\n### Everyday / General Format\n\nIts job is to deliver a validated proposition:\n\n- At an accessible price.\n- With acceptable and consistent taste.\n- Through a fast, low-variance workflow.\n- With clear nutritional information.\n- With controlled waste and contribution economics.\n\nIt optimizes for **repeatability and habit**.\n\nThe key handoff is the Industrialization Gate:\n\n> Can the system simplify the recipe without losing the attributes that caused customers to trust, value, and repeat it?\n> \n\n---\n\n## What this could become strategically\n\nThe largest opportunity may not be opening a new store chain.\n\nVinamilk is already strong in dairy science, manufacturing, quality control, supply chain, and national distribution. The proposed capability extends that chain beyond the retail transaction:\n\n```\nNutrition Science\n        ↓\nProduct Architecture\n        ↓\nIndustrialized Preparation\n        ↓\nConsumption Occasion\n        ↓\nCustomer Behavior and Confidence\n        ↓\nContinuous Product Learning\n        ↺\n```\n\nThis creates a form of **occasion intelligence** that traditional sell-in data cannot provide:\n\n- What customers choose at different times and contexts.\n- Which sensory attributes create repeat.\n- Which nutrition information affects choice.\n- Which products work in premium versus everyday formats.\n- Which occasions belong in stores, gyms, campuses, hospitals, offices, or partner channels.\n\nThe strategic capability is not an app or a store network. It is the ability to repeatedly create, test, preserve, and distribute trusted nutrition propositions across multiple occasions and channels.\n\n> **Discovery outputs become organizational capability only when they are documented, governed, and designated as the authoritative inputs for subsequent investment decisions.**\n> \n\n---\n\n## Decision, not destination\n\nSuccess is not defined only as proving that an Everyday Milk retail concept should scale.\n\nA disciplined stop decision can also be successful if the evidence shows that:\n\n- Customers prefer consuming milk at home.\n- The proposition is attractive only within a premium niche.\n- A gym, campus, hospital, office, or convenience channel is superior to a standalone store.\n- Taste cannot survive industrialization at an acceptable price.\n- Trust, safety, waste, or economics cannot be preserved reliably.\n\nThe value of the program is its ability to reduce uncertainty before irreversible investment.\n\n---\n\n- Research artifacts — full discovery and operating papers\n    \n    The attached papers preserve the detailed discovery design, operating blueprints, assumptions, and stage-gate logic behind the public case.\n    \n    <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj\" data-title=\"vinamilk paper 1 trusted nutrition product service discovery.docx (PDF)\">📄 vinamilk paper 1 trusted nutrition product service discovery.docx (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n    \n    <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5\" data-title=\"vinamilk paper 2 everyday milk delivery operations scale.docx (PDF)\">📄 vinamilk paper 2 everyday milk delivery operations scale.docx (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n    \n\n## Conditional extension — Beyond the Market\n\n> **This is not part of the current product-scale recommendation.** It becomes relevant only if a trusted-nutrition capability eventually demonstrates sustained product integrity, operating reliability, traceability, and stability across real channels.\n> \n\n### Capability Allocation Governance for Trusted Nutrition Access\n\nThis extension asks what could happen after reliability has been earned, not how the current proposition should be launched or scaled.\n\nThe progression is:\n\n```\nPaper I\nDiscover what trusted nutrition proposition deserves to exist\n        ↓\nPaper II\nPreserve, deliver, and scale it reliably\n        ↓\nDemonstrated operating evidence\n        ↓\nPaper III\nGovern how legitimate access may be expanded beyond ordinary market participation\n```\n\nPaper III therefore does not ask how to sell the proposition more widely. It asks:\n\n> **Once a trusted nutrition capability has earned reliability and trust, under what governance may legitimate access to its outputs be expanded beyond the market?**\n> \n\n---\n\n### The Three-Layer Architecture\n\n```\nCapability\nWhat has been proven, and who must steward it?\n        ↓\nAllocation\nUnder what authority, funding, and rules may access be granted?\n        ↓\nAccess\nHow can eligible people receive value without being forced to become customers?\n```\n\nThe defining principle is:\n\n> **Capabilities remain stewarded. Only legitimate access is allocated.**\n> \n\nVinamilk would continue to steward the integrated capability bundle: nutrition science, approved product architecture, manufacturing, quality assurance, logistics, traceability, serving standards, and operating integrity.\n\nInstitutions would not receive ownership of those individual capabilities. They would participate through governed pathways that define purpose, eligibility, funding, authorized use, and accountability.\n\n---\n\n### Comparative Capability Research\n\nElfie is used only as an analytical reference because it illustrates how users, sponsors, and health-service partners may be coordinated through governed institutional pathways.\n\nThe objective is not to replicate Elfie’s product, app, or operating model. Elfie primarily coordinates capabilities distributed across an ecosystem, while Vinamilk directly owns and operates significant parts of the nutrition, manufacturing, quality, and distribution capability being considered.\n\nThe transferable research object is therefore **governance logic**, not features or technology.\n\n> **Compare capabilities, not appearances.**\n> \n\n---\n\n### Nutrition Credit — Suất Dinh Dưỡng\n\nMultiple funding sources and institutional programs create a normalization problem. Company funding, employer sponsorship, institutional support, public co-funding, philanthropy, customer contribution, and cross-subsidy may all operate differently in the backend.\n\nA common access unit may therefore be required at the system and user layers.\n\n> **Nutrition Credit is introduced to operationalize allocation governance. It is not the research object itself.**\n> \n\nThe proposed user-facing Vietnamese name is:\n\n> **Suất Dinh Dưỡng**\n> \n\nA Nutrition Credit is defined as:\n\n> **A standardized and equal unit of trusted-nutrition access.**\n> \n\nPrograms may grant different quantities of credits and apply different authorized pathways, but the value of one credit must not change according to the person receiving it or the source funding it.\n\n```\nNutrition Credit\n        ↓\nEqual Unit Value\n        ↓\nProgram Rules\n        ↓\nAuthorized Redemption\n```\n\nThe system may eventually support three broad access pathways:\n\n- Personal redemption through ordinary commercial participation.\n- Sponsored institutional access for eligible groups.\n- Voluntary contribution to verified access programs.\n\nHowever, receiving an institutional entitlement must not require a person to become a commercial customer, install an app, provide marketing consent, or disclose more personal information than is necessary.\n\n> **No app should not mean no access.**\n> \n\n---\n\n### Purchase Accrual Principle\n\nWhen Nutrition Credits are earned through purchases, issuance should be proportional to actual eligible economic value rather than the number of drinks or an arbitrary transaction threshold.\n\n```\nCredits earned\n=\nEligible Net Spend\n× Base Reward Rate\n÷ Reference Settlement Value\n× Approved Multiplier\n```\n\nThe design choice is:\n\n> **Proportional by net paid value, accumulated fractionally, with limited and funded bonuses.**\n> \n\nThis prevents cliff effects, basket splitting, uncontrolled liability, and inconsistent unit value.\n\nPromotions may change the number of credits issued, but they must never change the value of the unit itself.\n\n---\n\n### Architectural Boundary Conditions\n\nPaper III is protected by six boundary conditions:\n\n1. **Capabilities remain stewarded. Only legitimate access is allocated.**\n2. **Nutrition Credit operationalizes governance; it does not replace the research object.**\n3. **Equal unit value does not mean identical permissions.**\n4. **Institutional participation does not imply clinical endorsement.**\n5. **Capability stewardship must not override institutional mandate.**\n6. **Allocation is not fulfilment. Fulfilment is not automatically impact.**\n\nPublic-value evidence must follow the full pathway:\n\n```\nCommitted\n    ↓\nAllocated\n    ↓\nRedeemed\n    ↓\nFulfilled\n    ↓\nVerified\n    ↓\nImpact\n```\n\nThe stages must not be collapsed for reporting or communication.\n\n---\n\n### Constitutional Architecture, Not Software Architecture\n\nPaper III does not prescribe ledger design, identity technology, API patterns, system topology, or fraud models.\n\nIt defines constitutional requirements that any future technical architecture must preserve:\n\n- Equal unit value with traceable provenance.\n- Visible usage boundaries.\n- Legitimate non-app access.\n- Auditable state transitions.\n- Data minimization.\n- Scoped institutional authority.\n- Prevention of duplicate issuance, duplicate redemption, and silent value changes.\n\n> **Implementation must absorb governance complexity without transferring it to user cognition or weakening legitimate access.**\n> \n\nDetailed technical architecture should be developed only after the activation gate has been passed.\n\n---\n\n### What Paper III Is — and Is Not\n\nPaper III is a governance concept for allocating legitimate access to the outputs of a proven trusted-nutrition capability.\n\nIt is not:\n\n- A CSR campaign.\n- An ESG report.\n- A charity program.\n- A loyalty-system specification.\n- A government policy proposal.\n- A clinical nutrition protocol.\n- A software architecture document.\n\nIts purpose is to define when, why, and under whose authority access may be expanded without weakening product integrity, institutional legitimacy, individual dignity, or the trust established through Papers I and II.\n\n> **Paper I asks what people should be able to trust. Paper II asks how that trust can survive scale. Paper III asks how legitimate access to a capability that has earned trust may be expanded beyond the market.**\n> \n\n---\n\n### Full Paper\n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh\" data-title=\"vinamilk paper 3 beyond the market capability allocation governance.docx (PDF)\">📄 vinamilk paper 3 beyond the market capability allocation governance.docx (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n---\n\n## Current Limitations\n\nThis case is built without access to Vinamilk’s internal traffic, revenue, customer research, formulation pipeline, cost structure, quality systems, channel economics, ownership model, or implementation capacity.\n\nIt therefore does not establish:\n\n- that the observed store pattern is representative of the retail network;\n- that an immediate-consumption milk proposition has sufficient paid demand;\n- that valued sensory and nutritional attributes can survive industrialization;\n- that a standalone store is superior to other channels;\n- that the proposed operating architecture is feasible within current systems;\n- or that the governance concept in Paper III should be activated.\n\nPaper III is especially conditional. It should remain dormant unless Papers I and II produce sustained evidence of product integrity, operating reliability, traceability, and institutional readiness.\n\n## Next Validation Step\n\nThe next step is not format selection. It is a bounded Product-Occasion Discovery cycle:\n\n1. test multiple product architectures rather than assuming liquid milk;\n2. identify concrete consumption occasions and competing alternatives;\n3. measure paid choice and repeat behavior, not stated interest alone;\n4. test whether taste, nutrition, safety, and trust survive simplification;\n5. compare store, kiosk, delivery, institutional, and partner-channel economics;\n6. make an explicit stop, narrow, reposition, or advance decision before operating-scale investment.\n\n## Continue Reading\n\n[Elfie — Trust-Safe Activation](/work/elfie-trust-safe-activation) — a product strategy case on activation, role boundaries, consent, data quality, and execution.\n\n[Creator Platform Operating Model — MFan](/work/creator-platform-operating-model) — a multi-party operating model built around shared state, ownership, and recovery.\n\n[Work Library](/work) · [Portfolio Home](/)"
  },
  "/work/creator-platform-operating-model": {
    "assets": [
      {
        "type": "paper",
        "driveId": "11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh",
        "fileName": "MFan_Platform_Fragmentation__Trust_Chain_Integration.pdf",
        "label": "📄 Preview: MFan_Platform_Fragmentation__Trust_Chain_Integration.pdf ↗",
        "title": "MFan Platform Fragmentation & Trust Chain Integration"
      }
    ],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh\" data-title=\"MFan Platform Fragmentation  Trust Chain Integration (PDF)\">📄 MFan Platform Fragmentation  Trust Chain Integration (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n> **A fan can move through an artist page, payment flow, ticketing partner, merch order, and support channel without any one of those surfaces being broken. The trouble starts when identity, entitlement, payment, fulfilment, and support stop carrying the same operating truth.**\n> \n\n> **Type:** Outside-in Operating Model\n**Stage:** Working Model\n**Evidence basis:** Public product signals, observed journeys, market patterns, and operational inference\n**Last updated:** August 2026\n**Boundary:** A proposed outside-in model requiring validation against actual workflows, systems, constraints, and incident data.\n> \n\n> **Supporting artifact:**\n> \n> \n> <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh\" data-title=\"MFan Platform Fragmentation & Trust Chain Integration.pdf (PDF)\">📄 MFan Platform Fragmentation & Trust Chain Integration.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n> \n\n---\n\n## The operating problem\n\nA fan may encounter one creator ecosystem through an artist page, membership layer, campaign surface, merch store, ticketing partner, payment provider, logistics provider, and support channel. None of those surfaces has to be broken for the overall journey to become difficult.\n\nThe problem appears when state stops travelling with the fan. Identity may be known in one place, payment in another, entitlement somewhere else, while fulfilment and support each hold their own version of what happened. The same fan can then be asked to prove a purchase or benefit repeatedly because the systems around the journey do not preserve one reliable operating record.\n\nThat matters more in fandom commerce because the transaction may also create access, recognition, membership status, event participation, or another promised benefit. A missing ticket, failed VIP benefit, duplicated account, delayed order, payment mismatch, or unclear refund can therefore affect the fan–artist relationship as well as the transaction itself.\n\nThis case asks a narrower operating question: **what is the minimum shared layer needed so separate surfaces can preserve the same identity, entitlement, transaction state, owner, evidence, and recovery record where those states need to agree?**\n\n## Operating diagnosis\n\nThe fragmentation is easier to inspect by following the state that should remain consistent across each pathway.\n\n| Pathway | Where continuity breaks | Visible consequence |\n| --- | --- | --- |\n| **Identity** | The same fan exists as different records across membership, commerce, ticketing, events, or support. | Repeated verification, duplicate profiles, broken history, weak cross-surface support. |\n| **Entitlement** | A purchase or membership creates a benefit that is not visible where it must be honored. | Manual proof, missed benefits, access disputes, event-entry problems. |\n| **Payment / Order** | Payment, order, vendor, and support systems disagree on transaction state. | Paid-but-not-recognized cases, manual reconciliation, refund or fulfilment delay. |\n| **Ticket / Access** | Ticket ownership, identity, membership eligibility, and venue access are handled separately. | Invalid or duplicated access, unclear VIP eligibility, slow onsite recovery. |\n| **Fulfilment / Support** | Support lacks the order, entitlement, vendor, or logistics context needed to resolve the case. | Repeated explanation, slow routing, inconsistent status, weak root-cause visibility. |\n| **Reporting** | Campaign, commerce, ticketing, support, and settlement data remain separate. | Slow decisions, disputed results, difficult campaign comparison, weak partner visibility. |\n\n## Shared operating layer\n\nA shared operating layer is useful only where separate surfaces need to preserve the same identity, entitlement, transaction state, owner, or recovery record. It does not require replacing every artist page, vendor, payment provider, ticketing partner, or workflow.\n\nThe minimum working model has six capabilities:\n\n### 1. Central Fan ID\n\nA shared identity reference across membership, commerce, ticketing, events, and support. It links only the identifiers and states needed for continuity, entitlement, service, reporting, and recovery; it is not a reason to centralize every available fan data point.\n\n### 2. Entitlement Ledger\n\nA shared record of what access, benefit, item, or status was created by a membership, payment, campaign, or partner action, and its current state. The purpose is simple: when a benefit is questioned, different teams should be able to see whether the promise exists, whether it has been used, and whether it is disputed or recovered.\n\n### 3. Payment and Order Reconciliation\n\nA layer that aligns payment, order, entitlement, fulfilment, and refund states. It is most useful for exceptions such as payment succeeded but no order was created, an order exists without its entitlement, a refund is in progress but invisible to support, or a vendor has no fulfilment instruction.\n\n### 4. Ticketing and Event Access Sync\n\nA shared view of ticket identity, fan identity, membership eligibility, transfer state, usage, and onsite recovery authority. The operating question is whether an authorized operator can determine what access should exist and recover it quickly when the venue experience fails.\n\n### 5. Fulfilment and Customer Support Integration\n\nA support record that carries enough fan, order, payment, entitlement, vendor, shipment or event, communication, owner, and next-action context to resolve the issue without asking the fan to reconstruct the pathway.\n\n### 6. Artist and Campaign Reporting\n\nA partner view that brings campaign demand, benefit delivery, transaction and settlement state, ticket or attendance signals, fulfilment, support incidents, unresolved risk, and recovery outcomes into one operating picture. Confirmed data should remain distinguishable from estimates or incomplete partner feeds.\n\n## Core workflow map\n\nA simplified pathway is:\n\n> Fan enters an artist or campaign surface\n> \n> \n> → Identity is recognized or created\n> \n> → Fan takes a membership, purchase, or event action\n> \n> → Payment and order are reconciled\n> \n> → Entitlement is created\n> \n> → Vendor, ticketing, or fulfillment action is triggered\n> \n> → Status remains visible to support and operator teams\n> \n> → Artist or campaign reporting is updated\n> \n> → Failure enters a recovery pathway\n> \n> → Outcome updates the operating record\n> \n\nThe critical design question is not whether every step uses one tool.\n\nIt is whether the steps preserve shared state, ownership, and evidence.\n\n## Who owns the next action?\n\nThe exact organization structure is unknown, so this is a proposed responsibility split rather than a claim about MFan’s current teams.\n\n| Operating responsibility | Primary owner |\n| --- | --- |\n| Cross-surface continuity, shared status definitions, cross-team incidents, recurring operating review | **Platform Operations** |\n| Fan identity, entitlement, integrations, permissions, instrumentation, operator tooling | **Product & Engineering** |\n| Payment reconciliation, settlement, refunds, financial evidence, payment exceptions | **Finance & Payments** |\n| Ticketing, commerce, vendor fulfilment, partner execution, domain-specific exceptions | **Domain Operations** |\n| Fan communication, case routing, visible next action, recovery confirmation, recurring pain-point feedback | **Customer Support** |\n| Artist commitments, benefit definition, partner expectations, reporting interpretation, trust escalation | **Artist & Partnerships** |\n\n<aside>\n↪️\n\n**Handoff rule:** Several teams may contribute to one case, but one team should hold the next action until another owner explicitly accepts the handoff.\n\n</aside>\n\n## Growth logic — hero campaigns and indie density\n\nLarge artist campaigns can create strong demand and visible platform moments.\n\nThey may also create operational peaks, partner-specific customization, and high public consequence.\n\nA scalable creator platform also needs a minimum operating package for smaller or independent creators.\n\n### Minimum Indie Operating Kit\n\nA possible minimum package includes:\n\n- verified creator profile;\n- basic fan identity;\n- membership or supporter tier;\n- simple entitlement rules;\n- payment and settlement status;\n- campaign or store template;\n- basic support route;\n- standard reporting;\n- clear escalation boundary.\n\nThe strategic question is not whether every creator receives the same service.\n\nIt is which operating components must remain standard so the platform can scale without multiplying hidden manual work.\n\n## Implementation pathway\n\n### Phase 0 — Audit and baseline\n\nMap:\n\n- current surfaces;\n- user journeys;\n- identity systems;\n- vendors;\n- payment states;\n- entitlement rules;\n- support channels;\n- reporting flows;\n- recurring failure cases.\n\nOutput:\n\n- current-state pathway map;\n- shared status definitions;\n- top trust-critical breakdowns;\n- integration and ownership gaps.\n\n### Phase 1 — Trust stabilization\n\nPrioritize visible operational failures before building a large architecture.\n\nExamples:\n\n- payment/order mismatch;\n- missing entitlement;\n- ticket-access failure;\n- unclear support owner;\n- missing refund status;\n- incomplete vendor escalation.\n\nOutput:\n\n- exception queue;\n- visible ownership;\n- standard recovery messages;\n- evidence-preservation rules;\n- recurring incident review.\n\n### Phase 2 — Fan ID and entitlement foundation\n\nBuild or connect:\n\n- cross-surface identity reference;\n- entitlement ledger;\n- permission model;\n- support lookup;\n- event and audit history.\n\n### Phase 3 — Commerce, ticketing, and fulfillment integration\n\nConnect:\n\n- payment and order status;\n- ticket identity and access;\n- vendor and shipment status;\n- refunds;\n- partner-facing exceptions.\n\n### Phase 4 — Control tower and reporting\n\nCreate:\n\n- cross-workstream operating view;\n- campaign health;\n- unresolved incidents;\n- settlement visibility;\n- partner reporting;\n- recurring improvement loop.\n\n## Metrics\n\nThe metrics should measure continuity and recovery, not only campaign volume.\n\n### Transaction clarity\n\n- percentage of payments matched to orders;\n- percentage of orders with visible status;\n- pending-state age;\n- refund-status visibility.\n\n### Entitlement accuracy\n\n- entitlement creation success;\n- missing or duplicate entitlement rate;\n- access failure rate;\n- time to entitlement correction.\n\n### Recovery efficiency\n\n- time to identify owner;\n- time to first useful response;\n- time to resolution;\n- repeated-contact rate;\n- percentage of cases with preserved evidence;\n- customer-confirmed recovery.\n\n### Fulfillment reliability\n\n- on-time fulfillment;\n- exception rate;\n- vendor response time;\n- unresolved shipment age.\n\n### Platform scalability\n\n- manual cases per campaign;\n- manual cases per creator;\n- standard-workflow adoption;\n- integration coverage;\n- reporting preparation time.\n\nThese are proposed operating metrics, not known MFan baselines.\n\n## Risks and trade-offs\n\n### Vendor lock-in\n\nConnecting more partners can create dependency on their APIs, data quality, and operating discipline.\n\n### Identity error\n\nA false merge can expose private information or assign benefits to the wrong person.\n\n### Over-centralization\n\nA shared layer can improve continuity while creating a single point of operational failure.\n\n### Support overload\n\nBetter visibility may initially reveal more unresolved issues than the current team can handle.\n\n### Overbuild risk\n\nA full platform architecture may be unnecessary if the highest-impact failures can be solved through lighter reconciliation and operating standards.\n\n### Creator autonomy\n\nStandardization can reduce fragmentation but should not erase creator-specific identity, community norms, or commercial models.\n\n## What I would validate first\n\n1. Which journeys create the highest fan trust cost?\n2. How many identity systems currently exist?\n3. Where do payment, order, entitlement, and refund status diverge?\n4. Which issues require the fan to provide proof that the platform should already have?\n5. Which vendors can provide reliable status feeds?\n6. Who owns cross-surface incidents today?\n7. Which operating components can be standardized across creators?\n8. What internal constraints make a shared layer difficult?\n9. Which data should remain outside the shared layer?\n10. What recovery outcome matters most to artists and fans?\n\n## Related concept\n\n> \n> \n> \n> [Artist Fandom Page & Fan Dashboard](/work/artist-fandom-page)\n> \n\nThis related page explores how parts of the operating model could appear as a fan-facing product experience.\n\nIt is a Product Concept, not validation of the operating model.\n\n## What this case demonstrates\n\nThis work sample demonstrates an ability to:\n\n- distinguish interface fragmentation from operating fragmentation;\n- reconstruct a multi-party service pathway;\n- define shared status and ownership needs;\n- connect product infrastructure with operations;\n- prioritize trust stabilization before full rebuild;\n- propose a phased operating model;\n- define validation questions before implementation.\n\n## Current limitations\n\nThis case is based on public product signals, observed journeys, market patterns, and operating inference.\n\nIt does not establish:\n\n- MFan’s current internal architecture, roadmap, or operating priorities;\n- the actual number or severity of identity, entitlement, payment, ticketing, fulfilment, support, or reporting failures;\n- whether existing systems already solve parts of the proposed model;\n- the feasibility, cost, organizational ownership, or sequencing of implementation;\n- that a centralized architecture is preferable to lighter operating standards, reconciliation, or partner integration.\n\nThe proposed Fan ID, entitlement ledger, reconciliation layer, and control-tower direction are hypotheses to validate—not instructions to rebuild the company.\n\n## Next validation step\n\nThe next step is internal discovery, not immediate full-scale implementation.\n\nA practical validation sequence would be:\n\n1. map the current fan and partner pathways across surfaces, systems, and vendors;\n2. identify the highest-cost recurring breakdowns and who currently absorbs the recovery burden;\n3. compare lightweight operating fixes with deeper shared-infrastructure needs;\n4. validate data, authority, privacy, and ownership boundaries;\n5. prioritize one bounded pathway where improved continuity can be measured before expanding the model.\n\n## Final takeaway\n\n> **The platform becomes more than a collection of campaigns when identity, entitlement, payment, fulfillment, support, and reporting can remain connected through both success and failure.**\n> \n\nThe value of the model is not integration for its own sake. It is preserving one understandable and recoverable operating pathway across fans, artists, partners, and internal teams.\n\n---\n\n## Continue Reading\n\n[Artist Fandom Page & Fan Dashboard](/work/artist-fandom-page) — the fan-facing companion concept.\n\n[Post-Signing Artist / Label Operations](/work/post-signing-artist-label-operations) — the partnership and execution layer after an agreement is signed.\n\n[Work Library](/work) · [Portfolio Home](/)"
  },
  "/work/elfie-trust-safe-activation": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp",
    "fileName": "Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx",
    "label": "📄 Preview: Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx ↗",
    "title": "Elfie Product Case: Trust-Safe Activation (V4)"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp\" data-title=\"Pham Thanh Phu Elfie Product Case Trust Safe Activation v4 (PDF)\">📄 Pham Thanh Phu Elfie Product Case Trust Safe Activation v4 (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n> **Elfie’s public product surface spans more than one user role: self-monitoring, sponsored programs, research participation, and professional workflows. That makes activation interesting because reaching first value is only useful if the user still understands which role they are in, what data is moving, and what remains under their control.**\n> \n\n> **Type:** Product Strategy Work Sample\n**Stage:** Developed Work Sample\n**Evidence basis:** Public company materials, reference-product patterns, and product inference\n**Last updated:** July 2026\n**Boundary:** Internal baselines, roadmap, contracts, clinical maturity, regulatory interpretation, and data architecture are unknown; numeric targets and sequencing remain hypotheses.\n> \n\n## Reading Route\n\n**Quick orientation:** Executive summary → Product diagnosis → North-star direction → MVP roadmap\n\n**Product logic:** Trust-Safe Activation pathway → Product components → Metrics and impact hypotheses\n\n**Execution review:** Experiment set → Instrumentation → Roadmap → Risks and validation requirements\n\n**Decision lens:** Improve first value and retained routine without increasing role confusion, coerced consent, dishonest reporting, unsafe sharing, or downstream overclaiming.\n\n---\n\n## Executive summary\n\nPublic materials reviewed for this case present Elfie as more than a free health-rewards application.\n\nThe broader product surface appears to include consumer self-monitoring, sponsor-funded health programs, research or real-world-evidence use cases, and professional or care-related workflows.\n\nThe product challenge is therefore not only user acquisition.\n\nIt is whether the product can turn free access, rewards, self-reported behavior, program participation, research consent, reporting, and professional workflows into a low-friction system that remains understandable and trustworthy to users.\n\nThis case proposes **Trust-Safe Activation** as a product direction:\n\n> Help users reach first health value quickly, make role and data boundaries visible at the moment they matter, improve routine and data quality, and translate retained behavior into useful partner or care outcomes without weakening user control.\n> \n\nThe proposal includes:\n\n- a bounded activation funnel;\n- progressive trust mechanics;\n- event instrumentation;\n- data-quality and reward guardrails;\n- reactivation flows;\n- a patient-controlled health summary;\n- partner-level reporting hypotheses;\n- a 0–12 week MVP roadmap.\n\nAll numeric targets are directional hypotheses to be replaced by internal baseline data.\n\n## Product context\n\nThe product may need to serve several roles.\n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp\" data-title=\"Pham Thanh Phu Elfie Product Case Trust Safe Activation v4.docx (PDF)\">📄 Pham Thanh Phu Elfie Product Case Trust Safe Activation v4.docx (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n### Consumer self-monitoring\n\nPossible needs:\n\n- medication reminders;\n- measurement tracking;\n- symptom or behavior logs;\n- refill reminders;\n- health reports;\n- rewards;\n- family support.\n\nPrimary product question:\n\n> Can the user reach one useful health action quickly and build a repeatable routine?\n> \n\n### Sponsor-funded programs\n\nPossible participants:\n\n- pharmaceutical partners;\n- insurers;\n- employers;\n- public-health organizations;\n- hospitals or care partners.\n\nPrimary product question:\n\n> Can the product create program value without making the user feel that a sponsor is invisibly observing or controlling personal behavior?\n> \n\n### Research participation\n\nPossible needs:\n\n- separate consent;\n- participation state;\n- withdrawal;\n- data-quality visibility;\n- audit trail;\n- cohort reporting.\n\nPrimary product question:\n\n> Can research participation remain distinguishable from ordinary app use?\n> \n\n### Professional or care workflows\n\nPossible public directions include pre-visit support, summaries, documentation, evidence support, or workflow assistance.\n\nPrimary product question:\n\n> Can patient-generated information become useful to a professional without being mistaken for diagnosis, verified clinical truth, or an instruction that bypasses professional review?\n> \n\nThe same person may move between roles.\n\nThey may be:\n\n- a general app user;\n- a participant in a sponsored program;\n- a research participant;\n- a family-sharing user;\n- a patient sharing a report;\n- a person whose self-reported data enters a professional workflow.\n\nRole clarity is therefore a product requirement, not only a policy requirement.\n\n## Product diagnosis\n\nElfie’s public model can be interpreted as commercially coherent:\n\n- users receive a free health companion;\n- rewards may reinforce engagement;\n- partners support programs;\n- structured behavior may create research, reporting, or care value.\n\nThe model is also trust-sensitive.\n\nThe main product risk is not necessarily that a privacy policy is absent.\n\nIt is that users may not understand their role, sponsor, data use, or sharing boundary at the exact moment those conditions change.\n\n### Problem statement\n\n> How might Elfie improve activation quality and downstream program value while helping users understand their role, why the product is free, what data is used, what is not shared, and which actions remain under their control?\n> \n\n## Goals and non-goals\n\n### Goals\n\n- reduce time to first useful health action;\n- improve D7 and D30 routine formation;\n- preserve honest self-reporting;\n- make role and consent transitions visible;\n- create useful patient-controlled summaries;\n- improve partner-level measurement without exposing unnecessary personal detail;\n- create clear recovery when a user enters the wrong role or shares the wrong information.\n\n### Non-goals\n\n- diagnosing or treating a condition;\n- replacing clinician judgment;\n- maximizing consent or data sharing;\n- turning every user into a research participant;\n- treating rewards claimed as the primary success metric;\n- assuming that all public product surfaces are equally mature or integrated.\n\n## Stakeholder and role-boundary map\n\n### Patient or general user\n\nWants:\n\n- simple setup;\n- useful reminders;\n- understandable rewards;\n- confidence and control.\n\nRisks:\n\n- tracking fatigue;\n- role confusion;\n- surveillance feeling;\n- unclear data sharing.\n\nProduct requirements:\n\n- quick start;\n- progressive explanation;\n- user-controlled sharing;\n- correction and recovery.\n\n### Caregiver or family member\n\nWants:\n\n- appropriate support and visibility.\n\nRisks:\n\n- overreach;\n- outdated permission;\n- loss of patient control.\n\nProduct requirements:\n\n- explicit permission;\n- revocation;\n- visible scope;\n- audit of sharing changes.\n\n### Health professional\n\nWants:\n\n- concise, reviewable information.\n\nRisks:\n\n- raw data overload;\n- uncertain reliability;\n- unclear liability;\n- automation mistaken for clinical judgment.\n\nProduct requirements:\n\n- short summary;\n- source and confidence visibility;\n- clear patient-generated-data label;\n- professional review and editability.\n\n### Sponsor or program partner\n\nWants:\n\n- activation;\n- retained participation;\n- program outcomes;\n- reporting;\n- renewal evidence.\n\nRisks:\n\n- weak data;\n- trust backlash;\n- unclear consent;\n- measurement that rewards volume over quality.\n\nProduct requirements:\n\n- aggregate reporting;\n- role and consent status;\n- data-completeness signals;\n- cohort-level outcomes.\n\n### Research team\n\nWants:\n\n- valid participation;\n- structured data;\n- withdrawal handling;\n- auditability.\n\nRisks:\n\n- consent confusion;\n- biased cohorts;\n- low-quality self-reporting;\n- mixed research and ordinary-use states.\n\nProduct requirements:\n\n- separate consent;\n- participation status;\n- source and quality metadata;\n- withdrawal pathway.\n\n### Product, data, growth, legal, and operations teams\n\nWant:\n\n- scalable activation;\n- consistent measurement;\n- safe market adaptation;\n- manageable support.\n\nRisks:\n\n- feature sprawl;\n- inconsistent event taxonomy;\n- local compliance gaps;\n- trust treated as copy rather than behavior.\n\nProduct requirements:\n\n- shared event definitions;\n- market feature flags;\n- role-state architecture;\n- operating review;\n- escalation standards.\n\n## Trust-Safe Activation pathway\n\nA shallow funnel is:\n\n> Install\n> \n> \n> → Sign up\n> \n> → Track\n> \n> → Reward\n> \n\nA more useful product pathway is:\n\n> Trusted entry\n> \n> \n> → Quick health setup\n> \n> → First useful action\n> \n> → First reward or feedback\n> \n> → Progressive role and data clarity\n> \n> → D7 routine\n> \n> → D30 retained routine\n> \n> → Patient, care, research, or partner value\n> \n\n### Stage 1 — Trusted entry\n\nQuestion:\n\n> Where did the user come from, and what context should be visible?\n> \n\nPossible entry sources:\n\n- organic;\n- sponsor program;\n- hospital or health professional;\n- insurer or employer;\n- research invitation;\n- family support.\n\nSignals:\n\n- `entry_source`\n- program context shown\n- user recognizes why they arrived\n\n### Stage 2 — Quick health setup\n\nQuestion:\n\n> Can the user reach one useful action without completing a full medical profile?\n> \n\nSignals:\n\n- setup started and completed;\n- time to first value;\n- abandonment point;\n- accessibility issues.\n\n### Stage 3 — First value\n\nQuestion:\n\n> Did the user complete a meaningful action?\n> \n\nExamples:\n\n- reminder enabled;\n- first honest log;\n- first measurement;\n- first refill setup;\n- first report preview.\n\n### Stage 4 — Progressive trust gate\n\nQuestion:\n\n> Does the user understand a change in role, sponsor, consent, or sharing at the point it occurs?\n> \n\nExamples:\n\n- joining a sponsored program;\n- accepting research participation;\n- sharing a report;\n- enabling family access;\n- entering a professional workflow.\n\n### Stage 5 — D7 routine\n\nQuestion:\n\n> Is behavior repeating beyond novelty and the first reward?\n> \n\n### Stage 6 — D30 activated cohort\n\nQuestion:\n\n> Is the routine stable enough to support user, care, research, or partner value?\n> \n\n### Stage 7 — Downstream value\n\nQuestion:\n\n> Can the behavior become useful without overstating its quality or changing the user’s role invisibly?\n> \n\n## Product components\n\n### 1. Low-friction health setup\n\nMechanic:\n\n> One health focus\n> \n> \n> → One reminder or first log\n> \n> → First useful feedback or reward\n> \n> → Complete the profile later\n> \n\nPurpose:\n\n- reduce first-session burden;\n- support older or referred users;\n- reach value before asking for extensive information.\n\n### 2. Contextual role and consent explanation\n\nAt a role-changing action, show:\n\n- who supports the program;\n- what the user is joining;\n- what information is used;\n- what is not shared;\n- what remains optional;\n- how to leave or revoke.\n\nThe explanation should be short first, with deeper detail available.\n\n### 3. Role and Sharing Center\n\nOne place to view:\n\n- general-user state;\n- sponsored-program participation;\n- research participation;\n- family sharing;\n- report sharing;\n- professional-workflow connections;\n- permissions and revocation.\n\n### 4. Honest-reward mechanics\n\nRewards should not create pressure to report only positive behavior.\n\nPotential principles:\n\n- reward the act of accurate tracking, not only “good” outcomes;\n- allow missed medication or difficult measurements to be reported honestly;\n- delay high-value rewards until routine signals exist;\n- do not punish users whose conditions or resources make frequent tracking difficult.\n\n### 5. Data-confidence support\n\nUse gentle quality mechanics:\n\n- impossible-value check;\n- duplicate-entry check;\n- unusual-change confirmation;\n- correction prompt;\n- source label;\n- self-reported / device / imported distinction.\n\nAvoid harsh “fraud” labels for ordinary anomalies.\n\n### 6. Reactivation\n\nDrop-off is expected in chronic or long-term health routines.\n\nRecovery should be a product path, not an exception.\n\nExamples:\n\n- unfinished setup → 30-second restart;\n- missed routine → restart without penalty;\n- tracking fatigue → reduce frequency or simplify;\n- wrong program → leave and return to general use;\n- sharing mistake → revoke and confirm the new state.\n\n### 7. Patient-controlled health summary\n\nA short summary may include:\n\n- recent routine;\n- selected measurements;\n- changes or unusual values;\n- missed actions;\n- user’s question;\n- source and confidence labels.\n\nThe summary should remain:\n\n- patient-controlled;\n- reviewable;\n- editable where appropriate;\n- clearly separate from diagnosis or treatment advice.\n\n### 8. Cohort and partner reporting\n\nPartner reporting should focus on aggregate program quality.\n\nPossible signals:\n\n- entry source;\n- setup completion;\n- D7 and D30 routine;\n- consent state;\n- data completeness;\n- reactivation;\n- withdrawal;\n- report generation;\n- support burden.\n\nIndividual data should not become visible merely because a partner funds the program.\n\n## Instrumentation\n\nA possible event sequence is:\n\n> `app_open`\n> \n> \n> → `signup_started`\n> \n> → `signup_completed`\n> \n> → `entry_context_viewed`\n> \n> → `health_focus_selected`\n> \n> → `first_action_configured`\n> \n> → `first_tracking_completed`\n> \n> → `first_reward_claimed`\n> \n> → `role_change_explanation_viewed`\n> \n> → `consent_started` / `consent_completed`\n> \n> → `D3_return`\n> \n> → `D7_tracking_active`\n> \n> → `D30_retained_routine`\n> \n> → `health_summary_generated`\n> \n> → `report_shared` / `program_joined` / `research_opt_in`\n> \n\nUseful segmentation:\n\n- entry source;\n- condition or health focus;\n- age and accessibility needs where lawful and appropriate;\n- reward motivation;\n- sponsored versus general use;\n- research invitation;\n- professional referral;\n- market;\n- device or manual entry.\n\n## Metrics and impact hypotheses\n\nThese are not known Elfie baselines.\n\nThey are directional hypotheses to test after baseline discovery.\n\n### Activation\n\n- first-setup completion;\n- time to first useful action;\n- first tracking completed;\n- first reward claimed;\n- D3 return;\n- D7 active routine.\n\n### Trust and role clarity\n\n- role-change explanation viewed;\n- consent start and completion;\n- consent-related drop-off;\n- role confusion reported;\n- permission revocation success;\n- trust-related support contacts.\n\n### Retention and recovery\n\n- D30 retained routine;\n- routine restart;\n- reactivation after missed behavior;\n- reduced repeated setup;\n- reason for drop-off.\n\n### Data quality\n\n- corrected entry;\n- impossible-value confirmation;\n- duplicate entry;\n- source completeness;\n- self-reported versus imported distinction;\n- confidence label coverage.\n\n### Downstream value\n\n- summary generated;\n- summary shared;\n- professional review or use, where measurable;\n- research participation and withdrawal;\n- cohort-report use;\n- partner renewal signal.\n\nA better north-star direction is not downloads, MAU, or coins claimed alone.\n\nIt is:\n\n> **Retained health routine quality that can translate into user value and downstream usefulness without weakening trust or control.**\n> \n\n## Experiment set\n\n### Experiment 1 — Quick-start setup\n\nVariants:\n\n- full profile first;\n- one health focus first;\n- referral-specific quick start.\n\nMeasure:\n\n- setup completion;\n- time to first value;\n- D7 routine;\n- downstream profile completion.\n\nGuardrail:\n\n- do not hide information required for safe use.\n\n### Experiment 2 — Progressive role explanation\n\nVariants:\n\n- large upfront explanation;\n- contextual explanation at role-changing action;\n- short explanation with expandable detail.\n\nMeasure:\n\n- completion;\n- informed opt-in;\n- role confusion;\n- trust feedback;\n- later withdrawal.\n\nGuardrail:\n\n- no dark patterns or preselected consent.\n\n### Experiment 3 — Reward timing\n\nVariants:\n\n- immediate reward;\n- small immediate reward plus D7 unlock;\n- routine milestone reward.\n\nMeasure:\n\n- honest tracking;\n- D7 routine;\n- unusual entries;\n- reward-only behavior.\n\nGuardrail:\n\n- do not penalize difficult health outcomes.\n\n### Experiment 4 — Reactivation\n\nVariants based on drop-off reason:\n\n- unfinished setup;\n- missed routine;\n- tracking fatigue;\n- program confusion;\n- technical problem.\n\nMeasure:\n\n- restart;\n- retained behavior after restart;\n- support demand;\n- opt-out.\n\n### Experiment 5 — Health summary\n\nVariants:\n\n- raw history;\n- concise patient-controlled summary;\n- summary with source/confidence labels.\n\nMeasure:\n\n- preview;\n- share;\n- user comprehension;\n- professional usefulness where available;\n- correction before sharing.\n\nGuardrail:\n\n- no diagnosis claim.\n\n## MVP roadmap\n\n### Weeks 0–2 — Baseline and discovery\n\n- map entry sources and role states;\n- define activation events;\n- measure current setup and D7 funnel;\n- review support reasons;\n- identify current consent and sharing transitions;\n- confirm product and clinical boundaries.\n\n### Weeks 3–5 — Quick-start and instrumentation\n\n- launch one-health-focus quick start;\n- instrument first-value events;\n- add drop-off reason capture;\n- establish event-quality review.\n\n### Weeks 6–8 — Progressive trust\n\n- add contextual role explanations;\n- create Role and Sharing Center MVP;\n- test revocation and recovery;\n- review support and trust signals.\n\n### Weeks 9–12 — Routine and reactivation\n\n- test reward timing;\n- add reason-based reactivation;\n- introduce gentle data-quality prompts;\n- measure D7 and D30 impact.\n\n### Quarter 2 — Downstream value\n\n- pilot patient-controlled summary;\n- test aggregate program reporting;\n- separate research participation state;\n- validate professional-workflow usefulness;\n- build renewal and program-quality review.\n\n## Risks and guardrails\n\n### Clinical overreach\n\nRisk:\n\nSelf-reported or AI-organized information may be mistaken for diagnosis or medical advice.\n\nGuardrail:\n\n- clear role labels;\n- source visibility;\n- professional review;\n- no treatment instruction unless governed by an appropriate clinical pathway.\n\n### Consent fatigue\n\nRisk:\n\nToo many explanations reduce activation without improving understanding.\n\nGuardrail:\n\n- progressive disclosure;\n- explain at role change;\n- test comprehension, not only completion.\n\n### Reward distortion\n\nRisk:\n\nUsers optimize for rewards rather than honest behavior.\n\nGuardrail:\n\n- reward tracking honesty and routine;\n- anomaly confirmation;\n- avoid punishment for negative health outcomes.\n\n### Sponsor mistrust\n\nRisk:\n\nUsers believe sponsors or payers can see individual data by default.\n\nGuardrail:\n\n- aggregate reporting by default;\n- visible sharing state;\n- clear role and data boundary.\n\n### Data-quality overconfidence\n\nRisk:\n\nStructured self-reported data appears more reliable than it is.\n\nGuardrail:\n\n- source and confidence labels;\n- correction history;\n- distinction between self-reported, device, and imported data.\n\n### Feature sprawl\n\nRisk:\n\nEach partner or market creates a different activation system.\n\nGuardrail:\n\n- shared role-state model;\n- shared event taxonomy;\n- market feature flags;\n- explicit exception review.\n\n## Open questions\n\n- Which public product surfaces are integrated today?\n- What is the current activation baseline by entry source?\n- Which users are general users, program participants, research participants, or professional-workflow users?\n- What data is shared at individual and aggregate level?\n- What role does ElfieCare currently play in deployed workflows?\n- Which outcomes are company claims, partner-reported, research-derived, or independently verified?\n- Which markets create different consent or safety requirements?\n- What is the largest source of activation failure?\n- What is the largest source of trust-related support demand?\n- What evidence would cause the proposed direction to change?\n\n## Source register — in progress\n\n| Source | What it supports | Source type | Limitation |\n| --- | --- | --- | --- |\n| **[ADD ELFIE CONSUMER PRODUCT PAGE]** | Public consumer positioning | Company source | Describes product; does not independently validate outcomes |\n| **[ADD ELFIE PARTNER / PHARMA PAGE]** | Public partner positioning | Company source | Commercial description |\n| **[ADD ELFIE RESEARCH PAGE]** | Public research direction | Company source | Deployment maturity may be unclear |\n| **[ADD ELFIECARE PAGE]** | Public professional-workflow positioning | Company source | Integration depth and adoption unknown |\n| **[ADD MYTHERAPY SOURCE]** | Reference-product pattern | Company source | Pattern reference, not evidence for Elfie |\n| **[ADD MEDISAFE SOURCE]** | Reference-product pattern | Company source | Pattern reference |\n| **[ADD OMADA / DARIO / LARK SOURCES]** | Reference-product patterns | Company sources | Outcomes require independent verification |\n\n## Final recommendation\n\nThe strongest product direction is not “more engagement” in isolation.\n\nIt is:\n\n> **Build a measurable activation pathway in which users reach value quickly, understand role changes when they occur, preserve control over sharing, form a repeatable routine, and create downstream value that remains proportionate to the evidence and permissions available.**\n> \n\nThis is a product work sample.\n\nIts next step in a real environment would be discovery against internal baselines, constraints, safety review, and partner reality.\n\n---\n\n## Current Limitations\n\nThis case is an outside-in product proposal without internal product, user, clinical, regulatory, operational, or commercial evidence.\n\nIt does not establish:\n\n- Elfie’s current activation funnel or D7/D30 baselines;\n- which public product surfaces are live, integrated, piloted, or strategic priorities;\n- how users currently understand sponsors, research participation, professional workflows, or data sharing;\n- whether reward mechanics improve routine quality or mainly attract reward-seeking behavior;\n- the reliability and usefulness of self-reported information in downstream workflows;\n- partner reporting requirements, contractual boundaries, or renewal drivers;\n- or the technical, clinical, legal, and market-specific feasibility of the proposed components.\n\nThe metrics, experiments, and 0–12 week sequence are therefore decision hypotheses, not known Elfie commitments or performance targets.\n\n## Next Validation Step\n\nA practical validation sequence would be:\n\n1. establish the current activation, retention, consent, support, and data-quality baselines by entry source and role;\n2. conduct user research around first value, sponsor understanding, role transitions, rewards, sharing, and withdrawal;\n3. instrument one bounded quick-start pathway with explicit event-quality review;\n4. test contextual role explanation against comprehension, informed choice, confusion, withdrawal, and support demand—not completion alone;\n5. pilot reactivation and patient-controlled summaries with correction, source, confidence, and professional-review safeguards;\n6. decide whether the pathway improves retained routine quality and downstream usefulness without weakening trust or user control.\n\n## Continue Reading\n\n[Vinamilk — Trusted Nutrition Product-Service Discovery](/work/vinamilk-trusted-nutrition) — a product-service research progression on trust preservation from proposition discovery through operating scale and access governance.\n\n[Zalo Scam Emergency Mode](/work/zalo-scam-emergency-mode) — an early product concept focused on contextual safety intervention, action-first guidance, evidence preservation, and recovery.\n\n[Work Library](/work) · [Portfolio Home](/)"
  },
  "/work/post-signing-artist-label-operations": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ",
    "fileName": "Post-Signing_Artist_Label_Operations_Case_Study.pdf",
    "label": "📄 Preview: Post-Signing_Artist_Label_Operations_Case_Study.pdf ↗",
    "title": "Post-Signing Artist / Label Operations Case Study"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ\" data-title=\"Post-Signing Artist Label Operations Case Study (PDF)\">📄 Post-Signing Artist Label Operations Case Study (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n> **A signed deal looks like an ending from the outside. Operationally, it creates a queue of rights, approvals, campaigns, payments, reporting, fan promises, and exceptions that now have to stay connected.**\n> \n\n> **Type:** Operating Model / Role-Understanding Work Sample\n**Stage:** Working Model\n**Evidence basis:** Public industry patterns, role analysis, and operating inference\n**Last updated:** August 2026\n**Boundary:** An independent synthesis—not an internal label process, official industry standard, or validated universal model.\n> \n\n> **Supporting artifact:**\n> \n> \n> <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ\" data-title=\"Post-Signing Artist Label Operations Case Study.pdf (PDF)\">📄 Post-Signing Artist Label Operations Case Study.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n> \n\n---\n\n## The operating problem\n\nA signed agreement can settle commercial intent while leaving the operating work unresolved. Rights still need to become approval rules; promises need owners and dates; campaigns need dependencies cleared; payments and reporting need visible states; fan-facing failures still need a route back to the partnership team.\n\nThe useful question is therefore narrower than “how do we manage artists?”:\n\n> **How do we keep commitments visible after signing, especially when several teams, vendors, and fan-facing systems participate in the same promise?**\n> \n\nThis working model treats the agreement as the start of an operating pathway: translate the deal into repeatable work, preserve one source of truth, and make changes and recovery traceable.\n\n## Before signing — standard spine, explicit exceptions\n\nCustomization is normal. The risk begins when basic operating structure is customized too, because every new partnership can then create its own hidden workflow.\n\n| Standard operating spine | Deal-specific choices |\n| --- | --- |\n| Onboarding, owner map, approval categories, campaign brief, reporting fields, finance states, support route, change log, review cadence | Creative identity, exclusivity, release strategy, territory, commercial terms, fan benefits, special events, brand restrictions, approval authority, reporting depth, crisis sensitivity |\n\n<aside>\n🧭\n\n**Rule:** Standardize how the work is coordinated; customize the commercial and creative choices that actually need to differ.\n\n</aside>\n\n## Post-signing lifecycle\n\nThe lifecycle can stay simple as long as each handoff preserves the operating state.\n\n<aside>\n→\n\n**Signed → Setup → Translate commitments → Plan & approve → Execute → Report & settle → Recover → Renew / exit**\n\n</aside>\n\nAt every transition, three things should remain visible: **current state, next owner, and evidence of what was agreed.**\n\n## Seven operating workstreams\n\nThe workstreams are not seven departments. They are seven kinds of state that can break when ownership, records, or handoffs become unclear.\n\n| Workstream | What must stay visible | Failure to catch |\n| --- | --- | --- |\n| **1 · Partner relationship** | Contacts, decision authority, open commitments, review cadence, escalation | An unresolved operating issue quietly becomes a relationship problem |\n| **2 · Rights & approvals** | Asset, right involved, approver, conditions, expiry, approved version, evidence | Approval drift across context, territory, duration, or format |\n| **3 · Release & campaign** | Objective, dependencies, readiness, approvals, support preparation, owner | Creatively ready but operationally unready |\n| **4 · Fandom & membership** | Promise, eligible fan, entitlement evidence, fulfilment owner, recovery route | A fan benefit exists but cannot be recognized or recovered |\n| **5 · Merchandise & ticketing** | Inventory or capacity, vendor, payment, order/ticket state, fulfilment, refund | Oversell, invalid access, delayed fulfilment, inconsistent status |\n| **6 · Finance & reporting** | Commercial model, invoice, settlement, reporting period, variance, dispute, owner | A clean number hides estimated, pending, disputed, or adjusted states |\n| **7 · Support & crisis** | Promise, incident, owner, approved communication, recovery, recurrence | A fan-facing failure stays isolated from the partnership record |\n\n## Artist Operating File — minimum source of truth\n\nThe Artist Operating File should point people to the current operating truth without becoming a second uncontrolled archive.\n\n| Domain | Minimum record |\n| --- | --- |\n| **Relationship** | Artist/label/management contacts, decision authority, review cadence, escalation boundary |\n| **Rights & contract** | Rights matrix, territory, duration, exclusivity, approval rights, restrictions, renewal/exit conditions |\n| **Calendar & commitments** | Releases, campaigns, events, approvals, reporting, payments, dependencies, deadlines |\n| **Platform & commerce** | Active surfaces, membership, merch, ticketing, fan benefits, vendors, technical dependencies |\n| **Finance & reporting** | Commercial model, invoices, cost/revenue, settlement, reporting state, disputes, financial owner |\n| **Issues & escalation** | Severity, affected pathway, evidence, owner, next action, deadline, communication, recovery, learning |\n\n<aside>\n📌\n\nThe file should preserve **where the authoritative record lives, what state it is in, and who owns the next action**. It does not need to duplicate every raw document or conversation.\n\n</aside>\n\n## Control Tower maturity — four earned layers\n\nA Control Tower should grow only when coordination burden earns the next layer.\n\n| Layer | Trigger | Minimum added structure |\n| --- | --- | --- |\n| **4 · Learning** | Failures recur across artists or campaigns | Incident patterns · root cause · workflow change |\n| **3 · Control** | Blockers and handoffs repeatedly cross teams | Risk/dependency view · owner map · operating review |\n| **2 · Coordination** | Commitments, approvals, payments, and reports begin to overlap | Commitment register · portfolio calendar · pipeline |\n| **1 · Foundation** | Facts and authority no longer fit safely in personal memory | Master list · Artist Operating File · rights matrix |\n\n<aside>\n△\n\n**Foundation → Coordination → Control → Learning**. Each layer adds structure only after the previous layer is no longer enough.\n\n</aside>\n\nThis is a heuristic maturity path, not a validated numerical threshold.\n\n## Change workflow — one traceable line\n\nChange is normal. The failure happens when authority, downstream impact, or the final state gets separated from the request.\n\n<aside>\n→\n\n**Request → Impact & authority → Update source of truth → Notify & close**\n\n</aside>\n\n| Checkpoint | What must travel with the change |\n| --- | --- |\n| **1 · Request** | What changed · requester · reason · needed by |\n| **2 · Impact & authority** | Rights · timeline · cost · fan/brand impact · dependencies · correct approver · conditions |\n| **3 · Update** | Only the affected sources of truth: operating file, calendar, rights, commitments, budget, campaign or reporting state |\n| **4 · Notify & close** | Who accepted the new state · what actually changed · unresolved consequence · learning if the pattern recurs |\n\n## Trust and crisis recovery — three phases\n\n| Before release · Prevent | During incident · Contain | After incident · Recover |\n| --- | --- | --- |\n| Confirm rights and approval source\nPreserve references\nConfirm vendor commitment\nTest critical access/fulfilment\nPrepare support language\nDefine escalation and stop conditions | Identify affected pathway\nStop unsafe or misleading action\nPreserve evidence\nAssign one incident owner\nAlign partner/public communication\nProtect affected fans or customers | Correct the issue\nCommunicate status\nCompensate where appropriate\nConfirm affected users recovered\nUpdate artist/label\nFind root cause and change workflow\nRecord unresolved exposure |\n\n<aside>\n↩️\n\n**Recovery rule:** closing the internal task is not enough. Recovery ends when the affected relationship and operating pathway have been restored as far as reasonably possible.\n\n</aside>\n\n## What I would validate first\n\n1. Which of these workstreams actually exist, and who holds decision authority in each?\n2. Where do commitments, approvals, and exceptions currently live?\n3. Which handoffs still depend on personal memory or repeated explanation?\n4. Which changes create the largest downstream cost across rights, campaign, finance, support, or fan experience?\n5. How do fan incidents travel back to the partnership team and artist/label relationship?\n6. What is the smallest operating file and coordination layer that would materially reduce burden before a larger Control Tower is justified?\n\n## Current boundary\n\nThis case does not establish how any specific label, artist-management team, or platform currently operates. It also does not prove that every partnership needs all seven workstreams, a centralized file, or a Control Tower.\n\nThe model is useful only if internal discovery shows that commitments are being lost across handoffs, states are difficult to reconcile, or recovery depends too heavily on individual memory. Where lighter standards or existing systems already preserve that continuity, they should remain in place.\n\n## Final takeaway\n\nSigning gives the relationship a legal and commercial starting point. The operating work keeps later commitments legible: **what was promised, what changed, who owns the next action, what evidence exists, and how the pathway recovers when delivery goes wrong.**\n\nThe next useful test is against one real organization, portfolio, and operating cadence."
  },
  "/work/shopee-account-restrictions": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ",
    "fileName": "Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf",
    "label": "📄 Preview: Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf ↗",
    "title": "Shopee Account Restriction Resolution Case (Aug 2026)"
  },
  {
    "type": "image",
    "driveId": "1usqgZCJbA7udggiW8W9UBlv3NgGJb0WM",
    "fileName": "Shopee_Account_Restriction_Resolution_Cover.png",
    "title": "Shopee Account Restriction Resolution Cover",
    "label": "Preview: Shopee Account Restriction Resolution Cover ↗"
  },
  {
    "type": "image",
    "driveId": "1_O_IQFaVpGzJweoJSBcfM2tifcB0hbQ8",
    "fileName": "Shopee_Case_Figure_1_Observed_Pathway.png",
    "title": "Shopee Case Figure 1 Observed Pathway",
    "label": "Preview: Shopee Case Figure 1 Observed Pathway ↗"
  },
  {
    "type": "image",
    "driveId": "19b-4zTKvXCe-GHlAxGrrY6CyYoIRzk-V",
    "fileName": "Shopee_Case_Figure_2_Explainable_Resolution_Case.png",
    "title": "Shopee Case Figure 2 Explainable Resolution Case",
    "label": "Preview: Shopee Case Figure 2 Explainable Resolution Case ↗"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ\" data-title=\"Shopee Account Restriction Resolution Portfolio Final 2026-08-05 (PDF)\">📄 Shopee Account Restriction Resolution Portfolio Final 2026-08-05 (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n## Can Customers Still Understand, Preserve, Contest, and Recover?\n\n> **Evidence-Based Product Operations Case**\n> \n\n> A privacy-first analysis of 35 coded Threads narratives, Shopee policy, and Vietnam consumer-protection baselines\n> \n\n> Public evidence only · Research cut: 5 August 2026 · Not commissioned by Shopee\n> \n\n\n<diagram-card title=\"ChatGPT Image Aug 5, 2026, 04_39_00 PM.png\" driveid=\"1usqgZCJbA7udggiW8W9UBlv3NgGJb0WM\" caption=\"ChatGPT Image Aug 5, 2026, 04_39_00 PM.png\"></diagram-card>\n\n\n> **The restriction is one platform event. The customer may still be waiting on an order, refund, balance, benefit, or explanation after that event has been recorded internally. This case asks what minimum resolution pathway should remain visible without requiring the platform to expose its fraud model.**\n> \n\n---\n\n## Executive Summary\n\n- **Problem:** A restriction can affect more than account access. Orders, refunds, balances, benefits, and future transactions may also become uncertain.\n- **Evidence:** 35 public customer narratives were collected and screened; 22 form the core analytical sample. The corpus is purposive and supports pathway analysis, not prevalence or wrongdoing claims.\n- **Observed issue:** Customers in the sample reported different levels of reason clarity, appeal effort, affected interests, and recovery outcomes.\n- **Proposal:** An **Explainable Resolution Case** — one coherent customer-facing source of truth for the current issue, affected interests, required action, review state, timing, outcome, recovery state, and remaining remedy.\n- **Business hypothesis:** Better resolution quality may improve benefit recovery, customer experience, return, repeat purchase, and retention without weakening enforcement controls. This must be tested with Shopee internal data; the public case does not claim that the solution is proven.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full 22-page case includes the privacy-first evidence register, detailed gap matrix, policy/legal source cards, claim-to-source map, pilot design, metric definitions, guardrails, and evidence boundaries.\n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ\" data-title=\"Shopee Account Restriction Resolution Portfolio Final 2026-08-05.pdf (PDF)\">📄 Shopee Account Restriction Resolution Portfolio Final 2026-08-05.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n</aside>\n\n---\n\n## 1. Case Framing — Restriction interrupts a customer benefit, not just an account\n\nCustomers use a marketplace to achieve a downstream benefit: receive a product, complete a time-sensitive purchase, recover a refund, use stored value, or maintain account continuity.\n\nThe research object is therefore the **post-restriction customer-resolution pathway**, not the restriction decision in isolation.\n\n> **Key distinction:** Internal case closure does not necessarily mean the customer problem is resolved.\n> \n\n---\n\n## 2. Research Question and Scope\n\n> **After a marketplace restricts a customer account, does a usable resolution pathway remain visible and actionable to the customer?**\n> \n\nThe case separates three questions:\n\n1. What customers publicly reported experiencing.\n2. What Shopee publicly states in policy/help and complaint processes.\n3. What current legal or regulator baselines require or make available, subject to applicability.\n\n**Out of scope:** proving individual restrictions erroneous or unlawful; estimating platform-wide failure rates; reverse-engineering fraud controls; inferring undocumented Shopee operations; or claiming the proposed intervention works before testing.\n\n- Evidence and method\n    - Public narratives were collected manually and purposively.\n    - The coded register used in this case contains **35 publicly linked Threads posts and replies: 22 core / 4 adjacent / 4 appeal-recovery context / 5 excluded**.\n    - Broader Facebook screening was not included in the coded corpus.\n    - Records were screened for sufficient pathway detail, relevance to the research object, and near-duplicate content.\n    - Usernames, screenshots, profile URLs, direct social links, and verbatim posts are excluded from the portfolio export.\n    - Evidence supports reported pathway states and customer-interface signals. It does **not** establish prevalence, representativeness, a common root cause, wrongdoing, or legal violation.\n\n---\n\n## 3. Observed Customer Journey — The path fragments after restriction\n\nDifferent initiating events converged into a partially shared post-restriction resolution problem:\n\n> **Intended benefit → restriction/cancellation → search for explanation/support → appeal/review in some cases → mixed recovery or unresolved outcome**\n> \n\nFour recurring analytical signals matter:\n\n- **Reason opacity** — some customers could not identify a sufficiently specific reason.\n- **Appeal effort** — some reported repeated contact or evidence submission.\n- **Mixed recovery** — outcomes ranged from reopening to delayed recovery, relock, permanent lock, or unresolved/unstated outcomes.\n- **Affected interests beyond access** — orders, purchases, balances, benefits, or account continuity could also be involved.\n\nThis supports studying **resolution quality**, not concluding that all restrictions share one failure mode.\n\n\n<diagram-card title=\"Shopee_Case_Figure_1_Observed_Pathway.png\" driveid=\"1_O_IQFaVpGzJweoJSBcfM2tifcB0hbQ8\" caption=\"Shopee_Case_Figure_1_Observed_Pathway.png\"></diagram-card>\n\n\n*Caption: Synthesis of reported pathway states across a purposive public evidence sample; not an official Shopee process.*\n\n---\n\n## 4. Minimum Contestable Restriction — What should remain possible\n\nFor this case, operational contestability means preserving four customer functions:\n\n> **UNDERSTAND → PRESERVE → CONTEST → RESOLVE / ESCALATE**\n> \n\nThe customer should be able to determine:\n\n- what is restricted and what is affected;\n- the safe-to-disclose reason or rule at issue;\n- where and how to submit a complaint or evidence;\n- current review state and expected timing;\n- what happens to pending orders, refunds, balances, and benefits;\n- the reasoned outcome and practical recovery consequence;\n- what internal or external remedy remains.\n\nThis is an operational minimum for the case, not a claim that every element is independently mandated by one law.\n\n- Policy and legal baseline\n    \n    Three baselines are kept separate:\n    \n    1. **Shopee policy:** broad account-enforcement discretion plus published restoration and complaint routes.\n    2. **Vietnam consumer-protection law:** complaint receipt/resolution duties, intermediary-platform responsibilities, and recognized dispute-remedy routes.\n    3. **Electronic-transactions and e-commerce platform duties:** potentially relevant platform-specific information, complaint-handling, coordination, and record obligations, subject to the exact statutory classification and provision applied.\n    \n    **Important:** Shopee's published complaint timing, statutory complaint acknowledgement, and statutory negotiation timing are separate clocks. The case does not merge them into one SLA.\n    \n    Full provisions, source cards, URLs, and applicability notes are retained in the full case.\n    \n- Observed Gap Matrix\n    \n    Each Minimum Contestable Restriction element is compared against public narratives and published baselines using three evidence states:\n    \n    - **Observed gap** — a missing or insufficient element is directly reported.\n    - **Partially evidenced** — a relevant feature appears, but completeness or consistency cannot be determined.\n    - **Not evidenced — cannot determine** — the public corpus lacks enough visibility.\n    \n    This distinction prevents **“not reported”** from being converted into **“Shopee does not do this.”**\n    \n    The strongest directly observed issue is reason/explanation opacity in a subset of narratives. Other areas worth testing are affected-interest visibility, complaint acknowledgement, review-state visibility, timing certainty, recovery handling, and remedy continuity.\n    \n- Customer Remedy Ladder\n    \n    The pathway should remain intelligible even when the platform reaches an internally final decision:\n    \n    1. Read the restriction notice and published restoration requirements.\n    2. Use the internal complaint/restoration process and retain submitted evidence and dates.\n    3. Seek an actionable outcome: decision, practical consequences, and remaining action.\n    4. Use negotiation or supported negotiation where statutory conditions apply.\n    5. Other recognized routes may include mediation, arbitration, or court, subject to jurisdiction, agreement, procedure, and facts.\n    \n    > **Key distinction:** An internal case can be closed while the customer problem remains open.\n    > \n\n---\n\n## 5. Platform Governance Diagnosis — Four interface control problems worth testing\n\n- Open diagnosis\n    \n    ### 5.1 Enforcement decision ↔ customer explanation\n    \n    The platform may need to protect detection signals, but that does not eliminate the need for enough explanation to make a decision contestable.\n    \n    ### 5.2 Restriction ↔ affected interests\n    \n    The resolution object may include orders, refunds, stored value, benefits, and linked-service access — not only account reopening.\n    \n    ### 5.3 Complaint intake ↔ review visibility\n    \n    A contact channel is not the same as a visible case state. A customer may still lack a coherent source of truth for acknowledgement, evidence required, current stage, next step, or expected update.\n    \n    ### 5.4 Internal finality ↔ remedy continuity\n    \n    After internal review ends, the customer still needs to know what was decided, what happens to affected interests, what is actually final, and what route remains.\n    \n\n---\n\n## 6. Resolution Pathway Components — Make resolution explainable end to end\n\nThe proposal is one integrated pathway with four connected components:\n\n| Component | Role |\n| --- | --- |\n| **A. Restriction Notice** | Opens the pathway with state, affected scope, safe reason category, consequences, and appeal route. |\n| **B. Explainable Resolution Case** | Becomes the customer-facing source of truth for the case. |\n| **C. Affected-Interest Protection / Recovery** | Keeps orders, refunds, balances, benefits, and other practical consequences visible. |\n| **D. Reasoned Closure & Remedy** | Shows the decision, recovery state, remaining internal action, and external remedy where applicable. |\n\n### Explainable Resolution Case — Proposed source of truth\n\nThe conceptual case surface answers:\n\n- What is my current state?\n- Why am I here?\n- What is affected — and what remains protected?\n- What supports the issue at a safe-to-disclose level?\n- What do you need from me?\n- What is happening now?\n- When will I hear back?\n- What was decided?\n- What happens to my affected interests?\n- What can I do next?\n\n> **Design principle:** At any point, the customer should be able to determine where the issue sits, why it is there, what is affected, what information is required, what happens next, and when the next state is expected. Explainable does not mean disclosing everything.\n> \n\n\n<diagram-card title=\"Shopee_Case_Figure_2_Explainable_Resolution_Case.png\" driveid=\"19b-4zTKvXCe-GHlAxGrrY6CyYoIRzk-V\" caption=\"Shopee_Case_Figure_2_Explainable_Resolution_Case.png\"></diagram-card>\n\n\n*Caption: Conceptual customer-resolution interface; proposed, not an existing Shopee product.*\n\n---\n\n## 7. Recommended Pilot — Test resolution without changing detection rules\n\n**Hypothesis:** For a defined subset of eligible restricted buyer accounts, one coherent Explainable Resolution Case may reduce uncertainty and repeat support effort while improving resolution experience and post-resolution customer return, without materially weakening enforcement controls.\n\nFirst pilot principles:\n\n- define eligible account-restriction types and explicit high-risk exclusions;\n- do not change substantive detection thresholds or enforcement criteria;\n- test the resolution interface and cross-functional handoffs;\n- compare eligible cohorts using random assignment where feasible or a controlled phased rollout;\n- pre-register exclusions, metric definitions, comparison windows, guardrails, and stop conditions;\n- determine sample size from Shopee baseline volume and variance rather than inventing public-case targets.\n- Headline metrics and guardrails\n    \n    **Headline metrics**\n    \n    - Time to Customer Certainty\n    - Resolution Completeness\n    - Benefit Recovery Rate\n    - Repeat Contact Rate\n    - 30-day Customer Return Rate\n    \n    The pilot tests whether better resolution quality affects subsequent customer behavior. It does not assume that restoration automatically produces return or retention.\n    \n    **Guardrails**\n    \n    - incorrect restoration or enforcement-reversal risk;\n    - fraud or financial loss;\n    - sensitive-control disclosure;\n    - reviewer workload or backlog;\n    - privacy and security incidents.\n    \n    Detailed definitions, observation windows, survey items, retention logic, and stop conditions are provided in the full case.\n    \n\n---\n\n## 8. Bounded Findings and Unknowns — What this case can support\n\n### Evidence supports\n\n- Customer-reported difficulty or uncertainty can occur at multiple points in the post-restriction pathway.\n- Reason opacity appears directly in a subset of core narratives; appeal/contact and recovery outcomes are mixed.\n- Affected interests can extend beyond account access.\n- Public policy and legal sources preserve multiple resolution and remedy mechanisms alongside enforcement discretion.\n\n### Evidence does not support\n\n- a Shopee-wide prevalence or failure rate;\n- a common root cause across the core sample;\n- a conclusion that an individual restriction was wrongful or unlawful;\n- an inference that anything absent from a sampled narrative was absent from Shopee's actual process;\n- a claim that the proposed Explainable Resolution Case improves business outcomes before a pilot is run.\n\n---\n\n*Independent portfolio case study · Public evidence only · Research cut: 5 August 2026*"
  },
  "/work/fanme-controlled-growth": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI",
    "fileName": "FanMe_Controlled_Growth__Native_Editable_Final.pdf",
    "label": "📄 Preview: FanMe_Controlled_Growth__Native_Editable_Final.pdf ↗",
    "title": "FanMe Controlled Growth: Native Operating Framework"
  },
  {
    "type": "paper",
    "driveId": "1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk",
    "fileName": "FanMe_Controlled_Growth_Pilot.pdf",
    "label": "📄 Preview: FanMe_Controlled_Growth_Pilot.pdf ↗",
    "title": "FanMe Controlled Growth Pilot Monograph"
  },
  {
    "type": "image",
    "driveId": "1CrBb6akpk5skhweDvBlmARZQaoRQSY-U",
    "fileName": "FanMe Controlled Growth Pilot Cover",
    "title": "FanMe Controlled Growth Pilot Cover",
    "label": "Preview: FanMe Controlled Growth Pilot Cover ↗"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI\" data-title=\"FanMe Controlled Growth  Native Editable Final (PDF)\">📄 FanMe Controlled Growth  Native Editable Final (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk\" data-title=\"FanMe Controlled Growth Pilot (PDF)\">📄 FanMe Controlled Growth Pilot (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n## Can FanMe turn one artist launch into a repeatable operating capability?\n\n> **Controlled Growth & Launch Operations Case · Developed Work Sample**\n> \n\n> Six-week outside-in operating-readiness and artist-launch plan\n> \n\n> Public evidence and direct product observation only · Not commissioned by DAO or FanMe\n> \n\n\n<diagram-card title=\"ChatGPT Image Aug 10, 2026, 03_09_18 PM.png\" driveid=\"1CrBb6akpk5skhweDvBlmARZQaoRQSY-U\" caption=\"ChatGPT Image Aug 10, 2026, 03_09_18 PM.png\"></diagram-card>\n\n\n> **An artist can bring demand into FanMe quickly. The harder test is whether that burst can pass through login, a meaningful fan action, support, fulfilment, and commercial closure without turning the launch into a custom rescue project. The second artist is where I would test whether the operating system actually transfers.**\n> \n\n---\n\n## Executive Summary\n\n- **Current stage:** FanMe is treated as a live early-stage platform whose immediate challenge is formation and operating readiness—not the absence of a long-term vision.\n- **Role outcome:** Create a reliable operating system through which artist initiatives can launch and improve without every campaign becoming a custom rescue project.\n- **Growth lever:** Use controlled fan bursts from artist engagement and offline moments rather than waiting for a fully mature platform or opening traffic without containment.\n- **Pilot:** A six-week sequence from reality mapping and critical-path hardening to one anchor launch, productization, and a second-artist transfer test.\n- **Success test:** The second artist should require adaptation—not a complete rebuild, new tracker, or new emergency workflow.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full case contains the detailed role model, capability map, technical-delivery controls, operating records, risk matrix, roadmap, scale gates, strategic horizon, and public evidence links.\n\n**Full document here:** \n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk\" data-title=\"FanMe Controlled Growth Pilot.pdf (PDF)\">📄 FanMe Controlled Growth Pilot.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n**Attach presentation here:** \n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI\" data-title=\"FanMe Controlled Growth — Native Editable Final.pdf (PDF)\">📄 FanMe Controlled Growth — Native Editable Final.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n</aside>\n\n---\n\n## 1. Current-Stage Diagnosis\n\nFanMe should not be approached as a mature-platform integration problem. The immediate question is narrower:\n\n> **What must work first, in what sequence, with which owners and recovery paths, before FanMe expands artist scope or product ambition?**\n> \n\nThe first case should therefore build and test one repeatable launch system rather than design the entire future fandom ecosystem.\n\n### Evidence boundary\n\nThis is an outside-in case based on public product surfaces, public company information, and direct journey observation. It does not claim access to internal analytics, architecture, staffing, contracts, unit economics, roadmaps, or operating playbooks.\n\n- What requires internal validation\n    - Product and technical ownership;\n    - internal, hybrid, or outsourced delivery model;\n    - committed capacity and WIP limits;\n    - artist commitments, rights, approvals, and deadlines;\n    - commerce, fulfillment, CS, settlement, and escalation ownership;\n    - actual launch traffic, failure patterns, and unit economics.\n\n---\n\n## 2. Strategic Lever — Controlled Fan Burst\n\n> **Borrow artist demand, constrain the first fan journey, observe everything, recover quickly, and expand only after the launch system transfers to another artist.**\n> \n\n### Minimum fan journey\n\n> **Artist push / offline moment → FanMe landing → login → follow or meaningful action → benefit / order / event → status and support → return**\n> \n\nThree conditions must exist before broader traffic:\n\n| Condition | What it means |\n| --- | --- |\n| **Reliable** | Fans can complete the critical action without losing account, payment, order, or benefit context. |\n| **Observable** | The team can see where the journey fails and which cohort, device, version, or dependency is affected. |\n| **Recoverable** | A failure has a named owner, containment action, communication path, escalation threshold, and closure evidence. |\n\nThe technical workstream supports this operating goal. Operations defines the critical journey, expected traffic shape, unacceptable failure states, visibility, and recovery requirements; Product/Tech selects and implements the architecture.\n\n---\n\n## 3. Role Understanding — Operating Integrator, Not Human Middleware\n\nThe Project & Operations Manager connects artist commitments, Product/Tech delivery, fan-facing execution, commerce and fulfillment, customer support, partner performance, settlement, and management reporting.\n\n> **Protect the outcome → identify the owner → support execution → escalate when the issue exceeds authority or capacity.**\n> \n\nThe role should not personally absorb every task or become the only bridge between functions and vendors.\n\n### Responsibility lanes\n\n- **Platform & Product Operations:** requirements, release coordination, UAT, incidents, analytics, and backlog visibility.\n- **Artist & Campaign Readiness:** commitments, rights, approvals, assets, fan promise, launch brief, and go/no-go readiness.\n- **Commerce, Fulfillment & Fan Continuity:** order/benefit states, exceptions, partner SLAs, support, and recovery.\n- **Reporting, Commercial Closure & Learning:** reconciliation, settlement, operating effort, post-launch evidence, and next-decision memo.\n\n---\n\n## 4. Minimum Operating System\n\nThe system should remain simple enough to live inside existing tools. Its purpose is to keep commitments, rights, capacity, delivery, recovery, money, and learning connected.\n\n> **Promise & commitment → rights & approval → capacity & readiness → controlled launch → CS and fulfillment recovery → commercial closure → learning and change**\n> \n\n### Core records\n\n| Control layer | What it protects |\n| --- | --- |\n| Initiative charter | Bounds the pilot and prevents the platform vision from swallowing the first test. |\n| Commitment, rights & approval view | Links each deliverable to permission, controlling party, approved version, deadline, and fallback. |\n| Fan promise register | Makes eligibility, delivery owner, timing, status source, communication trigger, and recovery path explicit. |\n| Capacity & WIP map | Tests whether the whole launch is supportable—not whether each function can individually “try.” |\n| Fan journey, release & dependency view | Connects front-end actions to systems, owners, state changes, analytics, fallbacks, and support. |\n| CS, incident & fulfillment recovery pack | Makes containment, communication, exception handling, escalation, and closure consistent. |\n| Commercial closure sheet | Shows collected value, failures, refunds, fees, partner shares, settlement, and manual operating effort. |\n| Post-launch learning record | Turns each launch into a reusable playbook, next-bottleneck view, and scale/stop decision. |\n- AI-assisted operating watcher\n    \n    AI may summarize approved trackers, flag missed deadlines or repeated operating patterns, and draft internal updates after the records are structured.\n    \n    Authority remains human-owned: AI does not approve rights, decide refunds or payouts, accept risk, change architecture, or publish autonomous crisis communication.\n    \n\n---\n\n## 5. Six-Week Controlled Growth Pilot\n\n| Week | Objective | Exit gate |\n| --- | --- | --- |\n| **1 — Reality Sprint** | Map what is live, manual, outsourced, planned, and unknown; choose one real artist initiative. | Named owners, bounded scope, clear fan promise, confirmed approvals, realistic capacity, support, and first-wave assumption. |\n| **2 — Minimum Reliable Journey** | Harden the critical path and build readiness, fallback, communication, and recovery controls. | Authentication, meaningful action, order/benefit/event, and support recovery can be tested end to end. |\n| **3 — Test in Waves** | Run internal, load, failure, dependency, and closed-fan tests. | Traffic grows only while error, duplicate risk, support load, and recovery remain within threshold. |\n| **4 — Anchor Artist Launch** | Use one artist moment to create bounded traffic waves with live monitoring and pause/rollback authority. | Fans complete the meaningful action and Tier 0 failures remain controlled. |\n| **5 — Fix and Productize** | Separate product defects, UX gaps, artist dependencies, CS gaps, manual bottlenecks, and the next capacity constraint. | The launch no longer depends on undocumented heroics; rights, promises, money, and recovery are closable. |\n| **6 — Second Artist Transfer Test** | Launch a second artist with a different fanbase or campaign pattern. | The second launch requires adaptation—not a new operating system. |\n\nOffline activation belongs inside the same loop—not as a separate vanity project:\n\n> **Artist / event attention → QR or code → FanMe login → follow / claim / purchase / check-in → account-visible status or benefit → post-event return**\n> \n\n---\n\n## 6. Measurement and Scale Gates\n\n### Pilot success statement\n\n> **FanMe can launch and support one artist initiative reliably, then transfer the same operating system to a second artist without disproportionate manual rescue.**\n> \n\nHeadline signals:\n\n- login success, session continuity, and Tier 0 error/latency;\n- first meaningful action and post-launch return;\n- payment/order or benefit completion and exception rate;\n- support entry, repeat contact, resolution, and incident closure time;\n- manual hours by workstream and number of custom steps required for Artist Two;\n- partner exceptions, fulfillment ageing, settlement discrepancies, and commercial closure;\n- approval lead time, blocked dependencies, emergency changes, and time to produce a decision-ready post-launch report.\n\nScale only when:\n\n- the critical journey is stable;\n- artist readiness, permissions, and approval versions are real;\n- the fan promise has an owner, status source, communication trigger, and recovery path;\n- each critical lane has capacity, backup, and a WIP/no-go limit;\n- support can see enough context to resolve the fan problem;\n- fulfillment, settlement, and commercial closure are traceable;\n- manual effort is bounded and the second artist does not recreate the workflow;\n- technical delivery has a named owner, controlled system access, documentation, committed capacity, and incident support.\n- Decision rules after the first two artists\n    - High traffic, low login → fix entry value, authentication, or UX before adding features.\n    - Login succeeds, low meaningful action → the fan promise or campaign value is weak.\n    - Fan action succeeds, low return → improve artist cadence, notification, and post-event continuity.\n    - Commerce succeeds, support or fulfillment fails → stop scaling demand until recovery is stable.\n    - Artist One works, Artist Two needs a full rebuild → the playbook is not yet platform capability.\n    - Both artists transfer cleanly → expand selectively and productize the highest-cost manual steps.\n\n---\n\n## 7. Boundary and Strategic Horizon\n\n### Explicit non-scope for the first six weeks\n\n- full platform redesign or feature-complete My FanMe;\n- mass artist onboarding or an open indie marketplace;\n- native ticketing, concert production, or full artist management;\n- broad paid membership, livestream, music-streaming, loyalty, or collectibles infrastructure;\n- international commerce or a complete commerce replatform;\n- a large offline event disconnected from the core fan journey.\n\nA later independent FanMe business, global-market operations, or partnership model is a conditional strategic horizon—not part of the pilot and not assumed to be DAO’s current strategy.\n\n- What must be true before the longer-term vision becomes credible\n    - several artist launches transfer through the same operating system;\n    - dedicated Product/Tech ownership and controllable critical system access;\n    - reliable commerce, CS, fulfillment, refunds, and partner exception handling;\n    - traceable rights, approvals, settlement, and revenue-share closure;\n    - a dedicated operating cadence, budget, and increasingly visible contribution logic;\n    - a recognizable FanMe relationship beyond one artist page;\n    - sufficient compliance and working-capital capacity for larger market responsibility.\n\n---\n\n## What This Case Demonstrates\n\n**Launch operations · Product/Tech coordination · artist and rights readiness · capacity and WIP control · fan-journey reliability · incident and recovery design · commercial closure · stage gates · transfer testing**\n\n---\n\n*Independent outside-in work sample · Public evidence and direct product observation only*"
  },
  "/work/datvietvac-ownership-belonging": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW",
    "fileName": "DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf",
    "label": "📄 Preview: DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf ↗",
    "title": "DatVietVAC: Ownership & Belonging Merchandise Growth"
  },
  {
    "type": "image",
    "driveId": "1U33wyQN4ZbGjCjU3NBM0ugSiQiI_xzm4",
    "fileName": "Verified_History__Ownership__Belonging.png",
    "title": "Verified History  Ownership  Belonging",
    "label": "Preview: Verified History  Ownership  Belonging ↗"
  },
  {
    "type": "image",
    "driveId": "1V9ejbjhrIXWBk2uoOClzlap9ToxjNbl0",
    "fileName": "Verified_History__Ownership__Belonging(1).png",
    "title": "Verified History  Ownership  Belonging(1)",
    "label": "Preview: Verified History  Ownership  Belonging(1) ↗"
  },
  {
    "type": "image",
    "driveId": "1cjv8PvOo2yUA0e7rpqNHtRGrLO3_Kw0e",
    "fileName": "Verified_History__Ownership__Belonging(2).png",
    "title": "Verified History  Ownership  Belonging(2)",
    "label": "Preview: Verified History  Ownership  Belonging(2) ↗"
  },
  {
    "type": "image",
    "driveId": "1OUwoTZP3Qj2oP8SMAW-38iKABvWEKCXX",
    "fileName": "Verified_History__Ownership__Belonging(3).png",
    "title": "Verified History  Ownership  Belonging(3)",
    "label": "Preview: Verified History  Ownership  Belonging(3) ↗"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW\" data-title=\"DatVietVAC Ownership Belonging Merchandise Growth Case Study (PDF)\">📄 DatVietVAC Ownership Belonging Merchandise Growth Case Study (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n## Making verified fan contribution persist beyond a transaction or event\n\n> **Merchandise Growth & IP Commercialization Case · Developed Work Sample**\n> \n\n> Public evidence + Merchandise Manager JD · Outside-in case · August 2026 · Not commissioned by DatVietVAC\n> \n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging.png\" driveid=\"1U33wyQN4ZbGjCjU3NBM0ugSiQiI_xzm4\" caption=\"Verified History_ Ownership & Belonging.png\"></diagram-card>\n\n\n> **This case started from two ideas that look emotionally similar but operate very differently: recognizing past customer contribution with ownership at a corporate milestone, and preserving verified event/card history over time. I keep them separate because the first depends on securities feasibility; the second depends on identity, provenance, event operations, and merchandise economics.**\n> \n\n---\n\n## Executive Summary\n\n- **Question:** Can verified fan contribution persist beyond a purchase or event as ownership, history, or recognition—without turning novelty into uncontrolled cost or operational complexity?\n- **Idea 1 — Ownership:** test whether verified high-value historical customers could be recognized through an opt-in ownership mechanism after listing, subject to securities feasibility, approved transfer structure, budget, identity quality, and Legal/IR review.\n- **Idea 2 — Event Joining Card / History:** bind eligible event-linked physical cards to a verified fan account, preserve the exact digital collection history, separate verified attendance from card ownership, and test optional milestone returns and rewards.\n- **Shared primitive:** **User ID + verified historical action.** One idea uses cumulative paid history; the other uses event/card history.\n- **Decision logic:** treat the two ideas as separate experiments. Either one can fail feasibility without invalidating the other.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full case contains global benchmarks, behavioral research, ownership models, KPI trees, cost scenarios, risk controls, roadmaps, measurement design, and source links.\n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW\" data-title=\"DatVietVAC Ownership Belonging Merchandise Growth Case Study.pdf (PDF)\">📄 DatVietVAC Ownership Belonging Merchandise Growth Case Study.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n</aside>\n\n---\n\n## 1. Why Now\n\nThe public case context combines three signals: DatVietVAC’s transition toward a listed-company era, a stated 2026–2030 emphasis on multi-layer IP monetization and the fandom economy, and a Merchandise Manager scope that spans product portfolio, pricing, B2B/B2C growth, event commercialization, suppliers, inventory, P&L, and cross-functional coordination.\n\nThe portfolio question is therefore not simply how to create two promotions. It is how verified customer history could become a durable commercial asset while keeping feasibility, economics, identity, and ownership explicit.\n\n- Evidence boundary\n    \n    The case uses public company/product information, comparable public programs, behavioral research, and the Merchandise Manager JD. It does not claim access to DatVietVAC’s internal identity architecture, customer distributions, contracts, economics, loyalty/CRM systems, securities-transfer mechanism, supplier capacity, or current operating ownership.\n    \n\n---\n\n## 2. Two Experiments, Not One Program\n\n### Idea 1 — Listed-Era Ownership Concept\n\n**Working proposition:** use a fixed historical snapshot of verified net paid value to identify eligible high-value customers, then test an optional ownership-recognition mechanism after listing.\n\n**Why the historical cutoff matters:** the mechanism recognizes value already created rather than encouraging customers to spend more now to qualify.\n\n**Primary dependency:** securities feasibility. Cohort logic, tier economics, identity quality, budget, claim flow, and communications matter only if an approved transfer structure is executable at the intended scale.\n\n**Merchandise role boundary:** own the customer concept, cohort economics, KPI, budget scenarios, and go/no-go recommendation—not securities execution.\n\n### Idea 2 — Event Joining Card: Fan History + Optional Physical Return\n\n**Working proposition:** give each eligible physical event card a unique identity, bind it to a verified fan account, preserve the exact digital collection history, and let fans optionally return selected physical cards at milestones without deleting the memory.\n\n**Important distinction:** **attendance history ≠ card collection history.** Verified attendance should come only from a reliable ticket/check-in/order source; owning a transferable card does not automatically prove attendance.\n\n**Primary dependency:** reliable identity and card provenance. The pilot can begin inside one IP/event/account system rather than waiting for a perfect enterprise-wide fan ID.\n\n**Merchandise role fit:** direct ownership of mechanics, economics, pilot scope, event handoff, reverse flow, KPI, P&L, and scale decision.\n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging(1).png\" driveid=\"1V9ejbjhrIXWBk2uoOClzlap9ToxjNbl0\" caption=\"Verified History_ Ownership & Belonging(1).png\"></diagram-card>\n\n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging(2).png\" driveid=\"1cjv8PvOo2yUA0e7rpqNHtRGrLO3_Kw0e\" caption=\"Verified History_ Ownership & Belonging(2).png\"></diagram-card>\n\n\n---\n\n## 3. One Shared Primitive\n\n> **User ID + verified historical action**\n> \n\nIdea 1 uses cumulative net paid history to test a one-time ownership-recognition mechanism. Idea 2 uses event/card history to create a persistent collection, progress, and achievement layer.\n\nThe strategic thread is the same: **the platform remembers verified contribution and turns it into ownership, history, or recognition.**\n\n<aside>\n🃏\n\n**Related but intentionally separate: Fandom Cards**\n\nA new adjacent case tests the opposite operating condition: an accessible official collectible designed for **free circulation without owner identity tracking**. The Event Joining Card means *“I was there”* and needs controlled provenance; the Fandom Card means *“this is who / what I support”* and needs frictionless circulation across carry, gift, share and trade.\n\n**Design rule:** do not bind the everyday Fandom Card to this event-history system.\n\n[DatVietVAC Fandom Cards — From Official Fandom Pack to a Gated Collectibles Product Line →](/work/datvietvac-fandom-cards)\n\n</aside>\n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging(3).png\" driveid=\"1OUwoTZP3Qj2oP8SMAW-38iKABvWEKCXX\" caption=\"Verified History_ Ownership & Belonging(3).png\"></diagram-card>\n\n\n---\n\n## 4. Pilot Before Scale\n\n### Idea 1 — Feasibility first\n\n1. Confirm the approved transfer path and transaction-data boundary.\n2. Audit identity and net-paid logic before designing tiers.\n3. Cap the share pool and model claim economics.\n4. Dry-run eligibility, claim, exception, and reconciliation flows before any public announcement.\n5. Measure the claim funnel, friction, data integrity, cost, and post-campaign customer behavior where comparison is feasible.\n\n> **Go / no-go:** do not announce until eligibility data is stable, transfer is executable at intended volume, budget is capped and reconcilable, and campaign language clearly separates recognition from investment advice or expected return.\n> \n\n### Idea 2 — One IP, two events\n\n1. Start with one IP/event/account boundary.\n2. Serialize cards and test bind/claim, duplicate handling, history, progress, and recovery.\n3. Use Event 1 to measure activation and operating friction.\n4. Fix the flow, then repeat at Event 2.\n5. Make the scale decision from fan acceptance, archive use, operational load, error rate, repeat behavior, and contribution-margin evidence.\n\nThe measurement can be staged to separate effects:\n\n- **Phase A:** history only.\n- **Phase B:** history + visible progress.\n- **Phase C:** history + progress + reward.\n\nThis helps distinguish the value of memory from gamified progress and from discounting.\n\n---\n\n## 5. What Success Should Mean\n\nThe case does not use reach alone as proof of value.\n\n**Idea 1** should be judged through eligibility accuracy, claim completion, friction, budget/reconciliation quality, and downstream customer behavior—not post-listing share price.\n\n**Idea 2** should be judged through card binding, archive revisits, collection depth, milestone behavior, repeat event/purchase behavior, operating errors, CS burden, and contribution-margin evidence.\n\n> **Scale only when behavior, economics, and operating reliability move together.** If only vanity engagement improves, redesign rather than scale.\n> \n\n---\n\n## 6. Ownership Without Role Confusion\n\nThe Merchandise Manager owns the commercial outcome and keeps the right functions connected.\n\nFor **Idea 1**, Group-level IR, Finance/Treasury, Legal/Compliance, Data/CRM, Product/Tech, CS, and an approved securities partner would need explicit responsibilities before launch.\n\nFor **Idea 2**, Product/Tech, Data/CRM, Event Production, Creative/IP/Talent, suppliers, VieSHOP/E-commerce, Logistics, Finance, CS, and Legal/Privacy form the operating chain.\n\n> **Role principle:** protect the outcome → identify the functional owner → support execution → escalate when the issue exceeds authority or capacity.\n> \n\n---\n\n## 7. Bounded Findings and Unknowns\n\n**Supported by the current case**\n\n- comparable public programs show that customer ownership recognition, persistent event memorabilia, and optional physical-return mechanics have real-world precedents;\n- behavioral research provides hypotheses for psychological ownership, goal-gradient effects, and visible progress;\n- the two proposed ideas can be structured as separate experiments around verified historical action;\n- Idea 2 can be piloted inside a narrow identity boundary without first solving enterprise-wide identity.\n\n**Still requires internal validation**\n\n- identity quality and cross-channel joins;\n- historical spend and card-count distributions;\n- securities-transfer feasibility and approved communication structure;\n- margin, reward economics, supplier/serialization capacity, and reverse-flow cost;\n- fan acceptance and actual post-event card-retention behavior;\n- current team ownership, platform capability, and implementation capacity.\n\n---\n\n## What This Case Demonstrates\n\n**Merchandise growth · IP commercialization · customer-history mechanics · reward economics · product and event operations · ownership/governance · measurement design · pilot and scale gates**\n\n---\n\n*Independent outside-in work sample · Public evidence only · August 2026*"
  },
  "/work/datvietvac-fandom-cards": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-",
    "fileName": "DatVietVAC_Fandom_Cards_Case_Study.pdf",
    "label": "📄 Preview: DatVietVAC_Fandom_Cards_Case_Study.pdf ↗",
    "title": "DatVietVAC Fandom Cards: Collectibles Product Line Case"
  },
  {
    "type": "image",
    "driveId": "1uDuipV8TBC8l_vyka_oNSNqUh0tzRfgV",
    "fileName": "00_cover_ready.png",
    "title": "00 cover ready",
    "label": "Preview: 00 cover ready ↗"
  },
  {
    "type": "image",
    "driveId": "1VYrA7MkJU5iZWJUV7vOwj99apaYbDXV9",
    "fileName": "01_initiative_summary.png",
    "title": "01 initiative summary",
    "label": "Preview: 01 initiative summary ↗"
  },
  {
    "type": "image",
    "driveId": "14OHAm-ePUzEH58suLljFwhpRqi-XYsOr",
    "fileName": "02_benchmark_mechanism_map.png",
    "title": "02 benchmark mechanism map",
    "label": "Preview: 02 benchmark mechanism map ↗"
  },
  {
    "type": "image",
    "driveId": "1iGgCjhCui7H2sVBk1kEWw9-_n1l54HYR",
    "fileName": "03_card_pack_architecture.png",
    "title": "03 card pack architecture",
    "label": "Preview: 03 card pack architecture ↗"
  },
  {
    "type": "image",
    "driveId": "1GN4ydkyJN5ecUbhtkAEQyEyikI-CHzOT",
    "fileName": "04_physical_auth_fingerprint.png",
    "title": "04 physical auth fingerprint",
    "label": "Preview: 04 physical auth fingerprint ↗"
  },
  {
    "type": "image",
    "driveId": "1P_2KleB-PyM56kwiBeXy5RAaymVldtbK",
    "fileName": "05_exchange_cycle_and_metrics.png",
    "title": "05 exchange cycle and metrics",
    "label": "Preview: 05 exchange cycle and metrics ↗"
  },
  {
    "type": "image",
    "driveId": "1_5bRzfWLSmBr1n22I4LrWlYJQ6laR1Gd",
    "fileName": "06_pack_economics.png",
    "title": "06 pack economics",
    "label": "Preview: 06 pack economics ↗"
  },
  {
    "type": "image",
    "driveId": "1WXdlWOcMtJqx1Un0Kc8ArNzv1isKkVVH",
    "fileName": "07_event_pack_to_annual_box_scale.png",
    "title": "07 event pack to annual box scale",
    "label": "Preview: 07 event pack to annual box scale ↗"
  },
  {
    "type": "image",
    "driveId": "1Xw6ankrngAZ0oUV34AQXKgv3LkWDY_6w",
    "fileName": "08_final_case_summary.png",
    "title": "08 final case summary",
    "label": "Preview: 08 final case summary ↗"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-\" data-title=\"DatVietVAC Fandom Cards Case Study (PDF)\">📄 DatVietVAC Fandom Cards Case Study (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n## One listing changed the starting question\n\nIn the exploratory Shopee pull for *Anh Trai Say Hi*, one card listing from one seller showed more than 30,000 units sold. The pull was not exhaustive, so I use that number only as a demand signal; it was enough to shift the product question toward what an official 12-card pack would need to do better.\n\n> **Merchandise Initiative / Outside-In Working Case · Developed Work Sample**\n> \n\n> Updated 16 August 2026 · Public evidence only · Not commissioned by DatVietVAC\n> \n\n\n<diagram-card title=\"00_cover_ready.png\" driveid=\"1uDuipV8TBC8l_vyka_oNSNqUh0tzRfgV\" caption=\"00_cover_ready.png\"></diagram-card>\n\n\n> **Core question:** Can DatVietVAC turn already-observed demand for artist cards into an official 12-card product that fans carry, share, display and trade in everyday life — then use repeated drop evidence to earn a gated collectibles product line?\n> \n\n---\n\n## Executive Summary\n\n- **Product promise:** Official enough to trust. Personal enough to carry. Simple enough to share.\n- **Pilot unit:** one IP/program · one launch/drop occasion · one sealed **12-card pack** · one public MSRP.\n- **Working price:** **VND89K preferred working MSRP** when it preserves a visibly better official quality bar; **VND79K** remains a value-engineering sensitivity only if that quality bar survives.\n- **Authentication:** no owner registry, crypto or NFC requirement. Build a reproducible **physical manufacturing signature** across substrate, print, surface, cut and packaging.\n- **Behavior thesis:** 12 cards create enough social inventory to keep, gift, share, carry, display and trade. Event/concert moments can concentrate launch demand; everyday life is where circulation is tested.\n- **Social-object kill rule:** if packs sell but both designed interaction and post-drop daily circulation remain weak after one reasonable iteration, kill the broader social-object thesis. The card may remain merchandise if its direct economics justify it.\n- **Scale logic:** **prototype → drop pilot → repeated product line → conditional annual box → collectibles pod → selective internalization.** Each stage is an earned option, not a default roadmap.\n\n<aside>\n↳\n\n**Strategic bet**\n\nDatVietVAC does not need to manufacture community. It needs to issue an official object good enough to circulate, give fans enough cards to keep and share, and then observe what actually happens after checkout. Direct card P&L must still stand on its own.\n\n</aside>\n\n---\n\n## 1. The Human and Business Opportunity\n\nDatVietVAC already has a dense entertainment ecosystem: programs, artists, content moments, concerts, distribution and D2C surfaces. The outside-in problem is therefore not lack of content. It is whether the IP owner can turn visible existing demand for artist cards into an official product that is materially better and worth carrying.\n\nIn the exploratory Shopee pull used for this case, one **Anh Trai Say Hi** card listing from one seller showed more than **30,000 units sold**. Hundreds of other products and sellers were visible, but the pull was not exhaustive across listings, product lines or platforms. This is directional demand evidence, not market size, and it does not by itself establish the authorization status of each seller or listing.\n\nThe observed category is therefore not starting from zero. The product opportunity is to compete with existing outside-channel supply through official content access, stronger material/print/finish, consistent packaging and a recognizable manufacturing signature; seller authorization still needs to be checked rather than assumed.\n\nThe human mechanism is broader than event trading. A 12-card pack gives one buyer enough inventory to keep favorite cards, gift one or two to friends, trade duplicates, carry a card in a phone case or card holder, attach it to a bag, photograph it or post it. Events can concentrate launch attention, but **daily life is the real usage environment**.\n\n> **Working thesis:** the card is an object, a signal and social inventory. The company can make the object trustworthy and easy to circulate; fans decide whether repeated sharing, carrying, display and exchange become belonging.\n> \n\nThe mechanism is plausible, not guaranteed. If the card sells but remains socially inert after checkout, it may still be a valid merchandise SKU. It does not automatically earn a community thesis.\n\n\n<diagram-card title=\"01_initiative_summary.png\" driveid=\"1VYrA7MkJU5iZWJUV7vOwj99apaYbDXV9\" caption=\"01_initiative_summary.png\"></diagram-card>\n\n\n---\n\n## 2. Product Architecture: Program → Drop Occasion → Pack → Conditional Annual Box\n\nThe architecture fixes four levels:\n\n1. **Program / IP** — provides the year-long content universe, rights framework and common issuer/manufacturing grammar.\n2. **Drop occasion** — creates freshness and a reason to buy now. A concert/event is a strong pilot catalyst, but later drops can also follow program milestones, artist moments or other culturally meaningful releases.\n3. **Pack** — the commercial unit: always **one sealed 12-card pack** in the pilot and base product-line design; its value should continue after the launch occasion through everyday circulation.\n4. **Annual box** — a later program-level archive/collector product: **12 sealed packs × 12 cards + one collectible**, considered only after multi-drop gates pass.\n\nThis hierarchy prevents two common drifts: redesigning the pack every time the occasion changes, and assuming a box simply because a program is large.\n\n### Why 12 cards\n\nThe earlier two-card proposition was too thin. Twelve cards create a stronger opening ritual, more visible value-in-hand, room for a clear slot promise and better comparison of physical quality. More importantly, they create **shareable social inventory**: enough cards for one buyer to keep favorites, gift or share one or two, display others and still have duplicates or gaps that make exchange natural.\n\n### Working pack anatomy\n\n| Slot | Working count | Role |\n| --- | --- | --- |\n| Base identity | 10 | Artists, characters, quotes, lyrics, memes or era markers on one consistent official physical grammar. |\n| Moment / collective | 1 | Performance, episode, concert or ensemble memory. |\n| Special / chase | 1 guaranteed | Visibly differentiated pull such as foil, holo or texture where economics allow. |\n\nThe slot structure is a working collation hypothesis, not a final odds table. Exact rarity, artist distribution and variants remain production decisions after rights, content and demand review.\n\n\n<diagram-card title=\"02_benchmark_mechanism_map.png\" driveid=\"14OHAm-ePUzEH58suLljFwhpRqi-XYsOr\" caption=\"02_benchmark_mechanism_map.png\"></diagram-card>\n\n\n---\n\n## 3. Boundary Versus the Event Joining Card\n\n| Dimension | Event Joining Card | Fandom Card |\n| --- | --- | --- |\n| Meaning | “I was there.” | “This is who or what I support.” |\n| Supply | Controlled and event-linked. | Broad enough for circulation and repeated drops. |\n| Identity binding | May be required to prove participation/history. | No owner identity required. |\n| Transfer | Not the core behavior. | Free pass, gift and trade are core behaviors. |\n| Value source | Verified memory and milestone meaning. | Identity, collectibility, culture and exchange. |\n| Data | User/event/card history. | SKU, batch, sales, quality and aggregate behavior signals. |\n\n> **Design boundary:** do not bind the everyday Fandom Card to the Event Joining Card history system. One needs controlled provenance; the other needs frictionless circulation.\n> \n\n---\n\n## 4. Authenticity Through a Manufacturing Signature\n\nV2 drops the assumption that every card needs a premium anti-counterfeit device. The pilot instead establishes a **reproducible physical fingerprint** that fans can learn and that the company or a specialist can inspect more deeply when a dispute occurs.\n\nThe signature spans:\n\n- **Substrate:** stock family, thickness/caliper, weight range, opacity, stiffness and internal core.\n- **Print:** color targets, black density, sharpness, halftone/rosette, registration and back alignment.\n- **Surface:** gloss/matte level, texture and coating response.\n- **Cut:** dimensions, corner radius, centering and edge cleanliness.\n- **Packaging:** wrapper film, seal, print, batch/lot mark and official reference.\n\n### Fan-facing three-step check\n\n1. **Feel and stack** — compare rigidity, thickness, edge/core, size, cut and surface against a known official card.\n2. **Look under normal and angled light** — compare color, text sharpness, back alignment, print pattern, gloss/texture and wrapper seal.\n3. **Escalate disputed cards** — compare with official references/retained samples or an approved specialist; no account binding is required.\n\n> **Pilot rule:** no blockchain, crypto or ownership transfer. No NFC requirement. Holo or texture may identify a special content tier, but the official manufacturing signature must exist across the entire product family.\n> \n\n\n<diagram-card title=\"03_card_pack_architecture.png\" driveid=\"1iGgCjhCui7H2sVBk1kEWw9-_n1l54HYR\" caption=\"03_card_pack_architecture.png\"></diagram-card>\n\n\n---\n\n## 5. Drop Occasion and Everyday Circulation Test\n\nAn event or concert is a useful **launch catalyst** because it supplies fresh cultural content, concentrated demand and a shared context. It is not the only place where the product should create value.\n\nThe operating loop is:\n\n**Select → compose → produce → release → circulate → observe → decide.**\n\nThe pilot can still provide one light and fair exchange opportunity — for example a clearly signed table or short trade hour — without making rewards or attendance contingent on trading. But the broader test continues after the event.\n\nEveryday circulation is observed through behavior: did buyers keep and carry cards, gift or share them with friends, display them in phone cases/card holders/bags, photograph or post them, trade duplicates, trigger conversations, or return for another drop?\n\n<aside>\n✕\n\n**Social-object kill rule**\n\nIf packs sell but both the designed interaction opportunity **and** post-drop daily circulation remain weak after one reasonable iteration, kill the broader social-object thesis. Continue only as merchandise if the direct economics justify it.\n\n</aside>\n\nA weak trade table alone is not enough to kill the idea; Vietnamese fan behavior may express itself through friend-to-friend gifting, school/social-group exchange, carry/display or UGC instead. DatVietVAC should support emergence, not declare a community into existence. A marketplace, grading service, price index, resale guarantee, reseller program or always-on creator network should not be the first move.\n\n\n<diagram-card title=\"04_physical_auth_fingerprint.png\" driveid=\"1GN4ydkyJN5ecUbhtkAEQyEyikI-CHzOT\" caption=\"04_physical_auth_fingerprint.png\"></diagram-card>\n\n\n---\n\n## 6. Pilot, Measurement and Economics\n\n### Working 90-day pilot\n\n- **Program / IP:** one active program with visible demand and enough artist/moment variety.\n- **Occasion:** one event or concert-linked launch for the pilot, followed by explicit post-drop daily-circulation observation.\n- **Pack:** one sealed 12-card pack.\n- **Checklist:** approximately 30 outcomes as a starting hypothesis.\n- **Price:** one public MSRP; **VND89K preferred working anchor** when it protects the official quality bar. **VND79K** is a value-engineering sensitivity only if material, print, finish, packaging and rights economics remain credible.\n- **Run:** 3,000 packs + pre-agreed reprint option.\n- **Channel:** VieSHOP + one event touchpoint.\n- **Circulation:** checklist + light creator seeding + one optional exchange touchpoint + sampled post-event observation of carry/share/display/gift/trade behavior.\n- **Technology:** no owner system; physical manufacturing signature first.\n- **Annual box:** excluded from pilot.\n\n### Everyday circulation signals\n\nTrack a small set of post-checkout behaviors without building an owner ledger: carry/display, share/gift, trade, organic photo/story/UGC, interaction outside official events, “someone asked me about the card,” and repeat purchase for self or another person. Use sampled surveys, interviews and pilot observation rather than tracking each physical card owner.\n\n### Five pilot gates\n\n| Gate | What it must show | If weak |\n| --- | --- | --- |\n| Paid demand | Healthy sell-through plus repeat/reprint intent without excessive discount dependence. | Rework price/value/channel once, then stop. |\n| Product + trust | Worth-price response, repeatable official quality and acceptable defect/authentication outcomes. | Fix spec/vendor before another drop. |\n| Behavior + belonging | Credible trade/gift/display/content and recognition/interaction beyond seeded activity. | Kill community thesis after one designed iteration. |\n| Economics | Positive path after physical COGS, rights/royalty, payment, handling, shipping and inventory risk. | Requote, re-spec or stop. |\n| Operations + rights | Clean approval cycle, on-time delivery, correct collation, retained references and repeatable rights/production process. | Hold portfolio expansion. |\n\n### Two ledgers, not one blended story\n\n- **Direct Card P&L:** pack revenue; physical card/pack COGS; rights/royalty; payment; handling; delivery subsidy; returns/write-off; pilot/team allocation. It must become economically defensible on its own.\n- **Ecosystem Impact:** organic content, carry/display, gift/share, trade, creator repetition, interaction inside and outside official events, artist/program resurfacing and directional cross-purchase. Measure separately; do not invent VND value to hide weak merchandise economics.\n\n### V2 pack-economics sensitivity\n\nThe case uses a planning sensitivity, not a public price ladder. With an illustrative **VND27K physical build**, the planning sensitivity estimates product GM around **59.7% at VND89K** and **55.6% at VND79K**, before payment/handling/delivery subsidy and fixed pilot cost. The higher anchor is preferred only if fans can visibly feel the official quality difference; actual tax treatment, artist contracts, logistics, GM hurdle and supplier quotes remain internal validation dependencies.\n\n\n<diagram-card title=\"05_exchange_cycle_and_metrics.png\" driveid=\"1P_2KleB-PyM56kwiBeXy5RAaymVldtbK\" caption=\"05_exchange_cycle_and_metrics.png\"></diagram-card>\n\n\n---\n\n## 7. Operating and Rights Architecture\n\n### One accountable third party\n\n> **Own the specification and acceptance. Outsource the industrial chain through one accountable lead partner.**\n> \n\nFor the pilot, DatVietVAC should avoid splitting prepress, printing, finishing, collation and pack assembly across loosely coordinated vendors. One lead specialist manufacturer/packer should contract for the full physical delivery under a single SOW, even when it uses disclosed subcontractors.\n\nDatVietVAC retains control of final art, rights approval, physical fingerprint, proof sign-off, substitution approval, collation rules, audit samples, lot traceability requirements, retained references and reject/rework decisions.\n\n### Rights cannot be outsourced away\n\nLegal/IP must confirm which artist likenesses, lyrics, quotes, memes, episode stills, music-related imagery and sponsor marks may be commercially reproduced. The rights design should distinguish:\n\n- drop-specific use versus later annual compilation/reprint/reuse;\n- whether artist compensation is already included or must be itemized as fee/royalty;\n- file custody and subcontractor limits;\n- pack-level sales/returns and royalty reporting;\n- fresh approval requirements for a later annual box.\n\n\n<diagram-card title=\"06_pack_economics.png\" driveid=\"1_5bRzfWLSmBr1n22I4LrWlYJQ6laR1Gd\" caption=\"06_pack_economics.png\"></diagram-card>\n\n\n---\n\n## 8. Earn the Right to Scale\n\nA successful pilot unlocks **another controlled drop** — not an annual box and not a standalone venture.\n\nThe scale ladder is:\n\n**0 — Prototype** → physical fingerprint, 12-card pack, checklist, vendor proofs and fan/WTP research.  \n\n**1 — Drop pilot** → one IP/occasion, one MSRP, 3,000 packs, light interaction opportunity, post-drop circulation observation and full gate review.  \n\n**2 — Repeated product line** → recurring drops, standardized issuer back/spec/SOW, artist/occasion demand tracking, everyday-circulation signals and mini-P&L.  \n\n**3 — Conditional annual box** → 12 sealed packs × 12 cards + one collectible for a proven year-long program, only after box-design evidence passes.  \n\n**4 — Collectibles pod** → portfolio strategy, distribution, creator/community support and dedicated P&L after multiple programs sustain releases.  \n\n**5 — Selective internalization** → bring high-value control points in-house only when control is economically superior to specialist outsourcing.\n\n### Annual box remains a principle, not a pilot product\n\nThe annual box follows the **program**, not one isolated concert. Design work is unlocked only when multi-drop evidence supports:\n\n- repeated pack demand and repeat buyers;\n- artist/event demand breadth rather than one hot individual;\n- enough distinct, rights-cleared annual content for 144 cards to remain meaningful;\n- buyer fairness for existing collectors;\n- intentional inventory/reprint policy;\n- viable economics;\n- clean compilation rights and third-party production capability.\n\nExact checklist, pack mix, rarity, exclusives, print run, price and cannibalization policy remain deferred.\n\n\n<diagram-card title=\"07_event_pack_to_annual_box_scale.png\" driveid=\"1WXdlWOcMtJqx1Un0Kc8ArNzv1isKkVVH\" caption=\"07_event_pack_to_annual_box_scale.png\"></diagram-card>\n\n\n---\n\n## 9. Decision Memo\n\n**Recommendation:** test the initiative as a contained **12-card official fandom-pack pilot**, using an event/concert as the launch catalyst but measuring what happens after the product enters everyday life.\n\n**Before print:** clean asset-level rights; approved physical fingerprint; acceptable third-party proof; capped pilot economics; clear collation/pack promise.\n\n**Working price:** prefer **VND89K** when it protects a visibly better official quality bar; use **VND79K** only as a value-engineering sensitivity if the quality difference remains credible.\n\n**Kill the broader social-object thesis if:** both designed interaction and post-drop carry/share/display/gift/trade signals remain weak after one reasonable iteration.\n\n**Another drop is earned only when:** paid demand, repeat/reprint interest, recognized official quality, positive economic path, clean rights, repeatable operations and at least credible circulation evidence appear together.\n\n**Annual-box design is earned only when:** multi-drop pack sales, repeat buyers, artist/occasion demand evidence, annual content depth, buyer fairness, clean compilation rights, inventory plan and viable economics support it.\n\n> **Manager-seat principle:** manage the initiative as a sequence of earned options. Keep the fan job, product specification, rights, supplier accountability, unit economics, release calendar, circulation evidence and scale decision connected.\n> \n\n\n<diagram-card title=\"08_final_case_summary.png\" driveid=\"1Xw6ankrngAZ0oUV34AQXKgv3LkWDY_6w\" caption=\"08_final_case_summary.png\"></diagram-card>\n\n\n---\n\n## Evidence Boundary\n\nPublic evidence supports company context, current product observations, global authentication practices and market/manufacturing precedents. It does **not** prove DatVietVAC demand, achievable cost, rights coverage, card odds, box viability or community effects.\n\n**Known from public sources:** company-reported IP/event/distribution ecosystem; current public merchandise examples; external authentication and manufacturing mechanisms.\n\n**Observed in the case research pull:** one Anh Trai Say Hi Shopee listing from one seller showed more than 30,000 units sold, with many other products/sellers visible but not exhaustively captured. Treat this as directional demand evidence only, not market size or proof of authorization status.\n\n**Outside-in hypotheses:** 12-card social-inventory consumer job; VND89K preferred price viability with VND79K sensitivity; physical COGS; everyday-circulation mechanism; single-third-party operating design.\n\n**Must validate internally:** IP/artist rights, actual COGS and fixed budget, GM hurdle, pack demand, circulation behavior, collation, defect tolerance, box eligibility and operating ownership.\n\n---\n\n## Full Case\n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-\" data-title=\"DatVietVAC Fandom Cards Case Study.pdf (PDF)\">📄 DatVietVAC Fandom Cards Case Study.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n*Independent outside-in work sample · Public evidence only · Updated 16 August 2026*"
  },
  "/work/vieshop-fan-centred-merchandise-system": {
  "assets": [
  {
    "type": "pdf",
    "driveId": "1WzTp4pPuKpweybKwd7yAQAv0qxUhsWWM",
    "fileName": "DatVietVAC_VieSHOP_Fan_Centred_Merchandise_System_Case_Study_V2.pdf",
    "title": "DatVietVAC VieSHOP Fan Centred Merchandise System Case Study V2.pdf",
    "label": "Preview: DatVietVAC VieSHOP Fan Centred Merchandise System Case Study V2.pdf ↗"
  },
  {
    "type": "image",
    "driveId": "1ujqzcWWCWzZtNHj_L2pAdZrf7L8-m2f0",
    "fileName": "Cover.png",
    "title": "Cover",
    "label": "Preview: Cover ↗"
  },
  {
    "type": "image",
    "driveId": "12OU-n1KAX4lPZdgcVqdV9O7GbAYKbESl",
    "fileName": "1.png",
    "title": "1",
    "label": "Preview: 1 ↗"
  },
  {
    "type": "image",
    "driveId": "1pv9uBwv5mLmW1CtzcFvd5iZuydej1Bfh",
    "fileName": "2.png",
    "title": "2",
    "label": "Preview: 2 ↗"
  },
  {
    "type": "image",
    "driveId": "1z2U0WrMJtGkM3fPpt5cwreTZQEsG3xxh",
    "fileName": "3.png",
    "title": "3",
    "label": "Preview: 3 ↗"
  },
  {
    "type": "image",
    "driveId": "1REgbTi_VoMeickQFQET6mSdWPEpmJrmd",
    "fileName": "4.png",
    "title": "4",
    "label": "Preview: 4 ↗"
  },
  {
    "type": "image",
    "driveId": "1n5uf1M7Wibi9i9TUjW717z-vXfAAqYWe",
    "fileName": "5.png",
    "title": "5",
    "label": "Preview: 5 ↗"
  },
  {
    "type": "image",
    "driveId": "1njlqytp_pmQHCXcZTovo-AMXMuWZNpwH",
    "fileName": "6.png",
    "title": "6",
    "label": "Preview: 6 ↗"
  },
  {
    "type": "image",
    "driveId": "1k-DCta7TRJOpAFak2jvjmA1tQPiOiHTe",
    "fileName": "7.png",
    "title": "7",
    "label": "Preview: 7 ↗"
  },
  {
    "type": "image",
    "driveId": "1Qkb9SK6qK_vqeEZbA-OP8Yk8YVhw0tgy",
    "fileName": "8.png",
    "title": "8",
    "label": "Preview: 8 ↗"
  },
  {
    "type": "image",
    "driveId": "1EhmW63btaIt5Xt8w8cYGxrVUrDa8UXu6",
    "fileName": "9.png",
    "title": "9",
    "label": "Preview: 9 ↗"
  },
  {
    "type": "image",
    "driveId": "1tphbt8B05_-WgVXMnbKNbiXLZ1TPX59P",
    "fileName": "10.png",
    "title": "10",
    "label": "Preview: 10 ↗"
  },
  {
    "type": "image",
    "driveId": "1rSFt4zJekgJRmbFQ8Px43H_ERbIkXmKj",
    "fileName": "11.png",
    "title": "11",
    "label": "Preview: 11 ↗"
  },
  {
    "type": "image",
    "driveId": "1SHrHXm2P0AQSfyhd0pK64q9IRWsuOXXX",
    "fileName": "12.png",
    "title": "12",
    "label": "Preview: 12 ↗"
  }
],
  "body": "<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1WzTp4pPuKpweybKwd7yAQAv0qxUhsWWM\" data-title=\"VieSHOP — Fan-Centred Merchandise System\">Read full case</button><a href=\"https://drive.google.com/file/d/1WzTp4pPuKpweybKwd7yAQAv0qxUhsWWM/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Open in new tab\">↗</a>\n<a href=\"https://drive.google.com/drive/u/0/folders/1PjSsAqx19py6Nt7gogwgkzaqUe8jdCuo\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-btn\">View figure set ↗</a></div>\n\n<figure class=\"f-diagram-card\">\n      <div class=\"f-diagram-header\">\n        <span class=\"f-diagram-title\">📊 VieSHOP case cover</span>\n        <div class=\"f-diagram-header-actions\">\n          <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1ujqzcWWCWzZtNHj_L2pAdZrf7L8-m2f0\" data-title=\"VieSHOP case cover\">Preview</button>\n          <a href=\"https://drive.google.com/file/d/1ujqzcWWCWzZtNHj_L2pAdZrf7L8-m2f0/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n        </div>\n      </div>\n      <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1ujqzcWWCWzZtNHj_L2pAdZrf7L8-m2f0\" data-title=\"VieSHOP case cover\" title=\"Click to enlarge\">\n        <img src=\"https://lh3.googleusercontent.com/d/1ujqzcWWCWzZtNHj_L2pAdZrf7L8-m2f0=w1600\" alt=\"VieSHOP case cover\" loading=\"lazy\">\n        <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n      </div>\n      <figcaption class=\"f-diagram-caption\">Independent outside-in case · Working V2 · 23 August 2026</figcaption>\n    </figure>\n\n> <strong>Independent Product / Commerce Case · DatVietVAC Merchandise Manager lens · Working V2</strong>\n> \n> Public evidence, one direct black-box shopping session, a user-supplied qualitative signal, and working hypotheses. This case does not claim access to DatVietVAC internal analytics, contracts, margins, source code, customer data, rights, or technology architecture.\n\n## Case at a glance\n\nI began with one ordinary shopping session on VieSHOP. The store was usable enough to complete, but the journey exposed friction before any larger fandom feature became relevant: slow page and cart interactions, a campaign CTA that returned a 404, campaign-led navigation, product pages that made choice harder, awkward unavailable variants, and little visible post-purchase utility. These are scoped observations from one session, not a full performance audit.\n\nThe case asks what VieSHOP would need to become if merchandise has to serve more artists, IPs, product roles, and a longer fan relationship. The working answer is a fan-centred merchandise system with two connected tracks: repair the commerce foundation first, then build a merchandise learning loop across artist discovery, product roles, assortment, rights, vendors, quantity, launch, and transfer to a second artist.\n\n## What changes first\n\nThe recommendation is deliberately practical:\n\n<ol class=\"f-numbered-list\">\n<li><strong>Measure and stabilise the critical store path.</strong> Fix broken CTAs and verify homepage, catalog, product, cart, checkout, account, order, and support tasks before adding feature weight.</li>\n<li><strong>Rebuild discovery as a stable system.</strong> Let fans browse by Artist, Show / Event / IP, Product Family, Availability, and Price rather than relying on a small set of campaign-led routes.</li>\n<li><strong>Make product, account, and recovery states useful.</strong> A product page must explain identity, available variants, quality, sale state, delivery or pickup, and what happens when the promise fails. My VieSHOP begins with order, claim, support, and wishlist continuity—not avatars or social features.</li>\n<li><strong>Test merchandise as a learning loop.</strong> Start with a bounded portfolio across Daily / Core and selected Premium / Limited / Event roles. Learn from paid demand, quality, support burden, contribution, and whether the operating model transfers to Artist 2.</li>\n</ol>\n\n> <strong>Repair the store → rebuild discovery → clarify product, account, and support → run a small merchandise pilot → learn from paid behaviour → test Artist 2 transfer → prepare future interfaces.</strong>\n\n## Two connected workstreams\n\n<div class=\"f-table-wrap\"><table class=\"f-table\"><thead><tr><th>Workstream</th><th>What it addresses</th><th>Merchandise role</th></tr></thead><tbody><tr><td><strong>Commerce Foundation</strong></td><td>Performance, navigation, product clarity, cart and account continuity, order and support recovery.</td><td>Define fan and product requirements, acceptance criteria, launch risk, and commercial consequence.</td></tr><tr><td><strong>Merchandise Growth</strong></td><td>Artist discovery, product roles, assortment, rights, vendor, price, quantity, inventory, and launch learning.</td><td>Own the commercial decision path and the repeat / redesign / stop recommendation.</td></tr></tbody></table></div>\n\nProduct and Tech own architecture and implementation. Merchandise needs the control view: which gate is blocked, who owns the next decision, what evidence is missing, and what recovery option remains when the promise to the fan is at risk.\n\n## Operating sequence & controls\n\nThe work should advance through six bounded stages: reality check, critical-path stabilisation, discovery MVP, a small product pilot, launch-and-learn, and Artist 2 transfer. Each gate needs a visible owner, the evidence required to proceed, the consequence of delay or failure, and a recovery path.\n\nCampaign links also need lifecycle ownership. A lightweight register should record the URL, owner, live dates, intended state, fallback or redirect, and last validation. This turns a broken CTA from a one-off web defect into a preventable control failure.\n\nCompany control does not require self-hosting every layer. It requires the ability to observe the state, make the decision, and recover the fan promise when a vendor or platform handoff fails.\n\n## Measurement & reversal\n\nThe minimum view combines store usability, discovery quality, paid demand, product-role performance, support burden, inventory and contribution, and whether the operating model transfers beyond the first artist.\n\nThe pilot should pause, narrow, or reverse when the critical path remains unstable, rights or vendor readiness cannot be confirmed, unavailable states cannot be handled clearly, support cost overwhelms the product role, or Artist 2 cannot reproduce the result without exceptional effort.\n\n## What remains conditional\n\n<details class=\"f-details\"><summary>Vie World and other future layers</summary><div class=\"f-details-content\">\n\nVie World is a proposed future relationship layer, not a dependency of the recommendation and not a confirmed DatVietVAC roadmap. VieSHOP may eventually sit inside it as a commerce module or beside it as a connected service. The store and merchandise model must still work if the concept changes or never launches.\n\nMembership benefits, digital merchandise, SKU-level pricing, and control-transfer choices also remain conditional. They require internal evidence on rights, COGS, contribution, inventory, target buyer behaviour, technical constraints, operating ownership, and support burden.\n\n</div></details>\n\n## Evidence boundary\n\nOne black-box session can establish that these specific observations occurred; it cannot establish a universal performance problem, identify Haravan as the root cause, prove internal operations are weak, or validate demand, conversion, rights, margins, and technical feasibility. The full case preserves the evidence register, control roadmap, portfolio hypothesis, reversal conditions, and internal validation requirements.\n\n## Source figure suite\n\n\n\n<details class=\"f-details\"><summary>Explore all 12 case figures</summary><div class=\"f-details-content\">\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 1 — Merchandise as a Path Back to IP</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"12OU-n1KAX4lPZdgcVqdV9O7GbAYKbESl\" data-title=\"Figure 1 — Merchandise as a Path Back to IP\">Preview</button><a href=\"https://drive.google.com/file/d/12OU-n1KAX4lPZdgcVqdV9O7GbAYKbESl/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"12OU-n1KAX4lPZdgcVqdV9O7GbAYKbESl\" data-title=\"Figure 1 — Merchandise as a Path Back to IP\"><img src=\"https://lh3.googleusercontent.com/d/12OU-n1KAX4lPZdgcVqdV9O7GbAYKbESl=w1600\" alt=\"Figure 1 — Merchandise as a Path Back to IP\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 2 — Two Workstreams, One Fan Outcome</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1pv9uBwv5mLmW1CtzcFvd5iZuydej1Bfh\" data-title=\"Figure 2 — Two Workstreams, One Fan Outcome\">Preview</button><a href=\"https://drive.google.com/file/d/1pv9uBwv5mLmW1CtzcFvd5iZuydej1Bfh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1pv9uBwv5mLmW1CtzcFvd5iZuydej1Bfh\" data-title=\"Figure 2 — Two Workstreams, One Fan Outcome\"><img src=\"https://lh3.googleusercontent.com/d/1pv9uBwv5mLmW1CtzcFvd5iZuydej1Bfh=w1600\" alt=\"Figure 2 — Two Workstreams, One Fan Outcome\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 3 — Fan-Centred Merchandise Discovery and Lifecycle</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1z2U0WrMJtGkM3fPpt5cwreTZQEsG3xxh\" data-title=\"Figure 3 — Fan-Centred Merchandise Discovery and Lifecycle\">Preview</button><a href=\"https://drive.google.com/file/d/1z2U0WrMJtGkM3fPpt5cwreTZQEsG3xxh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1z2U0WrMJtGkM3fPpt5cwreTZQEsG3xxh\" data-title=\"Figure 3 — Fan-Centred Merchandise Discovery and Lifecycle\"><img src=\"https://lh3.googleusercontent.com/d/1z2U0WrMJtGkM3fPpt5cwreTZQEsG3xxh=w1600\" alt=\"Figure 3 — Fan-Centred Merchandise Discovery and Lifecycle\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 4 — Fan-Centred VieSHOP Experience Concept</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1REgbTi_VoMeickQFQET6mSdWPEpmJrmd\" data-title=\"Figure 4 — Fan-Centred VieSHOP Experience Concept\">Preview</button><a href=\"https://drive.google.com/file/d/1REgbTi_VoMeickQFQET6mSdWPEpmJrmd/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1REgbTi_VoMeickQFQET6mSdWPEpmJrmd\" data-title=\"Figure 4 — Fan-Centred VieSHOP Experience Concept\"><img src=\"https://lh3.googleusercontent.com/d/1REgbTi_VoMeickQFQET6mSdWPEpmJrmd=w1600\" alt=\"Figure 4 — Fan-Centred VieSHOP Experience Concept\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 5 — The Fan Carries Intent. The System Carries Context.</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1n5uf1M7Wibi9i9TUjW717z-vXfAAqYWe\" data-title=\"Figure 5 — The Fan Carries Intent. The System Carries Context.\">Preview</button><a href=\"https://drive.google.com/file/d/1n5uf1M7Wibi9i9TUjW717z-vXfAAqYWe/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1n5uf1M7Wibi9i9TUjW717z-vXfAAqYWe\" data-title=\"Figure 5 — The Fan Carries Intent. The System Carries Context.\"><img src=\"https://lh3.googleusercontent.com/d/1n5uf1M7Wibi9i9TUjW717z-vXfAAqYWe=w1600\" alt=\"Figure 5 — The Fan Carries Intent. The System Carries Context.\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 6 — Many Growth Levers, One Bounded Case</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1njlqytp_pmQHCXcZTovo-AMXMuWZNpwH\" data-title=\"Figure 6 — Many Growth Levers, One Bounded Case\">Preview</button><a href=\"https://drive.google.com/file/d/1njlqytp_pmQHCXcZTovo-AMXMuWZNpwH/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1njlqytp_pmQHCXcZTovo-AMXMuWZNpwH\" data-title=\"Figure 6 — Many Growth Levers, One Bounded Case\"><img src=\"https://lh3.googleusercontent.com/d/1njlqytp_pmQHCXcZTovo-AMXMuWZNpwH=w1600\" alt=\"Figure 6 — Many Growth Levers, One Bounded Case\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 7 — Product Role Before Price</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1k-DCta7TRJOpAFak2jvjmA1tQPiOiHTe\" data-title=\"Figure 7 — Product Role Before Price\">Preview</button><a href=\"https://drive.google.com/file/d/1k-DCta7TRJOpAFak2jvjmA1tQPiOiHTe/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1k-DCta7TRJOpAFak2jvjmA1tQPiOiHTe\" data-title=\"Figure 7 — Product Role Before Price\"><img src=\"https://lh3.googleusercontent.com/d/1k-DCta7TRJOpAFak2jvjmA1tQPiOiHTe=w1600\" alt=\"Figure 7 — Product Role Before Price\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 8 — Progressive Control Without Pretending to Be the Architect</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1Qkb9SK6qK_vqeEZbA-OP8Yk8YVhw0tgy\" data-title=\"Figure 8 — Progressive Control Without Pretending to Be the Architect\">Preview</button><a href=\"https://drive.google.com/file/d/1Qkb9SK6qK_vqeEZbA-OP8Yk8YVhw0tgy/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1Qkb9SK6qK_vqeEZbA-OP8Yk8YVhw0tgy\" data-title=\"Figure 8 — Progressive Control Without Pretending to Be the Architect\"><img src=\"https://lh3.googleusercontent.com/d/1Qkb9SK6qK_vqeEZbA-OP8Yk8YVhw0tgy=w1600\" alt=\"Figure 8 — Progressive Control Without Pretending to Be the Architect\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Source figure from the VieSHOP Working V2 case.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 9 — Taxonomy can carry meaning</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1EhmW63btaIt5Xt8w8cYGxrVUrDa8UXu6\" data-title=\"Figure 9 — Taxonomy can carry meaning\">Preview</button><a href=\"https://drive.google.com/file/d/1EhmW63btaIt5Xt8w8cYGxrVUrDa8UXu6/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1EhmW63btaIt5Xt8w8cYGxrVUrDa8UXu6\" data-title=\"Figure 9 — Taxonomy can carry meaning\"><img src=\"https://lh3.googleusercontent.com/d/1EhmW63btaIt5Xt8w8cYGxrVUrDa8UXu6=w1600\" alt=\"Figure 9 — Taxonomy can carry meaning\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working V2 · 23 August 2026. Future relationship and digital layers remain conditional concepts.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 10 — Vie World — a fan home</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1tphbt8B05_-WgVXMnbKNbiXLZ1TPX59P\" data-title=\"Figure 10 — Vie World — a fan home\">Preview</button><a href=\"https://drive.google.com/file/d/1tphbt8B05_-WgVXMnbKNbiXLZ1TPX59P/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1tphbt8B05_-WgVXMnbKNbiXLZ1TPX59P\" data-title=\"Figure 10 — Vie World — a fan home\"><img src=\"https://lh3.googleusercontent.com/d/1tphbt8B05_-WgVXMnbKNbiXLZ1TPX59P=w1600\" alt=\"Figure 10 — Vie World — a fan home\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working V2 · 23 August 2026. Future relationship and digital layers remain conditional concepts.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 11 — My Space — a fan home designed by the fan</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1rSFt4zJekgJRmbFQ8Px43H_ERbIkXmKj\" data-title=\"Figure 11 — My Space — a fan home designed by the fan\">Preview</button><a href=\"https://drive.google.com/file/d/1rSFt4zJekgJRmbFQ8Px43H_ERbIkXmKj/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1rSFt4zJekgJRmbFQ8Px43H_ERbIkXmKj\" data-title=\"Figure 11 — My Space — a fan home designed by the fan\"><img src=\"https://lh3.googleusercontent.com/d/1rSFt4zJekgJRmbFQ8Px43H_ERbIkXmKj=w1600\" alt=\"Figure 11 — My Space — a fan home designed by the fan\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working V2 · 23 August 2026. Future relationship and digital layers remain conditional concepts.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 12 — Physical merchandise → digital companion</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1SHrHXm2P0AQSfyhd0pK64q9IRWsuOXXX\" data-title=\"Figure 12 — Physical merchandise → digital companion\">Preview</button><a href=\"https://drive.google.com/file/d/1SHrHXm2P0AQSfyhd0pK64q9IRWsuOXXX/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1SHrHXm2P0AQSfyhd0pK64q9IRWsuOXXX\" data-title=\"Figure 12 — Physical merchandise → digital companion\"><img src=\"https://lh3.googleusercontent.com/d/1SHrHXm2P0AQSfyhd0pK64q9IRWsuOXXX=w1600\" alt=\"Figure 12 — Physical merchandise → digital companion\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working V2 · 23 August 2026. Future relationship and digital layers remain conditional concepts.</figcaption>\n</figure>\n\n</div></details>\n\n## Related work\n\n<a href=\"/work/datvietvac-fandom-cards\" class=\"f-inline-link\">DatVietVAC Fandom Cards</a> remains a separate product-line case on official physical collectibles and earned scale gates. <a href=\"/work/datvietvac-ownership-belonging\" class=\"f-inline-link\">Ownership & Belonging</a> examines persistent fan contribution and history. <a href=\"/work/artist-fandom-page\" class=\"f-inline-link\">Artist Fandom Page & Fan Dashboard</a> is the adjacent relationship-layer concept.\n\n[VieWorld: Independent Fandom Ecosystem & Working Prototype](/work/vieworld) develops the later independent ecosystem build. It is distinct from the conditional DatVietVAC-owned Vie World direction in this August case.\n"
},
  "/work/datvietvac-who-owns-the-fan-promise": {
  "assets": [
  {
    "type": "pdf",
    "driveId": "1YYXw7U9Hkm-xG6pjo4bWJK_MX0QjJW8n",
    "fileName": "DatVietVAC_Who_Owns_the_Fan_Promise_Case_Study.pdf",
    "title": "DatVietVAC Who Owns the Fan Promise Case Study.pdf",
    "label": "Preview: DatVietVAC Who Owns the Fan Promise Case Study.pdf ↗"
  },
  {
    "type": "document",
    "driveId": "1c34M4nfPOJonf3grQCslY5eaTVjJ1Qq3",
    "fileName": "DatVietVAC_Evidence_Pack_V1_2_Synchronized_2026-08-31.docx",
    "title": "DatVietVAC Evidence Pack V1 2 Synchronized 2026-08-31.docx",
    "label": "Preview: DatVietVAC Evidence Pack V1 2 Synchronized 2026-08-31.docx ↗"
  },
  {
    "type": "pdf",
    "driveId": "1O8tevykIe970GoG_Ho6N6CIqADuPLz4E",
    "fileName": "DatVietVAC_Evidence_Pack_V1_1_Synchronized_2026-08-27.pdf",
    "title": "DatVietVAC Evidence Pack V1 1 Synchronized 2026-08-27.pdf",
    "label": "Preview: DatVietVAC Evidence Pack V1 1 Synchronized 2026-08-27.pdf ↗"
  }
],
  "body": "<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1YYXw7U9Hkm-xG6pjo4bWJK_MX0QjJW8n\" data-title=\"DatVietVAC: Who Owns the Fan Promise? — Full Case\">Read full case</button><a href=\"https://drive.google.com/file/d/1YYXw7U9Hkm-xG6pjo4bWJK_MX0QjJW8n/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Open in new tab\">↗</a>\n<a href=\"#part-2-evidence-pack\" class=\"f-asset-btn\">Explore evidence pack ↓</a></div>\n\n## Part 1 — Who Owns the Fan Promise?\n\n### One transaction, several operating truths\n\nOne accepted VieSHOP order can pass through product approval, production, inventory, warehouse, carrier, customer service, payment, and recovery. To the fan, the promise is much simpler: the item, the price, and a stated delivery window. This case started from the gap between those two realities.\n\nPublic reports include orders still pending weeks after purchase, repeated follow-up, broad status messages, and cases where customers describe escalation as the only way to get a clearer response. These signals do not establish VieSHOP's late-order rate or one common root cause. They do make one operating question worth testing: once a fan transaction is accepted, can the selling entity prove what it committed to, trace the obligation through execution, and close it without the customer having to force a response?\n\n> <strong>Independent outside-in case · Case V1.1 · Evidence Pack V1.2 synchronized 31 August 2026</strong>\n> \n> Evidence includes anonymized public user signals, supplied order, carrier, and customer-service artifacts, official VieSHOP updates and recovery communication, direct observations, public terms and role descriptions, and comparative cases. No internal order, warehouse, vendor, payment-gateway, production, inventory, customer-service system, or reliable denominator data was available.\n\n## What the public evidence can and cannot show\n\nVieSHOP publicly states a 20–25 working-day delivery window, but the starting event is not worded identically across every public page. Some language points to successful order placement during the initial selling period; current product pages refer to successful payment and exclude weekends and holidays. That difference matters when an old order is classified.\n\nA raw count of calendar days is therefore only a signal. The applicable term, its version, the start event, excluded days, sale mode, and any buyer-agreed revision have to be reconstructed at order level before calling a transaction late or breached.\n\nThe social evidence is also bounded. It supports recurrence across dates, SKUs, and threads, not prevalence. A large self-reported order set or monetary exposure remains unverified until matched to authoritative transaction and payment records.\n\n## The promise becomes an obligation after acceptance\n\nBefore checkout, delivery language helps sell. After acceptance, it becomes an obligation that has to reach performance or a valid resolution. The work can move between teams; the obligation cannot disappear at the handoff.\n\nThat changes the unit of analysis. The useful record is not a generic order status. It is the full path from accepted term to production, inventory allocation, warehouse receipt, packing, carrier acceptance, delivery, claim handling, refund or replacement, and final closure.\n\nEvery customer-visible state should map to one defined event and one authoritative source. “Warehouse preparation,” “still in production,” “completed,” and “refund initiated” are not interchangeable, and none of them necessarily proves that every physical, claim, and financial obligation is closed.\n\n## The backlog is the first pilot\n\nThe immediate recommendation is deliberately unglamorous: do not begin with another merchandise drop. Reconcile the unresolved backlog first, together with a sample of recently closed-but-late orders.\n\nEach order should reconstruct four layers:\n\n<ol class=\"f-numbered-list\">\n<li><strong>Transaction:</strong> accepted date, payment, SKU, sale mode, applicable promise, and any buyer-agreed revision.</li>\n<li><strong>Physical execution:</strong> production, batch, inventory, allocation, warehouse, packing, and carrier evidence.</li>\n<li><strong>Customer and CS:</strong> contacts, verified replies, complaint state, next update date, and requested recovery.</li>\n<li><strong>Closure:</strong> exception owner, next action, replacement or refund path, settlement, terminal evidence, and reason code.</li>\n</ol>\n\nPriority should follow obligation age, prepaid exposure, unknown state, severity, and remaining recovery options. Public visibility can be monitored as reputation exposure, but it should not become the service-priority algorithm. The oldest or most harmful silent case may deserve attention before the loudest complaint.\n\n## When the customer becomes the monitoring system\n\nRepeated emails, messages, tagging, and public escalation may be functioning as an informal exception-routing mechanism. The evidence does not prove that this is policy or that customer contact always changes an order. It does justify a sharper test: does the system detect and assign a risky transaction before the customer has to ask again?\n\n> <strong>A customer should not have to become the monitoring system for an accepted transaction.</strong>\n\nThis shifts the control question from response speed alone to proactive visibility: when an order crosses a risk threshold, who sees it, who owns the next action, when is the customer updated, and what evidence closes the exception?\n\n## Customer service is a control surface\n\nGeneric replies do not prove that CS caused the delay. Two different mechanisms may be hiding behind the same customer experience.\n\nCS may know the verified state but lack the script, authority, or escalation rule to act. Or CS may not have access to authoritative production, inventory, fulfillment, and payment truth in the first place. The first problem points to service design and decision authority; the second points upstream to data access, state ownership, and response SLAs.\n\nThe practical metrics follow the mechanism: CS truth coverage, repeat-contact rate, escalation turnaround, customer-chasing dependency, unknown-state rate, ownerless exceptions, proactive recovery coverage, and refund settlement time.\n\n## Let the backlog choose the intervention\n\nThis case does not recommend replatforming the store or rewriting the entire merchandise process before diagnosis. The backlog is the dataset that should decide where the first change belongs.\n\nIf failures concentrate in one supplier, batch, SKU, or sale mode, the solution should narrow to that bottleneck. If customer-facing labels do not map to physical events, fix state semantics. If CS cannot retrieve verified truth, fix the order-linked exception record and upstream response path. If the main gap sits before acceptance, strengthen commitment readiness, capacity evidence, and sale-mode wording.\n\nThe main working hypothesis is that fan-facing commitments may be created faster than the operating system can make their readiness, state, and recovery visible across handoffs. The pilot should be allowed to kill that hypothesis. If most orders are within the applicable terms, state is accurate, and customer contact does not drive movement, the systemic-control explanation should be downgraded.\n\n## What is at risk\n\nThe visible customer exposure is money, waiting, uncertainty, and repeated effort. The business also carries manual recovery load, unresolved prepaid value, complaint-handling duties, and possible refund or replacement cost.\n\nArtist and IP exposure is more indirect but still worth measuring. Fans may associate a fulfillment failure with VieSHOP, the show, the artist, the carrier, or nobody clearly. The business owns the operational failure; the artist may absorb reputational spillover without being its cause or legal seller.\n\n## Current takeaway\n\nA storefront issue can be redesigned. An accepted transaction has to be performed as agreed or resolved through a valid alternative. Before VieSHOP asks for the next fan transaction, it should be able to account for the ones it has already accepted.\n\nThis case uses only the evidence needed to test accepted-order accountability. The wider research produced a broader evidence pack across the DatVietVAC ecosystem. For readers who want to inspect that research trail, Part 2 explains what is inside, what it can support, and what it cannot.\n\n---\n\n## Part 2 — Evidence Pack\n\n### The research trail behind the case\n\nThe VieSHOP case above is deliberately narrow. It uses the evidence needed to examine accepted-order accountability, customer recovery, and possible spillover to artist or IP trust.\n\nThe research that led to it was wider. The Evidence Pack preserves observations across merchandise and fulfillment, ticketing, voting, production capacity and artist wellbeing, content and IP recognition, and public operating roles. Some signals were strong enough to support the case. Others remain questions to keep open.\n\n### Why this pack exists\n\nA readable case has to simplify. Evidence should not.\n\nThe pack keeps direct observations, recurring public signals, single-source reports, and working hypotheses visibly separate. It also records what would change confidence in each interpretation.\n\nIts purpose is not to prove that DatVietVAC has one common operating problem. Different incidents may have different causes, owners, and levels of significance. The pack exists so those differences are not lost when the research is compressed into a narrative.\n\n### What changed in the current evidence record\n\nThe synchronized research now includes official cohort updates, revised timelines, compensation and recovery communication, carrier states, and contradictory evidence. It therefore no longer asks whether VieSHOP ever responds or recovers; public evidence shows that it does in at least some cases.\n\nThe unresolved question is whether the system can identify the correct affected cohort, reconstruct truth across handoffs, trigger a proactive next action, and reach a valid terminal state consistently. The downloadable Evidence Pack V1.2 is frozen at 31 August 2026. It records company response, successful or attempted recovery, and contradictory evidence with the same priority as adverse signals. Carrier processing, customer receipt, compensation and terminal closure remain separate states to verify; public escalation preceding movement does not establish causation.\n\n### What is inside\n\nThe wider evidence trail covers:\n\n<ul class=\"f-list\">\n<li>VieSHOP storefront, merchandise fulfillment, order status, customer service, and recovery</li>\n<li>product integrity, packing, and quality-control signals</li>\n<li>ticket purchase, lineup certainty, and downstream fan commitments</li>\n<li>voting entitlement, revocation, and reconciliation</li>\n<li>production capacity, scheduling, and artist wellbeing</li>\n<li>content, AI, and IP recognition signals</li>\n<li>public job descriptions, functional scopes, and handoff questions</li>\n</ul>\n\nOnly a subset supports the accepted-order case above. The remaining clusters are adjacent research, not proof of the same root cause.\n\n### How to read the evidence\n\nEach item is weighted by what its source can actually support:\n\n<div class=\"f-table-wrap\"><table class=\"f-table\"><thead><tr><th>Code</th><th>Evidence type</th><th>Appropriate use</th></tr></thead><tbody><tr><td><strong>A</strong></td><td>Direct artifact or observation</td><td>Strongest for what was visible; not necessarily for root cause.</td></tr><tr><td><strong>B</strong></td><td>Recurring independent public signal</td><td>Supports recurrence and pattern detection; does not establish prevalence.</td></tr><tr><td><strong>C</strong></td><td>Single-source public or user report</td><td>Useful for triage and hypothesis generation; claims remain unverified unless corroborated.</td></tr><tr><td><strong>D</strong></td><td>Working hypothesis or interpretation</td><td>An analytical branch to test against operational data, not an established finding.</td></tr></tbody></table></div>\n\nA recurring social signal does not establish prevalence. Several claims from one user or one parent thread do not automatically become independent incidents. The four supplied screenshots form one evidence chain, not four separate customer cases. A screenshot can establish the language or state shown to a customer without revealing the internal event behind it.\n\n### What it can and cannot support\n\nThe pack can support pattern detection, operating questions, order-level reconstruction, bounded hypotheses, and a clearer list of internal evidence needed next.\n\nIt does not reveal VieSHOP's overall late-order rate, median fulfillment time, internal SOP, exact ownership model or org chart, supplier performance, warehouse logs, payment-gateway state, management intent, or one common root cause. It does not characterize delayed orders as fraud or criminal conduct.\n\n### How it relates to this case\n\n<strong>Who Owns the Fan Promise?</strong> takes one narrow slice of the pack and asks a testable operating question: once a fan transaction is accepted, can the obligation be traced through execution and closed without the customer having to become the monitoring system?\n\nThe Evidence Pack keeps the broader picture available without forcing every signal into that explanation. Some clusters may become separate cases later. Others may disappear when stronger evidence becomes available. Both outcomes are useful.\n\n<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"document\" data-driveid=\"1c34M4nfPOJonf3grQCslY5eaTVjJ1Qq3\" data-title=\"DatVietVAC Evidence Pack V1.2\">View evidence pack</button><a href=\"https://drive.google.com/file/d/1c34M4nfPOJonf3grQCslY5eaTVjJ1Qq3/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Open in new tab\">↗</a>\n<a href=\"https://drive.google.com/uc?export=download&id=1c34M4nfPOJonf3grQCslY5eaTVjJ1Qq3\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-btn\">Download DOCX</a></div>\n\n<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1O8tevykIe970GoG_Ho6N6CIqADuPLz4E\" data-title=\"Earlier Evidence Pack V1.1 (PDF)\">Earlier Evidence Pack V1.1 (PDF)</button><a href=\"https://drive.google.com/file/d/1O8tevykIe970GoG_Ho6N6CIqADuPLz4E/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" aria-label=\"Open in new tab\">↗</a></div>\n"
},
  "/work/explainable-trust": {
    "assets": [
  {
    "type": "image",
    "driveId": "1easUBv-D5P4vsfxihyQbPHmUSTryLCbf",
    "fileName": "Screenshot_2026-08-19_at_14-52-05_Explainable_Trust__Traceable_Case_Reconstruction.png",
    "title": "Screenshot 2026-08-19 at 14-52-05 Explainable Trust  Traceable Case Reconstruction",
    "label": "Preview: Screenshot 2026-08-19 at 14-52-05 Explainable Trust  Traceable Case Reconstruction ↗"
  },
  {
    "type": "image",
    "driveId": "1NEv9CWDj4uU7Pk4HSv0WrDs3RP2iMrxM",
    "fileName": "Screenshot_2026-08-19_at_14-58-41_Explainable_Trust__Traceable_Case_Reconstruction.png",
    "title": "Screenshot 2026-08-19 at 14-58-41 Explainable Trust  Traceable Case Reconstruction",
    "label": "Preview: Screenshot 2026-08-19 at 14-58-41 Explainable Trust  Traceable Case Reconstruction ↗"
  },
  {
    "type": "image",
    "driveId": "1ulV9X6viT2FBtVnvate7RjLbNRDKAPMW",
    "fileName": "Screenshot_2026-08-19_at_14-59-09_Explainable_Trust__Traceable_Case_Reconstruction.png",
    "title": "Screenshot 2026-08-19 at 14-59-09 Explainable Trust  Traceable Case Reconstruction",
    "label": "Preview: Screenshot 2026-08-19 at 14-59-09 Explainable Trust  Traceable Case Reconstruction ↗"
  },
  {
    "type": "image",
    "driveId": "1LcHsTBzFbS_HzFEcsJm2pu5WJACEfaZT",
    "fileName": "Screenshot_2026-08-19_at_15-00-18_Explainable_Trust__Traceable_Case_Reconstruction.png",
    "title": "Screenshot 2026-08-19 at 15-00-18 Explainable Trust  Traceable Case Reconstruction",
    "label": "Preview: Screenshot 2026-08-19 at 15-00-18 Explainable Trust  Traceable Case Reconstruction ↗"
  },
  {
    "type": "image",
    "driveId": "1H50sY3C-uR0QZ6tliPTNr3NB0AEyAkKi",
    "fileName": "Screenshot_2026-08-19_at_15-00-29_Explainable_Trust__Traceable_Case_Reconstruction.png",
    "title": "Screenshot 2026-08-19 at 15-00-29 Explainable Trust  Traceable Case Reconstruction",
    "label": "Preview: Screenshot 2026-08-19 at 15-00-29 Explainable Trust  Traceable Case Reconstruction ↗"
  }
],
    "body": "<asset-bar>\n<a href=\"/explainable/\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-btn accent\" style=\"padding:10px 20px;font-size:14px;\">⚡ Explore Interactive Showcase — Explainable Trust (phamthanhphu.io.vn/explainable) ↗</a>\n</asset-bar>\n\n> **When a situation is still vague, people naturally start connecting the missing pieces. Explainable Trust moves that reconstruction out of memory and into an inspectable record: what was reported, what is supported, what is inferred, what changed, and what is still unknown.**\n> \n\n> **Type:** Built Product Sample\n**Stage:** Interactive static showcase · Four-step fictional scenario\n**Evidence basis:** Runnable Application · Repository Behavior · Automated Tests · Product Screenshots\n**Last updated:** September 2026\n**Boundary:** The public showcase uses fictional sources and authored reasoning. It demonstrates validation, evidence relationships, ledger revisions, contradictions, local demo state, and export. It performs no live model inference or web retrieval and accepts no real-case uploads. Historical model and retrieval architecture below describes the earlier research prototype.\n> \n\n---\n\n## Current interactive showcase\n\n[Explore the showcase](/explainable/) to follow one fictional QuickBite delivery dispute through four accepted revisions: initial report, support acknowledgement, conflicting refund status, and a corrected ledger. Previous and Reset restore the earlier sources, assessments, reasoning, and export together. The final step preserves a settlement gap instead of claiming payment receipt.\n\nThe scenario is authored; schema validation and ledger commits run in the browser. Sample copies, names, archive flags, and scenario positions are stored in a separate demo IndexedDB workspace. No Gemini key, Tavily key, intake API, backend, or real-document upload is needed.\n\n## Why I built this\n\nThe app started from a simple observation: when information is incomplete, the mind does not like leaving the story unfinished. We connect a message to a screenshot, a remembered detail to a public rule, one person's account to another source. That is useful, but over time it becomes difficult to remember where the evidence ended and the reconstruction began.\n\nThe burden gets heavier when a situation unfolds across messages, files, corrections, public sources, and multiple possible explanations. The person has to keep reconstructing the timeline, evidence, assumptions, unresolved questions, and next step in their head.\n\nI built Explainable Trust to externalize that work. The product does not try to make uncertainty disappear by producing a more confident answer. It keeps the current state inspectable: what is known, what is only reported, what is inferred, what remains open, and how the reasoning changed when new information arrived.\n\nCustomer support and disputes are one use case, but not the boundary. The same problem appears in purchases, public events, personal decisions, and smaller everyday situations where facts arrive gradually and from sources with different strengths.\n\n---\n\n## The product question\n\nAn uncertain situation rarely arrives as a clean set of facts. It arrives as fragments with different strengths: a first-person statement, a document, an image, a public rule, a later correction, or a claim that may still be unsupported. The product needs to help reconstruct the situation without collapsing those differences into one confident narrative.\n\nThe product question is:\n\n> **Can an AI-assisted workspace help a person reconstruct a situation under uncertainty without losing the distinction between evidence, report, inference, and what is still unknown?**\n> \n\nBecause that state can change, a second requirement follows: new information should update the case without erasing how the previous state was constructed.\n\nThe working flow is:\n\n> **Describe → reconstruct → inspect → trace reasoning → correct → reconcile → expose gaps → decide what to check next**\n> \n\n## Original prototype architecture — historical\n\nThe core design choice is simple: **the model can propose changes, but the application owns the record.**\n\n1. **Start or import a case.** The application creates a local case ledger in the browser rather than treating the chat transcript as the record.\n2. **Submit a statement and optional files.** A user can add text, PDFs, images, or text-based files, then choose **Analysis only** or **Web-assisted** for that run.\n3. **Preserve the intake before interpreting it.** The original statement remains verbatim. Uploaded files receive case-linked metadata and a SHA-256 fixity hash.\n4. **Let the model propose a change, not rewrite the case.** Gemini returns typed operations for events, claims, evidence relationships, gaps, actions, and reasoning.\n5. **Validate before committing.** Application validation checks schema, identity, and commit rules—it does not prove the real-world truth of a claim. Application code allocates canonical IDs, reconciles corrections against existing entities, validates the complete candidate revision, and commits it atomically. If validation fails, the last accepted case remains unchanged and the rejected run is retained for audit.\n6. **Project one ledger into several views.** The same accepted state appears as a readable response, timeline, findings, evidence inventory, gaps and actions, interactive case and reasoning DAGs, and a Toulmin argumentation view. Clickable IDs connect each view back to its sources. Selecting a node highlights the connections leading to it, so a user can trace a claim or finding through the reasoning that supports, qualifies, or leaves it unresolved instead of visually scanning the whole graph.\n7. **Carry the case forward.** A later message creates a child revision. Clear corrections retain stable entity IDs; ambiguous corrections fail closed instead of silently creating a duplicate.\n8. **Export or import through separate paths.** The user can download a case-view JSON, copy a Markdown case report or provenance dossier, and print the case view. The importer separately accepts a valid Ledger V3 JSON; the current export and import formats are not a one-click backup-and-restore pair.\n\n## Original prototype screenshots — historical\n\nThis small test starts with a traffic-accident report. The user describes the collision, suspected drunk driving and leaving the scene, vehicle damage, an X-ray visit, and uncertainty about compensation and legal handling. No official police or medical evidence has been added yet.\n\n### 1 · The first message becomes a case, not only an answer\n\nThe first intake is projected into a case view with a user goal, timeline events, findings, unresolved gaps, and proposed next actions. The response can still explain the current situation in plain language, but the structured record remains separately inspectable.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 14-52-05 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1easUBv-D5P4vsfxihyQbPHmUSTryLCbf\" caption=\"Screenshot 2026-08-19 at 14-52-05 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\nInitial reconstruction from the first user report. The workspace keeps narrative, structured case state, gaps, and next actions visible at the same time.\n\n### 2 · A later correction changes the affected state\n\nIn the second message, the user corrects the accident time from **18:30 to 19:15** after checking dashcam data and adds information about the other driver. The correction is kept as a new source statement rather than silently replacing the earlier one.\n\nThe useful behavior is not that the model can notice a correction. It is that the application can reconcile the affected event and claim while preserving the earlier source, the new source, and the revision path between them.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 14-58-41 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1NEv9CWDj4uU7Pk4HSv0WrDs3RP2iMrxM\" caption=\"Screenshot 2026-08-19 at 14-58-41 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\nSecond intake after the correction. The current case reflects the updated time while still exposing source IDs and revision change.\n\n### 3 · Unknowns stay visible instead of being completed by the model\n\nThe case still has no admitted evidence for the official accident record or the medical result. Those remain open gaps, with actions asking for scene images/video and medical documents. A source-linked finding can also preserve its scope and limitation rather than presenting a reported statement as independently verified fact.\n\nThat distinction matters here because the product is not trying to turn a user narrative into a verified legal conclusion. It is trying to make **reported state, supporting evidence, missing evidence, and next action** easier to separate.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 14-59-09 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1ulV9X6viT2FBtVnvate7RjLbNRDKAPMW\" caption=\"Screenshot 2026-08-19 at 14-59-09 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\n### 4 · Provenance can be inspected as a network\n\nThe case graph makes the dependency structure visible: user statements connect to events and claims; those records expose unresolved gaps; gaps connect to proposed actions. A correction can therefore be inspected for what it changed downstream instead of disappearing inside a rewritten summary.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 15-00-18 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1LcHsTBzFbS_HzFEcsJm2pu5WJACEfaZT\" caption=\"Screenshot 2026-08-19 at 15-00-18 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 15-00-29 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1H50sY3C-uR0QZ6tliPTNr3NB0AEyAkKi\" caption=\"Screenshot 2026-08-19 at 15-00-29 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\nCase-wide provenance view: user statements → events / claims → gaps → actions.\n\n## Product decisions\n\n| Decision | What it protects |\n| --- | --- |\n| **Local-first authoritative case state** | Case data and preserved attachments remain in browser storage rather than making the model conversation the source of truth. |\n| **Immutable raw intake** | A later interpretation or correction does not rewrite what the user originally submitted. |\n| **Model proposes; application accepts** | The model can suggest typed operations, but canonical IDs, validation, reconciliation, and committed case state remain application-owned. |\n| **Stable-ID correction** | A correction updates the affected entity when the target is clear instead of silently creating a duplicate record. |\n| **Explicit gaps and actions** | Missing evidence stays visible and can produce a concrete next step without pretending that the missing fact is already known. |\n| **Bounded public retrieval** | Web-assisted runs can request public information without sending the raw private case to the retrieval provider. |\n\n## What the working prototype includes\n\n| Capability | Implemented behavior |\n| --- | --- |\n| **Case workspace** | Create, rename, archive, restore, delete, import, and switch between locally stored cases. |\n| **Text and file intake** | Submit a statement with optional PDF, image, or text-based files; drag-and-drop is supported and the client applies a 12 MB total attachment limit per intake. |\n| **Structured reconstruction** | Project accepted intake into a user goal, timeline events, findings and claims, evidence relationships, open gaps, proposed actions, and an explainable response. |\n| **Corrections and revisions** | Preserve the original statement, update a clearly identified entity under its stable ID, record the revision delta, and retain earlier revisions. |\n| **Traceable inspection** | Use clickable source IDs, search and filtered record views, an evidence detail panel, a case-wide provenance graph, and a structured reasoning graph. |\n| **Two run modes** | Use the submitted record alone, or request bounded public retrieval from first-party and responsible public-authority sources when a public information need remains. |\n| **Local persistence and recovery** | Keep the authoritative ledger, run audits, attachments, and display metadata in browser IndexedDB; preserve the last accepted record after provider or validation failure. |\n| **Language and export** | Switch the interface across English, Vietnamese, Spanish, French, Chinese, and Japanese while preserving source text; export JSON, Markdown reports, a provenance dossier, or a printable case view. |\n\nThe architectural constraint is deliberate: **a provider response is not the case**. A candidate revision becomes authoritative only after application-side reconciliation, full-ledger validation, and successful browser commit.\n\n## Original prototype boundaries — historical\n\n- **No truth or legal determination.** It does not independently prove that a user statement is true, decide liability, authenticate an object, determine eligibility, or guarantee that legal or policy analysis is correct.\n- **No automatic access to private systems.** It has no connector to a police, hospital, insurer, marketplace, employer, or customer account. Case-specific confirmation must come from a user-supplied record or a direct response from the responsible organization.\n- **No shared cloud workspace.** There are no user accounts, server-side case database, team permissions, real-time collaboration, or automatic cross-device sync. The authoritative case remains in the current browser.\n- **No round-trip backup package.** The current JSON export is a projected case view for review or downstream use, while import accepts the authoritative Ledger V3 format. They are not yet a single portable backup-and-restore flow.\n- **No fully offline model analysis.** In a live run, the submitted statement and supported files are sent through the application server to the configured Gemini provider. The narrower privacy boundary applies to public-web retrieval: Tavily receives only a validated public query and official-domain filters, not the raw private case.\n- **No unrestricted web research.** Public results are admitted only when a direct first-party or responsible public-authority source can support the specific public claim. Media, forums, social posts, aggregators, and model memory cannot close an evidence gap.\n- **No forced correction matching.** If the target of a correction is ambiguous, the application rejects the candidate change rather than guessing or creating a silent duplicate.\n- **No certified chain of custody.** File hashes help detect content changes, but they are not digital signatures, identity verification, notarization, or independent evidence certification.\n- **No production assurance.** The prototype does not claim production-grade authentication, security/privacy audit, monitoring, service availability, regulatory compliance, or readiness for unrestricted high-stakes deployment.\n\n<aside>\n\uD83E\uDDEA\n\n**Scope statement**\n\nThis is a working software prototype for testing traceable case reconstruction. Its output remains a structured working record for human inspection, not a legal opinion, verified investigation result, or automated decision.\n\n</aside>\n\n## If I extended the prototype\n\nThe working prototype is complete, but the original product direction was broader than a standalone case workspace. The longer-term idea is a privacy-preserving resolution channel in which the user keeps control of the case, linked organizations can update the process without taking ownership of the user's record, and the product learns from patterns only when users explicitly allow it.\n\nA real-world pilot would first test the current product behavior:\n\n1. **Correction reliability:** when do users phrase a correction clearly enough for stable-ID reconciliation, and when should the system stop and ask?\n2. **Evidence behavior:** do users understand the difference between reported claims, admitted evidence, inference, and unresolved gaps?\n3. **Recovery burden:** after several revisions, can a user still understand what changed and what they need to do next without reading the full history?\n4. **Transfer:** does the same case structure remain useful outside disputes, for example customer-support escalation, insurance, workplace incidents, or other evidence-heavy pathways?\n\n### From case workspace to resolution channel\n\nThe next product step would not be to make the app know more about the user. It would be to let the case move between parties while revealing less identity than a normal support workflow.\n\nThe design goal would be **anonymous at the application layer**: the app would not need a conventional user profile, and the server would operate on opaque case identifiers rather than treating real-world identity as part of the product. A user could choose to link a case to a company, platform, insurer, public body, or other responsible party through a bounded case channel. The linked party could then send requests for evidence, status changes, review outcomes, deadlines, or next actions back into the same case record.\n\nFor the user, this would turn repeated support contact into a visible process: **what the organization has received, what is still missing, who or what is currently waiting, what changed, and what happens next.** For the organization, especially customer service, the same structure could reduce repeated explanation, duplicate evidence requests, inconsistent handoffs, and uncertainty about the current case state.\n\n### A consented analytics model, not silent data extraction\n\nBy default, the individual case would remain private. A separate opt-in would ask whether the user wants to contribute de-identified case signals to aggregate analytics.\n\nThe commercial hypothesis is that linked organizations would pay for those aggregate operational signals, not for access to an identifiable person's case. Useful outputs could include where resolution pathways repeatedly stall, which evidence is most often missing, where customers need repeated contact, how long different states persist, and which handoffs create avoidable recovery burden.\n\nThat creates a different incentive structure from advertising or hidden profiling: the user gets a clearer resolution pathway and can choose whether their de-identified experience contributes to system learning; the organization gets a better view of recurring operational friction; and the product earns from the analytics or integration layer rather than from making identity itself more valuable.\n\n<aside>\n↳\n\n**Future-product boundary**\n\nNone of this channel, identity-minimization, organization-linking, notification, or analytics model is implemented in the prototype. Production claims about anonymity, encryption, de-identification, consent, or data governance would require a separate architecture and security/privacy validation.\n\n</aside>\n\n## Build and repository\n\nThe current public showcase is maintained with the portfolio in [phu-work-research](https://github.com/Yunero1206/phu-work-research/tree/main/apps/explainable). The build prerenders portfolio pages and bundles the showcase at /explainable/. Render serves both as static files.\n\nThe earlier Explainable-App repository preserves the research prototype and may be private. It is not required to build, deploy, or use this showcase.\n\n## Current takeaway\n\nThe prototype is most useful to me as a test of one product assumption: **explainability is not only a better answer. It is the ability to inspect how a changing case reached its current state, what still supports that state, and what remains unresolved.**"
  },
  "/work/vietnam-diamond-market-crisis": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6",
    "fileName": "Vietnam_Diamond_Market_Crisis_Case_Study_2_Full_Paper.docx",
    "label": "📄 Preview: Vietnam_Diamond_Market_Crisis_Case_Study_2_Full_Paper.docx ↗",
    "title": "Vietnam’s 2026 Diamond-Market Crisis (Forensic Paper)"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6\" data-title=\"Vietnam Diamond Market Crisis Case Study 2 Full Paper (PDF)\">📄 Vietnam Diamond Market Crisis Case Study 2 Full Paper (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n> **The more public records I collected, the less comfortable I was with a single story about “the crisis.” Investigation reporting, company responses, review announcements, buyback policies, and market signals were visible together, but the evidence did not show that they all shared one cause.**\n> \n\n> **Type:** Evidence-First Case Study\n**Stage:** Public working paper with bounded findings\n**Research object:** Vietnam’s diamond-market crisis; PNJ is a focal observation site, not the object itself\n**Evidence cut-off:** 21 July 2026\n**Boundary:** Visibility does not establish representativeness, origin, severity, guilt, product exposure, execution failure, or a market-wide causal chain.\n> \n\n## Reading & Audit Route\n\n**Quick orientation:** The crisis did not become visible in one place → The most important finding is an evidence boundary → What the paper concludes\n\n**Full reconstruction:** Pre-crisis baseline → What changed in 2026 → What the PNJ conjunction reveals\n\n**Audit path:** Main-paper Claim ID → thematic appendix → Source ID → preserved public source\n\n> **Full paper:**\n> \n> \n> <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6\" data-title=\"Vietnam Diamond Market Crisis Case Study 2 Full Paper.docx (PDF)\">📄 Vietnam Diamond Market Crisis Case Study 2 Full Paper.docx (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n> \n\n---\n\n## The crisis did not become visible in one place\n\nBy 2026, public uncertainty around Vietnam’s diamond market was no longer confined to product quality or technical certification.\n\nInvestigation reporting, questions about provenance and verification, company statements, board-approved external reviews, published buyback policies, and capital-market observation entered the same public information environment.\n\nThese developments did not necessarily share one cause.\n\nThey did not affect every actor in the same way.\n\nAnd their coexistence does not prove guilt, product exposure, a market-wide liquidity event, or a single causal chain.\n\nThe research problem is therefore not simply:\n\n> *Did trust collapse?*\n> \n\nIt is:\n\n> **What can be reconstructed from observable events, stakeholder decisions, enterprise responses, and public records—and where does the evidence stop?**\n> \n\n---\n\n## Research scope\n\nThe research object is the **market crisis**, not PNJ as a company.\n\nPNJ is used as a focal observation site because product, verification, repurchase policy, enterprise response, governance disclosure, and market observation intersect in one unusually dense public record.\n\nThat density makes selected interactions easier to inspect; it does not make PNJ a representative sample of the entire Vietnamese diamond market. **[C-001, C-026, C-027]**\n\n---\n\n## What existed before the crisis\n\nThe public record shows that the arrangements scrutinized in 2026 were not created by the controversy.\n\nThey already existed.\n\n### Diamond was an established business category\n\nPNJ had publicly treated diamond and gemstone jewellery as an important business category since at least 2015. Its observable portfolio subsequently broadened across bridal, premium, gifting, self-purchase, men’s, and lifestyle propositions. **[C-002, C-004]**\n\n### Verification had an institutional presence\n\nPNJ Lab—and later the P-Lab identity—provided a publicly visible technical verification infrastructure before the 2026 controversy. **[C-003, C-010]**\n\nThis establishes that a verification arrangement existed.\n\nIt does **not** establish that every part of the arrangement operated perfectly, that every institutional boundary was independent, or that the arrangement could absorb every later form of scrutiny.\n\n### Buyback and upgrade were part of the ownership journey\n\nPublished policies and promotions show that repurchase and upgrade were established customer-lifecycle mechanisms rather than concepts invented after the crisis. **[C-005]**\n\nBut three dimensions must remain separate:\n\n1. published valuation and eligibility terms;\n2. customer interpretation of those terms;\n3. operational execution under real demand.\n\nThe public record can compare policy architecture. It cannot automatically reconstruct execution. **[C-006, C-007]**\n\n### Scale was visible; resilience was not\n\nPNJ had significant publicly documented retail, manufacturing, data, and customer-service capacity before 2026. **[C-008]**\n\nThat capacity may matter when an enterprise faces operational pressure.\n\nBut the existence of capacity does not prove that it successfully absorbed a particular crisis. **[C-009, C-022]**\n\n---\n\n## What changed in 2026\n\nThe 2026 controversy moved assurance from a technical background function into public scrutiny.\n\nInvestigation reporting and PNJ’s public response changed the information available to customers, investors, media, and other market participants. **[C-011]**\n\nPNJ publicly stated its position regarding the controversy.\n\nThat statement is evidence of **what the company said**. It is not, by itself, independent proof of every underlying factual claim. **[C-012]**\n\nThe board subsequently approved external reviews covering product and diamond quality, the import–production–sales chain, risk management, and tax-related matters. **[C-013]**\n\nAt the research cut-off, however, the public record did not establish the reviewers’ full identity, methods, timing, findings, or effectiveness. **[C-014]**\n\nThis matters because an announced review is simultaneously:\n\n- an enterprise intervention;\n- a governance response;\n- and a new public event available for interpretation.\n\nThe response itself therefore becomes part of the information environment. **[C-020, C-023, C-024]**\n\n---\n\n## The most important finding is an evidence boundary\n\nThe supplied corpus is rich in historical strategy, published policies, verification infrastructure, company statements, and board announcements.\n\nIt is not equally rich in incident-level execution.\n\nThe paper therefore does **not** claim that the reviewed record establishes:\n\n- a 2026 customer sellback surge;\n- a PNJ buyback execution failure;\n- wider retailer liquidity breaks;\n- total repurchase-request volume;\n- processing or payment timing under pressure;\n- completion rates across stores;\n- diamond-specific revenue or inventory exposure;\n- the outcomes of the announced independent reviews;\n- or a causal relationship between the controversy and PNJ’s share-price movements.**[C-015, C-016, C-017, C-018]**\n\nThese are not empty spaces to be filled with a plausible story.\n\nThey are research findings about the limits of the public record.\n\n> **Absence of evidence is not evidence that an event did not occur. It is also not permission to write as though the event has been established.**\n> \n\n---\n\n## What the PNJ conjunction reveals\n\nSeveral patterns are visible even within those limits.\n\n### 1. Integration creates observability\n\nPNJ’s product business, laboratory identity, customer policies, manufacturing network, board disclosures, and listed-company status place multiple domains within one shared public record. **[C-021]**\n\nThis makes cross-domain developments easier to observe.\n\nIt does not prove that PNJ was the origin of the crisis, the most severely affected enterprise, or a complete representation of the market.\n\n### 2. Enterprise responses generate additional information\n\nClarifications and review announcements are not merely events that occur after controversy.\n\nOnce public, they become information that other actors can interpret. **[C-024]**\n\nThat does not predetermine whether the interpretation will be reassuring, concerning, or neutral.\n\n### 3. Technical assurance can become a governance question\n\nBefore the controversy, verification was primarily presented through technical capability and institutional identity.\n\nBy 2026, the response had moved toward board-authorized external product, chain, risk, and tax review.\n\nThe record therefore supports a shift from **technical assurance claims** toward **external governance assurance**. **[C-020, C-023]**\n\n### 4. Visibility is not severity\n\nPNJ is highly observable because it is a prominent listed enterprise with long-running public disclosures.\n\nA less visible private retailer may leave fewer public traces even when experiencing equal or greater stress.\n\nThe density of evidence around PNJ must therefore not be mistaken for proof that PNJ was the most central or most severely affected actor. **[C-027]**\n\n---\n\n## What this paper does differently\n\nThe paper uses a three-layer evidence architecture:\n\n### 1. Main paper\n\nThe narrative explains what the reviewed record supports.\n\nMaterial propositions carry **Claim IDs**, such as `[C-006]` or `[C-023]`.\n\n### 2. Thematic appendices\n\nEach appendix organizes evidence by domain and records:\n\n- the claim;\n- supporting evidence;\n- limitations;\n- alternative explanations;\n- and relevant Source IDs.\n\n### 3. Primary source register and archive\n\nSource IDs direct readers toward the original public source, archived link, PDF, or screenshot where necessary.\n\nThe logic is simple:\n\n> **Paper claim → thematic appendix → Source ID → preserved public source**\n> \n\nNot *“trust me.”*\n\n**Audit me.**\n\n---\n\n## What the paper concludes\n\nThe reviewed public record does not support a simple story in which confidence collapsed at a single moment and produced one linear chain of consequences.\n\nIt supports a narrower—but more defensible—reconstruction:\n\n- PNJ entered 2026 with a long-standing diamond business;\n- verification, repurchase, production, retail, and disclosure arrangements were already publicly visible;\n- the controversy made those arrangements newly contestable;\n- PNJ responded through clarification and board-authorized external review;\n- those responses became additional public information;\n- and several economically important questions remained unobservable at the research cut-off.\n\nPNJ therefore provides a **dense observation window**, not a complete map of Vietnam’s diamond-market crisis. **[C-025, C-026, C-028]**\n\nThe value of the case is not that it resolves every uncertainty.\n\nIt is that it keeps every conclusion proportional to the evidence.\n\n---\n\n## Read the full paper\n\nThe attached full working paper near the top of this page includes:\n\n- the complete empirical reconstruction;\n- evidence-status definitions;\n- the master chronology;\n- pre-crisis baseline synthesis;\n- verification and investigation records;\n- buyback-policy evidence boundaries;\n- enterprise-response records;\n- capital-market evidence requirements;\n- a master Claim Register;\n- remaining questions and deliberately withheld claims;\n- and the primary Source Register.\n\n---\n\n## Suggested citation\n\n> Pham, Phu Thanh. (2026). *Vietnam’s 2026 Diamond-Market Crisis: An Evidence-First Reconstruction Through PNJ as a Focal Publicly Observable Conjunction*. Diamond Trust Architecture. Evidence cut-off: 21 July 2026.\n> \n\n---\n\n## Editorial note\n\nThis page is a public-facing summary of the full working paper.\n\nAll findings are bounded to:\n\n- the supplied public-source corpus;\n- the evidence available at the research cut-off;\n- and the distinction between documented fact, researcher observation, interpretation, and unknown.\n\nNew evidence may change individual assessments without invalidating the evidence-first method.\n\n---\n\n## Next Research Update\n\nA meaningful update would require evidence in at least one of four areas:\n\n1. public findings, methods, or reviewer identity from the announced external reviews;\n2. incident-level evidence about verification, repurchase, processing, payment, or recovery execution;\n3. comparable records from other retailers, laboratories, customers, or market institutions;\n4. sufficiently specific financial or operating disclosures to test claims about material exposure or consequence.\n\nAny new evidence should enter through the same chain: source preservation, evidence classification, Claim Register update, alternative reading, and proportional revision of the main paper.\n\n## Continue Reading\n\n[Diamond Trust Chain Collapse — When Final Proof Needs Proof](/work/diamond-trust-chain-collapse) is the companion essay on the diamond as a compressed trust package and the need for decompression capacity when proof becomes uncertain.\n\n[Work Library](/work) · [Portfolio Home](/)"
  },
  "/work/diamond-trust-chain-collapse": {
    "assets": [],
    "body": "> **A diamond buyer usually does not re-grade the stone, audit the seller, and reconstruct provenance before every transaction. The certificate works because a large verification chain is compressed into something the next person can rely on. This essay asks what happens when that compressed proof becomes uncertain.**\n> \n\n> **Type:** Research Essay\n**Stage:** Evidence Building\n**Evidence basis:** Public reporting, public market mechanisms, and analytical interpretation\n**Last updated:** July 2026\n**Boundary:** Allegations and investigation status remain attributed. Analytical terms and cross-industry comparisons are not claims of factual or legal equivalence.\n> \n\n## Reading Route\n\n**Quick orientation:** Central question → Working argument → Why this matters → One-sentence summary\n\n**Trust architecture:** Trust-chain reconstruction → Certificate as compressed trust → Reverse proof → Trust stack\n\n**Critical review:** Trigger and factual boundary → Alternative explanations → Open questions\n\n> **Published article:**\n> \n> \n> [When the Final Proof Needs Proof: Diamonds, Certification Risk, and Trust Collapse](https://www.linkedin.com/pulse/when-final-proof-needs-diamonds-certification-risk-trust-pham-thanh-rnjec/)\n> \n\n---\n\n## Central question\n\n> **What happens when a certificate compresses a complex trust chain into one market signal—and that signal itself becomes uncertain?**\n> \n\n## Trigger and factual boundary\n\nThis essay was triggered by public reporting concerning alleged misconduct connected to diamond certification and trading.\n\nThe event is not treated here as a completed factual record.\n\nThis essay does not determine criminal, civil, corporate, or professional responsibility.\n\nIt uses the reported event to examine how trust works when a market depends on certificates, identity markers, seller promises, and future liquidity.\n\n> **Open evidence gap:** I have not completed a primary-source reconstruction of the triggering event. The essay therefore treats the event only as a reported trigger and does not rely on unresolved allegations as established fact. A future update would need the relevant official records, company or laboratory statements, independent reporting, certification references, and commercial terms before making stronger event-specific claims.\n> \n\n## Why diamonds are a useful trust case\n\nA diamond buyer does not evaluate only a physical stone.\n\nThe transaction may depend on a package of signals:\n\n- certificate;\n- grading;\n- laser inscription;\n- seller identity;\n- invoice and ownership record;\n- buyback or exchange promise;\n- market recognition;\n- confidence that another buyer or institution will accept the same proof later.\n\nThe buyer therefore holds more than an object.\n\nThe buyer holds a claim about the object and a set of institutions expected to support that claim.\n\nThis makes diamonds a useful case for studying trust infrastructure.\n\n## What the buyer actually holds\n\nA simplified trust package may include:\n\n> Physical stone\n> \n> - Claimed identity\n> - Certificate and grade\n> - Seller promise\n> - Buyback or exchange expectation\n> - Future market acceptance\n> - Recovery path if any part fails\n\nThe price is partly supported by the belief that these layers remain connected.\n\nIf one layer becomes uncertain, the impact may extend beyond the original transaction.\n\nThe buyer may ask:\n\n- Is the stone the same stone?\n- Is the grading reliable?\n- Is the certificate authentic and valid?\n- Will the seller still honor the promise?\n- Will another institution accept the certificate?\n- Can the asset still be sold or exchanged?\n- Who owns recovery if the proof fails?\n\n## Trust-chain reconstruction\n\nA simplified pathway is:\n\n> Stone origin\n> \n> \n> → Import or acquisition record\n> \n> → Identity and grading\n> \n> → Certificate\n> \n> → Seller representation\n> \n> → Buyer reliance\n> \n> → Buyback or resale belief\n> \n> → Future verification\n> \n> → Recovery or loss\n> \n\nEvery step can preserve, transform, or weaken evidence.\n\nThe certificate is powerful because it compresses much of the earlier chain into a signal that the market can use quickly.\n\nThat compression creates efficiency.\n\nIt also creates concentration.\n\nWhen many later decisions rely on one proof layer, weakness in that layer can spread across transactions that were not originally connected.\n\n## Working argument\n\n> **Certification does not eliminate risk. It relocates and compresses risk into the institutions, records, and recovery mechanisms that support the certificate.**\n> \n\nA certificate may reduce the buyer’s need to inspect the full history.\n\nIt does not remove the need for:\n\n- reliable identity;\n- controlled issuance;\n- traceable records;\n- separation of roles;\n- auditability;\n- correction;\n- revocation or re-verification;\n- recovery when the signal fails.\n\nThe market becomes more efficient by trusting the certificate.\n\nThe market also becomes more dependent on the certificate’s integrity.\n\n## Certificate as compressed trust\n\nA certificate can be understood as compressed trust because it allows many parties to act without re-performing the original verification.\n\nThis has three effects.\n\n### 1. Lower transaction cost\n\nThe buyer does not need to independently reconstruct every step.\n\n### 2. Higher portability\n\nThe proof may travel across stores, buyers, insurers, lenders, and future transactions.\n\n### 3. Concentrated consequence\n\nIf the proof becomes unreliable, uncertainty may spread beyond one seller or one stone.\n\nThe same mechanism appears in other systems:\n\n- professional credentials;\n- inspection records;\n- audit opinions;\n- origin certificates;\n- digital identity;\n- compliance status;\n- credit assessment.\n\nThe analogy is about trust structure, not factual equivalence between industries.\n\n## Data as reverse proof\n\nWhen trust is questioned, the certificate alone may no longer be enough.\n\nThe market may need to reconstruct the pathway backward.\n\nPotential reverse-proof data includes:\n\n- stone identity and inscription;\n- certificate issuance record;\n- grading record;\n- acquisition and import record;\n- seller invoice;\n- transfer history;\n- image or scan;\n- inventory movement;\n- re-verification result;\n- buyback or exchange history;\n- incident and correction log.\n\nThis suggests a working proposition:\n\n> **The stronger the market relies on compressed proof, the more important it becomes to preserve the underlying evidence needed to reconstruct that proof.**\n> \n\nThe goal is not maximum data collection.\n\nIt is sufficient evidence for re-verification, correction, and recovery.\n\n## Guarantee drift\n\nA guarantee may begin as a narrow commercial promise.\n\nOver time, customers may interpret it more broadly.\n\nFor example, a buyback promise may be understood as evidence that:\n\n- the seller trusts the stone;\n- the certificate will remain accepted;\n- liquidity will remain available;\n- the customer can exit later;\n- the transaction is safe.\n\nThis is **guarantee drift**:\n\n> A limited promise gradually becomes a broader trust signal than the original operational system may be able to support.\n> \n\nThe risk is not the existence of a guarantee.\n\nThe risk is a gap between:\n\n- what the customer believes the guarantee covers;\n- what the contract actually covers;\n- what the organization can operationally honor under stress.\n\n## Accumulated guarantee exposure\n\nGuarantees create future obligations.\n\nIf many customers rely on buyback, exchange, or verification promises, the organization may accumulate exposure across:\n\n- liquidity;\n- inventory;\n- verification capacity;\n- dispute handling;\n- customer support;\n- legal responsibility;\n- reputation.\n\nThe promise may appear inexpensive during normal conditions.\n\nIts cost becomes visible during a trust shock.\n\nThis creates a useful question:\n\n> Has the organization measured the operational exposure created by the trust promise, or only the sales benefit?\n> \n\n## Buyback promise as a liquidity signal\n\nA buyback promise may communicate more than customer service.\n\nIt may signal:\n\n- confidence in authenticity;\n- confidence in grading;\n- confidence in future demand;\n- confidence in the seller’s own liquidity;\n- confidence that the certificate will remain recognized.\n\nDuring a trust shock, the promise may be tested by many customers at once.\n\nThe resulting pressure is analytically similar to a liquidity run because many holders may seek exit or re-verification at the same time.\n\nThis is an analogy about synchronized trust withdrawal.\n\nIt is not a claim that diamond retail is legally or economically identical to banking.\n\n## Certification shock and identity risk\n\nIf a certification-linked process is suspected of allowing false, mismatched, or improperly documented items into the market, the risk is not limited to incorrect grading.\n\nA deeper issue may be identity integrity:\n\n- Does the certificate correspond to the correct stone?\n- Can the inscription and record be matched?\n- Can a legitimate proof package be reused or attached incorrectly?\n- Can later owners reconstruct the chain?\n\nOne possible mechanism can be described analytically as **identity laundering**:\n\n> A trusted identity layer can potentially be used to make an uncertain asset appear legitimate.\n> \n\nThe term describes a possible trust-system failure mode, not a finding about the reported case.\n\n## Audit of audit\n\nWhen the verifier becomes part of the uncertainty, the market asks:\n\n> Who verifies the verifier?\n> \n\nA resilient trust system may require separation across:\n\n- grading or certification;\n- commercial sale;\n- inventory control;\n- audit;\n- exception review;\n- incident investigation;\n- customer recovery.\n\nThe answer is not necessarily infinite guarantees.\n\n“Guarantee over guarantee forever” can create complexity without real independence.\n\nThe stronger design question is:\n\n> Which independent evidence, role separation, and recovery process can test the proof without depending entirely on the same institution that created it?\n> \n\n## Owner and process map\n\nA trust pathway may involve:\n\n- source or supplier;\n- importer;\n- laboratory;\n- certificate issuer;\n- retailer;\n- finance and inventory teams;\n- auditor;\n- regulator or law-enforcement body;\n- insurer;\n- customer;\n- secondary buyer;\n- independent re-verifier.\n\nThe exact participants vary.\n\nThe governance question is whether ownership is visible at each stage:\n\n- who creates the evidence;\n- who validates it;\n- who stores it;\n- who can correct or revoke it;\n- who communicates uncertainty;\n- who funds recovery;\n- who accepts the proof in the next transaction.\n\n## Trust stack beyond guarantee\n\nA guarantee alone is not a trust system.\n\nA stronger trust stack may include:\n\n### Identity layer\n\n- unique stone identity;\n- certificate identity;\n- controlled matching;\n- tamper-resistant records where appropriate.\n\n### Evidence layer\n\n- acquisition records;\n- grading data;\n- images or scans;\n- transaction history;\n- re-verification evidence.\n\n### Authority layer\n\n- separation of commercial and verification roles;\n- controlled issuance;\n- exception approval;\n- independent review.\n\n### Visibility layer\n\n- clear certificate status;\n- correction or revocation notice;\n- customer-accessible verification;\n- disclosed guarantee boundary.\n\n### Recovery layer\n\n- re-verification;\n- correction;\n- replacement;\n- refund or buyback where applicable;\n- dispute handling;\n- customer communication;\n- market-wide incident response.\n\n### Learning layer\n\n- incident review;\n- control update;\n- recurring audit;\n- detection of repeated patterns;\n- preservation of evidence for future cases.\n\n## Alternative explanations and challenges\n\nThe essay’s argument would need revision if:\n\n- the reported event did not materially affect certification integrity;\n- the issue was isolated to commercial misconduct rather than the proof system;\n- independent re-verification already provides sufficient recovery;\n- customer reliance is driven mainly by retailer reputation rather than certificates;\n- the buyback promise is narrowly understood and operationally well funded;\n- more data creates privacy, security, or coordination cost without improving recovery;\n- the certificate system has effective revocation and correction mechanisms not visible in current public information.\n\n## Why this matters\n\nTrust infrastructure often succeeds by making complexity disappear.\n\nThe user sees:\n\n- a certificate;\n- a verified badge;\n- a guarantee;\n- an audit result;\n- an approval.\n\nBehind that signal is a pathway of evidence, authority, recordkeeping, and recovery.\n\nThe visible proof becomes dangerous when the market treats it as final while the underlying pathway cannot be reconstructed.\n\nThe general lesson is not that certificates are unreliable.\n\nIt is:\n\n> **Compressed trust needs decompression capacity when something goes wrong.**\n> \n\n## Working propositions\n\nThese remain open to evidence and revision.\n\n- A certificate is compressed trust.\n- Certification relocates rather than eliminates risk.\n- The more portable a trust signal becomes, the larger the consequence of failure.\n- A guarantee can drift beyond its operational boundary.\n- Future promises create accumulated exposure.\n- Trust recovery requires underlying evidence, not only stronger reassurance.\n- The verifier must be reviewable without creating an infinite chain of guarantees.\n- Market trust depends partly on whether proof can be reconstructed after failure.\n\n## Open questions\n\n- What evidence should follow a diamond across ownership changes?\n- Who can independently re-verify identity and grading?\n- How should certificate correction or revocation work?\n- What does a buyback promise legally and operationally cover?\n- Who carries the liquidity burden during a trust shock?\n- What information should be disclosed to current owners?\n- How should the market distinguish one affected item from a wider category?\n- Which recovery mechanism protects customers without creating false certainty?\n- How much underlying evidence can be preserved without creating excessive cost or sensitive-data risk?\n\n## One-sentence summary\n\n> **When final proof becomes uncertain, trust cannot be restored by stronger reassurance alone; the system needs evidence, independent authority, and a credible path to re-verification and recovery.**\n>"
  },
  "/work/adobe-account-restriction": {
    "assets": [
  {
    "type": "paper",
    "driveId": "1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-",
    "fileName": "Adobe_Account_Restriction_Comparative_Case_Study_2026-08-07.pdf",
    "label": "📄 Preview: Adobe_Account_Restriction_Comparative_Case_Study_2026-08-07.pdf ↗",
    "title": "Adobe Account Restriction: Comparative Case Study"
  },
  {
    "type": "image",
    "driveId": "1dYr1QQndfAy0tAxgt6vhlJ15uhTdboxB",
    "fileName": "Adobe_Account_Restriction_Comparative_Cover.png",
    "title": "Adobe Account Restriction Comparative Cover",
    "label": "Preview: Adobe Account Restriction Comparative Cover ↗"
  }
],
    "body": "<asset-bar>\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-\" data-title=\"Adobe Account Restriction Comparative Case Study 2026-08-07 (PDF)\">📄 Adobe Account Restriction Comparative Case Study 2026-08-07 (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n</asset-bar>\n\n## When account recovery is not the same as workflow recovery\n\n> **Independent Comparative Case · Evidence-First Research**\n> \n\n> 12 usable public journeys · Adobe Community + Threads · Adobe official terms and appeal baseline\n> \n\n> Research cut: 7 August 2026 · Public evidence only · Not commissioned by Adobe\n> \n\n\n<diagram-card title=\"ChatGPT Image Aug 7, 2026, 12_38_05 PM.png\" driveid=\"1dYr1QQndfAy0tAxgt6vhlJ15uhTdboxB\" caption=\"ChatGPT Image Aug 7, 2026, 12_38_05 PM.png\"></diagram-card>\n\n\n> **For a designer or creator, losing Creative Cloud access can interrupt more than a subscription. It can stop an edit, export, deadline, release, or client delivery. That makes account recovery and workflow recovery two related but different states.**\n> \n\n---\n\n## Executive Summary\n\n- **Question:** Does the post-restriction resolution problem observed in Shopee reappear when enforcement interrupts an already-paid digital work tool?\n- **Evidence:** 12 usable public journeys—7 Adobe Community and 5 Threads—plus current Adobe Terms and Transparency Center material. The sample is purposive and supports pathway comparison, not prevalence or error-rate estimates.\n- **Observed pattern:** Paid or paid-as-reported access → fraud/suspicion state → restriction or cancellation → affected app/service access → support/review → divergent outcomes such as refund, restoration, extra access time, repeated escalation, replacement purchase, or reported file loss.\n- **Comparative finding:** Shopee suggested **platform decision ≠ customer problem resolved**. Adobe adds **access restored ≠ interrupted workflow restored**.\n- **Product hypothesis:** Where risk permits, resolution should run two tracks in parallel: decide the account case while preserving the minimum safe continuity of the customer’s current work and making recovery states visible.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full 12-page comparative case contains the evidence matrix, Adobe official-source cards, Shopee comparison, revised Explainable Resolution Case, claim-to-source map, and research handoff.\n\n<button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-\" data-title=\"Adobe Account Restriction Comparative Case Study 2026-08-07.pdf (PDF)\">📄 Adobe Account Restriction Comparative Case Study 2026-08-07.pdf (PDF) (PDF) 👁️</button><a href=\"https://drive.google.com/file/d/1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Mở toàn văn PDF ở tab mới\">↗</a>\n\n</aside>\n\n---\n\n## 1. Why Adobe Is a Useful Comparative Case\n\nAdobe removes much of the marketplace complexity in the Shopee case. A customer can pay Adobe directly, use the software inside an active workflow, and then experience enforcement that interrupts access.\n\nThat creates four distinct recovery layers:\n\n| Layer | What can be interrupted | Resolution question |\n| --- | --- | --- |\n| Account / subscription | Restricted, cancelled, inactive, or under review | What happened and can it be contested? |\n| Tool / asset | Apps, paid services, or cloud assets become unavailable or unstable | What remains usable right now? |\n| Customer workflow | Editing, export, creative production, or dependent work stops | How can urgent work continue safely? |\n| Downstream outcome | Deadline, release, client delivery, or submission may be threatened | Can the intended outcome still be recovered? |\n\nThe public corpus includes reported deadline, professional-work, music-release/creative-production, urgent-work, replacement-purchase, and file-loss consequences. These are treated as observed only where explicitly reported.\n\n---\n\n## 2. Evidence and Boundary\n\nThe case uses:\n\n- **7 Adobe Community journeys**;\n- **5 researcher-supplied Threads journeys**;\n- **4 adjacent/context signals** retained for counter-hypotheses but not counted as core journeys;\n- **Adobe General Terms of Use** and **Adobe Transparency Center appeal material** as official baseline.\n\nEight usable journeys are graded Strong and four Medium. Grade reflects pathway completeness—not independent verification of the user’s account history or whether Adobe’s action was correct or incorrect.\n\n- What the evidence cannot determine\n    - the internal fraud trigger or detection logic;\n    - automation versus human decision;\n    - false-positive status;\n    - prevalence or representativeness;\n    - whether an individual action complied with policy or law;\n    - whether platform steps not mentioned publicly actually occurred.\n\n---\n\n## 3. Observed Public Pathway\n\n> **Paid or paid-as-reported access → fraud/suspicion state → restriction/cancellation → affected app/service access → search for explanation/support → review/wait in some cases → outcome → access/payment recovery → possible workflow recovery**\n> \n\nThis is a synthesis of reported states, not an asserted universal Adobe process.\n\nObserved outcomes include:\n\n- refund;\n- restoration;\n- restoration plus extra access time;\n- pending or repeated escalation;\n- replacement access purchased by the customer;\n- reported permanent file loss.\n\nThe important distinction is that **money recovery, access recovery, file recovery, and workflow recovery do not necessarily move together**.\n\n---\n\n## 4. What Transfers from Shopee — and What Adobe Adds\n\n| Dimension | Shopee | Adobe | Comparative reading |\n| --- | --- | --- | --- |\n| Existing customer interest | Orders, refunds, balances, benefits | Paid software/services and cloud work | Both begin after customer commitment. |\n| Platform intervention | Account restriction / enforcement | Fraud-related restriction / cancellation | Enforcement need can coexist with resolution need. |\n| During review | Preserve marketplace interests where appropriate | Preserve minimum safe work continuity where possible | Adobe makes time-sensitive workflow cost more visible. |\n| After decision | Resolve account + affected marketplace interests | Resolve account + access/payment + interrupted work | Customer resolution extends beyond decision closure. |\n| New contribution | Decision ≠ customer problem resolved | Access restored ≠ workflow restored | Workflow recovery becomes a distinct state. |\n\n> **Comparative finding:** the platform can interrupt a tool, the tool can interrupt a workflow, and the workflow can threaten an outcome outside the platform. The resolution object therefore cannot stop at account state or subscription entitlement.\n> \n\n---\n\n## 5. Comparative Product Hypothesis — Resolve the Case and Protect the Work\n\nThe hypothesis is **not** “never suspend a paid user.” Fraud and security controls may require immediate action and may make temporary access unsafe.\n\nThe design question is whether enforcement resolution and workflow continuity can be handled as two connected tracks:\n\n| Track A — Enforcement resolution | Track B — Safe continuity / recovery |\n| --- | --- |\n| Current restriction state and safe-to-disclose reason | What apps, services, files, or functions remain usable |\n| Evidence/action required from the customer | Minimum safe continuity where risk permits |\n| Review stage and next update | Explicit mitigation path if continuity is impossible |\n| Final account/subscription decision | Paid-time, payment, file, or access recovery where permitted |\n| Remaining appeal/remedy | Interruption/recovery timeline for downstream verification |\n\n> **Design question:** What minimum safe continuity can remain while the enforcement decision is unresolved—and, when continuity cannot remain, what information lets the customer mitigate the workflow consequence immediately?\n> \n\nRead-only access, protected download/export, or temporary restricted modes are examples to investigate—not evidence-backed prescriptions. Feasibility depends on Adobe’s architecture, security risk, licensing, and content-storage design.\n\n---\n\n## 6. Explainable Resolution Case — Revised for Workflow Continuity\n\nA customer-facing resolution object would need to answer:\n\n- **Current state:** restricted, under review, evidence required, decision issued, recovery in progress;\n- **Why am I here?** safe-to-disclose reason category and what the customer can respond to;\n- **What is affected?** plan, app, service, cloud asset, function, billing/payment, and access scope;\n- **What still works?** what remains usable, retrievable, viewable, downloadable, or exportable;\n- **What can I do right now?** mitigation or alternate route while review is pending;\n- **What do you need from me?** required evidence/action and submission route;\n- **What is happening now?** acknowledgement, review stage, and case state;\n- **When will I hear back?** next update or resolution window without inventing a clock policy does not promise;\n- **What was decided?** final enforcement/subscription outcome;\n- **What happens to paid value and my work?** refund, access, compensated time, file recovery, and remaining continuity limits;\n- **What can I show someone else?** a portable incident record of timestamps, state changes, submissions, and outcome—without claiming it proves liability.\n\n---\n\n## 7. Evidence-Trail Hypothesis\n\nAdobe also adds a secondary Explainable Trust question: can a platform-generated resolution path leave a verifiable record useful after the platform decision itself?\n\nA credible record would require provenance, timestamps, actor/state identity, version history, evidence/submission status, and an export/share mechanism.\n\n> **Boundary:** such a record may establish sequence and state. It does not automatically establish causation, reasonableness, damages, or legal liability.\n> \n\n---\n\n## What This Case Can and Cannot Conclude\n\n**Supported by the current corpus**\n\n- repeated public reports link paid or paid-as-reported Adobe access with fraud/suspicion enforcement, access interruption, support/review activity, and divergent recovery states;\n- several reports explicitly describe workflow consequences;\n- refund, access restoration, compensated time, file recovery, and downstream workflow recovery are analytically distinct;\n- the evidence is consistent with the Shopee resolution hypothesis and adds workflow continuity/recovery as a separate resolution object.\n\n**Not supported**\n\n- prevalence or error-rate claims;\n- false-positive conclusions;\n- claims that subscription-fraud enforcement is automated;\n- legal findings about breach, causation, damages, or liability;\n- validation of minimum-safe-continuity or portable-record product concepts.\n\n---\n\n## What This Case Demonstrates\n\n**Comparative evidence research · privacy-first journey coding · cross-domain hypothesis testing · customer-resolution design · workflow continuity · enforcement/recovery separation · explainable resolution · evidence boundaries**\n\n---\n\n*Independent comparative work sample · Public evidence only · Research cut: 7 August 2026*"
  },
  "/work/ai-judgment-decisions": {
    "assets": [],
    "body": "> **This inquiry started with a financial-assistant idea. I was trying to improve the recommendation, then realized the more interesting question was what happens to the user’s own judgment after receiving AI help repeatedly.**\n> \n\n> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Research program:** Human–AI–System Evolution\n**Scope:** Consequential decision-support contexts\n**Last updated:** July 2026\n**Boundary:** A working hypothesis—not a validated product framework or a claim about all AI use cases.\n> \n\n## Reading Route\n\n**Quick orientation:** Research question → Working hypothesis → Human outcome under examination → Next evidence\n\n**Concept logic:** Starting observation → Answer-centered vs evidence-centered AI → Possible mechanism\n\n**Research design:** Falsifiers → First evidence-building test → Delayed transfer measures\n\n---\n\n## Research question\n\n> **Does AI help people make better decisions only in the moment, or can it help them develop better judgment over time?**\n> \n\nThis question emerged from a financial-assistant idea.\n\nThe original product question was relatively narrow:\n\n> How can AI help users make better financial decisions instead of maximizing conversion or Buy Now, Pay Later adoption?\n> \n\nBut the deeper issue was not only whether an AI system could produce a better recommendation.\n\nIt was whether repeated interaction with that system would change the user’s own ability to evaluate evidence, recognize uncertainty, and make similar decisions independently.\n\nThat moved the inquiry from immediate product outcome to long-term human outcome.\n\n## Starting observation\n\nMany AI products compress a difficult situation into an answer.\n\nThat can be useful. It can reduce time, organize complexity, and help a person act.\n\nBut compression also changes what remains visible.\n\nWhen evidence, assumptions, uncertainty, trade-offs, and alternative explanations disappear behind a confident recommendation, the user may receive a good answer without learning how the answer was reached.\n\nThe immediate decision may improve while the user’s independent judgment remains unchanged—or becomes more dependent on the system.\n\nThis creates a product question that cannot be answered by conversion, completion rate, satisfaction, or short-term decision quality alone:\n\n> What kind of decision-maker is the product helping the user become?\n> \n\n## Working hypothesis\n\n> **In consequential decision-support contexts, AI that preserves inspectable evidence, communicates uncertainty, and leaves room for human override and recovery may help users develop better judgment over time. AI that compresses complexity into confident answers may improve short-term speed while weakening the user’s ability to assess similar decisions independently.**\n> \n\nThis is not a claim that more explanation is always better.\n\nToo much explanation can create cognitive overload, false reassurance, or the appearance of rigor without better understanding.\n\nThe hypothesis is narrower:\n\n> The recommendation should not become more authoritative than the evidence supporting it.\n> \n\n## Scope\n\nThis inquiry focuses primarily on decisions where the recommendation may affect:\n\n- financial commitments;\n- health-related choices;\n- legal or compliance actions;\n- operational decisions;\n- trust-sensitive relationships;\n- decisions that are difficult or costly to reverse.\n\nThe same evidence requirements may not be necessary for low-consequence tasks such as drafting casual text, generating visual ideas, or reorganizing notes.\n\nEvidence-centered AI is therefore not proposed as a universal interface pattern for every AI interaction.\n\n## Answer-centered AI and evidence-centered AI\n\n### Answer-centered AI\n\nThe product primarily optimizes for:\n\n- speed;\n- completion;\n- decisiveness;\n- reduced cognitive effort;\n- confidence in the recommendation.\n\nA typical interaction is:\n\n> Evidence → AI → Answer\n> \n\nThe user sees the conclusion but may not retain the evidence structure behind it.\n\n### Evidence-centered AI\n\nThe product helps the user inspect how the recommendation is supported.\n\nA possible interaction is:\n\n> Evidence → AI organizes evidence → Recommendation → Evidence remains inspectable\n> \n\nThe AI does not replace evidence. It helps structure evidence so the user can understand what supports the recommendation, what remains uncertain, and what could change the conclusion.\n\n## Possible mechanism\n\nThe hypothesis may depend on five conditions.\n\nThese are mechanism candidates, not a completed framework.\n\n### 1. Evidence remains inspectable\n\nThe user can see which facts, records, calculations, or sources support the recommendation.\n\n### 2. Uncertainty remains visible\n\nThe system distinguishes:\n\n- confirmed information;\n- inference;\n- missing context;\n- outdated evidence;\n- disagreement between sources;\n- conditions that may change the conclusion.\n\n### 3. Intervention is proportional\n\nA strong recommendation against action should require stronger evidence and higher consequence than a light suggestion.\n\nThe system should not use the same authoritative tone for every decision.\n\n### 4. Human reasoning is not bypassed\n\nThe interface gives the user enough structure to understand the decision, question the recommendation, and choose differently.\n\n### 5. Correction and recovery remain possible\n\nWhen the recommendation is wrong, the user can inspect what failed, correct the evidence, and recover without the system hiding behind a final answer.\n\n## Progressive evidence\n\nA possible user experience is:\n\n> Recommendation\n> \n\n> ↓\n> \n\n> Main supporting evidence\n> \n\n> ↓\n> \n\n> Uncertainty and missing context\n> \n\n> ↓\n> \n\n> Expanded reasoning\n> \n\n> ↓\n> \n\n> Supporting calculations\n> \n\n> ↓\n> \n\n> Original evidence\n> \n\nDifferent users may inspect different depths.\n\nThe product question is not whether every user reads everything.\n\nThe question is whether the system preserves an accessible route from recommendation back to evidence.\n\n## Human outcome under examination\n\nThis essay does not attempt to define all Human Outcomes.\n\nIt examines one candidate outcome:\n\n> **Judgment development and independent decision capacity**\n> \n\nPossible signals include:\n\n- Can the user identify which evidence matters?\n- Can the user explain why a recommendation was made?\n- Can the user recognize when evidence is incomplete?\n- Can the user challenge an AI recommendation appropriately?\n- Can the user make a similar decision later without AI support?\n- Does the user’s confidence become better calibrated to evidence quality?\n- Can the user recover when the recommendation is wrong?\n\n## Falsifiers and counter-hypotheses\n\nThe working hypothesis would be weakened if:\n\n- evidence visibility increases cognitive load without improving understanding;\n- users still become dependent even when evidence remains inspectable;\n- users perform better with AI but show no improvement on later decisions without AI;\n- progressive explanation creates false confidence rather than calibrated confidence;\n- users confuse the amount of evidence with the quality of evidence;\n- answer-centered AI produces equal or better long-term judgment development;\n- domain expertise, not interface design, explains the observed improvement;\n- users do not have enough time, incentive, or ability to inspect evidence in real workflows.\n\nA competing hypothesis is:\n\n> Most users do not want to develop judgment through a product. They want reliable delegation, and the product should optimize for safe delegation rather than user learning.\n> \n\nAnother competing hypothesis is:\n\n> Judgment development depends more on feedback after the decision than on evidence visibility before the decision.\n> \n\nBoth alternatives should remain open.\n\n## First evidence-building test\n\nA simple early test could compare two versions of the same consequential decision-support task.\n\n### Version A: Answer-centered\n\nThe user receives:\n\n- a recommendation;\n- a short confidence statement;\n- a concise explanation.\n\n### Version B: Evidence-centered\n\nThe user receives:\n\n- the same recommendation;\n- the main supporting evidence;\n- visible uncertainty;\n- access to expanded reasoning;\n- a clear route to original evidence.\n\n### Immediate measures\n\n- decision quality;\n- time to decision;\n- confidence calibration;\n- ability to identify missing evidence;\n- willingness to challenge the recommendation;\n- perceived cognitive burden.\n\n### Delayed transfer measures\n\nLater, users receive a related decision without AI support.\n\nMeasure:\n\n- decision quality;\n- evidence selection;\n- explanation quality;\n- recognition of uncertainty;\n- confidence calibration;\n- ability to notice when the previous recommendation pattern no longer applies.\n\nThe strongest early evidence would not be that Version B produces more clicks or longer reading time.\n\nIt would be that users become better at evaluating a later decision independently.\n\n## Current working propositions\n\nThese propositions remain open to revision:\n\n- The recommendation should never be more authoritative than the evidence supporting it.\n- AI should not hide complexity behind confidence.\n- AI should organize complexity into evidence humans can inspect.\n- Trust comes from appropriate transparency, not maximum explanation.\n- Strong intervention should be rare, proportional, and evidence-based.\n- Human agency requires more than a final choice button; it requires enough visibility to understand and contest the recommendation.\n- A product can improve immediate outcomes while weakening long-term human capability.\n\n## Relationship to the broader research program\n\nThis hypothesis sits inside **Human–AI–System Evolution**.\n\nThe central program question is:\n\n> What happens to humans after living with AI every day for the next 5–10 years?\n> \n\nThis essay examines one part of that question:\n\n> What happens to human judgment when AI repeatedly participates in consequential decisions?\n> \n\nIt also connects to three existing directions:\n\n- **AI Apprenticeship:** Before AI receives greater authority, it may need to learn local meaning, boundaries, and consequences.\n- **AI workflow governance:** Governance concerns how an output becomes reliance, record, action, or consequence—not only how the model produces it.\n- **The AI Product Question We’re Not Asking:** Product success may need to include who the user becomes through repeated use, not only what the product helps the user complete.\n\n## Current status\n\nThis page preserves a working hypothesis.\n\nIt does not yet establish:\n\n- that evidence-centered AI improves long-term judgment;\n- which evidence interface works best;\n- how much explanation is appropriate;\n- whether users want learning or delegation;\n- whether the result transfers across domains;\n- what governance responsibility the product team should carry.\n\n## Next evidence\n\nThe next step is not to expand the concept into a larger framework.\n\nThe next step is to test whether evidence-centered interaction changes:\n\n1. immediate decision quality;\n2. confidence calibration;\n3. later independent judgment;\n4. appropriate challenge of AI recommendations;\n5. recovery after an incorrect recommendation."
  },
  "/work/ai-apprenticeship": {
    "assets": [],
    "body": "> **Most AI deployment questions start with what the model can automate or execute. I became more interested in the step before that: what the model may still misunderstand about local meaning, authority, evidence, exceptions, and recovery.**\n> \n\n> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Research program:** Human–AI–System Evolution\n**Scope:** AI systems entering recurring organizational or operational workflows\n**Last updated:** July 2026\n**Boundary:** A working hypothesis—not a validated deployment protocol, universal AI architecture, or required path for every AI system.\n> \n\n## Reading Route\n\n**Quick orientation:** Research question → Working hypothesis → Bounded progression of authority → Next step\n\n**System logic:** Formal process / operational reality / local meaning → Observer before actor → Inquiry before action\n\n**Critical review:** Surveillance challenge → Organizational power → Competing hypotheses → Falsifiers\n\n---\n\n## Research question\n\n> **Before an AI system receives authority to act inside an organization, should it first learn how that organization understands its own work?**\n> \n\n## Origin of the inquiry\n\nMany AI discussions begin with action.\n\nThe questions are often:\n\n- What can the AI automate?\n- Which decisions can it make?\n- Which tools can it use?\n- How much human review can be removed?\n- How quickly can it become an agent?\n\nThose questions may begin too late.\n\nBefore an AI acts, it enters a system with:\n\n- local language;\n- informal workarounds;\n- competing incentives;\n- incomplete records;\n- role boundaries;\n- historical decisions;\n- trust relationships;\n- exceptions that are not written in policy;\n- consequences that may appear far from the original action.\n\nA pretrained model may arrive with broad knowledge and strong answer-generation capability.\n\nIt does not automatically understand what a specific organization means by:\n\n- urgent;\n- approved;\n- complete;\n- risky;\n- customer-ready;\n- final;\n- resolved;\n- trusted.\n\nThat led to the working question:\n\n> Should AI first become an apprentice observer before it becomes an operational actor?\n> \n\n## Starting observation\n\nOrganizations rarely operate exactly as their formal process diagrams suggest.\n\nWork is shaped by at least three layers.\n\n### Formal process\n\nWhat policy, procedure, role descriptions, or system design says should happen.\n\n### Operational reality\n\nWhat people actually do to complete the work.\n\n### Local meaning\n\nHow people interpret:\n\n- which exception is acceptable;\n- which signal matters;\n- who has practical authority;\n- when escalation is necessary;\n- what counts as sufficient evidence;\n- what failure is recoverable;\n- what risk is socially or commercially unacceptable.\n\nAn AI system can read the formal process.\n\nIt may still misunderstand operational reality and local meaning.\n\nIf it receives action authority too early, it can scale that misunderstanding.\n\n## Working hypothesis\n\n> **In recurring and consequential workflows, AI may need a supervised apprenticeship period in which it observes, asks questions, identifies uncertainty, and learns local mission, boundaries, authority, evidence, and recovery before receiving broader authority to recommend or act.**\n> \n\nThe hypothesis does not mean that the AI should imitate every existing behavior.\n\nExisting workflows may contain:\n\n- inefficiency;\n- bias;\n- unsafe shortcuts;\n- undocumented power;\n- outdated policy;\n- normalized failure.\n\nThe purpose of apprenticeship is not blind imitation.\n\nIt is to understand the system well enough to distinguish:\n\n- intended process;\n- actual process;\n- local adaptation;\n- unresolved contradiction;\n- behavior that should not be preserved.\n\n## What “system learner” means\n\nThe phrase “system-born AI” can be misleading if taken literally.\n\nMost real systems will use pretrained models rather than an AI created entirely inside one organization.\n\nA more precise idea is:\n\n> **A pretrained model becomes a system learner when it is deliberately contextualized through supervised observation, inquiry, correction, and bounded participation in a specific environment.**\n> \n\nThe useful contrast is therefore:\n\n> A pretrained model enters with broad answers.\n> \n> \n> A system learner should first enter with questions about local meaning.\n> \n\n## Why observer before actor\n\nAn actor changes the system.\n\nAn observer can first learn how the system currently works and where its own understanding is weak.\n\nA supervised observer may help surface:\n\n- repeated handoff failures;\n- missing ownership;\n- inconsistent status language;\n- evidence gaps;\n- recurring exceptions;\n- conflicts between policy and practice;\n- unresolved recovery burden;\n- decisions that depend on one person’s memory.\n\nThe value is not only pattern detection.\n\nThe value is making the system discuss what has previously remained implicit.\n\n## Inquiry before action\n\nUseful questions for an apprenticing AI may include:\n\n### Mission\n\n- What is this workflow meant to achieve?\n- Which outcome matters when speed, cost, trust, and safety conflict?\n- Who is the system ultimately serving?\n\n### Boundary\n\n- What is inside the AI’s role?\n- What must remain a human decision?\n- Which action is prohibited even if technically possible?\n- When should the AI stop and escalate?\n\n### Meaning\n\n- What does “complete” mean in this team?\n- Which signals are trusted?\n- Which exceptions are normal, and which are dangerous?\n- Which language has different meanings across functions?\n\n### Evidence\n\n- What evidence is required before a recommendation?\n- Which data is missing, delayed, inferred, or unreliable?\n- What must be preserved if the decision is later challenged?\n\n### Authority\n\n- Who can approve, reject, override, or reverse?\n- Is formal authority different from practical authority?\n- Which decision requires more than one role?\n\n### Recovery\n\n- What happens when the workflow goes wrong?\n- Can the action be reversed?\n- Who owns correction?\n- Who bears the cost during uncertainty?\n\nThe AI does not need to ask every question in every interaction.\n\nThe apprenticeship should help it learn which questions matter in which context.\n\n## A bounded progression of authority\n\nThe progression below is a research direction, not a universal protocol.\n\n### 1. Observer\n\nThe AI can:\n\n- read permitted workflow records;\n- summarize recurring patterns;\n- identify missing information;\n- ask clarification questions.\n\nIt cannot:\n\n- alter records;\n- send external communication;\n- make operational decisions;\n- execute transactions.\n\n### 2. Interpreter\n\nThe AI can:\n\n- propose a pathway map;\n- distinguish formal and observed workflow;\n- identify possible contradictions;\n- surface uncertainty and alternative explanations.\n\nIts interpretation remains reviewable.\n\n### 3. Reviewer\n\nThe AI can:\n\n- check a draft, record, or workflow against explicit rules;\n- identify missing evidence;\n- flag possible inconsistency;\n- recommend further review.\n\nIt does not become the final authority merely because it can detect a pattern.\n\n### 4. Recommender\n\nThe AI can:\n\n- propose an action;\n- show supporting evidence;\n- communicate uncertainty;\n- identify required approval;\n- state what would change the recommendation.\n\nA human or governed decision process retains authority.\n\n### 5. Actor\n\nThe AI may execute a bounded action only when:\n\n- mission is clear;\n- authority is explicit;\n- evidence is sufficient for the consequence;\n- the action is observable;\n- reversal or recovery exists where required;\n- escalation conditions are defined;\n- performance and failure are reviewed.\n\nThis progression should not be interpreted as an inevitable promotion path.\n\nSome systems should remain observers or recommenders permanently.\n\n## The surveillance challenge\n\nAn observing AI can easily become a surveillance system.\n\nThe distinction does not depend only on whether the AI is “helpful.”\n\nIt depends on governance.\n\nA supervised apprenticeship should clarify:\n\n- what the AI can observe;\n- whose data it can access;\n- why the observation is necessary;\n- whether people know the observation exists;\n- how long information is retained;\n- whether information can be used for performance evaluation;\n- who can inspect the AI’s memory or conclusions;\n- how errors can be corrected;\n- which private or informal spaces remain outside the system.\n\nA system that learns from employees without meaningful boundaries may improve process visibility while damaging trust, autonomy, and psychological safety.\n\nThis creates a central challenge:\n\n> **Can an AI learn the system without turning every human action into organizational evidence?**\n> \n\n## Local learning and organizational power\n\nNot every explanation in an organization is neutral.\n\nDifferent actors may describe the same workflow differently because they have different:\n\n- incentives;\n- authority;\n- exposure to risk;\n- access to information;\n- definitions of success.\n\nAn apprenticing AI may learn the perspective of the most powerful or most documented role and mistake it for system truth.\n\nThe learning process should therefore seek multiple perspectives:\n\n- frontline operator;\n- manager;\n- customer-support role;\n- risk or compliance;\n- partner;\n- affected user;\n- system record;\n- exception history.\n\nThe goal is not to create perfect consensus.\n\nIt is to make disagreement and missing perspective visible.\n\n## What the AI should learn—and what it should challenge\n\nA system learner should attempt to understand:\n\n- workflow sequence;\n- status definitions;\n- ownership;\n- evidence requirements;\n- handoffs;\n- escalation;\n- recovery;\n- local exceptions;\n- recurring failure.\n\nIt should not automatically preserve:\n\n- discriminatory practice;\n- unsafe shortcuts;\n- retaliation;\n- hidden coercion;\n- policy violations;\n- normalized burden on weaker participants;\n- workflows that exist only because the system has failed to fix a known problem.\n\nApprenticeship therefore requires a distinction between:\n\n> **learning the system**\n> \n> \n> and\n> \n> **legitimizing the system.**\n> \n\n## Competing hypotheses\n\nThe working hypothesis may be incomplete.\n\n### Competing hypothesis 1 — apprenticeship slows useful deployment\n\nA long observation period may delay value while people continue doing avoidable manual work.\n\nA bounded pilot with rapid feedback may teach the AI more effectively than observation alone.\n\n### Competing hypothesis 2 — existing workflow is the wrong teacher\n\nIf the organization’s current process is inefficient or harmful, learning it deeply may anchor the AI to the wrong operating model.\n\n### Competing hypothesis 3 — explicit rules are sufficient\n\nIn highly standardized workflows, the AI may not need a broad apprenticeship.\n\nClear rules, constrained tools, testing, and monitoring may be enough.\n\n### Competing hypothesis 4 — humans cannot reliably explain local meaning\n\nPeople may provide inconsistent or self-serving explanations.\n\nObserved behavior, system data, and outcome evidence may be more useful than interviews.\n\n### Competing hypothesis 5 — responsibility should remain with system designers\n\nIt may be misleading to say the AI “learns responsibility.”\n\nResponsibility remains with the people and organization that define access, authority, monitoring, and recovery.\n\nThese competing hypotheses should remain open.\n\n## Falsifiers\n\nThe main hypothesis would be weakened if:\n\n- an apprenticeship period does not reduce meaningful errors or misunderstanding;\n- observation produces better imitation but not better judgment;\n- the AI becomes more confident without becoming more accurate;\n- people change behavior because they know they are being observed, making the learning unreliable;\n- the system learns dominant narratives and ignores weaker stakeholders;\n- bounded pilots with explicit rules outperform apprenticeship;\n- recovery quality does not improve;\n- the cost and privacy burden exceed the operational benefit;\n- the workflow changes too quickly for the learned context to remain useful.\n\n## Evidence needed\n\nThe next step is not to build a universal System Apprenticeship Protocol.\n\nThe next step is to compare bounded learning approaches in real workflows.\n\nUseful evidence would include:\n\n### Workflow selection\n\nChoose a recurring workflow with:\n\n- visible handoffs;\n- meaningful exceptions;\n- moderate consequence;\n- available human review;\n- clear recovery.\n\nAvoid starting with:\n\n- irreversible high-stakes actions;\n- disciplinary decisions;\n- legal determinations;\n- clinical decisions;\n- hidden employee monitoring.\n\n### Baseline\n\nDocument:\n\n- current workflow;\n- formal process;\n- actual exceptions;\n- recurring failures;\n- ownership;\n- evidence gaps;\n- recovery time.\n\n### Apprenticeship behavior\n\nAllow the AI to:\n\n- observe permitted records;\n- ask bounded questions;\n- propose pathway maps;\n- identify uncertainty;\n- receive corrections;\n- maintain an auditable record of what changed in its interpretation.\n\n### Comparison\n\nCompare with:\n\n- rule-only automation;\n- direct recommender deployment;\n- human-only workflow;\n- limited pilot without contextual learning.\n\n### Measures\n\nPossible measures include:\n\n- missing-context detection;\n- quality of clarification questions;\n- false confidence;\n- recommendation quality;\n- appropriate escalation;\n- override rate;\n- recovery time;\n- human trust calibration;\n- perceived surveillance;\n- stakeholder disagreement surfaced;\n- whether repeated corrections improve later performance.\n\n## Human outcome under examination\n\nThis essay is not only about AI accuracy.\n\nIt also asks what happens to humans and organizations when AI learns through prolonged observation.\n\nPossible human outcomes include:\n\n- greater shared understanding;\n- clearer ownership;\n- reduced repetitive explanation;\n- improved decision visibility;\n- increased surveillance pressure;\n- reduced psychological safety;\n- overreliance on AI interpretation;\n- erosion of informal human judgment;\n- stronger or weaker ability to challenge the system.\n\nThe apprenticeship should therefore be evaluated on both:\n\n> **what the AI learns**\n> \n> \n> and\n> \n> **what the learning process does to the people being observed.**\n> \n\n## Relationship to Evidence-Centered AI\n\nThe Evidence-Centered AI hypothesis asks:\n\n> Can AI help people develop better judgment when evidence remains inspectable?\n> \n\nAI Apprenticeship asks an earlier system question:\n\n> Before AI advises or acts, how does it learn which evidence, meanings, boundaries, and consequences matter in this environment?\n> \n\nThe two directions connect but should not be collapsed.\n\nEvidence-Centered AI concerns how the system supports a human decision.\n\nAI Apprenticeship concerns how the AI earns enough contextual understanding to participate in the decision pathway at all.\n\n## Relationship to Pathway Lens\n\nPathway Lens may help examine how an AI output moves from:\n\n> observation\n> \n> \n> → interpretation\n> \n> → recommendation\n> \n> → reliance\n> \n> → record\n> \n> → action\n> \n> → consequence\n> \n> → feedback.\n> \n\nThe lens is useful when authority increases along that route.\n\nIt does not prove that apprenticeship is necessary.\n\nThe hypothesis must be tested through workflow evidence.\n\n## Working propositions\n\nThese remain provisional:\n\n- Action authority should not grow faster than contextual understanding.\n- A system should learn local meaning before treating local data as obvious.\n- Observation without privacy and power boundaries can become surveillance.\n- Learning the current workflow does not make the current workflow legitimate.\n- Broader authority requires stronger evidence, observability, and recovery.\n- Some AI systems should remain observers or recommenders permanently.\n- The organization remains responsible for what the AI is allowed to learn and do.\n- An AI apprenticeship is useful only if it improves both operational understanding and human conditions of responsibility.\n\n## Open questions\n\n- Which workflows benefit most from apprenticeship?\n- How long should an apprenticeship last?\n- Who decides that the AI has learned enough?\n- What evidence justifies movement from observer to recommender?\n- How should conflicting stakeholder explanations be represented?\n- What information should never enter the AI’s learning context?\n- Can the AI forget outdated local practices?\n- How should the system respond when policy and operational reality conflict?\n- Can employees challenge the AI’s interpretation?\n- Who owns correction when the AI learns the wrong lesson?\n- How should organizational change update or invalidate prior learning?\n- Does apprenticeship increase human capability—or make the organization more dependent on AI-mediated understanding?\n\n## Current status\n\nThis page preserves a working hypothesis:\n\n> In recurring and consequential workflows, AI may need supervised inquiry and contextual learning before receiving broader authority.\n> \n\nIt does not yet establish:\n\n- a universal development path;\n- a standard duration;\n- a validated authority ladder;\n- a general deployment protocol;\n- that apprenticeship is superior to constrained automation;\n- that observing a workflow is ethically acceptable by default.\n\n## Next step\n\nThe next step is a bounded comparative study.\n\nSelect one recurring workflow.\n\nCompare:\n\n- direct AI recommendation;\n- rule-constrained automation;\n- supervised apprenticeship;\n- human-only operation.\n\nMeasure not only task performance, but also:\n\n- context understanding;\n- appropriate escalation;\n- false confidence;\n- recovery;\n- surveillance burden;\n- human ability to challenge the system.\n\n> **Before AI becomes an actor, the research question is not only what it can do. It is what the system has allowed it to understand—and whether that learning process is safe for the humans inside the system.**"
  },
  "/work/zalopay-smes-when-paid-not-done": {
    "assets": [
  {
    "type": "image",
    "driveId": "1WEjVyZBFnMMB-GVTlEMZFD6P1ZzmujCN",
    "fileName": "ZaloPay & SMEs_Cover",
    "title": "ZaloPay & SMEs Cover",
    "label": "Preview: ZaloPay & SMEs Cover ↗"
  }
],
    "body": "> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Evidence basis:** Public product signals, SME workflow observation, and operational inference\n**Last updated:** July 2026\n**Boundary:** An outside-in hypothesis with no access to ZaloPay’s internal roadmap, merchant data, or operating model.\n> \n\n## Reading Route\n\n**Quick orientation:** Observation → Share of Operations → Practical question\n\n**Concept logic:** Work after payment → Pathway Lens read → operating boundary\n\n**Critical review:** Drift / boundary / governance notes → dependency and permission questions\n\nOriginal LinkedIn post: [Part 1 — My Thesis About the Pattern of Operations: Case Study #1 — ZaloPay & SMEs](https://www.linkedin.com/posts/yunero1206_part-1-my-thesis-about-the-pattern-of-operations-activity-7467241511831810048-nKNH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACt8jYcBICbiEUj4-7vV-Zyfv_Er2TbIssg)\n\n\n<diagram-card title=\"d1c784d3-7486-4349-9b02-acd031099b7d.png\" driveid=\"1WEjVyZBFnMMB-GVTlEMZFD6P1ZzmujCN\" caption=\"d1c784d3-7486-4349-9b02-acd031099b7d.png\"></diagram-card>\n\n\n## Observation\n\nThis case began with a public signal: ZaloPay appeared to be moving closer to SMEs.\n\nAt first, the obvious interpretation was payment expansion. A payment wallet working with small merchants naturally brings up questions about QR adoption, merchant acceptance, settlement, transaction volume, and payment convenience. That reading made sense. ZaloPay is a payment app, and payment is the visible layer.\n\nBut the more I looked at the daily workflow of small merchants and household businesses in Vietnam, the more that explanation felt incomplete. The merchant’s problem did not seem to end at receiving money. In many cases, that was where another layer of work began.\n\nReceiving payment does not end the merchant’s work. It simply marks the point where another layer begins: matching orders, updating inventory, tracking cash flow, remembering returning customers, arranging delivery, following up, and making dozens of small decisions throughout the day. Much of that work still lives across notebooks, spreadsheets, chat groups, memory, and offline conversations.\n\nSo the question started to shift.\n\nAt first, the question seemed to be:\n\n> How can a payment platform help SMEs receive money more easily?\n> \n\nBut after mapping the merchant workflow, the better question became:\n\n> What operational problems do SMEs still face after payment succeeds?\n> \n\nThat was the moment the case became more interesting. Payment was still important, but it began to look less like the whole problem and more like the first visible signal in a much larger operating pathway.\n\nThat was when I realized I was no longer studying only a payment product. I was studying the work that begins after payment.\n\nA payment confirms that something happened. It does not automatically organize the business reality around that event. It does not tell the merchant whether the order was fulfilled, whether inventory changed, whether the customer should be remembered, whether cash flow is improving, or whether today’s sales pattern should affect tomorrow’s decision.\n\nThis led to the core observation of the case:\n\n> SMEs do not struggle only because they lack payment tools. Many operational challenges begin after money enters the business.\n> \n\nFrom there, ZaloPay became interesting not only as a payment app, but as a possible case for thinking about SME operations. If a platform already sits close to payment activity, it may also sit close to signals about orders, customers, cash flow, repeat behavior, inventory movement, and business rhythm.\n\nThe question is not whether every payment platform should become a full business operating system. That would be too simple. The more useful question is whether payment can become the entry point into a calmer operational layer for small merchants.\n\nThat realization led me to a different way of looking at platform businesses. Instead of asking only which feature a company owns, I started asking which part of people’s daily work flows through it.\n\nThis is where I started thinking about **Share of Operations**.\n\nMost platform questions focus on users, transactions, payment volume, or merchant adoption. Those metrics still matter. But for SME infrastructure, another question may be more revealing:\n\n> How much of a merchant’s daily operation flows through the platform?\n> \n\nA company that owns only one feature can be replaced. A company that becomes part of daily operations is harder to remove, not because the merchant is locked in, but because the system has become part of how the merchant works.\n\nA merchant can switch payment providers. A merchant can switch marketing channels. But if a system helps organize orders, customers, cash flow, inventory signals, and daily decisions, then it is no longer only a payment tool. It becomes part of the operating layer.\n\nThe broader lesson is that I no longer look at businesses only by asking what product they offer. I start by asking what people rely on to run their daily operations.\n\nAnd in this case, the question became:\n\n> Who becomes part of the merchant’s daily operating rhythm after payment succeeds?\n> \n\n## Pathway Lens read\n\nThe pathway is not simply **payment → settlement**. It can become:\n\n- payment signal → order record;\n- transaction history → cash-flow view;\n- merchant activity → business recommendation;\n- customer behavior → retention / loyalty workflow;\n- operational data → future system input.\n\nThe visible moment is payment success. The hidden pathway is the merchant work that begins after that moment: recording, matching, remembering, planning, correcting, and deciding.\n\n## Drift / boundary / governance notes\n\n- **Drift:** merchant reality may be reduced to payment data if inventory, labor, informal credit, family operations, offline orders, seasonal demand, or supplier constraints are missing.\n- **Boundary:** payment output can become business advice, business record, credit signal, or platform dependency.\n- **Evidence:** transaction source, merchant action, recommendation basis, record update, and downstream effect should remain reconstructable.\n- **Authority:** ZaloPay should not silently move from payment processor to business operator without clear permission boundaries.\n- **Recovery:** wrong recommendations should be reversible, explainable, and correctable before they affect credit, cash flow, or merchant trust.\n\n## Practical question\n\nCan a local payment platform become a calm commerce infrastructure layer without turning small merchants into dependent data subjects?"
  },
  "/work/metub-creator-economy": {
    "assets": [],
    "body": "### From Share of Operations to Share of Stability\n\n> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Evidence basis:** Public creator/fan journey signals, public company signals, and operational inference\n**Last updated:** August 2026\n**Boundary:** This is not a description of METUB’s internal strategy, roadmap, metrics, or operating model.\n> \n\n---\n\n## Research question\n\n> **What kind of operating infrastructure do creators need when creating becomes a business—and what responsibility does a platform inherit when more of that operation flows through it?**\n> \n\n## Origin of the inquiry\n\nThis started while I was mapping creator and fan journeys across memberships, creator websites, content access, orders, payments, and support. A fan could move from membership to payment, from payment to order, or from community to support, while identity, entitlement, payment context, order history, support records, and relationship history did not necessarily move with them. From outside, it looked like one ecosystem; operationally, the state appeared distributed.\n\nMy first interpretation was fan-side fragmentation. Following the same dependencies back to the creator side made the question wider. If a fan journey already needs coordination across identity, entitlement, commerce, payment, and support, what happens when the creator is also carrying brand commitments, approvals, livestreams, settlement, fulfilment, reporting, rights, and audience expectations?\n\nPublic signals around creator-economy companies include work across operations, commerce, partnerships, analytics, livestream, strategy, and business support. That does not prove a specific company is building an integrated creator operating system. It was enough to make the operating layer worth inspecting.\n\n> **What kind of operating infrastructure starts to matter when creating becomes recurring commercial work?**\n> \n\n## When creator work becomes operating work\n\nOnce several commitments are live at the same time, the job is no longer only to publish content. A creator may have to keep campaign terms and approvals straight, deliver a livestream, track affiliate or store activity, wait for settlement, handle reporting, respect rights and platform rules, and still respond when a fan or customer has a problem.\n\nThe useful part of that list is not its length. It is the way one failure can spill into another area: an unclear approval can become a public claim problem; a fulfilment issue can become a support burden; a delayed payment can interrupt the creator’s ability to keep working; a rights mistake can become a takedown or relationship dispute.\n\nThat gave me a more specific question than “how should creator platforms grow?”: which parts of recurring creator work become easier to coordinate when they move through one platform, and which new dependencies appear at the same time?\n\n## A first working idea: Share of Operations\n\nIf more recurring activities pass through one platform, the value can come from coordination and continuity, not only distribution or monetization. Onboarding, campaign coordination, commerce, livestream operations, settlement, reporting, fan entitlement, support, compliance records, and business history can start to share context instead of being rebuilt in separate places.\n\nThe switching cost in that situation is not only technical. A creator may be able to open another tool tomorrow, while still needing to move unfinished commitments, payment context, partnership history, audience relationships, support records, and prior decisions. That is the mechanism I was trying to describe.\n\nI use **Share of Operations** as shorthand for one question:\n\n> **How much of the creator’s recurring business operation flows through the platform?**\n> \n\nThis is still a working concept, not a validated platform metric. Specialized tools may remain better for many jobs, and fragmentation can sometimes preserve flexibility rather than create unnecessary burden.\n\n## Where that idea starts to break\n\nShare of Operations helps explain why workflow concentration can reduce coordination cost and make a platform harder to replace. It misses something important, though: creator operations carry money, commitments, rights, reputation, and continuity alongside tasks.\n\nA brand brief can become a creator obligation, then an audience-facing claim. A delayed settlement can become a cash-flow problem. A rights mistake can become a takedown dispute. A livestream can be clipped and reframed after the original context is gone. The more of this activity passes through one platform, the closer that platform sits to the points where ordinary operating friction becomes a trust or recovery problem.\n\nThat is where the first idea stopped being enough for me. The useful question was no longer just how much work a platform could coordinate, but what should remain clear and recoverable when that coordination carries consequences.\n\n## A second working idea: Share of Stability\n\nI started using **Share of Stability** as shorthand for a second question:\n\n> **How much of the creator’s continuity, clarity, trust, and recovery capacity is strengthened by the platform?**\n> \n\nThis can show up in fairly boring mechanics: a clear payment status, an owner for an approval, a record of what was agreed, a way to correct an error, an escalation path when support stalls, or enough portability that leaving the platform does not erase business memory. Those mechanics matter more as the platform participates in more recurring work.\n\nThe working hypothesis is:\n\n> **As a platform takes greater Share of Operations, it may also inherit greater responsibility for the stability of the workflows it helps carry.**\n> \n\nI do not mean that the platform should control every creator decision or absorb every risk. In some cases that would create the opposite problem: more centralized authority, less autonomy, and harder appeals.\n\n## The trade-off\n\nDeeper integration can lower coordination cost, preserve history, and make recurring work easier to run. The same integration can concentrate dependency and make one failure affect more of the creator’s business at once.\n\nThat leaves a more useful test than “is integration good?”:\n\n> **Can a platform increase its Share of Operations without weakening the creator’s independent capacity, visibility, portability, and ability to recover?**\n> \n\nFor this inquiry, the areas I would watch are status clarity, ownership, evidence, payment visibility, correction, escalation, dispute handling, continuity, and recovery. The point is not to make the platform responsible for every consequence. It is to see whether deeper participation leaves the creator with a clearer operating position or simply a larger dependency.\n\n- Optional diagnostic — where does operating friction become consequence?\n    \n    I use Pathway Lens here only as a supporting check. A small internal input can travel through approval, execution, audience interpretation, payment, reputation, and later recovery.\n    \n    - Where does an internal task become an audience-facing claim?\n    - Where does a payment status become livelihood risk?\n    - What evidence remains when a disagreement occurs?\n    - Who can correct the pathway before the consequence is amplified?\n\n## What could disprove this\n\nThere are several credible explanations that would weaken or change the hypothesis.\n\n- Broad hiring may reflect normal company growth rather than movement toward creator operating infrastructure.\n- Creators may prefer specialized tools, and fragmentation may preserve useful flexibility.\n- Stability may come mainly from partnerships or services rather than product integration.\n- Creator needs may vary too widely for one operating model.\n- Stronger platform involvement may reduce autonomy even when coordination improves.\n- Share of Operations may increase retention without improving creator outcomes.\n\nAny of those could be true. The public signals I reviewed do not discriminate strongly enough between them yet.\n\n## Evidence I would need next\n\nThe next useful work is empirical rather than conceptual. I would want creator workflow maps across tools and platforms, recurring sources of coordination burden, payment and settlement friction, support and dispute journeys, rights and approval workflows, switching behavior, data portability, record continuity, and creator perceptions of operational stability.\n\nI would also want stronger public evidence for any company-specific direction before attaching this hypothesis to METUB itself. This page is an outside-in inquiry, not a description of METUB’s roadmap or operating model.\n\nThe point of collecting that evidence would be to answer narrower questions: which responsibilities actually move with deeper platform participation, which stay outside, and where integration improves the creator’s position versus simply increasing dependency.\n\n## Current status\n\nI still do not know whether **Share of Operations** and **Share of Stability** will turn out to be useful measures, or only useful ways to frame the problem. For now, they help separate two things that are easy to collapse: how much recurring work passes through a platform, and whether the creator becomes more capable of understanding, continuing, and recovering that work as a result.\n\nThis essay does not claim that either concept is validated, that METUB is pursuing this operating model, or that one platform should control the full creator workflow. The next step is evidence building: map real creator workflows, switching costs, payment and support failures, and see which responsibilities actually change as platform participation deepens.\n\nA few questions stay open for me:\n\n- Which creator operations should a platform own, connect, support, or deliberately leave outside?\n- What records and evidence need to remain portable?\n- At what point does useful integration become unhealthy dependency?\n- Which form of stability matters most in practice: income, workflow, payment, rights, audience trust, or recovery?\n- Does deeper integration strengthen creator independence, or only make leaving harder?\n\nThat is where the evidence stops for now."
  },
  "/work/momo-ai-paylater": {
    "assets": [
  {
    "type": "image",
    "driveId": "1-CpczXqsXAzQwgjn_7bbXHiAub-F4GEg",
    "fileName": "MoMo AI PayLater Cover",
    "title": "MoMo AI PayLater Cover",
    "label": "Preview: MoMo AI PayLater Cover ↗"
  }
],
    "body": "> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Evidence basis:** Public product context, consumer-finance pathway reasoning, and clearly labeled inference\n**Last updated:** July 2026\n**Boundary:** An outside-in hypothesis with no access to MoMo’s internal data, models, underwriting logic, or roadmap.\n> \n\n## Reading Route\n\n**Quick orientation:** Observation → Working thesis → Practical question\n\n**Product logic:** Conversion-first vs trust-first → Pathway Lens read → user outcome after approval\n\n**Critical review:** Drift / boundary / governance notes → affordability, authority, explanation, and recovery\n\nOriginal LinkedIn post: [Case Study #3: MoMo — AI PayLater: Conversion-First vs Trust-First](https://www.linkedin.com/posts/yunero1206_part-4-share-of-stability-trust-angle-activity-7470828786339741696-6E8j?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACt8jYcBICbiEUj4-7vV-Zyfv_Er2TbIssg)\n\n\n<diagram-card title=\"fce5e3cf-d08d-4783-af72-36132d671a18.png\" driveid=\"1-CpczXqsXAzQwgjn_7bbXHiAub-F4GEg\" caption=\"fce5e3cf-d08d-4783-af72-36132d671a18.png\"></diagram-card>\n\n\n## Observation\n\nThis case began while exploring how AI could fit into a consumer finance product inside a daily wallet environment.\n\nThe obvious reading was product growth. When AI appears in a payment or financial product context, the usual discussion quickly moves toward personalization, faster approval, smarter scoring, better recommendations, fraud detection, conversion, and smoother checkout. Those are important areas, and they are easy to understand from a product perspective.\n\nBut the more I looked at PayLater as a user pathway, the more that explanation felt incomplete.\n\nA PayLater approval can look like a clean product success. The user wants to buy something, the app offers PayLater, the user accepts, the merchant gets the conversion, and the platform records usage. From the outside, the pathway looks successful because the transaction happened.\n\nBut consumer finance does not end at approval.\n\nAfter the “yes,” the user still has to live with repayment. They still have to manage cash flow, future bills, emotional spending, repayment timing, possible regret, support issues, and trust in the wallet that helped them borrow.\n\nSo the question started to shift.\n\nAt first, the question seemed to be:\n\n> How can AI help PayLater approve users faster and increase conversion?\n> \n\nBut after looking at the financial pathway after approval, the better question became:\n\n> Can AI help users decide whether they should use PayLater at all?\n> \n\nThat was the moment the case became more interesting. Approval was still important, but it began to look less like the end of the product journey and more like the first visible signal in a much longer trust pathway.\n\nThat was when I realized I was no longer studying only a credit feature. I was studying the consequence that begins after the product says yes.\n\nA successful conversion does not automatically mean a successful financial outcome. It does not tell us whether the user can repay comfortably, whether the purchase created pressure, whether the recommendation matched the user’s real cash-flow situation, or whether the user will trust the product more after repayment.\n\nThis led to the core observation of the case:\n\n> A successful conversion is not always a successful financial outcome.\n> \n\nOr more sharply:\n\n> Risk begins after yes.\n> \n\n## Why this matters\n\nMost people frame PayLater as a credit product. The user wants to buy, the app offers PayLater, the user buys faster, the merchant gets conversion, and the platform monetizes. That pathway makes sense because it follows the visible moment of product success: approval and purchase.\n\nBut PayLater is not only a checkout option. It is a financial decision pathway. The product prompt does not simply change how the user pays. It can change when the user spends, how much they borrow, how they experience repayment, and whether they associate the wallet with help or pressure.\n\nThis matters especially for younger users. Traditional credit cards can feel distant and risky because of annual fees, hidden charges, cancellation friction, repayment pressure, and the habit of spending first and checking later. Embedded PayLater is different. If it sits inside a daily wallet app, the platform may already understand salary patterns, recurring bills, spending behavior, repayment habits, and cash-flow stress better than a traditional credit product used only occasionally.\n\nThat creates two very different pathways.\n\nIn the bad pathway, impulse purchase leads to easy PayLater, delayed pain, repayment stress, and lower trust. The product succeeds at checkout, but the user relationship weakens after the transaction.\n\nIn the better pathway, purchase intent leads to an AI context check, then to a recommendation to buy, delay, reduce the amount, or avoid PayLater. The user makes a better decision, and trust increases because the product protected the relationship instead of only pushing conversion.\n\nThe important point is not that PayLater is always harmful. The point is that the moment of approval does not tell the whole story. A product can create short-term growth while also creating long-term stress, repayment friction, customer regret, support burden, and lower trust.\n\n## Case question\n\nCan AI PayLater define success beyond conversion?\n\n## Working thesis\n\nThe strongest PayLater AI may not be the one that always increases approval. It may be the one users trust when it advises restraint.\n\nA useful system may sometimes say:\n\n> Do not buy this now.\n> \n\nOr:\n\n> Do not use PayLater for this purchase.\n> \n\nThat sounds counterintuitive if the product is measured only by conversion. But if the goal is long-term financial trust, restraint may be part of the value.\n\nThis is the difference between monetizing vulnerability and building financial trust infrastructure.\n\nA conversion-first PayLater system asks:\n\n> Can this user be approved?\n> \n\nA trust-first PayLater system asks:\n\n> Should this user use PayLater in this moment, under this financial context, for this type of purchase?\n> \n\nApproval measures whether the system can say yes. Trust measures whether that yes remains good after the transaction.\n\nThis is where AI becomes more interesting. AI should not only make the product faster, smoother, or more persuasive. It may also help the system understand context: salary timing, recurring bills, spending rhythm, repayment history, cash-flow stress, purchase type, and whether the user is likely to benefit from borrowing now.\n\nThe future of PayLater may not be bigger limits or faster approval. It may be smarter restraint.\n\nThe broader lesson is that I no longer look at financial products only by asking whether they increase adoption. I start by asking what happens to the user after the product succeeds.\n\nAnd in this case, the question became:\n\n> Who protects the user relationship after the product says yes?\n> \n\n## Pathway Lens read\n\nThe pathway is not simply **checkout moment → approval → purchase**. It may become:\n\n- checkout moment → AI context check;\n- payment option → recommendation;\n- recommendation → user financial action;\n- action → debt, budget pressure, or trust reinforcement;\n- repayment outcome → long-term relationship with wallet / credit product.\n\nThe visible moment is approval or conversion. The hidden pathway is repayment, stress, regret, support, trust, and the user’s future relationship with the platform.\n\nPathway Lens asks what approval can become. In this case, approval can become borrowing. Borrowing can become repayment pressure. Repayment pressure can become stress, support need, regret, or trust decline. A better recommendation can become restraint, better timing, or stronger long-term trust.\n\n## Drift / boundary / governance notes\n\n- **Drift:** conversion optimization may interpret user intent as purchase readiness while missing budget pressure, rent timing, recurring bills, emotional spending, or financial fragility.\n- **Boundary:** a payment suggestion can become credit behavior. A checkout option can become a financial decision pathway.\n- **Evidence:** user context, affordability signal, recommendation basis, user choice, and repayment outcome should be reconstructable.\n- **Authority:** AI should not nudge credit use without clear boundaries and user-facing explanation.\n- **Recovery:** users need repayment support, correction paths, and safe alternatives when context was misread.\n\n## Practical question\n\nCan AI credit products optimize for trust and stability, not only conversion?"
  },
  "/work/artist-fandom-page": {
  "assets": [],
  "body": "> **A fan relationship should not break across discovery, membership, commerce, ticketing, support, and community.**\n\n> **Type:** Product concept  \n> **Stage:** Concept Exploration  \n> **Evidence basis:** Role analysis, creator-commerce benchmarks, and fandom interaction patterns  \n> **Last updated:** August 2026  \n> **Boundary:** An independent concept exploration—not an official product, internal roadmap, or validated platform implementation.\n\n---\n\n## Core question\n\n> **How can fans discover artists, join official communities, receive benefits, buy products, attend events, get support, and return through one clearer relationship layer?**\n\n## Three connected surfaces\n\nThe concept begins with the way fans actually enter the relationship: through an artist, a show, an event, or a piece of content—not through platform architecture.\n\n<ol class=\"f-numbered-list\">\n<li><strong>Homepage — discovery.</strong> A clear entry point for artists, events, membership options, official merchandise, and verified platform destinations.</li>\n<li><strong>Artist Official Hub — relationship.</strong> A trusted centre for announcements, content, membership, products, events, benefits, and support around one artist.</li>\n<li><strong>Fan Dashboard — continuity.</strong> A personal source of truth for Fan ID, membership status, active entitlements, orders, tickets, support cases, followed artists, and activity history.</li>\n</ol>\n\nThe surfaces are distinct but should not create three separate identities or records. A fan should be able to move from discovery to participation and return later without reconstructing the relationship each time.\n\n## The operating system behind the interface\n\n> **The UI is the storefront. Fan ID, entitlement, support, fulfilment, and reporting are the product system.**\n\n<div class=\"f-table-wrap\"><table class=\"f-table\"><thead><tr><th>Layer</th><th>What it must make clear</th></tr></thead><tbody><tr><td><strong>Identity</strong></td><td>One verified Fan ID connecting the person to followed artists, memberships, purchases, and event access.</td></tr><tr><td><strong>Entitlement</strong></td><td>Which benefit, content, ticket, collectible, or access right is active, used, expired, transferred, or revoked.</td></tr><tr><td><strong>Commerce & events</strong></td><td>Official product and ticket states, payment, fulfilment, delivery or admission evidence, and ownership of exceptions.</td></tr><tr><td><strong>Support & recovery</strong></td><td>An order- or entitlement-linked path that preserves context, assigns the next action, and reaches a valid resolution.</td></tr><tr><td><strong>Reporting</strong></td><td>Signals that help operators understand discovery, participation, demand, service burden, and repeat behaviour without reducing fandom to reach alone.</td></tr></tbody></table></div>\n\n## Product principles\n\n<ul class=\"f-list\">\n<li><strong>Artist-first:</strong> organize the experience around the artist relationship while keeping official platform trust visible.</li>\n<li><strong>One Fan ID:</strong> prevent purchases, memberships, tickets, and support history from fragmenting across disconnected accounts.</li>\n<li><strong>Entitlement-driven access:</strong> show why a fan can access a benefit, how long it lasts, and what happens when the state changes.</li>\n<li><strong>Official and secure commerce:</strong> connect product authenticity, payment, fulfilment, and recovery to the same relationship record.</li>\n<li><strong>Support as recovery:</strong> treat support as part of the product system, not a separate inbox after the promise fails.</li>\n<li><strong>Data for operations:</strong> use behavioural and service signals to improve decisions, not merely to increase surface-level engagement.</li>\n</ul>\n\n## What the concept demonstrates\n\nThe visual concept spans homepage, Artist Official Hub, Fan Dashboard, ecosystem map, operating model, roadmap, team and risk views. Together they make a single argument: fan-facing simplicity depends on connected operating truth underneath.\n\nThe design is therefore not a proposal for another content feed. It is a relationship layer that connects identity, access, commerce, live moments, contribution, recovery, and learning while keeping each promise traceable to an owner and a state.\n\n## Evidence boundary\n\nThis work does not establish user demand, internal feasibility, rights availability, platform ownership, economics, or DatVietVAC roadmap intent. Those questions require discovery with fans and artists, internal system mapping, rights and operating review, and a bounded prototype with measurable adoption and recovery outcomes.\n\n## Related work\n\n<a href=\"/work/vieshop-fan-centred-merchandise-system\" class=\"f-inline-link\">VieSHOP: Fan-Centred Merchandise System</a> examines the commerce and merchandise foundation. <a href=\"/work/datvietvac-ownership-belonging\" class=\"f-inline-link\">Ownership & Belonging</a> explores persistent fan contribution and history. <a href=\"/work/datvietvac-who-owns-the-fan-promise\" class=\"f-inline-link\">Who Owns the Fan Promise?</a> focuses on accepted-order accountability and recovery."
},
  "/work/zalo-scam-emergency-mode": {
  "assets": [
  {
    "type": "pdf",
    "driveId": "1cTDs7B7_6ht8EnSZsf21MowamjSoXHVA",
    "fileName": "Zalo_Scam_Emergency_Mode_Case_Study.pdf",
    "label": "📄 Preview: Zalo Scam Emergency Mode — Full Case Study (PDF) ↗",
    "title": "Zalo Scam Emergency Mode — Full Case Study"
  },
  {
    "type": "image",
    "driveId": "1BlVoRgHhsxu1gHZg35FW-j10YDl1UHwi",
    "fileName": "00-cover-art.png",
    "label": "🖼️ Preview: Zalo Scam Emergency Mode cover ↗",
    "title": "Zalo Scam Emergency Mode cover"
  },
  {
    "type": "image",
    "driveId": "1HdLRGTAh75geugfFymiD4hr1AbE8_1Qq",
    "fileName": "02-trust-becomes-transfer.png",
    "label": "🖼️ Preview: How trust becomes a transfer ↗",
    "title": "How trust becomes a transfer"
  },
  {
    "type": "image",
    "driveId": "1slewOwSEPgCdDgsU7M38xDbSCJwjM3d1",
    "fileName": "04-safety-context-card.png",
    "label": "🖼️ Preview: Safety Context Card ↗",
    "title": "Safety Context Card"
  },
  {
    "type": "image",
    "driveId": "1CzkFwBsLZhM3Nk9FyPtpG6GmkyZLkRbR",
    "fileName": "06-zalo-zalopay-handoff.png",
    "label": "🖼️ Preview: Zalo–Zalopay handoff ↗",
    "title": "Zalo–Zalopay handoff"
  },
  {
    "type": "image",
    "driveId": "1IoDnlaQcFkWIIMByD5opl_-EroHbkfNN",
    "fileName": "07-recovery-case-timeline.png",
    "label": "🖼️ Preview: Recovery case timeline ↗",
    "title": "Recovery case timeline"
  },
  {
    "type": "image",
    "driveId": "1vFTfoK6O8tP2CaG3xsVzbYq1zReTDcQZ",
    "fileName": "01-intervention-surface.png",
    "title": "01-intervention-surface",
    "label": "Preview: 01-intervention-surface ↗"
  },
  {
    "type": "image",
    "driveId": "11A9idmwKNGVv_0izayRMgwikEeJhwSrU",
    "fileName": "03-service-blueprint.png",
    "title": "03-service-blueprint",
    "label": "Preview: 03-service-blueprint ↗"
  },
  {
    "type": "image",
    "driveId": "1ZbLCe6VMNE5Law_qjFleCv-0PTHeVKkC",
    "fileName": "05-evidence-map.png",
    "title": "05-evidence-map",
    "label": "Preview: 05-evidence-map ↗"
  },
  {
    "type": "image",
    "driveId": "16EhWeWvlYZKNWUskmmOkaL_2c_bynBEL",
    "fileName": "08-product-landscape.png",
    "title": "08-product-landscape",
    "label": "Preview: 08-product-landscape ↗"
  }
],
  "body": "<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1cTDs7B7_6ht8EnSZsf21MowamjSoXHVA\" data-title=\"Zalo Scam Emergency Mode — Full Case Study\">Read full case</button><a href=\"https://drive.google.com/file/d/1cTDs7B7_6ht8EnSZsf21MowamjSoXHVA/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Open full PDF in a new tab\">↗</a>\n<a href=\"https://drive.google.com/drive/folders/156EM-OlacmSuRPUmnp1WrsuI-Dd-42CV\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-btn\">View complete asset set ↗</a></div>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 Zalo Scam Emergency Mode</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1BlVoRgHhsxu1gHZg35FW-j10YDl1UHwi\" data-title=\"Zalo Scam Emergency Mode\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1BlVoRgHhsxu1gHZg35FW-j10YDl1UHwi/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1BlVoRgHhsxu1gHZg35FW-j10YDl1UHwi\" data-title=\"Zalo Scam Emergency Mode\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1BlVoRgHhsxu1gHZg35FW-j10YDl1UHwi=w1600\" alt=\"Editorial cover for Zalo Scam Emergency Mode\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Conversation → evidence → payment → recovery. Independent outside-in case · Research cut 7 September 2026.</figcaption>\n</figure>\n\n> <strong>Independent Outside-In Case · Trust & Safety · Reader Edition</strong>\n>\n> Public platform materials, national enforcement and survey data, documented incidents, comparative product patterns, and product hypotheses. This case does not describe Zalo's internal systems, establish wrongdoing, provide legal advice, or guarantee fund recovery.\n\n## Decision at a glance\n\n<strong>Mission.</strong> Help people see and act on safety evidence forming inside a Zalo conversation before social trust becomes an irreversible payment—and preserve one connected recovery case if harm occurs.\n\n<strong>Ownership.</strong> Zalo owns the safety explanation and evidence continuity. Zalopay owns payment-specific evidence, controls, and transaction execution. Support, banks, and authorities own downstream actions within their authority.\n\n<strong>Core hypothesis.</strong> Source-aware evidence plus an independent next action will outperform a generic warning without creating unacceptable harm to legitimate users.\n\n## 1. Why the intervention begins in conversation\n\nScams that lead to a transfer often begin as conversations, not transactions. An account creates familiarity or authority; messages build pressure; then a link, QR code, file, phone number, credential request, or payment instruction moves the user toward action. By the payment confirmation screen, much of the evidence explaining the risk remains behind in the chat.\n\nZalo already occupies the start of that pathway. Its public safety surfaces include suspected scam-link warnings, account reporting, account-security guidance, and education on impersonation and account takeover. Zalopay supports transfers inside Zalo chat. The opportunity is not another isolated warning—it is continuity across those moments.\n\nThe evidence establishes urgency and real pathways, not a Zalo-specific scam rate. VNG reported 81.3 million monthly active Zalo users and 2.2 billion messages per day in the first half of 2026. Vietnamese authorities reported more than 6,000 online scam-related cases detected in 2024 with losses above VND 12 trillion, while a separate large survey estimated VND 18.9 trillion in losses. These figures describe different universes and must not be combined.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 How trust becomes a transfer</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1HdLRGTAh75geugfFymiD4hr1AbE8_1Qq\" data-title=\"How trust becomes a transfer\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1HdLRGTAh75geugfFymiD4hr1AbE8_1Qq/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1HdLRGTAh75geugfFymiD4hr1AbE8_1Qq\" data-title=\"How trust becomes a transfer\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1HdLRGTAh75geugfFymiD4hr1AbE8_1Qq=w1600\" alt=\"Five-stage pathway showing how social trust can become a payment transfer\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Trust accumulates across chat, account, unsafe objects, payment, and support; the evidence is distributed before the consequence appears.</figcaption>\n</figure>\n\n## 2. Product thesis\n\nZalo Scam Emergency Mode should be a <strong>conversation-safety and evidence-continuity layer</strong>, not a payment-only warning.\n\nWhen meaningful evidence appears, Zalo should show a compact, source-aware explanation without turning uncertainty into an accusation. If payment starts in Zalopay, the minimum relevant context should remain visible while Zalopay adds payment-specific evidence and applies its own controls. If harm has already occurred, the same pathway should preserve the original records, report, current owner, and next protective action.\n\nThe value is not a more dramatic risk score. It is a more complete decision and recovery pathway.\n\n## 3. The product experience\n\n<ol class=\"f-numbered-list\">\n<li><strong>Open chat — Safety Context Card.</strong> Explain why the conversation may require verification and offer four bounded actions: view evidence, verify safely, block or report, or continue with safety context when payment is relevant.</li>\n<li><strong>View evidence — Evidence Map.</strong> Show what happened, where the signal came from, its status and time, what remains unknown, and the action it supports. Do not collapse unlike evidence into one unexplained score.</li>\n<li><strong>Verify safely.</strong> Suggest an independent action appropriate to the scenario: call through a previously verified number, compare a known payment destination, open an official channel independently, stop sharing credentials, or report the account or object.</li>\n<li><strong>Start payment — Zalo-to-Zalopay handoff.</strong> Carry only the minimum decision-relevant context. Zalopay adds recipient, destination, transaction-history, identity-consistency, and available-control states under its own authority.</li>\n<li><strong>After action — Emergency Mode.</strong> Preserve originals first, connect the chat and payment evidence, identify the accepted owner, and make the next protective action visible without promising recovery.</li>\n</ol>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 Safety Context Card</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1slewOwSEPgCdDgsU7M38xDbSCJwjM3d1\" data-title=\"Safety Context Card\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1slewOwSEPgCdDgsU7M38xDbSCJwjM3d1/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1slewOwSEPgCdDgsU7M38xDbSCJwjM3d1\" data-title=\"Safety Context Card\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1slewOwSEPgCdDgsU7M38xDbSCJwjM3d1=w1600\" alt=\"Mobile concept showing a Safety Context Card in a chat\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">A compact intervention inside the chat: source-aware evidence, explicit uncertainty, and actions that interrupt the manipulated decision.</figcaption>\n</figure>\n\n### Evidence language is part of the product\n\n<div class=\"f-table-wrap\"><table class=\"f-table\"><thead><tr><th>Status</th><th>User-facing meaning</th></tr></thead><tbody><tr><td><strong>Observed by platform</strong></td><td>The event or object exists; intent may still be unknown.</td></tr><tr><td><strong>Reported</strong></td><td>A concern exists but has not been confirmed.</td></tr><tr><td><strong>Pattern detected</strong></td><td>A model or rule found a relevant pattern; review context rather than treating it as fact.</td></tr><tr><td><strong>Confirmed unsafe</strong></td><td>An authorized process established the unsafe status of a specific object or event.</td></tr><tr><td><strong>Matched / mismatch / unable to verify</strong></td><td>A bounded comparison was made; the product should explain the result without exposing unnecessary identity data.</td></tr><tr><td><strong>Unknown</strong></td><td>The platform cannot establish the fact; independent verification may be required.</td></tr></tbody></table></div>\n\nEvery displayed item needs a source, timestamp or validity period, status, relevance to the current decision, correction or expiry rule, and a proportionate next action.\n\n## 4. Ownership must survive the handoff\n\nThe experience crosses products, but ownership cannot disappear between them.\n\n<div class=\"f-table-wrap\"><table class=\"f-table\"><thead><tr><th>Stage</th><th>Decision owner</th><th>Required output</th></tr></thead><tbody><tr><td><strong>Conversation evidence</strong></td><td>Zalo Safety Product / Trust & Safety</td><td>An explainable evidence state and user action.</td></tr><tr><td><strong>Payment decision</strong></td><td>Zalopay risk and payment operations</td><td>Payment-specific evidence and governed control.</td></tr><tr><td><strong>Cross-product incident</strong></td><td>Zalo Scam Mode journey owner</td><td>One visible case status and next action.</td></tr><tr><td><strong>External action</strong></td><td>Bank or authority</td><td>A verified contact route and reference where available; no promised outcome.</td></tr><tr><td><strong>Correction or appeal</strong></td><td>Owner of the disputed status</td><td>A review result propagated to dependent warnings and case states.</td></tr></tbody></table></div>\n\n> <strong>No handoff is complete until the next owner has the evidence needed to act, accepts responsibility, and exposes a status the user can understand.</strong>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 Context survives the payment handoff</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1CzkFwBsLZhM3Nk9FyPtpG6GmkyZLkRbR\" data-title=\"Context survives the payment handoff\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1CzkFwBsLZhM3Nk9FyPtpG6GmkyZLkRbR/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1CzkFwBsLZhM3Nk9FyPtpG6GmkyZLkRbR\" data-title=\"Context survives the payment handoff\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1CzkFwBsLZhM3Nk9FyPtpG6GmkyZLkRbR=w1600\" alt=\"Three-panel handoff from Zalo conversation to Zalopay confirmation and connected case\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Zalo owns the safety explanation; Zalopay owns payment control; the user should not have to reconstruct the story.</figcaption>\n</figure>\n\n## 5. AI can connect evidence; it should not become the evidence\n\nAI can detect patterns developing over time, connect relevant account, conversation, object, and payment references, translate mixed signals into concise explanations, recommend the next safe action, and structure an incident summary while preserving the original records.\n\nIt should not declare a person fraudulent from a model score, convert report volume into fact, expose protected security or reporter data, generate a permanent reputation label, replace payment policy or human adjudication, rewrite originals, or promise recovery.\n\nConversation-level protection also does not require an all-or-nothing privacy choice. Candidate approaches include user-invoked analysis, bounded rules, high-risk-object analysis, or on-device processing for selected patterns. The lawful purpose, necessity, retention, user expectation, explainability, and operating accountability still require internal review.\n\n## 6. Recovery is a case, not a checklist alone\n\nAfter suspected harm, the first principle is to preserve the original conversation, unsafe object, payment receipt, user report, and relevant account or security events. A generated summary can help navigation, but it must not replace the original evidence.\n\nThe user should see what has been preserved, what remains missing, who owns the next action, the verified route to the relevant provider, and what the platform cannot control. Zalo can preserve continuity even when a bank or authority owns the downstream decision.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 One case, preserved evidence, named next action</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1IoDnlaQcFkWIIMByD5opl_-EroHbkfNN\" data-title=\"One case, preserved evidence, named next action\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1IoDnlaQcFkWIIMByD5opl_-EroHbkfNN/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1IoDnlaQcFkWIIMByD5opl_-EroHbkfNN\" data-title=\"One case, preserved evidence, named next action\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1IoDnlaQcFkWIIMByD5opl_-EroHbkfNN=w1600\" alt=\"Recovery case timeline with preserved evidence, owner, next action, and correction history\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Evidence continuity supports action and correction; it does not guarantee fund recovery.</figcaption>\n</figure>\n\n## 7. Recommended first version\n\nThe first version should test one coherent and bounded pathway:\n\n<ol class=\"f-numbered-list\">\n<li>A conversation contains a confirmed unsafe object or a user invokes <strong>Check this chat</strong>.</li>\n<li>Zalo shows the Safety Context Card and a five-item Evidence Map.</li>\n<li>The product recommends one independent verification action.</li>\n<li>If payment starts in Zalopay, the unresolved context remains visible.</li>\n<li>If the user reports harm, one case preserves the original chat and payment evidence.</li>\n<li>One owner accepts the next action and exposes a visible status.</li>\n</ol>\n\nThe north-star outcome is <strong>correct protective action before irreversible harm</strong>. Supporting measures include evidence comprehension, correct next-action rate, harmful continuation, independent verification, time to protective action, evidence completeness, accepted handoffs, repeat-explanation rate, time to a named owner, and legitimate-interruption or false-warning guardrails.\n\nThe concept should be narrowed, redesigned, or stopped if the Evidence Map does not outperform a concise generic warning; users repeatedly misread detections as confirmed fraud; privacy or data-sharing cannot be justified; legitimate interruption outweighs safety value; the Zalo–Zalopay handoff cannot preserve useful context; correction and appeal states cannot be maintained; or users still have to reconstruct the case manually.\n\n## Evidence boundary\n\nPublic evidence establishes scale, urgency, and documented pathways. It does not establish which internal signals Zalo or Zalopay retain, whether those signals can be combined lawfully, model precision, a Zalo-specific scam denominator, technical feasibility, or the final ownership model. Every proposed signal remains a candidate evidence source until validated internally.\n\n## Related work\n\n<a href=\"/work/zalopay-smes-when-paid-not-done\" class=\"f-inline-link\">Zalopay for SMEs: When “Paid” Does Not Mean “Done”</a> examines transaction state and operational closure. <a href=\"/work/explainable-trust\" class=\"f-inline-link\">Explainable Trust</a> explores source-linked case reconstruction and correction.\n\n## Additional source figures\n\n\n\n<details class=\"f-details\"><summary>Explore intervention, service, handoff and product context</summary><div class=\"f-details-content\">\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Intervention pathway</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1vFTfoK6O8tP2CaG3xsVzbYq1zReTDcQZ\" data-title=\"Intervention pathway\">Preview</button><a href=\"https://drive.google.com/file/d/1vFTfoK6O8tP2CaG3xsVzbYq1zReTDcQZ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1vFTfoK6O8tP2CaG3xsVzbYq1zReTDcQZ\" data-title=\"Intervention pathway\"><img src=\"https://lh3.googleusercontent.com/d/1vFTfoK6O8tP2CaG3xsVzbYq1zReTDcQZ=w1600\" alt=\"Intervention pathway\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Independent outside-in design; proposed interventions and handoffs require platform validation.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Service blueprint</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"11A9idmwKNGVv_0izayRMgwikEeJhwSrU\" data-title=\"Service blueprint\">Preview</button><a href=\"https://drive.google.com/file/d/11A9idmwKNGVv_0izayRMgwikEeJhwSrU/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"11A9idmwKNGVv_0izayRMgwikEeJhwSrU\" data-title=\"Service blueprint\"><img src=\"https://lh3.googleusercontent.com/d/11A9idmwKNGVv_0izayRMgwikEeJhwSrU=w1600\" alt=\"Service blueprint\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Independent outside-in design; proposed interventions and handoffs require platform validation.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Evidence map</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1ZbLCe6VMNE5Law_qjFleCv-0PTHeVKkC\" data-title=\"Evidence map\">Preview</button><a href=\"https://drive.google.com/file/d/1ZbLCe6VMNE5Law_qjFleCv-0PTHeVKkC/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1ZbLCe6VMNE5Law_qjFleCv-0PTHeVKkC\" data-title=\"Evidence map\"><img src=\"https://lh3.googleusercontent.com/d/1ZbLCe6VMNE5Law_qjFleCv-0PTHeVKkC=w1600\" alt=\"Evidence map\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Independent outside-in design; proposed interventions and handoffs require platform validation.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Product landscape</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"16EhWeWvlYZKNWUskmmOkaL_2c_bynBEL\" data-title=\"Product landscape\">Preview</button><a href=\"https://drive.google.com/file/d/16EhWeWvlYZKNWUskmmOkaL_2c_bynBEL/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"16EhWeWvlYZKNWUskmmOkaL_2c_bynBEL\" data-title=\"Product landscape\"><img src=\"https://lh3.googleusercontent.com/d/16EhWeWvlYZKNWUskmmOkaL_2c_bynBEL=w1600\" alt=\"Product landscape\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Independent outside-in design; proposed interventions and handoffs require platform validation.</figcaption>\n</figure>\n\n</div></details>\n\n"
},
  "/work/pathway-lens-operational-cycles": {
    "assets": [
  {
    "type": "image",
    "driveId": "1LJsL__S_NpHVmqdx1eR61gNxGgiDZOqd",
    "fileName": "1.png",
    "title": "1",
    "label": "Preview: 1 ↗"
  },
  {
    "type": "image",
    "driveId": "1phVkPQAYnmYdzx2F7wVsk2rVmulMgJMM",
    "fileName": "2.png",
    "title": "2",
    "label": "Preview: 2 ↗"
  },
  {
    "type": "image",
    "driveId": "13mgDT0jd1zBVo8-GO7Z7YhpHLtNJWvtn",
    "fileName": "3.png",
    "title": "3",
    "label": "Preview: 3 ↗"
  },
  {
    "type": "image",
    "driveId": "1dLnJPBQSDI_GrEUFBWvbBmoVDsG0pW4R",
    "fileName": "4.png",
    "title": "4",
    "label": "Preview: 4 ↗"
  },
  {
    "type": "image",
    "driveId": "1nh83l-BXcuh5Wk70Hgjl_j6kgQmgAmY4",
    "fileName": "5.png",
    "title": "5",
    "label": "Preview: 5 ↗"
  },
  {
    "type": "image",
    "driveId": "1QGebxmbVKt5tWboAWhFkCpYePVoFgeJc",
    "fileName": "6.png",
    "title": "6",
    "label": "Preview: 6 ↗"
  },
  {
    "type": "image",
    "driveId": "17A5NVn3rD025stT3p9Q0HrNsXawvZ27e",
    "fileName": "7.png",
    "title": "7",
    "label": "Preview: 7 ↗"
  },
  {
    "type": "image",
    "driveId": "1orW4lex6EYq9MkdSdV-oyR8oJmokO1v1",
    "fileName": "8.png",
    "title": "8",
    "label": "Preview: 8 ↗"
  },
  {
    "type": "image",
    "driveId": "16Sl5wpRx0nD3TKdUKN4I23xLSQsVaDMD",
    "fileName": "9.png",
    "title": "9",
    "label": "Preview: 9 ↗"
  },
  {
    "type": "image",
    "driveId": "1reX7exJOOhnj0dBSGnN87arehy2oJrW2",
    "fileName": "10.png",
    "title": "10",
    "label": "Preview: 10 ↗"
  },
  {
    "type": "image",
    "driveId": "1C5uYAQYmmZp5kI59NgDVesJQsZLRV5zT",
    "fileName": "11.png",
    "title": "11",
    "label": "Preview: 11 ↗"
  },
  {
    "type": "image",
    "driveId": "12-2D9Fn5pouAaHTaBWs9_QCaLycHDBAj",
    "fileName": "12.png",
    "title": "12",
    "label": "Preview: 12 ↗"
  },
  {
    "type": "image",
    "driveId": "1YmVP6XnkT7jFD42mqjQzpcTV6Q2S2pni",
    "fileName": "13.png",
    "title": "13",
    "label": "Preview: 13 ↗"
  },
  {
    "type": "image",
    "driveId": "1fwdGHrauNwDSg7XWRsRqhW-9siIUBHct",
    "fileName": "14.png",
    "title": "14",
    "label": "Preview: 14 ↗"
  },
  {
    "type": "image",
    "driveId": "1sdg_AWBNvuGzHpfpd05qQ3uPcnR2Fko0",
    "fileName": "15.png",
    "title": "15",
    "label": "Preview: 15 ↗"
  },
  {
    "type": "image",
    "driveId": "1KilyV30xapdLHcHIfhvzaIAZoCGWaPCT",
    "fileName": "16.png",
    "title": "16",
    "label": "Preview: 16 ↗"
  },
  {
    "type": "image",
    "driveId": "18WSYVsyQ-uwciCm-G_-2pwBBrIo8Li9M",
    "fileName": "17.png",
    "title": "17",
    "label": "Preview: 17 ↗"
  },
  {
    "type": "image",
    "driveId": "1oNgPxJq3xs9F58o48wZ4Sclj26X-jSPP",
    "fileName": "18.png",
    "title": "18",
    "label": "Preview: 18 ↗"
  }
],
    "body": "> **An AI output is rarely the consequence. The consequence appears after someone trusts it, stores it, reuses it, or lets it change a real workflow.**\n> \n\nResearch lens · Working model · Used in case analysis, stress tests, and operational review\n\nPathway Lens is the working lens I use to trace that movement from output to reliance, record, action, scale, memory, or real-world consequence. It is not a universal AI-risk framework or a substitute for legal, technical, regulatory, or safety review.\n\n## Core question\n\n> **What is this AI output, signal, recommendation, or action allowed to become?**\n> \n\nThe same output may be low-risk as a private draft and high-impact when it becomes an external message, system-of-record entry, decision input, API call, production change, public claim, transaction, or future system memory.\n\n## How I use the lens\n\n1. **Name the output** — What was produced, inferred, recommended, or triggered?\n2. **Trace the pathway** — Who or what may trust, reuse, store, scale, or act on it?\n3. **Mark the boundary** — Where does it become durable, actionable, authority-bearing, amplified, or difficult to reverse?\n4. **Test the consequence** — What evidence, ownership, containment, correction, and recovery are available?\n\n## Supporting tools\n\n<aside>\n↳\n\n**01 / Review the pathway**\n\n**Pathway Governance Starter Kit**\n\nTen questions before an AI pathway enters real workflows, records, tools, or transactions.\n\n</aside>\n\n<aside>\n↳\n\n**02 / Place the controls**\n\n**Practical Boundary Controls**\n\nIdentify where the pathway must remain visible, slowable, stoppable, and recoverable.\n\n</aside>\n\n<aside>\n↳\n\n**03 / Learn and standardize**\n\n**From Pathways to Operational Standards**\n\nTurn recurring incidents and stress-test findings into reusable categories and review standards.\n\n</aside>\n\n<aside>\n↳\n\n**Related inquiry**\n\n[AI Apprenticeship — Before AI Becomes an Actor](/work/ai-apprenticeship)\n\nThe current working hypothesis asks what AI should learn about mission, boundaries, evidence, exceptions, and recovery before it receives operational authority. It informs the lens but is not part of the 01–03 operating sequence.\n\nEarlier concept lineage: **System-Born AI — Inquiry Before Action**, preserved as the precursor that led to the apprenticeship formulation.\n\n</aside>\n\n- Working paper and project history\n    \n    [Download Pathway Lens working paper](https://drive.google.com/file/d/1kwo1o-f0jO3ny9SVeXWw0gKVYatZWO_w/view?usp=sharing)\n    \n    This page was previously titled **Human–AI–System Evolution Framework v0.3**. That earlier cycle remains a foundation for how reality, interpretation, coordination, execution, amplification, and new reality interact.\n    \n    **Pathway Lens** narrows the working object: how an output, signal, recommendation, or agentic action becomes consequence.\n    \n\n## Figure suite\n\nThe figures below form the working visual vocabulary of the lens (preview the complete figure set below or open the working paper linked above). They support investigation and discussion; they are not a compulsory sequence or a claim of universal coverage.\n\n1. **Figure 1.** The Real AI Risk\n2. **Figure 2.** Human-AI-System Evolution Cycle\n3. **Figure 3.** Core Drift Types\n4. **Figure 4.** Reflexive and Dynamic Mechanisms\n5. **Figure 5.** Meaning, Translation, and Operational Legibility\n6. **Figure 6.** Output Pathway Ladder\n7. **Figure 7.** System Impact Diagnostic\n8. **Figure 8.** Proportionate Pathway Governance\n9. **Figure 9.** Pathway Evidence Chain\n10. **Figure 10.** Material Change and Trigger-Based Validation\n11. **Figure 11.** Authority Boundary and AAA\n12. **Figure 12.** Policy-Based Action Modes\n13. **Figure 13.** Recovery Architecture\n14. **Figure 14.** Governance Drift Monitoring\n15. **Figure 15.** Layered Responsibility Model\n16. **Figure 16.** AI-Side Support Conditions\n17. **Figure 17.** AI Starter Kit\n18. **Figure 18.** Case Pattern and Source-to-Practice Map\n\n\n\n<details class=\"f-details\"><summary>Preview all 18 Pathway Lens figures</summary><div class=\"f-details-content\">\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 1 — The Real AI Risk</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1LJsL__S_NpHVmqdx1eR61gNxGgiDZOqd\" data-title=\"Figure 1 — The Real AI Risk\">Preview</button><a href=\"https://drive.google.com/file/d/1LJsL__S_NpHVmqdx1eR61gNxGgiDZOqd/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1LJsL__S_NpHVmqdx1eR61gNxGgiDZOqd\" data-title=\"Figure 1 — The Real AI Risk\"><img src=\"https://lh3.googleusercontent.com/d/1LJsL__S_NpHVmqdx1eR61gNxGgiDZOqd=w1600\" alt=\"Figure 1 — The Real AI Risk\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 2 — Human-AI-System Evolution Cycle</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1phVkPQAYnmYdzx2F7wVsk2rVmulMgJMM\" data-title=\"Figure 2 — Human-AI-System Evolution Cycle\">Preview</button><a href=\"https://drive.google.com/file/d/1phVkPQAYnmYdzx2F7wVsk2rVmulMgJMM/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1phVkPQAYnmYdzx2F7wVsk2rVmulMgJMM\" data-title=\"Figure 2 — Human-AI-System Evolution Cycle\"><img src=\"https://lh3.googleusercontent.com/d/1phVkPQAYnmYdzx2F7wVsk2rVmulMgJMM=w1600\" alt=\"Figure 2 — Human-AI-System Evolution Cycle\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 3 — Core Drift Types</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"13mgDT0jd1zBVo8-GO7Z7YhpHLtNJWvtn\" data-title=\"Figure 3 — Core Drift Types\">Preview</button><a href=\"https://drive.google.com/file/d/13mgDT0jd1zBVo8-GO7Z7YhpHLtNJWvtn/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"13mgDT0jd1zBVo8-GO7Z7YhpHLtNJWvtn\" data-title=\"Figure 3 — Core Drift Types\"><img src=\"https://lh3.googleusercontent.com/d/13mgDT0jd1zBVo8-GO7Z7YhpHLtNJWvtn=w1600\" alt=\"Figure 3 — Core Drift Types\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 4 — Reflexive and Dynamic Mechanisms</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1dLnJPBQSDI_GrEUFBWvbBmoVDsG0pW4R\" data-title=\"Figure 4 — Reflexive and Dynamic Mechanisms\">Preview</button><a href=\"https://drive.google.com/file/d/1dLnJPBQSDI_GrEUFBWvbBmoVDsG0pW4R/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1dLnJPBQSDI_GrEUFBWvbBmoVDsG0pW4R\" data-title=\"Figure 4 — Reflexive and Dynamic Mechanisms\"><img src=\"https://lh3.googleusercontent.com/d/1dLnJPBQSDI_GrEUFBWvbBmoVDsG0pW4R=w1600\" alt=\"Figure 4 — Reflexive and Dynamic Mechanisms\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 5 — Meaning, Translation, and Operational Legibility</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1nh83l-BXcuh5Wk70Hgjl_j6kgQmgAmY4\" data-title=\"Figure 5 — Meaning, Translation, and Operational Legibility\">Preview</button><a href=\"https://drive.google.com/file/d/1nh83l-BXcuh5Wk70Hgjl_j6kgQmgAmY4/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1nh83l-BXcuh5Wk70Hgjl_j6kgQmgAmY4\" data-title=\"Figure 5 — Meaning, Translation, and Operational Legibility\"><img src=\"https://lh3.googleusercontent.com/d/1nh83l-BXcuh5Wk70Hgjl_j6kgQmgAmY4=w1600\" alt=\"Figure 5 — Meaning, Translation, and Operational Legibility\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 6 — Output Pathway Ladder</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1QGebxmbVKt5tWboAWhFkCpYePVoFgeJc\" data-title=\"Figure 6 — Output Pathway Ladder\">Preview</button><a href=\"https://drive.google.com/file/d/1QGebxmbVKt5tWboAWhFkCpYePVoFgeJc/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1QGebxmbVKt5tWboAWhFkCpYePVoFgeJc\" data-title=\"Figure 6 — Output Pathway Ladder\"><img src=\"https://lh3.googleusercontent.com/d/1QGebxmbVKt5tWboAWhFkCpYePVoFgeJc=w1600\" alt=\"Figure 6 — Output Pathway Ladder\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 7 — System Impact Diagnostic</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"17A5NVn3rD025stT3p9Q0HrNsXawvZ27e\" data-title=\"Figure 7 — System Impact Diagnostic\">Preview</button><a href=\"https://drive.google.com/file/d/17A5NVn3rD025stT3p9Q0HrNsXawvZ27e/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"17A5NVn3rD025stT3p9Q0HrNsXawvZ27e\" data-title=\"Figure 7 — System Impact Diagnostic\"><img src=\"https://lh3.googleusercontent.com/d/17A5NVn3rD025stT3p9Q0HrNsXawvZ27e=w1600\" alt=\"Figure 7 — System Impact Diagnostic\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 8 — Proportionate Pathway Governance</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1orW4lex6EYq9MkdSdV-oyR8oJmokO1v1\" data-title=\"Figure 8 — Proportionate Pathway Governance\">Preview</button><a href=\"https://drive.google.com/file/d/1orW4lex6EYq9MkdSdV-oyR8oJmokO1v1/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1orW4lex6EYq9MkdSdV-oyR8oJmokO1v1\" data-title=\"Figure 8 — Proportionate Pathway Governance\"><img src=\"https://lh3.googleusercontent.com/d/1orW4lex6EYq9MkdSdV-oyR8oJmokO1v1=w1600\" alt=\"Figure 8 — Proportionate Pathway Governance\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 9 — Pathway Evidence Chain</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"16Sl5wpRx0nD3TKdUKN4I23xLSQsVaDMD\" data-title=\"Figure 9 — Pathway Evidence Chain\">Preview</button><a href=\"https://drive.google.com/file/d/16Sl5wpRx0nD3TKdUKN4I23xLSQsVaDMD/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"16Sl5wpRx0nD3TKdUKN4I23xLSQsVaDMD\" data-title=\"Figure 9 — Pathway Evidence Chain\"><img src=\"https://lh3.googleusercontent.com/d/16Sl5wpRx0nD3TKdUKN4I23xLSQsVaDMD=w1600\" alt=\"Figure 9 — Pathway Evidence Chain\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 10 — Material Change and Trigger-Based Validation</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1reX7exJOOhnj0dBSGnN87arehy2oJrW2\" data-title=\"Figure 10 — Material Change and Trigger-Based Validation\">Preview</button><a href=\"https://drive.google.com/file/d/1reX7exJOOhnj0dBSGnN87arehy2oJrW2/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1reX7exJOOhnj0dBSGnN87arehy2oJrW2\" data-title=\"Figure 10 — Material Change and Trigger-Based Validation\"><img src=\"https://lh3.googleusercontent.com/d/1reX7exJOOhnj0dBSGnN87arehy2oJrW2=w1600\" alt=\"Figure 10 — Material Change and Trigger-Based Validation\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 11 — Authority Boundary and AAA</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1C5uYAQYmmZp5kI59NgDVesJQsZLRV5zT\" data-title=\"Figure 11 — Authority Boundary and AAA\">Preview</button><a href=\"https://drive.google.com/file/d/1C5uYAQYmmZp5kI59NgDVesJQsZLRV5zT/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1C5uYAQYmmZp5kI59NgDVesJQsZLRV5zT\" data-title=\"Figure 11 — Authority Boundary and AAA\"><img src=\"https://lh3.googleusercontent.com/d/1C5uYAQYmmZp5kI59NgDVesJQsZLRV5zT=w1600\" alt=\"Figure 11 — Authority Boundary and AAA\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 12 — Policy-Based Action Modes</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"12-2D9Fn5pouAaHTaBWs9_QCaLycHDBAj\" data-title=\"Figure 12 — Policy-Based Action Modes\">Preview</button><a href=\"https://drive.google.com/file/d/12-2D9Fn5pouAaHTaBWs9_QCaLycHDBAj/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"12-2D9Fn5pouAaHTaBWs9_QCaLycHDBAj\" data-title=\"Figure 12 — Policy-Based Action Modes\"><img src=\"https://lh3.googleusercontent.com/d/12-2D9Fn5pouAaHTaBWs9_QCaLycHDBAj=w1600\" alt=\"Figure 12 — Policy-Based Action Modes\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 13 — Recovery Architecture</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1YmVP6XnkT7jFD42mqjQzpcTV6Q2S2pni\" data-title=\"Figure 13 — Recovery Architecture\">Preview</button><a href=\"https://drive.google.com/file/d/1YmVP6XnkT7jFD42mqjQzpcTV6Q2S2pni/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1YmVP6XnkT7jFD42mqjQzpcTV6Q2S2pni\" data-title=\"Figure 13 — Recovery Architecture\"><img src=\"https://lh3.googleusercontent.com/d/1YmVP6XnkT7jFD42mqjQzpcTV6Q2S2pni=w1600\" alt=\"Figure 13 — Recovery Architecture\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 14 — Governance Drift Monitoring</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1fwdGHrauNwDSg7XWRsRqhW-9siIUBHct\" data-title=\"Figure 14 — Governance Drift Monitoring\">Preview</button><a href=\"https://drive.google.com/file/d/1fwdGHrauNwDSg7XWRsRqhW-9siIUBHct/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1fwdGHrauNwDSg7XWRsRqhW-9siIUBHct\" data-title=\"Figure 14 — Governance Drift Monitoring\"><img src=\"https://lh3.googleusercontent.com/d/1fwdGHrauNwDSg7XWRsRqhW-9siIUBHct=w1600\" alt=\"Figure 14 — Governance Drift Monitoring\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 15 — Layered Responsibility Model</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1sdg_AWBNvuGzHpfpd05qQ3uPcnR2Fko0\" data-title=\"Figure 15 — Layered Responsibility Model\">Preview</button><a href=\"https://drive.google.com/file/d/1sdg_AWBNvuGzHpfpd05qQ3uPcnR2Fko0/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1sdg_AWBNvuGzHpfpd05qQ3uPcnR2Fko0\" data-title=\"Figure 15 — Layered Responsibility Model\"><img src=\"https://lh3.googleusercontent.com/d/1sdg_AWBNvuGzHpfpd05qQ3uPcnR2Fko0=w1600\" alt=\"Figure 15 — Layered Responsibility Model\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 16 — AI-Side Support Conditions</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1KilyV30xapdLHcHIfhvzaIAZoCGWaPCT\" data-title=\"Figure 16 — AI-Side Support Conditions\">Preview</button><a href=\"https://drive.google.com/file/d/1KilyV30xapdLHcHIfhvzaIAZoCGWaPCT/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1KilyV30xapdLHcHIfhvzaIAZoCGWaPCT\" data-title=\"Figure 16 — AI-Side Support Conditions\"><img src=\"https://lh3.googleusercontent.com/d/1KilyV30xapdLHcHIfhvzaIAZoCGWaPCT=w1600\" alt=\"Figure 16 — AI-Side Support Conditions\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 17 — AI Starter Kit</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"18WSYVsyQ-uwciCm-G_-2pwBBrIo8Li9M\" data-title=\"Figure 17 — AI Starter Kit\">Preview</button><a href=\"https://drive.google.com/file/d/18WSYVsyQ-uwciCm-G_-2pwBBrIo8Li9M/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"18WSYVsyQ-uwciCm-G_-2pwBBrIo8Li9M\" data-title=\"Figure 17 — AI Starter Kit\"><img src=\"https://lh3.googleusercontent.com/d/18WSYVsyQ-uwciCm-G_-2pwBBrIo8Li9M=w1600\" alt=\"Figure 17 — AI Starter Kit\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Figure 18 — Case Pattern and Source-to-Practice Map</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1oNgPxJq3xs9F58o48wZ4Sclj26X-jSPP\" data-title=\"Figure 18 — Case Pattern and Source-to-Practice Map\">Preview</button><a href=\"https://drive.google.com/file/d/1oNgPxJq3xs9F58o48wZ4Sclj26X-jSPP/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1oNgPxJq3xs9F58o48wZ4Sclj26X-jSPP\" data-title=\"Figure 18 — Case Pattern and Source-to-Practice Map\"><img src=\"https://lh3.googleusercontent.com/d/1oNgPxJq3xs9F58o48wZ4Sclj26X-jSPP=w1600\" alt=\"Figure 18 — Case Pattern and Source-to-Practice Map\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Working research lens; a tool for investigation rather than a validated universal framework.</figcaption>\n</figure>\n\n</div></details>\n\n## 1. System Lens\n\nThe foundation cycle remains:\n\n**Reality → Interpretation → Shared Working / Meaningful Understanding → Coordination → Translation → Execution → Amplification → Outcome → New Reality**\n\nThis sequence is analytical, not literal. Real systems loop, overlap, and reinterpret. Humans, AI systems, organizations, and institutions repeatedly interpret reality, act on it, change it, and reinterpret the changed reality.\n\nThe system lens matters because AI output is rarely consequential by itself. It becomes consequential when it participates in a human, organizational, technical, legal, financial, or social pathway.\n\n## 2. Drift Lens\n\nDrift describes a gap between reality, interpretation, shared understanding, coordination, translation, execution, amplification, and the new reality produced by the system.\n\nDrift is not only model error. It may begin before a model is called, after an output is produced, or when operational reality changes faster than governance can update.\n\nCore drift types:\n\n1. **Reality / Input Boundary Drift** — the system receives an incomplete, outdated, distorted, over-narrow, over-broad, or poorly bounded reality-slice.\n2. **Interpretation Drift** — humans, AI systems, technical systems, or institutions interpret the same reality-slice differently.\n3. **Shared Understanding Drift** — actors appear to coordinate around the same reference but do not share enough meaning, context, or practical understanding to act responsibly.\n4. **Coordination Drift** — roles, responsibilities, authority, expectations, escalation paths, or handoffs diverge.\n5. **Translation Drift** — meaning changes as it is converted into prompts, fields, tickets, workflows, policies, API calls, code, dashboards, or rules.\n6. **Execution Drift** — output becomes action in a way that exceeds authority, evidence, context, or intended use.\n7. **Amplification Drift** — local output, action, claim, or interpretation is reused, copied, automated, publicized, scaled, or institutionalized beyond its original context.\n8. **Feedback / Reality Drift** — consequences change the reality that later humans, AI systems, or institutions interpret.\n\nDrift is not always harmful. It becomes risky when a system trusts it, stores it, scales it, acts on it, or cannot reverse it in time.\n\n## 3. Pathway Lens\n\nThe Pathway Lens checks what an AI output, signal, recommendation, or action is allowed to become.\n\nPathway is the route.  \n\nDrift is the distortion.  \n\nVariables explain the distortion.  \n\nGovernance responds to the distortion.\n\nExample output destinations:\n\n- Private draft or personal thinking aid\n- Internal note or low-risk summary\n- Internal recommendation or decision support\n- System-of-record entry or official documentation\n- External communication\n- Tool / API action or workflow trigger\n- Financial, legal, HR, medical, safety, or production consequence\n- Future system input, training data, retrieval source, or institutional memory\n\nThe same output can have different risk depending on the pathway it enters.\n\n## 4. Governance Lens\n\nGovernance should be proportionate to the pathway.\n\nThe governance lens asks:\n\n- What evidence exists?\n- Who or what has authority?\n- What action mode is allowed?\n- What recovery capacity exists?\n- What control capacity is needed?\n- What happens when the pathway drifts?\n\nHigh-impact pathways require stronger evidence, clearer authority, stricter action modes, stronger recovery, and more explicit control capacity.\n\n## 5. Evidence\n\nEvidence is not merely stored logs.\n\nEvidence is the ability to reconstruct the pathway: input, prompt, context, output, review, approval, tool call, record change, outcome, incident, and correction.\n\nFor multi-agent workflows, evidence should also reconstruct inter-agent causation, delegated tool calls, subagent permissions, and orchestrator ownership.\n\n## 6. Authority\n\nCapability is not authority.\n\nAn AI system or agent should not automatically inherit the full authority of the human who launched it.\n\nAuthority should be bounded through:\n\n- authentication: who or what is acting;\n- authorization: what it may do;\n- accountability: who answers when consequence occurs.\n\nAuthority boundaries matter most when output can become external communication, record change, transaction, production action, legal consequence, or future system input.\n\n## 7. Action Modes\n\nDifferent pathway conditions should trigger different action modes.\n\nPossible modes include:\n\n- observe;\n- draft;\n- recommend;\n- guide;\n- constrain;\n- require approval;\n- act under bounded conditions;\n- block or escalate.\n\nThe action mode should be chosen by pathway conditions, not by model confidence alone.\n\n## 8. Recovery\n\nA system is not governed just because a policy exists.\n\nIt is governed only if unsafe or incorrect action can be detected, stopped, contained, reconstructed, corrected, and responsibly restarted.\n\nRecovery includes:\n\n- detection;\n- containment;\n- stop / shutdown;\n- tracing the pathway;\n- correction or rollback;\n- communication with affected parties;\n- review;\n- restart approval.\n\nA kill switch is not recovery. Recovery is an architecture.\n\n## 9. Control Capacity\n\nControl Capacity is the ability of an AI-enabled pathway to detect, prevent, interrupt, contain, reconstruct, recover from, and safely restart after unsafe or unauthorized AI-enabled action.\n\nIt includes:\n\n- agent identity;\n- scoped permissions;\n- tool and data access boundaries;\n- monitoring coverage;\n- detection-to-response path;\n- evidence preservation;\n- rollback or correction capacity;\n- containment or shutdown path;\n- restart approval;\n- inter-agent causation logs.\n\nThis concept is a governance refinement, not a replacement for the pathway structure.\n\n## 10. AI-Side Support Conditions\n\nAI-side design can support pathway governance, but it does not replace human and institutional responsibility.\n\nUseful support conditions include:\n\n- scoped task design;\n- tool permission control;\n- context quality;\n- output structuring;\n- fallback / abstention;\n- monitoring hooks;\n- version / change control;\n- human review fit.\n\nThese conditions do not eliminate risk. They make the pathway more observable, constrainable, and recoverable.\n\n## 11. AI Starter Kit\n\nThe AI Starter Kit is a practical first-pass decision aid for users and teams deciding how to use AI responsibly.\n\nIt is included as an AI-assisted practical recommendation synthesis. It is consistent with common recommendations from major general-purpose AI assistants such as ChatGPT, Gemini, Claude, and DeepSeek when asked how users can avoid drifting away from their original goal while using AI.\n\nIt should not be treated as external scientific evidence unless the actual model outputs are preserved and cited separately.\n\nStarter questions:\n\n1. Do you need AI, or would a simpler rule, workflow, or software automation be enough?\n2. What happens if the output is wrong?\n3. Where does the output go?\n4. What controls are needed before it crosses a boundary?\n\n## 12. Pathway-Specific Case Patterns\n\n> **Scope boundary:** Patterns in this section are specific to pathways in which an AI output, signal, recommendation, or action becomes operational consequence. They are not entries in the general Cross-Case Pattern Library. Broader transfer requires separate contextual comparison and explicit promotion.\n> \n\nCase patterns should test whether the lens works in practical settings.\n\nUse this format:\n\n1. Pathway: where does the output go?\n2. Drift: where can distortion appear?\n3. Boundary: where does operational status change?\n4. Evidence: what must be reconstructable?\n5. Authority: who or what is allowed to act?\n6. Recovery: how can the system detect, contain, correct, or compensate?\n7. Practical solution: what should be designed or changed?\n\nExample cases:\n\n- customer communication;\n- system-of-record update;\n- financial transaction or scam prevention;\n- code agent or production change;\n- multi-agent workflow;\n- public narrative or authority signal.\n\n## 13. Working principles\n\n1. Do not govern every AI output equally. Govern the pathway the output is allowed to enter.\n2. Do not treat model confidence as authority.\n3. Do not treat logs as evidence unless the pathway can be reconstructed.\n4. Do not treat human-in-the-loop as meaningful unless the human has time, context, authority, and responsibility.\n5. Do not treat recovery as a button. Recovery requires containment, correction, communication, and restart governance.\n6. Do not let new concepts replace the pathway lens. Reality-slice, meaningful shared understanding, and anchor are diagnostic concepts, not the main pathway spine.\n\n## Status\n\nThis page is the updated Notion overview for **Pathway Lens**. It keeps the original Google Drive link while reframing the project away from a versioned framework and toward the current official working lens.\n\nFurther updates should be added as revision notes, source notes, case notes, or appendix updates, not as a replacement structure.\n\n- Underlying pages\n    \n    System-Born AI — Inquiry Before Action · Archived Precursor\n    \n    Pathway Governance Starter Kit\n    \n    Practical Boundary Controls Note\n    \n    From Pathways to Operational Standards"
  }
};


// The 2026 reader edition keeps the original trust-chain case as Part I and
// extends it with the current fan-journey continuity operating model in Part II.
caseDocuments["/work/creator-platform-operating-model"] = {
  "assets": [
  {
    "type": "pdf",
    "driveId": "11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh",
    "fileName": "MFan_Platform_Fragmentation__Trust_Chain_Integration.pdf",
    "label": "📄 Preview: MFan Platform Fragmentation & Trust-Chain Integration (Part I) ↗",
    "title": "MFan Platform Fragmentation & Trust-Chain Integration — Part I"
  },
  {
    "type": "pdf",
    "driveId": "194CYqs2-PO7xn4lq30mY9gdjF4HRtnYw",
    "fileName": "MFan_When_An_Integrated_Platform_Still_Needs_An_Operating_Model.pdf",
    "label": "📄 Preview: MFan — When an Integrated Platform Still Needs an Operating Model (Part II) ↗",
    "title": "MFan — When an Integrated Platform Still Needs an Operating Model — Part II"
  },
  {
    "type": "image",
    "driveId": "1EnjbtLs9wre33J2RfyuXk8WriPF_91XN",
    "fileName": "01-what-changed.png",
    "label": "🖼️ Preview: The question moved ↗",
    "title": "The question moved"
  },
  {
    "type": "image",
    "driveId": "1bE7nYgYREguyY9WDYzDtFyOU9N39jYqP",
    "fileName": "02-current-ecosystem-journey.png",
    "label": "🖼️ Preview: Current ecosystem journey ↗",
    "title": "One public journey across the current ecosystem"
  },
  {
    "type": "image",
    "driveId": "1Mll4lSmkucKLbsSpAT3UCTxY-c3XCZ9n",
    "fileName": "03-one-membership-five-entitlements.png",
    "label": "🖼️ Preview: One membership, five entitlements ↗",
    "title": "One membership, five entitlements"
  },
  {
    "type": "image",
    "driveId": "1ZgkxsZBqQPyG7o5I25GKuxHCC-8e9JB7",
    "fileName": "05-accepted-handoff.png",
    "label": "🖼️ Preview: Accepted handoff ↗",
    "title": "Accepted handoff"
  },
  {
    "type": "image",
    "driveId": "1gDJw0JQQCAAe5melZCZPKKA_Whnz8dha",
    "fileName": "06-priority-benefit-exception.png",
    "label": "🖼️ Preview: Priority-benefit exception ↗",
    "title": "Membership active, priority benefit not recognized"
  },
  {
    "type": "image",
    "driveId": "1GeWCEA_vvy7VuF0i-nNMifJKLqp4rtCR",
    "fileName": "07-bounded-pilot-measurement.png",
    "label": "🖼️ Preview: Bounded pilot and expansion gate ↗",
    "title": "Bounded pilot and expansion gate"
  },
  {
    "type": "image",
    "driveId": "1Shoa1_jaXNN9kwZ-Q06O8NCsUT3KmmIm",
    "fileName": "04-membership-service-blueprint.png",
    "title": "04-membership-service-blueprint",
    "label": "Preview: 04-membership-service-blueprint ↗"
  },
  {
    "type": "image",
    "driveId": "1oEhOj9XrjCHzIYS8ri4xXbaWEa1m0uQd",
    "fileName": "08-evidence-boundary.png",
    "title": "08-evidence-boundary",
    "label": "Preview: 08-evidence-boundary ↗"
  },
  {
    "type": "image",
    "driveId": "1EB9h634ZhP0n5rwINlsC13iu0VdIWXjS",
    "fileName": "mfan-operating-model-cover-art.png",
    "title": "mfan-operating-model-cover-art",
    "label": "Preview: mfan-operating-model-cover-art ↗"
  }
],
  "body": "<div class=\"f-asset-bar\">\n  <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh\" data-title=\"MFan Platform Fragmentation & Trust-Chain Integration\">Read Part I</button><a href=\"https://drive.google.com/file/d/11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Open Part I in a new tab\">↗</a>\n  <button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"194CYqs2-PO7xn4lq30mY9gdjF4HRtnYw\" data-title=\"MFan — When an Integrated Platform Still Needs an Operating Model\">Read Part II</button><a href=\"https://drive.google.com/file/d/194CYqs2-PO7xn4lq30mY9gdjF4HRtnYw/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" title=\"Open Part II in a new tab\">↗</a>\n  <a href=\"https://drive.google.com/drive/folders/1o6Z9vPcfoPxk7z0P4QDJnqTZoFCnQlaV\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-btn\">View complete asset set ↗</a>\n</div>\n\n> **Independent outside-in case · Platform Operations · Reader Edition**\n>\n> Two connected research cuts. Part I establishes the trust-chain integration problem. Part II updates the diagnosis against MFan's public 2026 surfaces and asks whether one current membership promise can remain recognizable, deliverable, explainable, and recoverable across every party that touches it.\n>\n> **Evidence boundary:** Public product surfaces and policies can establish what is visible and promised. They do not establish MFan's internal architecture, operating performance, incident rate, or roadmap.\n\n# Part I — Platform Fragmentation & Trust-Chain Integration\n\n## The original operating question\n\nA fan relationship can cross an artist page, membership layer, campaign surface, merchandise store, ticketing partner, payment provider, logistics provider, and support channel. None of those surfaces has to be broken for the overall journey to fail. The problem begins when identity, entitlement, transaction state, fulfilment, support, and reporting stop carrying the same operating truth.\n\nThe original case therefore proposed a minimum shared layer rather than a full platform rebuild:\n\n<div class=\"f-table-wrap\"><table class=\"f-table\"><thead><tr><th>Capability</th><th>Operating purpose</th></tr></thead><tbody>\n<tr><td><strong>Fan identity</strong></td><td>Recognize the same fan where continuity, service, entitlement, and recovery require it.</td></tr>\n<tr><td><strong>Entitlement record</strong></td><td>Show which access, benefit, item, or status exists and whether it is active, used, disputed, corrected, or expired.</td></tr>\n<tr><td><strong>Payment and order reconciliation</strong></td><td>Keep payment, order, entitlement, fulfilment, and refund states distinguishable but reconcilable.</td></tr>\n<tr><td><strong>Ticket and event access</strong></td><td>Connect identity, eligibility, ticket state, use, and onsite recovery authority.</td></tr>\n<tr><td><strong>Support and fulfilment context</strong></td><td>Let an owner act without asking the fan to reconstruct evidence already held elsewhere.</td></tr>\n<tr><td><strong>Artist and campaign reporting</strong></td><td>Return delivery, settlement, incident, and recovery outcomes to one operating picture.</td></tr>\n</tbody></table></div>\n\nThe durable insight from Part I is not that every surface must use one tool. It is that shared state, ownership, evidence, and recovery must survive wherever separate tools and partners contribute to one promise.\n\n> **Part I takeaway:** A creator platform becomes more than a collection of campaigns when identity, entitlement, payment, fulfilment, support, and reporting remain connected through both success and failure.\n\n---\n\n# Part II — When an Integrated Platform Still Needs an Operating Model\n\n## What changed\n\nThe historical outside-in question asked how separate artist and campaign surfaces should become more coherent. The current public MFan experience presents a more integrated front door: community, shop, content, notifications, account, artist, event, membership, and merchandise surfaces are more visibly connected.\n\nThat changes the research question. It does not prove that backstage state is unified, and it is not evidence of a failed migration or current operating breakdown. The sharper question is now:\n\n> **Can one fan promise remain recognizable, deliverable, explainable, and recoverable from purchase through activation, benefit use, exception recovery, and reporting close?**\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 The question moved</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1EnjbtLs9wre33J2RfyuXk8WriPF_91XN\" data-title=\"The question moved\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1EnjbtLs9wre33J2RfyuXk8WriPF_91XN/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1EnjbtLs9wre33J2RfyuXk8WriPF_91XN\" data-title=\"The question moved\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1EnjbtLs9wre33J2RfyuXk8WriPF_91XN=w1600\" alt=\"The historical fragmentation question compared with the current operating question\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">An integrated front door changes the question; it does not by itself prove unified backstage state.</figcaption>\n</figure>\n\n## One public journey, one continuity test\n\nA fan may enter the MFan hub, join an artist membership, receive an active status, use gated content, pursue a priority ticket or merchandise benefit, complete payment or fulfilment, and contact support. The journey is coherent only if the promise, state, evidence, accepted owner, next action, and closure remain intelligible across those moments.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 One public journey across the current ecosystem</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1bE7nYgYREguyY9WDYzDtFyOU9N39jYqP\" data-title=\"One public journey across the current ecosystem\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1bE7nYgYREguyY9WDYzDtFyOU9N39jYqP/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1bE7nYgYREguyY9WDYzDtFyOU9N39jYqP\" data-title=\"One public journey across the current ecosystem\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1bE7nYgYREguyY9WDYzDtFyOU9N39jYqP=w1600\" alt=\"A reconstructed public MFan journey from hub to membership, benefits, support, and closure\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Journey reconstructed from public surfaces and policies; internal continuity remains unverified.</figcaption>\n</figure>\n\n## One purchase creates several operating obligations\n\nA membership purchase is not a single completed state. It can create a digital membership card, gated-content access, priority ticket access, limited merchandise or pre-order eligibility, and an event or interaction opportunity. Each benefit has its own rules, validity window, capacity, fulfilment path, and recovery boundary.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 One membership, five entitlements</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1Mll4lSmkucKLbsSpAT3UCTxY-c3XCZ9n\" data-title=\"One membership, five entitlements\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1Mll4lSmkucKLbsSpAT3UCTxY-c3XCZ9n/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1Mll4lSmkucKLbsSpAT3UCTxY-c3XCZ9n\" data-title=\"One membership, five entitlements\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1Mll4lSmkucKLbsSpAT3UCTxY-c3XCZ9n=w1600\" alt=\"Five operating obligations created by one public membership\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Priority is an opportunity under campaign rules and capacity—not a guarantee of inventory, a seat, or entry.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Membership service blueprint</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1Shoa1_jaXNN9kwZ-Q06O8NCsUT3KmmIm\" data-title=\"Membership service blueprint\">Preview</button><a href=\"https://drive.google.com/file/d/1Shoa1_jaXNN9kwZ-Q06O8NCsUT3KmmIm/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1Shoa1_jaXNN9kwZ-Q06O8NCsUT3KmmIm\" data-title=\"Membership service blueprint\"><img src=\"https://lh3.googleusercontent.com/d/1Shoa1_jaXNN9kwZ-Q06O8NCsUT3KmmIm=w1600\" alt=\"Membership service blueprint\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">The fan-facing journey depends on backstage actions, supporting state and accepted operating responsibility.</figcaption>\n</figure>\n\n## The state that must survive\n\nThe operating model should preserve related states without collapsing them:\n\n- payment authorized is not the same as payment settled;\n- payment successful is not the same as order created;\n- order created is not the same as membership activated;\n- membership active is not the same as a priority benefit being available;\n- ticket issued is not the same as checked in;\n- carrier pickup is not the same as delivered;\n- support replied is not the same as the fan recovered;\n- refund requested is not the same as refund completed.\n\nThe minimum continuity model has six records or capabilities:\n\n<ol class=\"f-numbered-list\">\n<li><strong>Promise record.</strong> What was offered, under which version, terms, dates, capacity, and partner conditions.</li>\n<li><strong>Eligibility and entitlement record.</strong> Who qualifies, what right exists, its validity, use, correction, expiry, or revocation state.</li>\n<li><strong>Transaction and execution state.</strong> Payment, order, ticket, access, fulfilment, delivery, refund, and settlement remain distinct but reconcilable.</li>\n<li><strong>Accepted handoff.</strong> The current owner remains accountable until the receiving owner confirms authority, context, and next action.</li>\n<li><strong>Recovery case.</strong> One case preserves the original promise, relevant evidence, mismatch, owner, next update, correction, and fan-visible outcome.</li>\n<li><strong>Closure and learning record.</strong> A case closes only when the fan outcome is communicated, domain actions are complete or bounded, relevant records agree, and recurring causes can be reviewed.</li>\n</ol>\n\n## Assignment is not acceptance\n\nSending a case to another queue does not transfer accountability. A valid handoff requires the current owner to prepare minimum context, the receiving owner to acknowledge the issue and accept the next action, and any rejection to return with a reason and a new route. Until acceptance, the current owner remains responsible for the next fan update.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 Accepted handoff</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1ZgkxsZBqQPyG7o5I25GKuxHCC-8e9JB7\" data-title=\"Accepted handoff\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1ZgkxsZBqQPyG7o5I25GKuxHCC-8e9JB7/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1ZgkxsZBqQPyG7o5I25GKuxHCC-8e9JB7\" data-title=\"Accepted handoff\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1ZgkxsZBqQPyG7o5I25GKuxHCC-8e9JB7=w1600\" alt=\"Prepared, accepted, closed, or returned-with-reason handoff states\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">The case cannot disappear between teams: the current owner remains accountable until another owner accepts it.</figcaption>\n</figure>\n\n## A bounded exception scenario\n\nConsider an active member whose priority benefit is not recognized. This is a scenario for testing the model, not a claim that MFan currently fails in this way.\n\nThe recovery path should assemble membership validity, the benefit rule and window, eligibility segment, use or reservation history, inventory or capacity, and the fan's attempt. Membership Operations confirms the rule; Ticket or Commerce Operations accepts the handoff; the fan receives a feasible outcome; and the relevant records are aligned. Closure may mean restored opportunity, an accurate capacity explanation, or an approved recovery outcome—not an invented guarantee.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 Membership active, priority benefit not recognized</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1gDJw0JQQCAAe5melZCZPKKA_Whnz8dha\" data-title=\"Membership active, priority benefit not recognized\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1gDJw0JQQCAAe5melZCZPKKA_Whnz8dha/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1gDJw0JQQCAAe5melZCZPKKA_Whnz8dha\" data-title=\"Membership active, priority benefit not recognized\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1gDJw0JQQCAAe5melZCZPKKA_Whnz8dha=w1600\" alt=\"A bounded exception pathway for an unrecognized priority benefit\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">A scenario tests whether promise, state, evidence, owner, next action, and closure remain connected.</figcaption>\n</figure>\n\n## Prove continuity in one journey\n\nThe first move should be a bounded pilot, not a platform-wide rebuild:\n\n- one artist;\n- one membership tier and current offer;\n- one gated-content benefit;\n- one priority ticket or merchandise benefit;\n- one payment or order route;\n- one support route;\n- one reporting and settlement close.\n\nThe operator view should answer five questions without reconstruction: Who is the fan? What was promised? What is the current state and source? Who has accepted the next action? What conditions constitute closure?\n\nThe north-star is whether **one current membership promise remains coherent from purchase to a valid close**. Supporting measures should cover activation and entitlement recognition, payment-to-order and payment-to-entitlement matching, accepted-owner time, proof re-submission, first useful response, recovery and closure, record reconciliation, manual load, privacy, legitimate access, and partner burden. Numeric targets should follow a real baseline rather than invented MFan performance assumptions.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\">\n    <span class=\"f-diagram-title\">📊 Bounded pilot and expansion gate</span>\n    <div class=\"f-diagram-header-actions\">\n      <button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1GeWCEA_vvy7VuF0i-nNMifJKLqp4rtCR\" data-title=\"Bounded pilot and expansion gate\">Preview</button>\n      <a href=\"https://drive.google.com/file/d/1GeWCEA_vvy7VuF0i-nNMifJKLqp4rtCR/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" title=\"Open in new tab\" aria-label=\"Open in new tab\">↗</a>\n    </div>\n  </div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1GeWCEA_vvy7VuF0i-nNMifJKLqp4rtCR\" data-title=\"Bounded pilot and expansion gate\" title=\"Click to enlarge\">\n    <img src=\"https://lh3.googleusercontent.com/d/1GeWCEA_vvy7VuF0i-nNMifJKLqp4rtCR=w1600\" alt=\"A bounded pilot with continuity, recovery, load, guardrails, and an expansion gate\" loading=\"lazy\">\n    <div class=\"f-diagram-zoom-hint\">Click to enlarge</div>\n  </div>\n  <figcaption class=\"f-diagram-caption\">Expand only if benefits are recognized, handoffs work, proof repetition falls, exceptions close, records reconcile, and operating guardrails remain acceptable.</figcaption>\n</figure>\n\nThe pilot should be narrowed, redesigned, or stopped if current internal processes already solve the problem; the harm is too low to justify intervention; privacy or access risk is disproportionate; accepted handoffs slow action; the fan-facing state creates confusion; manual work exceeds recovered value; artist-specific rules defeat a shared grammar; or a simpler copy, policy, staffing, or configuration fix performs better.\n\n## Relationship to Artist Fandom\n\n[Artist Fandom Page & Fan Dashboard](/work/artist-fandom-page) remains a separate fan-facing product concept. It explores how continuity could appear in an interface. This operating model asks what must remain true behind the interface. Neither validates the other, and the cases should not be merged into one claim.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Evidence boundary</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1oEhOj9XrjCHzIYS8ri4xXbaWEa1m0uQd\" data-title=\"Evidence boundary\">Preview</button><a href=\"https://drive.google.com/file/d/1oEhOj9XrjCHzIYS8ri4xXbaWEa1m0uQd/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1oEhOj9XrjCHzIYS8ri4xXbaWEa1m0uQd\" data-title=\"Evidence boundary\"><img src=\"https://lh3.googleusercontent.com/d/1oEhOj9XrjCHzIYS8ri4xXbaWEa1m0uQd=w1600\" alt=\"Evidence boundary\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Public evidence supports the visible promise; internal state, operating performance and causal diagnosis remain unverified.</figcaption>\n</figure>\n\n## Final takeaway\n\n> **Integration is not only the presence of connected surfaces. It is the continuity of promise, state, evidence, accepted ownership, recovery, and closure across the full fan journey.**\n\nThe updated case therefore keeps the original trust-chain foundation and moves the decision forward: validate one real membership pathway, measure whether continuity and recovery improve, and expand only when the evidence supports transfer to another artist or offer.\n\n---\n\n## Continue reading\n\n[Artist Fandom Page & Fan Dashboard](/work/artist-fandom-page) — the fan-facing companion concept.\n\n[Post-Signing Artist / Label Operations](/work/post-signing-artist-label-operations) — the partnership and execution layer after agreement.\n\n[Work Library](/work) · [Portfolio Home](/)\n\n<details class=\"f-details\"><summary>Source cover artwork</summary><div class=\"f-details-content\">\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">MFan operating model cover</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1EB9h634ZhP0n5rwINlsC13iu0VdIWXjS\" data-title=\"MFan operating model cover\">Preview</button><a href=\"https://drive.google.com/file/d/1EB9h634ZhP0n5rwINlsC13iu0VdIWXjS/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1EB9h634ZhP0n5rwINlsC13iu0VdIWXjS\" data-title=\"MFan operating model cover\"><img src=\"https://lh3.googleusercontent.com/d/1EB9h634ZhP0n5rwINlsC13iu0VdIWXjS=w1600\" alt=\"MFan operating model cover\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">MFan operating model cover</figcaption>\n</figure>\n\n</div></details>\n\n"
};

// VieWorld is sourced from the authored final portfolio presentation and original Drive visuals.
caseDocuments["/work/vieworld"] = {
  "assets": [
  {
    "type": "pdf",
    "driveId": "1RG7dwzv0VX7vpkdzeVboThnDxPuU_F-Q",
    "fileName": "VieWorld_Portfolio_Presentation_Final.pdf",
    "title": "VieWorld Portfolio Presentation Final.pdf",
    "label": "Preview: VieWorld Portfolio Presentation Final.pdf ↗"
  },
  {
    "type": "pdf",
    "driveId": "1T_GM8JJ8lUsFVO9QIX6N0XmrbruusjPC",
    "fileName": "VieWorld_Ecosystem_Build_Final_Presentation.pdf",
    "title": "VieWorld Ecosystem Build Final Presentation.pdf",
    "label": "Preview: VieWorld Ecosystem Build Final Presentation.pdf ↗"
  },
  {
    "type": "image",
    "driveId": "1xSFPQMxfhzFnPWc7wStzgO_4pnZs1puB",
    "fileName": "visual-01-opening-ecosystem-map.png",
    "title": "visual-01-opening-ecosystem-map",
    "label": "Preview: visual-01-opening-ecosystem-map ↗"
  },
  {
    "type": "image",
    "driveId": "1jha0eSG2auyN5-8HIgD_V-mA1ZSOuW94",
    "fileName": "visual-04-research-to-system.png",
    "title": "visual-04-research-to-system",
    "label": "Preview: visual-04-research-to-system ↗"
  },
  {
    "type": "image",
    "driveId": "1dI4CnR20yrnVNb13CKKbdVs_aY3kKgFE",
    "fileName": "01-home-moments.png",
    "title": "01-home-moments",
    "label": "Preview: 01-home-moments ↗"
  },
  {
    "type": "image",
    "driveId": "1F8XVO3NA31wvDbYKK26DMnHAzr3hKiDa",
    "fileName": "03-artist-world-main.png",
    "title": "03-artist-world-main",
    "label": "Preview: 03-artist-world-main ↗"
  },
  {
    "type": "image",
    "driveId": "1YN4AM1nBmciA4Z9NR6_ZWRCC38YZQyLS",
    "fileName": "04-hall-community.png",
    "title": "04-hall-community",
    "label": "Preview: 04-hall-community ↗"
  },
  {
    "type": "image",
    "driveId": "1QP7HZ42sg7AXUHJMCkQu-8ZO3rmJ59H7",
    "fileName": "05-archive.png",
    "title": "05-archive",
    "label": "Preview: 05-archive ↗"
  },
  {
    "type": "image",
    "driveId": "1KTU5Bjlaj2PBBZBDYFMsdDsGIRTy9KzH",
    "fileName": "06-my-space-room.png",
    "title": "06-my-space-room",
    "label": "Preview: 06-my-space-room ↗"
  },
  {
    "type": "image",
    "driveId": "1tJs3iD4qO5-BHqbwvy4QOvdgmE_CPlVQ",
    "fileName": "08-viecollect-main.png",
    "title": "08-viecollect-main",
    "label": "Preview: 08-viecollect-main ↗"
  },
  {
    "type": "image",
    "driveId": "1Q7fCVFePryM10t_d39Qc5l7h3pnJBkRo",
    "fileName": "visual-06-continuity-branches.png",
    "title": "visual-06-continuity-branches",
    "label": "Preview: visual-06-continuity-branches ↗"
  },
  {
    "type": "image",
    "driveId": "1vjnb3DE9zInZiutyLL-vs9kCghgSL5ya",
    "fileName": "visual-09-shared-objects-rules.png",
    "title": "visual-09-shared-objects-rules",
    "label": "Preview: visual-09-shared-objects-rules ↗"
  },
  {
    "type": "image",
    "driveId": "1mQG-kM8aSGtSrPUfiSDY-ctpHxXUB9-I",
    "fileName": "visual-11-executable-slice.png",
    "title": "visual-11-executable-slice",
    "label": "Preview: visual-11-executable-slice ↗"
  },
  {
    "type": "image",
    "driveId": "1G94Xc_UrQDHEUfL_w7nEM4HWBAWkOTjT",
    "fileName": "visual-12-operating-service-boundary.png",
    "title": "visual-12-operating-service-boundary",
    "label": "Preview: visual-12-operating-service-boundary ↗"
  },
  {
    "type": "image",
    "driveId": "1uh8mXOKJK3qBIoLKqrmY3Zql4j4Qwox5",
    "fileName": "visual-13-future-capability-families.png",
    "title": "visual-13-future-capability-families",
    "label": "Preview: visual-13-future-capability-families ↗"
  },
  {
    "type": "image",
    "driveId": "1rluyqwBlo804oyAShN5Zd5KgwlWO9dmH",
    "fileName": "visual-15-validation-sequence.png",
    "title": "visual-15-validation-sequence",
    "label": "Preview: visual-15-validation-sequence ↗"
  },
  {
    "type": "image",
    "driveId": "1H8g4UOcMo4FD-_5HCYmTyADztCY4jshg",
    "fileName": "02-explore-worlds.png",
    "title": "02-explore-worlds",
    "label": "Preview: 02-explore-worlds ↗"
  },
  {
    "type": "image",
    "driveId": "1C_hII1kj6eMzpjiFcCsbFUVSb8W81AXK",
    "fileName": "09-viecollect-product-detail.png",
    "title": "09-viecollect-product-detail",
    "label": "Preview: 09-viecollect-product-detail ↗"
  },
  {
    "type": "image",
    "driveId": "1abYFp-VB9pd1bBt4dwEF3hiCS80lkwxQ",
    "fileName": "11-viecollect-order-digital.png",
    "title": "11-viecollect-order-digital",
    "label": "Preview: 11-viecollect-order-digital ↗"
  },
  {
    "type": "image",
    "driveId": "1gVRNxtG8b6TAEKjAas-JfKKyYf5w4Dv6",
    "fileName": "12-viecollect-order-physical.png",
    "title": "12-viecollect-order-physical",
    "label": "Preview: 12-viecollect-order-physical ↗"
  },
  {
    "type": "image",
    "driveId": "1pfYpC6MXZ5rP5UQ3K0VXu9wNz_AHivBb",
    "fileName": "13-avatar-editor.png",
    "title": "13-avatar-editor",
    "label": "Preview: 13-avatar-editor ↗"
  },
  {
    "type": "image",
    "driveId": "1i_Es9vHWhgYBtm-_lFkgaQv3krFllRbV",
    "fileName": "14-my-space-edit-mode.png",
    "title": "14-my-space-edit-mode",
    "label": "Preview: 14-my-space-edit-mode ↗"
  },
  {
    "type": "image",
    "driveId": "14_yHWSPVH8xzGAeHzN0NWM-5joLwvClS",
    "fileName": "crop-01-explore-world-context.png",
    "title": "crop-01-explore-world-context",
    "label": "Preview: crop-01-explore-world-context ↗"
  },
  {
    "type": "image",
    "driveId": "1wzekrAHqQQZifIhqApjjsrz6NUmEMfgF",
    "fileName": "crop-02-hall-room-list.png",
    "title": "crop-02-hall-room-list",
    "label": "Preview: crop-02-hall-room-list ↗"
  },
  {
    "type": "image",
    "driveId": "1H1BG3hWJiUnzbMOqSjcJnu4QyZzoTiyQ",
    "fileName": "crop-03-my-space-surfaces.png",
    "title": "crop-03-my-space-surfaces",
    "label": "Preview: crop-03-my-space-surfaces ↗"
  },
  {
    "type": "image",
    "driveId": "13atYHb3W28y9ZthiO7JmvQhTSy9u1_yu",
    "fileName": "crop-04-product-form-choice.png",
    "title": "crop-04-product-form-choice",
    "label": "Preview: crop-04-product-form-choice ↗"
  },
  {
    "type": "image",
    "driveId": "1sGxlJ07X5KVq5ouVQeJOuY-SBBDQSnkq",
    "fileName": "crop-05-order-state-comparison.png",
    "title": "crop-05-order-state-comparison",
    "label": "Preview: crop-05-order-state-comparison ↗"
  },
  {
    "type": "image",
    "driveId": "1wD3WYJGs4hXKsSOiCdVWs7T9P-GYeH45",
    "fileName": "crop-06-avatar-expression.png",
    "title": "crop-06-avatar-expression",
    "label": "Preview: crop-06-avatar-expression ↗"
  },
  {
    "type": "image",
    "driveId": "1FzpaRg0HwPOUcOZ-Z2yIC_ghC03RhI9U",
    "fileName": "VieWorld Board",
    "title": "VieWorld Board",
    "label": "Preview: VieWorld Board ↗"
  },
  {
    "type": "image",
    "driveId": "1xCXWkhVSyIPv1mK5JTaCktDO_z2wlBeF",
    "fileName": "VieWorld Logo",
    "title": "VieWorld Logo",
    "label": "Preview: VieWorld Logo ↗"
  },
  {
    "type": "image",
    "driveId": "1bqm23NK7kAtkW7XgWfw_TeEz67nDRxtQ",
    "fileName": "visual-02-core-thesis.png",
    "title": "visual-02-core-thesis",
    "label": "Preview: visual-02-core-thesis ↗"
  },
  {
    "type": "image",
    "driveId": "1q1xZ3xyalbE_HHXdf_AkoLv8yi5FxI4M",
    "fileName": "visual-03-world-formation.png",
    "title": "visual-03-world-formation",
    "label": "Preview: visual-03-world-formation ↗"
  },
  {
    "type": "image",
    "driveId": "1DftpugBRDfQRnVCziuE_GK6In-oVMkP6",
    "fileName": "visual-05-fan-journey.png",
    "title": "visual-05-fan-journey",
    "label": "Preview: visual-05-fan-journey ↗"
  },
  {
    "type": "image",
    "driveId": "1W7_B_KKXJtXZGjAzmlp7JcCN8VgwTUec",
    "fileName": "visual-07-hall-lifecycle.png",
    "title": "visual-07-hall-lifecycle",
    "label": "Preview: visual-07-hall-lifecycle ↗"
  },
  {
    "type": "image",
    "driveId": "1RwKNEU3-wyF3TBZ7bAC6mKDkeuXEpmDe",
    "fileName": "visual-08-internal-topology.png",
    "title": "visual-08-internal-topology",
    "label": "Preview: visual-08-internal-topology ↗"
  },
  {
    "type": "image",
    "driveId": "1OR91bY91Mjm7jQKBk_XOecGs5Aki3UBj",
    "fileName": "visual-10-responsibility-boundaries.png",
    "title": "visual-10-responsibility-boundaries",
    "label": "Preview: visual-10-responsibility-boundaries ↗"
  },
  {
    "type": "image",
    "driveId": "1TqYXA0vZJ6blZiRWU7f7wB2PQKSI0LJP",
    "fileName": "visual-14-future-trust-flows.png",
    "title": "visual-14-future-trust-flows",
    "label": "Preview: visual-14-future-trust-flows ↗"
  },
  {
    "type": "document",
    "driveId": "1KVLjLd1JUT6hhMgrCmbd5QT04vYK3Rde",
    "fileName": "VieWorld_Portfolio_Presentation_Final.docx",
    "title": "VieWorld Portfolio Presentation Final.docx",
    "label": "Preview: VieWorld Portfolio Presentation Final.docx ↗"
  },
  {
    "type": "document",
    "driveId": "1sbb2yKp69NQxEaXIX0143NRkIchtyMmd",
    "fileName": "VieWorld_Ecosystem_Build_Final_Presentation.docx",
    "title": "VieWorld Ecosystem Build Final Presentation.docx",
    "label": "Preview: VieWorld Ecosystem Build Final Presentation.docx ↗"
  }
],
  "body": "<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1RG7dwzv0VX7vpkdzeVboThnDxPuU_F-Q\" data-title=\"Portfolio presentation (PDF)\">Portfolio presentation (PDF)</button><a href=\"https://drive.google.com/file/d/1RG7dwzv0VX7vpkdzeVboThnDxPuU_F-Q/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" aria-label=\"Open in new tab\">↗</a><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"pdf\" data-driveid=\"1T_GM8JJ8lUsFVO9QIX6N0XmrbruusjPC\" data-title=\"Full ecosystem case (PDF)\">Full ecosystem case (PDF)</button><a href=\"https://drive.google.com/file/d/1T_GM8JJ8lUsFVO9QIX6N0XmrbruusjPC/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" aria-label=\"Open in new tab\">↗</a><a href=\"https://drive.google.com/drive/folders/1CksIqRidWnqlDGqLwzcK1zDYzV3NLWVx\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-btn\">Complete source set ↗</a></div>\n\n> **Independent ecosystem concept · Working product prototype · Source audit: 4 October 2026**\n\n> An independent fandom ecosystem concept, expressed through a working product prototype.\n\n> “Fan đến vì một sự hứng thú nhất thời, ở lại vì tìm được một vị trí cho mình.”\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">VieWorld ecosystem map</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1xSFPQMxfhzFnPWc7wStzgO_4pnZs1puB\" data-title=\"VieWorld ecosystem map\">Preview</button><a href=\"https://drive.google.com/file/d/1xSFPQMxfhzFnPWc7wStzgO_4pnZs1puB/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1xSFPQMxfhzFnPWc7wStzgO_4pnZs1puB\" data-title=\"VieWorld ecosystem map\"><img src=\"https://lh3.googleusercontent.com/d/1xSFPQMxfhzFnPWc7wStzgO_4pnZs1puB=w1600\" alt=\"VieWorld ecosystem map\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">The designed world, its operating authority and conditional live dependencies.</figcaption>\n</figure>\n\n> 2026 · Phạm Thanh Phú · Mission and identity · research synthesis · product and system logic · implementation direction\n\n> Demo artist identities and content; no artist affiliation, live community or partner network is claimed.\n\n## The world and its design logic\n\n> Moment → Place → Position → Continuity\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Research to design</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1jha0eSG2auyN5-8HIgD_V-mA1ZSOuW94\" data-title=\"Research to design\">Preview</button><a href=\"https://drive.google.com/file/d/1jha0eSG2auyN5-8HIgD_V-mA1ZSOuW94/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1jha0eSG2auyN5-8HIgD_V-mA1ZSOuW94\" data-title=\"Research to design\"><img src=\"https://lh3.googleusercontent.com/d/1jha0eSG2auyN5-8HIgD_V-mA1ZSOuW94=w1600\" alt=\"Research to design\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Research lenses informed design interpretations and product implications, not validated demand.</figcaption>\n</figure>\n\nMy contribution. I composed the mission and identity, synthesized research, defined product and system logic, and directed implementation. An earlier merchandise case supplied the question: what happens after the transaction? I developed an independent model with free community at its center.\n\nResearch to design. Identity, participation, community and memory informed the intended path from observing to contributing and from shared experience to personal meaning [R1–R11, R29, R30]. Persistent named rooms were a behavioral reference for Hall [R16]. These were design inputs; no direct Vietnamese fan research has yet been conducted.\n\nEcosystem approach. The structural lens asks which activities depend on which actors and handoffs [R35, R36]. I separated external attention, internal places and rules, operating authority, and conditional delivery. That defines a coordinating model, without implying secured partners or a live community.\n\n## Home gives interest a time context\n\n> A song, social clip, event or friend gives a fan a reason to care. Home helps that interest find its current context.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Home — Moments</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1dI4CnR20yrnVNb13CKKbdVs_aY3kKgFE\" data-title=\"Home — Moments\">Preview</button><a href=\"https://drive.google.com/file/d/1dI4CnR20yrnVNb13CKKbdVs_aY3kKgFE/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1dI4CnR20yrnVNb13CKKbdVs_aY3kKgFE\" data-title=\"Home — Moments\"><img src=\"https://lh3.googleusercontent.com/d/1dI4CnR20yrnVNb13CKKbdVs_aY3kKgFE=w1600\" alt=\"Home — Moments\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Prototype Home with current, recent and upcoming demo Moments.</figcaption>\n</figure>\n\nFan state. The fan arrives with temporary attention, not necessarily a destination or a commitment to join. Outside platforms remain sources of attention; the map does not imply content imports or partner integrations.\n\nDesign decision. Home answers what matters now through current, recent and upcoming Moments. Time provides orientation before a feed asks the fan to consume more. A Moment can carry the fan into an Artist World and its relevant room; Explore provides another route when the fan is still discovering.\n\nWhat carries forward. The trigger gains a time and a bounded fandom context. Home is the first product expression of the world already introduced in the ecosystem map. The pictured content, artist identities and Hall voices are demo fixtures, not evidence of live artist presence or community activity.\n\n## Artist World gives attention a place\n\n> The Moment becomes part of a recognizable artist and fandom context that the fan can enter again.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Artist World</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1F8XVO3NA31wvDbYKK26DMnHAzr3hKiDa\" data-title=\"Artist World\">Preview</button><a href=\"https://drive.google.com/file/d/1F8XVO3NA31wvDbYKK26DMnHAzr3hKiDa/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1F8XVO3NA31wvDbYKK26DMnHAzr3hKiDa\" data-title=\"Artist World\"><img src=\"https://lh3.googleusercontent.com/d/1F8XVO3NA31wvDbYKK26DMnHAzr3hKiDa=w1600\" alt=\"Artist World\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Artist World places current activity, Hall and Archive inside one demo fandom context.</figcaption>\n</figure>\n\nFan state. Interest now has an artist anchor, but the fan still needs to understand where they are and where participation belongs. Artist World brings identity, current activity, conversation and selected history into one scope.\n\nRelationship. A Moment supplies the reason to enter. Artist World gives that reason a boundary; Hall offers social participation, while Archive offers selected shared memory. The destinations inherit context rather than behaving as unrelated modules.\n\nChoice. This is a designed path, not a compulsory funnel. A fan can arrive through Explore, follow a World, return directly to Hall, or revisit a memory. Position means a personally legible way to participate and express meaning, not a fan rank. Current names and paths remain product hypotheses to test with newcomers.\n\n## Hall keeps a recurring social context\n\n> Shared attention needs somewhere to become repeated conversation. Hall remains available after the Moment ends.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Hall — recurring community</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1YN4AM1nBmciA4Z9NR6_ZWRCC38YZQyLS\" data-title=\"Hall — recurring community\">Preview</button><a href=\"https://drive.google.com/file/d/1YN4AM1nBmciA4Z9NR6_ZWRCC38YZQyLS/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1YN4AM1nBmciA4Z9NR6_ZWRCC38YZQyLS\" data-title=\"Hall — recurring community\"><img src=\"https://lh3.googleusercontent.com/d/1YN4AM1nBmciA4Z9NR6_ZWRCC38YZQyLS=w1600\" alt=\"Hall — recurring community\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Public Phòng chung is the recurring room; membership adds optional private depth.</figcaption>\n</figure>\n\nParticipation. Guests can read public Hall. Signed-in nonmembers can post, reply and react. A valid membership adds private Lounge and Q&A access; expiry does not remove access to the public community. Reading before speaking is a legitimate way to enter.\n\nThree separate rules. Access decides who may enter. Mode decides whether the room is chat or Q&A. Lifecycle decides what can happen now. A public Moment room can move from preparation to active to ended and read-only; Phòng chung remains recurring. Paused is a distinct read-only state.\n\nWhat remains. Selected eligible public context may later become shared memory, while recurring rooms remain available on quiet days. Private or member-only material stays outside public Archive. These local rules demonstrate scoped behavior; they do not establish real artist responses, staffed moderation or production security.\n\n## Archive preserves selected shared memory\n\n> When a Moment resolves, some public context can become a shared record. Not every conversation should persist.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Archive — selected shared memory</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1QP7HZ42sg7AXUHJMCkQu-8ZO3rmJ59H7\" data-title=\"Archive — selected shared memory\">Preview</button><a href=\"https://drive.google.com/file/d/1QP7HZ42sg7AXUHJMCkQu-8ZO3rmJ59H7/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1QP7HZ42sg7AXUHJMCkQu-8ZO3rmJ59H7\" data-title=\"Archive — selected shared memory\"><img src=\"https://lh3.googleusercontent.com/d/1QP7HZ42sg7AXUHJMCkQu-8ZO3rmJ59H7=w1600\" alt=\"Archive — selected shared memory\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Archive is selected shared memory, with context, rather than a copy of every room.</figcaption>\n</figure>\n\nWhy it follows Hall. Hall holds the experience while people participate. Archive gives selected eligible public traces a form that can be revisited after the peak. It preserves shared context rather than keeping all activity available forever.\n\nBoundary. Private Q&A, cancelled or invalid sessions, rights or media-invalid contexts, and material outside the correct World do not become public memory. Ending a room does not automatically archive its messages. Eligibility and selection matter; the visible historical content is illustrative.\n\nWhat it does not contain. A collective record is only one residue of a Moment. The recurring room, a fan’s followed Worlds, personal curation and valid owned objects carry other forms of continuity. This choice creates curation work and leaves some traces behind; it is not simply a storage feature.\n\n## My Space keeps the fan’s chosen meaning\n\n> A shared experience can matter differently to each person. My Space lets the fan carry their own part forward.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">My Space</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1KTU5Bjlaj2PBBZBDYFMsdDsGIRTy9KzH\" data-title=\"My Space\">Preview</button><a href=\"https://drive.google.com/file/d/1KTU5Bjlaj2PBBZBDYFMsdDsGIRTy9KzH/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1KTU5Bjlaj2PBBZBDYFMsdDsGIRTy9KzH\" data-title=\"My Space\"><img src=\"https://lh3.googleusercontent.com/d/1KTU5Bjlaj2PBBZBDYFMsdDsGIRTy9KzH=w1600\" alt=\"My Space\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">The fan curates; the room composes. Removing a display does not remove ownership.</figcaption>\n</figure>\n\nPersonal continuity. The fan chooses which part of fandom belongs in their own identity and memory. That selection need not match the collective Archive. My Space is a personal place that can carry chosen expression across Moments and fandom contexts.\n\nDesign decision. The fan chooses compatible owned objects and surfaces, previews a placement and saves it. A constrained room composes the display instead of making the fan manage a full scene editor. Compatibility and public versus private expression remain explicit rules.\n\nInspectable behavior. The canonical audit records placing an eligible demo object and removing it while ownership remains. Local profile guards protect private state across sign-out and profile changes; they are client-side protections. Whether room curation is meaningful to Vietnamese fans remains unknown. The virtual-possession study behind this lens involved 21 U.S. teenagers, not VieWorld users [R29].\n\n## VieCollect makes ownership an optional layer\n\n> Some fandom objects may carry memory and identity over time. Purchase is one way to acquire them.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">VieCollect</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1tJs3iD4qO5-BHqbwvy4QOvdgmE_CPlVQ\" data-title=\"VieCollect\">Preview</button><a href=\"https://drive.google.com/file/d/1tJs3iD4qO5-BHqbwvy4QOvdgmE_CPlVQ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1tJs3iD4qO5-BHqbwvy4QOvdgmE_CPlVQ\" data-title=\"VieCollect\"><img src=\"https://lh3.googleusercontent.com/d/1tJs3iD4qO5-BHqbwvy4QOvdgmE_CPlVQ=w1600\" alt=\"VieCollect\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">VieCollect connects acquisition to valid ownership and compatible expression in the prototype.</figcaption>\n</figure>\n\nReason to exist. Commerce is an optional input to continuity. An eligible object may remain in Collection and become chosen Avatar or My Space expression. Community does not require spending, and payment does not make someone a more legitimate fan.\n\nSeparate states. Acquisition, ownership and display are different. Saved, cart, preorder and paid states are not ownership; a valid receipt or grant establishes provenance. Removing a display preserves a valid owned object.\n\nDelivery boundary. Physical-only purchase does not unlock a digital object. Hybrid remains conceptual; physical delivery and digital entitlement would carry separate obligations. Rights, inventory, payment, fulfillment and support remain operating requirements, not outcomes established by a demo order.\n\n## What remains after a Moment\n\n> Continuity is distributed across the ecosystem. Archive is one form of continuity, not the continuity feature.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Distributed continuity</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1Q7fCVFePryM10t_d39Qc5l7h3pnJBkRo\" data-title=\"Distributed continuity\">Preview</button><a href=\"https://drive.google.com/file/d/1Q7fCVFePryM10t_d39Qc5l7h3pnJBkRo/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1Q7fCVFePryM10t_d39Qc5l7h3pnJBkRo\" data-title=\"Distributed continuity\"><img src=\"https://lh3.googleusercontent.com/d/1Q7fCVFePryM10t_d39Qc5l7h3pnJBkRo=w1600\" alt=\"Distributed continuity\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">The Moment ends; social, shared, personal and owned traces have different persistence rules.</figcaption>\n</figure>\n\nDifferent carriers. Hall keeps recurring social context. Archive keeps selected public shared memory. Identity, followed Worlds, My Space and chosen expression keep a personal position. Collection keeps valid owned objects and provenance. Official or member access may expire without removing basic public community access.\n\nQuiet return. The fan can return to a familiar room, a shared trace or their own chosen meaning without needing a new sale or artist post. The next Moment can orient activity again while valid persistent states remain. This is the intended experience, not an automatic retention engine or an observed return pattern.\n\nThe open question. What should persist, what should resolve, and which remaining trace would give a fan a reason to return? Those choices connect the places into a world and define the next research task.\n\n## Shared rules make the places one system\n\n> The relationships the fan experiences depend on shared objects, scope and responsibility boundaries.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Shared objects and rules</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1vjnb3DE9zInZiutyLL-vs9kCghgSL5ya\" data-title=\"Shared objects and rules\">Preview</button><a href=\"https://drive.google.com/file/d/1vjnb3DE9zInZiutyLL-vs9kCghgSL5ya/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1vjnb3DE9zInZiutyLL-vs9kCghgSL5ya\" data-title=\"Shared objects and rules\"><img src=\"https://lh3.googleusercontent.com/d/1vjnb3DE9zInZiutyLL-vs9kCghgSL5ya=w1600\" alt=\"Shared objects and rules\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">A conceptual domain model of cross-place relationships, not a production database design.</figcaption>\n</figure>\n\nConnections. A valid Moment can orient Home, contextualize Artist World and determine a Hall room’s state. Selected ended public context can become Archive memory. An eligible owned digital object can appear in Collection and be worn or displayed through compatible personal expression.\n\nInvariants. World scope, time, access, identity, provenance, selection and privacy travel with these relationships. Access is not identity; acquisition is not ownership; ownership is not display. Private state must not leak into public projections. A visually coherent interface cannot substitute for those rules.\n\nTradeoff. I kept permanent places few and capabilities contextual. Curated memory, constrained composition and free public participation take priority. Selected rules are inspectable; real ecosystem coordination still requires actor agreement.\n\n## What the prototype makes inspectable\n\n> A working local frontend turns selected ecosystem relationships into behavior that can be checked.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Executable slice</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1mQG-kM8aSGtSrPUfiSDY-ctpHxXUB9-I\" data-title=\"Executable slice\">Preview</button><a href=\"https://drive.google.com/file/d/1mQG-kM8aSGtSrPUfiSDY-ctpHxXUB9-I/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1mQG-kM8aSGtSrPUfiSDY-ctpHxXUB9-I\" data-title=\"Executable slice\"><img src=\"https://lh3.googleusercontent.com/d/1mQG-kM8aSGtSrPUfiSDY-ctpHxXUB9-I=w1600\" alt=\"Executable slice\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">The executable slice is engineering evidence; it does not establish demand or live operations.</figcaption>\n</figure>\n\nBuilt slice. React, TypeScript and Vite express selected rules for room access and lifecycle, Q&A visibility, ownership and personal placement. The canonical audit records local guards and browser checks, including display removal that preserves ownership and protected state at sign-out.\n\nRecorded verification. The Truth Audit dated 4 October 2026 recorded 576 passing tests across 63 files, plus passing typecheck, build and supporting checks. These results support prototype and domain coherence; they are not market, load, rights or production-security evidence.\n\nPractical limit. Production authentication, server authorization, synchronization, realtime infrastructure, full moderation, payments and fulfillment remain outside the slice. Audit scope refers to the canonical local build; the public demo may lag, and production infrastructure remains outside the prototype.\n\n## Live services need accountable operators\n\n> Local rules can reject an action. A real promise needs authority, handoffs and an owner when delivery fails.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Operating service boundary</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1G94Xc_UrQDHEUfL_w7nEM4HWBAWkOTjT\" data-title=\"Operating service boundary\">Preview</button><a href=\"https://drive.google.com/file/d/1G94Xc_UrQDHEUfL_w7nEM4HWBAWkOTjT/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1G94Xc_UrQDHEUfL_w7nEM4HWBAWkOTjT\" data-title=\"Operating service boundary\"><img src=\"https://lh3.googleusercontent.com/d/1G94Xc_UrQDHEUfL_w7nEM4HWBAWkOTjT=w1600\" alt=\"Operating service boundary\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Proposed Q&amp;A and physical-delivery chains separate visible actions from backstage responsibility.</figcaption>\n</figure>\n\nTwo service examples. A real member Q&A would require intake, moderation, selection, Artist Team approval, publication and incident handling. A physical object would require rights, seller and stock, payment status, fulfillment, returns and support. The service view exposes the work behind a simple fan interaction [R26].\n\nAuthority and stewardship. Artist or Artist Team retains creative and approval authority. A World Team would carry authorized lifecycle, curation, publishing and moderation work. Delivery partners enter only when a specific promise requires them. Every handoff needs a truthful status and an accountable failure owner.\n\nCurrent boundary. These are designed requirements, not staffed services, verified official identities or secured partnerships. Demo artist content does not confer rights. The operating layer remains a separate feasibility question even if the frontend behaves coherently.\n\n## Expansion follows evidence and authority\n\n> Capabilities can multiply while permanent places stay few. Each new promise changes the responsibility model.\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Future capability families</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1uh8mXOKJK3qBIoLKqrmY3Zql4j4Qwox5\" data-title=\"Future capability families\">Preview</button><a href=\"https://drive.google.com/file/d/1uh8mXOKJK3qBIoLKqrmY3Zql4j4Qwox5/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1uh8mXOKJK3qBIoLKqrmY3Zql4j4Qwox5\" data-title=\"Future capability families\"><img src=\"https://lh3.googleusercontent.com/d/1uh8mXOKJK3qBIoLKqrmY3Zql4j4Qwox5=w1600\" alt=\"Future capability families\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Future capability families are hypotheses, not current release scope or a committed roadmap.</figcaption>\n</figure>\n\nParticipation. Play, Living Home and richer Dấu mốc could deepen participation, orientation and chosen history. Artist Avatar Live would require approved material, disclosed session state and accountable human control, not an autonomous artist persona.\n\nReal-world and operating work. VieWithYou, VieCharity and fan-initiated shows would require consent, verified partners, fair allocation and feasible delivery. Official stewardship, shared backstage tools and domain contracts would require authority and privacy boundaries. Conversation may inform internal learning, but is not representative research.\n\nGate. First establish free-community value. Then require actor alignment, trustworthy provenance and capacity to deliver each promise. Add capabilities only when those conditions exist, without automatically creating permanent tabs.\n\n## The next test is quiet return\n\n> Will people return because the place and people begin to matter?\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">Validation sequence</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1rluyqwBlo804oyAShN5Zd5KgwlWO9dmH\" data-title=\"Validation sequence\">Preview</button><a href=\"https://drive.google.com/file/d/1rluyqwBlo804oyAShN5Zd5KgwlWO9dmH/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1rluyqwBlo804oyAShN5Zd5KgwlWO9dmH\" data-title=\"Validation sequence\"><img src=\"https://lh3.googleusercontent.com/d/1rluyqwBlo804oyAShN5Zd5KgwlWO9dmH=w1600\" alt=\"Validation sequence\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">A proposed learning sequence that can lead to continuing, simplifying or stopping the model.</figcaption>\n</figure>\n\nStart with real behavior. I would begin with 6–10 fan interviews and artifact walkthroughs, then task-based Home, Hall and My Space usability [R19, R25]. A closed test with 20–50 participants would use fictional or original context, without commerce, paid membership or real-artist assets.\n\nObserve and interpret. Active and quiet periods would reveal read-only returns, repeated rooms and recognition alongside contributions. Operator interviews and qualitative follow-up would help distinguish meaningful return from novelty or reminders [R20]. In parallel, I would map one prospective official service before accepting a real promise.\n\nDecision. No VieWorld interviews, live analytics or retention results are reported here. The contribution is an authored world with an inspectable slice and explicit operating boundaries. The next question is whether that world becomes worth returning to. I designed the world first, then built an executable slice of it.\n\n## Selected references and evidence\n\nReference identifiers follow the full case. Titles below link to the cited sources.\n\n[R1] [The Psychology of Fandom and Parasocial Experience. Oxford Handbook of Media Psychology (2025).](https://academic.oup.com/edited-volume/60671/chapter-abstract/526628678)\n\n[R2] [The Social and the Spiritual in Fandom and Parasocial Relationships. Oxford University Press (2024).](https://academic.oup.com/book/60008/chapter-abstract/513491905)\n\n[R3] [Groene and Hettinger. Are you “fan” enough? The role of identity in media fandoms (2016).](https://doi.org/10.1037/ppm0000080)\n\n[R4] [The Psychology of Online Lurking. Oxford Handbook of Cyberpsychology (2018).](https://academic.oup.com/edited-volume/41352/chapter-abstract/352514414)\n\n[R5] [Sun, Rau and Ma. Understanding lurkers in online communities: A literature review (2014).](https://www.sciencedirect.com/science/article/pii/S0747563214003008)\n\n[R6] [Ghosh and Aragon. Leveraging community support and platform affordances on a path to more active participation (2024).](https://journal.transformativeworks.org/index.php/twc/article/view/2477)\n\n[R7] [Blanchard. Testing a model of sense of virtual community (2008).](https://www.sciencedirect.com/science/article/abs/pii/S0747563207001562)\n\n[R8] [Abfalter, Zaglia and Mueller. Sense of virtual community: A follow up on its measurement (2012).](https://www.sciencedirect.com/science/article/pii/S0747563211002184)\n\n[R9] [Jenkins et al. Confronting the Challenges of Participatory Culture. MIT Press.](https://mitpress.mit.edu/9780262513623/confronting-the-challenges-of-participatory-culture/)\n\n[R10] [MIT OpenCourseWare. Fans and Fan Cultures instructor insights (2024 course).](https://ocw.mit.edu/courses/cms-621-fans-and-fan-cultures-fall-2024/pages/instructor-insights/)\n\n[R11] [Koefler et al. Let the Music Play: Live Music Fosters Collective Effervescence and Leads to Lasting Positive Outcomes.](https://pubmed.ncbi.nlm.nih.gov/39417534/)\n\n[R13] [Zheng. I’m Passive yet devoted: reconstructing fan identity and hierarchy in the transcultural landscape (2025).](https://www.nature.com/articles/s41599-025-04798-9)\n\n[R16] [Discord. Server Guide FAQ.](https://support.discord.com/hc/en-us/articles/13497665141655-Server-Guide-FAQ)\n\n[R19] [Nielsen Norman Group. Contextual Inquiry.](https://www.nngroup.com/articles/contextual-inquiry/)\n\n[R20] [Nielsen Norman Group. Triangulation: Get Better Research Results by Using Multiple UX Methods.](https://www.nngroup.com/articles/triangulation-better-research-results-using-multiple-ux-methods/)\n\n[R25] [GOV.UK Service Manual. Plan user research for your service.](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service)\n\n[R26] [Nielsen Norman Group. Service Blueprints: Definition.](https://www.nngroup.com/articles/service-blueprints-definition/)\n\n[R29] [Odom, Zimmerman and Forlizzi. Teenagers and Their Virtual Possessions: Design Opportunities and Issues. CHI (2011).](https://doi.org/10.1145/1978942.1979161)\n\n[R30] [Adriaansen and Smit. Collective memory and social media. Current Opinion in Psychology 65, 102077 (2025).](https://doi.org/10.1016/j.copsyc.2025.102077)\n\n[R35] [Adner. Ecosystem as Structure: An Actionable Construct for Strategy. Journal of Management 43(1), 39–58 (2017).](https://doi.org/10.1177/0149206316678451)\n\n[R36] [Jacobides et al. Towards a theory of ecosystems. Strategic Management Journal 39, 2255–2276 (2018).](https://doi.org/10.1002/smj.2904)\n\nResearch scope. R29 is a qualitative study of 21 U.S. teenagers; R30 is a narrative review. R35 and R36 are conceptual ecosystem lenses. None validates demand, belonging or retention for VieWorld.\n\nCanonical case evidence. The latest VieWorld Ecosystem Build Final Presentation, its original screenshots and case visuals, and the Final Truth Audit dated 4 October 2026 form the source set. Engineering results are reported from that audit, not freshly rerun checks. The full case retains the complete bibliography and detailed evidence boundaries.\n\n## More views of the build\n\n\n\n<details class=\"f-details\"><summary>Explore remaining diagrams, product views and identity artwork</summary><div class=\"f-details-content\">\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">02 explore worlds</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1H8g4UOcMo4FD-_5HCYmTyADztCY4jshg\" data-title=\"02 explore worlds\">Preview</button><a href=\"https://drive.google.com/file/d/1H8g4UOcMo4FD-_5HCYmTyADztCY4jshg/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1H8g4UOcMo4FD-_5HCYmTyADztCY4jshg\" data-title=\"02 explore worlds\"><img src=\"https://lh3.googleusercontent.com/d/1H8g4UOcMo4FD-_5HCYmTyADztCY4jshg=w1600\" alt=\"02 explore worlds\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">09 viecollect product detail</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1C_hII1kj6eMzpjiFcCsbFUVSb8W81AXK\" data-title=\"09 viecollect product detail\">Preview</button><a href=\"https://drive.google.com/file/d/1C_hII1kj6eMzpjiFcCsbFUVSb8W81AXK/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1C_hII1kj6eMzpjiFcCsbFUVSb8W81AXK\" data-title=\"09 viecollect product detail\"><img src=\"https://lh3.googleusercontent.com/d/1C_hII1kj6eMzpjiFcCsbFUVSb8W81AXK=w1600\" alt=\"09 viecollect product detail\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">11 viecollect order digital</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1abYFp-VB9pd1bBt4dwEF3hiCS80lkwxQ\" data-title=\"11 viecollect order digital\">Preview</button><a href=\"https://drive.google.com/file/d/1abYFp-VB9pd1bBt4dwEF3hiCS80lkwxQ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1abYFp-VB9pd1bBt4dwEF3hiCS80lkwxQ\" data-title=\"11 viecollect order digital\"><img src=\"https://lh3.googleusercontent.com/d/1abYFp-VB9pd1bBt4dwEF3hiCS80lkwxQ=w1600\" alt=\"11 viecollect order digital\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">12 viecollect order physical</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1gVRNxtG8b6TAEKjAas-JfKKyYf5w4Dv6\" data-title=\"12 viecollect order physical\">Preview</button><a href=\"https://drive.google.com/file/d/1gVRNxtG8b6TAEKjAas-JfKKyYf5w4Dv6/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1gVRNxtG8b6TAEKjAas-JfKKyYf5w4Dv6\" data-title=\"12 viecollect order physical\"><img src=\"https://lh3.googleusercontent.com/d/1gVRNxtG8b6TAEKjAas-JfKKyYf5w4Dv6=w1600\" alt=\"12 viecollect order physical\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">13 avatar editor</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1pfYpC6MXZ5rP5UQ3K0VXu9wNz_AHivBb\" data-title=\"13 avatar editor\">Preview</button><a href=\"https://drive.google.com/file/d/1pfYpC6MXZ5rP5UQ3K0VXu9wNz_AHivBb/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1pfYpC6MXZ5rP5UQ3K0VXu9wNz_AHivBb\" data-title=\"13 avatar editor\"><img src=\"https://lh3.googleusercontent.com/d/1pfYpC6MXZ5rP5UQ3K0VXu9wNz_AHivBb=w1600\" alt=\"13 avatar editor\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">14 my space edit mode</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1i_Es9vHWhgYBtm-_lFkgaQv3krFllRbV\" data-title=\"14 my space edit mode\">Preview</button><a href=\"https://drive.google.com/file/d/1i_Es9vHWhgYBtm-_lFkgaQv3krFllRbV/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1i_Es9vHWhgYBtm-_lFkgaQv3krFllRbV\" data-title=\"14 my space edit mode\"><img src=\"https://lh3.googleusercontent.com/d/1i_Es9vHWhgYBtm-_lFkgaQv3krFllRbV=w1600\" alt=\"14 my space edit mode\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">crop 01 explore world context</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"14_yHWSPVH8xzGAeHzN0NWM-5joLwvClS\" data-title=\"crop 01 explore world context\">Preview</button><a href=\"https://drive.google.com/file/d/14_yHWSPVH8xzGAeHzN0NWM-5joLwvClS/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"14_yHWSPVH8xzGAeHzN0NWM-5joLwvClS\" data-title=\"crop 01 explore world context\"><img src=\"https://lh3.googleusercontent.com/d/14_yHWSPVH8xzGAeHzN0NWM-5joLwvClS=w1600\" alt=\"crop 01 explore world context\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">crop 02 hall room list</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1wzekrAHqQQZifIhqApjjsrz6NUmEMfgF\" data-title=\"crop 02 hall room list\">Preview</button><a href=\"https://drive.google.com/file/d/1wzekrAHqQQZifIhqApjjsrz6NUmEMfgF/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1wzekrAHqQQZifIhqApjjsrz6NUmEMfgF\" data-title=\"crop 02 hall room list\"><img src=\"https://lh3.googleusercontent.com/d/1wzekrAHqQQZifIhqApjjsrz6NUmEMfgF=w1600\" alt=\"crop 02 hall room list\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">crop 03 my space surfaces</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1H1BG3hWJiUnzbMOqSjcJnu4QyZzoTiyQ\" data-title=\"crop 03 my space surfaces\">Preview</button><a href=\"https://drive.google.com/file/d/1H1BG3hWJiUnzbMOqSjcJnu4QyZzoTiyQ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1H1BG3hWJiUnzbMOqSjcJnu4QyZzoTiyQ\" data-title=\"crop 03 my space surfaces\"><img src=\"https://lh3.googleusercontent.com/d/1H1BG3hWJiUnzbMOqSjcJnu4QyZzoTiyQ=w1600\" alt=\"crop 03 my space surfaces\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">crop 04 product form choice</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"13atYHb3W28y9ZthiO7JmvQhTSy9u1_yu\" data-title=\"crop 04 product form choice\">Preview</button><a href=\"https://drive.google.com/file/d/13atYHb3W28y9ZthiO7JmvQhTSy9u1_yu/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"13atYHb3W28y9ZthiO7JmvQhTSy9u1_yu\" data-title=\"crop 04 product form choice\"><img src=\"https://lh3.googleusercontent.com/d/13atYHb3W28y9ZthiO7JmvQhTSy9u1_yu=w1600\" alt=\"crop 04 product form choice\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">crop 05 order state comparison</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1sGxlJ07X5KVq5ouVQeJOuY-SBBDQSnkq\" data-title=\"crop 05 order state comparison\">Preview</button><a href=\"https://drive.google.com/file/d/1sGxlJ07X5KVq5ouVQeJOuY-SBBDQSnkq/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1sGxlJ07X5KVq5ouVQeJOuY-SBBDQSnkq\" data-title=\"crop 05 order state comparison\"><img src=\"https://lh3.googleusercontent.com/d/1sGxlJ07X5KVq5ouVQeJOuY-SBBDQSnkq=w1600\" alt=\"crop 05 order state comparison\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">crop 06 avatar expression</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1wD3WYJGs4hXKsSOiCdVWs7T9P-GYeH45\" data-title=\"crop 06 avatar expression\">Preview</button><a href=\"https://drive.google.com/file/d/1wD3WYJGs4hXKsSOiCdVWs7T9P-GYeH45/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1wD3WYJGs4hXKsSOiCdVWs7T9P-GYeH45\" data-title=\"crop 06 avatar expression\"><img src=\"https://lh3.googleusercontent.com/d/1wD3WYJGs4hXKsSOiCdVWs7T9P-GYeH45=w1600\" alt=\"crop 06 avatar expression\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">VieWorld Board</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1FzpaRg0HwPOUcOZ-Z2yIC_ghC03RhI9U\" data-title=\"VieWorld Board\">Preview</button><a href=\"https://drive.google.com/file/d/1FzpaRg0HwPOUcOZ-Z2yIC_ghC03RhI9U/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1FzpaRg0HwPOUcOZ-Z2yIC_ghC03RhI9U\" data-title=\"VieWorld Board\"><img src=\"https://lh3.googleusercontent.com/d/1FzpaRg0HwPOUcOZ-Z2yIC_ghC03RhI9U=w1600\" alt=\"VieWorld Board\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">VieWorld Logo</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1xCXWkhVSyIPv1mK5JTaCktDO_z2wlBeF\" data-title=\"VieWorld Logo\">Preview</button><a href=\"https://drive.google.com/file/d/1xCXWkhVSyIPv1mK5JTaCktDO_z2wlBeF/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1xCXWkhVSyIPv1mK5JTaCktDO_z2wlBeF\" data-title=\"VieWorld Logo\"><img src=\"https://lh3.googleusercontent.com/d/1xCXWkhVSyIPv1mK5JTaCktDO_z2wlBeF=w1600\" alt=\"VieWorld Logo\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 02 core thesis</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1bqm23NK7kAtkW7XgWfw_TeEz67nDRxtQ\" data-title=\"visual 02 core thesis\">Preview</button><a href=\"https://drive.google.com/file/d/1bqm23NK7kAtkW7XgWfw_TeEz67nDRxtQ/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1bqm23NK7kAtkW7XgWfw_TeEz67nDRxtQ\" data-title=\"visual 02 core thesis\"><img src=\"https://lh3.googleusercontent.com/d/1bqm23NK7kAtkW7XgWfw_TeEz67nDRxtQ=w1600\" alt=\"visual 02 core thesis\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 03 world formation</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1q1xZ3xyalbE_HHXdf_AkoLv8yi5FxI4M\" data-title=\"visual 03 world formation\">Preview</button><a href=\"https://drive.google.com/file/d/1q1xZ3xyalbE_HHXdf_AkoLv8yi5FxI4M/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1q1xZ3xyalbE_HHXdf_AkoLv8yi5FxI4M\" data-title=\"visual 03 world formation\"><img src=\"https://lh3.googleusercontent.com/d/1q1xZ3xyalbE_HHXdf_AkoLv8yi5FxI4M=w1600\" alt=\"visual 03 world formation\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 05 fan journey</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1DftpugBRDfQRnVCziuE_GK6In-oVMkP6\" data-title=\"visual 05 fan journey\">Preview</button><a href=\"https://drive.google.com/file/d/1DftpugBRDfQRnVCziuE_GK6In-oVMkP6/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1DftpugBRDfQRnVCziuE_GK6In-oVMkP6\" data-title=\"visual 05 fan journey\"><img src=\"https://lh3.googleusercontent.com/d/1DftpugBRDfQRnVCziuE_GK6In-oVMkP6=w1600\" alt=\"visual 05 fan journey\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 07 hall lifecycle</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1W7_B_KKXJtXZGjAzmlp7JcCN8VgwTUec\" data-title=\"visual 07 hall lifecycle\">Preview</button><a href=\"https://drive.google.com/file/d/1W7_B_KKXJtXZGjAzmlp7JcCN8VgwTUec/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1W7_B_KKXJtXZGjAzmlp7JcCN8VgwTUec\" data-title=\"visual 07 hall lifecycle\"><img src=\"https://lh3.googleusercontent.com/d/1W7_B_KKXJtXZGjAzmlp7JcCN8VgwTUec=w1600\" alt=\"visual 07 hall lifecycle\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 08 internal topology</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1RwKNEU3-wyF3TBZ7bAC6mKDkeuXEpmDe\" data-title=\"visual 08 internal topology\">Preview</button><a href=\"https://drive.google.com/file/d/1RwKNEU3-wyF3TBZ7bAC6mKDkeuXEpmDe/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1RwKNEU3-wyF3TBZ7bAC6mKDkeuXEpmDe\" data-title=\"visual 08 internal topology\"><img src=\"https://lh3.googleusercontent.com/d/1RwKNEU3-wyF3TBZ7bAC6mKDkeuXEpmDe=w1600\" alt=\"visual 08 internal topology\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 10 responsibility boundaries</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1OR91bY91Mjm7jQKBk_XOecGs5Aki3UBj\" data-title=\"visual 10 responsibility boundaries\">Preview</button><a href=\"https://drive.google.com/file/d/1OR91bY91Mjm7jQKBk_XOecGs5Aki3UBj/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1OR91bY91Mjm7jQKBk_XOecGs5Aki3UBj\" data-title=\"visual 10 responsibility boundaries\"><img src=\"https://lh3.googleusercontent.com/d/1OR91bY91Mjm7jQKBk_XOecGs5Aki3UBj=w1600\" alt=\"visual 10 responsibility boundaries\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n<figure class=\"f-diagram-card\">\n  <div class=\"f-diagram-header\"><span class=\"f-diagram-title\">visual 14 future trust flows</span><div class=\"f-diagram-header-actions\"><button type=\"button\" class=\"f-diagram-open-btn f-asset-trigger\" data-type=\"image\" data-driveid=\"1TqYXA0vZJ6blZiRWU7f7wB2PQKSI0LJP\" data-title=\"visual 14 future trust flows\">Preview</button><a href=\"https://drive.google.com/file/d/1TqYXA0vZJ6blZiRWU7f7wB2PQKSI0LJP/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-diagram-ext-btn\" aria-label=\"Open in new tab\">↗</a></div></div>\n  <div class=\"f-diagram-body f-asset-trigger\" data-type=\"image\" data-driveid=\"1TqYXA0vZJ6blZiRWU7f7wB2PQKSI0LJP\" data-title=\"visual 14 future trust flows\"><img src=\"https://lh3.googleusercontent.com/d/1TqYXA0vZJ6blZiRWU7f7wB2PQKSI0LJP=w1600\" alt=\"visual 14 future trust flows\" loading=\"lazy\"><div class=\"f-diagram-zoom-hint\">Click to enlarge</div></div>\n  <figcaption class=\"f-diagram-caption\">Original VieWorld source visual. Artist identities, orders and community content are demo fixtures.</figcaption>\n</figure>\n\n</div></details>\n\n## Original editable presentations\n\n<div class=\"f-asset-bar\"><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"document\" data-driveid=\"1KVLjLd1JUT6hhMgrCmbd5QT04vYK3Rde\" data-title=\"Portfolio source (DOCX)\">Portfolio source (DOCX)</button><a href=\"https://drive.google.com/file/d/1KVLjLd1JUT6hhMgrCmbd5QT04vYK3Rde/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" aria-label=\"Open in new tab\">↗</a><button type=\"button\" class=\"f-asset-btn primary f-asset-trigger\" data-type=\"document\" data-driveid=\"1sbb2yKp69NQxEaXIX0143NRkIchtyMmd\" data-title=\"Ecosystem source (DOCX)\">Ecosystem source (DOCX)</button><a href=\"https://drive.google.com/file/d/1sbb2yKp69NQxEaXIX0143NRkIchtyMmd/view\" target=\"_blank\" rel=\"noreferrer\" class=\"f-asset-ext-btn\" aria-label=\"Open in new tab\">↗</a></div>\n\n## Related work\n\n[VieSHOP: Fan-Centred Merchandise System](/work/vieshop-fan-centred-merchandise-system) supplied an earlier merchandise question. [Artist Fandom Page & Fan Dashboard](/work/artist-fandom-page) remains a separate concept. [Who Owns the Fan Promise?](/work/datvietvac-who-owns-the-fan-promise) examines accountability after a transaction is accepted.\n"
};

const totalWorks = finalWorkLibrary.length;
const totalModes = finalModes.length;
const totalArtifacts = Object.values(caseDocuments).reduce((acc, doc) => acc + (doc.assets?.length || 0), 0);

function getReadingStats(text) {
  if (!text) return { words: 0, minutes: 1, time: "1 min read" };
  const clean = String(text).replace(/<[^>]*>/g, ' ').replace(/https?:\/\/\S+/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return { words, minutes, time: `${minutes} min read` };
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const NOTION_URL_MAP = {
  "elfie": "/work/elfie-trust-safe-activation",
  "vinamilk": "/work/vinamilk-trusted-nutrition",
  "creator-platform": "/work/creator-platform-operating-model",
  "artist-fandom-page": "/work/artist-fandom-page",
  "post-signing": "/work/post-signing-artist-label-operations",
  "shopee": "/work/shopee-account-restrictions",
  "fanme": "/work/fanme-controlled-growth",
  "datvietvac-ownership": "/work/datvietvac-ownership-belonging",
  "datvietvac-fandom-cards": "/work/datvietvac-fandom-cards",
  "explainable-trust": "/work/explainable-trust",
  "vietnam-diamond": "/work/vietnam-diamond-market-crisis",
  "diamond-trust": "/work/diamond-trust-chain-collapse",
  "adobe": "/work/adobe-account-restriction",
  "ai-judgment": "/work/ai-judgment-decisions",
  "ai-apprenticeship": "/work/ai-apprenticeship",
  "zalopay": "/work/zalopay-smes-when-paid-not-done",
  "metub": "/work/metub-creator-economy",
  "momo": "/work/momo-ai-paylater",
  "zalo-scam": "/work/zalo-scam-emergency-mode",
  "pathway-lens": "/work/pathway-lens-operational-cycles",
  "human-ai-system": "/work/pathway-lens-operational-cycles",
    "vieworld": "/work/vieworld",
    "vieshop": "/work/vieshop-fan-centred-merchandise-system",
  "fan-promise": "/work/datvietvac-who-owns-the-fan-promise",
  "work-library": "/work"
};

function formatInlineMarkdown(text) {
  if (!text) return "";

  // Keep trusted HTML attributes, URLs, and literal code out of emphasis parsing.
  const protectedParts = [];
  const protect = value => {
    const token = `\u0000${protectedParts.length}\u0000`;
    protectedParts.push(value);
    return token;
  };
  text = text.replace(/<[^>]+>/g, protect);

  // 1. Inline code: `code`
  text = text.replace(/`([^`]+)`/g, (_, code) => protect(`<code class="f-code">${escapeHtml(code)}</code>`));

  // 4. Links: [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
    let targetUrl = url.trim();
    
    // Check if it's a Notion URL that maps to an internal work
    if (/^https?:\/\/[^/]*\bnotion\.(so|site)\//i.test(targetUrl)) {
      for (const [key, internalPath] of Object.entries(NOTION_URL_MAP)) {
        if (targetUrl.toLowerCase().includes(key)) {
          targetUrl = internalPath;
          break;
        }
      }
    }

    if (linkText.toLowerCase().includes("work library") || targetUrl.includes("work-library")) {
      targetUrl = "/work";
    }
    if (linkText.toLowerCase().includes("portfolio home") || targetUrl.includes("portfolio-home")) {
      targetUrl = "/";
    }

    const isInternal = targetUrl.startsWith("/") || targetUrl.startsWith("#");
    const formattedLabel = formatInlineMarkdown(linkText);
    if (isInternal) {
      return protect(`<a href="${escapeHtml(targetUrl)}" class="f-inline-link">${formattedLabel}</a>`);
    } else {
      return protect(`<a href="${escapeHtml(targetUrl)}" target="_blank" rel="noreferrer" class="f-inline-link">${formattedLabel} ↗</a>`);
    }
  });

  // Emphasis applies only after HTML, code, and links have been protected.
  text = text.replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__([\s\S]*?)__/g, '<strong>$1</strong>');
  text = text.replace(/(^|[^\*])\*([^\*]+)\*([^\*]|$)/g, '$1<em>$2</em>$3');
  text = text.replace(/(^|[^_])_([^_]+)_([^_]|$)/g, '$1<em>$2</em>$3');

  // Parts may contain earlier tokens, for example HTML inside a link label.
  for (let i = protectedParts.length - 1; i >= 0; i--) {
    text = text.split(`\u0000${i}\u0000`).join(protectedParts[i]);
  }
  return text;
}

function editorialSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function renderMarkdownTable(tableText) {
  const lines = tableText.trim().split('\n');
  if (lines.length < 2) return tableText;

  const headerLine = lines[0].trim();
  const delimiterLine = lines[1].trim();

  if (!headerLine.startsWith('|') || !delimiterLine.startsWith('|') || !delimiterLine.includes('---')) {
    return tableText;
  }

  const parseRowCells = (lineStr) => {
    const trimmed = lineStr.trim().replace(/^\|/, '').replace(/\|$/, '');
    return trimmed.split('|').map(c => c.trim().replace(/\n/g, '<br>'));
  };

  const headerCells = parseRowCells(headerLine);
  
  const rowStrings = [];
  let currentRow = '';

  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|')) {
      if (currentRow) {
        rowStrings.push(currentRow);
      }
      currentRow = line;
    } else {
      currentRow += '\n' + line;
    }
  }
  if (currentRow) {
    rowStrings.push(currentRow);
  }

  let html = '<div class="f-table-wrap"><table class="f-table"><thead><tr>';
  headerCells.forEach(cell => {
    html += `<th>${formatInlineMarkdown(cell)}</th>`;
  });
  html += '</tr></thead><tbody>';

  rowStrings.forEach(r => {
    const cells = parseRowCells(r);
    html += '<tr>';
    for (let c = 0; c < headerCells.length; c++) {
      const cellContent = cells[c] || '';
      html += `<td>${formatInlineMarkdown(cellContent)}</td>`;
    }
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  return html;
}

function convertMarkdownTables(text) {
  const lines = text.split('\n');
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith('|') && i + 1 < lines.length && lines[i + 1].trim().startsWith('|') && lines[i + 1].includes('---')) {
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length) {
        const cur = lines[i];
        const curTrim = cur.trim();
        if (curTrim === '' || curTrim.startsWith('#') || curTrim.startsWith('<') || curTrim === '---' || curTrim === '***' || curTrim === '___') {
          break;
        }
        tableLines.push(cur);
        i++;
      }
      output.push('\n\n' + renderMarkdownTable(tableLines.join('\n')) + '\n\n');
    } else {
      output.push(line);
      i++;
    }
  }

  return output.join('\n');
}


const KNOWN_ASSET_TITLES = {
  "vinamilk paper 1 trusted nutrition product service discovery": "Vinamilk Paper 1: Trusted Nutrition Product-Service Discovery",
  "vinamilk paper 2 everyday milk delivery operations scale": "Vinamilk Paper 2: Everyday Milk Delivery Operations & Scale",
  "vinamilk paper 3 beyond the market capability allocation governance": "Vinamilk Paper 3: Beyond-the-Market Capability Allocation Governance",
  "MFan Platform Fragmentation & Trust Chain Integration": "MFan Platform Fragmentation & Trust Chain Integration",
  "MFan Platform Fragmentation  Trust Chain Integration": "MFan Platform Fragmentation & Trust Chain Integration",
  "Pham Thanh Phu Elfie Product Case Trust Safe Activation v4": "Elfie Product Case: Trust-Safe Activation (V4)",
  "Post-Signing Artist Label Operations Case Study": "Post-Signing Artist / Label Operations Case Study",
  "Shopee Account Restriction Resolution Portfolio Final 2026-08-05": "Shopee Account Restriction Resolution Case (Aug 2026)",
  "FanMe Controlled Growth  Native Editable Final": "FanMe Controlled Growth: Native Operating Framework",
  "FanMe Controlled Growth Native Editable Final": "FanMe Controlled Growth: Native Operating Framework",
  "FanMe Controlled Growth Pilot": "FanMe Controlled Growth Pilot Monograph",
  "FanMe Controlled Growth — Native Editable Final": "FanMe Controlled Growth: Native Operating Framework",
  "DatVietVAC Ownership Belonging Merchandise Growth Case Study": "DatVietVAC: Ownership & Belonging Merchandise Growth",
  "DatVietVAC Fandom Cards Case Study": "DatVietVAC Fandom Cards: Collectibles Product Line Case",
  "VieSHOP — Fan-Centred Merchandise System": "VieSHOP: Fan-Centred Merchandise System Case",
  "DatVietVAC: Who Owns the Fan Promise? — Full Case": "DatVietVAC: Who Owns the Fan Promise? (Full Case)",
  "DatVietVAC Evidence Pack V1.1": "DatVietVAC Evidence Pack (V1.1 Forensic Audit)",
  "Vietnam Diamond Market Crisis Case Study 2 Full Paper": "Vietnam’s 2026 Diamond-Market Crisis (Forensic Paper)",
  "Adobe Account Restriction Comparative Case Study 2026-08-07": "Adobe Account Restriction: Comparative Case Study"
};

function formatAssetTitle(title) {
  if (!title) return "Document Asset";
  let clean = String(title)
    .replace(/[📄👁️↗]/g, '')
    .replace(/^xem\s+trước:\s*/gi, '')
    .replace(/\.(pdf|docx?|pptx?|xlsx?|png|jpe?g|webp)\b/gi, '')
    .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
    .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
    .replace(/_+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (KNOWN_ASSET_TITLES[clean]) return KNOWN_ASSET_TITLES[clean];

  // Capitalize if fully lowercase
  if (clean === clean.toLowerCase() && clean.length > 2) {
    clean = clean.replace(/\b[a-z]/g, ch => ch.toUpperCase());
  }

  return clean;
}

function renderEditorialNotion(markdown) {
  if (!markdown) return "";

  // Normalize newlines and clean stray .png)
  let text = markdown.replace(/\r\n/g, '\n').replace(/\.png\)\s*/g, '');

  // 1. Asset Bar & standalone buttons — wrap each btn+ext-btn pair into a .f-asset-btn-group and clean labels
  text = text.replace(/<button([^>]*class="[^"]*f-asset-trigger[^"]*"[^>]*)>([\s\S]*?)<\/button>/g, (match, attrs, label) => {
    if (!/\bf-asset-btn\b/.test(attrs)) return match;
    const titleMatch = attrs.match(/data-title="([^"]*)"/);
    const rawTitle = titleMatch ? titleMatch[1] : label;
    const cleanTitle = formatAssetTitle(rawTitle);
    let newAttrs = attrs;
    if (titleMatch) {
      newAttrs = newAttrs.replace(/data-title="[^"]*"/, `data-title="${cleanTitle}"`);
    } else {
      newAttrs += ` data-title="${cleanTitle}"`;
    }
    return `<button${newAttrs}>📄 ${cleanTitle}</button>`;
  });

  // Group adjacent button + ext-btn link into a single pill group
  text = text.replace(/(<button(?=[^>]*class="[^"]*\bf-asset-btn\b)[^>]*class="[^"]*f-asset-trigger[^"]*"[^>]*>(?:(?!<\/?button\b)[\s\S])*<\/button>)\s*(<a[^>]*class="[^"]*f-asset-ext-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/g, '<div class="f-asset-btn-group">$1$2</div>');

  // Wrap asset-bar container if present
  text = text.replace(/<asset-bar>([\s\S]*?)<\/asset-bar>/g, (match, inner) => {
    return `\n\n<div class="f-asset-bar">${inner.trim()}</div>\n\n`;
  });

  // 2. Diagram Cards — clean minimalist image card
  text = text.replace(/<diagram-card\s+title="([^"]*)"\s+driveid="([^"]*)"\s+caption="([^"]*)"><\/diagram-card>/g, (match, title, driveId, caption) => {
    const cleanTitle = title.replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/_/g, ' ');
    const isSameCaption = caption.replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/_/g, ' ') === cleanTitle;
    const cleanCaption = (!caption || isSameCaption) ? '' : caption;
    const imgSrc = `https://lh3.googleusercontent.com/d/${driveId}=w1600`;

    return `\n\n<figure class="f-diagram-card">
      <div class="f-diagram-body f-asset-trigger" data-type="image" data-driveid="${driveId}" data-title="${cleanTitle}" title="Click to enlarge">
        <img src="${imgSrc}" alt="${cleanTitle}" loading="lazy">
      </div>
      ${cleanCaption ? `<figcaption class="f-diagram-caption">${cleanCaption}</figcaption>` : ''}
    </figure>\n\n`;
  });

  // 3. Aside / Callouts
  text = text.replace(/<aside>([\s\S]*?)<\/aside>/g, (match, inner) => {
    const formatted = formatInlineMarkdown(inner.trim());
    return `\n\n<div class="f-callout">${formatted}</div>\n\n`;
  });

  // 4. Details
  text = text.replace(/<details><summary>(.*?)<\/summary>([\s\S]*?)<\/details>/g, (match, summary, inner) => {
    return `\n\n<details class="f-details"><summary>${formatInlineMarkdown(summary)}</summary><div class="f-details-content">${inner}</div></details>\n\n`;
  });

  // 5. Robust Markdown Table Pass
  text = convertMarkdownTables(text);

  // 6. Ensure blank lines around headings, hr
  text = text.replace(/^(#{1,4}\s+[^\n]+)/gm, '\n\n$1\n\n');
  text = text.replace(/^(---|\*\*\*|___)$/gm, '\n\n$1\n\n');

  // Split into chunks by 2 or more newlines
  const rawBlocks = text.split(/\n{2,}/);
  const renderedBlocks = [];

  for (let rawBlock of rawBlocks) {
    let b = rawBlock.trim();
    if (!b) continue;

    // Check if it's already an HTML block element
    if (b.startsWith('<div class="f-asset-bar"') || 
        b.startsWith('<figure class="f-diagram-card"') || 
        b.startsWith('<div class="f-callout"') || 
        b.startsWith('<div class="f-table-wrap"') ||
        b.startsWith('<details class="f-details"') ||
        b.startsWith('</div></details>')) {
      renderedBlocks.push(b);
      continue;
    }

    // Horizontal Rule
    if (b === '---' || b === '***' || b === '___') {
      renderedBlocks.push('<hr class="f-hr">');
      continue;
    }

    // Code block
    if (b.startsWith('```') && b.endsWith('```')) {
      const codeLines = b.replace(/^```[^\n]*\n?/, '').replace(/\n?```$/, '');
      renderedBlocks.push(`<pre class="f-code-block"><code>${codeLines}</code></pre>`);
      continue;
    }

    // Headings
    const headingMatch = b.match(/^(#{1,4})\s+([\s\S]+)$/);
    if (headingMatch && !headingMatch[2].includes('\n')) {
      const level = headingMatch[1].length;
      const titleText = headingMatch[2].trim();
      const id = editorialSlug(titleText);
      const formattedTitle = formatInlineMarkdown(titleText);
      renderedBlocks.push(`<h${level} id="${id}"><a class="f-anchor" href="#${id}">#</a>${formattedTitle}</h${level}>`);
      continue;
    }

    // Blockquote
    if (b.startsWith('>')) {
      const quoteLines = b.split('\n').map(l => l.replace(/^>\s*/, '').trim()).filter(l => l.length > 0);
      const quoteContent = quoteLines.map(l => formatInlineMarkdown(l)).join('<br>');
      renderedBlocks.push(`<blockquote>${quoteContent}</blockquote>`);
      continue;
    }

    // Unordered List
    const lines = b.split('\n');
    if (lines.every(l => l.trim().startsWith('- ') || l.trim().startsWith('* '))) {
      const items = lines.map(l => {
        const itemText = l.trim().replace(/^[\*\-]\s+/, '');
        return `<li>${formatInlineMarkdown(itemText)}</li>`;
      });
      renderedBlocks.push(`<ul class="f-list">\n${items.join('\n')}\n</ul>`);
      continue;
    }

    // Ordered List
    if (lines.every(l => /^\d+\.\s+/.test(l.trim()))) {
      const items = lines.map(l => {
        const itemText = l.trim().replace(/^\d+\.\s+/, '');
        return `<li>${formatInlineMarkdown(itemText)}</li>`;
      });
      renderedBlocks.push(`<ol class="f-numbered-list">\n${items.join('\n')}\n</ol>`);
      continue;
    }

    // Mixed lines: check if first line is heading
    if (b.startsWith('#')) {
      const firstLineBreak = b.indexOf('\n');
      if (firstLineBreak !== -1) {
        const firstLine = b.substring(0, firstLineBreak).trim();
        const rest = b.substring(firstLineBreak + 1).trim();
        const hMatch = firstLine.match(/^(#{1,4})\s+(.+)$/);
        if (hMatch) {
          const level = hMatch[1].length;
          const titleText = hMatch[2].trim();
          const id = editorialSlug(titleText);
          const formattedTitle = formatInlineMarkdown(titleText);
          renderedBlocks.push(`<h${level} id="${id}"><a class="f-anchor" href="#${id}">#</a>${formattedTitle}</h${level}>`);
          if (rest) {
            renderedBlocks.push(`<p>${formatInlineMarkdown(rest)}</p>`);
          }
          continue;
        }
      }
    }

    // Regular Paragraph
    renderedBlocks.push(`<p>${formatInlineMarkdown(b)}</p>`);
  }

  return renderedBlocks.join('\n\n');
}


function layoutHead(title, description, nonce, meta = {}) {
  const currentPath = meta.path || "/";
  const canonicalUrl = `https://phamthanhphu.io.vn${currentPath === "/" ? "" : currentPath}`;
  const ogType = meta.ogType || "website";
  const ogImage = meta.ogImage || "https://phamthanhphu.io.vn/assets/phu-portrait.webp";

  // Dynamic JSON-LD Schema
  let schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Phạm Thanh Phú — Work & Research",
    "url": "https://phamthanhphu.io.vn",
    "author": {
      "@type": "Person",
      "name": "Phạm Thanh Phú",
      "jobTitle": "Business & Product Operations / Systems Design",
      "sameAs": [
        "https://www.linkedin.com/in/yunero1206/",
        "/explainable/"
      ]
    },
    "description": description
  };

  if (meta.ogType === "article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": title,
      "description": description,
      "url": canonicalUrl,
      "author": {
        "@type": "Person",
        "name": "Phạm Thanh Phú"
      },
      "inLanguage": "en",
      "keywords": meta.keywords || ""
    };
  } else if (currentPath === "/about") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Phạm Thanh Phú",
        "jobTitle": "Business & Product Operations",
        "worksFor": {
          "@type": "Organization",
          "name": "Phong Phu Stationery"
        },
        "alumniOf": [
          { "@type": "CollegeOrUniversity", "name": "Ho Chi Minh City University of Law" },
          { "@type": "EducationalOrganization", "name": "Judicial Academy" }
        ],
        "knowsAbout": ["Business Operations", "Product Strategy", "AI Decision Systems", "Evidence-First Casework"],
        "url": canonicalUrl
      }
    };
  }

  return `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#14222c" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0e161c" media="(prefers-color-scheme: dark)">
    <meta name="robots" content="index, follow">
    <title>${escapeHtml(title)}</title>

    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" type="image/svg+xml" href="${SITE_FAVICON_DATA_URL}">
    <link rel="apple-touch-icon" href="/assets/phu-portrait.webp">

    <!-- Open Graph / Facebook / LinkedIn / Zalo -->
    <meta property="og:site_name" content="Phạm Thanh Phú — Work & Research">
    <meta property="og:type" content="${ogType}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="en_US">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${ogImage}">

    <link rel="stylesheet" href="/assets/fonts.css">

    <!-- Anti-FOUC Early Theme Script -->
    <script nonce="${nonce}">
      (function(){
        try {
          var t = localStorage.getItem('f-theme');
          if (t === 'sepia') t = 'light';
          if (t === 'dark' || t === 'light') {
            document.documentElement.setAttribute('data-theme', t);
          } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        } catch(e){}
      })();
    </script>

    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json" nonce="${nonce}">
      ${JSON.stringify(schemaData)}
    </script>

    <style nonce="${nonce}">${siteCss}</style>
  </head>`;
}

function layoutHeader(active = "", nonce = "") {
  return `<header class="f-header">
    <div id="f-progress-bar"></div>
    <nav class="f-nav f-wrap" aria-label="Primary navigation">
      <a class="f-brand" href="/">Phạm Thanh Phú</a>
      <div class="f-links">
        <a href="/work"${active === "work" ? ' aria-current="page"' : ""}>Work</a>
        <a href="/about"${active === "about" ? ' aria-current="page"' : ""}>About</a>
        <button type="button" class="f-theme-toggle" id="f-theme-toggle" aria-label="Switch to dark theme" aria-pressed="false" title="Switch to dark theme">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4a8 8 0 0 1 0 16V4Z" fill="currentColor"/><path d="M12 4a8 8 0 1 0 0 16" stroke="currentColor" stroke-width="1.5"/><path d="M12 1v1M12 22v1M1 12h1M22 12h1M4.2 4.2l.7.7M19.1 19.1l.7.7M4.2 19.8l.7-.7M19.1 4.9l.7-.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>
    </nav>
  </header>
  <script nonce="${nonce}">
    (function(){
      function syncTheme() {
        var button = document.getElementById('f-theme-toggle');
        if (!button) return;
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        button.setAttribute('aria-pressed', String(dark));
        button.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
        button.title = button.getAttribute('aria-label');
        button.onclick = function() {
          var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', theme);
          try { localStorage.setItem('f-theme', theme); } catch(e) {}
          syncTheme();
        };
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncTheme);
      else syncTheme();
    })();
  </script>`;
}

function catGlobalComponent(nonce) {
  return `<!-- Global Cat-in-Tab Companion -->
  <div id="f-cat-dock" class="f-cat-in-tab-dock" title="Cat-in-Tab · Click me to pet or move me!">
    <div class="f-tab-cat-bubble" id="f-cat-bubble">Meow! 🐾</div>
    <svg class="f-tab-cat-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="29" rx="10" ry="2" fill="rgba(20, 28, 34, 0.15)"/>
      <g class="f-c-tail">
        <rect x="23" y="14" width="3" height="3" fill="#141c20"/>
        <rect x="25" y="12" width="3" height="3" fill="#141c20"/>
        <rect x="26" y="9" width="3" height="4" fill="#141c20"/>
        <rect x="24" y="8" width="3" height="2" fill="#141c20"/>
        <rect x="24" y="10" width="2" height="4" fill="#ffffff"/>
      </g>
      <rect x="11" y="16" width="13" height="10" rx="1" fill="#ffffff"/>
      <rect x="10" y="16" width="1" height="10" fill="#141c20"/>
      <rect x="24" y="16" width="1" height="10" fill="#141c20"/>
      <rect x="11" y="26" width="13" height="1" fill="#141c20"/>
      <rect x="11" y="15" width="13" height="1" fill="#141c20"/>
      <rect x="19" y="25" width="4" height="3" fill="#ffffff"/>
      <rect x="19" y="27" width="4" height="1" fill="#141c20"/>
      <rect x="23" y="25" width="1" height="2" fill="#141c20"/>
      <rect x="11" y="25" width="4" height="3" fill="#ffffff"/>
      <rect x="11" y="27" width="4" height="1" fill="#141c20"/>
      <rect x="15" y="25" width="1" height="2" fill="#141c20"/>
      <rect x="6" y="9" width="12" height="10" rx="1" fill="#ffffff"/>
      <rect x="5" y="9" width="1" height="10" fill="#141c20"/>
      <rect x="18" y="9" width="1" height="10" fill="#141c20"/>
      <rect x="6" y="8" width="12" height="1" fill="#141c20"/>
      <rect x="6" y="19" width="12" height="1" fill="#141c20"/>
      <rect x="6" y="4" width="3" height="5" fill="#ffffff"/>
      <rect x="5" y="5" width="1" height="4" fill="#141c20"/>
      <rect x="6" y="3" width="2" height="2" fill="#141c20"/>
      <rect x="8" y="4" width="2" height="4" fill="#141c20"/>
      <rect x="6" y="6" width="2" height="2" fill="#fbcfe8"/>
      <rect x="13" y="4" width="3" height="5" fill="#ffffff"/>
      <rect x="13" y="4" width="1" height="4" fill="#141c20"/>
      <rect x="14" y="3" width="2" height="2" fill="#141c20"/>
      <rect x="16" y="5" width="1" height="4" fill="#141c20"/>
      <rect x="14" y="6" width="2" height="2" fill="#fbcfe8"/>
      <rect class="f-c-eye" x="8" y="12" width="2" height="3" rx="1" fill="#141c20"/>
      <rect class="f-c-eye" x="14" y="12" width="2" height="3" rx="1" fill="#141c20"/>
      <rect x="8" y="12" width="1" height="1" fill="#ffffff"/>
      <rect x="14" y="12" width="1" height="1" fill="#ffffff"/>
      <polygon points="12,15 11,14 13,14" fill="#f43f5e"/>
      <rect x="3" y="14" width="3" height="1" fill="#94a3b8"/>
      <rect x="3" y="16" width="3" height="1" fill="#94a3b8"/>
      <rect x="17" y="14" width="3" height="1" fill="#94a3b8"/>
      <rect x="17" y="16" width="3" height="1" fill="#94a3b8"/>
    </svg>
  </div>

  <script nonce="${nonce}">
    (()=>{
      const dock = document.getElementById('f-cat-dock');
      const bubble = document.getElementById('f-cat-bubble');
      if (!dock || !bubble) return;

      const quotes = [
        "Meow! 🐾",
        "Tracking operational drift in VieSHOP... 🐟",
        "Checking cold-chain milk at Vinamilk... 🥛",
        "Tracing W3C PROV-O audit trails... 🔍",
        "Restoring customer rights on Shopee... 📦",
        "Purrr... 100% verified research! ✨",
        "Following the mechanism, not the slogan! 🧶"
      ];

      let quoteIdx = 0;
      let hideTimer = null;
      let onRight = true;

      function showBubble(text) {
        bubble.textContent = text;
        bubble.classList.add('visible');
        dock.classList.add('petted');
        
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
          bubble.classList.remove('visible');
          dock.classList.remove('petted');
        }, 3200);
      }

      dock.addEventListener('click', () => {
        quoteIdx = (quoteIdx + 1) % quotes.length;
        showBubble(quotes[quoteIdx]);

        if (quoteIdx % 3 === 0) {
          onRight = !onRight;
          dock.classList.toggle('is-left', !onRight);
        }
      });

      dock.addEventListener('mouseenter', () => {
        if (!bubble.classList.contains('visible')) {
          showBubble(quotes[quoteIdx]);
        }
      });
    })();
  </script>`;
}

function layoutFooter(label = "Ho Chi Minh City · 2026", nonce = '', showCompanion = true) {
  return `<footer class="f-footer">
    <div class="f-wrap f-footer-row">
      <span>Phạm Thanh Phú · ${escapeHtml(label)}</span>
      <span><a href="mailto:phamthanhphu97@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="/work">Work Library</a></span>
    </div>
  </footer>
  <div id="f-global-toast" class="f-toast-msg" role="status" aria-live="polite"></div>
  
  <!-- Universal Command Palette Modal -->
  <dialog id="f-cmd-dialog" class="f-cmd-dialog" aria-label="Command Palette">
    <div class="f-cmd-top">
      <span class="f-cmd-icon">🔍</span>
      <input type="text" id="f-cmd-input" class="f-cmd-input" aria-label="Search works and pages" placeholder="Search ${totalWorks} works, tags, lenses, or pages..." autocomplete="off" spellcheck="false">
      <button type="button" id="f-cmd-close" class="f-cmd-esc" aria-label="Close search" title="Close (Esc)">×</button>
    </div>
    <div id="f-cmd-results" class="f-cmd-results"></div>
    <div class="f-cmd-footer">
      <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
      <span><kbd>↵</kbd> select</span>
      <span><kbd>ESC</kbd> dismiss</span>
    </div>
  </dialog>

  
  <script nonce="${nonce}">
    (function(){
      
  const SEARCH_ITEMS = ${JSON.stringify([
    { title: `Work Library: All ${totalWorks} Works`, path: "/work", type: "Page", badge: "Archive" },
    { title: "About Phạm Thanh Phú: Operating Principles & Horizon", path: "/about", type: "Page", badge: "Profile" },
    ...finalModes.map(mode => ({ title: mode.label, path: `/work?mode=${mode.id}`, type: "Lens", badge: "Research Mode" })),
    ...finalWorkLibrary.map(item => ({ title: item.title, path: item.path, type: item.type, badge: `Case ${item.index}`, keywords: `${item.tags} ${item.question}` }))
  ]).replace(/</g, '\\u003c')};

      var cmdDialog = document.getElementById('f-cmd-dialog');
      var cmdInput = document.getElementById('f-cmd-input');
      var cmdResults = document.getElementById('f-cmd-results');
      var cmdTrigger = document.getElementById('f-nav-cmd-trigger');
      var cmdClose = document.getElementById('f-cmd-close');
      var selectedIdx = 0;
      var currentFiltered = [];

      function escapeText(value) {
        var el = document.createElement('span');
        el.textContent = value;
        return el.innerHTML;
      }

      function renderItems(items) {
        currentFiltered = items;
        selectedIdx = 0;
        if (!items || items.length === 0) {
          cmdResults.innerHTML = '<div class="f-cmd-empty">No monographs or pages found matching your query.</div>';
          return;
        }

        var html = '';
        var lastType = '';
        items.forEach(function(item, idx) {
          if (item.type !== lastType) {
            html += '<div class="f-cmd-section-label">' + escapeText(item.type) + '</div>';
            lastType = item.type;
          }
          var isSel = (idx === selectedIdx) ? ' is-selected' : '';
          var extIcon = item.ext ? ' ↗' : '';
          html += '<a href="' + item.path + '"' + (item.ext ? ' target="_blank" rel="noreferrer"' : '') + ' class="f-cmd-item' + isSel + '" data-idx="' + idx + '">' +
            '<div class="f-cmd-item-left">' +
              '<span class="f-cmd-item-icon">' + (item.type === 'Live App' ? '⚡' : (item.type === 'Page' ? '📄' : '📖')) + '</span>' +
              '<span class="f-cmd-item-title">' + escapeText(item.title) + extIcon + '</span>' +
            '</div>' +
            '<span class="f-cmd-item-badge">' + item.badge + '</span>' +
          '</a>';
        });
        cmdResults.innerHTML = html;
      }

      function openPalette() {
        if (!cmdDialog) return;
        if (typeof cmdDialog.showModal === 'function') {
          cmdDialog.showModal();
        } else {
          cmdDialog.setAttribute('open', '');
        }
        cmdInput.value = '';
        renderItems(SEARCH_ITEMS);
        setTimeout(function(){ cmdInput.focus(); }, 50);
      }

      function closePalette() {
        if (!cmdDialog) return;
        if (typeof cmdDialog.close === 'function') {
          cmdDialog.close();
        } else {
          cmdDialog.removeAttribute('open');
        }
      }

      if (cmdTrigger) {
        cmdTrigger.addEventListener('click', openPalette);
      }
      if (cmdClose) cmdClose.addEventListener('click', closePalette);

      // Shortcut: Ctrl+K or Cmd+K
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          if (cmdDialog && cmdDialog.open) {
            closePalette();
          } else {
            openPalette();
          }
        }
        if (e.key === 'Escape' && cmdDialog && cmdDialog.open) {
          closePalette();
        }
      });

      if (cmdDialog) {
        cmdDialog.addEventListener('click', function(e) {
          if (e.target === cmdDialog) closePalette();
        });
      }

      if (cmdInput) {
        cmdInput.addEventListener('input', function() {
          var q = cmdInput.value.trim().toLowerCase();
          if (!q) {
            renderItems(SEARCH_ITEMS);
            return;
          }
          var matched = SEARCH_ITEMS.filter(function(item) {
            return [item.title, item.badge, item.keywords || ''].some(value => value.toLowerCase().includes(q));
          });
          renderItems(matched);
        });

        cmdInput.addEventListener('keydown', function(e) {
          if (!currentFiltered || currentFiltered.length === 0) return;
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIdx = (selectedIdx + 1) % currentFiltered.length;
            updateSelectionUi();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIdx = (selectedIdx - 1 + currentFiltered.length) % currentFiltered.length;
            updateSelectionUi();
          } else if (e.key === 'Enter') {
            e.preventDefault();
            var target = currentFiltered[selectedIdx];
            if (target) {
              if (target.ext) {
                window.open(target.path, '_blank', 'noreferrer');
              } else {
                window.location.href = target.path;
              }
              closePalette();
            }
          }
        });
      }

      function updateSelectionUi() {
        var items = cmdResults.querySelectorAll('.f-cmd-item');
        items.forEach(function(el, i) {
          el.classList.toggle('is-selected', i === selectedIdx);
          if (i === selectedIdx) {
            el.scrollIntoView({ block: 'nearest' });
          }
        });
      }
    })();
  </script>

  ${showCompanion ? catGlobalComponent(nonce) : ""}
  <script nonce="${nonce}">
    (function(){
      var preview = document.querySelector('.f-proto-preview-img');
      if (preview) {
        var triedThumbnail = false;
        preview.addEventListener('error', function() {
          if (!triedThumbnail) {
            triedThumbnail = true;
            preview.src = 'https://drive.google.com/thumbnail?id=1K_D6jfWCZAktx3-Pp1D1NWfbB046BZle&sz=w1000';
          } else {
            preview.hidden = true;
            document.getElementById('f-proto-preview-fallback').hidden = false;
          }
        });
        if (preview.complete && !preview.naturalWidth) preview.dispatchEvent(new Event('error'));
      }
      var toast = document.getElementById('f-global-toast');
      var toastTimer = null;
      window.showToast = function(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function() {
          toast.classList.remove('is-visible');
        }, 2600);
      };
    })();
  </script>`;
}

function homePage(nonce) {
  return `<!DOCTYPE html>
<html lang="en">
${layoutHead("Phạm Thanh Phú — Business & Product Operations", "Business Operations, Product Operations, and Product Strategy — selected work and an evidence-first operating approach.", nonce)}
<body>
  <a class="f-skip" href="#main">Skip to main content</a>
  ${layoutHeader("home", nonce)}
  <main id="main">
    <header class="f-home-hero f-wrap">
      <div class="f-home-identity">
        <p class="f-home-role">Business Operations · Product Operations · Product Strategy</p>
        <h1>I'm drawn to messy operating problems.</h1>
        <p class="f-home-intent">I enjoy exploring how they work, and keep learning how to make systems, ownership, and the next step clearer.</p>
      </div>
      <figure class="f-home-photo">
        <img src="/assets/editorial-cafe-v2.webp" alt="" width="1400" height="1050" fetchpriority="high" decoding="async">
      </figure>
    </header>

    <section class="f-home-selected f-wrap" id="selected-work" aria-labelledby="selected-work-title">
      <div class="f-home-section-head">
        <h2 id="selected-work-title">Selected Work</h2>
        <a class="f-editorial-link" href="/work">View all work <span aria-hidden="true">→</span></a>
      </div>
      <a class="f-home-feature" href="/work/vieworld" aria-labelledby="vieworld-home-title">
        <img class="f-home-feature-image" src="/assets/vieworld-meadow.webp" alt="Meadow scene from the VieWorld prototype" width="1400" height="788" decoding="async">
        <div class="f-home-work-copy">
          <span class="f-home-category">Product &amp; Operations</span>
          <h3 id="vieworld-home-title">VieWorld</h3>
          <p>Designing an independent fandom ecosystem that feels like home.</p>
          <span class="f-editorial-link">View case <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <div class="f-home-work-grid">
        <a class="f-home-work-row" href="/work/fanme-controlled-growth" aria-labelledby="fanme-home-title">
          <img class="f-home-artifact" src="/assets/fanme-cover.webp" alt="" width="700" height="394" loading="lazy" decoding="async">
          <div class="f-home-work-copy">
            <span class="f-home-category">Launch &amp; Operations</span>
            <h3 id="fanme-home-title">FanMe — Controlled Growth</h3>
            <p>A bounded artist-launch pilot, with ownership, readiness, and scale gates.</p>
            <span class="f-editorial-link">Read case <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a class="f-home-work-row" href="/work/vinamilk-trusted-nutrition" aria-labelledby="vinamilk-home-title">
          <img class="f-home-artifact" src="/assets/vinamilk-cover.webp" alt="" width="541" height="700" loading="lazy" decoding="async">
          <div class="f-home-work-copy">
            <span class="f-home-category">Product Discovery</span>
            <h3 id="vinamilk-home-title">Vinamilk — Trusted Nutrition</h3>
            <p>Connecting product-service discovery with delivery, scale, and governance.</p>
            <span class="f-editorial-link">Read research <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a class="f-home-work-row" href="/work/shopee-account-restrictions" aria-labelledby="shopee-home-title">
          <img class="f-home-artifact" src="/assets/shopee-cover.webp" alt="" width="500" height="281" loading="lazy" decoding="async">
          <div class="f-home-work-copy">
            <span class="f-home-category">Evidence &amp; Resolution</span>
            <h3 id="shopee-home-title">Shopee — Account Restrictions</h3>
            <p>A customer resolution pathway under platform uncertainty.</p>
            <span class="f-editorial-link">Explore case <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a class="f-home-work-row" href="/work/explainable-trust" aria-labelledby="explainable-home-title">
          <img src="/assets/explainable-cover.webp" alt="" width="500" height="500" loading="lazy" decoding="async">
          <div class="f-home-work-copy">
            <span class="f-home-category">Systems &amp; Evidence</span>
            <h3 id="explainable-home-title">Explainable Trust</h3>
            <p>Making reasoning, sources, and case revisions visible and inspectable.</p>
            <span class="f-editorial-link">Read case <span aria-hidden="true">→</span></span>
          </div>
        </a>
      </div>
    </section>

    <section class="f-home-approach f-wrap" aria-labelledby="approach-title">
      <h2 id="approach-title">How I work</h2>
      <ul class="f-home-principles">
        <li>Ground truth first</li><li>Clear ownership</li><li>Evidence visible</li>
      </ul>
      <a class="f-editorial-link" href="/about">More about my approach <span aria-hidden="true">→</span></a>
    </section>

    <section class="f-home-proof f-wrap" aria-label="Operating foundation">
      <p><strong>6+ years</strong><span>Founder-side operations</span></p>
      <p><strong>50+ accounts</strong><span>Recurring institutional B2B</span></p>
      <p><strong>~95% retention</strong><span>Relationship-led operations</span></p>
    </section>
  </main>

  ${layoutFooter("Ho Chi Minh City · 2026", nonce, false)}
</body>
</html>`;
}

function workPage(nonce) {
  const works = finalWorkLibrary.filter(item => item.path.startsWith('/work/'));
  const topicGroups = [
    { id: 'demo', label: 'Public Demo', paths: ['explainable-trust'] },
    { id: 'fandom', label: 'Fandom & Commerce', paths: ['creator-platform-operating-model', 'post-signing-artist-label-operations', 'fanme-controlled-growth', 'datvietvac-ownership-belonging', 'datvietvac-fandom-cards', 'vieshop-fan-centred-merchandise-system', 'datvietvac-who-owns-the-fan-promise', 'vieworld', 'metub-creator-economy', 'artist-fandom-page', 'shopee-account-restrictions'] },
    { id: 'trust', label: 'AI & Trust', paths: ['elfie-trust-safe-activation', 'explainable-trust', 'vietnam-diamond-market-crisis', 'diamond-trust-chain-collapse', 'pathway-lens-operational-cycles', 'ai-judgment-decisions', 'ai-apprenticeship', 'momo-ai-paylater', 'zalo-scam-emergency-mode'] },
    { id: 'policy', label: 'Platform Policy', paths: ['shopee-account-restrictions', 'adobe-account-restriction', 'elfie-trust-safe-activation', 'momo-ai-paylater', 'zalo-scam-emergency-mode'] },
    { id: 'supply', label: 'Supply Chain', paths: ['vinamilk-trusted-nutrition', 'fanme-controlled-growth', 'datvietvac-ownership-belonging', 'datvietvac-fandom-cards', 'vieshop-fan-centred-merchandise-system'] },
    { id: 'discovery', label: 'Product Discovery', paths: ['vinamilk-trusted-nutrition', 'elfie-trust-safe-activation', 'datvietvac-ownership-belonging', 'datvietvac-fandom-cards', 'vieshop-fan-centred-merchandise-system', 'vieworld', 'artist-fandom-page', 'zalo-scam-emergency-mode'] }
  ];
  const bookmarkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4Z"/></svg>';
  const itemAttributes = item => `data-path="${item.path}" data-mode="${item.mode}" data-search="${escapeHtml([item.title, item.question, item.tags, item.type, item.maturity].join(' ').toLowerCase())}" data-topics="${topicGroups.filter(topic => topic.paths.includes(item.path.slice(6))).map(topic => topic.id).join(' ')}"`;
  const sectionsHtml = finalModes.map(mode => {
    const items = works.filter(item => item.mode === mode.id);
    return `<section class="f-catalog-section" data-section="${mode.id}" aria-labelledby="mode-${mode.id}">
      <div class="f-section-head">
        <div class="f-section-title-wrap">
          <h2 id="mode-${mode.id}"><span>${escapeHtml(mode.num)}</span> ${escapeHtml(mode.label)}</h2>
          <p>${escapeHtml(mode.description)}</p>
        </div>
        <span class="f-section-count-badge">${items.length} works</span>
      </div>
      <div class="f-title-grid">${items.map(item => {
        const assets = (caseDocuments[item.path]?.assets || []).length;
        const tags = (item.tags || '').split(' · ').filter(Boolean);
        return `<article class="f-work-item" ${itemAttributes(item)}>
          <div class="f-work-item-heading">
            <h3><a href="${item.path}">${escapeHtml(item.title)} <span aria-hidden="true">→</span></a></h3>
            <button class="f-work-save" type="button" data-save-path="${item.path}" data-save-title="${escapeHtml(item.title)}" aria-pressed="false" aria-label="Save ${escapeHtml(item.title)}">${bookmarkIcon}</button>
          </div>
          <p class="f-item-question">“${escapeHtml(item.question)}”</p>
          <div class="f-work-item-meta">
            <span>${escapeHtml(item.maturity.split(' · ')[0])}</span>
            ${item.path === '/work/explainable-trust' ? '<span class="f-work-demo">Public Demo</span>' : ''}
            ${assets ? `<span>${assets} artifact${assets === 1 ? '' : 's'}</span>` : ''}
          </div>
          <details class="f-work-details">
            <summary>Details &amp; keywords</summary>
            <p>${escapeHtml(item.type)}</p>
            <div class="f-paper-tags">${tags.map(tag => `<button type="button" class="f-tag-click" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('')}</div>
          </details>
        </article>`;
      }).join('')}</div>
    </section>`;
  }).join('');
  const modeTabs = [{ id: 'all', short: 'All works' }, ...finalModes].map(mode => `<button class="f-mode-tab" type="button" data-mode="${mode.id}" aria-pressed="${mode.id === 'all'}">${escapeHtml(mode.short)} <span class="f-tab-count">${mode.id === 'all' ? works.length : works.filter(item => item.mode === mode.id).length}</span></button>`).join('');

  return `<!doctype html>
<html lang="en">
${layoutHead('Work Library — Phạm Thanh Phú', `Complete catalog of ${totalWorks} research monographs, operating case studies, essays, and software tools across business operations and AI trust.`, nonce, { path: '/work' })}
<body>
  <a class="f-skip" href="#main">Skip to catalog</a>
  ${layoutHeader('work', nonce)}
  <main id="main" class="f-work-page">
    <header class="f-work-hero f-wrap">
      <h1>Work Library <span>&amp; Operating Monographs</span></h1>
      <p class="f-work-intro">The cases look different on the surface, but I keep coming back to a small set of operating questions: what deserves to be built, what breaks after apparent success, what people can safely rely on, and what evidence should earn the next step.</p>
      <div class="f-work-meta-row">
        <p>${totalWorks} Works <span>·</span> ${totalModes} Research Modes <span>·</span> ${totalArtifacts}+ Downloadable Artifacts</p>
        <details class="f-work-boundary">
          <summary>Evidence boundary</summary>
          <blockquote>“Every piece in this library separates confirmed public facts from working inferences, keeping the boundary of evidence visible.”</blockquote>
          <p>Living Archive · 2026</p>
        </details>
      </div>
    </header>

    <section class="f-wrap f-work-toolbar" aria-label="Find work">
      <div class="f-work-search-row">
        <div class="f-search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
          <input class="f-search-input" id="work-search" type="search" placeholder="Search by title, question, or keyword" aria-label="Search works" autocomplete="off" aria-keyshortcuts="/">
          <kbd class="f-kbd-hint">/</kbd>
          <button class="f-search-clear" id="work-search-clear" type="button" aria-label="Clear search" hidden>×</button>
        </div>
        <div class="f-work-refinements">
          <label class="f-work-topic">Topic <select id="work-topic" aria-label="Filter by topic"><option value="all">All topics</option>${topicGroups.map(topic => `<option value="${topic.id}">${escapeHtml(topic.label)}</option>`).join('')}</select></label>
          <button type="button" id="btn-filter-saved" class="f-work-saved" aria-pressed="false">${bookmarkIcon}<span>Saved (0)</span></button>
        </div>
      </div>
      <div class="f-work-toolbar-bottom">
        <nav class="f-toolbar-tabs" aria-label="Filter works by mode">${modeTabs}</nav>
        <div class="f-work-results">
          <span class="f-toolbar-count" id="work-count" role="status" aria-live="polite">${works.length} works</span>
          <div class="f-view-switch" role="group" aria-label="Display works">
            <button type="button" class="f-view-toggle-btn" id="btn-view-cards" aria-pressed="true" aria-controls="catalog-container">Overview</button>
            <button type="button" class="f-view-toggle-btn" id="btn-view-ledger" aria-pressed="false" aria-controls="ledger-container">Index</button>
          </div>
          <button type="button" id="work-clear-filters" class="f-work-clear" hidden>Clear filters</button>
        </div>
      </div>
    </section>

    <div class="f-wrap" id="catalog-container">${sectionsHtml}</div>
    <div class="f-wrap" id="ledger-container" hidden>
      <div class="f-ledger-table-wrap">
        <table class="f-ledger-table">
          <caption class="f-work-sr-only">Work index: case title, core question, research mode, and maturity</caption>
          <thead><tr><th scope="col">#</th><th scope="col">Case title &amp; core question</th><th scope="col">Lens</th><th scope="col">Maturity</th></tr></thead>
          <tbody>${works.map((item, idx) => `<tr class="f-ledger-row" ${itemAttributes(item)}>
            <td class="f-ledger-number">${String(idx + 1).padStart(2, '0')}</td>
            <td class="f-ledger-case"><a class="f-ledger-title" href="${item.path}">${escapeHtml(item.title)}</a><p>“${escapeHtml(item.question)}”</p></td>
            <td data-label="Lens">${escapeHtml(finalModes.find(mode => mode.id === item.mode)?.short || item.mode)}</td>
            <td data-label="Maturity">${escapeHtml(item.maturity)}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
    <div class="f-wrap"><div id="work-empty" class="f-work-empty" hidden>
      <h2>No works found</h2>
      <p id="work-empty-message">Try another keyword, or clear the filters to browse all ${works.length} works.</p>
      <button type="button" id="work-reset-filters" class="f-editorial-link">Reset filters <span aria-hidden="true">→</span></button>
    </div></div>
  </main>
  ${layoutFooter(`Master Library · ${totalWorks} Works`, nonce, false)}
  <script nonce="${nonce}">
    (() => {
      const search = document.getElementById('work-search');
      const clearSearch = document.getElementById('work-search-clear');
      const clearFilters = document.getElementById('work-clear-filters');
      const topic = document.getElementById('work-topic');
      const savedToggle = document.getElementById('btn-filter-saved');
      const tabs = Array.from(document.querySelectorAll('.f-mode-tab'));
      const items = Array.from(document.querySelectorAll('.f-work-item'));
      const rows = Array.from(document.querySelectorAll('.f-ledger-row'));
      const saveButtons = Array.from(document.querySelectorAll('.f-work-save'));
      const knownPaths = new Set(items.map(item => item.dataset.path));
      const overview = document.getElementById('catalog-container');
      const index = document.getElementById('ledger-container');
      const overviewButton = document.getElementById('btn-view-cards');
      const indexButton = document.getElementById('btn-view-ledger');
      const empty = document.getElementById('work-empty');
      let mode = 'all';
      let savedOnly = false;
      let view = 'overview';

      function bookmarks() {
        try {
          const value = JSON.parse(localStorage.getItem('f-bookmarks') || '[]');
          return Array.isArray(value) ? value.filter(path => typeof path === 'string') : [];
        } catch { return []; }
      }
      function readUrl() {
        const params = new URLSearchParams(location.search);
        mode = tabs.some(tab => tab.dataset.mode === params.get('mode')) ? params.get('mode') : 'all';
        topic.value = Array.from(topic.options).some(option => option.value === params.get('topic')) ? params.get('topic') : 'all';
        search.value = params.get('q') || '';
        savedOnly = params.get('saved') === '1';
        let preferred = 'overview';
        try { preferred = localStorage.getItem('f-work-view') || preferred; } catch {}
        view = params.get('view') === 'index' ? 'index' : params.get('view') === 'overview' ? 'overview' : preferred === 'index' ? 'index' : 'overview';
      }
      function writeUrl(replace = false) {
        const url = new URL(location.href);
        const values = {mode: mode === 'all' ? '' : mode, topic: topic.value === 'all' ? '' : topic.value, q: search.value.trim(), saved: savedOnly ? '1' : '', view};
        for (const [key, value] of Object.entries(values)) value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
        if (url.href !== location.href) history[replace ? 'replaceState' : 'pushState']({}, '', url);
      }
      function render() {
        const saved = new Set(bookmarks());
        const terms = search.value.trim().toLowerCase().split(' ').filter(Boolean);
        const matches = item => (mode === 'all' || item.dataset.mode === mode)
          && (topic.value === 'all' || item.dataset.topics.split(' ').includes(topic.value))
          && (!savedOnly || saved.has(item.dataset.path))
          && terms.every(term => item.dataset.search.includes(term));
        for (const item of items) item.hidden = !matches(item);
        for (const row of rows) row.hidden = !matches(row);
        for (const section of document.querySelectorAll('.f-catalog-section')) {
          const visible = Array.from(section.querySelectorAll('.f-work-item')).filter(item => !item.hidden).length;
          section.hidden = !visible;
          section.querySelector('.f-section-count-badge').textContent = visible + ' work' + (visible === 1 ? '' : 's');
        }
        for (const tab of tabs) tab.setAttribute('aria-pressed', String(tab.dataset.mode === mode));
        for (const button of saveButtons) {
          const active = saved.has(button.dataset.savePath);
          button.setAttribute('aria-pressed', String(active));
          button.setAttribute('aria-label', (active ? 'Remove from saved: ' : 'Save ') + button.dataset.saveTitle);
          button.title = active ? 'Remove from saved' : 'Save work';
        }
        savedToggle.setAttribute('aria-pressed', String(savedOnly));
        savedToggle.querySelector('span').textContent = 'Saved (' + Array.from(saved).filter(path => knownPaths.has(path)).length + ')';
        clearSearch.hidden = !search.value;
        const filtered = mode !== 'all' || topic.value !== 'all' || terms.length || savedOnly;
        clearFilters.hidden = !filtered;
        const visibleCount = items.filter(item => !item.hidden).length;
        document.getElementById('work-count').textContent = visibleCount + (filtered ? ' of ' + items.length + ' works' : ' works');
        empty.hidden = visibleCount > 0;
        document.getElementById('work-empty-message').textContent = savedOnly && !bookmarks().some(path => knownPaths.has(path))
          ? 'Save a work with its bookmark button, then find it here. Saved works stay in this browser.'
          : 'Try another keyword, or clear the filters to browse all ' + items.length + ' works.';
        overview.hidden = view === 'index' || !visibleCount;
        index.hidden = view !== 'index' || !visibleCount;
        overviewButton.setAttribute('aria-pressed', String(view === 'overview'));
        indexButton.setAttribute('aria-pressed', String(view === 'index'));
      }
      function update(replace = false) { writeUrl(replace); render(); }
      function reset() {
        mode = 'all'; topic.value = 'all'; search.value = ''; savedOnly = false;
        update(); search.focus();
      }
      function setView(next) {
        view = next;
        try { localStorage.setItem('f-work-view', view); } catch {}
        update();
      }
      overviewButton.addEventListener('click', () => setView('overview'));
      indexButton.addEventListener('click', () => setView('index'));
      topic.addEventListener('change', () => update());
      savedToggle.addEventListener('click', () => { savedOnly = !savedOnly; update(); });
      search.addEventListener('input', () => update(true));
      clearSearch.addEventListener('click', () => { search.value = ''; update(true); search.focus(); });
      clearFilters.addEventListener('click', reset);
      document.getElementById('work-reset-filters').addEventListener('click', reset);
      for (const tab of tabs) tab.addEventListener('click', () => { mode = tab.dataset.mode; update(); });
      for (const button of saveButtons) button.addEventListener('click', () => {
        const saved = new Set(bookmarks());
        saved.has(button.dataset.savePath) ? saved.delete(button.dataset.savePath) : saved.add(button.dataset.savePath);
        try { localStorage.setItem('f-bookmarks', JSON.stringify(Array.from(saved))); } catch { return; }
        render();
      });
      for (const tag of document.querySelectorAll('.f-tag-click')) tag.addEventListener('click', () => {
        search.value = tag.dataset.tag;
        update(true); search.focus();
        search.scrollIntoView({behavior: 'smooth', block: 'center'});
      });
      window.addEventListener('popstate', () => { readUrl(); render(); });
      window.addEventListener('storage', event => { if (event.key === 'f-bookmarks') render(); });
      window.addEventListener('pageshow', () => { readUrl(); render(); });
      document.addEventListener('keydown', event => {
        if (document.querySelector('dialog[open]') || event.ctrlKey || event.metaKey || event.altKey) return;
        const editing = event.target.isContentEditable || event.target.closest('input, textarea, select');
        if (event.key === 'Escape' && event.target === search && search.value) {
          search.value = ''; update(true); return;
        }
        if (editing) return;
        if (event.key === '/') { event.preventDefault(); search.focus(); }
        if (event.key.toLowerCase() === 'v') setView(view === 'index' ? 'overview' : 'index');
        if (['1','2','3','4','5'].includes(event.key)) tabs[Number(event.key) - 1]?.click();
      });
      readUrl(); render();
    })();
  </script>
</body>
</html>`;
}


function casePage(item, nonce) {
  const doc = caseDocuments[item.path] || { assets: [], body: "" };
  const renderedProse = renderEditorialNotion(doc.body || "");

  // Reading time estimate (avg 220 wpm)
  const { words: wordCount, minutes: readMinutes } = getReadingStats(doc.body || "");

  // Asset count from doc
  const assetCount = (doc.assets || []).length;

  // Mode label for meta
  const modeObj = finalModes.find(m => m.id === item.mode);
  const modeLabel = modeObj ? modeObj.label : item.mode;

  // All case monographs list for navigation & cross-referencing
  const allWorks = finalWorkLibrary.filter(w => w.path.startsWith("/work/"));
  const currentIndex = allWorks.findIndex(w => w.path === item.path);
  const prevWork = currentIndex > 0 ? allWorks[currentIndex - 1] : null;
  const nextWork = currentIndex < allWorks.length - 1 ? allWorks[currentIndex + 1] : null;

  // Related Case Studies calculation (2 highest relevance matches)
  const itemTagList = typeof item.tags === 'string' ? item.tags.split('·').map(t => t.trim().toLowerCase()) : [];
  const relatedWorks = allWorks
    .filter(w => w.path !== item.path)
    .map(w => {
      let score = 0;
      if (w.mode === item.mode) score += 3;
      if (w.type === item.type) score += 2;
      const wTagList = typeof w.tags === 'string' ? w.tags.split('·').map(t => t.trim().toLowerCase()) : [];
      const sharedTags = wTagList.filter(t => itemTagList.includes(t));
      score += sharedTags.length * 2;
      return { work: w, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(x => x.work);

  const relatedHtml = `
    <div class="f-related-section">
      <div class="f-related-head">
        <span class="f-related-eyebrow">Related Evidence &amp; Frameworks</span>
        <span class="f-related-hint">Connected across research lenses</span>
      </div>
      <div class="f-related-grid">
        ${relatedWorks.map(rw => `
          <a href="${rw.path}" class="f-related-card">
            <div class="f-related-card-top">
              <span class="f-related-mode">${escapeHtml(finalModes.find(mode => mode.id === rw.mode)?.label || rw.mode)}</span>
              <span class="f-related-read">${getReadingStats(caseDocuments[rw.path]?.body || '').minutes} min read</span>
            </div>
            <h4>${escapeHtml(rw.title)}</h4>
            <p class="f-related-question">“${escapeHtml(rw.question)}”</p>
            <div class="f-related-foot">
              <span>Read case monograph →</span>
            </div>
          </a>
        `).join("")}
      </div>
    </div>
  `;

  // Valid Drive IDs whitelist (server-side rendered, trusted)
  
// (Next / Previous monograph already calculated above)

  const validDriveIds = JSON.stringify([...new Set([
    ...(doc.assets || []).map(asset => asset.driveId).filter(Boolean),
    ...[...(doc.body || '').matchAll(/(?:data-driveid|driveid)="([A-Za-z0-9_-]+)"/g)].map(match => match[1])
  ])]);

  const clientScript = `
    <script nonce="${nonce}">
      (()=>{
        const bar = document.getElementById('f-progress-bar');
        const prose = document.getElementById('record');
        const tocList = document.getElementById('f-toc-list');
        if (prose && tocList) {
          const mainHeadings = [...prose.querySelectorAll('h1[id], h2[id]')];
          const headings = mainHeadings.length ? mainHeadings : [...prose.querySelectorAll('h3[id]')];
          headings.forEach(h => {
            if (!h.id) return;
            const li = document.createElement('li');
            li.className = 'f-toc-item' + (h.tagName === 'H1' ? ' level-1' : (h.tagName === 'H3' ? ' level-3' : ''));
            const a = document.createElement('a');
            a.className = 'f-toc-link';
            a.href = '#' + h.id;
            a.textContent = h.textContent.replace(/^#\\s*/, '');
            li.appendChild(a);
            tocList.appendChild(li);
            const mobileToc = document.getElementById('f-mobile-toc-list');
            if (mobileToc) mobileToc.appendChild(li.cloneNode(true));
          });

          const tocLinks = [...document.querySelectorAll('.f-toc-link')];
          function updateReadingPosition() {
            const visibleHeadings = headings.filter(h => h.getClientRects().length);
            let active = visibleHeadings[0];
            for (const heading of visibleHeadings) {
              if (heading.getBoundingClientRect().top <= 140) active = heading;
              else break;
            }
            tocLinks.forEach(link => {
              const selected = !!active && link.hash === '#' + active.id;
              link.classList.toggle('is-active', selected);
              if (selected) link.setAttribute('aria-current', 'location');
              else link.removeAttribute('aria-current');
            });
            if (bar) {
              const bounds = prose.getBoundingClientRect();
              const total = Math.max(1, bounds.height - window.innerHeight + 100);
              bar.style.width = Math.max(0, Math.min(100, (100 - bounds.top) / total * 100)) + '%';
            }
          }
          let readingFrame;
          function scheduleReadingPosition() {
            if (readingFrame) return;
            readingFrame = requestAnimationFrame(() => { readingFrame = null; updateReadingPosition(); });
          }
          window.addEventListener('scroll', scheduleReadingPosition, { passive: true });
          window.addEventListener('resize', scheduleReadingPosition);
          new ResizeObserver(scheduleReadingPosition).observe(prose);
          function revealSection(hash) {
            let id;
            try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
            const heading = document.getElementById(id);
            if (!heading || !prose.contains(heading)) return;
            let ancestor = heading.parentElement;
            while (ancestor && ancestor !== prose) {
              if (ancestor.tagName === 'DETAILS') ancestor.open = true;
              ancestor = ancestor.parentElement;
            }
            heading.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
            scheduleReadingPosition();
          }
          tocLinks.forEach(link => link.addEventListener('click', e => {
            e.preventDefault();
            const hash = link.hash;
            const mobileToc = link.closest('.f-mobile-toc');
            if (mobileToc) mobileToc.open = false;
            history.pushState(null, '', hash);
            revealSection(hash);
          }));
          window.addEventListener('hashchange', () => revealSection(location.hash));
          if (location.hash) revealSection(location.hash);
          updateReadingPosition();
        }

        
        // Font sizing controls
        const recordEl = document.getElementById('record');
        const decBtn = document.getElementById('f-btn-font-dec');
        const incBtn = document.getElementById('f-btn-font-inc');
        const resetSizeBtn = document.getElementById('f-btn-font-reset');
        if (recordEl && decBtn && incBtn && resetSizeBtn) {
          const defaultSize = parseFloat(getComputedStyle(recordEl).getPropertyValue('--reading-size')) || 18;
          let readingSize = defaultSize;
          try {
            const savedSize = Number(localStorage.getItem('f-reading-size'));
            if (savedSize >= 15 && savedSize <= 25) readingSize = savedSize;
          } catch {}
          function updateSize(save = false) {
            recordEl.style.setProperty('--reading-size', readingSize + 'px');
            resetSizeBtn.textContent = readingSize + 'px';
            decBtn.disabled = readingSize <= 15;
            incBtn.disabled = readingSize >= 25;
            if (save) { try { localStorage.setItem('f-reading-size', String(readingSize)); } catch {} }
          }
          decBtn.addEventListener('click', () => { readingSize = Math.max(15, readingSize - 1); updateSize(true); });
          incBtn.addEventListener('click', () => { readingSize = Math.min(25, readingSize + 1); updateSize(true); });
          resetSizeBtn.addEventListener('click', () => {
            readingSize = defaultSize;
            try { localStorage.removeItem('f-reading-size'); } catch {}
            updateSize();
          });
          updateSize();
        }

        // Bookmark toggle
        const bmBtn = document.getElementById('f-btn-bookmark');
        if (bmBtn) {
          const path = bmBtn.dataset.path;
          let bookmarks = [];
          function readBookmarks() {
            try {
              const saved = JSON.parse(localStorage.getItem('f-bookmarks') || '[]');
              bookmarks = Array.isArray(saved) ? saved.filter(value => typeof value === 'string') : [];
            } catch { bookmarks = []; }
          }
          function updateBmUi() {
            const isSaved = bookmarks.includes(path);
            bmBtn.classList.toggle('is-saved', isSaved);
            bmBtn.setAttribute('aria-pressed', String(isSaved));
            const label = bmBtn.querySelector('.bm-text');
            if (label) label.textContent = isSaved ? 'Saved ✓' : 'Save';
          }
          readBookmarks();
          updateBmUi();
          window.addEventListener('pageshow', () => { readBookmarks(); updateBmUi(); });
          window.addEventListener('storage', e => { if (e.key === 'f-bookmarks') { readBookmarks(); updateBmUi(); } });

          bmBtn.addEventListener('click', () => {
            readBookmarks();
            const idx = bookmarks.indexOf(path);
            if (idx === -1) {
              bookmarks.push(path);
              window.showToast && window.showToast('Monograph saved to your reading list 🔖');
            } else {
              bookmarks.splice(idx, 1);
              window.showToast && window.showToast('Removed from reading list');
            }
            try { localStorage.setItem('f-bookmarks', JSON.stringify(bookmarks)); } catch(e){}
            updateBmUi();
          });
        }

        // Copy Direct Heading Anchor Link
        document.querySelectorAll('.f-anchor').forEach(anchor => {
          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = anchor.getAttribute('href');
            const fullUrl = window.location.origin + window.location.pathname + hash;
            window.history.pushState(null, '', hash);
            const targetEl = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (targetEl) targetEl.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(fullUrl).then(() => {
                window.showToast && window.showToast('Direct section link copied to clipboard 🔗');
              }).catch(() => {
                window.showToast && window.showToast('Section anchor linked');
              });
            } else {
              window.showToast && window.showToast('Section anchor linked');
            }
          });
        });

        // Copy Article URL
        async function copyText(text) {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch {
            window.showToast && window.showToast('Could not copy. You can copy the page address from your browser.');
            return false;
          }
        }
        const copyUrlBtn = document.getElementById('f-btn-copy-url');
        if (copyUrlBtn) {
          copyUrlBtn.addEventListener('click', async () => {
            if (await copyText(window.location.href)) {
              window.showToast && window.showToast('Article link copied to clipboard! 🔗');
            }
          });
        }

        const citeBtn = document.getElementById('f-cite-btn');
        if (citeBtn) {
          citeBtn.addEventListener('click', async () => {
            const title = citeBtn.dataset.title || document.title;
            const citation = 'Ph\u1ea1m Thanh Ph\u00fa (2026). ' + title + '. Work & Research. ' + window.location.href;
            if (await copyText(citation)) {
              const original = citeBtn.textContent;
              citeBtn.textContent = '\u2714 Citation Copied!';
              setTimeout(() => { citeBtn.textContent = original; }, 2500);
            }
          });
        }

        const modal = document.getElementById('f-asset-modal');
        const modalTitle = document.getElementById('f-modal-title');
        const modalBadge = document.getElementById('f-modal-badge');
        const modalFrame = document.getElementById('f-modal-frame');
        const modalImg = document.getElementById('f-modal-img');
        const modalSpinner = document.getElementById('f-modal-spinner');
        const modalError = document.getElementById('f-modal-error');
        const modalErrorLink = document.getElementById('f-modal-error-link');
        const modalDrive = document.getElementById('f-modal-drive');
        const modalDownload = document.getElementById('f-modal-download');
        const modalFullscreen = document.getElementById('f-modal-fullscreen');
        const modalClose = document.getElementById('f-modal-close');

        const VALID_DRIVE_IDS = new Set(${validDriveIds});

        window.openAssetViewer = function(opts) {
          if (!modal) return;
          const rawTitle = opts.title || 'Document';
          let title = rawTitle
            .replace(/[📄👁️↗]/g, '')
            .replace(/\.(pdf|docx?|pptx?|xlsx?|png|jpe?g|webp)\b/gi, '')
            .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
            .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
            .replace(/_+/g, ' ')
            .trim();
          const titleMap = {"vinamilk paper 1 trusted nutrition product service discovery":"Vinamilk Paper 1: Trusted Nutrition Product-Service Discovery","vinamilk paper 2 everyday milk delivery operations scale":"Vinamilk Paper 2: Everyday Milk Delivery Operations & Scale","vinamilk paper 3 beyond the market capability allocation governance":"Vinamilk Paper 3: Beyond-the-Market Capability Allocation Governance","MFan Platform Fragmentation & Trust Chain Integration":"MFan Platform Fragmentation & Trust Chain Integration","MFan Platform Fragmentation Trust Chain Integration":"MFan Platform Fragmentation & Trust Chain Integration","Pham Thanh Phu Elfie Product Case Trust Safe Activation v4":"Elfie Product Case: Trust-Safe Activation (V4)","Post-Signing Artist Label Operations Case Study":"Post-Signing Artist / Label Operations Case Study","Shopee Account Restriction Resolution Portfolio Final 2026-08-05":"Shopee Account Restriction Resolution Case (Aug 2026)","FanMe Controlled Growth Native Editable Final":"FanMe Controlled Growth: Native Operating Framework","FanMe Controlled Growth Pilot":"FanMe Controlled Growth Pilot Monograph","FanMe Controlled Growth — Native Editable Final":"FanMe Controlled Growth: Native Operating Framework","DatVietVAC Ownership Belonging Merchandise Growth Case Study":"DatVietVAC: Ownership & Belonging Merchandise Growth","DatVietVAC Fandom Cards Case Study":"DatVietVAC Fandom Cards: Collectibles Product Line Case","VieSHOP — Fan-Centred Merchandise System":"VieSHOP: Fan-Centred Merchandise System Case","DatVietVAC: Who Owns the Fan Promise? — Full Case":"DatVietVAC: Who Owns the Fan Promise? (Full Case)","DatVietVAC Evidence Pack V1.1":"DatVietVAC Evidence Pack (V1.1 Forensic Audit)","Vietnam Diamond Market Crisis Case Study 2 Full Paper":"Vietnam’s 2026 Diamond-Market Crisis (Forensic Paper)","Adobe Account Restriction Comparative Case Study 2026-08-07":"Adobe Account Restriction: Comparative Case Study"};
          if (titleMap[title]) title = titleMap[title];
          else if (title === title.toLowerCase() && title.length > 2) {
            title = title.replace(/\b[a-z]/g, ch => ch.toUpperCase());
          }
          const type = opts.type || 'paper';
          const driveId = opts.driveId || '';
          const isImage = (type === 'image' || type === 'diagram');
          const badge = opts.badge || (isImage ? 'IMAGE' : (type === 'deck' ? 'DECK' : 'PDF'));

          if (driveId && !VALID_DRIVE_IDS.has(driveId)) return;

          // Image mode vs document mode
          modal.classList.toggle('is-image-mode', isImage);
          modal.classList.remove('is-fullscreen');
          modalFullscreen.textContent = '\\u26f6';
          modal.setAttribute('aria-label', title + ' preview');
          modalFrame.title = title + ' preview';

          if (!isImage) {
            modalTitle.textContent = title;
            modalTitle.title = title;
            modalBadge.textContent = badge;
            modalDrive.href = driveId ? 'https://drive.google.com/file/d/' + driveId + '/view' : '#';
            modalDownload.href = driveId ? 'https://drive.google.com/uc?export=download&id=' + driveId : '#';
          }

          modalSpinner.style.display = 'flex';
          modalError.hidden = true;
          modalErrorLink.href = 'https://drive.google.com/file/d/' + driveId + '/view';
          modalFrame.style.display = 'none';
          modalImg.style.display = 'none';

          if (isImage && driveId) {
            let triedThumbnail = false;
            modalImg.alt = title;
            // Click image to open full-res in new tab
            modalImg.onclick = () => window.open('https://drive.google.com/file/d/' + driveId + '/view', '_blank', 'noreferrer');
            modalImg.onload = () => {
              modalSpinner.style.display = 'none';
              modalImg.style.display = 'block';
            };
            modalImg.onerror = () => {
              if (!triedThumbnail) {
                triedThumbnail = true;
                modalImg.src = 'https://drive.google.com/thumbnail?id=' + driveId + '&sz=w1600';
              } else {
                modalSpinner.style.display = 'none';
                modalError.hidden = false;
              }
            };
            modalImg.src = 'https://lh3.googleusercontent.com/d/' + driveId + '=w1600';
          } else if (driveId) {
            modalFrame.src = 'https://drive.google.com/file/d/' + driveId + '/preview';
            modalFrame.onload = () => {
              modalSpinner.style.display = 'none';
              modalFrame.style.display = 'block';
            };
          }

          if (typeof modal.showModal === 'function') {
            modal.showModal();
          } else {
            modal.setAttribute('open', '');
          }
          document.body.style.overflow = 'hidden';
        };

        function closeAssetViewer() {
          if (!modal) return;
          if (typeof modal.close === 'function') {
            modal.close();
          } else {
            modal.removeAttribute('open');
          }
          modalFrame.removeAttribute('src');
          modalImg.onload = null;
          modalImg.onerror = null;
          modalImg.removeAttribute('src');
          document.body.style.overflow = '';
        }

        if (modalClose) modalClose.addEventListener('click', closeAssetViewer);
        const modalImgClose = document.getElementById('f-modal-img-close');
        if (modalImgClose) modalImgClose.addEventListener('click', closeAssetViewer);
        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAssetViewer();
          });
          modal.addEventListener('cancel', e => {
            e.preventDefault();
            closeAssetViewer();
          });
        }

        if (modalFullscreen) {
          modalFullscreen.addEventListener('click', () => {
            modal.classList.toggle('is-fullscreen');
            modalFullscreen.textContent = modal.classList.contains('is-fullscreen') ? '\u2715' : '\u26f6';
          });
        }

        document.querySelectorAll('.f-asset-trigger').forEach(btn => {
          if (btn.tagName !== 'BUTTON' && btn.tagName !== 'A') {
            btn.setAttribute('role', 'button');
            btn.tabIndex = 0;
            btn.setAttribute('aria-label', 'Enlarge ' + (btn.dataset.title || 'image'));
            btn.addEventListener('keydown', e => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
            });
          }
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            window.openAssetViewer({
              title: target.dataset.title || target.getAttribute('title') || 'Attached Document',
              driveId: target.dataset.driveid,
              type: target.dataset.type || 'paper',
              badge: target.dataset.badge
            });
          });
        });
        document.querySelectorAll('.f-table-wrap').forEach(table => {
          table.tabIndex = 0;
          table.setAttribute('role', 'region');
          table.setAttribute('aria-label', 'Scrollable table');
          const hint = document.createElement('p');
          hint.className = 'f-table-hint';
          hint.textContent = 'Scroll to see the full table →';
          table.before(hint);
          const updateTableHint = () => { hint.hidden = table.scrollWidth <= table.clientWidth + 1; };
          new ResizeObserver(updateTableHint).observe(table);
          updateTableHint();
        });
        document.querySelectorAll('.f-anchor').forEach(anchor => {
          const headingText = anchor.parentElement.textContent.replace(/^#\\s*/, '');
          anchor.setAttribute('aria-label', 'Copy link to ' + headingText);
          anchor.parentElement.setAttribute('aria-label', headingText);
        });
        document.querySelectorAll('.f-asset-ext-btn').forEach(link => {
          if (!link.getAttribute('aria-label')) link.setAttribute('aria-label', 'Open document in Google Drive');
        });
      })();
    </script>
  `;

  return `<!doctype html>
<html lang="en">
${layoutHead(`${item.title} — Phạm Thanh Phú`, item.question, nonce, { path: item.path, ogType: 'article', keywords: item.tags })}
<body>
  <a class="f-skip" href="#record">Skip to monograph text</a>
  ${layoutHeader("work", nonce)}
  <main>
    <section class="f-case-hero">
      <div class="f-wrap">
        <div class="f-crumb">
          <a href="/work">Work Library</a>
          <span class="f-crumb-divider" aria-hidden="true">/</span>
          <span>${escapeHtml(modeLabel)}</span>
        </div>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="f-case-dek">${escapeHtml(item.question)}</p>
        <div class="f-case-hero-stats">
          <span class="f-hero-stat">${readMinutes} min read</span>
          ${assetCount > 0 ? `<span class="f-hero-stat">${assetCount} artifact${assetCount > 1 ? 's' : ''}</span>` : ''}
        </div>
      </div>
    </section>

    <div class="f-case-meta">
      <dl class="f-wrap f-case-meta-grid">
        <div class="f-meta-cell">
          <dt>Maturity</dt>
          <dd>${escapeHtml(item.maturity)}</dd>
        </div>
        <div class="f-meta-cell">
          <dt>Research Type</dt>
          <dd>${escapeHtml(item.type)}</dd>
        </div>
        <div class="f-meta-cell">
          <dt>Research Mode</dt>
          <dd>${escapeHtml(modeLabel)}</dd>
        </div>
        <div class="f-meta-cell">
          <dt>Evidence Basis</dt>
          <dd>${escapeHtml(item.evidenceBasis || 'Outside-In · Public Evidence')}</dd>
        </div>
      </dl>
    </div>

    <div class="f-wrap f-case-reading">
      <aside class="f-case-rail" aria-label="Table of contents">
        <div class="f-rail-title">Contents</div>
        <ul id="f-toc-list" class="f-toc-list"></ul>
        <div class="f-rail-actions">
          <a href="/work" class="f-rail-btn">← All Works</a>
        </div>
      </aside>

      <article class="f-prose" id="record">
        <div class="f-case-action-bar" role="group" aria-label="Reading controls">
          <div class="f-case-action-left">
            <button type="button" id="f-btn-bookmark" class="f-action-pill" data-path="${escapeHtml(item.path)}" aria-pressed="false"><span class="bm-text">Save</span></button>
            <button type="button" id="f-btn-copy-url" class="f-action-pill">Copy link</button>
            <button type="button" id="f-cite-btn" class="f-action-pill" data-title="${escapeHtml(item.title)}">Cite</button>
          </div>
          <div class="f-case-action-right">
            <button type="button" id="f-btn-font-dec" class="f-action-pill" aria-label="Decrease text size">A−</button>
            <button type="button" id="f-btn-font-reset" class="f-action-pill f-reading-size" aria-label="Reset text size" title="Reset text size">18px</button>
            <button type="button" id="f-btn-font-inc" class="f-action-pill" aria-label="Increase text size">A+</button>
          </div>
        </div>
        <details class="f-mobile-toc">
          <summary>Contents</summary>
          <ul id="f-mobile-toc-list" class="f-mobile-toc-list"></ul>
        </details>
        ${renderedProse}

        ${relatedHtml}

        <div class="f-case-nav-rail">
          ${prevWork ? `<a href="${prevWork.path}" class="f-nav-prev"><span class="f-nav-sub">← Previous Monograph</span><span class="f-nav-title">${escapeHtml(prevWork.title)}</span></a>` : `<div></div>`}
          ${nextWork ? `<a href="${nextWork.path}" class="f-nav-next"><span class="f-nav-sub">Next Monograph →</span><span class="f-nav-title">${escapeHtml(nextWork.title)}</span></a>` : `<div></div>`}
        </div>
      </article>
    </div>

    <dialog id="f-asset-modal" class="f-asset-modal" aria-label="Artifact preview">
      <div class="f-modal-topbar">
        <div class="f-modal-title-wrap">
          <span id="f-modal-badge" class="f-modal-badge">PDF</span>
          <span id="f-modal-title" class="f-modal-title">Document</span>
        </div>
        <div class="f-modal-actions">
          <button id="f-modal-fullscreen" class="f-modal-btn" aria-label="Toggle fullscreen" title="Toggle fullscreen">&#x26F6;</button>
          <a id="f-modal-drive" class="f-modal-btn" href="#" target="_blank" rel="noreferrer" aria-label="Open in Google Drive" title="Open in Google Drive">&#x2197;</a>
          <a id="f-modal-download" class="f-modal-btn" href="#" download aria-label="Download document" title="Download">&#x2913;</a>
          <button id="f-modal-close" class="f-modal-btn close" aria-label="Close preview" title="Close (Esc)">&#x2715;</button>
        </div>
      </div>
      <div class="f-modal-content">
        <div id="f-modal-spinner" class="f-modal-spinner">
          <div class="f-spin-circle"></div>
          <span>Loading preview&hellip;</span>
        </div>
        <iframe id="f-modal-frame" class="f-modal-frame" title="Document preview" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups allow-forms" style="display:none;"></iframe>
        <img id="f-modal-img" class="f-modal-img" style="display:none;" alt="Preview">
        <div id="f-modal-error" hidden role="status" style="padding:24px;text-align:center;">
          <p>Preview could not be loaded.</p>
          <a id="f-modal-error-link" class="f-about-btn secondary" target="_blank" rel="noreferrer">Open in Google Drive ↗</a>
        </div>
        <button id="f-modal-img-close" class="f-modal-img-close" aria-label="Close preview" title="Close">&#x2715;</button>
      </div>
    </dialog>
  </main>
  ${layoutFooter(item.maturity, nonce, false)}
  ${clientScript}
</body>
</html>`;
}

function aboutPage(nonce) {
  return `<!doctype html>
<html lang="en">
${layoutHead("About — Phạm Thanh Phú", "About Phạm Thanh Phú — Business & Product Operations professional with 6+ years of commercial ownership, workflow systemization, and evidence-first systems design. Based in Ho Chi Minh City.", nonce, { path: "/about" })}
<body>
  <a class="f-skip" href="#about-content">Skip to about content</a>
  ${layoutHeader("about", nonce)}
  <main id="about-content">
    <!-- 1. Artistic Hero with Status & Coordinates -->
    <section class="f-about-hero-artistic">
      <div class="f-wrap">
        <h1>Commercial ground truth first.<br><em>Systems, product governance &amp; AI trust next.</em></h1>
        <p class="f-about-hero-dek">
          Business and operations professional with <strong>6+ years of founder-side ownership</strong> across B2B commercial operations, recurring-account retention, supplier and partner coordination, workflow design, and business systemization. I extend that operating foundation through independent product, platform, governance, and AI-trust work grounded in public evidence and explicit claim boundaries.
        </p>
        
        <div class="f-about-coords-bar">
          <span class="f-coord-tag"><strong>ROLE:</strong> Founder-side Operations</span>
          <span class="f-coord-divider">/</span>
          <span class="f-coord-tag"><strong>BASE:</strong> Ho Chi Minh City</span>
          <span class="f-coord-divider">/</span>
          <span class="f-coord-tag"><strong>ORIGIN:</strong> Dong Thap</span>
          <span class="f-coord-divider">/</span>
          <span class="f-coord-tag"><strong>LEGAL:</strong> HCMUL · Judicial Academy</span>
          <span class="f-coord-divider">/</span>
          <span class="f-coord-tag"><strong>FOCUS:</strong> Business &amp; Product Ops</span>
        </div>
      
        <div class="f-about-hero-actions">
          <a href="mailto:phamthanhphu97@gmail.com?subject=Contact%20-%20Pham%20Thanh%20Phu" class="f-about-btn primary">Direct Email: phamthanhphu97@gmail.com ✉</a>
          <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer" class="f-about-btn secondary">LinkedIn Profile ↗</a>
          <a href="mailto:phamthanhphu97@gmail.com?subject=Request%20Full%20CV%20-%20Pham%20Thanh%20Phu" class="f-about-btn secondary">Request Full CV / Dossier 📄</a>
        </div>

      </div>
    </section>

    <div class="f-wrap">
      <!-- Executive Impact Dashboard -->
      <div class="f-impact-dashboard">
        <div class="f-impact-stat">
          <b>${totalWorks}</b>
          <span>Research &amp; Applied Works</span>
        </div>
        <div class="f-impact-stat">
          <b>1</b>
          <span>Live System Prototype</span>
        </div>
        <div class="f-impact-stat">
          <b>${totalModes}</b>
          <span>Research Modes</span>
        </div>
        <div class="f-impact-stat">
          <b>Explicit</b>
          <span>Evidence Boundaries</span>
        </div>
      </div>

      <!-- 2. Bento Grid of Key Metric Pillars -->
      <section class="f-about-bento-grid" aria-label="Key Operating Highlights">
        <div class="f-bento-card">
          <div class="f-bento-card-top">
            <span class="f-bento-val">6+</span>
            <span class="f-bento-unit">Years</span>
          </div>
          <h3>Commercial Ownership</h3>
          <p>Founder-side Business Development &amp; Operations Manager at Phong Phu Stationery (Dong Thap, Jul 2019–Present).</p>
          <div class="f-bento-tag">Sourcing · Pricing · Fulfilment · QC</div>
        </div>

        <div class="f-bento-card">
          <div class="f-bento-card-top">
            <span class="f-bento-val">~800M</span>
            <span class="f-bento-unit">VND / Qtr</span>
          </div>
          <h3>B2B Revenue &amp; Margin</h3>
          <p>Average quarterly B2B and institutional supply revenue, excluding retail, while sustaining a 30–35% operating margin after expenses.</p>
          <div class="f-bento-tag">B2B Supply Revenue · Operating Margin</div>
        </div>

        <div class="f-bento-card">
          <div class="f-bento-card-top">
            <span class="f-bento-val">~95%</span>
            <span class="f-bento-unit">Retention</span>
          </div>
          <h3>50+ Recurring Accounts</h3>
          <p>Sustained ~95% recurring-account retention by account count across 50+ institutional and corporate clients.</p>
          <div class="f-bento-tag">Institutional Accounts · Long-Term Trust</div>
        </div>

        <div class="f-bento-card">
          <div class="f-bento-card-top">
            <span class="f-bento-val">&gt;90%</span>
            <span class="f-bento-unit">Delegated</span>
          </div>
          <h3>Systemized &amp; Delegated</h3>
          <p>Transferred &gt;90% of operating work since summer 2025 by moving core data into KiotViet and adding an experienced manager, part-time support, and delivery capacity.</p>
          <div class="f-bento-tag">KiotViet · SOPs · Workflow Design</div>
        </div>
      </section>

      <!-- 3. The Three Operating Horizons (Triptych Narrative) -->
      <section class="f-about-triptych" aria-label="Operating Narrative">
        <!-- Horizon 1 -->
        <article class="f-horizon-card">
          <aside class="f-horizon-aside">
            <span class="f-horizon-num">Horizon 01</span>
            <h3>Physical Commercial Grounding</h3>
            <span class="f-horizon-sub">Dong Thap · 2019 – Present</span>
          </aside>
          <div class="f-horizon-content">
            <p>
              My operating foundation began with the unglamorous but consequential work of keeping <strong>50+ institutional accounts, 10+ supplier partners, pricing, warehouse dispatch, cash collections, and dispute resolution connected</strong> in a live commercial market in Dong Thap.
            </p>
            <p>
              I translated fragmented demand from public-sector units, schools, factories, hospitals, courts, SMEs, and corporate branches of companies including Olam and Emivest into reliable purchasing, pricing, inventory, and delivery decisions—balancing customer value, capacity, margin, working capital, and fulfilment risk.
            </p>
            <div class="f-horizon-highlights">
              <div class="f-horizon-chip">
                <strong>Supplier Crisis Resilience</strong>
                When a supplier reduced discounts on an affected product line from 22% to 15%, I confirmed the policy, mobilized five alternative suppliers and brands, validated samples with customers, and replaced more than 80% of the affected line within one week.
              </div>
              <div class="f-horizon-chip">
                <strong>Process Standardization</strong>
                Moved product, pricing, VAT, invoice, inventory, and account data into KiotViet to improve visibility and handoffs; recruited an experienced manager and support capacity to reduce founder dependency.
              </div>
            </div>
          </div>
        </article>

        <!-- Horizon 2 -->
        <article class="f-horizon-card">
          <aside class="f-horizon-aside">
            <span class="f-horizon-num">Horizon 02</span>
            <h3>Legal Discipline &amp; Operations Support</h3>
            <span class="f-horizon-sub">Ho Chi Minh City &amp; Dong Thap</span>
          </aside>
          <div class="f-horizon-content">
            <p>
              Combining a <strong>Bachelor of Commercial Law (Ho Chi Minh City University of Law)</strong> and <strong>Lawyer Training Certificate (Judicial Academy)</strong> with live operations to maintain rigorous documentation, risk-transfer boundaries, and confidential stakeholder alignment.
            </p>
            <p>
              Alongside business operations, I provide independent commercial and legal operations support for 4+ continuing confidential clients—converting complex requirements into structured records, timelines, risk-aware options, and practical next steps.
            </p>
            <div class="f-horizon-highlights">
              <div class="f-horizon-chip">
                <strong>Evidence &amp; Risk Structuring</strong>
                Organized evidence, timelines, obligations, and negotiation preparation for 2+ resolved commercial matters with total value above VND 5B.
              </div>
              <div class="f-horizon-chip">
                <strong>Tax &amp; Contract Workflows</strong>
                Supported quarterly tax-document workflows for 5+ business households with annual revenue above VND 1B while maintaining confidential handling across contract, lease, payment, vendor, and commercial matters.
              </div>
            </div>
          </div>
        </article>

        <!-- Horizon 3 -->
        <article class="f-horizon-card">
          <aside class="f-horizon-aside">
            <span class="f-horizon-num">Horizon 03</span>
            <h3>Product Systems &amp; AI Trust</h3>
            <span class="f-horizon-sub">${totalWorks} Public Research &amp; Applied Works</span>
          </aside>
          <div class="f-horizon-content">
            <p>
              Earlier creator and community work—including venue activations, independent short-form content, and support around platform rules, monetization, Content ID, copyright, and account-support paths—gave me direct exposure to audience behavior and creator–fan operating realities.
            </p>
            <p>
              I later completed the <strong>Value Chain Management Specialization (University of Illinois Urbana-Champaign, 2026)</strong> and published ${totalWorks} public research and applied works, extending my operating foundation through independent outside-in work across HealthTech, fandom commerce, platform governance, and AI decision systems.
            </p>
            <div class="f-horizon-highlights">
              <div class="f-horizon-chip">
                <strong>Product Strategy &amp; Activation (Elfie &amp; FanMe)</strong>
                For Elfie, mapped activation quality, event taxonomy, user routines, guardrails, and a 0–12-week validation roadmap. For FanMe, designed a controlled-growth operating plan spanning artist onboarding, commerce, fulfilment, recovery, metrics, and go/no-go gates.
              </div>
              <div class="f-horizon-chip">
                <strong>Governance &amp; Explainable Trust (Shopee &amp; App)</strong>
                Through independent public-evidence work, mapped explainable customer-resolution pathways for account restrictions (Shopee and Adobe) and developed the publicly deployed Explainable Trust working prototype.
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- 4. Artistic Manifesto / Ethos Block -->
      <section class="f-about-manifesto">
        <span class="f-manifesto-kicker">[ OPERATING ETHOS &amp; PRINCIPLES ]</span>
        <blockquote>
          “Every durable business is built on two visible boundaries: what was promised, and what evidence confirms it was delivered. I turn messy, multi-stakeholder tensions into clear workflows, measurable accountability, and calm, reliable execution.”
        </blockquote>
        <span class="f-manifesto-author">— Phạm Thanh Phú · Business Operations &amp; Systems Thinking</span>
      </section>

      <!-- 5. Capabilities & Tooling Ledger -->
      <section aria-label="Capabilities and Tooling">
        <div class="f-human-head">
          <h2>Capabilities &amp; Core Tooling</h2>
          <span>Capabilities developed through operating experience, formal learning, and independent applied work</span>
        </div>
        <div class="f-about-toolkit-grid">
          <div class="f-toolkit-col">
            <h4>Operations &amp; Delivery</h4>
            <ul class="f-toolkit-list">
              <li>Process Mapping &amp; SOP Design</li>
              <li>Sourcing &amp; Vendor Management</li>
              <li>Inventory &amp; KiotViet ERP Setup</li>
              <li>Working Capital &amp; Margin Control</li>
              <li>Partner Coordination &amp; Quality Control</li>
              <li>Incident Containment &amp; Recovery</li>
            </ul>
          </div>
          <div class="f-toolkit-col">
            <h4>Product &amp; Strategy</h4>
            <ul class="f-toolkit-list">
              <li>Problem Discovery &amp; User Journeys</li>
              <li>Event Taxonomy &amp; Funnel Metrics</li>
              <li>Experiment Hypotheses &amp; Guardrails</li>
              <li>Value Chain Management (UIUC)</li>
              <li>Stage Gates &amp; Transfer Testing</li>
              <li>Customer Resolution &amp; Contestability</li>
            </ul>
          </div>
          <div class="f-toolkit-col">
            <h4>Data, Legal &amp; AI</h4>
            <ul class="f-toolkit-list">
              <li>Excel, Google Sheets, SQL, Python, Tableau</li>
              <li>Commercial Law (HCMUL) &amp; Judicial Academy</li>
              <li>ChatGPT, Claude &amp; Generative AI Tools</li>
              <li>AI Decision Provenance &amp; Evaluation Frameworks</li>
              <li>Notion, Asana, Trello Project Tracking</li>
              <li>TOEIC 825 Professional English</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 6. Action & Contact Dock -->
      <section class="f-about-cta-dock">
        <div class="f-cta-dock-text">
          <h3>Let's explore meaningful collaboration.</h3>
          <p>Open to Business Operations, Product Operations, and Product Strategy roles in Ho Chi Minh City.</p>
        </div>
        <div class="f-cta-dock-btns">
          <a href="mailto:phamthanhphu97@gmail.com" class="f-about-btn primary">Email Phu ↗</a>
          <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer" class="f-about-btn secondary">LinkedIn Profile ↗</a>
          <a href="/work" class="f-about-btn secondary">Browse ${totalWorks} Works →</a>
        </div>
      </section>
    </div>
  </main>
  ${layoutFooter("Ho Chi Minh City · 2026", nonce)}
</body>
</html>`;
}

// ============================================================================
// Worker Request Routing & Response Handlers
// ============================================================================

async function handleRequest(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";

  // 1. Static Image WebP Assets
  const staticHeaders = {
    "Cache-Control": "public, max-age=31536000, immutable",
    "X-Content-Type-Options": "nosniff"
  };
  
  if (path === "/favicon.ico" || path === "/favicon.svg") {
    return new Response(SITE_FAVICON_SVG, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }

  if (path === "/assets/home-cat.webp") {
    return new Response(HOME_CAT_WEBP, {
      headers: { ...staticHeaders, "Content-Type": "image/webp" }
    });
  }

  if (path === "/assets/phu-portrait.webp") {
    return new Response(PHU_PORTRAIT_WEBP, {
      headers: { ...staticHeaders, "Content-Type": "image/webp" }
    });
  }

  // Generate cryptographic nonce per-request for CSP
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  const nonce = btoa(String.fromCharCode(...nonceBytes));

  // Security Headers for HTML Pages
  const htmlHeaders = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    "Content-Security-Policy": `default-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https://drive.google.com https://*.googleusercontent.com https://ssl.gstatic.com data:; frame-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; connect-src 'self' https://drive.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;`,
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), camera=(), microphone=(), payment=()",
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
  };

  if (path === "/") {
    return new Response(homePage(nonce), { headers: htmlHeaders });
  }

  if (path === "/about") {
    return new Response(aboutPage(nonce), { headers: htmlHeaders });
  }

  if (path === "/work") {
    return new Response(workPage(nonce), { headers: htmlHeaders });
  }

  // Redirect legacy app subpaths to the integrated showcase
  if (path === "/apps/explainable-trust" || path === "/apps/explainable-trust/" || path === "/apps/explainable-trust_old" || path.startsWith("/apps/explainable-trust/")) {
    return Response.redirect(new URL("/explainable/", request.url).href, 301);
  }

  // Case Study Monograph Pages
  const matchedItem = finalWorkLibrary.find(item => item.path === path);
  if (matchedItem) {
    return new Response(casePage(matchedItem, nonce), { headers: htmlHeaders });
  }

  // Fallback 404
  return new Response(`<!doctype html>
<html lang="en">
${layoutHead("404 Not Found — Phạm Thanh Phú", "Research monograph not found or has been moved in the Work Library.", nonce)}
<body>
  ${layoutHeader("", nonce)}
  <main class="f-wrap" style="padding:80px 0;">
    <span class="f-overline" style="color:var(--copper);font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--fw-bold);letter-spacing:var(--tracking-wide);text-transform:uppercase;">404 Error</span>
    <h1 style="color:var(--navy);font-family:var(--font-display);font-size:var(--text-3xl);margin:8px 0 16px;">Research Document Not Found</h1>
    <p style="color:var(--muted);font-family:var(--font-sans);font-size:var(--text-md);margin-bottom:24px;">The document link you are looking for may have been updated or moved to a new section in the archive.</p>
    <a href="/work" class="f-rail-btn" style="display:inline-block;padding:10px 18px;">← Trở về Thư viện Nghiên cứu (Work Library)</a>
  </main>
  ${layoutFooter("Ho Chi Minh City · 2026", nonce)}
</body>
</html>`, {
    status: 404,
    headers: htmlHeaders
  });
}

export default {
  fetch: handleRequest
};

export const portfolioRoutes = ['/', '/work', '/about', ...finalWorkLibrary.map(item => item.path)];
