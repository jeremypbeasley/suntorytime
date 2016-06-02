// LAST.FM FUNCTIONALITY

$(document).ready(function() {
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=thisisheroic&period=7day&limit=6&api_key=3cbc1a3aa903935d08223263bcc3ba0b&format=json", function(result){
	    $.each(result.toptracks.track, function(i, track){
	        $('#lastfm').append('<a target="_blank" href="' + 'http://www.google.com/search?q=' + track.name + ' â€” ' + track.artist.name +'">' + track.name + '</a> â€” ' + track.artist.name + '<span></span><Br> ');
	    });
	});
});

