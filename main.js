var $DisplyaPage  = function(){
	// body...
	
	var $garden = $('#garden-body')			
	 $garden.html('')

		for (var i = 0; i < books.length; i++) {
			var $book = books[i]
			var $bookDiv = $('<div class="book"></div>');
			$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description.slice(0,$book.description.length/2) +'<span id="dots">...</span><span id="more"> "'+ $book.description.slice(0,$book.description.length/2)  +'"</span></p> <p class="genre" id="g'+i+'">'+$book.genre+'</p><button id="'+i+'" class="toRead-btn">To Read</button><button onclick="myFunction()" id="myBtn'+i+'">Read more</button>');
			$bookDiv.appendTo($garden)
		}
		
}

 $(document).ready($DisplyaPage())

 $("#search-input").on('keyup', function (e) {
 	var $search = $('#search-input').val()
 	
 	
 	if ($search !== '') {

	    if (e.keyCode === 13) {

	        var $garden = $('#garden-body')			
			$garden.html('')

	        for (var i = 0; i < books.length; i++) {

	        	if (books[i].genre.includes($search)) {
					var $book = books[i]
					var $bookDiv = $('<div class="book"></div>');
					$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description.slice(0,$book.description.length/2) +'<span id="dots">...</span><span id="more"> "'+ $book.description.slice(0,$book.description.length/2)  +'"</span></p> <p class="genre" id="g'+i+'">'+$book.genre+'</p><button id="'+i+'" class="toRead-btn">To Read</button><button onclick="myFunction()" id="myBtn'+i+'">Read more</button>');
					$bookDiv.appendTo($garden)
				}
			}
	    }
	} else {
		$DisplyaPage()
			}
});

// $().on('click',function () {
//  	// body...
// 	 	  var $id = $(this)attr("id")
// 	 	  console.log($id)
//  })
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


$( "button" ).on( "click", notify );


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
			$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="g'+i+'">'+$book.genre+'</p>');
			$bookDiv.appendTo($garden)
		}
	
})



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

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