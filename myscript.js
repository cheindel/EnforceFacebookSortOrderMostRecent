/* Looking for sort link:

   <span class="_c24" [...]

   If not contains "recent news", "neueste Meldungen", ... then click it */

var fbSortOrderButton = $('span._c24');
var fbSortOrderText = fbSortOrderButton.html();
var fbSortOrderIsRecentNews = false;
var fbSortOrderLanguage = "en";

if(fbSortOrderText == 'Neueste Meldungen werden angezeigt') {
	fbSortOrderIsRecentNews = true;
	fbSortOrderLanguage = "de";
}
if (fbSortOrderText == 'Viewing most recent stories') {
	fbSortOrderIsRecentNews = true;
	fbSortOrderLanguage = "en";
}

if (!fbSortOrderIsRecentNews)  {
  //no longer showing alert message, removed because of user feedback
  /*switch (fbSortOrderLanguage) {
		case "de":
			alert('Facebook hat die Sortiereinstellungen für den Newsfeed verändert, stelle Sortierung nach "NEUESTE MELDUNGEN" wieder her...');
			break;
		default:
			alert('Facebook has reset your sort order, changing back to "RECENT NEWS" now...');
			break;
	}*/
	document.location.href = '/?sk=h_chr';
}
