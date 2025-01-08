"use strict";(self.webpackChunkjoowon_blog=self.webpackChunkjoowon_blog||[]).push([[160],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,a)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=n(c)===c&&a(c)!==c,s=o,o=a(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){r.d(t,{G:function(){return q},L:function(){return f},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return s},a:function(){return o},b:function(){return d},c:function(){return c},g:function(){return p},h:function(){return l}});r(6910);var n=r(6540),a=(r(2729),r(5556)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function p(e,t,r,n,a,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],m=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,r=s(e,g);return n.createElement(n.Fragment,null,n.createElement(m,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:r,loading:a,alt:i="",shouldLoad:l}=e,c=s(e,h);return n.createElement("img",o({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:i}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,i=s(e,y);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(v,o({},i,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:l})})),c):c};var w;v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const x=["fallback"],E=function(e){let{fallback:t}=e,r=s(e,x);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),j=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:j},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],A=new Set;let O,R;const _=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=s(e,I);const{width:y,height:v,layout:b}=a,w=u(y,v,b),{style:x,className:E}=w,k=s(w,N),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);p&&(d=p);const L=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,v);return(0,n.useEffect)((()=>{O||(O=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(R&&A.has(S))return;let t,n;return O.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=r(o({isLoading:!0,isLoaded:A.has(S),image:a},h)),A.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=s(C.current,S,A,i,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{A.has(S)&&R&&(C.current.innerHTML=R(o({isLoading:A.has(S),isLoaded:A.has(S),image:a},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,n.createElement)(t,o({},k,{style:o({},x,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));q.propTypes=T,q.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:r,__imageData:a,__error:i}=t,l=s(t,z);return i&&console.warn(i),a?n.createElement(e,o({image:a},l)):(console.warn("Image not loaded",r),null)}}const P=M((function(e){let{as:t="div",className:r,class:a,style:i,image:l,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=s(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),m=o({objectFit:y,objectPosition:v,backgroundColor:h},m);const{width:w,height:x,layout:j,images:T,placeholder:I,backgroundColor:N}=l,A=u(w,x,j),{style:O,className:R}=A,_=s(A,S),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>o({},e,{srcSet:L(e.srcSet)})))),n.createElement(t,o({},_,{style:o({},O,i,{backgroundColor:h}),className:R+(r?" "+r:"")}),n.createElement(f,{layout:j,width:w,height:x},n.createElement(E,o({},p(I,!1,j,w,x,N,y,v))),n.createElement(k,o({"data-gatsby-image-ssr":"",className:g},b,d("eager"===c,!1,q,c,m)))))})),F=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),U={src:i().string.isRequired,alt:j,width:F,height:F,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=U;const D=M(q);D.displayName="StaticImage",D.propTypes=U},412:function(e,t,r){r.d(t,{A:function(){return o}});var n=r(4810),a=r(4848);const i="506648845";function o(e){let{title:t,description:r,pathname:o,image:s,children:l}=e;const{site:{siteMetadata:c},file:{publicURL:u}}=(0,n.GR)(i),d={title:null!=t?t:c.title,description:null!=r?r:c.description,siteUrl:""+c.siteUrl+(null!=o?o:""),image:null!=s?s:u};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:d.title}),(0,a.jsx)("html",{lang:"ko"}),(0,a.jsx)("meta",{name:"description",content:d.description}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:d.title}),(0,a.jsx)("meta",{property:"og:description",content:d.description}),(0,a.jsx)("meta",{property:"og:image",content:d.image}),(0,a.jsx)("meta",{property:"og:url",content:d.siteUrl}),(0,a.jsx)("meta",{property:"og:site_name",content:d.title}),l]})}},4598:function(e,t,r){var n=r(9039);e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){return 1},1)}))}},7680:function(e,t,r){var n=r(9504);e.exports=n([].slice)},4488:function(e,t,r){var n=r(7680),a=Math.floor,i=function(e,t){var r=e.length;if(r<8)for(var o,s,l=1;l<r;){for(s=l,o=e[l];s&&t(e[s-1],o)>0;)e[s]=e[--s];s!==l++&&(e[s]=o)}else for(var c=a(r/2),u=i(n(e,0,c),t),d=i(n(e,c),t),p=u.length,g=d.length,m=0,f=0;m<p||f<g;)e[m+f]=m<p&&f<g?t(u[m],d[f])<=0?u[m++]:d[f++]:m<p?u[m++]:d[f++];return e};e.exports=i},6955:function(e,t,r){var n=r(2140),a=r(4901),i=r(2195),o=r(8227)("toStringTag"),s=Object,l="Arguments"===i(function(){return arguments}());e.exports=n?i:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=s(e),o))?r:l?i(t):"Object"===(n=i(t))&&a(t.callee)?"Arguments":n}},4606:function(e,t,r){var n=r(6823),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw new a("Cannot delete property "+n(t)+" of "+n(e))}},3709:function(e,t,r){var n=r(2839).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},3763:function(e,t,r){var n=r(2839);e.exports=/MSIE|Trident/.test(n)},3607:function(e,t,r){var n=r(2839).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},2140:function(e,t,r){var n={};n[r(8227)("toStringTag")]="z",e.exports="[object z]"===String(n)},655:function(e,t,r){var n=r(6955),a=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return a(e)}},6910:function(e,t,r){var n=r(6518),a=r(9504),i=r(9306),o=r(8981),s=r(6198),l=r(4606),c=r(655),u=r(9039),d=r(4488),p=r(4598),g=r(3709),m=r(3763),f=r(9519),h=r(3607),y=[],v=a(y.sort),b=a(y.push),w=u((function(){y.sort(void 0)})),x=u((function(){y.sort(null)})),E=p("sort"),k=!u((function(){if(f)return f<70;if(!(g&&g>3)){if(m)return!0;if(h)return h<603;var e,t,r,n,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)y.push({k:t+n,v:r})}for(y.sort((function(e,t){return t.v-e.v})),n=0;n<y.length;n++)t=y[n].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}}));n({target:"Array",proto:!0,forced:w||!x||!E||!k},{sort:function(e){void 0!==e&&i(e);var t=o(this);if(k)return void 0===e?v(t):v(t,e);var r,n,a=[],u=s(t);for(n=0;n<u;n++)n in t&&b(a,t[n]);for(d(a,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}}(e)),r=s(a),n=0;n<r;)t[n]=a[n++];for(;n<u;)l(t,n++);return t}})}}]);
//# sourceMappingURL=c5b0247484ab0ed143857a1e77319f63f8784e72-0a1734f11e96e0f3db4a.js.map