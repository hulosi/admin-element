(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mainSysLoginLog","chunk-43418c31"],{"0055":function(e,t,n){"use strict";var r=n("4bfd"),a=n.n(r);t["default"]=a.a},"0631":function(e,t,n){var r=n("c20f"),a=n("2f85"),o=n("184b"),s="[object DOMException]",i="[object Error]";function c(e){if(!a(e))return!1;var t=r(e);return t==i||t==s||"string"==typeof e.message&&"string"==typeof e.name&&!o(e)}e.exports=c},"1da7":function(e,t,n){"use strict";var r=n("86f1"),a=n.n(r);t["default"]=a.a},3824:function(e,t,n){var r=n("ff23"),a=9007199254740991;function o(e){return r(e)&&e>=-a&&e<=a}e.exports=o},"44be":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hl-page",{class:e.$style.page,attrs:{title:"接口统计"}},[n("cd-panel",{class:e.$style.list,attrs:{"hide-header":""}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.logs,size:"mini"}},[n("cd-table-column",{attrs:{prop:"address",label:"地点",width:"180","show-overflow-tooltip":""}}),n("cd-table-column",{attrs:{prop:"userName",label:"用户名",width:"140","show-overflow-tooltip":""}}),n("cd-table-column",{attrs:{prop:"lastName",label:"姓名",width:"140","show-overflow-tooltip":""}}),n("cd-table-column",{attrs:{prop:"ipAddress",label:"ip地址",width:"120"}}),n("cd-table-column",{attrs:{prop:"userAgent",label:"客户端","show-overflow-tooltip":""}}),n("cd-table-column",{attrs:{prop:"loginTime",label:"登录时间",width:"150"}})],1),n("div",{staticStyle:{"text-align":"right","margin-top":"16px"}},[n("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,15,25,40],"page-size":e.pageSize,total:e.total,layout:"total, sizes, prev, pager, next"},on:{"update:currentPage":function(t){e.pageIndex=t},"update:current-page":function(t){e.pageIndex=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.loadData,"current-change":e.loadData}})],1)],1)],1)},a=[],o=n("f27c"),s=n.n(o),i=n("ce9b"),c=n("579a"),u=n("a937"),l=n("f087");function p(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(e){p(o,r,a,s,i,"next",e)}function i(e){p(o,r,a,s,i,"throw",e)}s(void 0)})}}var d={name:"MainParent_Sys_LoginLog_LoginLog",title$:"登录日志",components:{HlPage:i["a"],HlIcon:c["a"],HlStatusText:u["a"]},withLoading:!0,data:function(){return{logs:[],total:0,pageIndex:1,pageSize:10}},computed:{},methods:{loadData$:function(){var e=f(s.a.mark(function e(){var t;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["default"].listLoginLogs({},this.pageIndex,this.pageSize);case 2:t=e.sent,this.logs=(t.content||[]).map(function(e){var t=e;return t.address=e.country+e.province+e.city,t}),this.logTotal=t.total||0,this.total=t.total;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),update:function(e){this.push_("/sys/user/".concat(e.userId,"/edit"))},detail:function(e){this.push_("/sys/user/detail/".concat(e.userId))},add:function(){this.push_("/sys/user/add/edit")}},created:function(){this.loadData()}},h=d,v=n("1da7"),g=n("17cc");function w(e){this["$style"]=v["default"].locals||v["default"]}var m=Object(g["a"])(h,r,a,!1,w,null,null);t["default"]=m.exports},4600:function(e,t,n){"use strict";var r=n("98f7"),a=n.n(r);t["default"]=a.a},"4bfd":function(e,t,n){e.exports={header:"page-c687488282745351737a955495a9b17d",headerInner:"page-5fd71007d2a318fd3c48437090d0a4fb",title:"page-d1a2fbce8a74f128c9c5f2b86e6f8821",inner:"page-eb9c66952357b7faaec4ccca9c010df9",back:"page-a86cfb1bd65dbeb39b587ec9ba2463c3"}},"579a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cd-icon",e._g(e._b({attrs:{url:e.url,prefix:e.prefix}},"cd-icon",e.$attrs,!1),e.$listeners))},a=[],o={name:"HlIcon",componentName:"HlIcon",components:{},mixins:[],inheritAttrs:!1,props:{src:String,alt:String,paddingTop:String},data:function(){return{url:"//at.alicdn.com/t/font_1102612_ycfmo3zzjr.js",prefix:"hulo-icon"}},computed:{},methods:{},created:function(){},mounted:function(){}},s=o,i=n("17cc"),c=Object(i["a"])(s,r,a,!1,null,null,null),u=c.exports;n.d(t,"a",function(){return u})},"86f1":function(e,t,n){},"98f7":function(e,t,n){e.exports={varPrimaryColor:"#409EFF",varPrimaryColor30:"#d9ecff",varPrimaryColor20:"#a6d2ff",varSecondaryColor:"#FFA354",varSuccessColor:"#00cc66",varWarningColor:"#ff9900",varErrorColor:"#ff3300",varImportantColor:"#23364C",varActionColor:"#2680D8",varActionColor20:"#174d81",varActionColor30:"#0f3356",varTitleColor:"#23364C",varText40Color:"#333333",varText30Color:"#444444",varText20Color:"#666666",varText10Color:"#999999",varDisableColor:"#F2F2F2",varMoneyColor:"#364B66"}},a937:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:e.$style.status},[n("hl-icon",{style:e.sty,attrs:{type:"status-point"}}),e._t("default")],2)},a=[],o=n("6332"),s=n.n(o),i=n("2584"),c=n.n(i),u=n("c83a"),l=n.n(u),p=n("579a"),f={},d={name:"HlStatusText",componentName:"HlStatusText",components:{HlIcon:p["a"]},mixins:[],inheritAttrs:!1,props:{color:String},data:function(){return{}},computed:{sty:function(){var e={};return this.color&&(e.color=f[this.color]?f[this.color]:this.color),e}},methods:{},created:function(){var e=this;f=Object.keys(this.$style).filter(function(e){return l()(e,"varText")&&c()(e,"Color")}).reduce(function(t,n){var r=t,a=s()(n.slice(3,-5));return r[a]=e.$style[n],r},{title:this.$style.varTitleColor,primary:this.$style.varPrimaryColor,secondary:this.$style.varSecondaryColor,success:this.$style.varSuccessColor,warning:this.$style.varWarningColor,error:this.$style.varErrorColor,important:this.$style.varImportantColor,action:this.$style.varActionColor,disable:this.$style.varDisableColor,money:this.$style.varMoneyColor})}},h=d,v=n("4600"),g=n("17cc");function w(e){this["$style"]=v["default"].locals||v["default"]}var m=Object(g["a"])(h,r,a,!1,w,null,null),y=m.exports;n.d(t,"a",function(){return y})},ce9b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cd-page",e._g(e._b({},"cd-page",e.$attrs,!1),e.$listeners),[e.hideHeader?e._e():e._t("header",[n("div",{class:e.$style.header},[e.showBack?n("hl-icon",{class:e.$style.back,attrs:{type:"fanhui"},nativeOn:{click:function(t){return e.back()}}}):e._e(),e.title?n("span",{class:e.$style.title},[e._v(e._s(e.title))]):e._e(),n("div",{class:e.$style.headerInner},[e._t("header-inner")],2)],1)]),n("div",{class:e.innerCls},[e._t("default")],2)],2)},a=[],o=n("579a"),s={name:"HlPage",componentName:"HlPage",components:{HlIcon:o["a"]},mixins:[],inheritAttrs:!1,props:{hideHeader:Boolean,title:String,innerClass:String,showBack:Boolean},data:function(){return{}},computed:{innerCls:function(){return this.innerClass?[this.$style.inner].concat(this.innerClass):[this.$style.inner]}},methods:{back:function(){this.$router.go(-1)}},created:function(){},mounted:function(){}},i=s,c=n("0055"),u=n("17cc");function l(e){this["$style"]=c["default"].locals||c["default"]}var p=Object(u["a"])(i,r,a,!1,l,null,null),f=p.exports;n.d(t,"a",function(){return f})},e1d2:function(e,t,n){"use strict";n.d(t,"a",function(){return U});var r=n("f27c"),a=n.n(r),o=n("03c7"),s=n.n(o),i=n("2499"),c=n.n(i),u=n("c83a"),l=n.n(u),p=n("2901"),f=n.n(p),d=n("0631"),h=n.n(d),v=n("3824"),g=n.n(v),w=n("bf92"),m=n.n(w),y=n("7f43"),b=n.n(y),k=n("5ee4"),x=n.n(k),_=n("0162");function $(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}function I(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(e){$(o,r,a,s,i,"next",e)}function i(e){$(o,r,a,s,i,"throw",e)}s(void 0)})}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&T(e.prototype,t),n&&T(e,n),e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(){return window.$h.apiErrorPrefix||"__HSCF__ERROR__"}b.a.defaults.paramsSerializer=function(e){return x.a.stringify(e)};var U=function(){function e(t){var n=t.baseUrl,r=t.timeout,a=t.option,o=void 0===a?{}:a,s=t.requestSuccessInterceptor,i=void 0===s?e.authRequestInterceptor:s,c=t.requestErrorInterceptor,u=void 0===c?e.errorInterceptor:c,l=t.responseSuccessInterceptor,p=void 0===l?e.hscfResponseInterceptor:l,f=t.responseErrorInterceptor,d=void 0===f?e.errorInterceptor:f;C(this,e);var h=o;h.baseURL=n||o.baseUrl||e.getDefaultBaseUrl(),h.timeout=r||o.timeout||window.$h.requestTimeout,h.headers=o.headers||{},h.headers["Content-Type"]=o.headers["Content-Type"]||"application/json",this.option=h,this.axios=b.a.create(h),this.axios.interceptors.request.use(i,u),this.axios.interceptors.response.use(p,d)}return S(e,[{key:"getRequest",value:function(){return this.axios}}],[{key:"getDefaultBaseUrl",value:function(){return window.$h.baseUrl}},{key:"unauthRequestInterceptor",value:function(){var e=I(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"authRequestInterceptor",value:function(){var t=I(a.a.mark(function t(n){var r,o;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=n,!r.$notPermission){t.next=3;break}return t.abrupt("return",r);case 3:return t.prev=3,t.next=6,e._getToken();case 6:return o=t.sent,m()(r,"headers.Authorization",o),t.abrupt("return",r);case 11:throw t.prev=11,t.t0=t["catch"](3),new Error("".concat(q(),"L401-").concat(t.t0.message));case 14:case"end":return t.stop()}},t,null,[[3,11]])}));function n(e){return t.apply(this,arguments)}return n}()},{key:"_getToken",value:function(){var t=I(a.a.mark(function t(){var n,r,o,s,i,c,u,l,p;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=window.$h.getAuthInfo()||{},r=n.refreshToken,o=n.accessToken,s=n.lastUpdateTime,i=n.expiresIn,o){t.next=4;break}throw e._login(),new Error("你尚未登录,正在跳转到登录页面");case 4:if(r&&g()(s)&&g()(i)){t.next=6;break}return t.abrupt("return",o);case 6:if(c=(new Date).getTime(),u=c-s>=i-window.$h.refreshTokenTolerantTime,u){t.next=10;break}return t.abrupt("return",o);case 10:return e._refreshToken||(e._refreshToken=b.a.post("/auth/token",{grant_type:"refresh_token",refresh_token:r,client_secret:window.$h.clientSecret,client_id:window.$h.clientId},{baseURL:window.$h.authUrl,timeout:window.$h.requestTimeout,transformRequest:[function(e){return x.a.stringify(e)}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})),t.next=13,e._refreshToken;case 13:return l=t.sent,p=l.data,window.$h.bus.emit("setLoginInfo",{refreshToken:p.refresh_token,accessToken:p.access_token,lastUpdateTime:(new Date).getTime(),expiresIn:1e3*p.expires_in,scope:p.scope}),t.abrupt("return",o);case 17:case"end":return t.stop()}},t)}));function n(){return t.apply(this,arguments)}return n}()},{key:"_logout",value:function(){window.$h.bus.emit("logout")}},{key:"_login",value:function(){window.$h.bus.emit("login")}},{key:"_handleUnauthorized",value:function(){throw e._logout(),new Error("".concat(q(),"401-无权限，请重新登录"))}},{key:"makeRequestIns",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.$h.requestTimeout;if(f()(t))return new e({baseUrl:t,timeout:n}).getRequest();var r=t;return new e(r).getRequest()}},{key:"makeBaseRequestIns",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;return n.baseUrl=window.$h.baseUrl,new e(n).getRequest()}},{key:"makeBaseRequestInsWithUnauth",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;return n.baseUrl=window.$h.baseUrl,n.requestSuccessInterceptor=e.unauthRequestInterceptor,new e(n).getRequest()}},{key:"makeAuthRequestInsWithUnauthAndPlain",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;n.baseUrl=window.$h.authUrl,n.requestSuccessInterceptor=e.unauthRequestInterceptor,n.responseSuccessInterceptor=e.plainDataResponseInterceptor;var r=new e(n).getRequest();return r}},{key:"makePagingRequest",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],l=o;if(l.pageNum=i,l.pageSize=c,u){var p=u.filter(function(e){return!s()(e.order)}).sort(function(e,t){return e.order-t.order}).map(function(e){return'"'.concat(e.prop,'":"').concat(e.order,'"')}),f="{".concat(p.join(","),"}");l._sortColumn=encodeURIComponent(f)}r&&(l=r(l));var d=n;d.params=l;var h=a||e.makeBaseRequestIns();return h.get(t,d)}}},{key:"makeFormDataRequest",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return function(o){var s,i=t,u=n;if(c()(u,"headers.Content-Type")||m()(u,"headers.Content-Type","multipart/form-data"),r){var l=r(o,n),p=l.url,f=l.formData,d=l.option;s=f,i=p,u=d}else s=new FormData,Object.keys(o).forEach(function(e){s.append(e,o[e])});var h=a||e.makeBaseRequestIns(),v=h.post(i,s,u);return v}}},{key:"makeUploadRequest",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return function(o,s){var i,c=n;c.onUploadProgress=function(e){s(e)},c.cancelToken=new b.a.CancelToken(function(e){i=e});var u=e.makeFormDataRequest(t,c,r,a)(o);return u.abort=i,u}}}]),e}();R(U,"errorInterceptor",function(){var e=I(a.a.mark(function e(t){var n,r,o,s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,h()(t)&&"Request failed with status code 401"===t.message)try{U._handleUnauthorized()}catch(r){n=r}throw f()(n)&&(n=new Error(n)),r=null,r=l()(n.message,q())?new Error(n.message.replace(q(),"")):new Error("L500-网络异常，发送请求失败"),o=r.message.split("-")[1],s=c()(window,"$c.$message.error"),s&&s(o),r;case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),R(U,"hscfResponseInterceptor",function(){var e=I(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_["a"].lang.strategy({200:function(){var e=I(a.a.mark(function e(){var n,r,o;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.data,r={200:function(){var e=I(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",n.data);case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),401:U._handleUnauthorized,700:function(){var e=I(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:throw U._logout(),new Error("".concat(q(),"700-").concat(n.message));case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),760:function(){var e=I(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=c()(window,"$c.$message"),t&&t.closeAll(),r=c()(window,"$c.$confirm"),!r){e.next=6;break}return e.next=6,r(n.message,"提示",{confirmButtonText:"确定",type:"warning",showCancelButton:!1,closeOnClickModal:!1,closeOnPressEscape:!1});case 6:throw U._logout(),new Error("".concat(q(),"760-").concat(n.message));case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},e.next=4,_["a"].lang.strategy(r,String(n.code),I(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:throw new Error("".concat(q()).concat(n.code||"null","-").concat(n.message||"后台的数据结构有误"));case 1:case"end":return e.stop()}},e)})));case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}(),401:U._handleUnauthorized},String(t.status),I(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:throw new Error("".concat(q()).concat(t.status,"-网络出现错误, http状态码为:").concat(t.status));case 1:case"end":return e.stop()}},e)})));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e["catch"](0),e.next=11,U.errorInterceptor(e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()),R(U,"plainDataResponseInterceptor",function(){var e=I(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t.data);case 4:return e.prev=4,e.t0=e["catch"](0),e.next=8,U.errorInterceptor(e.t0);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}},e,null,[[0,4]])}));return function(t){return e.apply(this,arguments)}}())},f087:function(e,t,n){"use strict";n.r(t);var r=n("6372"),a=n("e1d2");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=a["a"].makeBaseRequestIns(),c=a["a"].makeAuthRequestInsWithUnauthAndPlain(),u={getCurrentUser:function(){return i.get("/users/currentUser")},login:function(e){return c.post("/auth/token",o({grantType:"password",clientId:r["a"].clientId,clientSecret:r["a"].clientSecret,scope:""},e))}};u.listLoginLogs=a["a"].makePagingRequest("/loginLogs"),u.paging=a["a"].makePagingRequest("/users"),u.get=function(e){return i.get("/users/".concat(e))},u.add=function(e){return i.post("/users",e)},u.update=function(e){return i.put("/users",e)},t["default"]=u},ff23:function(e,t,n){var r=n("baf2");function a(e){return"number"==typeof e&&e==r(e)}e.exports=a}}]);