$(document).ready(function(){const e=$("#AD19_FeatureTeaser-example");e.hasClass("flexslider")&&$(window).on("load resize",function(){e.flexslider({animation:"slide",carousel:!1,minItems:1,maxItems:1,startAt:1,controlsContainer:".has-slider",start:function(){e.find("ul.slides").css("transform","translate3d(-600px, 0px, 0px)")}})})}),$(document).ready(function(){$(window).on("load resize",function(){const e=$("#AD19_ArticleTeaser_slider");window.innerWidth<1024?(e.addClass("flexslider"),e.addClass("carousel"),e.find("ul").addClass("slides"),e.flexslider({animation:"slide",itemWidth:400,directionNav:!1})):(e.removeClass("flexslider"),e.removeClass("carousel"),e.find("ul.slides").removeClass("slides"))})}),function(e){jQuery(document).ready(function(){console.log("AD19_FindInsurWiz component ready...");const t=["step-1","step-2"],n=["final-step-1-option-1","final-step-2-option-1","final-step-2-option-2","final-step-2-option-3","final-step-2-option-4"],i={"step-1-option-1":"final-step-1-option-1","step-2-option-1":"final-step-2-option-1","step-2-option-2":"final-step-2-option-2","step-2-option-3":"final-step-2-option-3","step-2-option-4":"final-step-2-option-4"};for(let n=1;n<t.length;n++)e(".AD19_FindInsurWiz."+t[n]).hide();for(let t=0;t<n.length;t++)e("#"+n[t]).hide();const a=e("a.AD19_FindInsurWiz-cta");e(a).each(function(t,n){e(n).on("click",function(t){t.preventDefault();const n=e(this).attr("class").split(" ")[1],a=e('input[type="radio"][name="'+n+'"]');e(a).each(function(t,n){const a=e(n).attr("id"),s=e("#"+a);if(e(s).is(":checked")){const t=e(s).attr("value");console.log("val: "+t);let n=i[t];void 0!==n?(e("#"+n).show(),e(".AD19_FindInsurWiz.step-1").hide(),e(".AD19_FindInsurWiz.step-2").hide()):(e(".AD19_FindInsurWiz.step-1").hide(),e(".AD19_FindInsurWiz.step-2").show()),console.log("final: "+n)}})})})})}(jQuery),$(document).ready(function(){$(window).on("load resize",function(){const e=$("#AD19_ProductTitleSlider-example");window.innerWidth<1024?(e.addClass("flexslider"),e.addClass("carousel"),e.find("ul").addClass("slides"),e.flexslider({animation:"slide",carousel:!1,minItems:1,maxItems:1,startAt:1,start:function(){e.find("ul.slides").css("transform","translate3d(-600px, 0px, 0px)")}})):(e.removeClass("flexslider"),e.removeClass("carousel"),e.find("ul.slides").removeClass("slides"))})}),$(document).ready(function(){$("#search-form").autocomplete({hints:["Teilkasko","Teilkasko oder Vollkasko","Teileversicherung","Telefonkontakt"],placeholder:"Suchbegriff",width:300,height:30,showButton:!1})}),$.fn.autocomplete=function(e){var t=-1,n=[];return e=$.extend({hints:[],placeholder:"Search",width:200,height:16,showButton:!0,buttonText:"Search",onSubmit:function(e){},onBlur:function(){}},e),this.each(function(){var i=$("<div></div>").addClass("autocomplete-container").css("height",2*e.height),a=$('<input type="text" autocomplete="off" name="query">').attr("placeholder",e.placeholder).addClass("autocomplete-input").css({width:e.width,height:e.height});e.showButton&&a.css("border-radius","3px 0 0 3px");var s=$("<div></div>").addClass("proposal-box").css("width",e.width+18).css("top",a.height()+20),r=$("<ul></ul>").addClass("proposal-list");if(s.append(r),a.keydown(function(i){switch(i.which){case 38:i.preventDefault(),$("ul.proposal-list li").removeClass("selected"),t-1>=0?(t--,$("ul.proposal-list li:eq("+t+")").addClass("selected")):t=-1;break;case 40:i.preventDefault(),t+1<n.length&&($("ul.proposal-list li").removeClass("selected"),t++,$("ul.proposal-list li:eq("+t+")").addClass("selected"));break;case 13:if(t>-1){var s=$("ul.proposal-list li:eq("+t+")").html();a.val(s)}t=-1,r.empty(),e.onSubmit(a.val());break;case 27:t=-1,r.empty(),a.val("")}}),a.bind("change paste keyup",function(i){if(13!=i.which&&27!=i.which&&38!=i.which&&40!=i.which&&(n=[],t=-1,r.empty(),""!=a.val())){var s="^"+a.val()+".*";for(var o in r.empty(),e.hints)if(e.hints[o].match(s)){n.push(e.hints[o]);var l=$("<li></li>").html(e.hints[o]).addClass("proposal").click(function(){a.val($(this).html()),r.empty(),e.onSubmit(a.val())}).mouseenter(function(){$(this).addClass("selected")}).mouseleave(function(){$(this).removeClass("selected")});r.append(l)}}}),a.blur(function(n){t=-1,e.onBlur()}),i.append(a),i.append(s),e.showButton){var o=$("<div></div>").addClass("autocomplete-button").html(e.buttonText).css({height:e.height+2,"line-height":e.height+"px"}).click(function(){r.empty(),e.onSubmit(a.val())});i.append(o)}$(this).append(i),e.showButton&&i.css("width",e.width+o.width()+50)}),this},$(document).ready(function(){$("#TestimonialSection").flexslider({animation:"slide"})}),$(document).ready(function(){$("#example-flexslider_content-flexslider").flexslider({animation:"slide"}),$("#example-component-flexslider_full").flexslider({animation:"slide"})});var e=!0;$.flexslider=function(t,n){var i=$(t);void 0===n.rtl&&"rtl"==$("html").attr("dir")&&(n.rtl=!0),i.vars=$.extend({},$.flexslider.defaults,n);var a,s=i.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,l="click touchend MSPointerUp keyup",c="",d="vertical"===i.vars.direction,u=i.vars.reverse,p=i.vars.itemWidth>0,v="fade"===i.vars.animation,m=""!==i.vars.asNavFor,h={};$.data(t,"flexslider",i),h={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=$(i.vars.selector,i),i.container=$(i.containerSelector,i),i.count=i.slides.length,i.syncExists=$(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=d?"top":i.vars.rtl?"marginRight":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!v&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return i.pfx=t[n].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=$(i.vars.controlsContainer).length>0&&$(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=$(i.vars.manualControls).length>0&&$(i.vars.manualControls)),""!==i.vars.customDirectionNav&&(i.customDirectionNav=2===$(i.vars.customDirectionNav).length&&$(i.vars.customDirectionNav)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&h.controlNav.setup(),i.vars.directionNav&&h.directionNav.setup(),i.vars.keyboard&&(1===$(i.containerSelector).length||i.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var n=i.vars.rtl?37===t?i.getTarget("next"):39===t&&i.getTarget("prev"):39===t?i.getTarget("next"):37===t&&i.getTarget("prev");i.flexAnimate(n,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t,n,a){e.preventDefault();var s=t<0?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(s,i.vars.pauseOnAction)}),i.vars.pausePlay&&h.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&h.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&h.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),m&&h.asNav.setup(),o&&i.vars.touch&&h.touch(),(!v||v&&i.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",h.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(s+"active-slide").eq(i.currentItem).addClass(s+"active-slide"),r?(t._slider=i,i.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(i.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(l,function(e){e.preventDefault();var t=$(this),n=t.index();(i.vars.rtl?-1*(t.offset().right-$(i).scrollLeft()):t.offset().left-$(i).scrollLeft())<=0&&t.hasClass(s+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):$(i.vars.asNavFor).data("flexslider").animating||t.hasClass(s+"active-slide")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?h.controlNav.setupManual():h.controlNav.setupPaging()},setupPaging:function(){var e,t,n="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",a=1;if(i.controlNavScaffold=$('<ol class="'+s+"control-nav "+s+n+'"></ol>'),i.pagingCount>1)for(var r=0;r<i.pagingCount;r++){if(void 0===(t=i.slides.eq(r)).attr("data-thumb-alt")&&t.attr("data-thumb-alt",""),e=$("<a></a>").attr("href","#").text(a),"thumbnails"===i.vars.controlNav&&(e=$("<img/>").attr("src",t.attr("data-thumb"))),""!==t.attr("data-thumb-alt")&&e.attr("alt",t.attr("data-thumb-alt")),"thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var o=t.attr("data-thumbcaption");if(""!==o&&void 0!==o){var d=$("<span></span>").addClass(s+"caption").text(o);e.append(d)}}var u=$("<li>");e.appendTo(u),u.append("</li>"),i.controlNavScaffold.append(u),a++}i.controlsContainer?$(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),h.controlNav.set(),h.controlNav.active(),i.controlNavScaffold.delegate("a, img",l,function(e){if(e.preventDefault(),""===c||c===e.type){var t=$(this),n=i.controlNav.index(t);t.hasClass(s+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===c&&(c=e.type),h.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,h.controlNav.active(),i.controlNav.bind(l,function(e){if(e.preventDefault(),""===c||c===e.type){var t=$(this),n=i.controlNav.index(t);t.hasClass(s+"active")||(n>i.currentSlide?i.direction="next":i.direction="prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===c&&(c=e.type),h.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=$("."+s+"control-nav li "+e,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(s+"active").eq(i.animatingTo).addClass(s+"active")},update:function(e,t){i.pagingCount>1&&"add"===e?i.controlNavScaffold.append($('<li><a href="#">'+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(t).closest("li").remove(),h.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(t,e):h.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+i.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.customDirectionNav?i.directionNav=i.customDirectionNav:i.controlsContainer?($(i.controlsContainer).append(e),i.directionNav=$("."+s+"direction-nav li a",i.controlsContainer)):(i.append(e),i.directionNav=$("."+s+"direction-nav li a",i)),h.directionNav.update(),i.directionNav.bind(l,function(e){var t;e.preventDefault(),""!==c&&c!==e.type||(t=$(this).hasClass(s+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(t,i.vars.pauseOnAction)),""===c&&(c=e.type),h.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+s+'pauseplay"><a href="#"></a></div>');i.controlsContainer?(i.controlsContainer.append(e),i.pausePlay=$("."+s+"pauseplay a",i.controlsContainer)):(i.append(e),i.pausePlay=$("."+s+"pauseplay a",i)),h.pausePlay.update(i.vars.slideshow?s+"pause":s+"play"),i.pausePlay.bind(l,function(e){e.preventDefault(),""!==c&&c!==e.type||($(this).hasClass(s+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===c&&(c=e.type),h.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(s+"pause").addClass(s+"play").html(i.vars.playText):i.pausePlay.removeClass(s+"play").addClass(s+"pause").html(i.vars.pauseText)}},touch:function(){var e,n,a,s,o,l,c,m,h,f=!1,g=0,y=0,w=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),t._gesture.addPointer(e.pointerId),w=0,s=d?i.h:i.w,l=Number(new Date),a=p&&u&&i.animatingTo===i.last?0:p&&u?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:u?(i.last-i.currentSlide+i.cloneOffset)*s:(i.currentSlide+i.cloneOffset)*s)},!1),t._slider=i,t.addEventListener("MSGestureChange",function(e){e.stopPropagation();var n=e.target._slider;if(n){var i=-e.translationX,r=-e.translationY;if(w+=d?r:i,o=(n.vars.rtl?-1:1)*w,f=d?Math.abs(w)<Math.abs(-i):Math.abs(w)<Math.abs(-r),e.detail===e.MSGESTURE_FLAG_INERTIA)return void setImmediate(function(){t._gesture.stop()});(!f||Number(new Date)-l>500)&&(e.preventDefault(),!v&&n.transitions&&(n.vars.animationLoop||(o=w/(0===n.currentSlide&&w<0||n.currentSlide===n.last&&w>0?Math.abs(w)/s+2:1)),n.setProps(a+o,"setTouch")))}},!1),t.addEventListener("MSGestureEnd",function(t){t.stopPropagation();var i=t.target._slider;if(i){if(i.animatingTo===i.currentSlide&&!f&&null!==o){var r=u?-o:o,c=r>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(c)&&(Number(new Date)-l<550&&Math.abs(r)>50||Math.abs(r)>s/2)?i.flexAnimate(c,i.vars.pauseOnAction):v||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}e=null,n=null,o=null,a=null,w=0}},!1)):(c=function(r){i.animating?r.preventDefault():(window.navigator.msPointerEnabled||1===r.touches.length)&&(i.pause(),s=d?i.h:i.w,l=Number(new Date),g=r.touches[0].pageX,y=r.touches[0].pageY,a=p&&u&&i.animatingTo===i.last?0:p&&u?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:u?(i.last-i.currentSlide+i.cloneOffset)*s:(i.currentSlide+i.cloneOffset)*s,e=d?y:g,n=d?g:y,t.addEventListener("touchmove",m,!1),t.addEventListener("touchend",h,!1))},m=function(t){g=t.touches[0].pageX,y=t.touches[0].pageY,o=d?e-y:(i.vars.rtl?-1:1)*(e-g);(!(f=d?Math.abs(o)<Math.abs(g-n):Math.abs(o)<Math.abs(y-n))||Number(new Date)-l>500)&&(t.preventDefault(),!v&&i.transitions&&(i.vars.animationLoop||(o/=0===i.currentSlide&&o<0||i.currentSlide===i.last&&o>0?Math.abs(o)/s+2:1),i.setProps(a+o,"setTouch")))},h=function(r){if(t.removeEventListener("touchmove",m,!1),i.animatingTo===i.currentSlide&&!f&&null!==o){var c=u?-o:o,d=c>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(d)&&(Number(new Date)-l<550&&Math.abs(c)>50||Math.abs(c)>s/2)?i.flexAnimate(d,i.vars.pauseOnAction):v||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}t.removeEventListener("touchend",h,!1),e=null,n=null,o=null,a=null},t.addEventListener("touchstart",c,!1))},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),v?h.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):d?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&h.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!d||v){var t=v?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).innerHeight()},e):t.innerHeight(i.slides.eq(i.animatingTo).innerHeight())}},sync:function(e){var t=$(i.vars.sync).data("flexslider"),n=i.animatingTo;switch(e){case"animate":t.flexAnimate(n,i.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=h.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){h.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){var e=h.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(a),a=setTimeout(function(){c=""},3e3)}},i.flexAnimate=function(e,t,n,a,r){if(i.vars.animationLoop||e===i.currentSlide||(i.direction=e>i.currentSlide?"next":"prev"),m&&1===i.pagingCount&&(i.direction=i.currentItem<e?"next":"prev"),!i.animating&&(i.canAdvance(e,r)||n)&&i.is(":visible")){if(m&&a){var l=$(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===e||e===i.count-1,l.flexAnimate(e,!0,!1,!0,r),i.direction=i.currentItem<e?"next":"prev",l.direction=i.direction,Math.ceil((e+1)/i.visible)-1===i.currentSlide||0===e)return i.currentItem=e,i.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),!1;i.currentItem=e,i.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),e=Math.floor(e/i.visible)}if(i.animating=!0,i.animatingTo=e,t&&i.pause(),i.vars.before(i),i.syncExists&&!r&&h.sync("animate"),i.vars.controlNav&&h.controlNav.active(),p||i.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),i.atEnd=0===e||e===i.last,i.vars.directionNav&&h.directionNav.update(),e===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),v)o?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(e).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(e).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var c,f,g,y=d?i.slides.filter(":first").height():i.computedW;p?(c=i.vars.itemMargin,f=(g=(i.itemW+c)*i.move*i.animatingTo)>i.limit&&1!==i.visible?i.limit:g):f=0===i.currentSlide&&e===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?u?(i.count+i.cloneOffset)*y:0:i.currentSlide===i.last&&0===e&&i.vars.animationLoop&&"prev"!==i.direction?u?0:(i.count+1)*y:u?(i.count-1-e+i.cloneOffset)*y:(e+i.cloneOffset)*y,i.setProps(f,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(y)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(y)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(y)})}i.vars.smoothHeight&&h.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){v||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&e&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&h.pausePlay.update("play"),i.syncExists&&h.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&h.pausePlay.update("pause"),i.syncExists&&h.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var n=m?i.pagingCount-1:i.last;return!(!t&&(!m||i.currentItem!==i.count-1||0!==e||"prev"!==i.direction)&&(m&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction||e===i.currentSlide&&!m||!i.vars.animationLoop&&(i.atEnd&&0===i.currentSlide&&e===n&&"next"!==i.direction||i.atEnd&&i.currentSlide===n&&0===e&&"next"===i.direction)))},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,n){var a=function(){var n=e||(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo;return function(){if(p)return"setTouch"===t?e:u&&i.animatingTo===i.last?0:u?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(t){case"setTotal":return u?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return u?e:i.count*e;case"jumpStart":return u?i.count*e:e;default:return e}}()*(i.vars.rtl?1:-1)+"px"}();i.transitions&&(a=i.isFirefox?d?"translate3d(0,"+a+",0)":"translate3d("+parseInt(a)+"px,0,0)":d?"translate3d(0,"+a+",0)":"translate3d("+(i.vars.rtl?-1:1)*parseInt(a)+"px,0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n),i.container.css("transition-duration",n)),i.args[i.prop]=a,(i.transitions||void 0===n)&&i.container.css(i.args),i.container.css("transform",a)},i.setup=function(e){var t,n;v?(i.vars.rtl?i.slides.css({width:"100%",float:"right",marginLeft:"-100%",position:"relative"}):i.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(o?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&h.smoothHeight()):("init"===e&&(i.viewport=$('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,u&&(n=$.makeArray(i.slides).reverse(),i.slides=$(n),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==e&&i.container.find(".clone").remove(),i.container.append(h.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(h.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=$(i.vars.selector,i),t=u?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,d&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(t*i.h,"init")},"init"===e?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(t*i.computedW,"init"),setTimeout(function(){i.doMath(),i.vars.rtl&&i.isFirefox?i.newSlides.css({width:i.computedW,marginRight:i.computedM,float:"right",display:"block"}):i.newSlides.css({width:i.computedW,marginRight:i.computedM,float:"left",display:"block"}),i.vars.smoothHeight&&h.smoothHeight()},"init"===e?100:0)));p||i.slides.removeClass(s+"active-slide").eq(i.currentSlide).addClass(s+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,n=i.vars.minItems,a=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.isFirefox&&(i.w=i.width()),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.itemM=t,i.minW=n?n*i.itemT:i.w,i.maxW=a?a*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(n-1))/n:i.maxW<i.w?(i.w-t*(a-1))/a:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.itemM=t,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding,i.computedM=i.itemM},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?h.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),h.controlNav.update("remove",i.last))),i.vars.directionNav&&h.directionNav.update()},i.addSlide=function(e,t){var n=$(e);i.count+=1,i.last=i.count-1,d&&u?void 0!==t?i.slides.eq(i.count-t).after(n):i.container.prepend(n):void 0!==t?i.slides.eq(t).before(n):i.container.append(n),i.update(t,"add"),i.slides=$(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(e){var t=isNaN(e)?i.slides.index($(e)):e;i.count-=1,i.last=i.count-1,isNaN(e)?$(e,i.slides).remove():d&&u?i.slides.eq(i.last).remove():i.slides.eq(e).remove(),i.doMath(),i.update(t,"remove"),i.slides=$(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},h.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,isFirefox:!1,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),n=e.selector?e.selector:".slides > li",i=t.find(n);1===i.length&&!1===e.allowOneSlide||0===i.length?(i.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}},$(document).ready(function(){$("#mobile_menu_trigger").on("click",function(){$(this).toggleClass("mobile-open"),$(".menu-container").toggleClass("mobile-open"),$("body").toggleClass("no-scroll")})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=Array.prototype.slice,n=Array.prototype.splice,i={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"inherit"},a=e(window),s=e(document),r=[],o=a.height(),l=function(){for(var t=a.scrollTop(),n=s.height(),i=n-o,l=t>i?i-t:0,c=0,d=r.length;c<d;c++){var u=r[c],p=u.stickyWrapper.offset().top-u.topSpacing-l;if(u.stickyWrapper.css("height",u.stickyElement.outerHeight()),t<=p)null!==u.currentTop&&(u.stickyElement.css({width:"",position:"",top:"","z-index":""}),u.stickyElement.parent().removeClass(u.className),u.stickyElement.trigger("sticky-end",[u]),u.currentTop=null);else{var v,m=n-u.stickyElement.outerHeight()-u.topSpacing-u.bottomSpacing-t-l;if(m<0?m+=u.topSpacing:m=u.topSpacing,u.currentTop!==m)u.getWidthFrom?(padding=u.stickyElement.innerWidth()-u.stickyElement.width(),v=e(u.getWidthFrom).width()-padding||null):u.widthFromWrapper&&(v=u.stickyWrapper.width()),null==v&&(v=u.stickyElement.width()),u.stickyElement.css("width",v).css("position","fixed").css("top",m).css("z-index",u.zIndex),u.stickyElement.parent().addClass(u.className),null===u.currentTop?u.stickyElement.trigger("sticky-start",[u]):u.stickyElement.trigger("sticky-update",[u]),u.currentTop===u.topSpacing&&u.currentTop>m||null===u.currentTop&&m<u.topSpacing?u.stickyElement.trigger("sticky-bottom-reached",[u]):null!==u.currentTop&&m===u.topSpacing&&u.currentTop<m&&u.stickyElement.trigger("sticky-bottom-unreached",[u]),u.currentTop=m;var h=u.stickyWrapper.parent();u.stickyElement.offset().top+u.stickyElement.outerHeight()>=h.offset().top+h.outerHeight()&&u.stickyElement.offset().top<=u.topSpacing?u.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):u.stickyElement.css("position","fixed").css("top",m).css("bottom","").css("z-index",u.zIndex)}}},c=function(){o=a.height();for(var t=0,n=r.length;t<n;t++){var i=r[t],s=null;i.getWidthFrom?i.responsiveWidth&&(s=e(i.getWidthFrom).width()):i.widthFromWrapper&&(s=i.stickyWrapper.width()),null!=s&&i.stickyElement.css("width",s)}},d={init:function(t){return this.each(function(){var n=e.extend({},i,t),a=e(this),s=a.attr("id"),o=s?s+"-"+i.wrapperClassName:i.wrapperClassName,l=e("<div></div>").attr("id",o).addClass(n.wrapperClassName);a.wrapAll(function(){if(0==e(this).parent("#"+o).length)return l});var c=a.parent();n.center&&c.css({width:a.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===a.css("float")&&a.css({float:"none"}).parent().css({float:"right"}),n.stickyElement=a,n.stickyWrapper=c,n.currentTop=null,r.push(n),d.setWrapperHeight(this),d.setupChangeListeners(this)})},setWrapperHeight:function(t){var n=e(t),i=n.parent();i&&i.css("height",n.outerHeight())},setupChangeListeners:function(e){window.MutationObserver?new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&d.setWrapperHeight(e)}).observe(e,{subtree:!0,childList:!0}):window.addEventListener?(e.addEventListener("DOMNodeInserted",function(){d.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){d.setWrapperHeight(e)},!1)):window.attachEvent&&(e.attachEvent("onDOMNodeInserted",function(){d.setWrapperHeight(e)}),e.attachEvent("onDOMNodeRemoved",function(){d.setWrapperHeight(e)}))},update:l,unstick:function(t){return this.each(function(){for(var t=e(this),i=-1,a=r.length;a-- >0;)r[a].stickyElement.get(0)===this&&(n.call(r,a,1),i=a);-1!==i&&(t.unwrap(),t.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",l,!1),window.addEventListener("resize",c,!1)):window.attachEvent&&(window.attachEvent("onscroll",l),window.attachEvent("onresize",c)),e.fn.sticky=function(n){return d[n]?d[n].apply(this,t.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.sticky"):d.init.apply(this,arguments)},e.fn.unstick=function(n){return d[n]?d[n].apply(this,t.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.sticky"):d.unstick.apply(this,arguments)},e(function(){setTimeout(l,0)})}),$(document).ready(function(){const e=$("header.header"),t=$(".shortcuts-contact"),n=$(".shortcuts-phone");t.hide(),e.sticky({topSpacing:0,zIndex:100}),e.on("sticky-start",function(){n.hide(),t.css("display","flex")}),e.on("sticky-end",function(){n.show(),t.hide()}),$(window).on("resize",function(){e.sticky("update")})});