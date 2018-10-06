var allLT = {
  ttt: "32",
  ltt: "7906",
  ntc: "25",
  hlt: "24",
  tlq: "26",
  tnt: "33",
  ukt: "23",
  htt: "103",
  att: "63",
  hnt: "65",
};

var selectedLT = "ltt";
var nOfLD = 2;

var qtList = {
        "anh tâm thảo": {
            val : 800,
            limit: 31,
        },
        "băng hỏa ngọc": {
            val : 20000,
            limit: 10,
        },
        "bổ anh đan": {
            val : 800,
            limit: 40,
        },
        "bổ huyết đan": {
            val : 800,
            limit: 40,
        },
        "bổ huyết đan phương": {
            val : 15000,
            limit: 1,
        },
        "bổ nguyên đan": {
            val : 385,
            limit: 50,
        },
        "bổ nguyên đan phương": {
            val : 120000,
            limit: 2,
        },
        "chu sa": {
            val : 5000,
            limit: 10,
        },
        "công pháp tàn quyển": {
            val : 20000,
            limit: 5,
        },
        "cố thần đan": {
            val : 70000,
            limit: 5,
        },
        "dung thần đan": {
            val : 50000,
            limit: 5,
        },
        "hoàng kim lệnh": {
            val : 40000,
            limit: 1,
        },
        "hoán diện châu": {
            val : 20000,
            limit: 2,
        },
        "huyết khí đan": {
            val : 100,
            limit: 10,
        },
        "huyết tinh thảo": {
            val : 30,
            limit: 100,
        },
        "huyết tinh đan": {
            val : 100,
            limit: 20,
        },
        "huyết trích thạch": {
            val : 20000,
            limit: 5,
        },
        "hòa thị bích": {
            val : 150000,
            limit: 5,
        },
        "hóa long thảo": {
            val : 19,
            limit: 50,
        },
        "hóa nguyên thảo": {
            val : 1400,
            limit: 100,
        },
        "hóa nguyên đan": {
            val : 1500,
            limit: 50,
        },
        "hóa nguyên đan phương": {
            val : 8000,
            limit: 1,
        },
        "hắc diệu thạch": {
            val : 150000,
            limit: 4,
        },
        "hỏa ngọc châu": {
            val : 20000,
            limit: 5,
        },
        "hổ phách thạch": {
            val : 45000,
            limit: 4,
        },
        "hộ linh trận": {
            val : 40000,
            limit: 1,
        },
        "kim thuổng": {
            val : 101,
            limit: 1000,
        },
        "kim thủ chỉ": {
            val : 180000,
            limit: 2,
        },
        "kiếp tiên đan": {
            val : 30000,
            limit: 3,
        },
        "la bàn": {
            val : 60000,
            limit: 5
        },
        "linh thạch cp": {
            val : 30000,
            limit: 20,
        },
        "linh thạch hp": {
            val : 70,
            limit: 200,
        },
        "linh thạch thp": {
            val : 5600,
            limit: 50,
        },
        "linh thạch tp": {
            val : 600,
            limit: 100,
        },
        "linh tuyền": {
            val : 500000,
            limit: 2,
        },
        "luyện thần thảo": {
            val : 1380,
            limit: 60,
        },
        "luyện thần đan": {
            val : 2500,
            limit: 40,
        },
        "luyện thần đan phương": {
            val : 150000,
            limit: 1,
        },
        "lông sói": {
            val : 2000,
            limit: 10,
        },
        "nguyệt bạch thạch": {
            val : 50000,
            limit: 4,
        },
        "ngưng thần đan": {
            val : 40000,
            limit: 4,
        },
        "ngọc giản truyền công": {
            val : 70000,
            limit: 4,
        },
        "ngọc tủy linh nhũ cp": {
            val : 4500,
            limit: 50,
        },
        "ngọc tủy linh nhũ hp": {
            val : 120,
            limit: 100,
        },
        "ngọc tủy linh nhũ thp": {
            val : 2000,
            limit: 50,
        },
        "ngọc tủy linh nhũ tp": {
            val : 350,
            limit: 100,
        },
        "nhâm sâm vạn năm": {
            val : 200000,
            limit: 5,
        },
        "nội đan c1": {
            val : 30000,
            limit: 2,
        },
        "nội đan c2": {
            val : 40000,
            limit: 2,
        },
        "nội đan c3": {
            val : 50000,
            limit: 2,
        },
        "nội đan c4": {
            val : 60000,
            limit: 2,
        },
        "nội đan c5": {
            val : 70000,
            limit: 2,
        },
        "nội đan c6": {
            val : 80000,
            limit: 2,
        },
        "nội đan c7": {
            val : 90000,
            limit: 2,
        },
        "nội đan c8": {
            val : 100000,
            limit: 2,
        },
        "nội đan c9": {
            val : 100000,
            limit: 2,
        },
        "phá thiên đan": {
            val : 4000,
            limit: 20,
        },
        "quy giáp": {
            val : 60000,
            limit: 5,
        },
        "quyên bạch": {
            val : 5000,
            limit: 5,
        },
        "sa ngọc châu": {
            val : 90000,
            limit: 3,
        },
        "thanh tâm đan": {
            val : 10000,
            limit: 20,
        },
        "thiên kiếm lệnh": {
            val : 25000,
            limit: 2,
        },
        "thiên linh đỉnh": {
            val : 500,
            limit: 2,
        },
        "thiên nguyên thảo": {
            val : 40,
            limit: 1000,
        },
        "thiên địa lô": {
            val : 25000,
            limit: 10,
        },
        "thải ngọc châu": {
            val : 50000,
            limit: 4,
        },
        "tinh linh cp": {
            val : 400000,
            limit: 2,
        },
        "tinh linh hp": {
            val : 55000,
            limit: 10,
        },
        "tinh linh thp": {
            val : 300000,
            limit: 4,
        },
        "tinh linh tp": {
            val : 120000,
            limit: 4,
        },
        "tinh thiết cp": {
            val : 2,
            limit: 10,
        },
        "tinh thiết hp": {
            val : 1,
            limit: 0,
        },
        "tinh thiết thp": {
            val : 1,
            limit: 1000,
        },
        "tinh thiết tp": {
            val : 1,
            limit: 1000,
        },
        "trích tinh thảo": {
            val : 360,
            limit: 1000,
        },
        "tán lôi trận": {
            val : 120000,
            limit: 2,
        },
        "túi trữ vật": {
            val : 6000,
            limit: 5,
        },
        "tạo hóa lô": {
            val : 4500,
            limit: 10,
        },
        "tẩy tủy đan": {
            val : 150,
            limit: 100,
        },
        "tị lôi châu": {
            val : 7500,
            limit: 10,
        },
        "vạn thú đỉnh": {
            val : 1000,
            limit: 5,
        },
        "vẫn thiết cp": {
            val : 100,
            limit: 0,
        },
        "vẫn thiết hp": {
            val : 1,
            limit: 0,
        },
        "vẫn thiết thp": {
            val : 10,
            limit: 0,
        },
        "vẫn thiết tp": {
            val : 5,
            limit: 0,
        },
        "đại phá đan": {
            val : 35000,
            limit: 5,
        },
        "độ hư đan": {
            val : 20000,
            limit: 10,
        },
    };
