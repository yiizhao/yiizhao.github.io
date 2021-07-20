

// Hover effect for all cards
$(".card").hover(
    function() {
        $(this).css("transform", "scale(1.1)");
    },
    function() {
        $(this).css("transform", "")
    }
);

// Click card to jump to project website
$("#potatoes").click(
    function() {
        window.open("https://cryptic-beach-67822.herokuapp.com");
    }
);