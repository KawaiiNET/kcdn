window.initChat=function(id){return jqac.arrowchat.chatWith(id);}
window.user_status=function(user,uid,status,avatar){switch(status){case'online':return"<li style=\"position:relative;margin: 0;float: none;display:block;\"> <a href=\"#\" onclick=\"initChat("+uid+"); return false;\" title=\"Online\"> <i class=\"fa fa-circle text-success\"></i><img src=\""+avatar+"\" style=\"width:32px;height:32px;border: none;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;vertical-align:middle;\"/>&nbsp;"+user+"</a> </li>";break;case'away':return"<li style=\"position:relative;margin: 0;float: none;display:block;\"> <a href=\"#\" onclick=\"initChat("+uid+"); return false;\" title=\"Away\"> <i class=\"fa fa-circle text-warning\"></i><img src=\""+avatar+"\" style=\"width:32px;height:32px;border: none;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;vertical-align:middle;\"/>&nbsp;"+user+"</a> </li>";break;case'offline':default:return"<li style=\"position:relative;margin: 0;float: none;display:block;\"> <a href=\"#\" onclick=\"initChat("+uid+"); return false;\" title=\"Offline\"> <i class=\"fa fa-circle text-muted\"></i><img src=\""+avatar+"\" style=\"width:32px;height:32px;border: none;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;vertical-align:middle;opacity: 0.4;filter: alpha(opacity=40);\"/>&nbsp;"+user+"</a> </li>";break;}}
window.fireoff=function(force=false){switch(force){case'true':case true:Pace.restart();jsonp_fire();clearInterval(mine);window.mine=setInterval("jsonp_fire();",8000);$('#mailrefesh').html('<i class=" fa fa-refresh"></i>');break;case'false':case false:default:$('#mailrefesh').html('<i class=" fa fa-refresh"></i>');break;$('#mailrefesh').html('<i class=" fa fa-refresh"></i>');}}
window.activeClass=function(oldid,newid,force=false){fireoff(force);if(mailbox_switch==newid&&mailbox_switch==oldid)
{}
else if(mailbox_switch==newid&&$("#"+newid).hasClass("active")){$("#"+oldid).removeClass("active");}
else
{$("#"+oldid).removeClass("active");$("#"+newid).addClass("active");mailbox_switch=newid;}}
window.pm_box=function(data){if(data.cb_username==0)
{swal({title:"Error!",text:"Your session has ended",type:"error",closeOnConfirm:false,showLoaderOnConfirm:true,},function(){setTimeout(function(){top.location.href='https://accounts.tcreborn.co/logon.aspx?wl=https://private.my.tcreborn.co/mail/';},2000);});}
else if(data.all&&data.all!=null){var inbox_pm_count=0;var mti=$('#mtitle');var mail_count={unread:0,inbox:0,sent:0,buddies:0,service:0,drafts:0,trash:0,total:0};window.reue_content='';window.reue_header='<table class="table table-inbox table-hover">'+'<tbody>';window.reue_footer='</tbody>'+'</table>';var inboxc=data.all.sort(function(a,b){var nameA=a.timestamp,nameB=b.timestamp;return nameB-nameA;});$.each(inboxc,function(a,b){if(b.type=="sent"){mail_count.sent++;};if(b.from!==user.name&&b.subject=="Buddy request received"&&b.is_read==0||b.from!==user.name&&b.subject=="I have accepted your buddy request"&&b.is_read==0)
{mail_count.buddies++;}
switch(mailbox_switch){case"buddies":mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Buddy Requests');activeClass(mailbox_switch,"buddies",false);if(b.from==user.name)
{}
else if(b.subject=="Buddy request received"&&b.is_read==1||b.subject=="I have accepted your buddy request"&&b.is_read==1)
{reue_content=reue_content+'<tr data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">from '+b.from+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';}
else if(b.subject=="Buddy request received"&&b.is_read==0||b.subject=="I have accepted your buddy request"&&b.is_read==0)
{reue_content=reue_content+'<tr data-id="'+b.pmid+'" class="unread"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">from '+b.from+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';}
else
{};break;case"inbox":mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Inbox');activeClass(mailbox_switch,"inbox",false);if(b.subject=="Buddy request received"||b.subject=="I have accepted your buddy request")
{}
else if(b.type=="inbox"&&b.from!==user.name&&b.is_read==3)
{reue_content=reue_content+'<tr data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">from '+b.from+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';mail_count.inbox++;}
else if(b.type=="inbox"&&b.from!==user.name&&b.is_read==1)
{reue_content=reue_content+'<tr data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">from '+b.from+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';mail_count.inbox++;}
else if(b.type=="inbox"&&b.from!==user.name&&b.is_read==0)
{reue_content=reue_content+'<tr class="unread" data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">from '+b.from+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';mail_count.unread++;mail_count.inbox++;}
else
{};mail_count.total++;break;case"sent":mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Sent');activeClass(mailbox_switch,"sent",false);if(b.type=="sent"&&b.from==user.name&&b.is_read==3)
{reue_content=reue_content+'<tr data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">to '+b.to+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';}
else if(b.type=="sent"&&b.from==user.name&&b.is_read==1)
{reue_content=reue_content+'<tr data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">to '+b.to+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';}
else if(b.type=="sent"&&b.from==user.name&&b.is_read==0)
{reue_content=reue_content+'<tr class="unread" data-id="'+b.pmid+'"><td class="inbox-small-cells">'+'<input type="checkbox" class="mail-checkbox">'+'</td>'+'<td class="inbox-small-cells"><i class="fa fa-star"></i></td>'+'<td class="view-message dont-show">'+b.subject+'</td>'+'<td class="view-message">to '+b.to+'</td>'+'<td class="view-message inbox-small-cells"></td>'+'<td class="view-message text-right timeago" datetime="'+b.timestamp+'">'+jQuery.timeago(new Date(b.timestamp*1000).toISOString())+'</td></tr>';}
else
{};break;case"drafts":mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Drafts');activeClass(mailbox_switch,"drafts",false);reue_content='<tr class="">'+'<td class="inbox-small-cells"></td>'+'<td class="view-message  dont-show"></td>'+'<td class="view-message "><center>There are no messages in your Drafts folder</center></td>'+'<td class="view-message  inbox-small-cells"></td>'+'<td class="view-message  text-right"></td>'+'</tr>';break;case"trash":mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Trash');activeClass(mailbox_switch,"trash",false);reue_content='<tr class="">'+'<td class="inbox-small-cells"></td>'+'<td class="view-message  dont-show"></td>'+'<td class="view-message "><center>There are no messages in your Trash folder</center></td>'+'<td class="view-message  inbox-small-cells"></td>'+'<td class="view-message  text-right"></td>'+'</tr>';break;case"service":mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Important');activeClass(mailbox_switch,"service",false);reue_content='<tr class="">'+'<td class="inbox-small-cells"></td>'+'<td class="view-message  dont-show"></td>'+'<td class="view-message "><center>There are no messages in your Important folder</center></td>'+'<td class="view-message  inbox-small-cells"></td>'+'<td class="view-message  text-right"></td>'+'</tr>';break;default:mti.html('Mail&nbsp;<i class="fa fa-chevron-right fa-fw"></i>&nbsp;Unsupported');activeClass(mailbox_switch,"unsupported",false);reue_content='<tr class="">'+'<td class="inbox-small-cells"></td>'+'<td class="view-message  dont-show"></td>'+'<td class="view-message "><center>This option or folder is not yet supported :c</center></td>'+'<td class="view-message  inbox-small-cells"></td>'+'<td class="view-message  text-right"></td>'+'</tr>';break;}
jQuery('tcrmailbody').html(reue_header+reue_content+reue_footer);jQuery('#inbox_noti').html(mail_count.unread);jQuery('#buddy_noti').html(mail_count.buddies);jQuery('#pm_total').html(mail_count.inbox+" of "+mail_count.total);jQuery('#sent_noti').html(mail_count.sent);jQuery("td .timeago").timeago();});}
else if(data.friends)
{var feix=data.friends.sort(function(a,b)
{return a.friend_name.toLowerCase().localeCompare(b.friend_name.toLowerCase());});var ei="<ul class=\"nav nav-pills nav-stacked labels-info \">"+"<li> <h4>Friends</h4> </li>";$.each(feix,function(a,b){ei=ei+user_status(b.friend_name,b.friend_id,b.friend_status,b.friend_avatar);jQuery('ajaxbuddylist').html(ei+"</ul>");});}
else
{}}
function guid(){function s4(){return Math.floor((1+ Math.random())*0x10000).toString(16).substring(1);}
return s4()+ s4()+'-'+ s4()+'-'+ s4()+'-'+ s4()+'-'+ s4()+ s4()+ s4();}
Element.prototype.remove=function(){this.parentElement.removeChild(this);}
NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var i=this.length- 1;i>=0;i--){if(this[i]&&this[i].parentElement){this[i].parentElement.removeChild(this[i]);}}}
window.headInject=function(tag,rel,href,type,title='',id='',replace=false){var l=document.createElement(tag);if(tag==='script')
{l.src=href;}
else
{l.rel=rel;l.href=href;}
l.type=type;if(id=='')
{l.id=guid();}
else
{l.id=id;};if(title=='')
{}
else
{l.title=title;};if(document.getElementById(id)&&id!==''&&replace==true)
{document.getElementById(id).remove();document.getElementsByTagName('head')[0].appendChild(l);}
else
{document.getElementsByTagName('head')[0].appendChild(l);}}
function headerInject(tag,rel,href,type,title='',id='',replace=false){headInject(tag,rel,href,type,title,id,replace);};var buddyuri="https://api.tcreborn.co/graph/friends",mailuri="https://api.tcreborn.co/graph/pm?folder=/all";function friendInject(){headInject('script','',buddyuri+"?token="+ user.mail_token+"&_ul="+ guid(),'text/javascript','','api_friends_status',true);}
function mailInject(){headInject('script','',mailuri+"&_ul="+ user.mail_token,'text/javascript','','api_mailbox_info',true);}
window.jsonp_fire=function(){Pace.restart();friendInject();mailInject();}
window.onload=function(){jsonp_fire();window.mine=setInterval("jsonp_fire();",8000);};if(location.hash=="f/sent")
{activeClass(mailbox_switch,"sent",true);}
else
{};function user_session(){};headInject('script','',"https://accounts.tcreborn.co/api/session.js?token="+ user.mail_token,'text/javascript','','api_account_info',true);$('#sendtoxapi').on('submit',function(e){$.ajax({url:'https://private.my.tcreborn.co/private.php?action=do_send',type:'POST',data:"action=do_send&my_post_key="+my_post_key,success:function(e){console.log(e);console.info("information");},error:function(a){console.log(a);console.error("error");}});e.preventDefault();});$('#mailrefresh').on('click',function(e){$(this).html('<i class=" fa fa-refresh fa-spin"></i>');activeClass(mailbox_switch,mailbox_switch,true);$(this).html('<i class=" fa fa-refresh"></i>');e.preventDefault();});paceOptions={ajax:true,document:true,eventLag:false,elements:{selectors:['tcrmailbody']}};if("onhashchange"in window)
{if(window.console&&console.log){console.log("Location hash is supported, we can use the up-to-date version.");};}
function locationHashChanged()
{switch(location.hash)
{case'#f/inbox':activeClass(mailbox_switch,"inbox",true);break;case'#f/sent':activeClass(mailbox_switch,"sent",true);break;case'#f/service':activeClass(mailbox_switch,"service",true);break;case'#f/buddies':activeClass(mailbox_switch,"buddies",true);break;case'#f/drafts':activeClass(mailbox_switch,"drafts",true);break;case'#f/trash':activeClass(mailbox_switch,"trash",true);break;default:activeClass(mailbox_switch,"unsupported",true);break;}}
window.onhashchange=locationHashChanged;if(location.hash==""){location.hash="f/inbox";}
$('#compose_new').on('click',function(){swal({title:"HTML <small>Title</small>!",text:"<form role="form" class="form-horizontal" id="sendtoxapi">
                                              <div class="form-group">
                                                  <label class="col-lg-2 control-label">To</label>
                                                  <div class="col-lg-10">
                                                      <input type="text" placeholder="" id="inputEmail1" class="form-control">
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="col-lg-2 control-label">Cc / Bcc</label>
                                                  <div class="col-lg-10">
                                                      <input type="text" placeholder="" id="cc" class="form-control">
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="col-lg-2 control-label">Subject</label>
                                                  <div class="col-lg-10">
                                                      <input type="text" placeholder="" id="inputPassword1" class="form-control">
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                  <label class="col-lg-2 control-label">Message</label>
                                                  <div class="col-lg-10">
                                                      <textarea rows="10" cols="30" class="form-control" id="" name=""></textarea>
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <div class="col-lg-offset-2 col-lg-10">
                                                      <!---
													  <span class="btn green fileinput-button">
                                                        <i class="fa fa-plus fa fa-white"></i>
                                                        <span>Attachment</span>
                                                        <input type="file" name="files[]" multiple="">
                                                      </span>
													  -->
                                                      <button class="btn btn-send" type="submit">Send</button>
                                                  </div>
                                              </div>
                                          </form>",html:true});});$('#myuser').on('click',function(){swal({title:user.name,text:"Your username: <b>"+user.name+"</b>",imageUrl:user.avatar,html:true});});