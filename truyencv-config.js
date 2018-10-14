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

var selectedLT = "ttt";
var nOfLD = 1;

var qtList = {
        "anh tâm thảo": {
            val : 800,
            limit: 30,
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
            limit: 0,
        },
        "bổ nguyên đan": {
            val : 400,
            limit: 50,
        },
        "bổ nguyên đan phương": {
            val : 110000,
            limit: 2,
        },
        "bốc nguyên đỉnh": {
            val : 150000,
            limit: 2,
        },
        "chu sa": {
            val : 2000,
            limit: 10,
        },
        "công pháp tàn quyển": {
            val : 15000,
            limit: 5,
        },
        "cố thần đan": {
            val : 70000,
            limit: 5,
        },
        "dung thần đan": {
            val : 20000,
            limit: 5,
        },
        "địa tâm bội": {
            val : 150000,
            limit: 5,
        },
        "hoàng kim lệnh": {
            val : 35000,
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
            val : 10000,
            limit: 5,
        },
        "hòa thị bích": {
            val : 140000,
            limit: 5,
        },
        "hóa long thảo": {
            val : 19,
            limit: 50,
        },
        "hóa nguyên thảo": {
            val : 1300,
            limit: 100,
        },
        "hóa nguyên đan": {
            val : 1500,
            limit: 50,
        },
        "hóa nguyên đan phương": {
            val : 8000,
            limit: 0,
        },
        "hắc diệu thạch": {
            val : 120000,
            limit: 4,
        },
        "hỏa ngọc châu": {
            val : 20000,
            limit: 5,
        },
        "hổ phách thạch": {
            val : 40000,
            limit: 4,
        },
        "hộ linh trận": {
            val : 40000,
            limit: 1,
        },
        "hợp nguyên đan": {
            val : 6000,
            limit: 40,
        },
        "kim thuổng": {
            val : 101,
            limit: 1000,
        },
        "kim thủ chỉ": {
            val : 80000,
            limit: 2,
        },
        "kiếp tiên đan": {
            val : 17000,
            limit: 0,
        },
        "la bàn": {
            val : 45000,
            limit: 5
        },
        "linh thạch cp": {
            val : 26000,
            limit: 20,
        },
        "linh thạch hp": {
            val : 85,
            limit: 200,
        },
        "linh thạch thp": {
            val : 5600,
            limit: 50,
        },
        "linh thạch tp": {
            val : 620,
            limit: 100,
        },
        "linh tuyền": {
            val : 800000,
            limit: 2,
        },
        "luyện thần thảo": {
            val : 1380,
            limit: 60,
        },
        "luyện thần đan": {
            val : 2450,
            limit: 40,
        },
        "luyện thần đan phương": {
            val : 150000,
            limit: 1,
        },
        "lông sói": {
            val : 600,
            limit: 5,
        },
        "nguyệt bạch thạch": {
            val : 30000,
            limit: 4,
        },
        "ngưng thần đan": {
            val : 30000,
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
            val : 380,
            limit: 100,
        },
        "nhâm sâm vạn năm": {
            val : 250000,
            limit: 5,
        },
        "nội đan c1": {
            val : 40000,
            limit: 2,
        },
        "nội đan c2": {
            val : 40000,
            limit: 2,
        },
        "nội đan c3": {
            val : 40000,
            limit: 2,
        },
        "nội đan c4": {
            val : 70000,
            limit: 2,
        },
        "nội đan c5": {
            val : 70000,
            limit: 2,
        },
        "nội đan c6": {
            val : 70000,
            limit: 2,
        },
        "nội đan c7": {
            val : 70000,
            limit: 2,
        },
        "nội đan c8": {
            val : 70000,
            limit: 2,
        },
        "nội đan c9": {
            val : 70000,
            limit: 2,
        },
        "phá thiên đan": {
            val : 4000,
            limit: 20,
        },
        "quy giáp": {
            val : 45000,
            limit: 5,
        },
        "quyên bạch": {
            val : 3000,
            limit: 5,
        },
        "sa ngọc châu": {
            val : 110000,
            limit: 3,
        },
        "thanh tâm đan": {
            val : 12000,
            limit: 20,
        },
        "thánh diệu đỉnh": {
            val : 300000,
            limit: 1,
        },
        "thiên kiếm lệnh": {
            val : 22000,
            limit: 2,
        },
        "thiên linh đỉnh": {
            val : 350,
            limit: 0,
        },
        "thiên nguyên thảo": {
            val : 60,
            limit: 1000,
        },
        "thiên địa lô": {
            val : 2800,
            limit: 10,
        },
        "thải ngọc châu": {
            val : 45000,
            limit: 4,
        },
        "tinh linh cp": {
            val : 240000,
            limit: 2,
        },
        "tinh linh hp": {
            val : 50000,
            limit: 10,
        },
        "tinh linh thp": {
            val : 290000,
            limit: 4,
        },
        "tinh linh tp": {
            val : 110000,
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
            val : 395,
            limit: 500,
        },
        "trúc cơ đan phương": {
            val : 30000,
            limit: 2,
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
            val : 3500,
            limit: 10,
        },
        "tẩy tủy đan": {
            val : 150,
            limit: 100,
        },
        "tị lôi châu": {
            val : 6800,
            limit: 10,
        },
        "uẩn thiên đan": {
            val: 10,
            limit: 100,
        },
        "vạn thú đỉnh": {
            val : 800,
            limit: 0,
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
            limit: 4,
        },
    };
