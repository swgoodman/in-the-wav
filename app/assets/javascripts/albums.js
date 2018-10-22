

//JSON Album Constructor Function
function Album(name, artist, release_date, external_url, image_url) {
  this.name = name
  this.artist = artist
  this.release_date = release_date
  this.external_url = external_url
  this.image_url = image_url
}


//Search Spotify API and Return Search Results as JS Album Objects
$(function () {

  $('#search_form').on("submit", function(e) {
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
      let i = 0
      $.each(response.albums.items, function(name, value) {

        let name_attr = value.name
        let artist_attr = value.artists[0].name
        let release_attr = value.release_date
        let url_attr = value.external_urls.spotify
        let image_attr = value.images[0].url

        let album = new Album(name_attr, artist_attr, release_attr, url_attr, image_attr);
        $search_list.append('<li class"returned_albums">' +
          album.name +
          ' - ' +
          album.artist +
          '<form class="add_album" id="' + i + '"><input type=hidden name="authenticity_token" value="' +  '<%= form_authenticity_token %>'  + '"><input id="name" value="' + album.name + '" type="hidden"><input id="artist" value="' + album.artist + '" type="hidden"><input id="release" value="' + album.release_date + '" type="hidden"><input id="url" value="' + album.external_url + '" type="hidden"><input id="image" value="' + album.image_url + '" type="hidden"><input type="submit" value="Add" name="commit">' +
          '</li>');
        i++
      })

      $(function createAlbum() {

        $("form.add_album").on('submit', function(e){
          alert("hey guys")
          e.preventDefault();
          url = this.action

          data = {
            'authenticity_token': $("input[name='authenticity_token']").val(),
            album: {
              'name': $("#name").val(),
              'artist': $("#artist").val(),
              'release_date': $("#release").val(),
              'release_external_url': $("#url").val(),
              'release_image_url': $("#image").val(),
            }
          };
          $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function(response) {
              debugger
            }
          })
        })
      });
      $('#search_form').each(function() {
        this.reset();
      });
    }).error(function(notNeeded) {
      alert("Error, please try again. If error persists, please log out and back in again.")
    });lin
  });
});
