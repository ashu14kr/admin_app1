'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "863e8705a2e7f7f48aacb62e62c7bc7b",
"index.html": "8c8c01fd16f8cefea610fcd47043f3ae",
"/": "8c8c01fd16f8cefea610fcd47043f3ae",
"main.dart.js": "6bb29b5fbe9f75049542dd22390dca2f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "761b0aca81bb50965c49c6f78264a226",
".git/config": "e468c1eab7e7398be0f4383d645b2896",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/1cb1866ffb1e0b156f5a9b64d4e41d1d68fd5b": "da1b89f7ae7a750f84cea9aaa285fa52",
".git/objects/92/414a4f541edf4644536225f24cf04d4e97f1fb": "a70bdc5d68df7d007b1e27f948a4d333",
".git/objects/66/ae55fb6e6b0d441c5141f9501361a1f343ab59": "c6896f73bd923f723618cb0308e3466e",
".git/objects/68/d9c7d85f5b85432217bdd5a2613f985fb34f2b": "7616c7470276a870b9ebb338a5d0442e",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/92412b40171c5985505228a9730b3e1949d694": "b1f0a740fb29c3060590829c7f1b0c5a",
".git/objects/58/eea9abbc53b878fab7f9c0386ac731fb47a67e": "827a8145a71fc026ccb8bc9b797f33a1",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0e/515aebf7fc99b216769f680bd3190f4101c2a5": "4decc9732794aae81dda14caf700266d",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/3f7c609d80065e43584a73cc3e221814b2dcbd": "7be055c71855e7a5da5d4201c635bb87",
".git/objects/ac/cda820e5fae1bcfd3e69e5cd4a1f1611992b38": "89b98c538540172005578963e51e91b9",
".git/objects/ad/eea52431c9986a7948935b9937cf64764dc916": "051e8ffe63bf5a199ba9cad676654ffe",
".git/objects/ad/97edae0bb9738af5754a40b932aadb41b76bdf": "94edcde161b97257b4479362215e3af6",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d0/42d6c692d9729a65f426bf2caa1c3012bd15ed": "1ddf5cf2fd887e51ed420ca578797ff4",
".git/objects/da/196f74a78e0a9805bc19bc9544799353294e86": "dd518b88b087cdc23aaac8ca1fe1f184",
".git/objects/d1/d2e7ee89d6e80a9da2ece823a25970af789401": "cc85c55ae08b01f34435b6439522d69c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0ad6b7917b4c4c93a37498f27b311988e8be76": "c7ae0e856707307c62d699c3d20f3b76",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/fc/56c63682f7b0870e0952ccbc9dc99aee2f9c2b": "a7da5e300a1c915c87634e0e4801a61f",
".git/objects/f2/0d9a3143a8f89548d5529f8a2836a34ef79611": "92a0f49c8f5e6218a78d37aae863e76b",
".git/objects/f5/7f595d3a54694da8b1b5bf8c0d40d56a08458b": "0832beda61ce00bf242ade53d36e6ddc",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e4/b410c74e26def616e22a0fbff9219bc31a5b69": "e8923cbe3542e0627e7bfa55be156f09",
".git/objects/fb/e7db138bb96355e93efdaec6d5d53a678e3931": "eb066d1d3d172d8277220f05b6b2b9ed",
".git/objects/c1/29757f046b381dc683b345f75d670b8b0cb778": "36fe82186e981aee259d7a4e127e5995",
".git/objects/c6/319d8e10685c100b8cc192be136426381e884f": "a30ea743a7dfc6898a4c5db4b97983db",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/7eb3d9d85740c388365240f2d7cefe9607f8cc": "368f93a1fcf0c06c352887e9b6ae85ed",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/7c/94bfba0c284f592ada6609e072db5e4bea6846": "8e534e31bd13a3d16bdc844c9eef0881",
".git/objects/16/fd73dc7af9e76f1fc09d07e272c578721944ad": "b982c4b420fa04d428ff8489e024faf2",
".git/objects/42/a360c751254d724b329d4405fa529f4987e8f0": "7e1600121908f19d1cf92cf07dd9700d",
".git/objects/42/414a7c443ee6636cb4a5d58fde1e919c95654d": "209c729e4a446413becea64eb96eb435",
".git/objects/89/949893898e24a860c2ae3cdef7abe762b44a19": "c32773f0d8489a42e1f0171b730846cf",
".git/objects/73/066bce898d25ec32232381c4360b4e00779d08": "639a5734218a1d0713eaae09487007fa",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/17/74de626e1e6c85a92b95d360dc1f424f29e977": "cafa0504a58d3c6a68d816fc02176c13",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d38af5ad23025e835dca2a889a98e61c398c19": "03be26b3e82c11d4a9c82afd8291ac25",
".git/objects/4c/77b6f88120a7e1fc6031ef4f4ccfce39f17910": "2ae18b3d65be061327f0a66845b5d5d7",
".git/objects/81/483eecc8b4c008441ffd0b6f26084894ebff8b": "3801e2d1d946cc93a8d925a36ac53c96",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/f4442800580604ce25883ab88e839d808e1777": "eb1905466863ae656300e2869d4ddd28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/a9c665f129af962aeab27f5a8b4cdfe5163293": "f1e9b25e668ebc2361afb9c9126433f0",
".git/objects/07/7d565fce6c9dfeffb5559555d58bde7ae18bc0": "25ac6d9706f7a62817fdfb50d76e627b",
".git/objects/6e/27e8eac35f5f61770608958bab4f3aa2845be0": "94d907238b876ea58bfe520b3d58f181",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/fb07c10c55eea0f58bc7e163837fabe961ecdf": "ad38d63678bec83ebdb5818432e87ef1",
".git/objects/31/d4372ef8513fec9c613e9d485b6252c26e01d4": "02940aba8097dd29e3b06762e44f7a44",
".git/objects/98/3e99a8d54f29dce3a530f0c4bba99a07930bb7": "dd035ecc4a59116183dff69d61cd476a",
".git/objects/5b/81af0a0366f3e05c476b41be5609512559e8dd": "b18fe0fce12de2029cbc75db58048e11",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/06/dddb45f6190c9c2c47be7a31bcc86224cecca9": "6c8981fd4c5632aba0d441da403abad1",
".git/objects/06/490d8acc460735c5a71344aa3752beefd313a0": "d6c78b201b908bc062da1c08547803b5",
".git/objects/39/bb7a9c3e50765b97fa96da8a058b8d7d851224": "7aa4aecf792d2c2d141e54693044b208",
".git/objects/52/ecbfa7080f40959b7a06cd8d0d3567fe6ac6fb": "c8ea36deb239a7944ea7eb45939a3daf",
".git/objects/0a/d7849fcc564a97c2f6a02ad92c52e917601f5a": "a6f285f022dda22ac8129e9bf58a9d7b",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/a9/28585c9117f7448aa85d223e3dae05e51b1d17": "757cad37c6d50fc91d28eb8d2ddbbbba",
".git/objects/af/40476922299dc5edb20ca5ef17fdff531fe9c9": "a606a1fc1466de52277162c1513ee095",
".git/objects/b7/9b33651a0c3904114bf3b7bf649b3135a7cfd0": "a51110b2c63c307e76f7c9ee279a30d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/3a96d9ccf83974bf4b222c226889299467dc7e": "6fe7a733b602551a193904fc7e706972",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fac434b442675f44b86c3b88b71716a2a5bcec": "4c8ab26bb78fb7292a4a02163135dc56",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c2/29e739c212cf120e34d0f004d8311b1f75ac2d": "f83fbb56162c3f9c4deed62fd54d7377",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/738b3a7908e05e7cc4e17c9802c005be36d8c6": "57ae5d40848096f4d78bdb82ea198f64",
".git/objects/e0/f3a573a22649d924c8f0ba792100c05bfee696": "274f7910da00d6ad95d271dd853fbb09",
".git/objects/e0/704d9723a0ec5fe40079365a61ad453721e92e": "ad1bab8b5697db0accb054275288be91",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/1e/37b788ef0e9f59c9181e35ca206a25a83a98da": "d924328955602953081e61c6832d2372",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/71/e350e1ca1d66476d33d5d8c8c3914c0ea5a617": "81408061923a285510815bde0422a101",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/07caa79a014aeb1a92e2b64a90f301c8bbd47e": "5b33f443ff5e45056a3423cf0d84ff78",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/2b/b723332c69fc3493425f5ebd7a81723d87188d": "8dc7ce9e3d9c1866a8a613953335030f",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "567079cc73002e2ebc28f3dc36473d65",
".git/logs/refs/heads/main": "2a7738b884efd8195e456fafbf0a521e",
".git/logs/refs/remotes/origin/main": "63ed6c83e8fbb6a40df2fa55d9473298",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "503bfd99ae282bb29bb71b1aa35e8313",
".git/refs/remotes/origin/main": "503bfd99ae282bb29bb71b1aa35e8313",
".git/index": "ee76857157aef5369c92c4f4261e6fef",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "43cbf5680c9e561f7029b77022dae9c7",
"assets/NOTICES": "294bd8975d15923af77ff1c5d6982aa3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo.png": "1e25747659302d31ba6c4b8fe3754503",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
