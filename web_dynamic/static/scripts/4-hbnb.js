$(document).ready(function () {
  let AmenityChecked = [];
  $('input[type=checkbox]').change(function () {
    const name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      AmenityChecked.push(name);
    } else {
      AmenityChecked = AmenityChecked.filter(Amenity => Amenity !== name);
    }
    $('.amenities h4').text(AmenityChecked.join(', '));
  });
  $.get('http://localhost:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      $('DIV#api_status').toggleClass('available');
    }
    console.log(status);
  });
  $('.places article').remove();
  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    data: JSON.stringify({}),
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
      }
    }
  });
  $('button').on('click', function () {
    var checkons = {};
    $.each($("input[type='checkbox']:checked"), function () {
      checkons[($(this).attr('data-id'))] = $(this).attr('data-name');
    });
      $('.places article').remove();
      const amen_Param = { amenities: Object.keys(checkons) };
      $.ajax({
	  type: 'POST',
	  url: 'http://localhost:5001/api/v1/places_search/',
	  data: JSON.stringify(amen_Param),
	  contentType: 'application/json',
	  success: function (data) {
              for (let i = 0; i < data.length; i++) {
		  $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
              }
	  }
      });
      console.log(amen_Param);
  });
});
