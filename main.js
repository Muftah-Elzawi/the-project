
// first we are traing to creat the display function that will be responseble for filling the bage with data from our data file

// the display finction works by 
// we are looping over the books array which countanies our books
// then puting our data in a div
// then push that div to its contaner 
var $DisplyaPage  = function(){
	// body...
	
	var $garden = $('#garden-body')			
	 $garden.html('')

		for (var i = 0; i < books.length; i++) {
			var $book = books[i]
			var $bookDiv = $('<div class="book"></div>');
			$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><div class="bookTitelDiv"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a></div><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description.slice(0,$book.description.length/4) +'<span class="dots" id="dotsm'+i+'">...</span><span class="more" id="morem'+i+'"> "'+ $book.description.slice(0,$book.description.length/1.333333333333)  +'"</span></p> <p class="genre" id="g'+i+'">'+$book.genre+'</p><button  id="'+i+'" class="toRead-btn">To Read</button><button class="btn" id="m'+i+'">Read more</button>');
			$bookDiv.appendTo($garden)
		}

		addSearchGenre()
		addToRead()
		readMore()
}

 $(document).ready($DisplyaPage())

 // here we are traing to make our search function
 // the search works by 
 // giving on click function to the input tag, and monitring the enter key
 // if the search is not empty and the key preased then we loob over the array of data and tray to find any thing similar the that genre
 // otherways if its empty we will retrive our display function

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
					$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><div class="bookTitelDiv"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a></div><p id="a'+i+'" class="book-auther">by : '+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description.slice(0,$book.description.length/4) +'<span  class="dots" id="dotsm'+i+'">...</span><span class="more" id="morem'+i+'"> "'+ $book.description.slice(0,$book.description.length/1.333333333333)  +'"</span></p> <p class="genre" id="g'+i+'">'+$book.genre+'</p><button  id="'+i+'" class="toRead-btn">To Read</button><button class="btn" id="m'+i+'">Read more</button>');
					$bookDiv.appendTo($garden)
				}
			}
	    }
	} else {
		$DisplyaPage()
			}
});
}

// here in notify we are traing to git the data from the div which have been cliced by the button
// so we have toread button in one class and also has a unique id for it all 
// by giving a on click property to the notify function first we ar gitting the id of that button
// by gitting the id of the button and because the id of the other elemints in that div are disgned in way to be similer to it so we can take the data from it and push to ToRead list
// so firs we take the id from the button then we take the other data from it using jquary and give it to factory function MakeToRead which will push to the array 

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

// here we are making the disply for the To Read List page
// by the same anolge in but from a diffrint arry which is the disply function 
 
$('#ToReadList').on('click', function(){

	var $garden = $('#garden-body')			
	$garden.html('')

		for (var i = 0; i < toRead.length; i++) {
			var $book = toRead[i]
			var $bookDiv = $('<div class="book"></div>');
			$bookDiv.html('<img class="book-img" id="i'+ i +'"  src="' +$book.img +'"><div class="bookTitelDiv"><a class="book-tital" id="t'+i+'"  href="#">'+ $book.title +'</a><div><p id="a'+i+'" class="book-auther">'+ $book.auther +'</p><p id="d'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="g'+i+'">'+$book.genre+'</p>');
			$bookDiv.appendTo($garden)
		}
	
})

//  here we are giving the on click function to retrev the home page
$('#home1').on('click', function(){
	$DisplyaPage()
} )


// here we are making the read more function to make our discription shorter by also by taking the id of the preseed button and then giting the 
// dots id and more id and toggol between ther style.display property from non to inline
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

// giving on click function to the readmore button
function readMore(){
$( ".btn" ).on( "click",  myFunction );
}
