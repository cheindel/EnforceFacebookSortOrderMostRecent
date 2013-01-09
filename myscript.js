/* Looking for sort link:
   
   <a class="sortLink _p" href="#" aria-haspopup="true" aria-expanded="false" rel="toggle" id="u_ps_0_0_2" role="button">SORTIEREN: NEUESTE MELDUNGEN</a>
   
   If not contains "recent news", "neueste Meldungen", ... then click it */

var fbSortOrderButton = $('a.sortLink._p');
var fbSortOrderText = fbSortOrderButton.html();
var fbSortOrderIsRecentNews = false;
var fbSortOrderLanguage = "en";

if(fbSortOrderText == 'SORTIEREN: NEUESTE MELDUNGEN') {
	fbSortOrderIsRecentNews = true;
	fbSortOrderLanguage = "de";
}
if (fbSortOrderText == 'SORT: MOST RECENT') {
	fbSortOrderIsRecentNews = true;
	fbSortOrderLanguage = "en";
}
if(fbSortOrderText == 'SORTIEREN') {
	fbSortOrderIsRecentNews = false;
	fbSortOrderLanguage = "de";
}
if (fbSortOrderText == 'SORT') {
	fbSortOrderIsRecentNews = false;
	fbSortOrderLanguage = "en";
}	

if (!fbSortOrderIsRecentNews)  {
	switch (fbSortOrderLanguage) {
		case "de":
			alert('Facebook hat die Sortiereinstellungen für den Newsfeed verändert, stelle Sortierung nach "NEUESTE MELDUNGEN" wieder her...');
			break;
		default:
			alert('Facebook has reset your sort order, changing back to "RECENT NEWS" now...');
			break;
	}
	document.location.href = '/?sk=h_chr';
}