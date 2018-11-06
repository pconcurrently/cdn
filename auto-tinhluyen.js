// ==UserScript==
// @name         Auto Tinh Luyện
// @namespace    https://phohuynh.com
// @version      1.0
// @description  Auto Linh Luyện
// @author       Po
// @match        https://truyencv.com/account/tu_luyen/luyen_khi_that/
// @grant        none
// ==/UserScript==

(function() {
    // ==UserScript==
// @name         Auto Tinh Luyện
// @namespace    https://phohuynh.com
// @version      1.0
// @description  Auto Linh Luyện
// @author       Po
// @match        https://truyencv.com/account/tu_luyen/luyen_khi_that/
// @grant        none
// ==/UserScript==

(function() {
    function myGopDo(i){
        if(!islogin){
            $('#modal-login').modal('show');
            return false;
        }
        var radGopDo = $("input[name=radGopDo]:checked").val();
        if(!radGopDo){
            alert('Hãy chọn 1 món đồ cần tinh luyện');
            return false;
        }
        var data = 'btnGopDo=1&radGopDo='+radGopDo;
        $.ajax({
            url: site+'/account/tu_luyen/luyen_khi_that/',
            type: "POST",
            data: data,
            cache: false,
            success: function (html) {
                if(html==1) {
                    console.log(`Done: ${i}`);
                }
                else if(html) {
                    console.log(`Failed: ${i}, ${html}`);
                } else {
                    console.log(`Failed ${i}.  Unexpected error!`);
                }
                if (i === soluong) {
                    console.log(`All done: ${html}`)
                }
            }
        });
        return false;
    }

    var doTinhLuyenList = {
        lttp: 1,
        ltthp: 2,
        ltcp: 3,
        tttp: 4,
        ttthp: 5,
        ttcp: 6,
        vthp: 8,
        vttp: 9,
        vtthp: 10,
        vtcp: 11
    };

    var soluong = 1000;
    var doTinhLuyen = "tttp";

    if (soluong > 0) {
        $(`input[name=radGopDo][value=${doTinhLuyenList[doTinhLuyen]}]`).attr('checked', true);
        for (var i=1; i <= soluong; i++) {
            (function(j) {
                setTimeout(function() {
                    var html = myGopDo(j);
                }, i*1500 + Math.random() * 1000);
            })(i);
        }
    }

})();

})();
