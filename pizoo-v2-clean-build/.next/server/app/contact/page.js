(()=>{var e={};e.id=327,e.ids=[327],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3966:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c}),s(4405),s(1506),s(5866);var a=s(3191),r=s(8716),n=s(7922),i=s.n(n),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4405)),"/app/pizoo-v2/frontend/app/contact/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"/app/pizoo-v2/frontend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/app/pizoo-v2/frontend/app/contact/page.tsx"],x="/contact/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2338:(e,t,s)=>{Promise.resolve().then(s.bind(s,5234)),Promise.resolve().then(s.bind(s,6361)),Promise.resolve().then(s.t.bind(s,9404,23))},5234:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var a=s(326),r=s(7577);/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(2881).Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);function i(){let[e,t]=(0,r.useState)({name:"",email:"",subject:"",message:""}),[s,i]=(0,r.useState)(!1),l=s=>{t({...e,[s.target.name]:s.target.value})};return(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Form submitted:",e),i(!0),setTimeout(()=>i(!1),3e3)},className:"space-y-6",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizoo-pink focus:border-transparent transition-all",placeholder:"Your name","data-testid":"contact-name-input"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizoo-pink focus:border-transparent transition-all",placeholder:"your@email.com","data-testid":"contact-email-input"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-2",children:"Subject"}),(0,a.jsxs)("select",{id:"subject",name:"subject",value:e.subject,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizoo-pink focus:border-transparent transition-all","data-testid":"contact-subject-select",children:[a.jsx("option",{value:"",children:"Select a subject"}),a.jsx("option",{value:"general",children:"General Inquiry"}),a.jsx("option",{value:"support",children:"Technical Support"}),a.jsx("option",{value:"billing",children:"Billing Question"}),a.jsx("option",{value:"safety",children:"Safety Concern"}),a.jsx("option",{value:"feedback",children:"Feedback"}),a.jsx("option",{value:"other",children:"Other"})]})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),a.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:l,required:!0,rows:5,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizoo-pink focus:border-transparent transition-all resize-none",placeholder:"How can we help you?","data-testid":"contact-message-textarea"})]}),(0,a.jsxs)("button",{type:"submit",className:"w-full btn-gradient flex items-center justify-center space-x-2","data-testid":"contact-submit-button",children:[a.jsx("span",{children:"Send Message"}),a.jsx(n,{className:"w-5 h-5"})]}),s&&a.jsx("div",{className:"bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg","data-testid":"contact-success-message",children:"Thank you! Your message has been sent successfully."})]})}},4014:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(2881).Z)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])},748:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(2881).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},4019:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(2881).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4405:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var a=s(9510),r=s(6065),n=s(6138),i=s(8570);let l=(0,i.createProxy)(String.raw`/app/pizoo-v2/frontend/components/contact/ContactForm.tsx`),{__esModule:o,$$typeof:c}=l;l.default;let d=(0,i.createProxy)(String.raw`/app/pizoo-v2/frontend/components/contact/ContactForm.tsx#default`);var x=s(1319),m=s(7162);/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let p=(0,m.Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),u=(0,m.Z)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);var h=s(71);function g(){return(0,a.jsxs)("main",{className:"min-h-screen",children:[a.jsx(r.ZP,{}),a.jsx("div",{className:"pt-24 pb-16 bg-gradient-to-br from-pizoo-lightPink/30 via-white to-purple-100/30",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h1",{className:"text-5xl font-display font-bold mb-6",children:a.jsx("span",{className:"text-gradient",children:"Contact Us"})}),a.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Have a question or need help? We're here for you."})]})}),a.jsx("div",{className:"py-20",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-12",children:[(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Get in Touch"}),a.jsx("p",{className:"text-gray-600 mb-8",children:"Our support team is available 24/7 to help you with any questions or concerns. Choose the method that works best for you."}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex items-start space-x-4",children:[a.jsx("div",{className:"w-12 h-12 bg-gradient-pizoo rounded-full flex items-center justify-center flex-shrink-0",children:a.jsx(x.Z,{className:"w-6 h-6 text-white"})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Email Us"}),a.jsx("p",{className:"text-gray-600",children:"support@pizoo.com"}),a.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"We'll respond within 24 hours"})]})]}),(0,a.jsxs)("div",{className:"flex items-start space-x-4",children:[a.jsx("div",{className:"w-12 h-12 bg-gradient-pizoo rounded-full flex items-center justify-center flex-shrink-0",children:a.jsx(p,{className:"w-6 h-6 text-white"})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Call Us"}),a.jsx("p",{className:"text-gray-600",children:"+1 (555) 123-4567"}),a.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri, 9am-6pm EST"})]})]}),(0,a.jsxs)("div",{className:"flex items-start space-x-4",children:[a.jsx("div",{className:"w-12 h-12 bg-gradient-pizoo rounded-full flex items-center justify-center flex-shrink-0",children:a.jsx(u,{className:"w-6 h-6 text-white"})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Live Chat"}),a.jsx("p",{className:"text-gray-600",children:"Available in the app"}),a.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Instant support 24/7"})]})]}),(0,a.jsxs)("div",{className:"flex items-start space-x-4",children:[a.jsx("div",{className:"w-12 h-12 bg-gradient-pizoo rounded-full flex items-center justify-center flex-shrink-0",children:a.jsx(h.Z,{className:"w-6 h-6 text-white"})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Visit Us"}),(0,a.jsxs)("p",{className:"text-gray-600",children:["123 Dating Street",a.jsx("br",{}),"San Francisco, CA 94102"]})]})]})]})]}),(0,a.jsxs)("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Send Us a Message"}),a.jsx(d,{})]})]})})}),a.jsx(n.Z,{})]})}},7162:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(1159);/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(...e)=>e.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:c,...d},x)=>(0,a.createElement)("svg",{ref:x,...i,width:t,height:t,stroke:e,strokeWidth:r?24*Number(s)/Number(t):s,className:n("lucide",l),...d},[...c.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(o)?o:[o]])),o=(e,t)=>{let s=(0,a.forwardRef)(({className:s,...i},o)=>(0,a.createElement)(l,{ref:o,iconNode:t,className:n(`lucide-${r(e)}`,s),...i}));return s.displayName=`${e}`,s}},6076:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]])},2528:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]])},2749:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]])},1319:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},71:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},9917:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]])},429:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},8973:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7162).Z)("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]])},7371:(e,t,s)=>{"use strict";s.d(t,{default:()=>r.a});var a=s(1812),r=s.n(a)},1812:(e,t,s)=>{"use strict";let{createProxy:a}=s(8570);e.exports=a("/app/pizoo-v2/frontend/node_modules/next/dist/client/link.js")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[347,705,895],()=>s(3966));module.exports=a})();