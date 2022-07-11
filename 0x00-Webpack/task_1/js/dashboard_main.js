import $ from "jquery";
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p></p>').attr('id', 'count');
$('body').append('<p>Copyright - Holberton School</p>')

let count = 0;
function updateCounter() {
    $('button').on('click', _.debounce(()=> {
        count += 1;
        $('p#count').text(`${count} clicks on the button`);
    }, 100));
}

