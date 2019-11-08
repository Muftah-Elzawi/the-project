 $(document).ready(function(){
	// body...
	
	var $garden = $('#garden-body')			
	// var $bookTitel = $('.book-titel');
	// var $bookDis = $('.book-dis');
	 $garden.html('')

	
		
		for (var i = 0; i < books.length; i++) {
			var $book = books[i]
			var $bookDiv = $('<div class="book"></div>');
			// var $bookImg = $('<img class="book-img" src="">');
			console.log($bookDiv)
			console.log($book.title)
			 $bookDiv.html('<img class="book-img" id="'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="'+i+'"  href="#">'+ $book.title +'</a><p id="'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="'+i+'">'+$book.genre+'</p>');
			 console.log($bookDiv)
			$bookDiv.appendTo($garden)
			
			
		}
	

})