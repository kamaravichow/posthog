import { eventWithTime } from '@rrweb/types'
import { prepareRecordingSnapshots } from 'scenes/session-recordings/player/sessionRecordingDataLogic'

import { RecordingSnapshot } from '~/types'

const lineOne =
    '{"window_id":"187d7c761a0525d-05f175487d4b65-1d525634-384000-187d7c761a149d0","data":[{"type":4,"data":{"href":"http://localhost:3000/","width":2560,"height":1304},"timestamp":1682952380877},{"type":2,"data":{"node":{"type":0,"childNodes":[{"type":1,"name":"html","publicId":"","systemId":"","id":2},{"type":2,"tagName":"html","attributes":{"lang":"en"},"childNodes":[{"type":2,"tagName":"head","attributes":{},"childNodes":[{"type":2,"tagName":"meta","attributes":{"charset":"utf-8"},"childNodes":[],"id":5},{"type":2,"tagName":"title","attributes":{},"childNodes":[{"type":3,"textContent":"PostHog","id":7}],"id":6},{"type":2,"tagName":"meta","attributes":{"name":"viewport","content":"width=device-width, initial-scale=1"},"childNodes":[],"id":8},{"type":2,"tagName":"meta","attributes":{"name":"next-head-count","content":"3"},"childNodes":[],"id":9},{"type":2,"tagName":"noscript","attributes":{"data-n-css":""},"childNodes":[],"id":10},{"type":2,"tagName":"script","attributes":{"defer":"","nomodule":"","src":"http://localhost:3000/_next/static/chunks/polyfills.js?ts=1682952380635"},"childNodes":[],"id":11},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/webpack.js?ts=1682952380635","defer":""},"childNodes":[],"id":12},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/main.js?ts=1682952380635","defer":""},"childNodes":[],"id":13},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/pages/_app.js?ts=1682952380635","defer":""},"childNodes":[],"id":14},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/pages/index.js?ts=1682952380635","defer":""},"childNodes":[],"id":15},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/development/_buildManifest.js?ts=1682952380635","defer":""},"childNodes":[],"id":16},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/development/_ssgManifest.js?ts=1682952380635","defer":""},"childNodes":[],"id":17},{"type":2,"tagName":"style","attributes":{},"childNodes":[{"type":3,"textContent":"main { margin: 0px auto; max-width: 1200px; padding: 2rem; font-family: helvetica, arial, sans-serif; }.buttons { display: flex; gap: 0.5rem; }","isStyle":true,"id":19}],"id":18},{"type":2,"tagName":"noscript","attributes":{"id":"__next_css__DO_NOT_USE__"},"childNodes":[],"id":20}],"id":4},{"type":2,"tagName":"body","attributes":{},"childNodes":[{"type":2,"tagName":"div","attributes":{"id":"__next"},"childNodes":[{"type":2,"tagName":"main","attributes":{},"childNodes":[{"type":2,"tagName":"h1","attributes":{},"childNodes":[{"type":3,"textContent":"PostHog React","id":25}],"id":24},{"type":2,"tagName":"div","attributes":{"class":"buttons"},"childNodes":[{"type":2,"tagName":"button","attributes":{},"childNodes":[{"type":3,"textContent":"Capture event","id":28}],"id":27},{"type":2,"tagName":"button","attributes":{"data-attr":"autocapture-button"},"childNodes":[{"type":3,"textContent":"Autocapture buttons","id":30}],"id":29},{"type":2,"tagName":"button","attributes":{"class":"ph-no-capture","rr_width":"155.3046875px","rr_height":"21.5px"},"childNodes":[],"id":31}],"id":26},{"type":2,"tagName":"p","attributes":{},"childNodes":[{"type":3,"textContent":"Feature flag response: ","id":33},{"type":3,"textContent":"false","id":34}],"id":32}],"id":23}],"id":22},{"type":2,"tagName":"script","attributes":{"type":"text/javascript","src":"http://localhost:8000/static/recorder-v2.js?v=1.53.1"},"childNodes":[],"id":35},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1682952380635"},"childNodes":[],"id":36},{"type":2,"tagName":"script","attributes":{"id":"__NEXT_DATA__","type":"application/json"},"childNodes":[{"type":3,"textContent":"SCRIPT_PLACEHOLDER","id":38}],"id":37},{"type":2,"tagName":"div","attributes":{"id":"__next-build-watcher","style":"position: fixed; bottom: 10px; right: 20px; width: 0px; height: 0px; z-index: 99999;"},"childNodes":[{"type":2,"tagName":"div","attributes":{"id":"container"},"childNodes":[{"type":3,"textContent":"\\n    ","id":41},{"type":2,"tagName":"div","attributes":{"id":"icon-wrapper"},"childNodes":[{"type":3,"textContent":"\\n      ","id":43},{"type":2,"tagName":"svg","attributes":{"viewBox":"0 0 226 200"},"childNodes":[{"type":3,"textContent":"\\n        ","id":45},{"type":2,"tagName":"defs","attributes":{},"childNodes":[{"type":3,"textContent":"\\n          ","id":47},{"type":2,"tagName":"lineargradient","attributes":{"x1":"114.720775%","y1":"181.283245%","x2":"39.5399306%","y2":"100%","id":"linear-gradient"},"childNodes":[{"type":3,"textContent":"\\n            ","id":49},{"type":2,"tagName":"stop","attributes":{"stop-color":"#000000","offset":"0%"},"childNodes":[],"isSVG":true,"id":50},{"type":3,"textContent":"\\n            ","id":51},{"type":2,"tagName":"stop","attributes":{"stop-color":"#FFFFFF","offset":"100%"},"childNodes":[],"isSVG":true,"id":52},{"type":3,"textContent":"\\n          ","id":53}],"isSVG":true,"id":48},{"type":3,"textContent":"\\n        ","id":54}],"isSVG":true,"id":46},{"type":3,"textContent":"\\n        ","id":55},{"type":2,"tagName":"g","attributes":{"id":"icon-group","fill":"none","stroke":"url(#linear-gradient)","stroke-width":"18"},"childNodes":[{"type":3,"textContent":"\\n          ","id":57},{"type":2,"tagName":"path","attributes":{"d":"M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z"},"childNodes":[],"isSVG":true,"id":58},{"type":3,"textContent":"\\n        ","id":59}],"isSVG":true,"id":56},{"type":3,"textContent":"\\n      ","id":60}],"isSVG":true,"id":44},{"type":3,"textContent":"\\n    ","id":61}],"id":42},{"type":3,"textContent":"\\n  ","id":62}],"id":40,"isShadow":true},{"type":2,"tagName":"style","attributes":{},"childNodes":[{"type":3,"textContent":"#container { position: absolute; bottom: 10px; right: 30px; border-radius: 3px; background: rgb(0, 0, 0); color: rgb(255, 255, 255); font: initial; cursor: initial; letter-spacing: initial; text-shadow: initial; text-transform: initial; visibility: initial; padding: 7px 10px 8px; align-items: center; box-shadow: rgba(0, 0, 0, 0.25) 0px 11px 40px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px; display: none; opacity: 0; transition: opacity 0.1s ease 0s, bottom 0.1s ease 0s; animation: 0.1s ease-in-out 0s 1 normal none running fade-in; }#container.visible { display: flex; }#container.building { bottom: 20px; opacity: 1; }#icon-wrapper { width: 16px; height: 16px; }#icon-wrapper > svg { width: 100%; height: 100%; }#icon-group { animation: 1s ease-in-out 0s infinite normal both running strokedash; }@keyframes fade-in { \\n  0% { bottom: 10px; opacity: 0; }\\n  100% { bottom: 20px; opacity: 1; }\\n}@keyframes strokedash { \\n  0% { stroke-dasharray: 0, 226; }\\n  80%, 100% { stroke-dasharray: 659, 226; }\\n}","isStyle":true,"id":64}],"id":63,"isShadow":true}],"id":39,"isShadowHost":true},{"type":2,"tagName":"next-route-announcer","attributes":{},"childNodes":[{"type":2,"tagName":"p","attributes":{"aria-live":"assertive","id":"__next-route-announcer__","role":"alert","style":"border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"},"childNodes":[],"id":66}],"id":65}],"id":21}],"id":3}],"id":1},"initialOffset":{"left":0,"top":0}},"timestamp":1682952380882},{"type":3,"data":{"source":1,"positions":[{"x":2027,"y":120,"id":22,"timeOffset":0}]},"timestamp":1682952383040},{"type":3,"data":{"source":2,"type":1,"id":3,"x":1618.84765625,"y":299.01953125},"timestamp":1682952383262},{"type":3,"data":{"source":2,"type":0,"id":3,"x":1618.84765625,"y":299.01953125},"timestamp":1682952383263},{"type":3,"data":{"source":2,"type":2,"id":3,"x":1618,"y":299,"pointerType":0},"timestamp":1682952383264},{"type":3,"data":{"source":1,"positions":[{"x":1618,"y":299,"id":3,"timeOffset":-435},{"x":1609,"y":296,"id":3,"timeOffset":-4}]},"timestamp":1682952383543},{"type":3,"data":{"source":1,"positions":[{"x":1239,"y":216,"id":23,"timeOffset":-460},{"x":847,"y":210,"id":23,"timeOffset":-409},{"x":788,"y":215,"id":23,"timeOffset":-142},{"x":754,"y":163,"id":32,"timeOffset":-77},{"x":735,"y":135,"id":27,"timeOffset":-25}]},"timestamp":1682952384050},{"type":3,"data":{"source":2,"type":1,"id":27,"x":729.30859375,"y":124.6875},"timestamp":1682952384230},{"type":3,"data":{"source":2,"type":5,"id":27},"timestamp":1682952384231},{"type":3,"data":{"source":2,"type":0,"id":27,"x":729.30859375,"y":124.5546875},"timestamp":1682952384310},{"type":3,"data":{"source":2,"type":2,"id":27,"x":729,"y":124,"pointerType":0},"timestamp":1682952384313},{"type":3,"data":{"source":2,"type":1,"id":27,"x":729.30859375,"y":124.0546875},"timestamp":1682952384447},{"type":3,"data":{"source":2,"type":0,"id":27,"x":729.30859375,"y":124.0546875},"timestamp":1682952384460},{"type":3,"data":{"source":2,"type":2,"id":27,"x":729,"y":124,"pointerType":0},"timestamp":1682952384463},{"type":3,"data":{"source":2,"type":4,"id":27,"x":729,"y":124},"timestamp":1682952384464},{"type":3,"data":{"source":1,"positions":[{"x":729,"y":125,"id":27,"timeOffset":-466},{"x":729,"y":125,"id":27,"timeOffset":-399},{"x":729,"y":124,"id":27,"timeOffset":-346},{"x":729,"y":124,"id":27,"timeOffset":-231}]},"timestamp":1682952384555},{"type":3,"data":{"source":2,"type":1,"id":27,"x":729.30859375,"y":124.0546875},"timestamp":1682952384559},{"type":3,"data":{"source":2,"type":0,"id":27,"x":729.30859375,"y":124.0546875},"timestamp":1682952384675},{"type":3,"data":{"source":2,"type":2,"id":27,"x":729,"y":124,"pointerType":0},"timestamp":1682952384676},{"type":3,"data":{"source":2,"type":1,"id":27,"x":729.30859375,"y":124.0546875},"timestamp":1682952384709},{"type":3,"data":{"source":2,"type":0,"id":27,"x":729.30859375,"y":124.0546875},"timestamp":1682952384810},{"type":3,"data":{"source":2,"type":2,"id":27,"x":729,"y":124,"pointerType":0},"timestamp":1682952384811},{"type":3,"data":{"source":1,"positions":[{"x":713,"y":137,"id":27,"timeOffset":-49}]},"timestamp":1682952385058},{"type":3,"data":{"source":1,"positions":[{"x":605,"y":266,"id":3,"timeOffset":-487}]},"timestamp":1682952385562},{"type":3,"data":{"source":2,"type":6,"id":27},"timestamp":1682952385719},{"type":3,"data":{"source":4,"width":2560,"height":476},"timestamp":1682952385738},{"type":3,"data":{"source":1,"positions":[{"x":604,"y":266,"id":3,"timeOffset":-22}]},"timestamp":1682952386063},{"type":3,"data":{"source":1,"positions":[{"x":453,"y":173,"id":22,"timeOffset":-475},{"x":265,"y":32,"id":22,"timeOffset":-418}]},"timestamp":1682952386571}]}'
const lineTwo =
    '{"window_id":"187d7c77dfe1d45-08bdcaf91135a2-1d525634-384000-187d7c77dff39a6","data":[{"type":4,"data":{"href":"http://localhost:3000/","width":2560,"height":1304},"timestamp":1682952388104},{"type":2,"data":{"node":{"type":0,"childNodes":[{"type":1,"name":"html","publicId":"","systemId":"","id":2},{"type":2,"tagName":"html","attributes":{"lang":"en"},"childNodes":[{"type":2,"tagName":"head","attributes":{},"childNodes":[{"type":2,"tagName":"style","attributes":{"data-next-hide-fouc":"true"},"childNodes":[{"type":3,"textContent":"body { display: none; }","isStyle":true,"id":6}],"id":5},{"type":2,"tagName":"noscript","attributes":{"data-next-hide-fouc":"true"},"childNodes":[{"type":3,"textContent":"<style>body{display:block}</style>","id":8}],"id":7},{"type":2,"tagName":"meta","attributes":{"charset":"utf-8"},"childNodes":[],"id":9},{"type":2,"tagName":"title","attributes":{},"childNodes":[{"type":3,"textContent":"PostHog","id":11}],"id":10},{"type":2,"tagName":"meta","attributes":{"name":"viewport","content":"width=device-width, initial-scale=1"},"childNodes":[],"id":12},{"type":2,"tagName":"meta","attributes":{"name":"next-head-count","content":"3"},"childNodes":[],"id":13},{"type":2,"tagName":"noscript","attributes":{"data-n-css":""},"childNodes":[],"id":14},{"type":2,"tagName":"script","attributes":{"defer":"","nomodule":"","src":"http://localhost:3000/_next/static/chunks/polyfills.js?ts=1682952387901"},"childNodes":[],"id":15},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/webpack.js?ts=1682952387901","defer":""},"childNodes":[],"id":16},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/main.js?ts=1682952387901","defer":""},"childNodes":[],"id":17},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/pages/_app.js?ts=1682952387901","defer":""},"childNodes":[],"id":18},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/pages/index.js?ts=1682952387901","defer":""},"childNodes":[],"id":19},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/development/_buildManifest.js?ts=1682952387901","defer":""},"childNodes":[],"id":20},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/development/_ssgManifest.js?ts=1682952387901","defer":""},"childNodes":[],"id":21},{"type":2,"tagName":"style","attributes":{},"childNodes":[{"type":3,"textContent":"main { margin: 0px auto; max-width: 1200px; padding: 2rem; font-family: helvetica, arial, sans-serif; }.buttons { display: flex; gap: 0.5rem; }","isStyle":true,"id":23}],"id":22},{"type":2,"tagName":"noscript","attributes":{"id":"__next_css__DO_NOT_USE__"},"childNodes":[],"id":24}],"id":4},{"type":2,"tagName":"body","attributes":{},"childNodes":[{"type":2,"tagName":"div","attributes":{"id":"__next"},"childNodes":[{"type":2,"tagName":"main","attributes":{},"childNodes":[{"type":2,"tagName":"h1","attributes":{},"childNodes":[{"type":3,"textContent":"PostHog React","id":29}],"id":28},{"type":2,"tagName":"div","attributes":{"class":"buttons"},"childNodes":[{"type":2,"tagName":"button","attributes":{},"childNodes":[{"type":3,"textContent":"Capture event","id":32}],"id":31},{"type":2,"tagName":"button","attributes":{"data-attr":"autocapture-button"},"childNodes":[{"type":3,"textContent":"Autocapture buttons","id":34}],"id":33},{"type":2,"tagName":"button","attributes":{"class":"ph-no-capture","rr_width":"0px","rr_height":"0px"},"childNodes":[],"id":35}],"id":30},{"type":2,"tagName":"p","attributes":{},"childNodes":[{"type":3,"textContent":"Feature flag response: ","id":37}],"id":36}],"id":27}],"id":26},{"type":2,"tagName":"script","attributes":{"type":"text/javascript","src":"http://localhost:8000/static/recorder-v2.js?v=1.53.1"},"childNodes":[],"id":38},{"type":2,"tagName":"script","attributes":{"src":"http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1682952387901"},"childNodes":[],"id":39},{"type":2,"tagName":"script","attributes":{"id":"__NEXT_DATA__","type":"application/json"},"childNodes":[{"type":3,"textContent":"SCRIPT_PLACEHOLDER","id":41}],"id":40}],"id":25}],"id":3}],"id":1},"initialOffset":{"left":0,"top":0}},"timestamp":1682952388106},{"type":3,"data":{"source":0,"texts":[],"attributes":[],"removes":[{"parentId":4,"id":7},{"parentId":4,"id":5}],"adds":[]},"timestamp":1682952388108},{"type":3,"data":{"source":0,"texts":[],"attributes":[],"removes":[],"adds":[{"parentId":25,"nextId":null,"node":{"type":2,"tagName":"div","attributes":{"id":"__next-build-watcher","style":"position: fixed; bottom: 10px; right: 20px; width: 0px; height: 0px; z-index: 99999;"},"childNodes":[],"id":42,"isShadowHost":true}},{"parentId":42,"nextId":null,"node":{"type":2,"tagName":"style","attributes":{},"childNodes":[],"id":43,"isShadow":true}},{"parentId":43,"nextId":null,"node":{"type":3,"textContent":"#container { position: absolute; bottom: 10px; right: 30px; border-radius: 3px; background: rgb(0, 0, 0); color: rgb(255, 255, 255); font: initial; cursor: initial; letter-spacing: initial; text-shadow: initial; text-transform: initial; visibility: initial; padding: 7px 10px 8px; align-items: center; box-shadow: rgba(0, 0, 0, 0.25) 0px 11px 40px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px; display: none; opacity: 0; transition: opacity 0.1s ease 0s, bottom 0.1s ease 0s; animation: 0.1s ease-in-out 0s 1 normal none running fade-in; }#container.visible { display: flex; }#container.building { bottom: 20px; opacity: 1; }#icon-wrapper { width: 16px; height: 16px; }#icon-wrapper > svg { width: 100%; height: 100%; }#icon-group { animation: 1s ease-in-out 0s infinite normal both running strokedash; }@keyframes fade-in { \\n  0% { bottom: 10px; opacity: 0; }\\n  100% { bottom: 20px; opacity: 1; }\\n}@keyframes strokedash { \\n  0% { stroke-dasharray: 0, 226; }\\n  80%, 100% { stroke-dasharray: 659, 226; }\\n}","isStyle":true,"id":44}},{"parentId":42,"nextId":43,"node":{"type":2,"tagName":"div","attributes":{"id":"container"},"childNodes":[],"id":45,"isShadow":true}},{"parentId":45,"nextId":null,"node":{"type":3,"textContent":"\\n  ","id":46}},{"parentId":45,"nextId":46,"node":{"type":2,"tagName":"div","attributes":{"id":"icon-wrapper"},"childNodes":[],"id":47}},{"parentId":45,"nextId":47,"node":{"type":3,"textContent":"\\n    ","id":48}},{"parentId":47,"nextId":null,"node":{"type":3,"textContent":"\\n    ","id":49}},{"parentId":47,"nextId":49,"node":{"type":2,"tagName":"svg","attributes":{"viewBox":"0 0 226 200"},"childNodes":[],"isSVG":true,"id":50}},{"parentId":47,"nextId":50,"node":{"type":3,"textContent":"\\n      ","id":51}},{"parentId":50,"nextId":null,"node":{"type":3,"textContent":"\\n      ","id":52}},{"parentId":50,"nextId":52,"node":{"type":2,"tagName":"g","attributes":{"id":"icon-group","fill":"none","stroke":"url(#linear-gradient)","stroke-width":"18"},"childNodes":[],"isSVG":true,"id":53}},{"parentId":50,"nextId":53,"node":{"type":3,"textContent":"\\n        ","id":54}},{"parentId":50,"nextId":54,"node":{"type":2,"tagName":"defs","attributes":{},"childNodes":[],"isSVG":true,"id":55}},{"parentId":50,"nextId":55,"node":{"type":3,"textContent":"\\n        ","id":56}},{"parentId":55,"nextId":null,"node":{"type":3,"textContent":"\\n        ","id":57}},{"parentId":55,"nextId":57,"node":{"type":2,"tagName":"lineargradient","attributes":{"x1":"114.720775%","y1":"181.283245%","x2":"39.5399306%","y2":"100%","id":"linear-gradient"},"childNodes":[],"isSVG":true,"id":58}},{"parentId":55,"nextId":58,"node":{"type":3,"textContent":"\\n          ","id":59}},{"parentId":58,"nextId":null,"node":{"type":3,"textContent":"\\n          ","id":60}},{"parentId":58,"nextId":60,"node":{"type":2,"tagName":"stop","attributes":{"stop-color":"#FFFFFF","offset":"100%"},"childNodes":[],"isSVG":true,"id":61}},{"parentId":58,"nextId":61,"node":{"type":3,"textContent":"\\n            ","id":62}},{"parentId":58,"nextId":62,"node":{"type":2,"tagName":"stop","attributes":{"stop-color":"#000000","offset":"0%"},"childNodes":[],"isSVG":true,"id":63}},{"parentId":58,"nextId":63,"node":{"type":3,"textContent":"\\n            ","id":64}},{"parentId":53,"nextId":null,"node":{"type":3,"textContent":"\\n        ","id":65}},{"parentId":53,"nextId":65,"node":{"type":2,"tagName":"path","attributes":{"d":"M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z"},"childNodes":[],"isSVG":true,"id":66}},{"parentId":53,"nextId":66,"node":{"type":3,"textContent":"\\n          ","id":67}}]},"timestamp":1682952388117},{"type":3,"data":{"source":0,"texts":[],"attributes":[],"removes":[{"parentId":10,"id":11},{"parentId":4,"id":12}],"adds":[{"parentId":10,"nextId":null,"node":{"type":3,"textContent":"PostHog","id":68}},{"parentId":4,"nextId":13,"node":{"type":2,"tagName":"meta","attributes":{"name":"viewport","content":"width=device-width, initial-scale=1"},"childNodes":[],"id":69}},{"parentId":25,"nextId":null,"node":{"type":2,"tagName":"next-route-announcer","attributes":{},"childNodes":[],"id":70}},{"parentId":70,"nextId":null,"node":{"type":2,"tagName":"p","attributes":{"aria-live":"assertive","id":"__next-route-announcer__","role":"alert","style":"border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"},"childNodes":[],"id":71}},{"parentId":36,"nextId":null,"node":{"type":3,"textContent":"false","id":72}}]},"timestamp":1682952388132},{"type":3,"data":{"source":1,"positions":[{"x":294,"y":7,"id":26,"timeOffset":0}]},"timestamp":1682952388659},{"type":3,"data":{"source":1,"positions":[{"x":577,"y":269,"id":3,"timeOffset":-438},{"x":684,"y":304,"id":3,"timeOffset":-239},{"x":762,"y":244,"id":3,"timeOffset":-174},{"x":815,"y":203,"id":27,"timeOffset":-123}]},"timestamp":1682952389163},{"type":3,"data":{"source":1,"positions":[{"x":819,"y":197,"id":27,"timeOffset":-427},{"x":831,"y":176,"id":27,"timeOffset":-362},{"x":842,"y":157,"id":36,"timeOffset":-312},{"x":850,"y":142,"id":27,"timeOffset":-261},{"x":852,"y":137,"id":33,"timeOffset":-176},{"x":852,"y":133,"id":33,"timeOffset":-111},{"x":852,"y":133,"id":33,"timeOffset":-28}]},"timestamp":1682952389668},{"type":3,"data":{"source":2,"type":1,"id":33,"x":852.7421875,"y":133.1640625},"timestamp":1682952389698},{"type":3,"data":{"source":2,"type":5,"id":33},"timestamp":1682952389699},{"type":3,"data":{"source":2,"type":0,"id":33,"x":852.7421875,"y":133.1640625},"timestamp":1682952389798},{"type":3,"data":{"source":2,"type":2,"id":33,"x":852,"y":133,"pointerType":0},"timestamp":1682952389798},{"type":3,"data":{"source":2,"type":1,"id":33,"x":852.7421875,"y":133.1640625},"timestamp":1682952389943},{"type":3,"data":{"source":2,"type":0,"id":33,"x":852.7421875,"y":133.1640625},"timestamp":1682952390043},{"type":3,"data":{"source":2,"type":2,"id":33,"x":852,"y":133,"pointerType":0},"timestamp":1682952390044},{"type":3,"data":{"source":2,"type":4,"id":33,"x":852,"y":133},"timestamp":1682952390047},{"type":3,"data":{"source":2,"type":1,"id":33,"x":852.7421875,"y":133.1640625},"timestamp":1682952390112},{"type":3,"data":{"source":2,"type":0,"id":33,"x":852.7421875,"y":133.1640625},"timestamp":1682952390243},{"type":3,"data":{"source":2,"type":2,"id":33,"x":852,"y":133,"pointerType":0},"timestamp":1682952390244},{"type":3,"data":{"source":2,"type":6,"id":33},"timestamp":1682952392745}]}'

export const snapshotsAsJSONLines = (): string => `${lineOne}\n${lineTwo}\n`
export const snapshotsAsRealTimeJSONPayload = (): { snapshots: Record<string, any>[] } => ({
    snapshots: [JSON.parse(lineOne), JSON.parse(lineTwo)],
})

export const convertSnapshotsByWindowId = (snapshotsByWindowId: {
    [key: string]: eventWithTime[]
}): RecordingSnapshot[] =>
    Object.entries(snapshotsByWindowId).flatMap(([windowId, snapshots]) => {
        return snapshots.map((snapshot) => ({
            ...snapshot,
            windowId,
        }))
    })

export const convertSnapshotsResponse = (
    snapshotsByWindowId: { [key: string]: eventWithTime[] },
    existingSnapshots?: RecordingSnapshot[]
): RecordingSnapshot[] => {
    return prepareRecordingSnapshots(convertSnapshotsByWindowId(snapshotsByWindowId), existingSnapshots)
}

export const sortedRecordingSnapshots = (): { snapshot_data_by_window_id: Record<string, RecordingSnapshot[]> } => {
    const sortedRecordingSnapshotsJson = { snapshot_data_by_window_id: {} }

    snapshotsAsJSONLines()
        .trim()
        .split('\n')
        .forEach((line) => {
            const j = JSON.parse(line)
            sortedRecordingSnapshotsJson.snapshot_data_by_window_id[j.window_id] = j.data
                .map((jd: Record<string, any>) => {
                    return {
                        windowId: j.window_id,
                        ...jd,
                    }
                })
                .sort((a: any, b: any) => a.timestamp - b.timestamp)
        })

    return sortedRecordingSnapshotsJson
}