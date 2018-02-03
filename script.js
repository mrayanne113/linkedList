// variables
var enterButton = $('.enter-button');
// var readBttn = $('.read-bttn');
var readCount = 0;
// page load

// event listeners
enterButton.on('click', makeCard);
$('.main-right').on('click', '.read-bttn', addReadClass);
$('.main-right').on('click', '.delete-bttn', removeCard);

// one for enter bttn, one for read bttn, one delete, and one for read all

// function for makeCard, with template lit and append
function makeCard(e) {
  e.preventDefault();
  var webTitle = $('.web-title').val()
  var webURL = $('.web-url').val()
  $(`<article class="card">
      <h2 class="card-title">${webTitle}</h2>
      <hr class="card-hr">
      <p class="card-website"><a target="_blank" href="www.${webURL}">${webURL}</a></p>
      <hr>
      <button aria-label="Read this bookmark" class="read-bttn">Read</button>
      <button aria-label="Delete this bookmark" class="delete-bttn">Delete</button>
    </article>`).prependTo('.main-right');
  $('.web-title').val('');
  $('.web-url').val('');
  $('.web-title').focus();
}
// disable enter bttn, inculed value so if the value is nothing in one field they both are still disabled

// enable enter bttn

// toggle read class
function addReadClass() {
  $(this).parent('article').toggleClass('read');
  $(this).closest('p').toggleClass('read-underline');
  $(this).toggleClass('read-bttn-style');
  
}

// remove bttn, remove closest parent article 
function removeCard() {
  $('.delete-bttn').closest('.card').remove();
}

// count for boomarks

// count for read

// count for unread

// clear all read bookmarks

// url valid



