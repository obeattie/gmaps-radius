/*! URI.js v1.15.1 http://medialize.github.io/URI.js/ */
/* build contains: URI.js, URITemplate.js, URI.fragmentURI.js */
(function(g,n){"object"===typeof exports?module.exports=n(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],n):g.URI=n(g.punycode,g.IPv6,g.SecondLevelDomains,g)})(this,function(g,n,q,t){function c(a,b){var d=1<=arguments.length,k=2<=arguments.length;if(!(this instanceof c))return d?k?new c(a,b):new c(a):new c;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}this.href(a);return void 0!==b?this.absoluteTo(b):this}function u(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function y(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function l(a){return"Array"===y(a)}function h(a,b){var d={},c,x;if("RegExp"===y(b))d=null;else if(l(b))for(c=0,x=b.length;c<x;c++)d[b[c]]=!0;else d[b]=!0;c=0;for(x=a.length;c<x;c++)if(d&&void 0!==d[a[c]]||!d&&b.test(a[c]))a.splice(c,
1),x--,c--;return a}function f(a,b){var d,c;if(l(b)){d=0;for(c=b.length;d<c;d++)if(!f(a,b[d]))return!1;return!0}var x=y(b);d=0;for(c=a.length;d<c;d++)if("RegExp"===x){if("string"===typeof a[d]&&a[d].match(b))return!0}else if(a[d]===b)return!0;return!1}function C(a,b){if(!l(a)||!l(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var d=0,c=a.length;d<c;d++)if(a[d]!==b[d])return!1;return!0}function D(a){return escape(a)}function A(a){return encodeURIComponent(a).replace(/[!'()*]/g,D).replace(/\*/g,
"%2A")}function w(a){return function(b,d){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!d);return this}}function p(a,b){return function(d,c){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===b&&(d=d.substring(1)));this._parts[a]=d;this.build(!c);return this}}var m=t&&t.URI;c.version="1.15.1";var e=c.prototype,v=Object.prototype.hasOwnProperty;c._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,
query:null,fragment:null,duplicateQueryParameters:c.duplicateQueryParameters,escapeQuerySpace:c.escapeQuerySpace}};c.duplicateQueryParameters=!1;c.escapeQuerySpace=!0;c.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;c.idn_expression=/[^a-z0-9\.-]/i;c.punycode_expression=/(xn--)/i;c.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;c.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
c.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;c.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};c.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};c.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;c.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};c.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:c.domAttributes[b]}};c.encode=A;c.decode=decodeURIComponent;c.iso8859=function(){c.encode=escape;c.decode=unescape};c.unicode=function(){c.encode=A;c.decode=
decodeURIComponent};c.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",",
"%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};c.encodeQuery=function(a,b){var d=c.encode(a+"");void 0===b&&(b=c.escapeQuerySpace);return b?d.replace(/%20/g,"+"):d};c.decodeQuery=function(a,b){a+="";void 0===b&&(b=c.escapeQuerySpace);try{return c.decode(b?a.replace(/\+/g,
"%20"):a)}catch(d){return a}};var r={encode:"encode",decode:"decode"},z,B=function(a,b){return function(d){try{return c[b](d+"").replace(c.characters[a][b].expression,function(d){return c.characters[a][b].map[d]})}catch(k){return d}}};for(z in r)c[z+"PathSegment"]=B("pathname",r[z]),c[z+"UrnPathSegment"]=B("urnpath",r[z]);r=function(a,b,d){return function(k){var x;x=d?function(a){return c[b](c[d](a))}:c[b];k=(k+"").split(a);for(var e=0,h=k.length;e<h;e++)k[e]=x(k[e]);return k.join(a)}};c.decodePath=
r("/","decodePathSegment");c.decodeUrnPath=r(":","decodeUrnPathSegment");c.recodePath=r("/","encodePathSegment","decode");c.recodeUrnPath=r(":","encodeUrnPathSegment","decode");c.encodeReserved=B("reserved","encode");c.parse=function(a,b){var d;b||(b={});d=a.indexOf("#");-1<d&&(b.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(b.query=a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=c.parseAuthority(a,b)):(d=a.indexOf(":"),
-1<d&&(b.protocol=a.substring(0,d)||null,b.protocol&&!b.protocol.match(c.protocol_expression)?b.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=c.parseAuthority(a,b)):(a=a.substring(d+1),b.urn=!0)));b.path=a;return b};c.parseHost=function(a,b){var d=a.indexOf("/"),c;-1===d&&(d=a.length);if("["===a.charAt(0))c=a.indexOf("]"),b.hostname=a.substring(1,c)||null,b.port=a.substring(c+2,d)||null,"/"===b.port&&(b.port=null);else{var e=a.indexOf(":");c=a.indexOf("/");e=a.indexOf(":",e+1);
-1!==e&&(-1===c||e<c)?(b.hostname=a.substring(0,d)||null,b.port=null):(c=a.substring(0,d).split(":"),b.hostname=c[0]||null,b.port=c[1]||null)}b.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);return a.substring(d)||"/"};c.parseAuthority=function(a,b){a=c.parseUserinfo(a,b);return c.parseHost(a,b)};c.parseUserinfo=function(a,b){var d=a.indexOf("/"),k=a.lastIndexOf("@",-1<d?d:a.length-1);-1<k&&(-1===d||k<d)?(d=a.substring(0,k).split(":"),b.username=d[0]?c.decode(d[0]):null,d.shift(),b.password=
d[0]?c.decode(d.join(":")):null,a=a.substring(k+1)):(b.username=null,b.password=null);return a};c.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},k=a.split("&"),e=k.length,h,f,g=0;g<e;g++)h=k[g].split("="),f=c.decodeQuery(h.shift(),b),h=h.length?c.decodeQuery(h.join("="),b):null,v.call(d,f)?("string"===typeof d[f]&&(d[f]=[d[f]]),d[f].push(h)):d[f]=h;return d};c.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&
!a.hostname||(b+="//");b+=c.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};c.buildHost=function(a){var b="";if(a.hostname)b=c.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};c.buildAuthority=function(a){return c.buildUserinfo(a)+c.buildHost(a)};
c.buildUserinfo=function(a){var b="";a.username&&(b+=c.encode(a.username),a.password&&(b+=":"+c.encode(a.password)),b+="@");return b};c.buildQuery=function(a,b,d){var k="",e,h,f,g;for(h in a)if(v.call(a,h)&&h)if(l(a[h]))for(e={},f=0,g=a[h].length;f<g;f++)void 0!==a[h][f]&&void 0===e[a[h][f]+""]&&(k+="&"+c.buildQueryParameter(h,a[h][f],d),!0!==b&&(e[a[h][f]+""]=!0));else void 0!==a[h]&&(k+="&"+c.buildQueryParameter(h,a[h],d));return k.substring(1)};c.buildQueryParameter=function(a,b,d){return c.encodeQuery(a,
d)+(null!==b?"="+c.encodeQuery(b,d):"")};c.addQuery=function(a,b,d){if("object"===typeof b)for(var k in b)v.call(b,k)&&c.addQuery(a,k,b[k]);else if("string"===typeof b)void 0===a[b]?a[b]=d:("string"===typeof a[b]&&(a[b]=[a[b]]),l(d)||(d=[d]),a[b]=(a[b]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};c.removeQuery=function(a,b,d){var k;if(l(b))for(d=0,k=b.length;d<k;d++)a[b[d]]=void 0;else if("RegExp"===y(b))for(k in a)b.test(k)&&(a[k]=void 0);
else if("object"===typeof b)for(k in b)v.call(b,k)&&c.removeQuery(a,k,b[k]);else if("string"===typeof b)void 0!==d?"RegExp"===y(d)?!l(a[b])&&d.test(a[b])?a[b]=void 0:a[b]=h(a[b],d):a[b]===d?a[b]=void 0:l(a[b])&&(a[b]=h(a[b],d)):a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};c.hasQuery=function(a,b,d,k){if("object"===typeof b){for(var e in b)if(v.call(b,e)&&!c.hasQuery(a,e,b[e]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
switch(y(d)){case "Undefined":return b in a;case "Boolean":return a=Boolean(l(a[b])?a[b].length:a[b]),d===a;case "Function":return!!d(a[b],b,a);case "Array":return l(a[b])?(k?f:C)(a[b],d):!1;case "RegExp":return l(a[b])?k?f(a[b],d):!1:Boolean(a[b]&&a[b].match(d));case "Number":d=String(d);case "String":return l(a[b])?k?f(a[b],d):!1:a[b]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};c.commonPath=function(a,b){var d=
Math.min(a.length,b.length),c;for(c=0;c<d;c++)if(a.charAt(c)!==b.charAt(c)){c--;break}if(1>c)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(c)||"/"!==b.charAt(c))c=a.substring(0,c).lastIndexOf("/");return a.substring(0,c+1)};c.withinString=function(a,b,d){d||(d={});var k=d.start||c.findUri.start,e=d.end||c.findUri.end,h=d.trim||c.findUri.trim,f=/[a-z0-9-]=["']?$/i;for(k.lastIndex=0;;){var g=k.exec(a);if(!g)break;g=g.index;if(d.ignoreHtml){var m=a.slice(Math.max(g-3,0),
g);if(m&&f.test(m))continue}var m=g+a.slice(g).search(e),p=a.slice(g,m).replace(h,"");d.ignore&&d.ignore.test(p)||(m=g+p.length,p=b(p,g,m,a),a=a.slice(0,g)+p+a.slice(m),k.lastIndex=g+p.length)}k.lastIndex=0;return a};c.ensureValidHostname=function(a){if(a.match(c.invalid_hostname_characters)){if(!g)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(g.toASCII(a).match(c.invalid_hostname_characters))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');}};c.noConflict=function(a){if(a)return a={URI:this.noConflict()},t.URITemplate&&"function"===typeof t.URITemplate.noConflict&&(a.URITemplate=t.URITemplate.noConflict()),t.IPv6&&"function"===typeof t.IPv6.noConflict&&(a.IPv6=t.IPv6.noConflict()),t.SecondLevelDomains&&"function"===typeof t.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=t.SecondLevelDomains.noConflict()),a;t.URI===this&&(t.URI=m);return this};e.build=function(a){if(!0===a)this._deferred_build=
!0;else if(void 0===a||this._deferred_build)this._string=c.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new c(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=w("protocol");e.username=w("username");e.password=w("password");e.hostname=w("hostname");e.port=w("port");e.query=p("query","?");e.fragment=p("fragment","#");e.search=function(a,b){var d=this.query(a,b);return"string"===typeof d&&d.length?"?"+d:d};e.hash=function(a,b){var d=
this.fragment(a,b);return"string"===typeof d&&d.length?"#"+d:d};e.pathname=function(a,b){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?c.decodeUrnPath:c.decodePath)(d):d}this._parts.path=this._parts.urn?a?c.recodeUrnPath(a):"":a?c.recodePath(a):"/";this.build(!b);return this};e.path=e.pathname;e.href=function(a,b){var d;if(void 0===a)return this.toString();this._string="";this._parts=c._parts();var k=a instanceof c,e="object"===typeof a&&(a.hostname||
a.path||a.pathname);a.nodeName&&(e=c.getDomAttribute(a),a=a[e]||"",e=!1);!k&&e&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=c.parse(String(a),this._parts);else if(k||e)for(d in k=k?a._parts:a,k)v.call(this._parts,d)&&(this._parts[d]=k[d]);else throw new TypeError("invalid input");this.build(!b);return this};e.is=function(a){var b=!1,d=!1,k=!1,e=!1,h=!1,f=!1,g=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,d=c.ip4_expression.test(this._parts.hostname),
k=c.ip6_expression.test(this._parts.hostname),b=d||k,h=(e=!b)&&q&&q.has(this._parts.hostname),f=e&&c.idn_expression.test(this._parts.hostname),g=e&&c.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;case "domain":case "name":return e;case "sld":return h;case "ip":return b;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return k;case "idn":return f;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;
case "punycode":return g}return null};var E=e.protocol,F=e.port,G=e.hostname;e.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(c.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return E.call(this,a,b)};e.scheme=e.protocol;e.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+
a+'" contains characters other than [0-9]');return F.call(this,a,b)};e.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={};c.parseHost(a,d);a=d.hostname}return G.call(this,a,b)};e.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?c.buildHost(this._parts):"";c.parseHost(a,this._parts);this.build(!b);return this};e.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?
c.buildAuthority(this._parts):"";c.parseAuthority(a,this._parts);this.build(!b);return this};e.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var d=c.buildUserinfo(this._parts);return d.substring(0,d.length-1)}"@"!==a[a.length-1]&&(a+="@");c.parseUserinfo(a,this._parts);this.build(!b);return this};e.resource=function(a,b){var d;if(void 0===a)return this.path()+this.search()+this.hash();d=c.parse(a);this._parts.path=d.path;this._parts.query=
d.query;this._parts.fragment=d.fragment;this.build(!b);return this};e.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,d);d=new RegExp("^"+u(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&c.ensureValidHostname(a);this._parts.hostname=
this._parts.hostname.replace(d,a);this.build(!b);return this};e.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(b).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");
c.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(u(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!b);return this};e.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.lastIndexOf("."),d=this._parts.hostname.substring(d+1);return!0!==b&&q&&q.list[d.toLowerCase()]?q.get(this._parts.hostname)||
d:d}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(q&&q.is(a))d=new RegExp(u(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");d=new RegExp(u(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(d,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};e.directory=
function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1,d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?c.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+u(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-
1)&&(a+="/");a=c.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!b);return this};e.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/"),d=this._parts.path.substring(d+1);return a?c.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var k=new RegExp(u(this.filename())+"$");a=c.recodePath(a);this._parts.path=
this._parts.path.replace(k,a);d?this.normalizePath(b):this.build(!b);return this};e.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),k=d.lastIndexOf(".");if(-1===k)return"";d=d.substring(k+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?c.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())k=a?new RegExp(u(d)+"$"):new RegExp(u("."+d)+"$");else{if(!a)return this;
this._parts.path+="."+c.recodePath(a)}k&&(a=c.recodePath(a),this._parts.path=this._parts.path.replace(k,a));this.build(!b);return this};e.segment=function(a,b,d){var c=this._parts.urn?":":"/",e=this.path(),h="/"===e.substring(0,1),e=e.split(c);void 0!==a&&"number"!==typeof a&&(d=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');h&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(l(b)){e=
[];a=0;for(var f=b.length;a<f;a++)if(b[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(b[a])}else{if(b||"string"===typeof b)""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b?e[a]=b:e.splice(a,1);h&&e.unshift("");return this.path(e.join(c),d)};e.segmentCoded=function(a,b,d){var e,h;"number"!==typeof a&&(d=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,d);if(l(a))for(e=0,h=a.length;e<h;e++)a[e]=c.decode(a[e]);else a=void 0!==a?c.decode(a):void 0;return a}if(l(b))for(e=
0,h=b.length;e<h;e++)b[e]=c.decode(b[e]);else b="string"===typeof b||b instanceof String?c.encode(b):b;return this.segment(a,b,d)};var H=e.query;e.query=function(a,b){if(!0===a)return c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=c.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==
a&&"string"!==typeof a?(this._parts.query=c.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):H.call(this,a,b)};e.setQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var h in a)v.call(a,h)&&(e[h]=a[h]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=
c.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=b);this.build(!d);return this};e.addQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);c.addQuery(e,a,void 0===b?null:b);this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=b);this.build(!d);return this};e.removeQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
c.removeQuery(e,a,b);this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=b);this.build(!d);return this};e.hasQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return c.hasQuery(e,a,b,d)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():
this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&g?this._parts.hostname=g.toASCII(this._parts.hostname):this.is("IPv6")&&n&&(this._parts.hostname=n.best(this._parts.hostname)),this._parts.hostname=
this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===c.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=c.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var d,e="",h,f;"/"!==b.charAt(0)&&(d=!0,b="/"+b);b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,
"/").replace(/\/{2,}/g,"/");d&&(e=b.substring(1).match(/^(\.\.\/)+/)||"")&&(e=e[0]);for(;;){h=b.indexOf("/..");if(-1===h)break;else if(0===h){b=b.substring(3);continue}f=b.substring(0,h).lastIndexOf("/");-1===f&&(f=h);b=b.substring(0,f)+b.substring(h+3)}d&&this.is("relative")&&(b=e+b.substring(1));b=c.recodePath(b);this._parts.path=b;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(c.parseQuery(this._parts.query,
this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=c.encode,b=c.decode;c.encode=escape;c.decode=decodeURIComponent;try{this.normalize()}finally{c.encode=a,c.decode=b}return this};e.unicode=function(){var a=c.encode,b=c.decode;c.encode=A;c.decode=unescape;try{this.normalize()}finally{c.encode=
a,c.decode=b}return this};e.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&g?(b+=g.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var d="",e=0,h=a._parts.query.split("&"),f=h.length;e<f;e++){var m=(h[e]||"").split("="),d=d+("&"+c.decodeQuery(m[0],
this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==m[1]&&(d+="="+c.decodeQuery(m[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+d.substring(1)}return b+=c.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var b=this.clone(),d=["protocol","username","password","hostname","port"],e,h;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof c||(a=new c(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;
for(e=0;h=d[e];e++)b._parts[h]=a._parts[h];b._parts.path?".."===b._parts.path.substring(-2)&&(b._parts.path+="/"):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));"/"!==b.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",b._parts.path=(d?d+"/":"")+b._parts.path,b.normalizePath());b.build();return b};e.relativeTo=function(a){var b=this.clone().normalize(),d,e,h,f;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
a=(new c(a)).normalize();d=b._parts;e=a._parts;h=b.path();f=a.path();if("/"!==h.charAt(0))throw Error("URI is already relative");if("/"!==f.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return b.build();if(h===f)return d.path="",b.build();
a=c.commonPath(b.path(),a.path());if(!a)return b.build();e=e.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(a.length);return b.build()};e.equals=function(a){var b=this.clone();a=new c(a);var d={},e={},h={},f;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;d=b.query();e=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||d.length!==e.length)return!1;d=c.parseQuery(d,this._parts.escapeQuerySpace);e=c.parseQuery(e,this._parts.escapeQuerySpace);
for(f in d)if(v.call(d,f)){if(!l(d[f])){if(d[f]!==e[f])return!1}else if(!C(d[f],e[f]))return!1;h[f]=!0}for(f in e)if(v.call(e,f)&&!h[f])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return c});
(function(g,n){"object"===typeof exports?module.exports=n(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],n):g.URITemplate=n(g.URI,g)})(this,function(g,n){function q(c){if(q._cache[c])return q._cache[c];if(!(this instanceof q))return new q(c);this.expression=c;q._cache[c]=this;return this}function t(c){this.data=c;this.cache={}}var c=n&&n.URITemplate,u=Object.prototype.hasOwnProperty,y=q.prototype,l={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},
"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",
separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};q._cache={};q.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;q.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;q.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;q.expand=function(c,f){var g=l[c.operator],u=g.named?"Named":"Unnamed",n=c.variables,w=[],p,m,e;for(e=0;m=n[e];e++)p=f.get(m.name),p.val.length?w.push(q["expand"+u](p,g,m.explode,m.explode&&g.separator||",",m.maxlength,m.name)):p.type&&w.push("");return w.length?g.prefix+w.join(g.separator):
""};q.expandNamed=function(c,f,q,u,l,w){var p="",m=f.encode;f=f.empty_name_separator;var e=!c[m].length,v=2===c.type?"":g[m](w),r,n,t;n=0;for(t=c.val.length;n<t;n++)l?(r=g[m](c.val[n][1].substring(0,l)),2===c.type&&(v=g[m](c.val[n][0].substring(0,l)))):e?(r=g[m](c.val[n][1]),2===c.type?(v=g[m](c.val[n][0]),c[m].push([v,r])):c[m].push([void 0,r])):(r=c[m][n][1],2===c.type&&(v=c[m][n][0])),p&&(p+=u),q?p+=v+(f||r?"=":"")+r:(n||(p+=g[m](w)+(f||r?"=":"")),2===c.type&&(p+=v+","),p+=r);return p};q.expandUnnamed=
function(c,f,n,q,u){var l="",p=f.encode;f=f.empty_name_separator;var m=!c[p].length,e,v,r,t;r=0;for(t=c.val.length;r<t;r++)u?v=g[p](c.val[r][1].substring(0,u)):m?(v=g[p](c.val[r][1]),c[p].push([2===c.type?g[p](c.val[r][0]):void 0,v])):v=c[p][r][1],l&&(l+=q),2===c.type&&(e=u?g[p](c.val[r][0].substring(0,u)):c[p][r][0],l+=e,l=n?l+(f||v?"=":""):l+","),l+=v;return l};q.noConflict=function(){n.URITemplate===q&&(n.URITemplate=c);return q};y.expand=function(c){var f="";this.parts&&this.parts.length||this.parse();
c instanceof t||(c=new t(c));for(var g=0,l=this.parts.length;g<l;g++)f+="string"===typeof this.parts[g]?this.parts[g]:q.expand(this.parts[g],c);return f};y.parse=function(){var c=this.expression,f=q.EXPRESSION_PATTERN,g=q.VARIABLE_PATTERN,n=q.VARIABLE_NAME_PATTERN,u=[],t=0,p,m,e;for(f.lastIndex=0;;){m=f.exec(c);if(null===m){u.push(c.substring(t));break}else u.push(c.substring(t,m.index)),t=m.index+m[0].length;if(!l[m[1]])throw Error('Unknown Operator "'+m[1]+'" in "'+m[0]+'"');if(!m[3])throw Error('Unclosed Expression "'+
m[0]+'"');p=m[2].split(",");for(var v=0,r=p.length;v<r;v++){e=p[v].match(g);if(null===e)throw Error('Invalid Variable "'+p[v]+'" in "'+m[0]+'"');if(e[1].match(n))throw Error('Invalid Variable Name "'+e[1]+'" in "'+m[0]+'"');p[v]={name:e[1],explode:!!e[3],maxlength:e[4]&&parseInt(e[4],10)}}if(!p.length)throw Error('Expression Missing Variable(s) "'+m[0]+'"');u.push({expression:m[0],operator:m[1],variables:p})}u.length||u.push(c);this.parts=u;return this};t.prototype.get=function(c){var f=this.data,
g={type:0,val:[],encode:[],encodeReserved:[]},l;if(void 0!==this.cache[c])return this.cache[c];this.cache[c]=g;f="[object Function]"===String(Object.prototype.toString.call(f))?f(c):"[object Function]"===String(Object.prototype.toString.call(f[c]))?f[c](c):f[c];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){l=0;for(c=f.length;l<c;l++)void 0!==f[l]&&null!==f[l]&&g.val.push([void 0,String(f[l])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(l in f)u.call(f,
l)&&void 0!==f[l]&&null!==f[l]&&g.val.push([l,String(f[l])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(f)]);return g};g.expand=function(c,f){var l=(new q(c)).expand(f);return new g(l)};return q});
(function(g,n){"object"===typeof exports?module.exports=n(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],n):n(g.URI)})(this,function(g){var n=g.prototype,q=n.fragment,t=n.build;g.fragmentPrefix="!";var c=g._parts;g._parts=function(){var u=c();u.fragmentPrefix=g.fragmentPrefix;return u};n.fragmentPrefix=function(c){this._parts.fragmentPrefix=c;return this};n.fragment=function(c,n){var l=this._parts.fragmentPrefix,h=this._parts.fragment||"";if(!0===c)return this._fragmentURI=
l=h.substring(0,l.length)!==l?g(""):new g(h.substring(l.length)),l._parentURI=this,l;if(void 0!==c&&"string"!==typeof c)return this._fragmentURI=c,c._parentURI=c,this._parts.fragment=l+c.toString(),this.build(!n),this;"string"===typeof c&&(this._fragmentURI=void 0);return q.call(this,c,n)};n.build=function(c){var g=t.call(this,c);!1!==c&&this._parentURI&&this._parentURI.fragment(this);return g};return g});

(function() {
  $(function() {
    var circleDrawHandler, clearMarkers, earthRadii, map, markers, polygonDestructionHandler, searchBox, searchInput, updateURL;
    markers = [];
    map = new google.maps.Map($('#map')[0], {
      zoom: 10,
      center: new google.maps.LatLng(51.500358, -0.125506),
      mapType: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      mapTypeControl: true,
      zoomControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      }
    });
    earthRadii = {
      mi: 3963.1676,
      km: 6378.1,
      ft: 20925524.9,
      mt: 6378100,
      "in": 251106299,
      yd: 6975174.98,
      fa: 3487587.49,
      na: 3443.89849,
      ch: 317053.408,
      rd: 1268213.63,
      fr: 31705.3408
    };
    polygonDestructionHandler = function() {
      return this.setMap(null);
    };
    clearMarkers = function() {
      var i, len, m;
      for (i = 0, len = markers.length; i < len; i++) {
        m = markers[i];
        m.setMap(null);
      }
      return markers = [];
    };
    circleDrawHandler = function(e) {
      var circle, radius, select, unitKey;
      select = $('#unitSelector');
      unitKey = $('option', select).eq(select[0].selectedIndex).val();
      radius = parseFloat(document.getElementById('radiusInput').value);
      radius = (radius / earthRadii[unitKey]) * earthRadii['mt'];
      circle = new google.maps.Circle({
        center: e.latLng,
        clickable: true,
        draggable: false,
        editable: false,
        fillColor: '#004de8',
        fillOpacity: 0.27,
        map: map,
        radius: radius,
        strokeColor: '#004de8',
        strokeOpacity: 0.62,
        strokeWeight: 1
      });
      google.maps.event.addListener(circle, 'rightclick', polygonDestructionHandler);
      return google.maps.event.addListener(circle, 'click', circleDrawHandler);
    };
    google.maps.event.addListener(map, 'click', circleDrawHandler);
    searchInput = document.getElementById('searchInput');
    $(searchInput.form).on({
      submit: function() {
        return false;
      }
    });
    searchBox = new google.maps.places.SearchBox(searchInput);
    google.maps.event.addListener(searchBox, 'places_changed', function() {

      /* When a place is selected, center on it */
      var location;
      clearMarkers();
      location = searchBox.getPlaces()[0];
      if (location != null) {
        if (location.geometry.viewport != null) {
          map.fitBounds(location.geometry.viewport);
          map.panToBounds(location.geometry.viewport);
        } else {
          map.setCenter(location.geometry.location);
        }
        markers.push(new google.maps.Marker({
          position: location.geometry.location,
          map: map,
          title: location.name,
          clickable: false
        }));
      }
    });
    updateURL = function() {
      var center, params, ref, u;
      center = map.getCenter();
      params = {
        lat: _.round(center.lat(), 6).toString(),
        lng: _.round(center.lng(), 6).toString(),
        z: map.getZoom().toString(),
        u: $('#unitSelector').val(),
        r: $('#radiusInput').val()
      };
      if (!params.r) {
        delete params['r'];
      }
      u = new URI();
      u.setQuery(params);
      return (ref = window.history) != null ? typeof ref.replaceState === "function" ? ref.replaceState(null, null, u.toString()) : void 0 : void 0;
    };
    google.maps.event.addListener(map, 'bounds_changed', _.debounce(updateURL, 200));
    google.maps.event.addListener(map, 'zoom_changed', updateURL);
    $('#unitSelector, #radiusInput').on('change', updateURL);
    return $(window).on('hashchange', function(e) {
      var center, center_, newCenter, query, z;
      query = (new URI()).query(true);
      center_ = map.getCenter();
      center = [center_.lat(), center_.lng()];
      newCenter = [center[0], center[1]];
      if (query.lat != null) {
        newCenter[0] = parseFloat(query.lat);
      }
      if (query.lng != null) {
        newCenter[1] = parseFloat(query.lng);
      }
      if ($.grep(newCenter, isNaN).length === 0) {
        map.setCenter({
          lat: newCenter[0],
          lng: newCenter[1]
        });
      }
      if (query.z != null) {
        z = parseInt(query.z, 10);
        if (!isNaN(z)) {
          map.setZoom(z);
        }
      }
      if (query.r != null) {
        $('#radiusInput').val(query.r);
      }
      if (query.u != null) {
        return $('#unitSelector').val(query.u);
      }
    }).triggerHandler('hashchange');
  });

}).call(this);

//

//# sourceMappingURL=app.js.map