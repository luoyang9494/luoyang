// $.ajax({
//     url: "./data/data.json",
//     success: function(data) {
//         console.log(data);
//     }
// })

$(".section").on("click", "div", function() {
    $(this).css("border", "2px solid #f4a59f").siblings().css("border", "1px solid #ccc");
    $(this).find(".ipt").css("checked", "checked");
})