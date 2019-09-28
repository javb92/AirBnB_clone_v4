$(document).ready(function () {
  let AmenityChecked = [];
  $('input[type=checkbox]').change(function () {
    let name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      AmenityChecked.push(name);
      console.log(AmenityChecked);
    } else {
      AmenityChecked = AmenityChecked.filter(Amenity => Amenity !== name);
      console.log(AmenityChecked);
    }
    $('.amenities h4').text(AmenityChecked.join(', '));
  });
});
