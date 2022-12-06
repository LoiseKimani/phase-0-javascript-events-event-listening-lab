

const message = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

beforeEach.addingEventListener('click', function() {
  alert('I was clicked!')
});



