/**
 * skylark-utils-effects - The effect features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-utils/fx","skylark-utils/query"],function(t,e,i,n){function o(t,o,s,r){return e.isPlainObject(t)&&(o=t,t=t.effect),t={effect:t},null==o&&(o={}),e.isFunction(o)&&(r=o,s=null,o={}),("number"==typeof o||i.speeds[o])&&(r=s,s=o,o={}),e.isFunction(s)&&(r=s,s=null),o&&e.mixin(t,o),s=s||o.duration,t.duration=i.off?0:"number"==typeof s?s:s in n.fx.speeds?i.speeds[s]:i.speeds._default,t.complete=r||o.complete,t}function s(t){return!(t&&"number"!=typeof t&&!i.speeds[t])||("string"==typeof t&&!f[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}function r(t,e){var i=e.outerWidth(),n=e.outerHeight(),o=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,s=o.exec(t)||["",0,i,n,0];return{top:parseFloat(s[1])||0,right:"auto"===s[2]?i:parseFloat(s[2]),bottom:"auto"===s[3]?n:parseFloat(s[3]),left:parseFloat(s[4])||0}}var a="ui-effects-",c="ui-effects-style",u="ui-effects-animated",f={},l=t.effects=function(){};e.mixin(l,{define:function(t,e,i){return i||(i=e,e="effect"),f[t]=i,f[t].mode=e,i},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,o="vertical"!==i?(e||100)/100:1;return{height:t.height()*o,width:t.width()*n,outerHeight:t.outerHeight()*o,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(c,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(c)||"",t.removeData(c)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(t){var e,i=t.css("position"),o=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",e=n("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),"float":t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(a+"placeholder",e)),t.css({position:i,left:o.left,top:o.top}),e},removePlaceholder:function(t){var e=a+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(t){l.restoreStyle(t),l.removePlaceholder(t)},setTransition:function(t,i,n,o){return o=o||{},e.each(i,function(e,i){var s=t.cssUnit(i);s[0]>0&&(o[i]=s[0]*n+s[1])}),o}}),e.mixin(n.fn,{effect:function(){function t(t){function i(){f.removeData(u),l.cleanUp(f),"hide"===s.mode&&f.hide(),o()}function o(){e.isFunction(c)&&c.call(f[0]),e.isFunction(t)&&t()}var f=n(this);s.mode=p.shift(),n.uiBackCompat===!1||a?"none"===s.mode?(f[h](),o()):r.call(f[0],s,i):(f.is(":hidden")?"hide"===h:"show"===h)?(f[h](),o()):r.call(f[0],s,o)}var s=o.apply(this,arguments),r=f[s.effect],a=r.mode,c=(s.queue,s.complete),h=s.mode,p=[],d=function(t){var i=n(this),o=l.mode(i,h)||a;i.data(u,!0),p.push(o),a&&("show"===o||o===a&&"hide"===o)&&i.show(),a&&"none"===o||l.saveStyle(i),e.isFunction(t)&&t()};return i.off||!r?h?this[h](s.duration,c):this.each(function(){c&&c.call(this)}):this.each(d).each(t)},show:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=o.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(n.fn.show),hide:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=o.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(n.fn.hide),toggle:function(t){return function(e){if(s(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=o.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(n.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):r(this.css("clip"),this)},transfer:function(t,i){var o=n(this),s=n(t.to),r="fixed"===s.css("position"),a=n("body"),c=r?a.scrollTop():0,u=r?a.scrollLeft():0,f=s.offset(),l={top:f.top-c,left:f.left-u,height:s.innerHeight(),width:s.innerWidth()},h=o.offset(),p=n("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({top:h.top-c,left:h.left-u,height:o.innerHeight(),width:o.innerWidth(),position:r?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){p.remove(),e.isFunction(i)&&i()})}}),i.step=i.step||{},i.step.clip=function(t){t.clipInit||(t.start=n(t.elem).cssClip(),"string"==typeof t.end&&(t.end=r(t.end,t.elem)),t.clipInit=!0),n(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})};var h={};return e.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,e){h[e]=function(e){return Math.pow(e,t+2)}}),e.mixin(h,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),i.easing=i.easing||{},e.each(h,function(t,e){i.easing["easeIn"+t]=e,i.easing["easeOut"+t]=function(t){return 1-e(1-t)},i.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(t*-2+2)/2}}),l});
//# sourceMappingURL=sourcemaps/effects.js.map