// variables
var enterButton = $('.enter-button');
var webTitleInput = $('.web-title');
var webUrlInput = $('.web-url');



enterButton.on('click', makeCard);
$('.main-right').on('click', '.read-bttn', addReadClass);
$('.main-right').on('click', '.delete-bttn', removeCard);

webTitleInput.on('input', disableEnter);
webUrlInput.on('input', disableEnter);




// function for makeCard, with template lit and append
function makeCard() {
  $('.required-input').text('');
  var webTitle = $('.web-title').val();
  var webURL = $('.web-url').val();
  $(`<article class="card">
      <h2 class="card-title">${webTitle}</h2>
      <hr class="card-hr">
      <p class="card-website"><a class="website-link" target="_blank" href="${webURL}">${webURL}</a></p>

      <hr>
      <button aria-label="Read this bookmark" class="read-bttn">Read</button>
      <button aria-label="Delete this bookmark" class="delete-bttn">Delete</button>
    </article>`).prependTo('.main-right');
  clearInputs();
  allCounts()
  
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
  allCounts();
  $(this).parent('article').toggleClass('read');
  $(this).toggleClass('read-bttn-style');
   // var $anchorTag = $(this).siblings('.card-website')[0].firstChild;
   // console.log(anchorTag)
   // $anchorTag.toggleClass('read-underline')
  // $('.card').closest('p').toggleClass('read-underline');
}

// // remove bttn, remove closest parent article 
function removeCard() {
  $(this).parent().remove();
  allCounts();
}

// disable enter button
function disableEnter() {
  if (webTitleInput.val().length > 0 && webUrlInput.val().length > 0){
    enterButton.removeAttr('disabled');
    validateTheLink();
  } else {
    enterButton.attr('disabled', '');
    $('.required-input').text('Please enter valid Title & URL');
   }
}



// count for boomarks 
// count for read
// count for unread
function allCounts() {
  var unreadCount =  $('.card').length - $('.read').length;
  $('.unread-count-display').text(unreadCount);
  $('.bookmark-count-display').text($('.card').length);
  $('.read-count-display').text($('.read').length);
}

// clear all read bookmarks

// url valid

function validateTheLink() {
  
    var linkInput = $('.web-url').val();
    var linkRegex =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(linkRegex.test(linkInput) === true) {
        $('.required-input').text('');
        enterButton.attr('disabled', false);
        makeCard();
    } else {
        $('.required-input').text('Please enter valid URL');
        enterButton.attr('disabled', true);
    }
}




