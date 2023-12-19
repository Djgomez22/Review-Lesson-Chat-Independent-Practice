
let yourName = "Name";
let friendsName = "Friend name"; 

$(".sent").show();
$(".second").click(function() {
  let sent = $(".friend-input").val();
  $(".received").append("<li>"+" (you)  " + sent+" ");
    console.log(sent);
});


$(".first").click(function() {
  let sent = $(".friend-input").val();
  $(".received").append("<li>"+" (Bob) " + sent+" ");
    console.log(sent);
});

















//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}