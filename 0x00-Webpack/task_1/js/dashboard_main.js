import $ from "jquery";
import _ from "lodash";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p></p>').attr('id', 'count');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    let count = 0;
    $('button').on('click', ()=> {
        count += 1;
        $('p#count').text(`${count} clicks on the button`);
    });
}

