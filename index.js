'use strict';
console.log(Date_text);
function getDogImage() {
    const timeLocation= $('#Date_text').val();
    console.log(timeLocation);
    console.log(Date_text);
  fetch(`
  https://api.nasa.gov/planetary/apod?date=${timeLocation}&api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again with correct formatting or a date closer and before our current date.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.hdurl}" class="results-img">`
  )
  $('#text_des').text(`${responseJson.explanation}`);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});