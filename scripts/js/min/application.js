!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function n(e,t){var r=e&&e.exec(t);return r&&0==r.index}function a(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return v(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function c(e,t){var r,n={};for(r in e)n[r]=e[r];if(t)for(r in t)n[r]=t[r];return n}function i(e){var t=[];return function n(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3==c.nodeType?a+=c.nodeValue.length:1==c.nodeType&&(t.push({event:"start",offset:a,node:c}),a=n(c,a),r(c).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:c}));return a}(e,0),t}function s(e,n,a){function c(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function i(e){function n(e){return" "+e.nodeName+'="'+t(e.value)+'"'}l+="<"+r(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function s(e){l+="</"+r(e)+">"}function o(e){("start"==e.event?i:s)(e.node)}for(var u=0,l="",b=[];e.length||n.length;){var f=c();if(l+=t(a.substr(u,f[0].offset-u)),u=f[0].offset,f==e){b.reverse().forEach(s);do o(f.splice(0,1)[0]),f=c();while(f==e&&f.length&&f[0].offset==u);b.reverse().forEach(i)}else"start"==f[0].event?b.push(f[0].node):b.pop(),o(f.splice(0,1)[0])}return l+t(a.substr(u))}function o(e){function t(e){return e&&e.source||e}function r(r,n){return new RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var s={},o=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");s[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof a.k?o("keyword",a.k):Object.keys(a.k).forEach(function(e){o(e,a.k[e])}),a.k=s}a.lR=r(a.l||/\b\w+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=r(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=r(a.e)),a.tE=t(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=r(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(c(e,t))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?r(l.join("|"),!0):{exec:function(){return null}}}}n(e)}function u(e,r,a,c){function i(e,t){for(var r=0;r<t.c.length;r++)if(n(t.c[r].bR,e))return t.c[r]}function s(e,t){if(n(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,t):void 0}function b(e,t){return!a&&n(t.iR,e)}function f(e,t){var r=E.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,n){var a=n?"":w.classPrefix,c='<span class="'+a,i=r?"":"</span>";return c+=e+'">',c+t+i}function d(){if(!M.k)return t(k);var e="",r=0;M.lR.lastIndex=0;for(var n=M.lR.exec(k);n;){e+=t(k.substr(r,n.index-r));var a=f(M,n);a?(A+=a[1],e+=p(a[0],t(n[0]))):e+=t(n[0]),r=M.lR.lastIndex,n=M.lR.exec(k)}return e+t(k.substr(r))}function g(){if(M.sL&&!y[M.sL])return t(k);var e=M.sL?u(M.sL,k,!0,C[M.sL]):l(k);return M.r>0&&(A+=e.r),"continuous"==M.subLanguageMode&&(C[M.sL]=e.top),p(e.language,e.value,!1,!0)}function h(){return void 0!==M.sL?g():d()}function N(e,r){var n=e.cN?p(e.cN,"",!0):"";e.rB?(R+=n,k=""):e.eB?(R+=t(r)+n,k=""):(R+=n,k=r),M=Object.create(e,{parent:{value:M}})}function m(e,r){if(k+=e,void 0===r)return R+=h(),0;var n=i(r,M);if(n)return R+=h(),N(n,r),n.rB?0:r.length;var a=s(M,r);if(a){var c=M;c.rE||c.eE||(k+=r),R+=h();do M.cN&&(R+="</span>"),A+=M.r,M=M.parent;while(M!=a.parent);return c.eE&&(R+=t(r)),k="",a.starts&&N(a.starts,""),c.rE?0:r.length}if(b(r,M))throw new Error('Illegal lexeme "'+r+'" for mode "'+(M.cN||"<unnamed>")+'"');return k+=r,r.length||1}var E=v(e);if(!E)throw new Error('Unknown language: "'+e+'"');o(E);var x,M=c||E,C={},R="";for(x=M;x!=E;x=x.parent)x.cN&&(R=p(x.cN,"",!0)+R);var k="",A=0;try{for(var B,L,S=0;;){if(M.t.lastIndex=S,B=M.t.exec(r),!B)break;L=m(r.substr(S,B.index-S),B[0]),S=B.index+L}for(m(r.substr(S)),x=M;x.parent;x=x.parent)x.cN&&(R+="</span>");return{r:A,value:R,language:e,top:M}}catch(_){if(-1!=_.message.indexOf("Illegal"))return{r:0,value:t(r)};throw _}}function l(e,r){r=r||w.languages||Object.keys(y);var n={r:0,value:t(e)},a=n;return r.forEach(function(t){if(v(t)){var r=u(t,e,!1);r.language=t,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}}),a.language&&(n.second_best=a),n}function b(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,r){var n=t?E[t]:r,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}function p(e){var t=a(e);if(!/no(-?)highlight|plain|text/.test(t)){var r;w.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var n=r.textContent,c=t?u(t,n,!0):l(n),o=i(r);if(o.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=c.value,c.value=s(o,i(p),n)}c.value=b(c.value),e.innerHTML=c.value,e.className=f(e.className,t,c.language),e.result={language:c.language,re:c.r},c.second_best&&(e.second_best={language:c.second_best.language,re:c.second_best.r})}}function d(e){w=c(w,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function h(){addEventListener("DOMContentLoaded",g,!1),addEventListener("load",g,!1)}function N(t,r){var n=y[t]=r(e);n.aliases&&n.aliases.forEach(function(e){E[e]=t})}function m(){return Object.keys(y)}function v(e){return y[e]||y[E[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={},E={};return e.highlight=u,e.highlightAuto=l,e.fixMarkup=b,e.highlightBlock=p,e.configure=d,e.initHighlighting=g,e.initHighlightingOnLoad=h,e.registerLanguage=N,e.listLanguages=m,e.getLanguage=v,e.inherit=c,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(t,r,n){var a=e.inherit({cN:"comment",b:t,e:r,c:[]},n||{});return a.c.push(e.PWM),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},n={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,r,n,t]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[r,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",b:"\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},a={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:n}],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};return r.splice(r.length,0,a,c),{c:r,k:t,i:"\\S"}}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},n={eW:!0,i:/</,r:0,c:[r,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"</script>",rE:!0,sL:""}},r,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},n]}]}}),hljs.registerLanguage("liquid",function(e){var t="for each in with if else elsif endif endunless endfor unless include capture assign";return{aliases:["liquid","html.liquid","html.liquid"],cI:!0,sL:"xml",subLanguageMode:"continuous",c:[{cN:"expression",r:0,v:[{b:"{{",e:"}}"},{b:"{%",e:"%}",r:10}],k:t,c:[{cN:"string",b:"\"|'",e:"\"|'"},{cN:"variable",b:"[a-zA-Z-._]+",k:t}]}]}}),hljs.registerLanguage("ruby",function(e){var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",n={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},c=[e.C("#","$",{c:[n]}),e.C("^\\=begin","^\\=end",{c:[n],r:10}),e.C("^__END__","\\n$")],i={cN:"subst",b:"#\\{",e:"}",k:r},s={cN:"string",c:[e.BE,i],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},o={cN:"params",b:"\\(",e:"\\)",k:r},u=[s,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(c)},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:t}),o].concat(c)},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[s,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,{cN:"regexp",c:[e.BE,i],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(c),r:0}].concat(c);i.c=u,o.c=u;var l="[>?]>",b="[\\w#]+\\(\\w+\\):\\d+:\\d+>",f="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",p=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:u}},{cN:"prompt",b:"^("+l+"|"+b+"|"+f+")",starts:{e:"$",c:u}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:c.concat(p).concat(u)}});var getQueryString,getQueryStringObject,updateURL,updatedQueryString;window.trackGA=function(category,action,label,numberValue){if(label==null){label="";}
if(numberValue==null){numberValue=null;}
return ga("send","event",category,action,label,numberValue);};window.clearGA=function(){return updateURL(updatedQueryString({"ga":"clear"}),true);};getQueryString=function(){return location.search.replace("?","");};getQueryStringObject=function(parseThis){var arr,bits,i,obj,str;if(!parseThis){str=getQueryString();}else{str=parseThis;}
arr=str.split("&");obj={};i=0;if(arr[0]===""){return false;}
while(i<arr.length){bits=arr[i].split("=");obj[bits[0]]=bits[1];i++;}
return obj;};updatedQueryString=function(data){var key,newQS,oldQS;oldQS=getQueryStringObject();newQS='?';key=void 0;for(key in data){if(data[key]!=='clear'){newQS+=key+'='+data[key]+'&';}}
if(oldQS){key=void 0;for(key in oldQS){if(!data[key]){newQS+=key+'='+oldQS[key]+'&';}}}
return newQS.slice(0,-1);};updateURL=function(url,appendQS){if(window.history&&window.history.pushState){if(appendQS){url="http://"+window.location.host+window.location.pathname+url;}
return window.history.replaceState({},document.title,url);}};document.addEventListener("DOMContentLoaded",function(){hljs.configure({languages:[]});hljs.initHighlightingOnLoad();$('.main-nav-toggle').on('click',function(){document.body.classList.toggle('is-showing-nav');});var queryString=getQueryStringObject();if(queryString.ga&&queryString.ga=="deleted_account"){trackGA("user","deleted account");clearGA();}
var introSlider=document.getElementById('show-intro-video');if(introSlider){var video=document.getElementById('video');var f=document.getElementById('video-iframe');var url=f.getAttribute('src').split('?')[0];introSlider.addEventListener('click',function(){var data={method:'play'};video.classList.remove('is-hidden');introSlider.classList.add('is-hidden');f.contentWindow.postMessage(JSON.stringify(data),url);});}
var features=[]
$('.image-carousel li').each(function(){features.push($(this))})
if(features.length){var i=1
setInterval(function(){if(i===features.length)i=0
$feature=features[i]
$('#features .item.active').removeClass('active')
$('#features .item').eq(i).addClass('active')
setTimeout(function(){$feature.addClass('fadein')},0)
$('.image-carousel .active').removeClass('fadein').addClass('old')
$feature.addClass('active')
setTimeout(function(){$('.image-carousel .active.old').removeClass('active old')},500)
i++},3500)}});