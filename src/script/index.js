$.ajax({
    url: "data/data.json",
    success: function(data) {
        rander(data);
    }
})

function rander(data) {
    var html = '';
    $.each(data, function(k, v) {
        html += `<div>
                    <p class="top">
                        <span><input type="radio" class="ipt">${v.name}</span>
                        <span>${v.day}</span>
                    </p>
                    <ul class="bottom">
                        <li>${v.cpu}<span>CPU</span></li>
                        <li>${v.storage}<span>内存</span></li>
                        <li>${v.system}<span>系统盘</span></li>
                        <li>${v.wsx}<span>数据盘</span></li>
                    </ul>
                </div>`
    });

    $('.section').append(html);
    $(".section").on("click", "div", function() {
        $(this).css("border", "2px solid #f4a59f").siblings().css("border", "1px solid #ccc");
        $(this).find('input[class="ipt"]').prop("checked", true);
        $(this).siblings().find('input[class="ipt"]').prop("checked", false);
    })
}