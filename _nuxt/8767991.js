(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{397:function(e,t,n){"use strict";n.r(t);n(31);var r=n(7),c=n(8),o=n(13),f=n(11),l=n(12),w=n(4),d=n(5),h=(n(35),n(16),n(245),n(1)),y=n(55),v=n.n(y),O=n(164);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(w.a)(e);if(t){var c=Object(w.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},R=function(e){Object(f.a)(w,e);var t,n,l=j(w);function w(){var e;return Object(c.a)(this,w),(e=l.apply(this,arguments)).baseUrl="https://www.hi.u-tokyo.ac.jp/dev",e.year=-1,e.news=[],e}return Object(o.a)(w,[{key:"title",get:function(){return String(this.year)+this.$t("年度のニュース")}},{key:"asyncData",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,c,o,f,l,w,d,h,y,v,i,O,j,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.app,(o=r.year)||(f=(new Date).getFullYear(),l=(new Date).getMonth()+1,o=l<4?f-1:f),w=new Date(o+"-01-01T00:00:00.000Z").valueOf(),d=new Date(Number(o)+1+"-03-31T23:59:59.000Z").valueOf(),h={date:{$between:[w,d]}},e.next=8,n("".concat(c.i18n.locale,"/news")).where(h).sortBy("date","desc").fetch();case 8:for(y=e.sent,v={},i=0;i<y.length;i++)O=y[i],j=O.type||"news",m=O.featured?"featured":"nonFeatured",v[j]||(v[j]={featured:[],nonFeatured:[]}),v[j][m].push(O);return e.abrupt("return",{year:o,items:v});case 12:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"created",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(this.baseUrl+"/data/news/2020.json");case 2:t=e.sent,n=t.data,this.news=n;case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),w}(h.Vue),k=R=m([Object(h.Component)({components:{News2:O.default}})],R),x=n(10),component=Object(x.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("LayoutNews",{attrs:{title:e.title}},[n("News"),e._v(" "),e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{News:n(166).default,LayoutNews:n(165).default})}}]);