(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});a(181);var n=a(0),r=a.n(n),i=a(153),o=a(151);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["blog","rightright","giuseppe sorrentino"]}),r.a.createElement("div",{class:"home grid"},r.a.createElement("div",{class:"unit whole"},t.map(function(e){var t;return"medium"==e.node.frontmatter.type?t=r.a.createElement("span",{class:"post-type"},"POST"):"slideshare"==e.node.frontmatter.type?t=r.a.createElement("span",{class:"post-type"},"SLIDES"):"project"==e.node.frontmatter.type?t=r.a.createElement("span",{class:"post-type"},"PROJECT"):"gist"==e.node.frontmatter.type&&(t=r.a.createElement("span",{class:"post-type"},"GIST")),r.a.createElement("div",{class:"post-container"},t,r.a.createElement("span",{class:"post-meta"},e.node.frontmatter.date),r.a.createElement("h2",{class:"post-title"},r.a.createElement("a",{class:"post-link",href:e.node.frontmatter.anchor,target:"_blank"},e.node.frontmatter.title)),r.a.createElement("span",{class:"post-description"},r.a.createElement("i",null,e.node.frontmatter.desc," ")))}))))};var s="1108209237"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(143),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(145),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"right | right",menu:[{label:"portfolio",path:"/portfolio"},{label:"about me",path:"/aboutme"},{label:"feed",path:"/feed.xml"}]}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(51),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,a){e.exports=a.p+"static/rightright_logo-e02ecf92d9ec1569b92902ff002ec699.svg"},150:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(156),l=a.n(c),u=a(144);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"right | right",description:"i am giuseppe sorrentino and this is my personal digital playground",author:"@glsorre"}}}}},153:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(144),l=(a(148),a(154),function(e){var t=e.siteTitle,a=e.menu;return i.a.createElement("header",{class:"header",role:"banner"},i.a.createElement("div",{class:"grid"},i.a.createElement("div",{class:"unit golden-small"},i.a.createElement("h1",{class:"logo"},i.a.createElement(c.Link,{to:"/"},t))),i.a.createElement("div",{class:"unit golden-big"},i.a.createElement("nav",{class:"nav"},a.filter(function(e){return e.path!=location.pathname}).map(function(e){return i.a.createElement(c.Link,{to:e.path,class:"nav-link"},e.label)})))),i.a.createElement("div",{class:"grid"},i.a.createElement("p",{class:"unit whole description"},"i am ",i.a.createElement("a",{href:"#contacts"},"giuseppe sorrentino")," and this is my personal digital playground")))}),u=function(){return i.a.createElement("footer",{class:"footer",id:"contacts"},i.a.createElement("div",{class:"grid"},i.a.createElement("div",{class:"unit whole"},i.a.createElement("p",{class:"author-copyright"},"© ",(new Date).getFullYear()," rightright.me"))))},d=(a(150),a(155),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"822286949",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container"},i.a.createElement(l,{siteTitle:e.site.siteMetadata.title,menu:e.site.siteMetadata.menu}),t),i.a.createElement(u,null))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d},181:function(e,t,a){"use strict";a(182)("anchor",function(e){return function(t){return e(this,"a","name",t)}})},182:function(e,t,a){var n=a(11),r=a(24),i=a(16),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-4db1da16c1852c4c4cf3.js.map