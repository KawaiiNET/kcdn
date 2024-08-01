function userStatus(status){
	switch(status){
	case 'online':
		return '<i class="fa fa-user" aria-hidden="true" style="color:green;"></i>';
	break;
	
	case 'away':
	case 'idle':
		return '<i class="fa fa-user" aria-hidden="true" style="color:orange;"></i>';
	break;
	
	case 'dnd':
		return '<i class="fa fa-user-times" aria-hidden="true" style="color:red;"></i>';
	break;
		
	case 'offline':
		return '<i class="fa fa-user" aria-hidden="true" style="color:grey;"></i>';
	break;
	
	default:
		return '<i class="fa fa-question-circle-o" aria-hidden="true"></i>';
	break;
	}
}
function hellodiscord(){
//jQuery.get('https://trello-api.tcreborn.co/', { "type":"__discord", "_": jQuery.now() }, function(data){
jQuery.get('https://discordapp.com/api/guilds/131643634033491968/widget.json', { "_": jQuery.now() }, function(data){
				var countx = 0, discordhtmlcontainer='';
				//jQuery.each(data.hellodiscordresponse.members, function(ab, bb){
				jQuery.each(data.members, function(ab, bb){
					//var dc=Date.parse(b.date);// / 1000;//new Date(b.date);
					var euenx = function(){if(bb.nick && bb.nick != ""){return emojione.toImage(bb.nick);}else{return emojione.toImage(bb.username);}};//b.data.card.name, btx = b.data.card.name;
					var elementsx = jQuery('hellodiscordcontainer').html();//document.getElementById('hellotrellominx').innerHTML;
					/*if(euen.length > 18)
					{
						euenx = euenx.substring(0,18)+"...";
					}
					else
					{};
					if(countx < 120)
					{
						//jQuery('#trello_data').append(euen).slideDown('slow');
						//if(elements.indexOf(b.data.card.name) >= 0)
					if(elementsx.indexOf(euenx()) !== -1)
					{
					}
					else if(elementsx.indexOf(euenx()) < 1)
					{
						
						//jQuery('hellotrellomin').append('<hellotrellominitem id="hellotrelloid_'+count+'">'+euen+' &mdash; '+jQuery.timeago(dc)+'</hellotrellominitem><br/>');
					}
					else
					{
					if(bb.game && bb.game.name != null)
						{
							//jQuery('hellodiscordcontainer').append('<a id="hellodiscordid_'+countx+'" title="Playing: '+bb.game.name+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/>'+ euenx() +' &mdash; '+bb.status+': in-game</a><br/><br/>');
							discordhtmlcontainer = discordhtmlcontainer+='<a id="hellodiscordid_'+countx+'" title="Playing: '+bb.game.name+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/> '+ euenx() +' '+userStatus(bb.status)+' <i class="fa fa-gamepad" aria-hidden="true" style="color:green"></i></a><br/><br/>';
						}
						else
						{
							//jQuery('hellodiscordcontainer').append('<a id="hellodiscordid_'+countx+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/>'+ euenx() +' &mdash; '+bb.status+'</a><br/><br/>');
							discordhtmlcontainer = discordhtmlcontainer+='<a id="hellodiscordid_'+countx+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/> '+ euenx() +' '+userStatus(bb.status)+'</a><br/><br/>';
						}
					};
					}
					else if(countx > 7)
					{
					}
					else
					{
						//jQuery('#trello_data').slideUp(0.1).html('');
						if(bb.game && bb.game.name != null)
						{
							//jQuery('hellodiscordcontainer').append('<a id="hellodiscordid_'+countx+'" title="Playing: '+bb.game.name+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/>'+ euenx() +' &mdash; '+bb.status+': in-game</a><br/><br/>');
							discordhtmlcontainer = discordhtmlcontainer+='<a id="hellodiscordid_'+countx+'" title="Playing: '+bb.game.name+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/> '+ euenx() +' '+userStatus(bb.status)+' <i class="fa fa-gamepad" aria-hidden="true" style="color:green"></i></a><br/><br/>';
						}
						else
						{
							//jQuery('hellodiscordcontainer').append('<a id="hellodiscordid_'+countx+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/>'+ euenx() +' &mdash; '+bb.status+'</a><br/><br/>');
							discordhtmlcontainer = discordhtmlcontainer+='<a id="hellodiscordid_'+countx+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/> '+ euenx() +' '+userStatus(bb.status)+'</a><br/><br/>';
						}
					};*/
					if(bb.game && bb.game.name != null)
						{
							//jQuery('hellodiscordcontainer').append('<a id="hellodiscordid_'+countx+'" title="Playing: '+bb.game.name+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/>'+ euenx() +' &mdash; '+bb.status+': in-game</a><br/><br/>');
							discordhtmlcontainer = discordhtmlcontainer+='<a id="hellodiscordid_'+countx+'" title="Playing: '+bb.game.name+'"><img src="https://cdn.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/> '+ euenx() +' '+userStatus(bb.status)+' <i class="fa fa-gamepad" aria-hidden="true" style="color:green"></i></a><br/><br/>';
						}
						else
						{
							//jQuery('hellodiscordcontainer').append('<a id="hellodiscordid_'+countx+'"><img src="https://s2.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/>'+ euenx() +' &mdash; '+bb.status+'</a><br/><br/>');
							discordhtmlcontainer = discordhtmlcontainer+='<a id="hellodiscordid_'+countx+'"><img src="https://cdn.kawaiicdn.net/proxy?src='+bb.avatar_url+'" style="vertical-align:middle;border:0;height:32px;width:32px;"/> '+ euenx() +' '+userStatus(bb.status)+'</a><br/><br/>';
						}
					//jQuery('hellodiscordcontainer').append('<hellodiscorditem id="hellodiscordid_'+count+'">'+b.data.card.name+' &mdash; '+jQuery.timeago(dc)+'</hellodiscorditem><br/>');
					//console.log(b.data.card.name+" was loaded on count: "+count);
					countx++;
				});
				jQuery('#hellodiscord').html(discordhtmlcontainer);
});
//var parent = document.getElementById('hellodiscordcontainermax');
//var child = document.getElementById('hellodiscord');
//child.style.right = child.clientWidth - child.offsetWidth + "px";
};

function hellotrello(){
jQuery.post('https://trello-api.tcreborn.co/index.php?g=clientRequestBasicInformation', {token: null}, function(json){
				jQuery('#trello_data_name').text("TCR 2.0 on ");
				var count = 0;
				jQuery.each(json, function(a, b){
					var dc=Date.parse(b.date);// / 1000;//new Date(b.date);
					var euen = b.data.card.name, btx = b.data.card.name;
					var elements = document.getElementById('hellotrellominx').innerHTML;
					if(euen.length > 18)
					{
						euen = euen.substring(0,18)+"...";
					}
					else
					{};
					if(count < 120)
					{
						//jQuery('#trello_data').append(euen).slideDown('slow');
						//if(elements.indexOf(b.data.card.name) >= 0)
					if(elements.indexOf(euen) !== -1)
					{
					}
					else if(elements.indexOf(euen) < 1)
					{
						jQuery('hellotrellomin').append('<hellotrellominitem id="hellotrelloid_'+count+'">'+euen+' &mdash; '+jQuery.timeago(dc)+'</hellotrellominitem><br/>');
					}
					else
					{
					
					};
					}
					else if(count > 7)
					{
					}
					else
					{
						//jQuery('#trello_data').slideUp(0.1).html('');
					};
					jQuery('hellotrellocontainer').append('<hellotrelloitem id="hellotrelloid_'+count+'">'+b.data.card.name+' &mdash; '+jQuery.timeago(dc)+'</hellotrelloitem><br/>');
					//console.log(b.data.card.name+" was loaded on count: "+count);
					count++;
				});
				//jQuery('#trell_data').html();
				jQuery('#trello_data').slideUp(0.1).html(jQuery('hellotrellomin').html()).slideDown();
			});
}
hellodiscord();
//hellotrello();
setInterval(function(){
	hellodiscord();
	//hellotrello();
}, 100000);