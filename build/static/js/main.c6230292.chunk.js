(this.webpackJsonpinsta=this.webpackJsonpinsta||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(2),s=a.n(c),o=a(14),r=a.n(o),i=a(27),l=a(57),u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))},d=a(23),p=a(11),m=a(104),j=a(103),b=(a(68),a(69),function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("div",{className:"header__container",children:Object(n.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})})})}),g=a(105),h=a(40),O=a(34);a(71),a(72),a(73);O.a.initializeApp({apiKey:"AIzaSyCieCzS6duFxIxszYn--lmhqf6zEBzjH94",authDomain:"insta-343f8.firebaseapp.com",databaseURL:"https://insta-343f8.firebaseio.com",projectId:"insta-343f8",storageBucket:"insta-343f8.appspot.com",messagingSenderId:"111420370821",appId:"1:111420370821:web:a32e8d50a7246221515eec",measurementId:"G-CNGJFK6WLB"});var f=O.a.firestore(),v=O.a.auth(),x=O.a.storage(),_=f;a(74);var S=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nothing",c=a.getHours(),s=a.getMinutes(),o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=c>=12?"pm":"am";e=(c=(c%=12)||12)+":"+(s=s<10?"0"+s:s)+i,t=o[a.getDay()];var l=r[a.getMonth()],u=function(){switch(n){case"time&date":return"".concat(e," ").concat(a.getMonth()+1,"/").concat(a.getDate(),"/").concat(a.getFullYear());case"isToday":return"".concat(e," \u2022 Today");case"checkIfToday":return"".concat(a.getDate(),"\u2022").concat(l,"\u2022").concat(a.getFullYear());default:return"".concat(t," ").concat(a.getDate()," ").concat(l,", ").concat(a.getFullYear())}};return u()},y=function(e){var t=e.postId,a=e.username,s=e.imageUrl,o=e.caption,r=e.user,i=Object(c.useState)([]),l=Object(p.a)(i,2),u=l[0],d=l[1],m=Object(c.useState)(""),j=Object(p.a)(m,2),b=j[0],O=j[1];Object(c.useEffect)((function(){var e;return t&&(e=_.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){d(e.docs.map((function(e){return e.data()})))}))),function(){return e()}}),[t]);var f=function(e){e.preventDefault(),_.collection("posts").doc(t).collection("comments").add({text:b,username:r.displayName,timestamp:h.a.firestore.FieldValue.serverTimestamp()}),O("")};return Object(n.jsx)(n.Fragment,{children:a&&Object(n.jsxs)("div",{className:"post",children:[Object(n.jsxs)("div",{className:"post__header",children:[Object(n.jsx)(g.a,{className:"post__avatar",alt:a,src:s}),Object(n.jsx)("h3",{children:a})]}),Object(n.jsx)("img",{className:"post__image",src:s,alt:""}),Object(n.jsxs)("h4",{className:"post__text",children:[Object(n.jsxs)("strong",{children:[a,":"]})," ",o]}),Object(n.jsxs)("div",{className:"post__comments",children:[u.length>0?Object(n.jsx)("h2",{className:"post__commentsHeader",children:"Comments"}):console.log(u.length),null===u||void 0===u?void 0:u.map((function(e){var t,a,c;return Object(n.jsxs)("div",{className:"post__commentContainer",children:[Object(n.jsxs)("p",{className:"post__comment",children:[Object(n.jsxs)("strong",{children:[e.username,": "]})," ",e.text]},1e3*Math.random()),Object(n.jsx)("small",{children:e.timestamp&&S(new Date,"checkIfToday")===S(null===(t=e.timestamp)||void 0===t?void 0:t.toDate(),"checkIfToday")?S(null===(a=e.timestamp)||void 0===a?void 0:a.toDate(),"isToday"):S(null===(c=e.timestamp)||void 0===c?void 0:c.toDate())})]})}))]}),Object(n.jsx)("form",{className:"post__commentBox",children:r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:b,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("button",{className:"post__button",disabled:!b,type:"submit",onClick:f,children:"Post"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"post__inputSignup",type:"text",placeholder:"Add a comment...",value:b,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("button",{className:"post__buttonSignup",disabled:!b,type:"submit",onClick:f,children:"SignIn to comment"})]})})]})})},N=a(101);function C(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var T=Object(N.a)((function(e){return{paper:{position:"absolute",width:"25em",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),w=a(102),E=(a(75),function(e){var t=e.username,a=Object(c.useState)(""),s=Object(p.a)(a,2),o=s[0],r=s[1],i=Object(c.useState)(null),l=Object(p.a)(i,2),u=l[0],d=l[1],m=Object(c.useState)(0),b=Object(p.a)(m,2),g=b[0],O=b[1];return Object(n.jsxs)("div",{className:"imageUpload",children:[Object(n.jsx)("h2",{children:"Upload Content"}),Object(n.jsx)("p",{children:Object(n.jsx)("small",{children:Object(n.jsx)("i",{children:"Add caption and upload your contents here"})})}),Object(n.jsx)("input",{className:"imageUpload__caption",type:"text",placeholder:"Enter a caption...",onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("progress",{className:"imageUpload__progressBar",value:g,max:"100"}),Object(n.jsx)("input",{className:"imageUpload__button",type:"file",onChange:function(e){e.target.files[0]&&d(e.target.files[0])}}),Object(n.jsx)(j.a,{className:"imageUpload__uploadButton",onClick:function(e){x.ref("images/".concat(u.name)).put(u).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*10);O(t)}),(function(e){return alert(e.message)}),(function(){x.ref("images").child(u.name).getDownloadURL().then((function(e){_.collection("posts").add({timestamp:h.a.firestore.FieldValue.serverTimestamp(),caption:o,imageUrl:e,username:t}),O(0),r(""),d(null)}))}))},children:"Upload"})]})}),A=a(54);var I=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(C),r=Object(p.a)(o,1)[0],i=Object(c.useState)(!1),l=Object(p.a)(i,2),u=l[0],g=l[1],h=Object(c.useState)(""),O=Object(p.a)(h,2),f=O[0],x=O[1],S=Object(c.useState)(""),N=Object(p.a)(S,2),I=N[0],P=N[1],U=Object(c.useState)(!1),D=Object(p.a)(U,2),k=D[0],F=D[1],R=Object(c.useState)(null),B=Object(p.a)(R,2),L=B[0],z=B[1],M=Object(c.useState)(""),J=Object(p.a)(M,2),W=J[0],K=J[1],H=T(),Y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_TOKEN:"3d59361a5a9993b4d912b279c687858b",REACT_APP_ID:"705949937014356"}),V=Y.REACT_APP_CLIENT_TOKEN,G=Y.REACT_APP_ID,q="".concat(G,"|").concat(V);return Object(c.useEffect)((function(){var e=v.onAuthStateChanged((function(e){console.log(e),z(e||null)}));return function(){return e()}}),[L,f]),Object(c.useEffect)((function(){_.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){s(e.docs.map((function(e){var t=e.data(),a=e.id;return Object(d.a)({id:a},t)})))}))}),[]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(w.a,{open:u,onClose:function(){return g(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsx)("div",{style:r,className:H.paper,children:Object(n.jsxs)("form",{className:"app__signUp",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})}),Object(n.jsx)(m.a,{className:"app__inputs",type:"text",placeholder:"Username",onChange:function(e){return x(e.target.value)},value:f}),Object(n.jsx)(m.a,{className:"app__inputs",type:"email",placeholder:"Email",onChange:function(e){return P(e.target.value)},value:I}),Object(n.jsx)(m.a,{className:"app__inputs",type:"password",placeholder:"Password",onChange:function(e){return K(e.target.value)},value:W}),Object(n.jsx)(j.a,{type:"submit",onClick:function(e){e.preventDefault(),v.createUserWithEmailAndPassword(I,W).then((function(e){return e.user.updateProfile({displayName:f})})).catch((function(e){return alert(e.message)})),g(!1)},children:"Sign Up"})]})})}),Object(n.jsx)(w.a,{open:k,onClose:function(){return F(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsx)("div",{style:r,className:H.paper,children:Object(n.jsxs)("form",{className:"app__signUp",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})}),Object(n.jsx)(m.a,{type:"email",placeholder:"Email",onChange:function(e){return P(e.target.value)},value:I}),Object(n.jsx)(m.a,{type:"password",placeholder:"Password",onChange:function(e){return K(e.target.value)},value:W}),Object(n.jsx)(j.a,{type:"submit",onClick:function(e){e.preventDefault(),v.signInWithEmailAndPassword(I,W).catch((function(e){return e.message})),F(!1)},children:"Sign In"})]})})}),Object(n.jsx)(b,{}),L?Object(n.jsx)(j.a,{type:"submit",onClick:function(){return v.signOut()},children:"Logout"}):Object(n.jsxs)("div",{className:"app__loginContainer",children:[Object(n.jsx)(j.a,{type:"submit",onClick:function(){return F(!0)},children:"Sign In"}),Object(n.jsx)(j.a,{type:"submit",onClick:function(){return g(!0)},children:"Sign Up"})]}),Object(n.jsxs)("div",{className:"app__posts",children:[(null===L||void 0===L?void 0:L.displayName)?Object(n.jsx)(E,{username:L.displayName}):Object(n.jsx)("h3",{children:"Sorry, you need to Login"}),a.map((function(e){var t=e.id,a=e.username,c=e.imageUrl,s=e.caption;return Object(n.jsx)(y,{postId:t,user:L,username:a,imageUrl:c,caption:s},t)}))]}),Object(n.jsx)(A.a,{url:"https://www.instagram.com/p/BAuc9JmQodPPZBdR1UiXg6YVR2IJ80yx-PatzE0/",clientAccessToken:q,maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})]})},P="SET_USER",U="SET_POSTS",D={user:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case P:return Object(d.a)(Object(d.a)({},e),{},{user:t.user});default:return e}},F={posts:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case U:return Object(d.a)(Object(d.a)({},e),{},{posts:t.posts});default:return e}},B=Object(i.c)({userReducer:k,postReducer:R}),L=(a(78),a(56)),z=Object(i.d)(B,Object(i.a)(L.a));console.log("List of Reducers Stored in STATE \ud83d\udc49",z.getState()),r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l.a,{store:z,children:Object(n.jsx)(I,{})})}),document.getElementById("root")),u()}},[[79,1,2]]]);
//# sourceMappingURL=main.c6230292.chunk.js.map