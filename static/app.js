function displaySongs(results) {
  console.log(results);

  for(var i=0; i < results['tracks']['items'].length; i++) {
    $('#songs').append('<iframe src=https://embed.spotify.com/?uri=spotify:' + results['tracks']['items'][i]['external_urls']['spotify'] + ' width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  }
}

function bandSearch(evt) {
  evt.preventDefault();

  $('#songs').empty();

  data = {
      'band': $('#search').val()
  };

  $.get('/search', data, displaySongs);
}


$('#submit-search').on('click', bandSearch);