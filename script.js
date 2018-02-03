// variables
var webTitle = $('.web-title').val()
var webURL = $('.web-url').val()
var enterButton = $('.enter-button')
// page load

// event listeners
enterButton.on('click', makeCard)
// one for enter bttn, one for read bttn, one delete, and one for read all

// function for makeCard, with template lit and append
function makeCard(e) {
  e.preventDefault();
  $(`<article class="card">
      <h2 class="card-title">Website Title</h2>
      <hr class="card-hr">
      <p class="card-website">www.coolweebsite.com</p>
      <hr>
      <button aria-label="Read this bookmark" class="read-bttn">Read</button>
      <button aria-label="Delete this bookmark" class="delete-bttn">Delete</button>
    </article>`).prependTo('.main-right')
}
// disable enter bttn, inculed value so if the value is nothing in one field they both are still disabled

// enable enter bttn

// toggle read class

// remove bttn, remove closest parent article 

// count for boomarks

// count for read

// count for unread

// clear all read bookmarks

// url valid



