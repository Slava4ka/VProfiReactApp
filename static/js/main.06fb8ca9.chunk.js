(window.webpackJsonpvprofiapp=window.webpackJsonpvprofiapp||[]).push([[0],{139:function(e,a,t){e.exports=t(273)},144:function(e,a,t){},145:function(e,a,t){},15:function(e,a,t){e.exports={main_box:"IndexPage_main_box__17eBA",border:"IndexPage_border__1p7Tg",category:"IndexPage_category__3PNTj",card:"IndexPage_card__3Wojw",categoryName:"IndexPage_categoryName__3SS0G",cardBody:"IndexPage_cardBody__1P6gv",surname:"IndexPage_surname__2Fmqc",name:"IndexPage_name__2MzGO",patronymic:"IndexPage_patronymic__3GfVz",profession:"IndexPage_profession__1laSV",rating:"IndexPage_rating__3MtNy",advertising:"IndexPage_advertising__2csrP"}},23:function(e,a,t){e.exports={navbar:"Header_navbar__umLgA",displayNone:"Header_displayNone__2FuDM",searchForm:"Header_searchForm__2WkKe",geo:"Header_geo__1BmmK",bottomNavBar:"Header_bottomNavBar__kQo35",container:"Header_container__1PXpf",links:"Header_links__JALMA",slickCarousel:"Header_slickCarousel__3e27N"}},273:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(144),t(20)),s=(t(145),t(43)),i=t(31),m=t(91),_=t.n(m),d=function(){return r.a.createElement("div",{className:"".concat(_.a.greeting)},r.a.createElement("div",{className:"".concat(_.a.text)},r.a.createElement("span",null,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430  VPROFI!")))},u=t(32),p=t.n(u),E=t(279),g=t(278),f=t(70),h=t.n(f),v=function(e){var a=e.input,t=e.label,n=e.type,l=e.meta,c=l.touched,o=l.error,s=c&&o;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},a,{placeholder:t,type:n,className:"form-control ".concat(h.a.formControl," ").concat(s?h.a.error:"")})),s&&r.a.createElement("span",{className:"text-danger"},o))},b=function(e){var a=e.input,t=e.label,n=e.type,l=e.meta,c=l.touched,o=l.error,s=c&&o;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",Object.assign({},a,{placeholder:t,type:n,className:h.a.checkbox})),"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 ",r.a.createElement("a",{href:"https://yandex.ru/legal/rules/"},"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435\u043c")),s&&r.a.createElement("span",{className:"text-danger"},o))},w=Object(g.a)({form:"registration",validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password?/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(e.password)||(a.password="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"):a.password="Required",e.repeatPassword?/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(e.repeatPassword)?e.password!==e.repeatPassword&&(a.repeatPassword="Passwords must be equals"):a.repeatPassword="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters":a.repeatPassword="Required",e.tel?/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7}$/i.test(e.tel)||(a.tel="SignIn correct telephone number"):a.tel="Required",e.agree||(a.agree="Must agree"),a}})((function(e){var a=e.handleSubmit,t=e.error;return console.log("error:\n---------------------"),console.log(t),console.log("---------------------"),r.a.createElement("form",{className:p.a.formSignIn,onSubmit:a},r.a.createElement(E.a,{type:"email",name:"email",component:v,id:"inputEmail",className:"form-control ".concat(p.a.formControl),label:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",autoFocus:""}),r.a.createElement(E.a,{type:"password",name:"password",component:v,id:"inputPassword",className:"form-control ".concat(p.a.formControl),label:"\u041f\u0430\u0440\u043e\u043b\u044c",required:""}),r.a.createElement(E.a,{type:"password",name:"repeatPassword",component:v,id:"repeatPassword",className:"form-control ".concat(p.a.formControl),label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:""}),r.a.createElement(E.a,{type:"tel",name:"tel",component:v,id:"telInput",className:"form-control ".concat(p.a.formControl),label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",required:""}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement(E.a,{type:"checkbox",name:"agree",component:b,value:"remember-me"})),t&&r.a.createElement("span",null,t),r.a.createElement("button",{className:"btn btn-lg btn-success btn-block"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))})),N=function(e){var a=e.hideHeader,t=e.showHeader;Object(n.useEffect)((function(){return a(),function(){t()}}));return r.a.createElement("div",{className:"text-center ".concat(p.a.registrationPage)},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"mb-5",src:"5551.png",alt:"",width:"300px",height:"100px"})),r.a.createElement(w,{onSubmit:function(e){console.log("Submit"),console.log(e)}}),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"@VPROFI.RU 2019 All rights reserved "))},y=t(23),S=t.n(y),x=t(283),O=t(282),H=t(127),k=t(275),P=t(281),j=function(){return r.a.createElement(x.a,{collapseOnSelect:!0,expand:"lg",bg:"white"},r.a.createElement(x.a.Brand,{href:"#"},r.a.createElement("img",{src:"5551.png",width:"150",height:"50"})),r.a.createElement(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(x.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(O.a,{inline:!0,className:"mx-lg-5 ".concat(S.a.searchForm)},r.a.createElement(H.a,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",className:"mr-sm-2"}),r.a.createElement(k.a,{variant:"outline-primary"},"\u0418\u0441\u043a\u0430\u0442\u044c")),r.a.createElement("div",{className:"mr-lg-auto ".concat(S.a.geo)},r.a.createElement("span",{style:{cursor:"pointer"}},r.a.createElement("img",{src:"geofence_5400.ico",alt:"",width:"25px"}),"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f")),r.a.createElement(P.a,null,r.a.createElement(P.a.Link,{eventKey:"signIn",href:"#/signIn"},"\u0412\u0445\u043e\u0434"),r.a.createElement(P.a.Link,{eventKey:"registration",href:"#/registration"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))},I=t(276),C=t(277),T=t(128),A=t(130),q=t(131),F=t(137),R=t(132),B=t(138),M=t(133),D=t.n(M),L=t(96),z=t.n(L),W=(t(271),t(272),["\u0420\u0443\u0441\u043b\u0430\u043d","\u0414\u0435\u043d\u0438\u0441","\u0418\u0431\u0440\u0430\u0433\u0438\u043c","\u0418\u043b\u044c\u0448\u0430\u0442","\u041b\u044e\u0434\u043e\u0432\u0438\u043a","\u041e\u0440\u0435\u0441\u0442","\u0420\u043e\u0441\u0442\u0438\u0441\u043b\u0430\u0432","\u0423\u043c\u0430\u0440","\u0428\u0430\u0440\u043b\u044c","\u0410\u0433\u0430\u043f","\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430","\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f","\u0410\u0433\u0440\u0438\u043f\u043f\u0438\u043d\u0430","\u041c\u0443\u0441\u043b\u0438\u043c","\u041c\u0430\u0434\u0438\u043d\u0430","\u0425\u0435\u0434\u0430","\u0420\u0430\u0448\u0438\u0434","\u0421\u0423\u041b\u0423\u041c\u0411\u0415\u041a"]),Z=["\u041a\u043e\u043d\u043e\u043d\u043e\u0432","\u0410\u043d\u0434\u0440\u0443\u0445\u043e\u0432\u0438\u0447","\u041b\u0443\u043a\u0430\u0448\u0435\u043d\u043a\u043e","\u041f\u0430\u0432\u043b\u043e\u0432","\u0421\u0442\u0435\u0433\u0430\u0439\u043b\u043e","\u0416\u0443\u0440\u0430\u0432\u043b\u0451\u0432","\u041b\u0430\u0440\u0438\u043e\u043d\u043e\u0432","\u0422\u0435\u043c\u0447\u0435\u043d\u043a\u043e","\u0413\u0440\u0438\u0448\u0438\u043d","\u0410\u043d\u0434\u0440\u0443\u0445\u043e\u0432\u0438\u0447","\u0411\u043e\u043b\u044c\u0448\u0430\u043a\u043e\u0432","\u0425\u0430\u043c\u0437\u0430\u0442\u043e\u0432","\u041c\u0443\u0433\u0430\u043c\u0430\u0435\u0432"],V=["\u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447","\u041c\u0430\u043a\u0441\u0438\u043c\u043e\u0432\u0438\u0447","\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447","\u0413\u0440\u0438\u0433\u043e\u0440\u044c\u0435\u0432\u0438\u0447","\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447","\u0415\u0432\u0433\u0435\u043d\u044c\u0435\u0432\u0438\u0447","\u041b\u044c\u0432\u043e\u0432\u0438\u0447","\u0410\u043d\u0430\u0442\u043e\u043b\u0438\u0435\u0432\u0438\u0447","\u0412\u0430\u043b\u0435\u0440\u044c\u0435\u0432\u0438\u0447","\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0438\u0447","\u0410\u0445\u043c\u0430\u0442\u043e\u0432\u0438\u0447","\u042e\u043d\u0443\u0441\u0431\u0435\u043a\u043e\u0432\u0438\u0447","\u0410\u0448\u043e\u0442\u043e\u0432\u0438\u0447"],U=[{categoryName:"\u0420\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440\u044b",professions:["\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a ","\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430","\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a","\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0448\u043a\u043e\u043b\u0430","\u041c\u0443\u0437\u044b\u043a\u0430"]},{categoryName:"\u041c\u0430\u0441\u0442\u0435\u0440\u0430 \u043f\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0443",professions:["\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0438\u043a\u0438","\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u043a\u0438","\u041f\u043b\u0438\u0442\u043e\u0447\u043d\u0438\u043a\u0438","\u0428\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u044b","\u0420\u0435\u043c\u043e\u043d\u0442 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447"]},{categoryName:"\u041c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a\u0440\u0430\u0441\u043e\u0442\u044b",professions:["\u041c\u0430\u043a\u0438\u044f\u0436","\u041c\u0430\u043d\u0438\u043a\u044e\u0440","\u041f\u0440\u0438\u0447\u0451\u0441\u043a\u0438","\u042d\u043f\u0438\u043b\u044f\u0446\u0438\u044f","\u0421\u0442\u0438\u043b\u0438\u0441\u0442\u044b"]},{categoryName:"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0435\u0440\u044b",professions:["\u0419\u043e\u0433\u0430","\u0411\u043e\u043a\u0441","\u0424\u0438\u0442\u043d\u0435\u0441","\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435","\u0411\u043e\u0434\u0438\u0431\u0438\u043b\u0434\u0438\u043d\u0433"]},{categoryName:"\u0412\u0440\u0430\u0447\u0438",professions:["\u0413\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433\u0438","\u0414\u0435\u0440\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438","\u041e\u0442\u043e\u043b\u0430\u0440\u0438\u043d\u0433\u043e\u043b\u043e\u0433\u0438","\u041f\u0435\u0434\u0438\u0430\u0442\u0440\u044b","\u041c\u0420\u0422"]}],K=["avatars/2Z9k75SIbYU.jpg","avatars/1525374264_7f85e7b.jpeg","avatars/ariana_grande.jpg","avatars/avatar2700.jpg","avatars/avatar-zabavnogo-malisha-v-ochkah.jpg","avatars/boy.jpg","avatars/gomer.jpg","avatars/skvidvart.jpg","avatars/tomInLow.jpg","avatars/unnamed.jpg","avatars/youloveit.jpg"],Q=function(e){return e[(a=e.length-1,Math.floor(Math.random()*Math.floor(a)))];var a},J=function(e){return Q(U[e].professions)};var X=function(e,a){for(var t,n=[],r=0;r<e;r++){var l=[Q(Z),Q(W),Q(V)],c=Object(o.a)(l,3),s=c[0],i=c[1],m=c[2];n.push({id:(t=s+"^"+i,t.split("").reduce((function(e,a){return(e<<5)-e+a.charCodeAt(0)|0}),0)),surname:s,name:i,patronymic:m,rating:(3+2*Math.random()).toFixed(1),profession:J(a),avatar:Q(K)})}return n},G=function(e){function a(){return Object(A.a)(this,a),Object(F.a)(this,Object(R.a)(a).apply(this,arguments))}return Object(B.a)(a,e),Object(q.a)(a,[{key:"render",value:function(){var e=["\u0420\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440\u044b \u0438 \u043a\u0443\u0440\u0441\u044b","\u041c\u0430\u0441\u0442\u0435\u0440\u0430 \u043f\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0443","\u041c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a\u0440\u0430\u0441\u043e\u0442\u044b","\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0435\u0440\u044b","\u0410\u0432\u0442\u043e\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b","\u0410\u0440\u0442\u0438\u0441\u0442\u044b","\u0418\u0422-\u0444\u0440\u0438\u043b\u0430\u043d\u0441\u0435\u0440\u044b","\u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b","\u0412\u0435\u0442\u0435\u0440\u0438\u043d\u0430\u0440\u044b","\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u044b \u0438 \u044e\u0440\u0438\u0441\u0442\u044b","\u0412\u0440\u0430\u0447\u0438","\u0418\u0449\u0435\u0442\u0435 \u043a\u043e\u0433\u043e-\u0442\u043e \u0435\u0449\u0451?"];return r.a.createElement("div",{className:z.a.bodyOfSlick},r.a.createElement("div",null,r.a.createElement(D.a,{infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1,initialSlide:0,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,swipeToSlide:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,swipeToSlide:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,swipeToSlide:!0}}]},e.map((function(e){return r.a.createElement("div",{className:z.a.category},r.a.createElement("h6",{style:{color:"white"}},e))})))))}}]),a}(r.a.Component),$=function(){return r.a.createElement("div",{className:"".concat(S.a.bottomNavBar)},r.a.createElement(I.a,{fluid:!0,className:S.a.container},r.a.createElement(C.a,null,r.a.createElement(T.a,{sm:12,md:2},r.a.createElement("h5",null,"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438")),r.a.createElement(T.a,{sm:12,md:10},r.a.createElement(G,null)))))},Y=function(e){var a=e.isHeaderVisible;return r.a.createElement("div",{className:a?"".concat(S.a.navbar):"".concat(S.a.displayNone," ").concat(S.a.navbar)},r.a.createElement(j,null),r.a.createElement($,null))},ee=t(10),ae=t(134),te=t(285),ne=t(135);function re(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function le(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?re(t,!0).forEach((function(a){Object(ne.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ce="vprofiApp/registration-reducer/PASSWORDS-ARE-EQUALS",oe="vprofiApp/registration-reducer/AGREEMENT-CHECKED",se={passwords_are_equals:!0,isAgreementChecked:!0},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ce:return le({},e,{passwords_are_equals:a.passwords_are_equals});case oe:return le({},e,{isAgreementChecked:a.agreement_checked});default:return e}},me=Object(ee.c)({registrationPage:ie,form:te.a}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,de=Object(ee.e)(me,_e(Object(ee.a)(ae.a)));window.__store__=de;var ue=de,pe=t(46),Ee=t(49),ge=t.n(Ee),fe=Object(g.a)({form:"signIn",validate:function(e){console.log("signInValidate");var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password||(a.password="Required"),a}})((function(e){var a=e.handleSubmit,t=e.error;return console.log("error:\n---------------------"),console.log(t),console.log("---------------------"),r.a.createElement("form",{className:ge.a.formSignIn,onSubmit:a},r.a.createElement(E.a,{type:"email",name:"email",component:v,id:"inputEmail",className:"form-control ".concat(ge.a.formControl),label:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",autoFocus:""}),r.a.createElement(E.a,{type:"password",name:"password",component:v,id:"inputPassword",className:"form-control ".concat(ge.a.formControl),label:"\u041f\u0430\u0440\u043e\u043b\u044c",required:""}),t&&r.a.createElement("span",null,t),r.a.createElement("button",{className:"btn btn-lg btn-success btn-block"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))})),he=function(e){var a=e.hideHeader,t=e.showHeader;Object(n.useEffect)((function(){return a(),function(){t()}}));return r.a.createElement("div",{className:"text-center ".concat(ge.a.signInPage)},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"mb-5",src:"5551.png",alt:"",width:"300px",height:"100px"})),r.a.createElement(fe,{onSubmit:function(e){console.log("Submit"),console.log(e)}}),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"@VPROFI.RU 2019 All rights reserved "))},ve=t(284),be=t(90),we=t.n(be);var Ne=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),s=Object(o.a)(c,2),i=s[0],m=s[1];return r.a.createElement(ve.a,{activeIndex:t,direction:i,onSelect:function(e,a){console.log("selectedIndex: "+e),console.log("direction: "+a),l(e),m(a)}},r.a.createElement(ve.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"carousel_test/FirstSlide.svg",alt:"First slide"}),r.a.createElement(ve.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(ve.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"carousel_test/SecondSlide.svg",alt:"Second slide"}),r.a.createElement(ve.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(ve.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"carousel_test/ThirdSlide.svg",alt:"Third slide"}),r.a.createElement(ve.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))},ye=function(){return r.a.createElement("div",null,r.a.createElement(ve.a,{className:we.a.fieldsAround},r.a.createElement(ve.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"carousel_test/FirstSlide.svg",alt:"First slide"}),r.a.createElement(ve.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(ve.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"carousel_test/SecondSlide.svg",alt:"Third slide"}),r.a.createElement(ve.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(ve.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"carousel_test/ThirdSlide.svg",alt:"Third slide"}),r.a.createElement(ve.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),r.a.createElement(Ne,null))},Se=(t(280),t(72)),xe=t.n(Se),Oe=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(["one","two","three","four"]),c=Object(o.a)(l,2),s=c[0],i=c[1];r.a.useEffect((function(){if(s.length>0){console.log("render");var e=setTimeout(m,5e3,s);return function(){return clearTimeout(e)}}}));var m=function(e){if(e.length>0){console.log(e);var a=e.slice();a.splice(0,1),i(a)}};return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(T.a,{md:6},r.a.createElement(k.a,{className:xe.a.myButton,onClick:function(){t(!0),setTimeout(t,3100,!1)}},"StartThisShit"),r.a.createElement(k.a,{className:xe.a.myButton,onClick:function(){return function(e){var a=e.slice(),t="".concat((new Date).getSeconds()," ").concat((new Date).getMilliseconds());a.push(t),i(a)}(s)}},"add"),r.a.createElement(k.a,{className:xe.a.myButton,onClick:function(){return m(s)}},"delete")),r.a.createElement(T.a,{md:6},s.map((function(e){return"".concat(e," ")})))))},He=t(7),ke=t.n(He),Pe=function(){return r.a.createElement("div",{className:"".concat(ke.a.flex," ").concat(ke.a.halloween_body)},r.a.createElement("div",{className:"".concat(ke.a.main," ").concat(ke.a.flex)},r.a.createElement("div",{className:ke.a.frank},r.a.createElement("div",{className:"".concat(ke.a.head," ").concat(ke.a.flex)},r.a.createElement("div",{className:ke.a.head__t}),r.a.createElement("div",{className:ke.a.head__m},r.a.createElement("div",{className:ke.a.face},r.a.createElement("div",{className:"".concat(ke.a.eye," ").concat(ke.a.flex)},r.a.createElement("div",{className:ke.a.eye__l}),r.a.createElement("div",{className:ke.a.eye__r})),r.a.createElement("div",{className:"".concat(ke.a.nose," ").concat(ke.a.flex)},r.a.createElement("div",{className:ke.a.nose__t}),r.a.createElement("div",{className:ke.a.nose__b})),r.a.createElement("div",{className:ke.a.mouth}),r.a.createElement("div",{className:ke.a.teeth},r.a.createElement("div",{className:ke.a.teeth__l}),r.a.createElement("div",{className:ke.a.teeth__m}),r.a.createElement("div",{className:ke.a.teeth__r})))),r.a.createElement("div",{className:ke.a.head__b})),r.a.createElement("div",{className:"".concat(ke.a.hair," ").concat(ke.a.flex)},r.a.createElement("div",{className:ke.a.hair__t}),r.a.createElement("div",{className:"".concat(ke.a.hair__m," ").concat(ke.a.black)}),r.a.createElement("div",{className:"".concat(ke.a.hair__b," ").concat(ke.a.black)})),r.a.createElement("div",{className:"".concat(ke.a.ear," ").concat(ke.a.flex)},r.a.createElement("div",{className:ke.a.ear__l}),r.a.createElement("div",{className:ke.a.ear__r})),r.a.createElement("div",{className:ke.a.screws},r.a.createElement("div",{className:ke.a.screws__l}),r.a.createElement("div",{className:ke.a.screws__r})))))},je=t(15),Ie=t.n(je),Ce=t(286),Te=function(e){var a=e.name,t=e.surname,n=e.patronymic,l=e.rating,c=e.profession,o=e.avatar;return r.a.createElement(Ce.a,{className:Ie.a.card},r.a.createElement(Ce.a.Img,{variant:"top",src:o}),r.a.createElement(Ce.a.Body,{className:Ie.a.cardBody},r.a.createElement("span",{className:Ie.a.profession},r.a.createElement("h6",null,c)),r.a.createElement("span",{className:Ie.a.surname},t),r.a.createElement("span",{className:Ie.a.name},a),r.a.createElement("span",{className:Ie.a.patronymic},n),r.a.createElement("span",{className:Ie.a.rating},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",l)))},Ae=function(){var e=function(){for(var e,a=[],t=0;t<U.length;t++)a.push({category:(e=t,U[e].categoryName),members:X(5,t)});return a}();console.log(e);var a=e.map((function(e,a){return a%2!==0?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{md:9,sm:12},r.a.createElement(C.a,null,r.a.createElement(T.a,{md:12},r.a.createElement("span",{className:Ie.a.categoryName},r.a.createElement("h5",null,e.category)),r.a.createElement("div",{className:Ie.a.category},e.members.map((function(e){return r.a.createElement(Te,{name:e.name,surname:e.surname,patronymic:e.patronymic,rating:e.rating,profession:e.profession,avatar:e.avatar})})))))),r.a.createElement(T.a,{md:3,sm:12},r.a.createElement(C.a,{style:{height:"100%"}},r.a.createElement(T.a,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{md:9,sm:12},r.a.createElement(C.a,null,r.a.createElement(T.a,{md:12},r.a.createElement("span",{className:Ie.a.categoryName},r.a.createElement("h5",null,e.category)),r.a.createElement("div",{className:Ie.a.category},e.members.map((function(e){return r.a.createElement(Te,{name:e.name,surname:e.surname,patronymic:e.patronymic,rating:e.rating,profession:e.profession,avatar:e.avatar})})))))),r.a.createElement(T.a,{md:3,sm:12},r.a.createElement(C.a,{style:{height:"400px"}},r.a.createElement(T.a,{className:"".concat(Ie.a.border," ").concat(Ie.a.advertising)},r.a.createElement("h1",null,"\u0422\u0443\u0442"),r.a.createElement("h1",null,"\u041c\u043e\u0436\u0435\u0442"),r.a.createElement("h1",null,"\u0411\u044b\u0442\u044c"),r.a.createElement("h1",null,"\u0412\u0430\u0448\u0430"),r.a.createElement("h1",null,"\u0420\u0435\u043a\u043b\u0430\u043c\u0430"),r.a.createElement("h1",{style:{position:"absolute",bottom:"5px",right:"50%",marginRight:"-100px"}},"VPROFI.RU")))))}));return r.a.createElement("div",{className:Ie.a.main_box},r.a.createElement(I.a,{fluid:!0},r.a.createElement(C.a,null,a)))};var qe=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1];console.log(t);var c=function(){l(!1)},m=function(){l(!0)};return r.a.createElement(s.a,null,r.a.createElement(pe.a,{store:ue},r.a.createElement("div",{className:"App"},r.a.createElement(Y,{isHeaderVisible:t}),r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(i.a,{path:"/registration",render:function(){return r.a.createElement(N,{hideHeader:c,showHeader:m})}}),r.a.createElement(i.a,{path:"/signIn",render:function(){return r.a.createElement(he,{hideHeader:c,showHeader:m})}}),r.a.createElement(i.a,{path:"/carousel",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(i.a,{path:"/toasts",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(i.a,{path:"/halloween",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(i.a,{path:"/index",render:function(){return r.a.createElement(Ae,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,a,t){e.exports={registrationPage:"Registration_registrationPage__9Szk5",formSignIn:"Registration_formSignIn__3mybK"}},49:function(e,a,t){e.exports={signInPage:"SignIn_signInPage__3AdxZ",formSignIn:"SignIn_formSignIn__3EhRn"}},7:function(e,a,t){e.exports={flex:"Halloween_flex__1jmc6",black:"Halloween_black__eIW4v",halloween_body:"Halloween_halloween_body__1d9w4",main:"Halloween_main__2LOnf",frank:"Halloween_frank__2lvsZ",head:"Halloween_head__KJM8o",head__t:"Halloween_head__t__2Bq8w",head__m:"Halloween_head__m__ApCBt",head__b:"Halloween_head__b__352k3","drop-1":"Halloween_drop-1__2hTWc","drop-2":"Halloween_drop-2__21Qjp",face:"Halloween_face__3DJ6p",eye:"Halloween_eye__1WsLH",eye__l:"Halloween_eye__l__1Vlkz",eye__r:"Halloween_eye__r__B-Oj9",nose:"Halloween_nose__2nXhk",nose__t:"Halloween_nose__t__1LgWf",nose__b:"Halloween_nose__b__rogqX",mouth:"Halloween_mouth__3hvb_",teeth:"Halloween_teeth__34oUx",teeth__l:"Halloween_teeth__l__ziqPa",teeth__m:"Halloween_teeth__m__3zQOo",teeth__r:"Halloween_teeth__r__2GODn","teeth-1":"Halloween_teeth-1__2_TcS","teeth-2":"Halloween_teeth-2__2bpTq","teeth-3":"Halloween_teeth-3__3eO8c",hair:"Halloween_hair__1tlv9",hair__t:"Halloween_hair__t__1zp0A",screws:"Halloween_screws__2X4Oq",hair__m:"Halloween_hair__m__2QIWR",hair__b:"Halloween_hair__b__Nuazs",ear:"Halloween_ear__2CbPE",ear__l:"Halloween_ear__l__2srLC",ear__r:"Halloween_ear__r__2oO5U",screws__l:"Halloween_screws__l__1AfnJ",screws__r:"Halloween_screws__r__2Bm0Q"}},70:function(e,a,t){e.exports={error:"FormsControls_error__1WDTH",checkbox:"FormsControls_checkbox__1n0sf",formControl:"FormsControls_formControl__38pEw"}},72:function(e,a,t){e.exports={myButton:"Toasts_myButton__1RHy0"}},90:function(e,a,t){e.exports={fieldsAround:"Carousel_fieldsAround__2Tszl"}},91:function(e,a,t){e.exports={greeting:"Main_greeting__tgFZW",text:"Main_text__3PQM6",space:"Main_space__23ODj"}},96:function(e,a,t){e.exports={bodyOfSlick:"Slick_bodyOfSlick__2q4r2",inner:"Slick_inner__L9353",category:"Slick_category__2d64q"}}},[[139,1,2]]]);
//# sourceMappingURL=main.06fb8ca9.chunk.js.map