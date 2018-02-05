// variables
var $enterButton = $('.enter-button');

var readCount = 0;
// page load




$enterButton.on('click', validateTheLink);
$('web-title').on('keyup', enableBttn);
$('.main-right').on('click', '.read-bttn', addReadClass);
$('.main-right').on('click', '.delete-bttn', removeCard);
$('.main-right').on('click', 'a', consoleThis)


// one for enter bttn, one for read bttn, one delete, and one for read all



// function for makeCard, with template lit and append
function makeCard() {
  // e.preventDefault();
  var webTitle = $('.web-title').val()
  var webURL = $('.web-url').val()
  $(`<article class="card">
      <h2 class="card-title">${webTitle}</h2>
      <hr class="card-hr">
      <p class="card-website"><a class="website-link" target="_blank" href="www.${webURL}">${webURL}</a></p>
      <hr>
      <button aria-label="Read this bookmark" class="read-bttn">Read</button>
      <button aria-label="Delete this bookmark" class="delete-bttn">Delete</button>
    </article>`).prependTo('.main-right');
  clearInputs();
  
}
// disable enter bttn, inculed value so if the value is nothing in one field they both are still disabled
function disableBttn() {
  
}

// enable enter bttn
function enableBttn() {
  if (enterButton.val() = '') {
    $enterButton.disabled = true;
  }
}

// clear inputs
function clearInputs() {
  $('.web-title').val('');
  $('.web-url').val('');
  $('.web-title').focus();
}

// toggle read class
function addReadClass() {
  $(this).parent('article').toggleClass('read');
  $(this).toggleClass('read-bttn-style');
   var $anchorTag = $(this).siblings('.card-website')[0].firstChild;
   console.log(anchorTag)
   // $anchorTag.toggleClass('read-underline')
  // $('.card').closest('p').toggleClass('read-underline');
}

// remove bttn, remove closest parent article 
function removeCard() {
  $(this).parent().remove();
}

// count for boomarks

// count for read

// count for unread

// clear all read bookmarks

// url valid
function validateTheLink(e) {
  e.preventDefault();
    var linkInput = $('.web-url').val();
    var linkRegex =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(linkRegex.test(linkInput) === true) {
        $('.required-input').text('');
        $enterButton.attr('disabled', false);
        makeCard();
    } else {
        $('.required-input').text('Please enter valid URL');
        $enterButton.attr('disabled', true);
    }
}


function consoleThis(e){
  e.preventDefault()
  console.log()
}