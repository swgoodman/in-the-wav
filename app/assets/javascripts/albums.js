

//JSON Album Constructor Function
function Album(name, artist, release_date, external_url, image_url) {
  this.name = name
  this.artist = artist
  this.release_date = release_date
  this.external_url = external_url
  this.image_url = image_url
}


//Search Spotify API and Return Search Results as JS Album Objects
$(function searchAPI() {
  $('#search_form').on("submit", function(e){
    e.preventDefault();

    accessToken = $("input[name='credentials']").val()

    term = $("input[name='search']").val()
    url = "https://api.spotify.com/v1/search?q=" + term + "&type=album"

    $.ajax({
      url: url,
      beforeSend: function(request) {
        request.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      }
      }).success(function(response) {
      var $search_list = $("div#search_results ul")
      $search_list.html("")

        $.each(response.albums.items, function(name, value) {
          let name_attr = value.name
          let artist_attr = value.artists[0].name
          let release_attr = value.release_date
          let url_attr = value.external_urls.spotify
          let image_attr = value.images[0].url

          let album = new Album(name_attr, artist_attr, release_attr, url_attr, image_attr);
          $search_list.append("<li>"
            + album.name
            + ' - '
            + album.artist
            + '<form id="add_album"><input id="name" value="' + album.name + '" type="hidden"><input id="artist" value="' + album.artist + '" type="hidden"><input id="release" value="' + album.release_date + '" type="hidden"><input id="url" value="' + album.external_url + '" type="hidden"><input id="image" value="' + album.image_url + '" type="hidden"><input value="Add" type="submit">'
            + "</li>");
          console.log(album.name);
          console.log(album.artist);
          console.log(album.release_date);
          console.log(album.external_url);
          console.log(album.image_url);

          // console.log(value.artists[0].name);
          // console.log(value.name);
          // console.log(value.release_date);
          // console.log(value.external_urls.spotify);
          // console.log(value.images[0].url);
        })
        $( '#search_form' ).each(function(){
          this.reset();
        });
    }).error(function(notNeeded){
      alert("Error, please try again. If error persists, please log out and back in again.")
    });


  });
});
