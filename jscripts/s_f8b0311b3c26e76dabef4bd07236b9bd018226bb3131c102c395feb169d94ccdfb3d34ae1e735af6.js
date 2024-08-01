/*Generated at: 1605107407, Cache ends at: 1605143407,en_US*/

/**
 * Copyright (c) 2019-present, PL Productions LLC. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by VersatileNode.
 *
 * As with any software that integrates with the VersatileNode platform, your use of
 * this software is subject to the VersatileNode Platform Policy
 * [https://versatilenode.com/tos.html]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
/** We use CryptoJS in our code, so we'll include their licence as required. */
/**
# License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright (c) 2009-2013 Jeff Mott  
Copyright (c) 2013-2016 Evan Vosberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function(){var __indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};videojs.plugin('ga',function(options){var dataSetupOptions,defaultsEventsToTrack,end,error,eventCategory,eventLabel,eventsToTrack,fullscreen,loaded,parsedOptions,pause,percentsAlreadyTracked,percentsPlayedInterval,play,resize,seekEnd,seekStart,seeking,sendbeacon,timeupdate,volumeChange;if(options==null){options={};}
dataSetupOptions={};if(this.options()["data-setup"]){parsedOptions=JSON.parse(this.options()["data-setup"]);if(parsedOptions.ga){dataSetupOptions=parsedOptions.ga;}}
defaultsEventsToTrack=['loaded','percentsPlayed','start','end','seek','play','pause','resize','volumeChange','error','fullscreen'];eventsToTrack=options.eventsToTrack||dataSetupOptions.eventsToTrack||defaultsEventsToTrack;percentsPlayedInterval=options.percentsPlayedInterval||dataSetupOptions.percentsPlayedInterval||10;eventCategory=options.eventCategory||dataSetupOptions.eventCategory||'Video';eventLabel=options.eventLabel||dataSetupOptions.eventLabel;options.debug=options.debug||false;percentsAlreadyTracked=[];seekStart=seekEnd=0;seeking=false;loaded=function(){if(!eventLabel){eventLabel=this.currentSrc().split("/").slice(-1)[0].replace(/\.(\w{3,4})(\?.*)?$/i,'');}
if(__indexOf.call(eventsToTrack,"loadedmetadata")>=0){sendbeacon('loadedmetadata',true);}};timeupdate=function(){var currentTime,duration,percent,percentPlayed,_i;currentTime=Math.round(this.currentTime());duration=Math.round(this.duration());percentPlayed=Math.round(currentTime/duration*100);for(percent=_i=0;_i<=99;percent=_i+=percentsPlayedInterval){if(percentPlayed>=percent&&__indexOf.call(percentsAlreadyTracked,percent)<0){if(__indexOf.call(eventsToTrack,"start")>=0&&percent===0&&percentPlayed>0){sendbeacon('start',true);}else if(__indexOf.call(eventsToTrack,"percentsPlayed")>=0&&percentPlayed!==0){sendbeacon('percent played',true,percent);}
if(percentPlayed>0){percentsAlreadyTracked.push(percent);}}}
if(__indexOf.call(eventsToTrack,"seek")>=0){seekStart=seekEnd;seekEnd=currentTime;if(Math.abs(seekStart-seekEnd)>1){seeking=true;sendbeacon('seek start',false,seekStart);sendbeacon('seek end',false,seekEnd);}}};end=function(){sendbeacon('end',true);};play=function(){var currentTime;currentTime=Math.round(this.currentTime());sendbeacon('play',true,currentTime);seeking=false;};pause=function(){var currentTime,duration;currentTime=Math.round(this.currentTime());duration=Math.round(this.duration());if(currentTime!==duration&&!seeking){sendbeacon('pause',false,currentTime);}};volumeChange=function(){var volume;volume=this.muted()===true?0:this.volume();sendbeacon('volume change',false,volume);};resize=function(){sendbeacon('resize - '+this.width()+"*"+this.height(),true);};error=function(){var currentTime;currentTime=Math.round(this.currentTime());sendbeacon('error',true,currentTime);};fullscreen=function(){var currentTime;currentTime=Math.round(this.currentTime());if((typeof this.isFullscreen==="function"?this.isFullscreen():void 0)||(typeof this.isFullScreen==="function"?this.isFullScreen():void 0)){sendbeacon('enter fullscreen',false,currentTime);}else{sendbeacon('exit fullscreen',false,currentTime);}};sendbeacon=function(action,nonInteraction,value){if(window.ga){ga('send','event',{'eventCategory':eventCategory,'eventAction':action,'eventLabel':eventLabel,'eventValue':value,'nonInteraction':nonInteraction});}else if(window._gaq){_gaq.push(['_trackEvent',eventCategory,action,eventLabel,value,nonInteraction]);}else if(options.debug){console.log("Google Analytics not detected");}
if(window._paq){_paq.push(['trackEvent',eventCategory,action,eventLabel,value]);}else if(options.debug){console.log("Piwik not detected");}};this.ready(function(){this.on("loadedmetadata",loaded);this.on("timeupdate",timeupdate);if(__indexOf.call(eventsToTrack,"end")>=0){this.on("ended",end);}
if(__indexOf.call(eventsToTrack,"play")>=0){this.on("play",play);}
if(__indexOf.call(eventsToTrack,"pause")>=0){this.on("pause",pause);}
if(__indexOf.call(eventsToTrack,"volumeChange")>=0){this.on("volumechange",volumeChange);}
if(__indexOf.call(eventsToTrack,"resize")>=0){this.on("resize",resize);}
if(__indexOf.call(eventsToTrack,"error")>=0){this.on("error",error);}
if(__indexOf.call(eventsToTrack,"fullscreen")>=0){return this.on("fullscreenchange",fullscreen);}});return{'sendbeacon':sendbeacon};});}).call(this);
/** Hashkey: 468286ed6270d9c9776c5707cef84d2b02f02843b33337502f15e59b989faaaa **/
 
/** End of generated JS File **/
 