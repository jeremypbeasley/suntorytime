// LAST.FM TOP TRACKS

function loadTracks() {
  // getting JSON from my lastfm account via their API 
  $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=thisisheroic&period=7day&limit=6&api_key=3cbc1a3aa903935d08223263bcc3ba0b&format=json', function(result) {
    // making an empty variable for the big ol string you're making
    var output = "";
    // looping through each item
    $.each(result.toptracks.track, function(i, track){
      output += '<a target="_blank" href="' + 'http://www.google.com/search?q=' + track.name + ' &#8212; ' + track.artist.name +'">' + track.name + '</a> &#8212; ' + track.artist.name + '<span></span><Br> ';
    });
    // putting the shit all together
    document.getElementById("lastfm").innerHTML = output;
  });
};

loadTracks();

// TYPE EFFECT (WITH SIZE CONDITION)

if (document.documentElement.clientWidth < 800) {
	$(function(){
		$(".WelcomeMessage").typed({
	    strings: ["My son ^200 says that ^100 I ^100 “make stuff ^100 for the ^100 Internet.” ^400 <br>I’ll take that."],
	    typeSpeed: 20,
	    showcursor: false,
	    contentType: 'html',
	    // onStringTyped: function() {
	    // 	$('p, .divider').delay(800).fadeTo( "slow", 1 );
	    // },
		});
	});
}
if (document.documentElement.clientWidth > 800) {
	$(function(){
		$(".WelcomeMessage").typed({
	    strings: ["My son ^200 says that ^100 I ^100 “make stuff ^100 for the ^100 Internet.” ^400 I’ll take that."],
	    typeSpeed: 20,
	    showcursor: false,
	    contentType: 'html',
	    // onStringTyped: function() {
	    // 	$('p').delay(800).fadeTo( "slow", 1 );
	    // },
		});
	});
}
