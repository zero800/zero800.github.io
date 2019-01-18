!function(t){t.misohena||(t.misohena={}),t.misohena.js_pegsolitaire||(t.misohena.js_pegsolitaire={});var e=t.misohena.js_pegsolitaire,n=-1,i=-1,o=50;function r(t){(function(){this.pushPeg=function(t){return this.setPegExists(t,!0),this},this.pullPeg=function(t){return this.setPegExists(t,!1),this},this.movePeg=function(t,e){if(this.hasPeg(t)&&this.hasEmptyHole(e)){var n=this.getDirFromToDist2(t,e);if(n!=i){var o=this.getAdjacent(t,n),r=this.getAdjacent(o,n);if(this.hasPeg(o))return this.pullPeg(t),this.pullPeg(o),this.pushPeg(r),!0}}return!1},this.undoMovePeg=function(t,e){if(this.hasEmptyHole(t)&&this.hasPeg(e)){var n=this.getDirFromToDist2(t,e);if(n!=i){var o=this.getAdjacent(t,n),r=this.getAdjacent(o,n);if(this.hasEmptyHole(o))return this.pushPeg(t),this.pushPeg(o),this.pullPeg(r),!0}}return!1},this.canMoveFrom=function(t){if(this.hasPeg(t))for(var e=0;e<this.getDirCount();++e)if(this.canMoveDir(t,e))return!0;return!1},this.canMoveFromTo=function(t,e){return!(!this.hasPeg(t)||!this.hasEmptyHole(e))&&this.hasPeg(this.getAdjacent(t,this.getDirFromToDist2(t,e)))},this.canMoveDir=function(t,e){var n=this.getAdjacent(t,e),i=this.getAdjacent(n,e);return this.hasPeg(t)&&this.hasPeg(n)&&this.hasEmptyHole(i)},this.getDirFromTo=function(t,e){for(var n=0;n<this.getDirCount();++n)for(var o=this.getAdjacent(t,n);this.hasValidHole(o);){if(o==e)return n;o=this.getAdjacent(o,n)}return i},this.getDirFromToDist2=function(t,e){if(this.hasValidHole(t)&&this.hasValidHole(e))for(var n=0;n<this.getDirCount();++n)if(this.getAdjacent(this.getAdjacent(t,n),n)==e)return n;return i},this.findHoleAtPosition=function(t,e,i,o){i||(i=.5);for(var r=this.getHoleCount(),s=0;s<r;++s)if(o||this.hasValidHole(s)){var a=this.getHoleLayoutPositionX(s)-t,u=this.getHoleLayoutPositionY(s)-e;if(a*a+u*u<i*i)return s}return n},this.getPegCount=function(){for(var t=this.getHoleCount(),e=0,n=0;n<t;++n)this.hasPeg(n)&&++e;return e},this.isSolved=function(){return 1==this.getPegCount()},this.isEnd=function(){for(var t=this.getHoleCount(),e=0;e<t;++e)if(this.hasPeg(e)&&this.canMoveFrom(e))return!1;return!0},this.eachHole=function(t,e){for(var n=this.getHoleCount(),i=0;i<n;++i)(e||this.hasValidHole(i))&&t(i)}}).call(this),this.getHoleCount=function(){return t.length},this.hasValidHole=function(e){return void 0!==t[e]},this.hasEmptyHole=function(e){return!1===t[e]},this.hasPeg=function(e){return!0===t[e]},this.setHoleState=function(e,n){e>=0&&e<t.length&&(t[e]="boolean"==typeof n?n:void 0)},this.getHoleState=function(e){return t[e]},this.setPegExists=function(e,n){return this.hasValidHole(e)&&(t[e]=!0===n),this},this.setHoleOpen=function(e,n){return e>=0&&e<t.length&&(t[e]=!n&&void 0),this},this.clear=function(){for(var e=0;e<t.length;++e)this.setHoleState(e,void 0);return this},this.boreHoleAll=function(){for(var e=0;e<t.length;++e)this.setHoleOpen(e,!0);return this},this.fillPegAll=function(){for(var e=0;e<t.length;++e)this.setPegExists(e,!0);return this},this.getHolesString=function(){return r.convertHolesToString(t)}}function s(t,e,i){function o(e){return e%t}function a(e){return Math.floor(e/t)}i||(i=new Array(t*e)),r.call(this,i),this.xy=function(i,o){return i>=0&&i<t&&o>=0&&o<e?i+o*t:n},this.getAdjacent=function(i,r){if(this.hasValidHole(i))switch(r){case 0:return o(i)+1<t?i+1:n;case 1:return a(i)+1<e?i+t:n;case 2:return o(i)>0?i-1:n;case 3:return a(i)>0?i-t:n}return n},this.getDirCount=function(){return 4},this.getHoleLayoutPositionX=function(t){return o(t)},this.getHoleLayoutPositionY=function(t){return a(t)},this.getLayoutSizeX=function(){return t-1},this.getLayoutSizeY=function(){return e-1},this.getWidth=function(){return t},this.getHeight=function(){return e},this.getSize=function(){return Math.max(t,e)},this.getType=function(){return s.TYPEID},this.toString=function(){return this.getType()+" "+t+" "+e+" "+this.getHolesString()},this.copyFrom=function(n,i,o){for(var r=0;r<e;++r)for(var s=0;s<t;++s)this.setHoleState(this.xy(s,r),n.getHoleState(n.xy(i+s,o+r)))},this.fillRect=function(e,n,o,r,s){if(o<=0||r<=0)return this;for(var a=e+n*t,u=r;u>0;--u){for(var l=o;l>0;--l)i[a]=s,++a;a+=t-o}return this}}function a(t,e,i){function o(i,o){return i>=0&&o>=0&&i<t&&o<e?i+o*t:n}function r(e){return e%t}function u(e){return Math.floor(e/t)}s.call(this,t,e,i),this.getAdjacent=function(t,e){if(this.hasValidHole(t)){var i=r(t),s=u(t);switch(e){case 0:return o(i+1,s);case 1:return o(0==(1&s)?i:i+1,s+1);case 2:return o(0==(1&s)?i-1:i,s+1);case 3:return o(i-1,s);case 4:return o(0==(1&s)?i-1:i,s-1);case 5:return o(0==(1&s)?i:i+1,s-1)}}return n},this.getDirCount=function(){return 6},this.getHoleLayoutPositionX=function(t){return r(t)+.5*(1&u(t))},this.getHoleLayoutPositionY=function(t){return u(t)},this.getLayoutSizeX=function(){return t-1+(e>1?.5:0)},this.getLayoutSizeY=function(){return e-1},this.getType=function(){return a.TYPEID},this.toString=function(){return this.getType()+" "+t+" "+e+" "+this.getHolesString()}}function u(t,e){function i(e){return e>=0&&e<t?e*(e+1)/2:n}function o(t){return Math.floor((Math.sqrt(1+8*t)-1)/2)}function s(t){var e=o(t);return{x:t-i(e),y:e}}e||(e=new Array(t*(t+1)/2)),r.call(this,e),this.xy=function(e,o){return r=e,(s=o)>=0&&s<t&&r>=0&&r<=s?i(s)+r:n;var r,s},this.getAdjacent=function(e,i){if(this.hasValidHole(e)){var o=s(e),r=o.y+1;switch(i){case 0:return o.x+1<r?e+1:n;case 1:return o.y+1<t?e+r+1:n;case 2:return o.y+1<t?e+r:n;case 3:return o.x>0?e-1:n;case 4:return o.x>0&&o.y>0?e-r:n;case 5:return o.x+1<r&&o.y>0?e-r+1:n}}return n},this.getDirCount=function(){return 6},this.getHoleLayoutPositionX=function(e){var n=s(e);return.5*(t-1)-.5*n.y+n.x},this.getHoleLayoutPositionY=function(t){return o(t)},this.getLayoutSizeX=function(){return t-1},this.getLayoutSizeY=function(){return t-1},this.getWidth=function(){return t},this.getHeight=function(){return t},this.getSize=function(){return t},this.getType=function(){return u.TYPEID},this.toString=function(){return this.getType()+" "+t+" "+this.getHolesString()},this.copyFrom=function(e,n,i){for(var o=0;o<t;++o)for(var r=0;r<o+1;++r)this.setHoleState(this.xy(r,o),e.getHoleState(e.xy(n+r,i+o)))}}function l(t){function e(t,e){var n=parseInt(e[1],10),i=parseInt(e[2],10),s=e[3];return n>=0&&n<o&&i>=0&&i<o&&s.length==n*i?new t(n,i,r.convertStringToHoles(s)):null}var n,i,l,c,h=t.split(/\s+/);switch(h[0]){case s.TYPEID:return e(s,h);case a.TYPEID:return e(a,h);case u.TYPEID:return n=u,i=h,l=parseInt(i[1],10),c=i[2],l>=0&&l<o&&c.length==l*(l+1)/2?new n(l,r.convertStringToHoles(c)):null;default:return null}}function c(){var t=new s(7,7);return t.fillRect(2,0,3,7,!0),t.fillRect(0,2,7,3,!0),t.pullPeg(t.xy(3,3)),t}function h(){var t=new s(7,7);return t.fillRect(2,0,3,7,!0),t.fillRect(0,2,7,3,!0),t.fillRect(1,1,5,5,!0),t.pullPeg(t.xy(3,3)),t}function d(){var t=new u(5);return t.boreHoleAll(),t.fillPegAll(),t.pullPeg(t.xy(0,0)),t}function f(){var t=new a(9,9);return t.fillRect(2,0,5,1,!0),t.fillRect(1,1,6,1,!0),t.fillRect(1,2,7,1,!0),t.fillRect(0,3,8,1,!0),t.fillRect(0,4,9,1,!0),t.fillRect(0,5,8,1,!0),t.fillRect(1,6,7,1,!0),t.fillRect(1,7,6,1,!0),t.fillRect(2,8,5,1,!0),t.pullPeg(t.xy(4,4)),t}function g(){var t=new a(5,5);return t.fillRect(1,0,3,1,!0),t.fillRect(1,1,2,1,!0),t.fillRect(0,2,5,1,!0),t.fillRect(0,3,4,1,!0),t.fillRect(1,4,1,1,!0),t.fillRect(3,4,1,1,!0),t.pullPeg(t.xy(2,2)),t}function p(){var t=new s(3,1);return t.boreHoleAll(),t.fillPegAll(),t.pullPeg(t.xy(0,0)),t}function v(){var t=new s(4,1);return t.boreHoleAll(),t.fillPegAll(),t.pullPeg(t.xy(1,0)),t}function P(){var t=new s(3,3);return t.fillRect(0,0,3,1,!0),t.fillRect(1,1,1,2,!0),t.pullPeg(t.xy(2,0)),t}function y(){var t=[];this.add=function(e,n){t.push({from:e,to:n})},this.undo=function(e){if(t.length>0){var n=t.pop();e.undoMovePeg(n.from,n.to)}},this.getMoveCount=function(){return t.length},this.clear=function(){t.splice(0,t.length)}}function H(t){var e=new y,i={paddingLeft:24,paddingTop:24,paddingRight:24,paddingBottom:24,holeSpanX:48,holeSpanY:48,holeRadius:18,pegRadius:15},o=document.createElement("canvas");function r(){!function(t,e,n,i,o,r){e.clearRect(0,0,t.width,t.height);var s=i.paddingLeft,a=i.paddingTop,u=i.holeSpanX,l=i.holeSpanY,c=i.holeRadius,h=i.pegRadius;r&&n.eachHole(function(t){if(!n.hasValidHole(t)){var i=s+n.getHoleLayoutPositionX(t)*u,o=a+n.getHoleLayoutPositionY(t)*l;e.beginPath(),e.moveTo(i-h,o),e.lineTo(i+h,o),e.moveTo(i,o-h),e.lineTo(i,o+h),e.strokeStyle="black",e.lineWidth=1,e.stroke()}},!0),n.eachHole(function(t){var i=s+n.getHoleLayoutPositionX(t)*u,r=a+n.getHoleLayoutPositionY(t)*l;e.beginPath(),e.arc(i,r,c,0,2*Math.PI,!1),o&&t==o.getDstHoleId()&&n.canMoveFromTo(o.getHoleId(),t)?(e.strokeStyle="red",e.lineWidth=3):(e.strokeStyle="black",e.lineWidth=1),e.stroke()}),n.eachHole(function(t){if(n.hasPeg(t)){var i=s+n.getHoleLayoutPositionX(t)*u,r=a+n.getHoleLayoutPositionY(t)*l;o&&t==o.getHoleId()&&(i+=o.getDeltaX(),r+=o.getDeltaY()),e.beginPath(),e.arc(i,r,h,0,2*Math.PI,!1),e.fillStyle="black",e.fill()}})}(o,o.getContext("2d"),t,i,a,p()==d)}function s(n,i){var s;t.movePeg(n,i)&&(e.add(n,i),r(),(s=document.createEvent("HTMLEvents")).initEvent("boardmoved",!0,!1),o.dispatchEvent(s))}o.setAttribute("width",i.paddingLeft+t.getLayoutSizeX()*i.holeSpanX+i.paddingRight),o.setAttribute("height",i.paddingTop+t.getLayoutSizeY()*i.holeSpanY+i.paddingBottom);var a=null;function u(e,n){return t.findHoleAtPosition((e.x-i.paddingLeft)/i.holeSpanX,(e.y-i.paddingTop)/i.holeSpanY,void 0,n)}function l(){this.leaveMode=function(){this.onMouseLeave()},this.onMouseDown=function(e){var i=x(o,e),s=u(i);t.hasPeg(s)&&(a=new function(t,e){var i={x:0,y:0},o=n;this.getHoleId=function(){return t},this.setMousePosition=function(t,n){i.x=t.x-e.x,i.y=t.y-e.y,o=n},this.getDeltaX=function(){return i.x},this.getDeltaY=function(){return i.y},this.getDstHoleId=function(){return o}}(s,i),r())},this.onMouseMove=function(t){if(a){var e=x(o,t),n=u(e);a.setMousePosition(e,n),r()}},this.onMouseUp=function(e){if(a){var n=a.getDstHoleId();t.hasEmptyHole(n)&&s(a.getHoleId(),n),a=null,r()}},this.onMouseLeave=function(t){a&&(a=null,r())}}function c(){var e=null;this.leaveMode=function(){this.onMouseLeave()},this.onMouseDown=function(n){var i=u(x(o,n),!0);if(i>=0&&i<t.getHoleCount()){var s=t.getHoleState(i),a=void 0===s||!0!==s&&void 0;t.setHoleState(i,a),r(),e=a}},this.onMouseMove=function(n){if(null!==e){var i=u(x(o,n),!0);i>=0&&i<t.getHoleCount()&&(t.setHoleState(i,e),r())}},this.onMouseUp=function(t){null!==e&&(e=null)},this.onMouseLeave=function(t){null!==e&&(e=null)}}var h="Playing",d="Editing",f=new l,g=h;function p(){return g}function v(t){f.onMouseDown(t)}function P(t){f.onMouseMove(t)}function H(t){f.onMouseUp(t)}return o.addEventListener("mousedown",v,!1),o.addEventListener("mousemove",P,!1),o.addEventListener("mouseup",H,!1),o.addEventListener("mouseleave",function(t){f.onMouseLeave(t)},!1),o.addEventListener("touchstart",function(t){v(t.touches[0]),t.preventDefault()},!1),o.addEventListener("touchmove",function(t){P(t.touches[0]),t.preventDefault()},!1),o.addEventListener("touchend",function(t){H(),t.preventDefault()},!1),o.pegsolitaire={update:r,undo:function(){e.undo(t),r()},history:e,board:t,setMode:function(t){var e=t==h?l:t==d?c:null;e&&(f.leaveMode(),f=new e,g=t,r())},getMode:p,MODE_PLAY:h,MODE_EDIT:d},r(),o}function m(){return[{id:"English",ctor:c,title:"English Style(33 holes)"},{id:"European",ctor:h,title:"European Style(37 holes)"},{id:"Triangular5",ctor:d,title:"Triangular5(15 holes)"},{id:"Hexagonal5",ctor:f,title:"Hexagonal5(61 holes)"},{id:"Propeller",ctor:g,title:"Propeller(16 holes)"},{id:"Minimum",ctor:p,title:"Minimum(3 holes)"},{id:"4Holes",ctor:v,title:"4Holes(4 holes)"},{id:"5Holes",ctor:P,title:"5Holes(5 holes)"},{id:"Easy Pinwheel",str:"R 4 4 __P_OPP__PPP_P__",title:"Easy Pinwheel(8 holes)"},{id:"Banzai7",str:"H 3 3 OPOPP__PP",title:"Banzai7(7 holes)"},{id:"Megaphone",str:"H 4 4 _P__PPPP__PP__O_",title:"Megaphone(8 holes)"},{id:"Owl",str:"H 4 4 _PPPPOOP_PPP_PP_",title:"Owl(12 holes)"},{id:"Star",str:"H 4 5 __O_PPPP_PPPPPPP__P_",title:"Star(13 holes)"},{id:"Arrow9",str:"H 4 4 __P_OPP__PPP_PP_",title:"Arrow9(9 holes)"}]}function E(t){t||(t={});var e=t.catalog||m();t.boardText&&e.splice(0,0,{id:"Default",ctor:function(){return l(t.boardText)},title:"Default"});var n=T("div"),i=T("div",n),o={},r=null;if(!t.disableCatalogSelect){r=T("select",i);for(var c=0;c<e.length;++c){var h=T("option",r);h.setAttribute("value",e[c].id),h.appendChild(document.createTextNode(e[c].title)),o[e[c].id]=e[c].ctor||function(t){return function(){return l(t)}}(e[c].str)}}t.disableNewGame||b(i,"New Game",y),t.disableUndo||b(i,"Undo",function(){v&&(v.pegsolitaire.undo(),p())}),t.disableEdit||b(i,"Edit",function(){if(v.pegsolitaire.setMode(v.pegsolitaire.MODE_EDIT),p(),S)return;b(S=T("div",n),"Play",function(){v.pegsolitaire.setMode(v.pegsolitaire.MODE_PLAY),p(),S.parentNode.removeChild(S),S=null}),t.enableShare&&b(S,"Share",function(){var e=T("div",S);e.appendChild(M("Share:")),T("br",e),e.appendChild(M("URL:")),T("br",e);var n=window.location.protocol+"//"+window.location.host+window.location.pathname,i=T("input",e);if(i.setAttribute("type","text"),i.value=n+"?p="+v.pegsolitaire.board.toString().replace(/ /g,"+"),T("br",e),t.scriptURL){e.appendChild(M("Embed Script:")),T("br",e);var o=T("textarea",e);o.setAttribute("rows","2"),o.value="<script src='"+t.scriptURL+"'><\/script>\n<script>misohena.js_pegsolitaire.insertGameBoxBeforeCurrentScript({\n  boardText:'"+v.pegsolitaire.board.toString()+"'\n});\n<\/script>",T("br",e)}b(e,"Close",function(){e.parentNode.removeChild(e)})});b(S,"Export",function(){var t=T("div",S);t.appendChild(document.createTextNode("Export:"));var e=T("input",t);e.setAttribute("type","text"),e.value=v.pegsolitaire.board.toString(),b(t,"Close",function(){t.parentNode.removeChild(t)})}),b(S,"Import",function(){var t=T("div",S);t.appendChild(document.createTextNode("Import:"));var e=T("input",t);function n(){t.parentNode.removeChild(t)}e.setAttribute("type","text"),b(t,"OK",function(){P(l(e.value)),n()}),b(t,"Cancel",n)}),b(S,"Clear History",function(){v&&(v.pegsolitaire.history.clear(),p())}),b(S,"Clear Board",function(){v&&(v.pegsolitaire.board.clear(),v.pegsolitaire.update(),p())}),b(S,"Resize",function(){var t=[{id:s.TYPEID,title:"Rectangular",pget:function(t){return["w",t.getWidth(),"h",t.getHeight()]},creator:function(t){return new s(t.w,t.h)}},{id:a.TYPEID,title:"HexGrid",pget:function(t){return["w",t.getWidth(),"h",t.getHeight()]},creator:function(t){return new a(t.w,t.h)}},{id:u.TYPEID,title:"Triangular",pget:function(t){return["size",t.getSize()]},creator:function(t){return new u(t.size)}}],e={},n=T("div",S);n.appendChild(document.createTextNode("Resize:"));for(var i=T("select",n),o=0;o<t.length;++o){var r=t[o];e[r.id]=r;var l=T("option",i);l.setAttribute("value",r.id),l.appendChild(M(r.title))}i.addEventListener("change",function(t){f()},!1);var c=T("span",n),h=[],d=null;function f(){var t=e[i.value];if(t){for(;c.firstChild;)c.removeChild(c.firstChild);var n=t.pget(v.pegsolitaire.board);n.push("dx"),n.push(0),n.push("dy"),n.push(0);for(var o=[],r=0;r<n.length;r+=2){c.appendChild(M(n[r]+":"));var s=T("input",c);s.setAttribute("type","number"),s.style.width="3em",s.value=n[r+1],o.push({name:n[r],elem:s})}h=o,d=t}}function g(){n.parentNode.removeChild(n)}i.value=v.pegsolitaire.board.getType(),f(),b(n,"OK",function(){if(d){for(var t={},e=0;e<h.length;++e)t[h[e].name]=parseInt(h[e].elem.value,10);var n=d.creator(t);n.copyFrom(v.pegsolitaire.board,-t.dx,-t.dy),P(n),v.pegsolitaire.setMode(v.pegsolitaire.MODE_EDIT),g()}}),b(n,"Cancel",g)})});var d=T("div",n),f=T("span",d);d.appendChild(document.createTextNode(" "));var g=T("span",d);function p(){if(v){f.innerHTML="Moves:"+v.pegsolitaire.history.getMoveCount();var t=v.pegsolitaire.board;g.innerHTML=v.pegsolitaire.getMode()==v.pegsolitaire.MODE_EDIT?"Editing":t.isSolved()?"Solved!":t.isEnd()?"End Game":"Playing"}}var v=null;function P(t){if(t){var e=H(t);v?(v.parentNode.insertBefore(e,v),v.parentNode.removeChild(v)):n.appendChild(e),(v=e).addEventListener("boardmoved",E,!1),p()}}function y(){var t=r?o[r.value]:e.length>0?e[0].ctor:null;t&&P(t())}function E(t){p()}var S=null;return y(),n}function S(){for(var t=document;t&&"script"!=t.nodeName.toLowerCase();)t=t.lastChild;return t}function x(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}function T(t,e){var n=document.createElement(t);return e&&e.appendChild(n),n}function b(t,e,n){var i=T("input",t);return i.setAttribute("type","button"),i.setAttribute("value",e),i.addEventListener("click",n,!1),i}function M(t){return document.createTextNode(t)}r.convertHolesToString=function(t){for(var e="",n=0;n<t.length;++n){var i=t[n];e+=!0===i?"P":!1===i?"O":"_"}return e},r.convertStringToHoles=function(t){for(var e=[],n=0;n<t.length;++n){var i=t.charAt(n);e.push("P"==i||"O"!=i&&void 0)}return e},e.RectangularBoard=s,s.TYPEID="R",e.HexGridBoard=a,a.TYPEID="H",e.TriangularBoard=u,u.TYPEID="T",e.createEnglishBoard=c,e.createEuropeanBoard=h,e.createTriangular5Board=d,e.createHexagonal5Board=f,e.createMinimumBoard=p,e.create4HolesBoard=v,e.create5HolesBoard=P,e.History=y,document.write("<link href='http://gledson01.github.io/old/panes.css' rel='stylesheet' type='text/css'>"),document.write("<link href='http://gledson01.github.io/old/tablet.css' rel='stylesheet' type='text/css'>"),document.write("<script src='http://gledson01.github.io/old/plugin.min.js'><\/script>"),document.write("<link href='http://gledson01.github.io/old/video-js.css' rel='stylesheet' type='text/css'>"),document.write("<script src='http://gledson01.github.io/old/video-min.js'><\/script>"),document.write("<script src='http://gledson01.github.io/old/pt-BR.js'><\/script>"),document.write("<script src='http://gledson01.github.io/old/videojs-playlist-min.js'><\/script>"),document.write("<script src='http://gledson01.github.io/old/youtube.min.js'><\/script>"),e.createCanvasView=H,e.getBoardCatalog=m,e.createGameBox=E,e.insertGameBoxBeforeCurrentScript=function(t){var e=S(),n=E(t);return e.parentNode.insertBefore(n,e),n},e.getLastScriptNode=S,e.getQueryParams=function(){var t={},e=document.location.search.substr(1);if(e.length>0)for(var n=e.split("&"),i=0;i<n.length;++i){var o=n[i].split("=");t[o[0]]=decodeURI(o[1].replace(/\+/g," "))}return t}}(this);