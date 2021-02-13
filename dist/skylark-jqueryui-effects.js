/**
 * skylark-jqueryui-effects - The effect features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){var i=t.define,require=t.require,n="function"==typeof i&&i.amd,o=!n&&"undefined"!=typeof exports;if(!n&&!i){var r={};i=t.define=function(e,t,i){"function"==typeof i?(r[e]={factory:i,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var i=t.split("/"),n=e.split("/");i.pop();for(var o=0;o<n.length;o++)"."!=n[o]&&(".."==n[o]?i.pop():i.push(n[o]));return i.join("/")}(t,e)}),resolved:!1,exports:null},require(e)):r[e]={factory:null,resolved:!0,exports:i}},require=t.require=function(e){if(!r.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=r[e];if(!module.resolved){var i=[];module.deps.forEach(function(e){i.push(require(e))}),module.exports=module.factory.apply(t,i)||null,module.resolved=!0}return module.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-jqueryui-effects/effects",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-fx","skylark-domx-styler","skylark-domx-placeholders","skylark-domx-query"],function(e,t,i,n,o,r){var s,a="ui-effects-animated",l={},u=function(){};function f(e,n,o,s){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),t.isFunction(n)&&(s=n,o=null,n={}),("number"==typeof n||i.speeds[n])&&(s=o,o=n,n={}),t.isFunction(o)&&(s=o,o=null),n&&t.mixin(e,n),o=o||n.duration,e.duration=i.off?0:"number"==typeof o?o:o in r.fx.speeds?i.speeds[o]:i.speeds._default,e.complete=s||n.complete,e}function c(e){return!(e&&"number"!=typeof e&&!i.speeds[e])||("string"==typeof e&&!l[e]||(!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function d(e,t){var i=t.outerWidth(),n=t.outerHeight(),o=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(e)||["",0,i,n,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?n:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.mixin(u,{define:function(e,t,i){return i||(i=t,t="effect"),l[e]=i,l[e].mode=t,i},scaledDimensions:function(e,t,i){if(0===t)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(t||100)/100:1,o="vertical"!==i?(t||100)/100:1;return{height:e.height()*o,width:e.width()*n,outerHeight:e.outerHeight()*o,outerWidth:e.outerWidth()*n}},clipToBox:function(e){return{width:e.clip.right-e.clip.left,height:e.clip.bottom-e.clip.top,left:e.clip.left,top:e.clip.top}},unshift:function(e,t,i){var n=e.queue();t>1&&n.splice.apply(n,[1,0].concat(n.splice(t,i))),e.dequeue()},saveStyle:function(e){o.saveStyle(e[0])},restoreStyle:function(e){o.restoreStyle(e[0])},mode:function(e,t){var i=e.is(":hidden");return"toggle"===t&&(t=i?"show":"hide"),(i?"hide"===t:"show"===t)&&(t="none"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createPlaceholder:function(e){var t;return e.length&&(t=o.create(e[0])),t&&n.addClass(t,"ui-effects-placeholder"),t},removePlaceholder:function(e){e.length&&o.remove(e[0])},cleanUp:function(e){e.length&&o.cleanup(e[0])},setTransition:function(e,i,n,o){return o=o||{},t.each(i,function(t,i){var r=e.cssUnit(i);r[0]>0&&(o[i]=r[0]*n+r[1])}),o}}),t.mixin(r.fn,{effect:function(){var e=f.apply(this,arguments),n=l[e.effect],o=n.mode,s=(e.queue,e.complete),c=e.mode,d=[];if(i.off||!n)return c?this[c](e.duration,s):this.each(function(){s&&s.call(this)});return this.each(function(e){var i=r(this),n=u.mode(i,c)||o;i.data(a,!0),d.push(n),o&&("show"===n||n===o&&"hide"===n)&&i.show();o&&"none"===n||u.saveStyle(i);t.isFunction(e)&&e()}).each(function(i){var l=r(this);function f(){t.isFunction(s)&&s.call(l[0]),t.isFunction(i)&&i()}e.mode=d.shift(),!1===r.uiBackCompat||o?"none"===e.mode?(l[c](),f()):n.call(l[0],e,function(){l.removeData(a),u.cleanUp(l),"hide"===e.mode&&l.hide();f()}):(l.is(":hidden")?"hide"===c:"show"===c)?(l[c](),f()):n.call(l[0],e,f)})},show:(s=r.fn.show,function(e){if(c(e))return s.apply(this,arguments);var t=f.apply(this,arguments);return t.mode="show",this.effect.call(this,t)}),hide:function(e){return function(t){if(c(t))return e.apply(this,arguments);var i=f.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(r.fn.hide),toggle:function(e){return function(t){if(c(t)||"boolean"==typeof t)return e.apply(this,arguments);var i=f.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(r.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n},cssClip:function(e){return e?this.css("clip","rect("+e.top+"px "+e.right+"px "+e.bottom+"px "+e.left+"px)"):d(this.css("clip"),this)},transfer:function(e,i){var n=r(this),o=r(e.to),s="fixed"===o.css("position"),a=r("body"),l=s?a.scrollTop():0,u=s?a.scrollLeft():0,f=o.offset(),c={top:f.top-l,left:f.left-u,height:o.innerHeight(),width:o.innerWidth()},d=n.offset(),h=r("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:d.top-l,left:d.left-u,height:n.innerHeight(),width:n.innerWidth(),position:s?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){h.remove(),t.isFunction(i)&&i()})}}),i.step=i.step||{},i.step.clip=function(e){e.clipInit||(e.start=r(e.elem).cssClip(),"string"==typeof e.end&&(e.end=d(e.end,e.elem)),e.clipInit=!0),r(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})};var h={};return t.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){h[t]=function(t){return Math.pow(t,e+2)}}),t.mixin(h,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),i.easing=i.easing||{},t.each(h,function(e,t){i.easing["easeIn"+e]=t,i.easing["easeOut"+e]=function(e){return 1-t(1-e)},i.easing["easeInOut"+e]=function(e){return e<.5?t(2*e)/2:1-t(-2*e+2)/2}}),e.attach("intg.jquery.effects",u)}),e("skylark-jqueryui-effects/plugins/blind",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){return i.define("blind","hide",function(n,o){var r={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},s=t(this),a=n.direction||"up",l=s.cssClip(),u={clip:e.mixin({},l)},f=i.createPlaceholder(s);u.clip[r[a][0]]=u.clip[r[a][1]],"show"===n.mode&&(s.cssClip(u.clip),f&&f.css(i.clipToBox(u)),u.clip=l),f&&f.animate(i.clipToBox(u),n.duration,n.easing),s.animate(u,{queue:!1,duration:n.duration,easing:n.easing,complete:o})})}),e("skylark-jqueryui-effects/plugins/bounce",["skylark-langx/langx","skylark-domx-fx/bounce","../effects"],function(e,t,i){return i.define("bounce",function(e,n){return i.createPlaceholder($(this)),t(this,e,n)})}),e("skylark-jqueryui-effects/plugins/clip",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){return i.define("clip","hide",function(e,n){var o,r={},s=t(this),a=e.direction||"vertical",l="both"===a,u=l||"horizontal"===a,f=l||"vertical"===a;o=s.cssClip(),r.clip={top:f?(o.bottom-o.top)/2:o.top,right:u?(o.right-o.left)/2:o.right,bottom:f?(o.bottom-o.top)/2:o.bottom,left:u?(o.right-o.left)/2:o.left},i.createPlaceholder(s),"show"===e.mode&&(s.cssClip(r.clip),r.clip=o),s.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:n})})}),e("skylark-jqueryui-effects/plugins/drop",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){return i.define("drop","hide",function(e,n){var o,r=t(this),s=e.mode,a="show"===s,l=e.direction||"left",u="up"===l||"down"===l?"top":"left",f="up"===l||"left"===l?-1:1,c=-1*f,d={opacity:0},h=r.position()[u];i.createPlaceholder(r),o=e.distance||r["top"===u?"outerHeight":"outerWidth"](!0)/2,d[u]=h+f*o,a&&(r.css(d),d[u]=h+c*o,d.opacity=1),r.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:n})})}),e("skylark-jqueryui-effects/plugins/explode",["skylark-langx/langx","skylark-domx-query","skylark-domx-fx/explode","../effects"],function(e,t,i,n){return n.define("explode","hide",function(e,t){i(this,e,t)})}),e("skylark-jqueryui-effects/plugins/fade",["skylark-langx/langx","skylark-domx-styler","skylark-domx-query","skylark-domx-fx/fade","../effects"],function(e,t,i,n,o){return o.define("fade","toggle",function(e,i){var o="show"===e.mode;t.css(this,"opacity",o?0:1),n(this,o?1:0,e,i)})}),e("skylark-jqueryui-effects/plugins/fold",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){return i.define("fold","hide",function(n,o){var r=t(this),s=n.mode,a="show"===s,l="hide"===s,u=n.size||15,f=/([0-9]+)%/.exec(u),c=!!n.horizFirst,d=c?["right","bottom"]:["bottom","right"],h=n.duration/2,p=i.createPlaceholder(r),g=r.cssClip(),y={clip:e.mixin({},g)},k={clip:e.mixin({},g)},m=[g[d[0]],g[d[1]]];f&&(u=parseInt(f[1],10)/100*m[l?0:1]),y.clip[d[0]]=u,k.clip[d[0]]=u,k.clip[d[1]]=0,a&&(r.cssClip(k.clip),p&&p.css(i.clipToBox(k)),k.clip=g);var x=e.Deferred,v=[];function b(e,t,i,n){return function(){var o=new x;return e.animate(t,i,n,function(){o.resolve()}),o.promise}}p&&(v.push(b(p,i.clipToBox(y),h,n.easing)),v.push(b(p,i.clipToBox(k),h,n.easing))),v.push(b(r,y,h,n.easing)),v.push(b(r,k,h,n.easing)),v.push(o),v.reduce(function(e,t,i,n){return e.then(t)},x.resolve())})}),e("skylark-jqueryui-effects/plugins/highlight",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){return i.define("highlight","show",function(e,n){var o=t(this),r={backgroundColor:o.css("backgroundColor")};"hide"===e.mode&&(r.opacity=0),i.saveStyle(o),o.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:n})})}),e("skylark-jqueryui-effects/plugins/size",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){return i.define("size",function(e,n){var o,r,s,a=t(this),l=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,d="effect"!==c,h=e.scale||"both",p=e.origin||["middle","center"],g=a.css("position"),y=a.position(),k=i.scaledDimensions(a),m=e.from||k,x=e.to||i.scaledDimensions(a,0);i.createPlaceholder(a),"show"===c&&(s=m,m=x,x=s),r={from:{y:m.height/k.height,x:m.width/k.width},to:{y:x.height/k.height,x:x.width/k.width}},"box"!==h&&"both"!==h||(r.from.y!==r.to.y&&(m=i.setTransition(a,u,r.from.y,m),x=i.setTransition(a,u,r.to.y,x)),r.from.x!==r.to.x&&(m=i.setTransition(a,f,r.from.x,m),x=i.setTransition(a,f,r.to.x,x))),"content"!==h&&"both"!==h||r.from.y!==r.to.y&&(m=i.setTransition(a,l,r.from.y,m),x=i.setTransition(a,l,r.to.y,x)),p&&(o=i.getBaseline(p,k),m.top=(k.outerHeight-m.outerHeight)*o.y+y.top,m.left=(k.outerWidth-m.outerWidth)*o.x+y.left,x.top=(k.outerHeight-x.outerHeight)*o.y+y.top,x.left=(k.outerWidth-x.outerWidth)*o.x+y.left),a.css(m),"content"!==h&&"both"!==h||(u=u.concat(["marginTop","marginBottom"]).concat(l),f=f.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var n=t(this),o=i.scaledDimensions(n),s={height:o.height*r.from.y,width:o.width*r.from.x,outerHeight:o.outerHeight*r.from.y,outerWidth:o.outerWidth*r.from.x},a={height:o.height*r.to.y,width:o.width*r.to.x,outerHeight:o.height*r.to.y,outerWidth:o.width*r.to.x};r.from.y!==r.to.y&&(s=i.setTransition(n,u,r.from.y,s),a=i.setTransition(n,u,r.to.y,a)),r.from.x!==r.to.x&&(s=i.setTransition(n,f,r.from.x,s),a=i.setTransition(n,f,r.to.x,a)),d&&i.saveStyle(n),n.css(s),n.animate(a,e.duration,e.easing,function(){d&&i.restoreStyle(n)})})),a.animate(x,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===x.opacity&&a.css("opacity",m.opacity),d||(a.css("position","static"===g?"relative":g).offset(e),i.saveStyle(a)),n()}})})}),e("skylark-jqueryui-effects/plugins/scale",["skylark-langx/langx","skylark-domx-query","../effects","./size"],function(e,t,i,n){return i.define("scale",function(o,r){var s=t(this),a=o.mode,l=parseInt(o.percent,10)||(0===parseInt(o.percent,10)?0:"effect"!==a?0:100),u=e.mixin({from:i.scaledDimensions(s),to:i.scaledDimensions(s,l,o.direction||"both"),origin:o.origin||["middle","center"]},o);o.fade&&(u.from.opacity=1,u.to.opacity=0),n.call(this,u,r)})}),e("skylark-jqueryui-effects/plugins/puff",["skylark-langx/langx","skylark-domx-query","../effects","./scale"],function(e,t,i,n){return i.define("puff","hide",function(t,i){var o=e.mixin({},t,{fade:!0,percent:parseInt(t.percent,10)||150});n.call(this,o,i)})}),e("skylark-jqueryui-effects/plugins/pulsate",["skylark-langx/langx","skylark-domx-query","skylark-domx-fx/pulsate","../effects"],function(e,t,i,n){return n.define("pulsate","show",function(e,t){i(this,e,t)})}),e("skylark-jqueryui-effects/plugins/shake",["skylark-langx/langx","skylark-domx-query","skylark-domx-fx/shake","../effects"],function(e,t,i,n){return n.define("shake",function(e,o){n.createPlaceholder(t(this)),i(this,e,o)})}),e("skylark-jqueryui-effects/plugins/slide",["skylark-langx/langx","skylark-domx-query","skylark-domx-fx/slide","../effects"],function(e,t,i,n){return n.define("slide","show",function(e,t){e.direction||(e.direction="left"),i(this,e,t)})}),e("skylark-jqueryui-effects/plugins/transfer",["skylark-langx/langx","skylark-domx-query","../effects"],function(e,t,i){var n;return!1!==t.uiBackCompat&&(n=i.define("transfer",function(e,i){t(this).transfer(e,i)})),n}),e("skylark-jqueryui-effects/main",["./effects","./plugins/blind","./plugins/bounce","./plugins/clip","./plugins/drop","./plugins/explode","./plugins/fade","./plugins/fold","./plugins/highlight","./plugins/puff","./plugins/pulsate","./plugins/scale","./plugins/shake","./plugins/size","./plugins/slide","./plugins/transfer"],function(e){return e}),e("skylark-jqueryui-effects",["skylark-jqueryui-effects/main"],function(e){return e})}(i),!n){var s=require("skylark-langx-ns");o?module.exports=s:t.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-jqueryui-effects.js.map
