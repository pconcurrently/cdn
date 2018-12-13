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
            val : 1000,
            limit: 30,
        },
        "băng hỏa ngọc": {
            val : 5000,
            limit: 1,
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
            val : 360,
            limit: 50,
        },
        "bổ nguyên đan phương": {
            val : 90000,
            limit: 0,
        },
        "bốc nguyên đỉnh": {
            val : 150000,
            limit: 2,
        },
        "chu sa": {
            val : 1000,
            limit: 5,
        },
        "công pháp tàn quyển": {
            val : 14000,
            limit: 5,
        },
        "cố thần đan": {
            val : 30000,
            limit: 0,
        },
        "dung thần đan": {
            val : 18000,
            limit: 1,
        },
        "địa tâm bội": {
            val : 110000,
            limit: 1,
        },
        "hoàng kim lệnh": {
            val : 35000,
            limit: 1,
        },
        "hoán diện châu": {
            val : 20000,
            limit: 1,
        },
        "huyết khí đan": {
            val : 100,
            limit: 0,
        },
        "huyết tinh thảo": {
            val : 30,
            limit: 0,
        },
        "huyết tinh đan": {
            val : 100,
            limit: 0,
        },
        "huyết trích thạch": {
            val : 5000,
            limit: 0,
        },
        "hòa thị bích": {
            val : 140000,
            limit: 3,
        },
        "hóa long thảo": {
            val : 19,
            limit: 0,
        },
        "hóa nguyên thảo": {
            val : 900,
            limit: 100,
        },
        "hóa nguyên đan": {
            val : 1300,
            limit: 50,
        },
        "hóa nguyên đan phương": {
            val : 8000,
            limit: 0,
        },
        "hắc diệu thạch": {
            val : 100000,
            limit: 2,
        },
        "hỏa ngọc châu": {
            val : 45000,
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
        "khai thiên thần thạch": {
            val : 180,
            limit: 200,
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
            limit: 5,
        },
        "linh thạch cp": {
            val : 26000,
            limit: 20,
        },
        "linh thạch hp": {
            val : 75,
            limit: 200,
        },
        "linh thạch thp": {
            val : 4500,
            limit: 50,
        },
        "linh thạch tp": {
            val : 550,
            limit: 100,
        },
        "linh tuyền": {
            val : 900000,
            limit: 2,
        },
        "luyện thần thảo": {
            val : 900,
            limit: 100,
        },
        "luyện thần đan": {
            val : 2400,
            limit: 40,
        },
        "luyện thần đan phương": {
            val : 80000,
            limit: 0,
        },
        "lông sói": {
            val : 400,
            limit: 5,
        },
        "nguyệt bạch thạch": {
            val : 40000,
            limit: 4,
        },
        "ngưng thần đan": {
            val : 20000,
            limit: 1,
        },
        "ngọc giản truyền công": {
            val : 65000,
            limit: 4,
        },
        "ngọc tủy linh nhũ cp": {
            val : 4300,
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
            limit: 3,
        },
        "nội đan c1": {
            val : 25000,
            limit: 0,
        },
        "nội đan c2": {
            val : 35000,
            limit: 0,
        },
        "nội đan c3": {
            val : 40000,
            limit: 0,
        },
        "nội đan c4": {
            val : 40000,
            limit: 0,
        },
        "nội đan c5": {
            val : 45000,
            limit: 0,
        },
        "nội đan c6": {
            val : 70000,
            limit: 0,
        },
        "nội đan c7": {
            val : 70000,
            limit: 0,
        },
        "nội đan c8": {
            val : 70000,
            limit: 0,
        },
        "nội đan c9": {
            val : 75000,
            limit: 0,
        },
        "phá thiên đan": {
            val : 4000,
            limit: 0,
        },
        "quy giáp": {
            val : 45000,
            limit: 5,
        },
        "quyên bạch": {
            val : 1500,
            limit: 5,
        },
        "sa ngọc châu": {
            val : 130000,
            limit: 3,
        },
        "thanh tâm đan": {
            val : 8000,
            limit: 1,
        },
        "thánh diệu đỉnh": {
            val : 300000,
            limit: 1,
        },
        "thiên kiếm lệnh": {
            val : 20000,
            limit: 0,
        },
        "thiên linh đỉnh": {
            val : 350,
            limit: 0,
        },
        "thiên nguyên thảo": {
            val : 55,
            limit: 1000,
        },
        "thiên địa lô": {
            val : 2500,
            limit: 2,
        },
        "thải ngọc châu": {
            val : 55000,
            limit: 4,
        },
        "tinh linh cp": {
            val : 190000,
            limit: 2,
        },
        "tinh linh hp": {
            val : 38000,
            limit: 1,
        },
        "tinh linh thp": {
            val : 210000,
            limit: 1,
        },
        "tinh linh tp": {
            val : 60000,
            limit: 4,
        },
        "tinh thiết cp": {
            val : 2,
            limit: 0,
        },
        "tinh thiết hp": {
            val : 1,
            limit: 0,
        },
        "tinh thiết thp": {
            val : 1,
            limit: 0,
        },
        "tinh thiết tp": {
            val : 1,
            limit: 0,
        },
        "trích tinh thảo": {
            val : 350,
            limit: 500,
        },
        "trúc cơ đan phương": {
            val : 30000,
            limit: 0,
        },
        "tán lôi trận": {
            val : 140000,
            limit: 2,
        },
        "túi trữ vật": {
            val : 8000,
            limit: 5,
        },
        "tạo hóa lô": {
            val : 2500,
            limit: 0,
        },
        "tẩy tủy đan": {
            val : 150,
            limit: 100,
        },
        "tị lôi châu": {
            val : 5800,
            limit: 10,
        },
        "uẩn thiên đan": {
            val: 10,
            limit: 0,
        },
        "vạn thú đỉnh": {
            val : 800,
            limit: 0,
        },
        "vẫn thiết cp": {
            val : 180,
            limit: 1000,
        },
        "vẫn thiết hp": {
            val : 10,
            limit: 1000,
        },
        "vẫn thiết thp": {
            val : 120,
            limit: 1000,
        },
        "vẫn thiết tp": {
            val : 20,
            limit: 1000,
        },
        "đại phá đan": {
            val : 20000,
            limit: 0,
        },
        "độ hư đan": {
            val : 22000,
            limit: 4,
        },
        "nón noel": {
            val : 5000,
            limit: 0,
        },
        "khăn noel": {
            val : 500,
            limit: 5,
        },
        "khối tuyết": {
            val : 500,
            limit: 5,
        },
        "cà rốt": {
            val : 500,
            limit: 5,
        },
        "vòng nguyệt quế": {
            val : 20000,
            limit: 5,
        },
    };
