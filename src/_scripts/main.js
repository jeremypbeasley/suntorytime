// LAST.FM TOP TRACKS

// function loadTracks() {
//   $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=thisisheroic&period=7day&limit=6&api_key=3cbc1a3aa903935d08223263bcc3ba0b&format=json', function(result) {
//     var output = "";
//     $.each(result.toptracks.track, function(i, track){
//       output += '<a target="_blank" href="' + 'http://www.google.com/search?q=' + track.name + ' &#8212; ' + track.artist.name +'">' + track.name + '</a> &#8212; ' + track.artist.name + '<span></span><Br> ';
//     });
//     document.getElementById("lastfm").innerHTML = output;
//   });
// };

// loadTracks();

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


// MUSIC

// function listProducts(sortedlist) {
//   var output = '';
//   $.each(sortedlist, function(i) {
//     output += '<div class="MusicItem">';
//     output += '<div class="MusicCover" style="background-image: url(' + sortedlist[i].content + ')"></div>';
//     output += '<a class="MusicTitle" href="' + sortedlist[i].description + '">' + sortedlist[i].name + '</a>';
//     output += '</div>';
//   });
//   output += '';
//   document.getElementById("MusicContainer").innerHTML = output;
// };

// // function sortProducts(array, key) {
// //     return array.sort(function(a, b) {
// //         var x = a[key];
// //         var y = b[key];
// //         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
// //     });
// // }

// var productsListSorted = "";

// function callProducts() {
//   $.getJSON('http://app.dropmark.com/355854.json?key=638be65e149826ec8892&callback=?', function(result) {
//     var productsList = result.items;
//     //productsListSorted = sortProducts(productsList, 'name');
//     listProducts(productsList);
//   });
// }

// callProducts();

$('body').on('click', '.Project', function (){
	if ($(this).attr('data-link')) {
		newlocation = $(this).attr('data-link');
	  window.location = newlocation;
	  return false;
	} else {
		// do nothing
		// $('.ProjectThumbnailInside').fadeTo(0, 0);
		// $(this).find('.ProjectThumbnailInside').fadeTo(100, 1);
	}
});

$('body').on('click', '.MusicItem', function (){
  newlocation = $(this).find(".MusicTitle").attr("href");
  window.open(
    newlocation,
    '_blank'
  );
  console.log(newlocation)
  return false;
});
