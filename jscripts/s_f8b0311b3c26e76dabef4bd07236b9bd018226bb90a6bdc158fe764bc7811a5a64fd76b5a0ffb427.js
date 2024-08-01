/*Generated at: 1598281193, Cache ends at: 1598317193,en_US*/

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

(function(window,videojs){'use strict';var plugin=function(options){var player=this,isLoaded;if(!options)options={};player.on('timeupdate',time_updated);player.on('ended',time_updated);function time_updated(time_update_event){var current_time=this.currentTime();var duration=this.duration();var time=Math.floor(current_time);if(time>duration||time_update_event.type==="ended"){time=0;}
if(isLoaded){if(options.localStorageKey){localStorage[options.localStorageKey]=time;}
if(options.sessionStorageKey){sessionStorage[options.sessionStorageKey]=time;}}}
player.ready(function(){var seekFunction=function(){if(isLoaded)return;isLoaded=true;var seek;if(options.localStorageKey){seek=parseInt(localStorage[options.localStorageKey]);}
if(options.sessionStorageKey){seek=parseInt(sessionStorage[options.sessionStorageKey]);}
player.currentTime(seek);};player.one('playing',seekFunction);player.one('play',seekFunction);player.one('loadedmetadata',seekFunction);});window.addEventListener("message",function(evt){var seek;if(evt.data.slice(0,16)=="localStorageKey:"){options.localStorageKey=evt.data.slice(16);seek=parseInt(localStorage[options.localStorageKey]);}
if(evt.data.slice(0,18)=="sessionStorageKey:"){options.sessionStorageKey=evt.data.slice(18);seek=parseInt(sessionStorage[options.sessionStorageKey]);}
if(seek&&isLoaded){player.currentTime(seek);}
player.ga().sendbeacon('ping',false,seek);});};videojs.plugin('remember',plugin);})(window,window.videojs);
/** Hashkey: 06c612d314b58bc76d8afb7203a310c3ab8aba35 **/
 
/** End of generated JS File **/
 