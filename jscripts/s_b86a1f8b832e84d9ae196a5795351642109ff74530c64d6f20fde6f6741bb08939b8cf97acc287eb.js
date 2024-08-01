function pixel(uri) {
    var img = new Image();
    img.src = uri;
    document.body.appendChild(img);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-46643352-5']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script');
ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
})();

var _paq = _paq || [];
_paq.push(["setCookieDomain", "*.cgnetwork.uk"]);
_paq.push(["setDomains", ["*.cgnetwork.uk"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//analytics.cgnetwork.uk/";
_paq.push(['setTrackerUrl', u+'piwik.php']);
_paq.push(['setSiteId', '1']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

pixel('https://gaming.cgnetwork.uk/task.php');