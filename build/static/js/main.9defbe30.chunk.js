(this.webpackJsonpinsta=this.webpackJsonpinsta||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(2),o=a.n(c),s=a(14),r=a.n(s),i=a(28),l=a(58),u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,114)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))},d=a(24),m=a(11),p=a(111),j=a(110),b=(a(71),a(72),function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("div",{className:"header__container",children:Object(n.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})})})}),h=a(112),g=a(41),O=a(35);a(74),a(75),a(76);O.a.initializeApp({apiKey:"AIzaSyCieCzS6duFxIxszYn--lmhqf6zEBzjH94",authDomain:"insta-343f8.firebaseapp.com",databaseURL:"https://insta-343f8.firebaseio.com",projectId:"insta-343f8",storageBucket:"insta-343f8.appspot.com",messagingSenderId:"111420370821",appId:"1:111420370821:web:a32e8d50a7246221515eec",measurementId:"G-CNGJFK6WLB"});var f=O.a.firestore(),_=O.a.auth(),x=O.a.storage(),v=f;a(77);var N=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"timeSince",c=a.getHours(),o=a.getMinutes(),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=c>=12?"pm":"am";e=(c=(c%=12)||12)+":"+(o=o<10?"0"+o:o)+i,t=s[a.getDay()];var l=r[a.getMonth()],u=function(){switch(n){case"time&date":return"".concat(e," ").concat(a.getDate()," ").concat(l,", ").concat(a.getFullYear());case"time&day&date":return"".concat(e," ").concat(t," ").concat(a.getDate()," ").concat(l,", ").concat(a.getFullYear());case"isToday":return"".concat(e," \u2022 Today");case"checkIfToday":return"".concat(a.getDate(),"\u2022").concat(l,"\u2022").concat(a.getFullYear());case"longTime":return"".concat(t," ").concat(a.getDate()," ").concat(l,", ").concat(a.getFullYear());default:return d(a)}};function d(e){var t=Math.floor((new Date-e)/1e3),a=t/31536e3;return a>=1?Math.floor(a)>1?Math.floor(a)+" years ago":Math.floor(a)+" year ago":(a=t/2592e3)>=1?Math.floor(a)>1?Math.floor(a)+" months ago":Math.floor(a)+" month ago":(a=t/86400)>=1?Math.floor(a)>1?Math.floor(a)+" days ago":Math.floor(a)+" day ago":(a=t/3600)>=1?Math.floor(a)>1?Math.floor(a)+" hours ago":Math.floor(a)+" hour ago":(a=t/60)>=1?Math.floor(a)>1?Math.floor(a)+" minutes ago":Math.floor(a)+" minute ago":Math.floor(a)>1?Math.floor(t)+" seconds ago":Math.floor(t)+" second ago"}return u()},S=a(104),y=a(105),C=a(106),T=a(107),w=function(e){var t=e.postId,a=e.username,o=e.imageUrl,s=e.caption,r=e.user,i=e.timestamp,l=Object(c.useState)([]),u=Object(m.a)(l,2),d=u[0],p=u[1],j=Object(c.useState)(""),b=Object(m.a)(j,2),O=b[0],f=b[1];Object(c.useEffect)((function(){var e;return t&&(e=v.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return e.data()})))}))),function(){return e()}}),[t]);var _=function(e){e.preventDefault(),v.collection("posts").doc(t).collection("comments").add({text:O,username:r.displayName,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),f("")},x=function(e){return N(new Date,"checkIfToday")===N(e,"checkIfToday")?N(e,"whenVsNow"):N(e,"longTime")};return Object(n.jsx)(n.Fragment,{children:a&&Object(n.jsxs)("div",{className:"post",children:[Object(n.jsxs)("div",{className:"post__header",children:[Object(n.jsx)(h.a,{className:"post__avatar",alt:a,src:o}),Object(n.jsx)("h3",{children:a})]}),Object(n.jsx)("img",{className:"post__image",src:o,alt:""}),Object(n.jsxs)("div",{className:"post__icons",children:[Object(n.jsxs)("div",{className:"post__iconsGrouped",children:[Object(n.jsx)(S.a,{className:"post__icon"}),Object(n.jsx)(y.a,{className:"post__icon"}),Object(n.jsx)(C.a,{className:"post__icon"})]}),Object(n.jsx)(T.a,{className:"post__icon"})]}),Object(n.jsxs)("div",{className:"post__content",children:[Object(n.jsxs)("h4",{className:"post__contentText",children:[Object(n.jsxs)("strong",{children:[a,":"]})," ",s]}),Object(n.jsx)("small",{className:"post__contentTime",children:x(null===i||void 0===i?void 0:i.toDate())})]}),Object(n.jsxs)("div",{className:"post__comments",children:[d.length>0?Object(n.jsx)("h2",{className:"post__commentsHeader",children:"Comments"}):console.log("\ud83d\udc68\u200d\ud83e\uddb1".concat(a," \ud83d\udce8").concat(s,": \ud83e\udd10 no comment")),null===d||void 0===d?void 0:d.map((function(e){var t;return Object(n.jsxs)("div",{className:"post__commentContainer",children:[Object(n.jsxs)("p",{className:"post__comment",children:[Object(n.jsxs)("strong",{children:[e.username,": "]})," ",e.text]},1e3*Math.random()),Object(n.jsx)("small",{children:e.timestamp&&x(null===(t=e.timestamp)||void 0===t?void 0:t.toDate())})]})}))]}),Object(n.jsx)("form",{className:"post__commentBox",children:r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:O,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("button",{className:"post__button",disabled:!O,type:"submit",onClick:_,children:"Post"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"post__inputSignup",type:"text",placeholder:"Add a comment...",value:O,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("button",{className:"post__buttonSignup",disabled:!O,type:"submit",onClick:_,children:"SignIn to comment"})]})})]})})},E=a(108);function M(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var U=Object(E.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),A=a(109),I=(a(78),function(e){var t=e.username,a=Object(c.useState)(""),o=Object(m.a)(a,2),s=o[0],r=o[1],i=Object(c.useState)(null),l=Object(m.a)(i,2),u=l[0],d=l[1],p=Object(c.useState)(0),b=Object(m.a)(p,2),h=b[0],O=b[1];return Object(n.jsxs)("div",{className:"imageUpload",children:[Object(n.jsx)("h2",{children:"Upload Content"}),Object(n.jsx)("p",{children:Object(n.jsx)("small",{children:Object(n.jsx)("i",{children:"Add caption and upload your contents here"})})}),Object(n.jsx)("input",{className:"imageUpload__caption",type:"text",placeholder:"Enter a caption...",value:s,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("progress",{className:"imageUpload__progressBar",value:h,max:"100"}),Object(n.jsx)("input",{className:"imageUpload__button",type:"file",onChange:function(e){e.target.files[0]&&d(e.target.files[0])}}),Object(n.jsx)(j.a,{className:"imageUpload__uploadButton",onClick:function(e){x.ref("images/".concat(u.name)).put(u).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);O(t)}),(function(e){return alert(e.message)}),(function(){x.ref("images").child(u.name).getDownloadURL().then((function(e){v.collection("posts").add({timestamp:g.a.firestore.FieldValue.serverTimestamp(),caption:s,imageUrl:e,username:t}),d(null),O(0),r("")})).catch((function(e){return alert(e.message)}))}))},children:"Upload"})]})}),D=a(55);var P=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(M),r=Object(m.a)(s,1)[0],i=Object(c.useState)(!1),l=Object(m.a)(i,2),u=l[0],h=l[1],g=Object(c.useState)(""),O=Object(m.a)(g,2),f=O[0],x=O[1],N=Object(c.useState)(""),S=Object(m.a)(N,2),y=S[0],C=S[1],T=Object(c.useState)(!1),E=Object(m.a)(T,2),P=E[0],k=E[1],F=Object(c.useState)(null),R=Object(m.a)(F,2),B=R[0],L=R[1],z=Object(c.useState)(""),J=Object(m.a)(z,2),W=J[0],K=J[1],H=U(),Y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_TOKEN:"3d59361a5a9993b4d912b279c687858b",REACT_APP_ID:"705949937014356"}),V=Y.REACT_APP_CLIENT_TOKEN,G=Y.REACT_APP_ID,q="".concat(G,"|").concat(V);return Object(c.useEffect)((function(){var e=_.onAuthStateChanged((function(e){console.log(e),L(e||null)}));return function(){return e()}}),[B,f]),Object(c.useEffect)((function(){v.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){var t=e.data(),a=e.id;return Object(d.a)({id:a},t)})))}))}),[]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(A.a,{open:u,onClose:function(){return h(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsx)("div",{style:r,className:H.paper,children:Object(n.jsxs)("form",{className:"app__signUp",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})}),Object(n.jsx)(p.a,{className:"app__inputs",type:"text",placeholder:"Username",onChange:function(e){return x(e.target.value)},value:f}),Object(n.jsx)(p.a,{className:"app__inputs",type:"email",placeholder:"Email",onChange:function(e){return C(e.target.value)},value:y}),Object(n.jsx)(p.a,{className:"app__inputs",type:"password",placeholder:"Password",onChange:function(e){return K(e.target.value)},value:W}),Object(n.jsx)(j.a,{type:"submit",onClick:function(e){e.preventDefault(),_.createUserWithEmailAndPassword(y,W).then((function(e){return e.user.updateProfile({displayName:f})})).catch((function(e){return alert(e.message)})),h(!1)},children:"Sign Up"})]})})}),Object(n.jsx)(A.a,{open:P,onClose:function(){return k(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsx)("div",{style:r,className:H.paper,children:Object(n.jsxs)("form",{className:"app__signUp",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})}),Object(n.jsx)(p.a,{type:"email",placeholder:"Email",onChange:function(e){return C(e.target.value)},value:y}),Object(n.jsx)(p.a,{type:"password",placeholder:"Password",onChange:function(e){return K(e.target.value)},value:W}),Object(n.jsx)(j.a,{type:"submit",onClick:function(e){e.preventDefault(),_.signInWithEmailAndPassword(y,W).catch((function(e){return e.message})),k(!1)},children:"Sign In"})]})})}),Object(n.jsx)(b,{}),B?Object(n.jsx)(j.a,{type:"submit",onClick:function(){return _.signOut()},children:"Logout"}):Object(n.jsxs)("div",{className:"app__loginContainer",children:[Object(n.jsx)(j.a,{type:"submit",onClick:function(){return k(!0)},children:"Sign In"}),Object(n.jsx)(j.a,{type:"submit",onClick:function(){return h(!0)},children:"Sign Up"})]}),Object(n.jsxs)("div",{className:"app__posts",children:[B?Object(n.jsx)(I,{username:B.displayName}):Object(n.jsx)("h3",{className:"app__notLoggedIn",children:"Sign Up To Upload"}),a.map((function(e){var t=e.id,a=e.username,c=e.imageUrl,o=e.caption,s=e.timestamp;return Object(n.jsx)(w,{postId:t,user:B,timestamp:s,username:a,imageUrl:c,caption:o},t)}))]}),Object(n.jsx)(D.a,{url:"https://www.instagram.com/p/BAuc9JmQodPPZBdR1UiXg6YVR2IJ80yx-PatzE0/",clientAccessToken:q,maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})]})},k="SET_USER",F="SET_POSTS",R={user:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case k:return Object(d.a)(Object(d.a)({},e),{},{user:t.user});default:return e}},L={posts:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case F:return Object(d.a)(Object(d.a)({},e),{},{posts:t.posts});default:return e}},J=Object(i.c)({userReducer:B,postReducer:z}),W=(a(81),a(57)),K=Object(i.d)(J,Object(i.a)(W.a));console.log("List of Reducers Stored in STATE \ud83d\udc49",K.getState()),r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(l.a,{store:K,children:Object(n.jsx)(P,{})})}),document.getElementById("root")),u()}},[[82,1,2]]]);
//# sourceMappingURL=main.9defbe30.chunk.js.map