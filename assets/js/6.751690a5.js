(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(t,a,e){"use strict";var i=e(63);e.n(i).a},167:function(t,a,e){"use strict";var i=e(73);e.n(i).a},200:function(t,a,e){"use strict";var i=e(79);e.n(i).a},238:function(t,a,e){"use strict";var i=e(241),s=(e(52),e(166),{props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,a){Promise.all([Promise.all([e.e(0),e.e(2)]).then(e.t.bind(null,243,7)),Promise.all([e.e(0),e.e(2)]).then(e.t.bind(null,244,7))]).then((function(e){var s=Object(i.a)(e,1)[0];s=s.default;var n=t.algoliaOptions,l=void 0===n?{}:n;s(Object.assign({},t,{inputSelector:"#algolia-search-input",debug:!0,algoliaOptions:Object.assign({facetFilters:["lang:".concat(a)].concat(l.facetFilters||[])},l)}))}))},update:function(t,a){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,a)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}}),n=(e(167),e(0)),l=Object(n.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[a("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null).exports,r=e(240),o=e(242),c=e(124);function u(t,a){return t.ownerDocument.defaultView.getComputedStyle(t,null)[a]}var d={components:{SidebarButton:o.a,NavLinks:c.a,SearchBox:r.a,AlgoliaSearchBox:l},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,a=parseInt(u(this.$el,"paddingLeft"))+parseInt(u(this.$el,"paddingRight")),e=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-a-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},h=(e(200),Object(n.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(a){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));a.a=h.exports},239:function(t,a,e){"use strict";var i={components:{NavLink:e(89).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(e(139),e(0)),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"wrapper"},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),e("h6",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e(),t._v(" "),e("h6",{staticClass:"description"},[t._v("Quick Links")]),t._v(" "),t.data.shortcuts&&t.data.shortcuts.length?e("div",{staticClass:"features1"},t._l(t.data.shortcuts,(function(a,i){return e("div",{key:i,staticClass:"feature"},[a.linkText&&a.link?e("p"):t._e(),e("div",[e("button",{on:{click:function(e){return t.$router.push(a.link)}}},[t._v(t._s(a.title)+" →")])]),t._v(" "),e("p")])})),0):t._e()]),t._v(" "),e("div",{staticClass:"textContent"},[t.data.mainHeader?e("h1",[t._v(t._s(t.data.mainHeader))]):t._e(),t._v(" "),e("div",{staticStyle:{width:"4rem",height:".5rem",margin:".1rem 0rem 2rem .3rem","background-color":"#18F4BF"}}),t._v(" "),t.data.description?e("p",[t._v(t._s(t.data.description))]):t._e(),t._v(" "),t.data.bulletStart?e("p",[t._v(t._s(t.data.bulletStart))]):t._e(),t._v(" "),t._l(t.data.bullets,(function(a,i){return t.data.bullets&&t.data.bullets.length?e("div",{key:i},[e("p",[t._v("■ "+t._s(a.bullet))])]):t._e()})),t._v(" "),t.data.closing?e("p",[t._v(" "+t._s(t.data.closing)+" ")]):t._e()],2)]),t._v(" "),t.data.shortcuts&&t.data.shortcuts.length?e("div",{staticClass:"features"},t._l(t.data.shortcuts,(function(a,i){return e("div",{key:i,staticClass:"feature"},[a.title?e("h2",[t._v(t._s(a.title))]):t._e(),t._v(" "),a.description?e("p",[t._v(t._s(a.description))]):t._e(),t._v(" "),a.linkText&&a.link?e("p"):t._e(),e("div",[e("button",{on:{click:function(e){return t.$router.push(a.link)}}},[t._v(t._s(a.linkText))])]),t._v(" "),e("p")])})),0):t._e(),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);a.a=n.exports},63:function(t,a,e){},73:function(t,a,e){},79:function(t,a,e){}}]);