 var HttpClient = function() {
 this.get = function(aUrl, aCallback) {
 var anHttpRequest = new XMLHttpRequest();
 anHttpRequest.onreadystatechange = function() { 
 if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
 aCallback(anHttpRequest.responseText);
 }
 anHttpRequest.open( "GET", aUrl, true ); 
 anHttpRequest.send( null ); 
 }
 }
 var theurl='https://graph.facebook.com/v3.0/2868404606717405?fields=source&access_token=EAAAAUaZA8jlABAODr19Eo59aeg8AYZB959wf7rHjgJkl0WAzKxL4Yl3MsVreHHUJAHZCOfaxmZBknjCD9fZBoEuEXLQWAJztEnSVBQsILOAPEEaV0YKidA0qP8dAKTeKXo9yE4xnm4RDCXDEsCIFF5AK9lgDL1AhJYSpJMIj9kgZDZD';
 var client = new HttpClient();
 client.get(theurl, function(response) { 
 jwplayer('playerSpuurExoMyae').setup({
file: JSON.parse(response).source,
"title": "IA-CD4", "description": "MyWEBs", "image": "http://a2.mzstatic.com/us/r1000/105/Music/v4/d1/bd/6a/d1bd6a0c-5850-0f17-6e15-c83c5ae6ea70/IceAge4_iTunes_FINAL.200x200-75.jpg",
width: '100%',
aspectratio: '16:9',
autostart: 'false',
primary: 'flash'
});

  

 }); 