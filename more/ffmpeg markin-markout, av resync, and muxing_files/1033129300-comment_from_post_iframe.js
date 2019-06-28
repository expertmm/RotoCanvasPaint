/* Copyright 2007-8 Google. */ (function() { 
var f=true,g=null,l=false,n,p=this,q="object",aa="[object Array]",s="number",ba="splice",t="array",ca="[object Function]",da="call",u="function",w="null",ea=function(a){var b=typeof a;if(b==q)if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)==aa||typeof a.length==s&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable(ba))return t;if(!(a instanceof Object)&&(Object.prototype.toString.call(a)==ca||typeof a.call!="undefined"&&
typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable(da)))return u}else return w;else if(b==u&&typeof a.call=="undefined")return q;return b},x=function(a){return ea(a)==t},y=function(a){var b=ea(a);return b==t||b==q&&typeof a.length==s},fa="string",z=function(a){return typeof a==fa};Math.floor(Math.random()*2147483648).toString(36);var ga=function(a,b){if(a.contains)return a.contains(b);var c;a:if(a.indexOf)c=a.indexOf(b,undefined);else if(Array.indexOf)c=Array.indexOf(a,b,undefined);else{for(var d=0;d<a.length;d++)if(d in a&&a[d]===b){c=d;break a}c=-1}return c>-1},ha=function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];if(y(c)){if(x(c))c=c.concat();else if(x(c))c=c.concat();else{for(var d=[],e=0,h=c.length;e<h;e++)d[e]=c[e];c=d}a.push.apply(a,c)}else a.push(c)}};var ia=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},ja=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b};var A="",ka=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,A)},la=/^[a-zA-Z0-9\-_.!~*'()]*$/,B=function(a){a=String(a);if(!la.test(a))return encodeURIComponent(a);return a},C=function(a,b){return a.indexOf(b)!=-1},D=".",ma="(\\d*)(\\D*)",na="g",oa=function(a,b){for(var c=0,d=ka(String(a)).split(D),e=ka(String(b)).split(D),h=Math.max(d.length,e.length),i=0;c==0&&i<h;i++){var j=d[i]||A,k=e[i]||A,m=new RegExp(ma,na),o=new RegExp(ma,na);do{var r=m.exec(j)||[A,A,A],v=o.exec(k)||[A,A,A];if(r[0].length==
0&&v[0].length==0)break;var U=r[1].length==0?0:parseInt(r[1],10),V=v[1].length==0?0:parseInt(v[1],10);c=E(U,V)||E(r[2].length==0,v[2].length==0)||E(r[2],v[2])}while(c==0)}return c},E=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};(Date.now||function(){return(new Date).getTime()})();var F,G,H,pa,I,qa,ra,sa,ta,ua,J=function(){return p.navigator?p.navigator.userAgent:g},K=function(){return p.navigator},va="Opera",wa="MSIE",xa="WebKit",ya="Mobile",za="Gecko",Aa="Camino";(function(){qa=I=pa=H=G=F=l;var a;if(a=J()){var b=K();F=a.indexOf(va)==0;G=!F&&a.indexOf(wa)!=-1;pa=(H=!F&&a.indexOf(xa)!=-1)&&a.indexOf(ya)!=-1;qa=(I=!F&&!H&&b.product==za)&&b.vendor==Aa}})();var Ba=F,Ca=G,Da=I,L=H,Ea=function(){var a=K();return a&&a.platform||A}(),Fa="Mac",Ga="Win",Ha="Linux",Ia="X11";
(function(){ra=C(Ea,Fa);sa=C(Ea,Ga);ta=C(Ea,Ha);ua=!!K()&&C(K().appVersion||A,Ia)})();var Ja=function(){var a=A,b;if(Ba&&p.opera){var c=p.opera.version;a=typeof c==u?c():c}else{if(Da)b=/rv\:([^\);]+)(\)|;)/;else if(Ca)b=/MSIE\s+([^\);]+)(\)|;)/;else if(L)b=/WebKit\/(\S+)/;if(b){var d=b.exec(J());a=d?d[1]:A}}return a}(),Ka={},La=function(a){return Ka[a]||(Ka[a]=oa(Ja,a)>=0)};var Ma="*",Na="CSS1Compat",Oa="528",Pa=" ",Qa=function(a,b,c){var d;a:{var e=c||document,h=a&&a!=Ma?a.toLowerCase():A;if(e.querySelectorAll&&(h||b)&&(!L||document.compatMode==Na||La(Oa)))d=e.querySelectorAll(h+(b?D+b:A));else{if(b&&e.getElementsByClassName){var i=e.getElementsByClassName(b);if(h){for(var j={},k=0,m=0,o;o=i[m];m++)if(h==o.nodeName.toLowerCase())j[k++]=o;j.length=k;d=j;break a}else{d=i;break a}}i=e.getElementsByTagName(h||Ma);if(b){j={};for(m=k=0;o=i[m];m++){var r=o.className;if(typeof r.split==
u&&ga(r.split(Pa),b))j[k++]=o}j.length=k;d=j}else d=i}}return d};L&&La("522");var M=function(){};M.prototype.T=function(a){var b=[];this.F(a,b);return b.join(A)};var Ra="boolean";M.prototype.F=function(a,b){switch(typeof a){case fa:this.O(a,b);break;case s:this.V(a,b);break;case Ra:b.push(a);break;case "undefined":b.push(w);break;case q:if(a==g){b.push(w);break}if(x(a)){this.U(a,b);break}this.W(a,b);break;case u:break;default:throw Error("Unknown type: "+typeof a);}};
var Sa={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ua='"',Va="\\u",Wa="000",Xa="00",Ya="0";M.prototype.O=function(a,b){b.push(Ua,a.replace(Ta,function(c){if(c in Sa)return Sa[c];var d=c.charCodeAt(0),e=Va;if(d<16)e+=Wa;else if(d<256)e+=Xa;else if(d<4096)e+=Ya;return Sa[c]=e+d.toString(16)}),Ua)};
M.prototype.V=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:w)};var Za="[",$a=",",ab="]";M.prototype.U=function(a,b){var c=a.length;b.push(Za);for(var d=A,e=0;e<c;e++){b.push(d);this.F(a[e],b);d=$a}b.push(ab)};var bb="{",cb=":",db="}";M.prototype.W=function(a,b){b.push(bb);var c=A;for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if(typeof e!=u){b.push(c);this.O(d,b);b.push(cb);this.F(e,b);c=$a}}b.push(db)};var eb,fb,gb,hb,ib,jb,kb="Firefox",lb="iPhone",mb="iPod",nb="Android",ob="Chrome",pb="Safari";(function(){jb=ib=hb=gb=fb=eb=l;var a=J();if(a)if(a.indexOf(kb)!=-1)eb=f;else if(a.indexOf(Aa)!=-1)fb=f;else if(a.indexOf(lb)!=-1||a.indexOf(mb)!=-1)gb=f;else if(a.indexOf(nb)!=-1)hb=f;else if(a.indexOf(ob)!=-1)ib=f;else if(a.indexOf(pb)!=-1)jb=f})();Da&&La("1.9");if("StopIteration"in p)var qb=p.StopIteration;else qb=Error("StopIteration");var rb=function(){};rb.prototype.S=function(){throw qb;};rb.prototype.P=function(){return this};var sb=function(a){if(typeof a.o==u)return a.o();if(z(a))return a.split(A);if(y(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ia(a)},tb=function(a){if(typeof a.q==u)return a.q();if(typeof a.o==u)return undefined;if(y(a)||z(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(d);return b}return ja(a)},ub=function(a,b,c){if(typeof a.forEach==u)a.forEach(b,c);else if(y(a)||z(a))if(a.forEach)a.forEach(b,c);else if(Array.forEach)Array.forEach(a,b,c);else for(var d=a.length,e=z(a)?a.split(A):
a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a);else for(var i=tb(a),j=sb(a),k=j.length,m=0;m<k;m++)b.call(c,j[m],i&&i[m],a)};var N=function(a){this.f={};this.b=[];var b=arguments.length;if(b>1){if(b%2)throw Error("Uneven number of arguments");for(var c=0;c<b;c+=2)this.p(arguments[c],arguments[c+1])}else a&&this.Q(a)};n=N.prototype;n.c=0;n.C=0;n.o=function(){this.A();for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};n.q=function(){this.A();return this.b.concat()};n.l=function(a){return O(this.f,a)};
n.remove=function(a){if(O(this.f,a)){delete this.f[a];this.c--;this.C++;this.b.length>2*this.c&&this.A();return f}return l};n.A=function(){if(this.c!=this.b.length){for(var a=0,b=0;a<this.b.length;){var c=this.b[a];if(O(this.f,c))this.b[b++]=c;a++}this.b.length=b}if(this.c!=this.b.length){var d={};for(b=a=0;a<this.b.length;){c=this.b[a];if(!O(d,c)){this.b[b++]=c;d[c]=1}a++}this.b.length=b}};n.m=function(a,b){if(O(this.f,a))return this.f[a];return b};
n.p=function(a,b){if(!O(this.f,a)){this.c++;this.b.push(a);this.C++}this.f[a]=b};n.Q=function(a){var b,c;if(a instanceof N){b=a.q();c=a.o()}else{b=ja(a);c=ia(a)}for(var d=0;d<b.length;d++)this.p(b[d],c[d])};n.t=function(){return new N(this)};n.P=function(a){this.A();var b=0,c=this.b,d=this.f,e=this.C,h=this,i=new rb;i.S=function(){for(;1;){if(e!=h.C)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw qb;var j=c[b++];return a?j:d[j]}};return i};
var O=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var vb=/^(?:([^:\/?#]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,wb=function(a){return a.match(vb)};var P=function(a,b){var c;if(a instanceof P){this.s(b==g?a.e:b);this.L(a.k);this.M(a.z);this.G(a.u);this.J(a.r);this.I(a.w);this.K(a.g.t());this.H(a.v)}else if(a&&(c=wb(String(a)))){this.s(!!b);this.L(c[1]||A,f);this.M(c[2]||A,f);this.G(c[3]||A,f);this.J(c[4]);this.I(c[5]||A,f);this.Y(c[6]||A,f);this.H(c[7]||A,f)}else{this.s(!!b);this.g=new Q(g,this,this.e)}};n=P.prototype;n.k=A;n.z=A;n.u=A;n.r=g;n.w=A;n.v=A;n.R=l;n.e=l;var xb="//",yb="@",zb="?",Ab="#";
n.toString=function(){if(this.d)return this.d;var a=[];this.k&&a.push(R(this.k,Bb),cb);if(this.u){a.push(xb);this.z&&a.push(R(this.z,Bb),yb);a.push(Cb(this.u));this.r!=g&&a.push(cb,String(this.r))}this.w&&a.push(R(this.w,Db));var b=String(this.g);b&&a.push(zb,b);this.v&&a.push(Ab,R(this.v,Eb));return this.d=a.join(A)};
n.t=function(){var a,b=this.k,c=this.z,d=this.u,e=this.r,h=this.w,i=this.g.t(),j=this.v,k=new P(g,this.e);b&&k.L(b);c&&k.M(c);d&&k.G(d);e&&k.J(e);h&&k.I(h);i&&k.K(i);j&&k.H(j);return a=k};n.L=function(a,b){this.i();delete this.d;if(this.k=b?a?decodeURIComponent(a):A:a)this.k=this.k.replace(/:$/,A);return this};n.M=function(a,b){this.i();delete this.d;this.z=b?a?decodeURIComponent(a):A:a;return this};n.G=function(a,b){this.i();delete this.d;this.u=b?a?decodeURIComponent(a):A:a;return this};
n.J=function(a){this.i();delete this.d;if(a){a=Number(a);if(isNaN(a)||a<0)throw Error("Bad port number "+a);this.r=a}else this.r=g;return this};n.I=function(a,b){this.i();delete this.d;this.w=b?a?decodeURIComponent(a):A:a;return this};n.K=function(a,b){this.i();delete this.d;if(a instanceof Q){this.g=a;this.g.N=this;this.g.s(this.e)}else{b||(a=R(a,Fb));this.g=new Q(a,this,this.e)}return this};n.Y=function(a,b){return this.K(a,b)};n.X=function(a,b){this.i();delete this.d;this.g.p(a,b);return this};
n.H=function(a,b){this.i();delete this.d;this.v=b?a?decodeURIComponent(a):A:a;return this};n.i=function(){if(this.R)throw Error("Tried to modify a read-only Uri");};n.s=function(a){this.e=a;this.g&&this.g.s(a)};
var Cb=function(a){if(z(a))return encodeURIComponent(a);return g},Gb=/^[a-zA-Z0-9\-_.!~*'():\/;?]*$/,R=function(a,b){var c=g;if(z(a)){c=a;Gb.test(c)||(c=encodeURI(a));if(c.search(b)>=0)c=c.replace(b,Hb)}return c},Ib="%",Hb=function(a){var b=a.charCodeAt(0);return Ib+(b>>4&15).toString(16)+(b&15).toString(16)},Bb=/[#\/\?@]/g,Db=/[\#\?]/g,Fb=/[\#\?@]/g,Eb=/#/g,Q=function(a,b,c){this.h=a||g;this.N=b||g;this.e=!!c};n=Q.prototype;var Jb="&",S="=";
n.j=function(){if(!this.a){this.a=new N;if(this.h)for(var a=this.h.split(Jb),b=0;b<a.length;b++){var c=a[b].indexOf(S),d=g,e=g;if(c>=0){d=a[b].substring(0,c);e=a[b].substring(c+1)}else d=a[b];d=decodeURIComponent(d.replace(/\+/g,Pa));d=this.n(d);this.add(d,e?decodeURIComponent(e.replace(/\+/g,Pa)):A)}}};n.a=g;n.c=g;n.add=function(a,b){this.j();this.B();a=this.n(a);if(this.l(a)){var c=this.a.m(a);x(c)?c.push(b):this.a.p(a,[c,b])}else this.a.p(a,b);this.c++;return this};
n.remove=function(a){this.j();a=this.n(a);if(this.a.l(a)){this.B();var b=this.a.m(a);if(x(b))this.c-=b.length;else this.c--;return this.a.remove(a)}return l};n.l=function(a){this.j();a=this.n(a);return this.a.l(a)};n.q=function(){this.j();for(var a=this.a.o(),b=this.a.q(),c=[],d=0;d<b.length;d++){var e=a[d];if(x(e))for(var h=0;h<e.length;h++)c.push(b[d]);else c.push(b[d])}return c};
n.o=function(a){this.j();var b;if(a){var c=this.n(a);if(this.l(c)){var d=this.a.m(c);if(x(d))return d;else{b=[];b.push(d)}}else b=[]}else{var e=this.a.o();b=[];for(var h=0;h<e.length;h++){var i=e[h];x(i)?ha(b,i):b.push(i)}}return b};n.p=function(a,b){this.j();this.B();a=this.n(a);if(this.l(a)){var c=this.a.m(a);if(x(c))this.c-=c.length;else this.c--}this.a.p(a,b);this.c++;return this};n.m=function(a,b){this.j();a=this.n(a);if(this.l(a)){var c=this.a.m(a);return x(c)?c[0]:c}else return b};
n.toString=function(){if(this.h)return this.h;if(!this.a)return A;for(var a=[],b=0,c=this.a.q(),d=0;d<c.length;d++){var e=c[d],h=B(e),i=this.a.m(e);if(x(i))for(var j=0;j<i.length;j++){b>0&&a.push(Jb);a.push(h,S,B(i[j]));b++}else{b>0&&a.push(Jb);a.push(h,S,B(i));b++}}return this.h=a.join(A)};n.B=function(){delete this.D;delete this.h;this.N&&delete this.N.d};n.t=function(){var a=new Q;if(this.D)a.D=this.D;if(this.h)a.h=this.h;if(this.a)a.a=this.a.t();return a};
n.n=function(a){var b=String(a);if(this.e)b=b.toLowerCase();return b};n.s=function(a){if(a&&!this.e){this.j();this.B();ub(this.a,function(b,c){var d=c.toLowerCase();if(c!=d){this.remove(c);this.add(d,b)}},this)}this.e=a};var Kb="inherit",Lb="transparent",Mb="rgba(0, 0, 0, 0)",Nb=function(a,b,c){var d;a:{var e=b.nodeType==9?b:b.ownerDocument||b.document;if(e.defaultView&&e.defaultView.getComputedStyle){var h=e.defaultView.getComputedStyle(b,A);if(h){d=h[a];break a}}d=g}var i=d||(b.currentStyle?b.currentStyle[a]:g)||b.style[a];if(i==g||i==Kb||i==Lb||i==Mb){if(b==(b.nodeType==9?b:b.ownerDocument||b.document).body||!b.parentNode)return c;return T(a,b.parentNode)}return i},Ob="rgb(0, 0, 0)",T=function(a,b){return Nb(a,
b,Ob)};var Pb=/\s*;\s*/;var Qb;var W=-1,Rb=-1,Sb="fcauth",Tb=function(a){if(W==a&&W!=-1){var b;if(Qb!=g)b=Qb;else b:{for(var c=Sb+Rb+S,d=String(document.cookie).split(Pb),e=0,h;h=d[e];e++)if(h.indexOf(c)==0){b=h.substr(c.length);break b}b=g}return b}else{W=-1;return g}};var Ub="iframe",Vb="blogger-comment-from-post",X="-src",Wb="blogspotRpcToken",Xb="comment-editor",Yb="fcViewer",Zb="blogger-iframe-colorize",$b="color",ac="backgroundColor",bc="fontFamily",cc="serif",dc="http://www.blogger.com/unvisited-link-",ec=function(a,b){Rb=b;W=Math.floor(Math.random()*10000000);for(var c=Qa(Ub,Vb),d=0;d<c.length;d++){var e=z(c[d].id+X)?document.getElementById(c[d].id+X):c[d].id+X,h=new P(e.href);e.href=h.X(Wb,W).toString()}gadgets.rpc.setRelayUrl(Xb,a);gadgets.rpc.register(Yb,
Tb);for(var i=Qa(Ub,Zb),j=0;j<i.length;j++){var k=i[j],m=z(k.id+X)?document.getElementById(k.id+X):k.id+X,o=m.href,r=T($b,k),v=T(ac,k),U=Nb(bc,k,cc);m.href=dc+(new Date).valueOf();var V=T($b,m);m.href=o;o+=Ab+encodeURIComponent((new M).T({color:r,backgroundColor:v,unvisitedLinkColor:V,fontFamily:U}));k.src=o}},Y="BLOG_CMT_createIframe".split(D),Z=p;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)if(!Y.length&&ec!==undefined)Z[$]=ec;else Z=Z[$]?Z[$]:(Z[$]={});
 })()