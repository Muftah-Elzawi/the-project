var $DisplyaPage  = function(){
	// body...
	
	var $garden = $('#garden-body')			
	 $garden.html('')

		for (var i = 0; i < books.length; i++) {
			var $book = books[i]
			var $bookDiv = $('<div class="book"></div>');
			$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description.slice(0,$book.description.length/4) +'<span class="dots" id="dotsm'+i+'">...</span><span class="more" id="morem'+i+'"> "'+ $book.description.slice(0,$book.description.length/1.333333333333)  +'"</span></p> <p class="genre" id="g'+i+'">'+$book.genre+'</p><button  id="'+i+'" class="toRead-btn">To Read</button><button class="btn" id="m'+i+'">Read more</button>');
			$bookDiv.appendTo($garden)
		}

		addSearchGenre()
		addToRead()
		readMore()
}

 $(document).ready($DisplyaPage())

 function addSearchGenre(){

 $("#search-input").on('keydown', function (e) {
 	var $search = $('#search-input').val()
 	
 	
 	if ($search !== '') {

	    if (e.keyCode === 13) {

	        var $garden = $('#garden-body')			
			$garden.html('')

	        for (var i = 0; i < books.length; i++) {

	        	if (books[i].genre.includes($search)) {
					var $book = books[i]
					var $bookDiv = $('<div class="book"></div>');
					$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description.slice(0,$book.description.length/4) +'<span  class="dots" id="dotsm'+i+'">...</span><span class="more" id="morem'+i+'"> "'+ $book.description.slice(0,$book.description.length/1.333333333333)  +'"</span></p> <p class="genre" id="g'+i+'">'+$book.genre+'</p><button  id="'+i+'" class="toRead-btn">To Read</button><button class="btn" id="m'+i+'">Read more</button>');
					$bookDiv.appendTo($garden)
				}
			}
	    }
	} else {
		$DisplyaPage()
			}
});
}



function notify() {

  alert( $(this).attr('id') );
  console.log($(this))
  var index = $(this).attr('id') 

 var $bookImg = $('#i'+index).attr('src')
 var $bookTitel = $('#t'+index).text()
 var $bookAuther = $('#a'+index).text()
 var $bookDis = $('#d'+index).text()
 var $bookgenre = $('#g'+index).text()
 var $stats = 1;

return MakeToRead($bookTitel, $bookAuther, $bookgenre, $bookImg, $bookDis, $stats)
}

function addToRead(){

$( ".toRead-btn" ).on( "click", notify );

}




function MakeToRead(title, auther, genre, img, description, stats) {
	// body...
	var toReadobj = {
		title :title ,
		auther : auther,
		genre : genre,
		img : img,
		description : description,
		stats : stats
	}

	toRead.push(toReadobj)
	console.log(toRead)
}
 
$('#ToReadList').on('click', function(){

	var $garden = $('#garden-body')			
	$garden.html('')

		for (var i = 0; i < toRead.length; i++) {
			var $book = toRead[i]
			var $bookDiv = $('<div class="book"></div>');
			$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><p id="a'+i+'" class="book-auther">'+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="g'+i+'">'+$book.genre+'</p>');
			$bookDiv.appendTo($garden)
		}
	
})


$('#home1').on('click', function(){
	$DisplyaPage()
} )

function myFunction() {
	
	var index = $(this).attr('id') 
 
  var dots = document.getElementById('dots'+index);
  var moreText = document.getElementById('more'+index);
  var btnText = index;


  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


function readMore(){
$( ".btn" ).on( "click",  myFunction );
}
