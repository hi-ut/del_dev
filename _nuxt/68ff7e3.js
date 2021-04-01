(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{402:function(t,e,n){"use strict";n.r(e);n(31);var r=n(8),c=n(13),o=n(11),l=n(12),_=n(4),h=n(5),v=(n(16),n(44),n(52),n(1)),f=n(165);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(_.a)(t);if(e){var c=Object(_.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var d=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=n(245).Timeline,k=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/dev",t.lang=t.$i18n.locale,t}return Object(c.a)(n,[{key:"lg",get:function(){return this.$store.getters.getLg},set:function(t){this.$store.commit("setLg",t)}},{key:"head",value:function(){return{titleTemplate:null,title:"ja"===this.$i18n.locale?"東京大学史料編纂所":"Historiographical Institute The University of Tokyo"}}},{key:"getHiPath",value:function(data){return data.includes("hi.u-tokyo.ac.jp")?data:this.baseUrl+"/"+("en"===this.lang?"en/":"")+data+"/"}}]),n}(v.Vue),j=k=d([Object(v.Component)({components:{Timeline:y,News2:f.default}})],k),w=n(10),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-img"},[n("img",{attrs:{src:"https://www.hi.u-tokyo.ac.jp/common/images/mainimg2018.jpg",width:"1050",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[n("News",{attrs:{"is-list-link":!0}}),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.$t("組織")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:t.getHiPath("kodai")}},[t._v(t._s(t.$t("古代史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("chusei")}},[t._v(t._s(t.$t("中世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("kinsei")}},[t._v(t._s(t.$t("近世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("komo")}},[t._v(t._s(t.$t("古文書古記録部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("tokushu")}},[t._v(t._s(t.$t("特殊史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gazo")}},[t._v(t._s(t.$t("画像史料解析センター")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("cdps")}},[t._v(t._s(t.$t("前近代日本史情報国際センター")))])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"faculty"})}},[t._v(t._s(t.$t("教員一覧")))])],1),t._v(" "),"ja"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"collaboration-kyoten"})}},[t._v(t._s(t.$t("共同利用・共同研究拠点")))])],1):t._e(),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gijyutu")}},[t._v(t._s(t.$t("技術部・史料保存技術室")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("ir")}},[t._v(t._s(t.$t("IR・広報室")))])])])]),t._v(" "),t._e(),t._v(" "),n("div",{staticClass:"frame02 mt2"},[n("p",[n("a",{attrs:{href:"https://utf.u-tokyo.ac.jp/"}},[n("img",{attrs:{src:t.baseUrl+"/assets/img/common/btn_kihu.png",alt:"東京大学基金"}})])]),t._v(" "),n("a",{staticClass:"btn01 v2",attrs:{href:"https://utf.u-tokyo.ac.jp/project/pjt10"}},[n("em",[t._v(t._s(t.$t("史料編纂所基金")))]),"ja"===t.lang?[t._v("（部局基金）")]:t._e()],2)]),t._v(" "),t._e(),t._v(" "),t._m(2),t._v(" "),t._e()],1)])]),t._v(" "),"ja"===t.lang?n("div",{staticClass:"foot-link",staticStyle:{background:"white"}},[n("div",{staticClass:"inner"},[t._m(3),n("nuxt-link",{staticClass:"btn01 v1",attrs:{to:t.localePath({name:"faq-slug"})}},[t._v("よくあるご質問")]),n("a",{staticClass:"btn01 v1",attrs:{href:"https://cliocyb.hi.u-tokyo.ac.jp/start.html"}},[t._v("所内用サイト")])],1)]):t._e(),t._v(" "),t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn01 v1",attrs:{href:"https://clioteam.hi.u-tokyo.ac.jp/share/"}},[t._v("共同研究に"),n("br"),t._v("\n          参加されている皆様へ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"fc2",attrs:{href:"shakairenkei/srindex.html"}},[t._v("社会連携研究部門は"),n("br"),t._v("\n            2013年3月に時限を迎えました。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt1"},[e("a",{attrs:{href:"https://twitter.com/UTokyo_HI",target:"_blank"}},[e("img",{attrs:{src:"https://www.hi.u-tokyo.ac.jp/common/images/Twitter_Social_Icon_Square_Color.png",width:"45px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn01 v1",attrs:{href:"https://clioteam.hi.u-tokyo.ac.jp/share/"}},[t._v("共同研究に"),n("br"),t._v("\n        参加されている皆様へ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{News:n(166).default})}}]);