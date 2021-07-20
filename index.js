

// Hover effect for all cards
$(".card").hover(
    function() {
        $(this).css("transform", "scale(1.1)");
    },
    function() {
        $(this).css("transform", "")
    }
);