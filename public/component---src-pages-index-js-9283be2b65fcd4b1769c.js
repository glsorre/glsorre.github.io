(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var n=a(0),r=a.n(n),i=a(143),o=a(150),l=a(148);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.node.id},e.node.frontmatter.title)})),r.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))};var c="1497204853"},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(142),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(144),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"right | right",menu:[{label:"portfolio",path:"/portfolio"},{label:"contacts",path:"#contacs"},{label:"feed",path:"/rss.xml"}]}}}}},146:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,a){},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(151),s=a.n(c),u=a(143);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"right | right",description:"i am giuseppe sorrentino and this is my personal digital playground",author:"@glsorre"}}}}},150:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(143),s=function(e){var t=e.siteTitle,a=e.menu;return i.a.createElement("header",{class:"header",role:"banner"},i.a.createElement("div",{class:"grid"},i.a.createElement("div",{class:"unit golden-small"},i.a.createElement("h1",{class:"logo"},i.a.createElement(c.Link,{to:"/"},t))),i.a.createElement("div",{class:"unit golden-big"},i.a.createElement("nav",{class:"nav"},a.map(function(e){return i.a.createElement(c.Link,{to:e.path},e.label)}),i.a.createElement("a",{class:"nav-link",href:"#contacts"},"contacts"),i.a.createElement("a",{class:"nav-link",href:"/feed.xml"},"feed")))),i.a.createElement("div",{class:"grid"},i.a.createElement("p",{class:"unit whole description"},"i am ",i.a.createElement("a",{href:"#contacts"},"giuseppe sorrentino")," and this is my personal digital playground")))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(147),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"822286949",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title,menu:e.site.siteMetadata.menu}),i.a.createElement("div",null,i.a.createElement("main",null,t)))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-9283be2b65fcd4b1769c.js.map