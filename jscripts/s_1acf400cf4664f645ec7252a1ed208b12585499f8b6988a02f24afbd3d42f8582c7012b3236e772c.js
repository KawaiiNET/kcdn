!function(){"use strict";var s=function(n){return/^\d+$/.test(n)},d={1193929:!0},p={},n=function(n,t){for(var a=0,r=n;a<r.length;a++){var i=r[a],e=parseInt(i,10)%100<t,_=d.hasOwnProperty(i);if(!p.hasOwnProperty(i)&&(e||_))return!0}return!1}(function(n){var t={},a=[];if(n._bizo_data_partner_id&&(t[n._bizo_data_partner_id]=!0,a.push(n._bizo_data_partner_id)),n._bizo_data_partner_ids)for(var r=0,i=n._bizo_data_partner_ids;r<i.length;r++)!t[e=i[r]]&&s(e)&&(t[e]=!0,a.push(e));if(n._linkedin_data_partner_id&&!t[n._linkedin_data_partner_id]&&(t[n._linkedin_data_partner_id]=!0,a.push(n._linkedin_data_partner_id)),n._linkedin_data_partner_ids)for(var e,_=0,d=n._linkedin_data_partner_ids;_<d.length;_++)!t[e=d[_]]&&s(e)&&(t[e]=!0,a.push(e));return a}(window),10)?"https://snap.licdn.com/li.lms-analytics/insight.beta.min.js":"https://snap.licdn.com/li.lms-analytics/insight.old.min.js",t=document.createElement("script"),a=document.getElementsByTagName("script")[0];t["async"]=!0,t.src=n,a.parentNode&&a.parentNode.insertBefore(t,a)}();
