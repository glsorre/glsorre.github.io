(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),i=a(22),o=a(152),c=a(150);function l(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html;return r.a.createElement(i.Location,null,r.a.createElement(o.a,{location:location},r.a.createElement(c.a,{title:a.title,keywords:["blog","rightright","giuseppe sorrentino"]}),r.a.createElement("div",{class:"home grid"},r.a.createElement("div",{class:"unit whole",dangerouslySetInnerHTML:{__html:n}}))))}var s="1579142440"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(145),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"right right",menu:[{label:"portfolio",path:"/portfolio"},{label:"about me",path:"/aboutme"},{label:"feed",path:"/feed.xml"}]}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){e.exports=a.p+"static/rightright_logo-e02ecf92d9ec1569b92902ff002ec699.svg"},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(154),s=a.n(l),u=a(144);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"right right",description:"i am giuseppe sorrentino and this is my personal digital playground",author:"@glsorre"}}}}},152:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(144),s=(a(148),function(e){var t=e.siteTitle,a=e.menu,n=e.location;return i.a.createElement("header",{class:"header",role:"banner"},i.a.createElement("div",{class:"grid"},i.a.createElement("div",{class:"unit golden-small"},i.a.createElement("h1",{class:"logo"},i.a.createElement(l.Link,{to:"/"},t))),i.a.createElement("div",{class:"unit golden-big"},i.a.createElement("nav",{class:"nav"},a.filter(function(e){return e.path!=n.pathname}).map(function(e){return i.a.createElement(l.Link,{to:e.path,class:"nav-link"},e.label)})))),i.a.createElement("div",{class:"grid"},i.a.createElement("p",{class:"unit whole description"},"i am ",i.a.createElement("a",{href:"#contacts"},"giuseppe sorrentino")," and this is my personal digital playground")))}),u=function(){return i.a.createElement("footer",{class:"footer",id:"contacts"},i.a.createElement("div",{class:"grid"},i.a.createElement("div",{class:"unit whole"},i.a.createElement("p",{class:"author-copyright"},"© ",(new Date).getFullYear()," rightright.me"))))},d=(a(149),a(153),function(e){var t=e.children,a=e.location;return i.a.createElement(l.StaticQuery,{query:"822286949",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container"},i.a.createElement(s,{siteTitle:e.site.siteMetadata.title,menu:e.site.siteMetadata.menu,location:a}),t),i.a.createElement(u,null))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-templates-page-template-js-3e2814eeed28ea4fd544.js.map