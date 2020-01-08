(this["webpackJsonpreact-myeats"]=this["webpackJsonpreact-myeats"]||[]).push([[7,9],{284:function(e,t,a){"use strict";var r=a(280),n=a.n(r),c=a(281),i=a(289),s=function e(){Object(c.a)(this,e),this.getGeneralApiError=function(e){switch(e.problem){case"CONNECTION_ERROR":return{error:!0,data:{message:"cannot-connect",temporary:!0}};case"NETWORK_ERROR":return{error:!0,data:{message:"network error",temporary:!0}};case"TIMEOUT_ERROR":return{error:!0,data:{message:"timeout",temporary:!0}};case"SERVER_ERROR":return{error:!0,data:{message:"server",temporary:!0}};case"UNKNOWN_ERROR":return{error:!0,data:{message:"unknown",temporary:!0}};case"CLIENT_ERROR":switch(e.message){case 401:return{data:{message:"unauthorized"}};case 403:return{data:{message:"forbidden"}};case 404:return{data:{message:"not-found",data:e.data}};default:return{data:{message:"rejected",data:e.data}}}case"CANCEL_ERROR":return null;default:return{error:!0,message:"cannot-connect api error",temporary:!0}}}},o=a(33),l={appName:Object({NODE_ENV:"production",PUBLIC_URL:"/react-my-eats",REACT_APP_API_URL:"/api",REACT_APP_API_ADAPTER:"mock-adapter",REACT_APP_BASE_URL:"https://github.com/eddielee394/react-my-eats"}).REACT_APP_NAME||"MyEats",appUrl:"https://github.com/eddielee394/react-my-eats",apiBaseUrl:"/api",apiAdapter:"mock-adapter"},u=function e(){var t=this;Object(c.a)(this,e),this.api=Object(i.create)({baseURL:l.apiBaseUrl,timeout:1e4,headers:{Accept:"application/json"}}),this.baseUrl=l.appUrl,this.getRecipes=function(){var e,a,r,c,i,s;return n.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.a.awrap(t.api.get("/recipes"));case 2:return e=l.sent,l.next=5,n.a.awrap(t.getIngredientSpecials());case 5:if(a=l.sent,e.ok){l.next=11;break}if(!(r=t.errorHandler.getGeneralApiError(e))){l.next=11;break}return console.log("Api problem",r),l.abrupt("return",r);case 11:return c=function(e){return{uuid:e.uuid,title:e.title,description:e.description,images:{full:"".concat(t.baseUrl).concat(e.images.full),medium:"".concat(t.baseUrl).concat(e.images.medium),small:"".concat(t.baseUrl).concat(e.images.small),gallery:Object(o.d)({title:"test",path:"https://loremflickr.com/320/240/food"},14)},servings:e.servings,prepTime:e.prepTime,cookTime:e.cookTime,postDate:e.postDate,editDate:e.editDate,ingredients:e.ingredients.map((function(e,t){return{uuid:e.uuid,amount:e.amount,measurement:e.measurement,name:e.name,image:"https://loremflickr.com/100/100/food?random=".concat(t)}})),directions:e.directions.map((function(e){return{instructions:e.instructions,optional:e.optional}})),specialsCount:Object(o.a)(a.data,e.ingredients,"ingredientId","uuid").length}},l.prev=12,i=e.data,s=i.map((function(e){return c(e)})),l.abrupt("return",{message:"ok",data:s});case 18:return l.prev=18,l.t0=l.catch(12),l.abrupt("return",{message:"bad-data",data:e.data});case 21:case"end":return l.stop()}}),null,null,[[12,18]])},this.getRecipe=function(e){var a,r,c,i,s;return n.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.a.awrap(t.api.get("/recipes/".concat(e)));case 2:return a=l.sent,l.next=5,n.a.awrap(t.getIngredientSpecials());case 5:if(r=l.sent,a.ok){l.next=11;break}if(!(c=t.errorHandler.getGeneralApiError(a))){l.next=11;break}return console.log("Api problem",c),l.abrupt("return",c);case 11:return i=function(e){return{uuid:e.uuid,title:e.title,description:e.description,images:{full:"".concat(t.baseUrl).concat(e.images.full),medium:"".concat(t.baseUrl).concat(e.images.medium),small:"".concat(t.baseUrl).concat(e.images.small),gallery:Object(o.d)({title:"test",path:"https://loremflickr.com/320/240/food"},14)},servings:e.servings,prepTime:e.prepTime,cookTime:e.cookTime,postDate:e.postDate,editDate:e.editDate,ingredients:e.ingredients.map((function(e,t){return{uuid:e.uuid,amount:e.amount,measurement:e.measurement,name:e.name,image:"https://loremflickr.com/100/100/food?random=".concat(t)}})),directions:e.directions.map((function(e){return{instructions:e.instructions,optional:e.optional}})),specialsCount:Object(o.a)(r.data,e.ingredients,"ingredientId","uuid").length}},l.prev=12,s=i(a.data),l.abrupt("return",{message:"ok",data:s});case 17:return l.prev=17,l.t0=l.catch(12),l.abrupt("return",{message:"bad-data",data:a.data});case 20:case"end":return l.stop()}}),null,null,[[12,17]])},this.getIngredientSpecials=function(){var e,a,r,c,i;return n.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.a.awrap(t.api.get("/specials"));case 2:if((e=s.sent).ok){s.next=8;break}if(!(a=t.errorHandler.getGeneralApiError(e))){s.next=8;break}return console.log("Api problem",a),s.abrupt("return",a);case 8:return r=function(e){return{uuid:e.uuid,ingredientId:e.ingredientId,type:e.type,title:e.title,geo:e.geo,text:Object(o.f)(e.text)}},s.prev=9,c=e.data,i=c.map((function(e){return r(e)})),s.abrupt("return",{message:"ok",data:i});case 15:return s.prev=15,s.t0=s.catch(9),s.abrupt("return",{message:"bad-data",data:e.data});case 18:case"end":return s.stop()}}),null,null,[[9,15]])},this.getIngredientSpecial=function(e){var a,r,c,i;return n.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.a.awrap(t.api.get("/specials/".concat(e)));case 2:if((a=s.sent).ok){s.next=8;break}if(!(r=t.errorHandler.getGeneralApiError(a))){s.next=8;break}return console.log("Api problem",r),s.abrupt("return",r);case 8:return c=function(e){return{uuid:e.uuid,ingredientId:e.ingredientId,type:e.type,title:e.title,geo:e.geo,text:Object(o.f)(e.text)}},s.prev=9,i=c(a.data),s.abrupt("return",{message:"ok",data:i});case 14:return s.prev=14,s.t0=s.catch(9),s.abrupt("return",{message:"bad-data",data:a.data});case 17:case"end":return s.stop()}}),null,null,[[9,14]])},this.errorHandler=new s},d=new function e(){var t=this;Object(c.a)(this,e),this.getRecipes=function(){return t.api.getRecipes()},this.getRecipe=function(e){return t.api.getRecipe(e)},this.getIngredientSpecials=function(){var e,a,r,c=arguments;return n.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:[],i.next=3,n.a.awrap(t.api.getIngredientSpecials());case 3:return a=i.sent,r=a.data.filter((function(t){return e.some((function(e){return t.ingredientId===e.uuid}))})),i.abrupt("return",{data:r});case 6:case"end":return i.stop()}}))},this.getSpecials=function(){return t.api.getIngredientSpecials()},this.getSpecial=function(e){return t.api.getIngredientSpecial(e)},this.api=new u};t.a=d},297:function(e,t,a){"use strict";var r=a(34),n=a(0),c=a.n(n),i=a(4),s=a(301),o=a(242),l=a(276),u=a(249),d=Object(o.a)((function(e){return{col:{padding:e.spacing(1.25),marginTop:e.spacing(1.25),marginBottom:e.spacing(1.25)},widget:{marginTop:e.spacing(2),marginBottom:e.spacing(2),padding:e.spacing(1),overflow:"hidden"}}}));t.a=function(e){var t=e.children,a=e.widgetClasses,n=void 0===a?"":a,o=e.colSize,m=void 0===o?"1/5":o,p=e.className,f=void 0===p?"":p,b=(Object(r.a)(e,["children","widgetClasses","colSize","className"]),d());return c.a.createElement("div",{className:Object(i.a)(b.col,f,"flex flex-col w-full sm:w-".concat(m," sidebar-container"))},c.a.createElement(s.a,{offsetTop:10,offsetBottom:20},c.a.createElement("div",{className:"widget-container"},c.a.Children.map(t,(function(e){return e.type.name===l.a.name?c.a.createElement(l.a,e.props,c.a.createElement(u.a,{className:Object(i.a)(b.widget,n)},e)):c.a.createElement(u.a,{className:Object(i.a)(b.widget,n)},e)})))))}},305:function(e,t,a){"use strict";a.r(t);var r=a(280),n=a.n(r),c=a(282),i=a(0),s=a.n(i),o=a(284),l=a(48),u=a(242),d=a(388),m=a(389),p=a(398),f=a(379),b=a(273),g=a(390),v=a(391),h=a(396),E=a(274),y=a(392),x=a(272),w=a(397),O=a(294),j=a.n(O),k=a(302),N=a.n(k),C=a(303),R=a.n(C),S=a(304),z=a.n(S),A=a(58),I=a(33),_=Object(u.a)((function(e){return{favoriteButton:{},specialsIcon:{color:e.palette.background.paper,backgroundColor:e.palette.text.secondary,border:"2px solid ".concat(e.palette.background.paper)},recipeTimeIcon:{color:e.palette.secondary.contrastText,marginLeft:"auto"}}}));var T=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),r=a[0],n=a[1],o=e.recipe,u=_(),O=o.prepTime+o.cookTime,k=o.specialsCount>0;return s.a.createElement("div",{className:"w-full my-5","data-testid":o.uuid},s.a.createElement(d.a,{className:"py-5"},s.a.createElement(m.a,{avatar:s.a.createElement(p.a,null,"ME"),title:s.a.createElement(f.a,{variant:"h6"},"recipe.author"),subheader:s.a.createElement(f.a,{variant:"subtitle1"},Object(I.c)(o.postDate)),action:s.a.createElement(b.a,{onClick:function(){n(!r)}},r?s.a.createElement(N.a,{color:"error"}):s.a.createElement(R.a,null))}),s.a.createElement(g.a,{className:"flex h-320"},s.a.createElement(A.a,{src:o.images.medium,alt:o.title})),s.a.createElement(l.a,{to:"/recipes/".concat(o.uuid),"data-testid":"recipeListItemLink-".concat(o.uuid)},s.a.createElement(v.a,null,s.a.createElement("div",{className:"flex justify-between"},s.a.createElement(f.a,{variant:"h4"},o.title),k&&s.a.createElement(h.a,{title:s.a.createElement(f.a,{variant:"caption"},o.specialsCount," Special Promotions Available!"),arrow:!0},s.a.createElement(E.a,{badgeContent:o.specialsCount,overlap:"circle",classes:{badge:u.specialsIcon}},s.a.createElement(z.a,{fontSize:"large",color:"primary"})))),s.a.createElement(f.a,{variant:"body1",component:"p",gutterBottom:!0},o.description))),s.a.createElement(y.a,{disableSpacing:!0},s.a.createElement(x.a,{onClick:I.g,size:"small"},o.specialsCount," Likes"),s.a.createElement(x.a,{onClick:I.g,size:"small"},o.specialsCount," Comments"),s.a.createElement(w.a,{icon:s.a.createElement(j.a,null),label:"".concat(O," mins"),color:"primary",className:u.recipeTimeIcon}))))},P=a(68),M=a(38);function U(e){return e.recipes.map((function(e){return s.a.createElement(T,{key:e.uuid,recipe:e})}))}t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(!1),u=Object(c.a)(l,2),d=u[0],m=u[1];return Object(i.useEffect)((function(){!function(){var e;n.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.next=3,n.a.awrap(o.a.getRecipes());case 3:(e=t.sent).error?(m(!0),M.a.error(e.data.message,{autoClose:!1}),console.log("error response",e)):(r(e.data),m(!1));case 5:case"end":return t.stop()}}))}()}),[]),s.a.createElement(P.a,{loader:!0,loadingProps:{isLoading:d,loaderType:"placeholder",type:"blogList"}},s.a.createElement(U,{recipes:a}))}},363:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");t.default=c},364:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}),n.default.createElement("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"})),"ThumbUpAlt");t.default=c},365:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement("path",{d:"M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.82z"}),"EmojiObjects");t.default=c},366:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=c},367:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=c},368:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.default=c},369:function(e,t,a){"use strict";var r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(56)).default)(n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.default=c},393:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a(242),s=a(383),o=a(380),l=a(382),u=a(276),d=a(379),m=a(249),p=a(3),f=a(1),b=(a(2),a(6)),g=a(117),v=a(5),h=n.a.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,s=e.color,o=void 0===s?"default":s,l=e.component,u=void 0===l?"button":l,d=e.disabled,m=void 0!==d&&d,b=e.disableFocusRipple,h=void 0!==b&&b,E=e.focusVisibleClassName,y=e.size,x=void 0===y?"large":y,w=e.variant,O=void 0===w?"round":w,j=Object(p.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return n.a.createElement(g.a,Object(f.a)({className:Object(c.a)(r.root,i,"round"!==O&&r.extended,"large"!==x&&r["size".concat(Object(v.a)(x))],m&&r.disabled,{primary:r.primary,secondary:r.secondary,inherit:r.colorInherit}[o]),component:u,disabled:m,focusRipple:!h,focusVisibleClassName:Object(c.a)(r.focusVisible,E),ref:t},j),n.a.createElement("span",{className:r.label},a))})),E=Object(b.a)((function(e){return{root:Object(f.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(h),y=a(33),x=a(120),w=a(305),O=a(369),j=a.n(O),k=a(297),N=a(34),C=a(398),R=(a(67),n.a.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,s=Object(p.a)(e,["children","classes","className"]),o=n.a.Children.toArray(a).filter((function(e){return n.a.isValidElement(e)}));return n.a.createElement("div",Object(f.a)({className:Object(c.a)(r.root,i),ref:t},s),o.map((function(e,t){return n.a.cloneElement(e,{className:Object(c.a)(e.props.className,r.avatar),style:Object(f.a)({zIndex:o.length-t},e.props.style)})})))}))),S=Object(b.a)((function(e){return{root:{display:"flex"},avatar:{border:"2px solid ".concat(e.palette.background.default),marginLeft:-8}}}),{name:"MuiAvatarGroup"})(R);var z=function(e){var t=e.className,a=e.users;return Object(N.a)(e,["className","users"]),n.a.createElement("div",{className:Object(c.a)(t,"flex flex-col")},n.a.createElement(d.a,{variant:"subtitle2"},"Most Active Today"),n.a.createElement(S,null,a.map((function(e){return n.a.createElement(C.a,{key:e.id,component:"button",onClick:y.g,src:e.avatarUrl})})),n.a.createElement(C.a,{component:"button",onClick:y.g},"+",a.length)))},A=a(47),I=Object(i.a)((function(e){return{userCaption:Object(A.a)({},e.breakpoints.down("sm"),{fontSize:"1.5rem"})}}));var _=function(e){var t=e.className,a=e.user,r=(Object(N.a)(e,["className","user"]),I());return n.a.createElement("div",{className:Object(c.a)(t,"flex md:flex-row flex-1 justify-around md:justify-between")},n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement(d.a,{className:r.userCaption,variant:"subtitle2"},a.stats.recipes),n.a.createElement(d.a,{variant:"caption"},"Recipes")),n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement(d.a,{className:r.userCaption,variant:"subtitle2"},a.stats.savedRecipes),n.a.createElement(d.a,{variant:"caption"},"Saved")),n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement(d.a,{className:r.userCaption,variant:"subtitle2"},a.stats.following),n.a.createElement(d.a,{variant:"caption"},"Following")))},T=a(363),P=a.n(T),M=a(364),U=a.n(M),L=Object(i.a)((function(e){return{userSubtitle:Object(A.a)({},e.breakpoints.down("sm"),{fontSize:"2rem"}),userCaption:Object(A.a)({},e.breakpoints.down("sm"),{fontSize:"1.5rem"}),userCaptionIcon:Object(A.a)({fontSize:e.typography.body1.fontSize,marginRight:".25rem"},e.breakpoints.down("sm"),{fontSize:"2rem"}),userAvatar:Object(A.a)({},e.breakpoints.down("sm"),{width:115,height:"auto"})}}));var V=function(e){var t=e.className,a=e.user,r=(Object(N.a)(e,["className","user"]),L());return n.a.createElement("div",{className:Object(c.a)(t,"flex flex-col flex-1 md:flex-row items-center")},n.a.createElement(C.a,{className:r.userAvatar,alt:"".concat(a.firstName," ").concat(a.lastName),src:a.avatarUrl}),n.a.createElement("div",{className:"text-center md:text-left"},n.a.createElement(d.a,{className:Object(c.a)(r.userSubtitle,"block"),component:"span",variant:"subtitle2",color:"textPrimary"},"".concat(a.firstName," ").concat(a.lastName)),n.a.createElement(d.a,{className:Object(c.a)(r.userCaption,"inline-flex self-center mr-5"),variant:"caption",component:"span"},n.a.createElement(P.a,{className:r.userCaptionIcon}),a.stats.followers),n.a.createElement(d.a,{className:Object(c.a)(r.userCaption,"inline-flex self-center"),variant:"caption",component:"span"},n.a.createElement(U.a,{fontSize:"small",className:r.userCaptionIcon}),Object(y.b)(a.stats.likesCount))))},H=a(273),B=a(368),D=a.n(B),G=a(367),F=a.n(G),W=a(365),$=a.n(W),J=a(366),K=a.n(J),q=function(e){return{web:n.a.createElement($.a,e),github:n.a.createElement(K.a,e),linkedin:n.a.createElement(F.a,e),twitter:n.a.createElement(D.a,e)}},Q=[{type:"web",url:"https://lamplightsolutions.net"},{type:"github",url:"https://github.com/eddielee394"},{type:"linkedin",url:"https://www.linkedin.com/in/eddie-padin/"},{type:"twitter",url:"https://twitter.com/xerotrade"}];var X=function(e){var t=e.className,a=e.buttonProps,r=e.iconProps;return n.a.createElement("div",{className:Object(c.a)(t,"w-full")},Q.map((function(e){return n.a.createElement(H.a,Object.assign({key:e.type,href:e.url,target:"_blank",rel:"noopener"},a),q(r)[e.type])})))},Y=Object(i.a)((function(e){return{addButton:{position:"fixed",right:50,bottom:12,zIndex:99}}}));t.default=function(e){var t=Y(),a=x.a.user,r=x.a.users;return n.a.createElement("div",{className:"flex flex-col sm:flex-row w-full lg:px-208 my-4"},n.a.createElement(k.a,{colSize:"1/5"},n.a.createElement(s.a,null,n.a.createElement(o.a,{disableGutters:!0},n.a.createElement(V,{user:a})),n.a.createElement(l.a,null),n.a.createElement(o.a,{disableGutters:!0},n.a.createElement(_,{user:a}))),n.a.createElement(u.a,{smDown:!0},n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement(d.a,{variant:"subtitle2"},"UserFavoritesList component"))))),n.a.createElement("div",{className:Object(c.a)("w-full sm:w-3/5 my-5 p-5")},n.a.createElement(m.a,{className:Object(c.a)("flex flex-col justify-center items-center h-full my-5 p-5")},n.a.createElement(w.default,null))),n.a.createElement(k.a,null,n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement(d.a,{variant:"subtitle2"},"FeaturedPosts component"))),n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement(z,{users:r}))),n.a.createElement(s.a,{disablePadding:!0},n.a.createElement(o.a,null,n.a.createElement("div",{className:"w-full"},n.a.createElement("div",{className:"flex flex-1 justify-between"},n.a.createElement(d.a,{variant:"caption",color:"inherit",component:"button",onClick:y.g},"About"),n.a.createElement(d.a,{variant:"caption",color:"inherit",component:"button",onClick:y.g},"Help"),n.a.createElement(d.a,{variant:"caption",color:"inherit",component:"button",onClick:y.g},"Privacy")),n.a.createElement(X,{className:"flex justify-between sm:justify-center",iconProps:{fontSize:"small"}}),n.a.createElement(l.a,null),n.a.createElement(d.a,{className:"mt-5 text-center",variant:"caption"},"\xa9 MyEats 2020"))))),n.a.createElement(E,{color:"primary",className:t.addButton,onClick:y.g},n.a.createElement(j.a,null)))}}}]);