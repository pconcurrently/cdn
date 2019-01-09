'use strict';

var site = "https://truyencv.com";

function export_items() {
    var items_list = {};
    var ignoreCategories = ["caidatrutdo", "phidaolinhmach"];

    $("tr").each(function (index, el) {
        var $td = $(el).find("td");
        var parentId = $td.parents(".tab-pane").attr("id");
        if ($td.length) {
            var name = $($td[0]).text().toLowerCase();
            var ch_in = $($td[1]).find("input").val();
            var ch_out = $($td[2]).find("input").val();
            var id = $($td[1]).find("input").attr("id").match(/\d+/)[0];
        }

        if (!items_list[id] && ignoreCategories.indexOf(parentId) === -1) {
          items_list[id] = { id, name, ch_in, ch_out, category: parentId };
        }
    });

    console.log(items_list);
};

function myGieoHat(txtTinhNhanh) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var selDuocThao = $("#selDuocThao").val();
    var chkThueTuoi = $('#chkThueTuoi').prop("checked");
    if (chkThueTuoi) chkThueTuoi = 1;
    else chkThueTuoi = 0;
    var chkBaoVe = $('#chkBaoVe').prop("checked");
    if (chkBaoVe) chkBaoVe = 1;
    else chkBaoVe = 0;
    var data = 'btnGieoHat=1&selDuocThao=' + selDuocThao + '&chkThueTuoi=' + chkThueTuoi + '&chkBaoVe=' + chkBaoVe + '&txtTinhNhanh=' + txtTinhNhanh;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/tu_luyen/duoc_vien/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            location.reload();
        }
    });
    return false;
}

function myTuoiNuoc(duocvien_id) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var data = 'btnTuoiNuoc=1&duocvien_id=' + duocvien_id;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/tu_luyen/duoc_vien/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            location.reload();
        }
    });
    return false;
}

function myThuHoach(duocvien_id) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var data = 'btnThuHoach=1&duocvien_id=' + duocvien_id;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/tu_luyen/duoc_vien/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            location.reload();
        }
    });
    return false;
}

function myGieoHatBang(txtTinhNhanh) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var selDuocThao = $("#selDuocThao").val();
    var chkThueTuoi = $('#chkThueTuoi').prop("checked");
    if (chkThueTuoi) chkThueTuoi = 1;
    else chkThueTuoi = 0;
    var chkBaoVe = $('#chkBaoVe').prop("checked");
    if (chkBaoVe) chkBaoVe = 1;
    else chkBaoVe = 0;
    var data = 'btnGieoHat=1&selDuocThao=' + selDuocThao + '&chkThueTuoi=' + chkThueTuoi + '&chkBaoVe=' + chkBaoVe + '&txtTinhNhanh=' + txtTinhNhanh;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/bang_phai/duoc_vien/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            location.reload();
        }
    });
    return false;
}

function myTuoiNuocBang(duocvien_id) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var data = 'btnTuoiNuoc=1&duocvien_id=' + duocvien_id;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/bang_phai/duoc_vien/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            location.reload();
        }
    });
    return false;
}

function myThuHoachBang(duocvien_id) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var data = 'btnThuHoach=1&duocvien_id=' + duocvien_id;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/bang_phai/duoc_vien/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            location.reload();
        }
    });
    return false;
}

function myHacThi(hacthi_id, name, val, amount) {
    var data = 'btnTuLuyenHacThi=1&hacthi_id=' + hacthi_id;
    $("button").attr("disabled", true);
    $.ajax({
        url: site + '/account/tu_luyen/quy_thi/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            if (html == 1) {
                $("#hacthi_" + hacthi_id).remove();
                $("#ban_" + hacthi_id).remove();
                // Send notification
                msg = `Đã mua ${name} với giá ${val}/c, số lượng: ${amount} cái.`;
                Notification.onclick = function (event) {
                    event.preventDefault();
                    window.open('https://truyencv.com/account/message/?t=hethong', '_blank');
                };
                notification = new Notification(msg);
            } else if (html) {
                console.log("Mua không thành công!");
            } else {
                location.reload();
            }
            $("button").attr("disabled", false);
        }
    });
    return false;
}

function myLuyenkhi() {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var radLuyenKhi = $("input[name=radLuyenKhi]:checked").val();
    if (!radLuyenKhi) {
        alert('Hãy chọn 1 pháp khí để luyện chế');
        return false;
    }
    var txtName = $('#txtName').val();
    if (!txtName) {
        $("#txtName").focus();
        $("#txtName").addClass("frmerror");
        return false;
    }
    var radDanLo = $("input[name=radDanLo]:checked").val();
    if (!radDanLo) radDanLo = '';
    var radPhuTro = $("input[name=radPhuTro]:checked").val();
    if (!radPhuTro) radPhuTro = '';
    var radLoaiPhapKhi = $("input[name=radLoaiPhapKhi]:checked").val();
    if (!radLoaiPhapKhi) radLoaiPhapKhi = '';
    var data = 'btnLuyenKhi=1&radLuyenKhi=' + radLuyenKhi + '&txtName=' + txtName + '&radDanLo=' + radDanLo + '&radPhuTro=' + radPhuTro + '&radLoaiPhapKhi=' + radLoaiPhapKhi;
    $.ajax({
        url: site + '/account/tu_luyen/luyen_khi_that/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            if (html == 1) {
                window.location.reload();
            }
            else if (html) {
                console.log(html);
                var phapkhiName = getName();
                $("#txtName").val(phapkhiName);
                changetext();

                myLuyenkhi();
            }
            else {
                window.location.reload();
            }
        }
    });
    return false;
}

function myGopDo(i) {
    if (!islogin) {
        $('#modal-login').modal('show');
        return false;
    }
    var radGopDo = $("input[name=radGopDo]:checked").val();
    if (!radGopDo) {
        alert('Hãy chọn 1 món đồ cần tinh luyện');
        return false;
    }
    var data = 'btnGopDo=1&radGopDo=' + radGopDo;
    $.ajax({
        url: site + '/account/tu_luyen/luyen_khi_that/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            if (html == 1) {
                console.log(`Done: ${i}`);
            }
            else if (html) {
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

function myLoginBaoKho(txtPassword) {
    var data = 'btnLoginBaoKho=1&txtPassword=' + txtPassword;
    $.ajax({
        url: site + '/account/bang_phai/bao_kho_duong/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            if (html != 1) {
                window.location.reload();
            }
        }
    });
    return false;
}

function myTimPhapKhi(txtTenPhapKhi) {
  if (!txtTenPhapKhi) {
    return null;
  }
  var data = "btnTimPhapKhi=1&txtTenPhapKhi=" + txtTenPhapKhi;
  $.ajax({
    url: site + "/account/bang_phai/chap_su_duong/",
    type: "POST",
    data: data,
    cache: false,
    success: function(html) {
      if (html) {
          return $($(html).find("input")[0]).attr("id").match(/\d+/)[0];
      }
      return null;
    }
  });
}

function myLuyendan(radLuyenDan, radDanLo, radPhuTro) {
    var data = 'btnLuyenDan=1&radLuyenDan=' + radLuyenDan + '&radDanLo=' + radDanLo + '&radPhuTro=' + radPhuTro;

    var fn = $.ajax({
        url: site + '/account/tu_luyen/luyen_dan_that/',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            if (html == 1) {

            }
            else if (html) {
                fn();
            }
            else {
                fn();
            }
        }
    });
    fn();
}

function myHinhduong(user_id, camNgonTime, cb){
    var data = "btnHinhDuong=1&txtMember=" + user_id + "&txtCamNgon=" + camNgonTime + "&txtLyDo=" + "phạt bằng Autobot";
    $.ajax({
        url: site+'/account/bang_phai/hinh_duong/',	
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            cb(html);
        }
    });
}

function myTangNganLuong(member, amount, cb) {
    var txtMoney = amount;
    var data = 'btntangNganLuong=1&txtMoney=' + txtMoney + '&member=' + member;
    $.ajax({
        url: site + '/index.php',
        type: "POST",
        data: data,
        cache: false,
        success: function (html) {
            if (html == 1) {
                cb("Chúc mừng bạn đã tặng ngân lượng thành công!");
            } else if (html) {
               cb(html);
            } else {
                cb('Sorry unexpected error. Please try again later.');
            }
        }
    });
}