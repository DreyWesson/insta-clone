(this.webpackJsonpinsta=this.webpackJsonpinsta||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(1),o=n.n(c),s=n(13),r=n.n(s),i=n(34),l=n(17),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))},d=n(10),p=(n(83),n(12)),j=n(147),m=n(146),b=(n(84),n(40));n(85),n(86),n(87);b.a.initializeApp({apiKey:"AIzaSyCieCzS6duFxIxszYn--lmhqf6zEBzjH94",authDomain:"insta-343f8.firebaseapp.com",databaseURL:"https://insta-343f8.firebaseio.com",projectId:"insta-343f8",storageBucket:"insta-343f8.appspot.com",messagingSenderId:"111420370821",appId:"1:111420370821:web:a32e8d50a7246221515eec",measurementId:"G-CNGJFK6WLB"});var O=b.a.firestore(),h=b.a.auth(),f=b.a.storage(),_=O,g=n(122);function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var x=Object(g.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),S=n(145),N="SET_USER",y="SET_POSTS",w="SET_OPEN",C="SET_OPEN_SIGN_IN",E="SET_PASSWORD",T="SET_EMAIL",k="SET_USERNAME",I="SET_SCROLL",U="SET_OPEN_UPLOAD",P=n(28),A=function(e,t){var n=function(n){return function(a,c){return a(Object(P.a)({type:t},n,e))}};switch(t){case"SET_POSTS":return n("posts");case"SET_USER":return n("user");case"SET_USERNAME":return n("username");case"SET_EMAIL":return n("email");case"SET_PASSWORD":return n("password");case"SET_OPEN":return n("open");case"SET_OPEN_SIGN_IN":return n("openSignIn");case"SET_SCROLL":return n("hideOnScroll");case"SET_OPEN_UPLOAD":return n("openUpload")}},R="undefined"!==typeof window;function M(e){var t=e.element,n=e.useWindow;if(!R)return{x:0,y:0};var a=(t?t.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:a.left,y:a.top}}var D=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){var t=e.userReducer,n=e.openReducer;return{user:t.user,username:t.username,email:t.email,password:t.password,open:n.open,openSignIn:n.openSignIn}})),n=t.user,o=t.username,s=t.email,r=t.password,i=t.open,u=t.openSignIn,d=w,b=C,O=k,f=T,_=E,g=I,N=Object(c.useState)(!0),y=Object(p.a)(N,2),U=y[0],P=y[1];!function(e,t,n,a,o){var s=Object(c.useRef)(M({useWindow:a})),r=null,i=function(){var t=M({element:n,useWindow:a});e({prevPos:s.current,currPos:t}),s.current=t,r=null};Object(c.useLayoutEffect)((function(){var e=function(){o?null===r&&(r=setTimeout(i,o)):i()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),t)}((function(t){var n=t.prevPos,a=t.currPos.y>n.y;a!==U&&P(a),e(A(U,g))}),[U]);var R=Object(c.useState)(v),D=Object(p.a)(R,1)[0],L=x();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S.a,{open:i,onClose:function(){return e(A(!1,d))},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(a.jsx)("div",{style:D,className:L.paper,children:Object(a.jsxs)("form",{className:"header__signUp",children:[Object(a.jsx)("center",{children:Object(a.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})}),Object(a.jsx)(j.a,{className:"app__inputs",type:"text",placeholder:"Username",onChange:function(t){return e(A(t.target.value,O))},value:o}),Object(a.jsx)(j.a,{className:"app__inputs",type:"email",placeholder:"Email",onChange:function(t){return e(A(t.target.value,f))},value:s}),Object(a.jsx)(j.a,{className:"app__inputs",type:"password",placeholder:"Password",onChange:function(t){return e(A(t.target.value,_))},value:r}),Object(a.jsx)(m.a,{type:"submit",onClick:function(t){t.preventDefault(),o&&s&&r?(h.createUserWithEmailAndPassword(s,r).then((function(e){return e.user.updateProfile({displayName:o})})).catch((function(e){return alert(e.message)})),e(A(!1,d))):alert("Input field(s) can't be empty")},children:"Sign Up"})]})})}),Object(a.jsx)(S.a,{open:u,onClose:function(){return e(A(!1,b))},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(a.jsx)("div",{style:D,className:L.paper,children:Object(a.jsxs)("form",{className:"header__signUp",children:[Object(a.jsx)("center",{children:Object(a.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"})}),Object(a.jsx)(j.a,{type:"email",placeholder:"Email",onChange:function(t){return e(A(t.target.value,f))},value:s}),Object(a.jsx)(j.a,{type:"password",placeholder:"Password",onChange:function(t){return e(A(t.target.value,_))},value:r}),Object(a.jsx)(m.a,{type:"submit",onClick:function(t){t.preventDefault(),h.signInWithEmailAndPassword(s,r).catch((function(e){return e.message})),e(A(!1,b))},children:"Sign In"})]})})}),Object(a.jsx)("div",{className:"header ".concat(U?"active":"header__hidden"),children:Object(a.jsxs)("div",{className:"header__container",children:[Object(a.jsx)("img",{className:"header__logo",src:"https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg",alt:"insta logo"}),n?Object(a.jsx)(m.a,{className:"header__logoutButton",type:"submit",onClick:function(){return h.signOut()},children:"Logout"}):Object(a.jsx)("div",{className:"app__loginContainer",children:Object(a.jsx)(m.a,{type:"submit",onClick:function(){return e(A(!0,b))},children:"Sign In"})})]})})]})},L=n(63),F=(n(90),n(91),n(46)),z=function(e){var t=e.username,n=Object(c.useState)(""),o=Object(p.a)(n,2),s=o[0],r=o[1],i=Object(c.useState)(null),u=Object(p.a)(i,2),d=u[0],j=u[1],b=Object(c.useState)(0),O=Object(p.a)(b,2),h=O[0],g=O[1],v=Object(l.b)();return Object(a.jsxs)("div",{className:"imageUpload",children:[Object(a.jsx)("h2",{children:"Upload Content"}),Object(a.jsx)("p",{children:Object(a.jsx)("small",{children:Object(a.jsx)("i",{children:"Add caption and upload your contents here"})})}),Object(a.jsx)("input",{className:"imageUpload__caption",type:"text",placeholder:"Enter a caption...",value:s,onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("progress",{className:"imageUpload__progressBar",value:h,max:"100"}),Object(a.jsx)("input",{className:"imageUpload__button",type:"file",onChange:function(e){e.target.files[0]&&j(e.target.files[0])}}),Object(a.jsx)(m.a,{className:"imageUpload__uploadButton",onClick:s&&d&&function(e){f.ref("images/".concat(d.name)).put(d).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);g(t)}),(function(e){return alert(e.message)}),(function(){f.ref("images").child(d.name).getDownloadURL().then((function(e){console.log("UPLOAD USERNAME",t),_.collection("posts").add({timestamp:F.a.firestore.FieldValue.serverTimestamp(),caption:s,imageUrl:e,username:t}),j(null),g(0),r(""),v(A(!1,U))})).catch((function(e){return alert(e.message)}))}))},children:"Upload"})]})},B=n(148),W=(n(93),n(125)),J=n(138),Y=n(139),K=n(140),G=n(141),H=n(142),V=n(143);function X(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"timeSince",c=n.getHours(),o=n.getMinutes(),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=c>=12?"pm":"am";e=(c=(c%=12)||12)+":"+(o=o<10?"0"+o:o)+i,t=s[n.getDay()];var l=r[n.getMonth()],u=function(){switch(a){case"time&date":return"".concat(e," ").concat(n.getDate()," ").concat(l,", ").concat(n.getFullYear());case"time&day&date":return"".concat(e," ").concat(t," ").concat(n.getDate()," ").concat(l,", ").concat(n.getFullYear());case"isToday":return"".concat(e," \u2022 Today");case"checkIfToday":return"".concat(n.getDate(),"\u2022").concat(l,"\u2022").concat(n.getFullYear());case"longTime":return"".concat(t," ").concat(n.getDate()," ").concat(l,", ").concat(n.getFullYear());default:return d(n)}};function d(e){var t=Math.floor((new Date-e)/1e3),n=t/31536e3;return n>=1?Math.floor(n)>1?Math.floor(n)+" years ago":Math.floor(n)+" year ago":(n=t/2592e3)>=1?Math.floor(n)>1?Math.floor(n)+" months ago":Math.floor(n)+" month ago":(n=t/86400)>=1?Math.floor(n)>1?Math.floor(n)+" days ago":Math.floor(n)+" day ago":(n=t/3600)>=1?Math.floor(n)>1?Math.floor(n)+" hours ago":Math.floor(n)+" hour ago":(n=t/60)>=1?Math.floor(n)>1?Math.floor(n)+" minutes ago":Math.floor(n)+" minute ago":Math.floor(n)>1?Math.floor(t)+" seconds ago":Math.floor(t)+" second ago"}return u()}var q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="checkIfToday";return X(new Date,n)===X(e,n)?X(e,t):X(e,"longTime")},Q=n(47),Z=(n(94),n(126)),$=n(127),ee=n(128),te=n(129),ne=n(130),ae=n(131),ce=n(132),oe=n(133),se=n(134),re=n(135),ie=n(136),le=n(137),ue=Object(c.forwardRef)((function(e,t){var n=e.postId,o=e.username,s=e.imageUrl,r=e.caption,i=e.user,u=e.timestamp,d=Object(c.useState)([]),j=Object(p.a)(d,2),b=j[0],O=j[1],h=Object(c.useState)(""),f=Object(p.a)(h,2),g=f[0],v=f[1],x=Object(l.b)(),S=C,N=Object(c.useState)(!1),y=Object(p.a)(N,2),w=y[0],E=y[1],T=Object(c.useState)(5e3*Math.random()|0),k=Object(p.a)(T,2),I=k[0],U=k[1],P=Object(c.useState)("none"),R=Object(p.a)(P,2),M=R[0],D=R[1],L=Object(c.useState)(!1),z=Object(p.a)(L,2),X=z[0],ue=z[1],de=Object(c.useState)(0),pe=Object(p.a)(de,2),je=pe[0],me=pe[1],be=Object(c.useState)("none"),Oe=Object(p.a)(be,2),he=Oe[0],fe=Oe[1],_e=Object(c.useState)(!1),ge=Object(p.a)(_e,2),ve=ge[0],xe=ge[1],Se=Object(l.c)((function(e){return{presentUser:e.userReducer.user}})).presentUser;Object(c.useEffect)((function(){var e;return n&&(e=_.collection("posts").doc(n).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){O(e.docs.map((function(e){return e.data()})))}))),function(){return e()}}),[n]);var Ne=function(e){var t;return Object(a.jsxs)("div",{className:"post__commentContainer",children:[Object(a.jsxs)("p",{className:"post__comment",children:[Object(a.jsxs)("strong",{children:[e.username,": "]})," ",e.text]},1e3*Math.random()),Object(a.jsx)("small",{children:e.timestamp&&q(null===(t=e.timestamp)||void 0===t?void 0:t.toDate())})]})};return Object(a.jsx)(a.Fragment,{children:o&&Object(a.jsxs)("div",{className:"post",ref:t,children:[Object(a.jsxs)("div",{className:"post__headerContainer",children:[Object(a.jsxs)("div",{className:"post__header",children:[Object(a.jsx)(Q.a,{children:Object(a.jsx)(B.a,{className:"post__avatar",alt:o,src:s})}),Object(a.jsx)("h3",{children:o})]}),Object(a.jsx)(W.a,{className:"post__headerDelete",onClick:function(e){(e.preventDefault(),i)?o===Se.displayName?window.confirm("Are you sure you want to delete?")&&_.collection("posts").doc(n).delete().then((function(){return console.log("Document ID: ".concat(n," successfully deleted!"))})).catch((function(e){return console.error("Error removing document: ",e.message)})):alert("This is not your post"):window.confirm("You're not Signed In. Would you like to sign in?")&&x(A(!0,S))}})]}),Object(a.jsx)(Q.a,{children:Object(a.jsx)("img",{className:"post__image",src:s,alt:r})}),Object(a.jsx)("div",{className:"post__bookmarks",style:{display:M,opacity:je},children:Object(a.jsxs)("div",{className:"post__bookmarkContainer",children:[Object(a.jsxs)("div",{className:"post__bookmark",children:[Object(a.jsx)(Q.a,{children:Object(a.jsx)(B.a,{className:"post__bookmarkAvatar",alt:o,src:s})}),Object(a.jsx)("p",{className:"post__bookmarkSaved",children:"Saved \ud83d\ude09"})]}),Object(a.jsx)("p",{className:"post__bookmarkCollection",children:"Saved to collection"})]})}),Object(a.jsx)("div",{className:"post__shareContainer",style:{display:he},children:Object(a.jsxs)("div",{className:"post__shareGroup",children:[Object(a.jsx)(Z.a,{className:"post__shareIcons",url:"http://insta-343f8.web.app/",children:Object(a.jsx)($.a,{size:32,round:!0})}),Object(a.jsx)(ee.a,{className:"post__shareIcons",url:"http://insta-343f8.web.app/",children:Object(a.jsx)(te.a,{size:32,round:!0})}),Object(a.jsx)(ne.a,{className:"post__shareIcons",url:"http://insta-343f8.web.app/",children:Object(a.jsx)(ae.a,{size:32,round:!0})}),Object(a.jsx)(ce.a,{url:"http://insta-343f8.web.app/",children:Object(a.jsx)(oe.a,{size:32,round:!0})}),Object(a.jsx)(se.a,{className:"post__shareIcons",url:"http://insta-343f8.web.app/",children:Object(a.jsx)(re.a,{size:32,round:!0})}),Object(a.jsx)(ie.a,{className:"post__shareIcons",url:"http://insta-343f8.web.app/",children:Object(a.jsx)(le.a,{size:32,round:!0})})]})}),Object(a.jsxs)("div",{className:"post__icons",children:[Object(a.jsxs)("div",{className:"post__iconsGrouped",children:[w?Object(a.jsx)(J.a,{className:"post__icon post__iconFav",onClick:function(){U(I-1),w&&E(!1)}}):Object(a.jsx)(Y.a,{className:"post__icon",onClick:function(){U(I+1),!w&&E(!0)}}),Object(a.jsx)(K.a,{className:"post__icon ".concat(ve&&"post__allComments"),onClick:function(){return xe(!ve)}}),Object(a.jsx)(G.a,{className:"post__icon ".concat("block"===he&&"post__sendButton"),onClick:function(){return fe("none"===he?"block":"none")}})]}),Object(a.jsxs)("div",{className:"post__likesCounter",children:[I," likes"]}),X?Object(a.jsx)(H.a,{className:"post__icon post__bookmarkStatus",onClick:function(){return ue(!1)}}):Object(a.jsx)(V.a,{className:"post__icon",onClick:function(){D("block"),me(1),ue(!X),setTimeout((function(){D("none"),me(0)}),3e3)}})]}),Object(a.jsxs)("div",{className:"post__content",children:[Object(a.jsxs)("h4",{className:"post__contentText",children:[Object(a.jsxs)("strong",{children:[o,":"]})," ",r]}),Object(a.jsx)("small",{className:"post__contentTime",children:q(null===u||void 0===u?void 0:u.toDate())})]}),Object(a.jsxs)("div",{className:"post__comments",children:[b.length>0?Object(a.jsx)("h2",{className:"post__commentsHeader",children:"Comments"}):console.log("\ud83d\udc68\u200d\ud83e\uddb1".concat(o," \ud83d\udce8").concat(r,": \ud83e\udd10 no comment")),ve?ve&&(null===b||void 0===b?void 0:b.map((function(e){return Ne(e)}))):null===b||void 0===b?void 0:b.slice(0,3).map((function(e){return Ne(e)}))]}),b.length>3&&Object(a.jsx)(m.a,{className:"post__commentShowMore",onClick:function(){return xe(!ve)},children:ve?Object(a.jsx)(a.Fragment,{children:"Show less comment"}):Object(a.jsxs)(a.Fragment,{children:["View all ",b.length," comments"]})}),Object(a.jsxs)("form",{className:"post__commentBox",children:[Object(a.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:g,onChange:function(e){return v(e.target.value)}}),i?Object(a.jsx)("button",{className:"post__button",disabled:!g,type:"submit",onClick:function(e){e.preventDefault(),_.collection("posts").doc(n).collection("comments").add({text:g,username:i.displayName,timestamp:F.a.firestore.FieldValue.serverTimestamp()}),v("")},children:"Post"}):Object(a.jsx)("button",{className:"post__buttonSignup",type:"submit",onClick:function(e){e.preventDefault(),x(A(!0,S))},children:"Login to comment"})]})]})})})),de=n(67),pe=function(){var e=Object(l.c)((function(e){var t=e.userReducer,n=e.postReducer,a=e.openReducer;return{user:t.user,posts:n.posts,openUpload:a.openUpload}})),t=e.user,n=e.posts,o=e.openUpload,s=Object(l.b)(),r=Object(c.useState)(v),i=Object(p.a)(r,1)[0],u=x();return Object(a.jsxs)("div",{className:"poster",children:[t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(S.a,{open:o,onClose:function(){return s(A(!1,U))},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(a.jsx)("div",{style:i,className:u.paper,children:Object(a.jsx)(z,{username:t.displayName})})})}):Object(a.jsx)("div",{className:"poster__signUpContainer",children:Object(a.jsx)(m.a,{className:"poster__notLoggedIn",onClick:function(){return s(A(!0,w))},children:"Sign Up To Upload"})}),Object(a.jsx)(de.a,{children:null===n||void 0===n?void 0:n.map((function(e){var n=e.id,c=e.username,o=e.imageUrl,s=e.caption,r=e.timestamp;return Object(a.jsx)(ue,{postId:n,user:t,timestamp:r,username:c,imageUrl:o,caption:s},n)}))})]})},je=n(144);var me=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_TOKEN:"3d59361a5a9993b4d912b279c687858b",REACT_APP_ID:"705949937014356"}),t=e.REACT_APP_CLIENT_TOKEN,n=e.REACT_APP_ID,o="".concat(n,"|").concat(t),s=N,r=y,i=U,u=C,p=Object(l.b)(),j=Object(l.c)((function(e){var t=e.userReducer;return{user:t.user,username:t.username}})),m=j.user,b=j.username;return Object(c.useEffect)((function(){var e=h.onAuthStateChanged((function(e){return p(A(e||null,s))}));return function(){return e()}}),[m,b,p,s]),Object(c.useEffect)((function(){_.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){p(A(e.docs.map((function(e){var t=e.data(),n=e.id;return Object(d.a)({id:n},t)})),r))}))}),[r,p]),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(D,{}),Object(a.jsx)(pe,{}),Object(a.jsx)("div",{className:"app__cameraContainer",children:Object(a.jsx)(je.a,{className:"app__camera",fontSize:"large",onClick:function(){m?p(A(!0,i)):window.confirm("Please, sign in to post?")&&p(A(!0,u))}})}),Object(a.jsx)(L.a,{url:"https://www.instagram.com/p/BAuc9JmQodPPZBdR1UiXg6YVR2IJ80yx-PatzE0/",clientAccessToken:o,maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})]})},be={user:null,username:"",email:"",password:""},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(console.log(" \ud83d\udcaa ".concat(t.type," ACTION \ud83d\udcaa"),t),t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{user:t.user});case k:return Object(d.a)(Object(d.a)({},e),{},{username:t.username});case E:return Object(d.a)(Object(d.a)({},e),{},{password:t.password});case T:return Object(d.a)(Object(d.a)({},e),{},{email:t.email});default:return e}},he={posts:[],allComments:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(console.log(" \ud83d\udcaa ".concat(t.type," ACTION \ud83d\udcaa"),t),t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{posts:t.posts});default:return e}},_e={open:!1,openSignIn:!1,openUpload:!1},ge={hideOnScroll:null},ve=Object(i.c)({userReducer:Oe,postReducer:fe,openReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(console.log(" \ud83d\udcaa ".concat(t.type," ACTION \ud83d\udcaa"),t),t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{open:t.open});case C:return Object(d.a)(Object(d.a)({},e),{},{openSignIn:t.openSignIn});case U:return Object(d.a)(Object(d.a)({},e),{},{openUpload:t.openUpload});default:return e}},scrollReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(console.log("\ud83d\udcaaScroll Action\ud83d\udcaa ",t),t.type){case I:return Object(d.a)(Object(d.a)({},e),{},{hideOnScroll:t.hideOnScroll});default:return e}}}),xe=(n(100),n(68)),Se=Object(i.d)(ve,Object(i.a)(xe.a));console.log("List of Reducers Stored in STATE \ud83d\udc49",Se.getState()),r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l.a,{store:Se,children:Object(a.jsx)(me,{})})}),document.getElementById("root")),u()},83:function(e,t,n){},84:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.52fa579f.chunk.js.map