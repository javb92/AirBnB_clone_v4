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
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      $('DIV#api_status').toggleClass('available');
    }
    console.log(status);
  });
});
