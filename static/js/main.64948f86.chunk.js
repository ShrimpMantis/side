(this["webpackJsonprets-react-take-home-assignment-core"]=this["webpackJsonprets-react-take-home-assignment-core"]||[]).push([[0],{13:function(e,t,r){e.exports={header:"PropertyGrid_header__3kYaV",cardWrapper:"PropertyGrid_cardWrapper__1LEHd",propertyGridWrapper:"PropertyGrid_propertyGridWrapper__3WT-Z",headerText:"PropertyGrid_headerText__32OI3"}},14:function(e,t,r){e.exports={container:"SideNavigation_container__QpiwE",header:"SideNavigation_header__3uAWg",listings:"SideNavigation_listings__15oGW",listingWrapper:"SideNavigation_listingWrapper__2ab_O"}},18:function(e,t,r){e.exports={container:"Home_container__2m2m0",sideNav:"Home_sideNav__1B2YI"}},21:function(e,t,r){e.exports={menuContainer:"Menu_menuContainer__2Pojh",menuItem:"Menu_menuItem__2s0Uz"}},24:function(e,t,r){e.exports={container:"Layout_container__3vGf1"}},25:function(e,t,r){e.exports={container:"AboutUs_container__QdgRn"}},27:function(e,t,r){e.exports={menuContainer:"Header_menuContainer__3WSfr"}},34:function(e,t,r){},4:function(e,t,r){e.exports={container:"PropertyCard_container__36zhf",pictureWrapper:"PropertyCard_pictureWrapper__WjtzK",informationNuggetsWrapper:"PropertyCard_informationNuggetsWrapper__3_xgC",priceInformation:"PropertyCard_priceInformation__1t7G2",propertyAddress:"PropertyCard_propertyAddress__2HNzc",propertySubtext:"PropertyCard_propertySubtext__2-pKE",imageElement:"PropertyCard_imageElement__18x_r",favorite:"PropertyCard_favorite__2Vd3b",favoriteIcon:"PropertyCard_favoriteIcon__3DWy6",nugget:"PropertyCard_nugget__7Uf8C"}},42:function(e,t,r){"use strict";r.r(t);var a,n=r(1),c=r.n(n),s=r(23),i=r.n(s),o=(r(33),r(34),r(2)),p=r(24),d=r.n(p),l=r(25),u=r.n(l),j=r(0),m=function(){return Object(j.jsx)("div",{className:u.a.container,children:"Created by jahnavi mahanta"})},f=r(9),h=r.n(f),b=r(15),v=r(10),_=function(e){return e.map((function(e,t,r){var a="".concat(e.address.unit||""," ").concat(e.address.streetName||"",", ").concat(e.address.city||"",",").concat(e.address.state||""),n=e.listPrice,c=e.listDate?new Date(e.listDate):new Date,s="".concat(c.getMonth(),"/").concat(c.getDate(),"/").concat(c.getFullYear()),i=e.property.bedrooms,o={full:e.property.bathsFull,half:e.property.bathsHalf},p=e.property.area,d=[];e.photos.forEach((function(t,r){var a={description:t.includes("inside")?"inside ".concat(e.address.city," house"):"outside ".concat(e.address.city," house"),path:t};d.push(a)}));var l=e.listingId;return{address:a,area:p,baths:o,bedrooms:i,listDate:s,listPrice:n,photos:d,id:l,favorite:!1}}))},x=function(){var e=Object(b.a)(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.simplyrets.com/properties",(t=new Headers).append("Content-Type","application/json"),t.append("Accept","application/json"),t.append("Authorization","Basic ".concat(btoa("simplyrets:simplyrets"))),e.next=7,fetch("https://api.simplyrets.com/properties",{method:"GET",headers:t});case 7:return r=e.sent,e.abrupt("return",r.json());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=localStorage.getItem("response");return e?JSON.parse(e):null},O=function(e){localStorage.setItem("favProperty-".concat(e.id),JSON.stringify(e))},y=function(e){localStorage.removeItem("favProperty-".concat(e.id))},N=r(18),C=r.n(N),P=r(28);!function(e){e.squareFeet="Sq Ft",e.meters="Meters"}(a||(a={}));var S=r(4),W=r.n(S),I=r.p+"static/media/heart-fill.252a36b8.svg",k=r.p+"static/media/heart-stroke.b3b99e7a.svg",F=function(e){var t=0,r=e.property,c=Object(n.useState)(0),s=Object(v.a)(c,2),i=s[0],o=s[1],p=Object(n.useState)(!1),d=Object(v.a)(p,2),l=d[0],u=d[1];Object(n.useEffect)((function(){var e=r.baths;e.full&&e.half?t=e.full+.5*e.half:e.full&&!e.half&&(t=e.full),o(t)}),[]);var m={content:"url(".concat(k,")")},f={content:"url(".concat(I,")")};return Object(j.jsxs)("div",{className:W.a.container,children:[Object(j.jsx)("div",{className:W.a.favorite,children:Object(j.jsx)("div",{className:W.a.favoriteIcon,style:l?f:m,id:r.id,onClick:function(){return function(){var t=!l,a=Object(P.a)({},r);a.favorite=t,u(t),e.isFavoriteHandler(a)}()}})}),Object(j.jsx)("div",{className:W.a.pictureWrapper,children:Object(j.jsx)("img",{className:W.a.imageElement,src:r.photos[0].path,alt:r.photos[0].description})}),Object(j.jsxs)("div",{className:W.a.informationNuggetsWrapper,children:[Object(j.jsx)("span",{className:W.a.nugget,children:r.bedrooms}),Object(j.jsx)("span",{children:"BR"}),Object(j.jsx)("span",{className:W.a.nugget,children:"|"}),Object(j.jsx)("span",{className:W.a.nugget,children:i}),Object(j.jsx)("span",{children:"Bath"}),Object(j.jsx)("span",{className:W.a.nugget,children:"|"}),Object(j.jsx)("span",{className:W.a.nugget,children:r.bedrooms}),Object(j.jsx)("span",{children:a.squareFeet})]}),Object(j.jsxs)("div",{className:W.a.priceInformation,children:["$",r.listPrice.toLocaleString()]}),Object(j.jsx)("div",{className:W.a.propertyAddress,children:r.address}),Object(j.jsx)("div",{className:W.a.propertySubtext,children:r.listDate.toString()})]})},H=r(13),E=r.n(H),G=function(e){var t=e.properties,r=t.map((function(e,t,r){return Object(j.jsx)("div",{className:E.a.cardWrapper,children:Object(j.jsx)(F,{isFavoriteHandler:function(e){var t;(t=e).favorite?O(t):y(t)},property:e},"propertyCard-".concat(t))},"propertyWrapper-".concat(t))}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:E.a.header,children:Object(j.jsx)("div",{className:E.a.headerText,children:"Property Listings"})}),Object(j.jsx)("div",{className:E.a.propertyGridWrapper,children:r})]})},w=r(14),A=r.n(w),D=function(e){var t,r=null===(t=e.listings)||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)("div",{className:A.a.listingWrapper,children:Object(j.jsx)(F,{isFavoriteHandler:function(e){var t;(t=e).favorite?O(t):y(t)},property:e})},"listingWrapper-".concat(t))}));return Object(j.jsxs)("div",{className:A.a.container,children:[Object(j.jsx)("div",{className:A.a.header,children:"Property Listings"}),Object(j.jsx)("div",{className:A.a.listings,children:r})]})},T=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(),s=Object(v.a)(c,2),i=s[0],o=s[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=g())){e.next=10;break}return e.next=4,x();case 4:r=e.sent,n=r,localStorage.setItem("response",JSON.stringify(n)),a=_(r),p(a),e.next=12;break;case 10:a=_(t),p(a);case 12:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(e){a(e);var t=e.slice(0,3);o(t)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:C.a.container,children:Object(j.jsx)(G,{properties:r})}),Object(j.jsx)("div",{className:C.a.sideNav,children:Object(j.jsx)(D,{listings:i})})]})},L=function(){var e=[{key:"home",component:T},{key:"aboutUs",component:m}].map((function(e,t){return Object(j.jsx)(o.a,{path:"/".concat(e.key),component:e.component},"route".concat(t))}));return Object(j.jsx)("div",{className:d.a.container,children:Object(j.jsx)(o.c,{children:e})})},B=r(27),U=r.n(B),z=r(12),J=r(21),M=r.n(J),q=Object(o.f)((function(){var e=[{path:"/Home",text:"Home"},{path:"/AboutUs",text:"AboutUs"}].map((function(e,t){return Object(j.jsx)("div",{className:M.a.menuItem,children:Object(j.jsx)(z.b,{to:e.path,children:e.text})},t)}));return Object(j.jsx)("div",{className:M.a.menuContainer,children:e})})),Y=function(){return Object(j.jsx)("div",{className:U.a.menuContainer,children:Object(j.jsx)(q,{})})},K=function(){return Object(j.jsxs)(z.a,{children:[Object(j.jsx)(Y,{}),Object(j.jsx)(L,{})]})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,43)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),Q(console.log)}},[[42,1,2]]]);
//# sourceMappingURL=main.64948f86.chunk.js.map