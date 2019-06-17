//listen for form-submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e){
   //console.log("it works");
   var siteName = document.getElementById("siteName").value; //for the actual value we add value, otherwise we just get the elemenet
   var siteUrl = document.getElementById("siteURL").value;

   var bookmark = {
      site: siteName,
      url: siteUrl
   }
/*
   localStorage.setItem('test', 'Hello World'); //saves Hello World as test in local storage
   console.log(localStorage.getItem('test'));
   localStorage.removeItem('test');
   console.log(localStorage.getItem('test'));
*/
//test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    var bookmarks = [];
    bookmarks.push(bookmark);//adds to the array
    //set to local localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  else{ //get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //will turn string into JSON
    //add bookmark to array:
    bookmarks.push(bookmark);
    //Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }

   console.log(bookmark);

   //save form from submitting
   e.preventDefault();
}

//fetch bookmarks

function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //will turn string into JSON


}
