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
   document.location.reload();
}

//delete the bookmark
function deleteBookmark(url){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //loop through bookmarks
  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url === url){
      //remove from array
      bookmarks.splice(i, 1);
    }

  }
  //Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //reload the page
  document.location.reload();

}
//fetch bookmarks
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //to get bookmarks from localStorage

  //Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //build output
  //bookmarksResults.innerHTML = 'hi';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].site;
    var url = bookmarks[i].url;
    console.log(url);

    bookmarksResults.innerHTML += '<div class="well">' + '<h3>' + name + '  <a class="btn btn-default" target="_blank" href="' +url+ '">Visit</a> '  + '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Remove</a> ' + '</h3>' +'</div>';
  }
}
