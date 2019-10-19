/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "349bfbc75d0e69f0032f5c117d13c042"
  },
  {
    "url": "assets/css/0.styles.cb6ccb2f.css",
    "revision": "55ad8e46631b6574d56733e82806f9b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4dd3eda0.js",
    "revision": "86c49f84050a1729c1ffdbd0f953ed7c"
  },
  {
    "url": "assets/js/11.f643e95c.js",
    "revision": "b844e299772127876867a50401763a43"
  },
  {
    "url": "assets/js/12.97e6f281.js",
    "revision": "6b1b1e2a2610dafb752c4c565204a7e2"
  },
  {
    "url": "assets/js/13.c5dae14f.js",
    "revision": "569339e3cc732e479dcaa8751d121c8f"
  },
  {
    "url": "assets/js/14.2a741103.js",
    "revision": "40a42eacc02936fc1132c93751cca0fe"
  },
  {
    "url": "assets/js/15.b4c7b770.js",
    "revision": "9da886237ab498d47f794bdcb9c5004f"
  },
  {
    "url": "assets/js/16.84f9f4c7.js",
    "revision": "bac918da680ea163a7b93158ec34cc66"
  },
  {
    "url": "assets/js/17.90bedc21.js",
    "revision": "4ead395e951e6e7435e536a81acfd76b"
  },
  {
    "url": "assets/js/18.b9bbdf6f.js",
    "revision": "b52bd0157a5dc14aeab86f7aeb9c5a36"
  },
  {
    "url": "assets/js/19.488df2fd.js",
    "revision": "d2b5b9d662e01b2290c0eaf0650d4bd8"
  },
  {
    "url": "assets/js/2.0f69efaa.js",
    "revision": "87f10116c06555296773c67392e13b51"
  },
  {
    "url": "assets/js/20.41b1f446.js",
    "revision": "8ceadbd25af490ff846b909349302dd1"
  },
  {
    "url": "assets/js/21.102572ec.js",
    "revision": "7f4e8a1cbd169fafe5e319858d7c285b"
  },
  {
    "url": "assets/js/22.1c37628a.js",
    "revision": "9fdc737db763c7099004bae511b7e5dd"
  },
  {
    "url": "assets/js/23.557c88aa.js",
    "revision": "78dfbbf87cd6e12c2995667fc9fb47f6"
  },
  {
    "url": "assets/js/24.cddf9b78.js",
    "revision": "fcbcac5e1d18a800e1102ebfa0c3f868"
  },
  {
    "url": "assets/js/25.1559ee83.js",
    "revision": "940656185df18fc505bd3c1f717806c3"
  },
  {
    "url": "assets/js/3.cfd3e97d.js",
    "revision": "c24314a29ea561b8f0d278f0d0a40bc6"
  },
  {
    "url": "assets/js/4.38268980.js",
    "revision": "5c6428f1badc73bd89d4c975d1cfe3f8"
  },
  {
    "url": "assets/js/5.2a4cb15c.js",
    "revision": "092a1d033442971bf51ba5ad8c8aca71"
  },
  {
    "url": "assets/js/6.d3a31782.js",
    "revision": "254ffe418835b8d74c76ad85fca542ae"
  },
  {
    "url": "assets/js/7.83d1c4ed.js",
    "revision": "2e4c1622556d299d0bd87fb91f8de2bd"
  },
  {
    "url": "assets/js/8.7b73188d.js",
    "revision": "dde725dc9018cdbd995386cf9af33fd3"
  },
  {
    "url": "assets/js/9.7aeaef87.js",
    "revision": "9177aa6efb76526c84feb5daa576a774"
  },
  {
    "url": "assets/js/app.6c60c13a.js",
    "revision": "7ff6d37011441e224ad7e6a125ede524"
  },
  {
    "url": "guide/battery.html",
    "revision": "b9da16c1f8f241394996fd23a899b0b6"
  },
  {
    "url": "guide/clipboard.html",
    "revision": "3e3a1fe2f0678028a351844a6cea04c5"
  },
  {
    "url": "guide/device-light.html",
    "revision": "d1050c58510f1adb7e41654ea78c5631"
  },
  {
    "url": "guide/device-motion.html",
    "revision": "773ba458ac97ab17489bcd5c3517dc00"
  },
  {
    "url": "guide/device-orientation.html",
    "revision": "1397838d86b3f6f37b66b150c3519d7a"
  },
  {
    "url": "guide/fetch.html",
    "revision": "d000058868a3af8dbcfa701632e32af7"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "e74c8fc7b995f270c07f82c2029c0481"
  },
  {
    "url": "guide/geolocation.html",
    "revision": "479266c03d3e846865de18891aeaf483"
  },
  {
    "url": "guide/index.html",
    "revision": "a3aef644694212461f332e75cab19560"
  },
  {
    "url": "guide/intersection-observer.html",
    "revision": "6db35f21dd2c9ed4ad070325e92f33e9"
  },
  {
    "url": "guide/local-storage.html",
    "revision": "17cb2966bca53c127a4605bd9e05ff53"
  },
  {
    "url": "guide/mouse-position.html",
    "revision": "d2b109fedb72e2b6a3fdeccf817af908"
  },
  {
    "url": "guide/network.html",
    "revision": "3b7a9aed6aa3d1c537c83b7b9d88464c"
  },
  {
    "url": "guide/preferred-color-scheme.html",
    "revision": "d2c5f40e219cf88aad1d3ea6eaa8f031"
  },
  {
    "url": "guide/preferred-languages.html",
    "revision": "86d82ed1dc744bac4118ac5d26e17bcc"
  },
  {
    "url": "guide/script.html",
    "revision": "b44030aa28816a5b8e99fb7122cc8d58"
  },
  {
    "url": "guide/scroll-position.html",
    "revision": "f1885905e06e74f86b1e00dc0abf1d67"
  },
  {
    "url": "guide/window-size.html",
    "revision": "67088e3cc7d9347132f3b3e3112fc526"
  },
  {
    "url": "index.html",
    "revision": "2d1e30cd341562acbdfdfe2c4a9c7839"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
