

//JSON Album Constructor Function
function Album(name, artist, release_date, external_url, image_url) {
  this.name = name
  this.artist = artist
  this.release_date = release_date
  this.external_url = external_url
  this.image_url = image_url
}



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
          $search_list.append("<li>" + album.name + '-' + album.artist + "</li>");
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
