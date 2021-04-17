const td = Array.from(document.querySelectorAll("#order-sheet td"));
const d = new Date();

// append textarea to each td
td.forEach((child) => {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("rows", "1");
  textarea.setAttribute("spellcheck", "false");
  child.appendChild(textarea);
});

// setting the top height to make table header sticky 3 rows
let navbarHeight = document.querySelector("#navbar").offsetHeight;
let firstHeight = document.querySelector("tr:first-child").offsetTop + navbarHeight;
let secondHeight = document.querySelector("tr:nth-child(2)").offsetTop  + navbarHeight;
let thirdHeight = document.querySelector("tr:nth-child(3)").offsetTop  + navbarHeight;
let firstHeader = Array.from(document.querySelectorAll("div:nth-child(n + 3) tr:nth-child(1) td"));
let secondHeader = Array.from(document.querySelectorAll("div:nth-child(n + 3) tr:nth-child(2) td"));
let thirdHeader = Array.from(document.querySelectorAll("div:nth-child(n + 3) tr:nth-child(3) td"));
document.addEventListener("scroll", stickyHeader);
function stickyHeader() {
  if (window.pageYOffset > navbarHeight) {
    firstHeader.forEach((td) => {td.style.top = firstHeight + "px"})
    secondHeader.forEach((td) => {td.style.top = secondHeight - 1 + "px"})
    thirdHeader.forEach((td) => {td.style.top = thirdHeight - 2 + "px"})
  }
}

// hard code "Total Kg:"
Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:last-child td:nth-child(2) textarea:first-child")).forEach((txt) => txt.value = "Total Kg:")

// set date
let dayChiName;
if (d.getDay() == 1) {
  dayChiName = "（一）"
} else if (d.getDay() == 2) {
  dayChiName = "（二）"
} else if (d.getDay() == 3) {
  dayChiName = "（三）"
} else if (d.getDay() == 4) {
  dayChiName = "（四）"
} else if (d.getDay() == 5) {
  dayChiName = "（五）"
} else if (d.getDay() == 6) {
  dayChiName = "（六）"
} else if (d.getDay() == 0) {
  dayChiName = "（日）"
}

let today = `${(d.getDate()) < 10 ? "0"+(d.getDate()) : (d.getDate())}.${(d.getMonth() + 1) < 10 ? "0"+(d.getMonth() + 1) : d.getMonth() + 1}.${d.getFullYear()}`;
document.querySelector("#page1 tr:nth-child(3) td:first-child textarea").value = today;
document.querySelector("#page1 tr:nth-child(4) td:first-child textarea").value = dayChiName;
document.querySelector("#page2 tr:nth-child(3) td:first-child textarea").value = today;
document.querySelector("#page2 tr:nth-child(4) td:first-child textarea").value = dayChiName;
document.querySelector("#page3 tr:nth-child(2) td:nth-child(2) textarea").value = today;
document.querySelector("#page3 tr:nth-child(3) td:nth-child(2) textarea").value = dayChiName.replace(/（|）/g, "")+"（早）";
document.querySelector("#page4 tr:nth-child(2) td:nth-child(2) textarea").value = today;
document.querySelector("#page4 tr:nth-child(3) td:nth-child(2) textarea").value = dayChiName.replace(/（|）/g, "")+"（早）";
document.querySelector("#page5 tr:nth-child(2) td:nth-child(2) textarea").value = today;
document.querySelector("#page5 tr:nth-child(3) td:nth-child(2) textarea").value = dayChiName.replace(/（|）/g, "")+"（午）";
document.querySelector("#page6 tr:nth-child(2) td:nth-child(2) textarea").value = today;
document.querySelector("#page6 tr:nth-child(3) td:nth-child(2) textarea").value = dayChiName.replace(/（|）/g, "")+"（午）";
document.querySelector("#page7 tr:nth-child(2) td:nth-child(2) textarea").value = today;
document.querySelector("#page7 tr:nth-child(3) td:nth-child(2) textarea").value = dayChiName;


//for hard code
var page1UpperChiVegName = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(3) td textarea"));
var page1UpperEngVegName = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(4) td textarea"));
var page1UpperFarmName = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(5) td textarea"));
var page1LowerChiVegName = Array.from(document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(3) td textarea"));
var page1LowerEngVegName = Array.from(document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(4) td textarea"));
var page1LowerFarmName = Array.from(document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(5) td textarea"));

var chiVegNamePage3 = Array.from(document.querySelectorAll("#order-sheet #page3 #j-m-chi-veg-name td textarea"));
var engVegNamePage3 = Array.from(document.querySelectorAll("#order-sheet #page3 #j-m-eng-veg-name td textarea"));
var farmNamePage3 = Array.from(document.querySelectorAll("#order-sheet #page3 tr:nth-child(4) td textarea"));
var customerPage3 = Array.from(document.querySelectorAll("#order-sheet #page3 td:nth-child(2) textarea"));
var chiVegNamePage5 = Array.from(document.querySelectorAll("#order-sheet #page5 #j-m-chi-veg-name td textarea"));
var engVegNamePage5 = Array.from(document.querySelectorAll("#order-sheet #page5 #j-m-eng-veg-name td textarea"));
var farmNamePage5 = Array.from(document.querySelectorAll("#order-sheet #page5 tr:nth-child(4) td textarea"));
var customerPage5 = Array.from(document.querySelectorAll("#order-sheet #page5 td:nth-child(2) textarea"));

var chiVegNamePage4 = Array.from(document.querySelectorAll("#order-sheet #page4 #j-m-chi-veg-name td textarea"));
var engVegNamePage4 = Array.from(document.querySelectorAll("#order-sheet #page4 #j-m-eng-veg-name td textarea"));
var farmNamePage4 = Array.from(document.querySelectorAll("#order-sheet #page4 tr:nth-child(4) td textarea"));
var customerPage4 = Array.from(document.querySelectorAll("#order-sheet #page4 td:nth-child(2) textarea"));
var chiVegNamePage6 = Array.from(document.querySelectorAll("#order-sheet #page6 #j-m-chi-veg-name td textarea"));
var engVegNamePage6 = Array.from(document.querySelectorAll("#order-sheet #page6 #j-m-eng-veg-name td textarea"));
var farmNamePage6 = Array.from(document.querySelectorAll("#order-sheet #page6 tr:nth-child(4) td textarea"));
var customerPage6 = Array.from(document.querySelectorAll("#order-sheet #page6 td:nth-child(2) textarea"));
      
// At the moment hard code first, will do a list to key
//chiVegName[2].innerHTML = "&#10003;";
chiVegNamePage3[2].value = "菜心";
chiVegNamePage3[3].value = "甜菜心";
chiVegNamePage3[4].value = "大芥菜";
chiVegNamePage3[5].value = "香菜胆";
chiVegNamePage3[6].value = "生菜";
chiVegNamePage3[7].value = "葱";
chiVegNamePage3[8].value = "应菜";
chiVegNamePage3[9].value = "马儿白"; 
chiVegNamePage3[11].value = "羊角豆";
engVegNamePage3[2].value = "Sawi";
engVegNamePage3[3].value = "Sawi Manis";
engVegNamePage3[4].value = "S. Pahit";
engVegNamePage3[5].value = "Lettuce";
engVegNamePage3[6].value = "C. Lettuce";
engVegNamePage3[7].value = "Onion ";
engVegNamePage3[8].value = "KangKong";
engVegNamePage3[9].value = "Pek Chai";
engVegNamePage3[11].value = "L. Finger";
chiVegNamePage5[2].value = "菜心";
chiVegNamePage5[3].value = "甜菜心";
chiVegNamePage5[4].value = "大芥菜";
chiVegNamePage5[5].value = "香菜胆";
chiVegNamePage5[6].value = "生菜";
chiVegNamePage5[7].value = "葱";
chiVegNamePage5[8].value = "应菜";
chiVegNamePage5[9].value = "马儿白"; 
chiVegNamePage5[11].value = "羊角豆";
engVegNamePage5[2].value = "Sawi";
engVegNamePage5[3].value = "Sawi Manis";
engVegNamePage5[4].value = "S. Pahit";
engVegNamePage5[5].value = "Lettuce";
engVegNamePage5[6].value = "C. Lettuce";
engVegNamePage5[7].value = "Onion ";
engVegNamePage5[8].value = "KangKong";
engVegNamePage5[9].value = "Pek Chai";
engVegNamePage5[11].value = "L. Finger";
page1UpperChiVegName[1].value = "菜心";
page1UpperChiVegName[2].value = "甜菜心";
page1UpperChiVegName[3].value = "大芥菜";
page1UpperChiVegName[4].value = "香菜胆";
page1UpperChiVegName[5].value = "生菜";
page1UpperChiVegName[6].value = "葱";
page1UpperChiVegName[7].value = "应菜";
page1UpperChiVegName[8].value = "马儿白"; 
page1UpperChiVegName[10].value = "羊角豆";
page1UpperEngVegName[1].value = "Sawi";
page1UpperEngVegName[2].value = "Sawi Manis";
page1UpperEngVegName[3].value = "S. Pahit";
page1UpperEngVegName[4].value = "Lettuce";
page1UpperEngVegName[5].value = "C. Lettuce";
page1UpperEngVegName[6].value = "Onion ";
page1UpperEngVegName[7].value = "KangKong";
page1UpperEngVegName[8].value = "Pek Chai";
page1UpperEngVegName[10].value = "L. Finger";
farmNamePage3[2].value = "J1"
farmNamePage3[3].value = "J2"
farmNamePage3[4].value = "J3"
farmNamePage3[5].value = "J2"
farmNamePage3[6].value = "J1"
farmNamePage3[7].value = "J3"
farmNamePage3[8].value = "J1"
farmNamePage3[9].value = "J2"
farmNamePage3[11].value = "CKM"
farmNamePage5[2].value = "J1"
farmNamePage5[3].value = "J2"
farmNamePage5[4].value = "J3"
farmNamePage5[5].value = "J2"
farmNamePage5[6].value = "J1"
farmNamePage5[7].value = "J3"
farmNamePage5[8].value = "J1"
farmNamePage5[9].value = "J2"
farmNamePage5[11].value = "CKM"
page1UpperFarmName[1].value = "J1"
page1UpperFarmName[2].value = "J2"
page1UpperFarmName[3].value = "J3"
page1UpperFarmName[4].value = "J2"
page1UpperFarmName[5].value = "J1"
page1UpperFarmName[6].value = "J3"
page1UpperFarmName[7].value = "J1"
page1UpperFarmName[8].value = "J2"
page1UpperFarmName[10].value = "CKM"

customerPage3[4].value = "9212";
customerPage3[5].value = "U- 4 ML";
customerPage3[6].value = "U- K. C";
customerPage3[7].value = "U- 888";
customerPage3[8].value = "U- 3 ML";
customerPage3[9].value = "U- SAM";
customerPage3[10].value = "U- GR";
customerPage3[11].value = "U- PEND";
customerPage3[12].value = "U- 7 ML";
customerPage3[13].value = "U-P";
customerPage3[14].value = "U-A.S";
customerPage3[15].value = "U-SMG";
customerPage3[16].value = "U-F.S";
customerPage3[17].value = "U-18ML";
customerPage3[18].value = "U-EM";
customerPage3[19].value = "U-MS";
customerPage3[20].value = "U-PP";
customerPage3[21].value = "U- 9 ML";
customerPage3[22].value = "U-BAU";
customerPage3[23].value = "K.H";
customerPage3[24].value = "FARLEY";
customerPage3[25].value = "HAKRI-3ML";
customerPage3[26].value = "ELLI";
customerPage3[27].value = "SENG";
customerPage3[28].value = "J330";
customerPage3[29].value = "5566";
customerPage3[30].value = "FUAN";
customerPage3[31].value = "K.S.C";
customerPage3[32].value = "3698 九";
customerPage3[33].value = "L.K.SENG";
customerPage4[4].value = "9212";
customerPage4[5].value = "U- 4 ML";
customerPage4[6].value = "U- K. C";
customerPage4[7].value = "U- 888";
customerPage4[8].value = "U- 3 ML";
customerPage4[9].value = "U- SAM";
customerPage4[10].value = "U- GR";
customerPage4[11].value = "U- PEND";
customerPage4[12].value = "U- 7 ML";
customerPage4[13].value = "U-P";
customerPage4[14].value = "U-A.S";
customerPage4[15].value = "U-SMG";
customerPage4[16].value = "U-F.S";
customerPage4[17].value = "U-18ML";
customerPage4[18].value = "U-EM";
customerPage4[19].value = "U-MS";
customerPage4[20].value = "U-PP";
customerPage4[21].value = "U- 9 ML";
customerPage4[22].value = "U-BAU";
customerPage4[23].value = "K.H";
customerPage4[24].value = "FARLEY";
customerPage4[25].value = "HAKRI-3ML";
customerPage4[26].value = "ELLI";
customerPage4[27].value = "SENG";
customerPage4[28].value = "J330";
customerPage4[29].value = "5566";
customerPage4[30].value = "FUAN";
customerPage4[31].value = "K.S.C";
customerPage4[32].value = "3698 九";
customerPage4[33].value = "L.K.SENG";





chiVegNamePage4[2].value = "芥兰";
chiVegNamePage4[3].value = "大芥菜";
chiVegNamePage4[4].value = "马尼菜";
chiVegNamePage4[5].value = "皇京白";
chiVegNamePage4[6].value = "皱菜";
chiVegNamePage4[7].value = "奶白";
chiVegNamePage4[8].value = "小白菜";
chiVegNamePage4[9].value = "青苋菜"; 
chiVegNamePage4[10].value = "红苋菜";
chiVegNamePage4[11].value = "尖苋菜";
chiVegNamePage4[12].value = "维他命";
chiVegNamePage4[13].value = "番薯叶";
chiVegNamePage4[14].value = "千宝菜";
engVegNamePage4[2].value = "Kailan";
engVegNamePage4[3].value = "S. Pahit";
engVegNamePage4[4].value = "C. Manis";
engVegNamePage4[5].value = "Wong K.P.";
engVegNamePage4[6].value = "Kiew Chai";
engVegNamePage4[7].value = "Sawi Susu";
engVegNamePage4[8].value = "Siaw P.C.";
engVegNamePage4[9].value = "B. Hijau";
engVegNamePage4[10].value = "B. Merah";
engVegNamePage4[11].value = "B. Tajam";
engVegNamePage4[12].value = "S. Vitamin";
engVegNamePage4[13].value = "D. Keledek";
engVegNamePage4[14].value = "S. Senpo";
chiVegNamePage6[2].value = "芥兰";
chiVegNamePage6[3].value = "大芥菜";
chiVegNamePage6[4].value = "马尼菜";
chiVegNamePage6[5].value = "皇京白";
chiVegNamePage6[6].value = "皱菜";
chiVegNamePage6[7].value = "奶白";
chiVegNamePage6[8].value = "小白菜";
chiVegNamePage6[9].value = "青苋菜"; 
chiVegNamePage6[10].value = "红苋菜";
chiVegNamePage6[11].value = "尖苋菜";
chiVegNamePage6[12].value = "维他命";
chiVegNamePage6[13].value = "番薯叶";
chiVegNamePage6[14].value = "千宝菜";
engVegNamePage6[2].value = "Kailan";
engVegNamePage6[3].value = "S. Pahit";
engVegNamePage6[4].value = "C. Manis";
engVegNamePage6[5].value = "Wong K.P.";
engVegNamePage6[6].value = "Kiew Chai";
engVegNamePage6[7].value = "Sawi Susu";
engVegNamePage6[8].value = "Siaw P.C.";
engVegNamePage6[9].value = "B. Hijau";
engVegNamePage6[10].value = "B. Merah";
engVegNamePage6[11].value = "B. Tajam";
engVegNamePage6[12].value = "S. Vitamin";
engVegNamePage6[13].value = "D. Keledek";
engVegNamePage6[14].value = "S. Senpo";
page1LowerChiVegName[1].value = "芥兰";
page1LowerChiVegName[2].value = "大芥菜";
page1LowerChiVegName[3].value = "马尼菜";
page1LowerChiVegName[4].value = "皇京白";
page1LowerChiVegName[5].value = "皱菜";
page1LowerChiVegName[6].value = "奶白";
page1LowerChiVegName[7].value = "小白菜";
page1LowerChiVegName[8].value = "青苋菜"; 
page1LowerChiVegName[9].value = "红苋菜";
page1LowerChiVegName[10].value = "尖苋菜";
page1LowerChiVegName[11].value = "维他命";
page1LowerChiVegName[12].value = "番薯叶";
page1LowerChiVegName[13].value = "千宝菜";
page1LowerEngVegName[1].value = "Kailan";
page1LowerEngVegName[2].value = "S. Pahit";
page1LowerEngVegName[3].value = "C. Manis";
page1LowerEngVegName[4].value = "Wong K.P.";
page1LowerEngVegName[5].value = "Kiew Chai";
page1LowerEngVegName[6].value = "Sawi Susu";
page1LowerEngVegName[7].value = "Siaw P.C.";
page1LowerEngVegName[8].value = "B. Hijau";
page1LowerEngVegName[9].value = "B. Merah";
page1LowerEngVegName[10].value = "B. Tajam";
page1LowerEngVegName[11].value = "S. Vitamin";
page1LowerEngVegName[12].value = "D. Keledek";
page1LowerEngVegName[13].value = "S. Senpo";
farmNamePage4[2].value = "29ml";
farmNamePage4[3].value = "31A";
farmNamePage4[4].value = "31U";
farmNamePage4[5].value = "31A";
farmNamePage4[6].value = "31B";
farmNamePage4[7].value = "31A";
farmNamePage4[8].value = "31B";
farmNamePage4[9].value = "31B";
farmNamePage4[10].value = "31B";
farmNamePage4[11].value = "31A";
farmNamePage4[12].value = "31A";
farmNamePage4[13].value = "31U";
farmNamePage4[14].value = "31U";
farmNamePage6[2].value = "29ml";
farmNamePage6[3].value = "31A";
farmNamePage6[4].value = "31U";
farmNamePage6[5].value = "31A";
farmNamePage6[6].value = "31B";
farmNamePage6[7].value = "31A";
farmNamePage6[8].value = "31B";
farmNamePage6[9].value = "31B";
farmNamePage6[10].value = "31B";
farmNamePage6[11].value = "31A";
farmNamePage6[12].value = "31A";
farmNamePage6[13].value = "31U";
farmNamePage6[14].value = "31U";
page1LowerFarmName[1].value = "29ml";
page1LowerFarmName[2].value = "31A";
page1LowerFarmName[3].value = "31U";
page1LowerFarmName[4].value = "31A";
page1LowerFarmName[5].value = "31B";
page1LowerFarmName[6].value = "31A";
page1LowerFarmName[7].value = "31B";
page1LowerFarmName[8].value = "31B";
page1LowerFarmName[9].value = "31B";
page1LowerFarmName[10].value = "31A";
page1LowerFarmName[11].value = "31A";
page1LowerFarmName[12].value = "31U";
page1LowerFarmName[13].value = "31U";

customerPage5[4].value = "8136";
customerPage5[5].value = "4217";
customerPage5[6].value = "2300";
customerPage5[7].value = "7987";
customerPage5[8].value = "1704";
customerPage5[9].value = "81";
customerPage5[10].value = "337";
customerPage5[11].value = "6343";
customerPage5[12].value = "125";
customerPage5[13].value = "396";
customerPage5[14].value = "SA";
customerPage5[15].value = "U-SRI";
customerPage6[4].value = "8136";
customerPage6[5].value = "4217";
customerPage6[6].value = "2300";
customerPage6[7].value = "7987";
customerPage6[8].value = "1704";
customerPage6[9].value = "81";
customerPage6[10].value = "337";
customerPage6[11].value = "6343";
customerPage6[12].value = "125";
customerPage6[13].value = "396";
customerPage6[14].value = "SA";
customerPage6[15].value = "U-SRI";

document.addEventListener("keydown", navigate);
function navigate (e) {
  if (Array.from(document.querySelectorAll("#order-sheet textarea, #order-sheet input")).includes(e.target)) {
    let nextTr = e.target.parentNode.parentNode.nextElementSibling;
    let prevTr = e.target.parentNode.parentNode.previousElementSibling;
    let nextTd = e.target.parentNode.nextElementSibling;
    let prevTd = e.target.parentNode.previousElementSibling;
    let currentTxtIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
    let currentTdIndex = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    if (e.keyCode == 39) {
      if (e.target.parentNode == e.target.parentNode.parentNode.lastElementChild) {
        let currentTrIndex = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode)
        let nextPageTxtToFocus;
        let n = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.children[0].children[0];
        n.children.length >= (currentTrIndex + 1) ? nextPageTxtToFocus = n.children[currentTrIndex].children[2].children[0] : nextPageTxtToFocus = n.lastElementChild.children[2].children[0];
        nextPageTxtToFocus.focus();
      } else if (e.target.parentNode !== e.target.parentNode.parentNode.lastElementChild) {
        nextTd.children[0].focus();
      }
    }
    if (e.keyCode == 37) {
      if (e.target.parentNode == e.target.parentNode.parentNode.firstElementChild) {
        let currentTrIndex = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode)
        let prevPageTxtToFocus;
        let n = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0].children[0];
        n.children.length >= (currentTrIndex + 1) ? prevPageTxtToFocus = n.children[currentTrIndex].lastElementChild.children[0] : prevPageTxtToFocus = n.lastElementChild.lastElementChild.children[0];
        prevPageTxtToFocus.focus();
      } else if (e.target.parentNode !== e.target.parentNode.parentNode.firstElementChild) {
        prevTd.children[0].focus();
      }
    }
    if (e.keyCode == 40 || e.keyCode == 13) {
      if (e.target == e.target.parentNode.lastChild) {
        nextTr.children[currentTdIndex].children[0].focus();
      } else if (e.target !== e.target.parentNode.lastChild) {
        e.target.parentNode.children[currentTxtIndex + 1].focus();
      }
    }
    if (e.keyCode == 38) {
      if (e.target == e.target.parentNode.firstChild) {
        prevTr.children[currentTdIndex].lastChild.focus();
      } else if (e.target !== e.target.parentNode.firstChild) {
        e.target.parentNode.children[currentTxtIndex - 1].focus();
      }
    }
  }
}

// create an array to collect all textarea
var allTextarea = Array.from(
  document.querySelectorAll("#order-sheet div:nth-child(n+3) textarea")
);

//Create an Array for each type of veg
const allColVeg = [];
// use td:nth-child(3 until 15) collect selected td form an array, before any input added
for (let i = 3; i < 16; i++) {
  allColVeg.push(Array.from(document.querySelectorAll(`#order-sheet #page3 td:nth-child(${i}) textarea`)));
}
// remove the first 3 elements (quatity-limit,chi-veg-name,end-veg-name) and last one (for total ctr)
for (let i = 0; i < allColVeg.length; i++) {
  allColVeg[i] = allColVeg[i].slice(3, -1);
}

// to get the width when typing, to increase some width 
var canvas = autoWidth.canvas || (autoWidth.canvas = document.createElement("canvas"));
var context = canvas.getContext("2d");
document.addEventListener("DOMContentLoaded", autoWidth);
document.addEventListener("keyup", autoWidth);
function autoWidth() {
  Array.from(document.querySelectorAll("#order-sheet tr:not(:last-child) textarea, #order-sheet input")).forEach((txt) => {
    txt.parentNode.style.width = "6vw";
    if(context.measureText(txt.value).width > 50) {
      txt.parentNode.style.width = (context.measureText(txt.value).width * 1.60) + "px";
    }
  })
  document.querySelector("#page1-table-lower td:first-child").style.width = document.querySelector("#page1-table-upper tr:nth-child(2) td:first-child").style.width
  document.querySelector("#page2-table-lower td:first-child").style.width = document.querySelector("#page2-table-upper tr:nth-child(2) td:first-child").style.width
}

// hard coded order
/* allColVeg.forEach((arr) => {
  arr.forEach((txt) => {
    txt.value = "1 X 1"
  })
}) */

document.addEventListener("keydown", removeEnter);
function removeEnter(e) {
  e.keyCode == 13 ? e.preventDefault() : null;
}

/* document.addEventListener("focusout", removeEnter);
function removeenter(e) {
  e.target.value = e.target.value.replace("\n", "");
} */

//add new input below when tab "+"
document.addEventListener("keyup", addInputBelow);
function addInputBelow(e) {
  if (e.keyCode === 107) {
    e.target.value = e.target.value.replace("+", "");
    let addtxt = document.createElement("input");
    //if first textarea is empty then this will not function 
    let thisTdLength = e.target.parentNode.children.length
    if (e.target.parentNode.children[thisTdLength - 1].value !== "" && thisTdLength < 10) {
      addtxt.setAttribute("id", parseInt(e.target.parentNode.children[0].id) + thisTdLength / 10)
      addtxt.setAttribute("spellcheck", "false");
      e.target.parentNode.appendChild(addtxt);
      e.target.parentNode.children[thisTdLength].focus();
    }
  }

  // when press "-" remove mixed class and the partners(class and label) if no class and more than one input inside td then remove the input
  let label;
  let currentClass;
  let thisTrId;
  if (e.target.classList.contains("mixed")) {
    label = e.target.className.slice(-1);
    currentClass = e.target.className;
    if (Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) textarea, #order-sheet div:nth-child(n+3) input")).some((txt) => {return e.target == txt})) {
      thisTrId = e.target.parentNode.parentNode.id;
    }
  }
  
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5) td:nth-child(n+3)"));
    if (availableTxt.includes(e.target.parentNode)) {
      if ((e.keyCode == 109 || e.keyCode == 189) && e.target.value !== "" && e.target.value !== "-") {
        e.target.value = e.target.value.replace("-", "");
      }
    }

  if ((e.keyCode == 109 || e.keyCode == 189) && e.target.parentNode.children.length > 1 && !e.target.classList.contains("mixed")) {
    e.target.value = e.target.value.replace("-", "");
    let thisTd = e.target.parentNode;
    Array.from(thisTd.children).indexOf(e.target) == 0 ? thisTd.children[Array.from(thisTd.children).indexOf(e.target) + 1].focus() : thisTd.children[Array.from(thisTd.children).indexOf(e.target) - 1].focus();
    e.target.parentNode.removeChild(e.target);
  } else if (e.keyCode == 109 || e.keyCode == 189 || !Array.from(e.target.value).includes(label)) {
    let mixedChild = Array.from(document.querySelectorAll(`#order-sheet #${thisTrId} textarea, #order-sheet #${thisTrId} input`));
    if (e.target.classList.contains("mixed")) {
      for (var i = 0; i < mixedChild.length; i++) {
        if (mixedChild[i].className == currentClass) {
          mixedChild[i].value = mixedChild[i].value.replace(/-/g, "");
          mixedChild[i].value = mixedChild[i].value.replace(/\(/g, "");
          mixedChild[i].value = mixedChild[i].value.replace(/\)/g, "");
          mixedChild[i].value = mixedChild[i].value.replace(/ /g, "");
          mixedChild[i].value = mixedChild[i].value.replace(label, "");
          mixedChild[i].value = mixedChild[i].value.replace(/X/g, " X ");
          mixedChild[i].removeAttribute("class", currentClass);
          autoWidth();
        }
      }
      for (let i = 0; i < mixedChild.length; i++) {
        if (mixedChild[i].className == "mixed B" && currentClass == "mixed A") {
          mixedChild[i].className = "mixed A";
          mixedChild[i].value = mixedChild[i].value.replace(/B/g, "A");
        } else if (mixedChild[i].className == "mixed C" && (currentClass == "mixed A" || currentClass == "mixed B")) {
          mixedChild[i].className = "mixed B";
          mixedChild[i].value = mixedChild[i].value.replace(/C/g, "B");
        } else if (mixedChild[i].className == "mixed D" && (currentClass == "mixed A" || currentClass == "mixed B" || currentClass == "mixed C")) {
          mixedChild[i].className = "mixed C";
          mixedChild[i].value = mixedChild[i].value.replace(/D/g, "C");
        } else if (mixedChild[i].className == "mixed E" && (currentClass == "mixed A" || currentClass == "mixed B" || currentClass == "mixed C" || currentClass == "mixed D")) {
          mixedChild[i].className = "mixed D";
          mixedChild[i].value = mixedChild[i].value.replace(/E/g, "D");
        } else if (mixedChild[i].className == "mixed F" && (currentClass == "mixed A" || currentClass == "mixed B" || currentClass == "mixed C" || currentClass == "mixed D" || currentClass == "mixed E")) {
          mixedChild[i].className = "mixed E";
          mixedChild[i].value = mixedChild[i].value.replace(/F/g, "E");
        }
      }
    }
    totalDown(e);
  }
}

// still need modified
document.addEventListener("keydown", ctrlToDisable)
function ctrlToDisable(e) {
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(tr:nth-last-child(-n+2)) td:nth-child(n+3)"));
  if (e.ctrlKey) {
    for (let i = 0; i < availableTxt.length; i++) {
      if (!availableTxt.includes(availableTxt[i])) {
        availableTxt[i].style.cursor = "not-allowed";
      }
    }
  }
}

// to replace * to X
document.addEventListener("input", replace);
function replace(e) {
  if (Array.from(document.querySelectorAll("#order-sheet textarea, #order-sheet input")).includes(e.target)) {
    e.target.value = e.target.value.replace("!", "✔");
  }
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(2) tr:nth-child(n+6) td:not(td:nth-child(1)), #order-sheet div:nth-child(n+3) tr:nth-child(n+5) td:nth-child(n+3)"));
  if (availableTxt.includes(e.target.parentNode)) {
    e.target.value = e.target.value.replace("*", " X ");
    e.target.value = e.target.value.replace("/", "bag");
    e.target.value = e.target.value.replace("ctnbag", "bag");
    e.target.value = e.target.value.replace("bagbag", "bdle");
    e.target.value = e.target.value.replace("bdlebag", "kg");
    e.target.value = e.target.value.replace("kgbag", "ctn");
  }
}

// set num. id to each tr
let allTr = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr"));
for (let i = 0; i < allTr.length; i++) {
  allTr[i].setAttribute("id", "tr-"+i);
}
var GroupX = [];

// while holding ctrl key target multiple order cell to write group
document.addEventListener("mousedown", mixCrateFunction);
function mixCrateFunction(e) {
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(tr:nth-last-child(-n+2)) td:nth-child(n+3)"));
  if (availableTxt.includes(e.target.parentNode)) {
    if (e.ctrlKey) {
        if (e.target.style.cursor !== "not-allowed" && !e.target.classList.contains("mixed") && e.target.value !== "") {
          e.target.style.backgroundColor = "yellow"
          GroupX.push(e.target);
        }
    // change cursor to 'not allow' when the mouse move to other page
    let pageArray = Array.from(document.querySelectorAll("#order-sheet div"));
    for (let i = 0; i < pageArray.length; i++) {
      if(pageArray[i].id !== GroupX[0].parentNode.parentNode.parentNode.parentNode.id) {continue;}
        Array.from(document.querySelectorAll(`#order-sheet #${pageArray[i].id} textarea, #order-sheet #${pageArray[i].id} input`)).forEach((txt) => {txt.style.cursor = "not-allowed"})
    }

    // change cursor to 'not allow' when the mouse move to other rows 
      for (let i = 0; i < allTr.length; i++) {
        if (allTr[i].id == GroupX[0].parentNode.parentNode.id) {continue;}
        Array.from(allTr[i].children).forEach((td) => {
          td.children[0].style.cursor = "not-allowed"
          td.children[0].style.backgroundColor = ""
        })
      }
      // style mixed order cell
      availableTxt.forEach((td) => {
        Array.from(td.children).forEach((txt) => {
          if (txt.classList.contains("mixed")) {
            txt.style.backgroundColor = "grey"
            txt.style.color = "red"
          }
          if (txt.value == "") {
            txt.style.cursor = "not-allowed";
          }
        })
      })
      //disable others (when new input added)
      GroupX.forEach((x) => {
        if(x.parentNode.children.length > 1) {
          for (let i = 0; i < x.parentNode.children.length; i++) {
            if (x == x.parentNode.children[i]) continue;
            x.parentNode.children[i].style.cursor = "not-allowed"
            x.parentNode.children[i].style.backgroundColor = "rgb(192, 192, 192)"
          }
        }
      })
    } 
  }
}
  
document.addEventListener("keyup", writeGroup)
function writeGroup(e) {
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(tr:nth-last-child(-n+2)) td:nth-child(n+3)"));
    allTextarea.forEach((txt) => {
      if (txt.style.backgroundColor !== "lightblue") {
        txt.style.backgroundColor = "";
      }
      txt.style.cursor = "text"
      if (txt.style.color == "red") {
        txt.style.color = "black"
      }
    })
    availableTxt.forEach((td) => {
      Array.from(td.children).forEach((txt) => {
        if (txt.style.backgroundColor !== "lightblue") {
          txt.style.backgroundColor = "";
        }
        txt.style.cursor = "text"
        if (txt.style.color == "red") {
          txt.style.color = "black"
        }
      })
    })

    if (GroupX.length == 1) {
      GroupX = []
      return
    } 

    // set num. id to each order textarea
    for (let i = 0; i < allTextarea.length; i++) {
    allTextarea[i].setAttribute("id", i);
    }

    // GroupX sort from left to right
    GroupX.sort(function(a,b) {return a.id - b.id})
    // filter out duplicates
    GroupX = GroupX.filter((item, pos, self) => {
      return self.indexOf(item) === pos;
    });
    
    let thisPage;
    let thisTrId;
    let thisTrAllInputAndTextarea = [];
    if (GroupX.length > 1) {
      thisPage = GroupX[0].parentNode.parentNode.parentNode.parentNode.parentNode.id
      thisTrId = GroupX[0].parentNode.parentNode.id;
      thisTrAllInputAndTextarea = Array.from(document.querySelectorAll(`#order-sheet #${thisPage} #${thisTrId} textarea, #order-sheet #${thisPage} #${thisTrId} input`))
      thisTrAllInputAndTextarea = thisTrAllInputAndTextarea.slice(2);
    } else return
    let groupLabel = ["A", "B", "C", "D", "E", "F"];
    function writingGroup(e) {
      for (let i = 1; i < GroupX.length - 1; i++) {
        GroupX[i].value = groupLabel[0]+" "+GroupX[i].value;
      }
      GroupX[0].value = "("+GroupX[0].value+" "+groupLabel[0];
      GroupX[GroupX.length-1].value = groupLabel[0]+" "+GroupX[GroupX.length-1].value+")"
      GroupX.forEach((order) => {
        order.setAttribute("class", `mixed ${groupLabel[0]}`);
        if(context.measureText(order.value).width > 50) {
          order.parentNode.style.width = (context.measureText(order.value).width * 1.60) + "px";
        }
      })
      GroupX = [];
    }
    
    e.target.blur();
    if (thisTrAllInputAndTextarea.some((t) => t.value.endsWith("E"))) {
      groupLabel = groupLabel.slice(5)
      writingGroup()
    } else if (thisTrAllInputAndTextarea.some((t) => t.value.endsWith("D"))) {
      groupLabel = groupLabel.slice(4)
      writingGroup()
    } else if (thisTrAllInputAndTextarea.some((t) => t.value.endsWith("C"))) {
      groupLabel = groupLabel.slice(3)
      writingGroup()
    } else if (thisTrAllInputAndTextarea.some((t) => t.value.endsWith("B"))) {
      groupLabel = groupLabel.slice(2)
      writingGroup()
    } else if (thisTrAllInputAndTextarea.some((t) => t.value.endsWith("A"))) {
      groupLabel = groupLabel.slice(1)
      writingGroup()
    } else if (!thisTrAllInputAndTextarea.some((t) => t.classList.contains("mixed"))) {
      writingGroup()
    }
  }

  let eachColClass = [];
  let numOfVegEachPage = [];
  for (let i = 3; i < 8; i++) {
    numOfVegEachPage[i] = Array.from(document.querySelectorAll(`#order-sheet #page${i} tr:first-child td`)).length;
    for (let j = 3; j < numOfVegEachPage[i] + 1; j++) {
      eachColClass.push(Array.from(document.querySelectorAll(`#order-sheet #page${i} td:nth-child(${j})`)));
    }  
  }
  for (let i = 0; i < eachColClass.length; i++) {
    for (let j = 0; j < eachColClass[i].length; j++) {
      eachColClass[i][j].setAttribute("class", "Col"+i);
    }
  }

// function for Summary of Crt
document.addEventListener("input", totalDown);
function totalDown(e) {
  if (document.getElementById("myonoffswitch2").checked == true) return
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5) td:nth-child(n+3)"));
    if (availableTxt.includes(e.target.parentNode)) {
      // create an array for collect all order for current Column
      let currentCol = Array.from(document.querySelectorAll(`#order-sheet tr:nth-child(n+5):not(:nth-last-child(-n+2)) .${e.target.parentNode.className} textarea, #order-sheet tr:nth-child(n+5):not(:nth-last-child(-n+2)) .${e.target.parentNode.className} input`));
      let currentLowerPart = document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`)[document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`).length - 2];
      let orderCollection = [];
      let kgCtnUOM = [];
      let ctnCollection = [];
      for (let i = 0; i < currentCol.length; i++) {
        if (currentCol[i].value.match(" X ") !== null &&
            currentCol[i].value.match("-") == null &&
            currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2) !== "") {
          orderCollection.push(currentCol[i].value);
        }
        // search for "kg" and add to splited collection
        if (currentCol[i].value.match(/kg/g) !== null && currentCol[i].value.match(" X ") == null) {
           kgCtnUOM.push(currentCol[i].value);
        }
        if (currentCol[i].value.match("ctn") !== null && currentCol[i].value.match(" X ") == null) {
          ctnCollection.push(currentCol[i].value);
       }
      }

      let totalCtn = 0;
      if (ctnCollection.length > 0) {
        for (let i = 0; i < ctnCollection.length; i++) {
          ctnCollection[i] = ctnCollection[i].replace("ctn", "")
          totalCtn += parseInt(ctnCollection[i]);
        }
      }
      
      let splitedCollection = [];
      // add kgCtnUOM to splitedCollection
      for (let i = 0; i < kgCtnUOM.length; i++) {
        if (kgCtnUOM.length !== 0) {
          splitedCollection.push(kgCtnUOM[i]);
        }
      }

      let bagBdle = [];
      for (let i = 0; i < orderCollection.length; i++) {
        // search bag bdle and box quantity
        if (orderCollection[i].match(/(bag|bdle)/g) !== null) {
          bagBdle.push(orderCollection[i].match(/(bag|bdle)/g));
        }
        // filter out all label bag bdle and box
        orderCollection[i] = orderCollection[i].replace("(", "");
        orderCollection[i] = orderCollection[i].replace(")", "");
        orderCollection[i] = orderCollection[i].replace("bag", "");
        orderCollection[i] = orderCollection[i].replace("bdle", "");
        orderCollection[i] = orderCollection[i].replace(" A", "");
        orderCollection[i] = orderCollection[i].replace(" B", "");
        orderCollection[i] = orderCollection[i].replace(" C", "");
        orderCollection[i] = orderCollection[i].replace(" D", "");
        orderCollection[i] = orderCollection[i].replace(" E", "");
        orderCollection[i] = orderCollection[i].replace(" F", "");
        orderCollection[i] = orderCollection[i].replace("A ", "");
        orderCollection[i] = orderCollection[i].replace("B ", "");
        orderCollection[i] = orderCollection[i].replace("C ", "");
        orderCollection[i] = orderCollection[i].replace("D ", "");
        orderCollection[i] = orderCollection[i].replace("E ", "");
        orderCollection[i] = orderCollection[i].replace("F ", "");
        orderCollection[i] = orderCollection[i].replace(/\+/, "");
      }

      let theKg = [];
      for (let i = 0; i < orderCollection.length; i++) {
        // retrieve the kg part
        theKg.push(orderCollection[i].slice(orderCollection[i].indexOf("X") + 2));
      }

      if (theKg.length > 1) {
        // remove duplicates inside theKg
        theKg = theKg.filter((item, pos, self) => {
          return self.indexOf(item) === pos;
        });
        // sort theKg[i]
        theKg.sort((a, b) => a - b);
      }
      
      
      // filter the orderCollection by each theKg
      let saperatedFromKg = [];
      for (let i = 0; i < theKg.length; i++) {
        saperatedFromKg.push(orderCollection.filter((a) => {return a.slice(a.indexOf("X") + 2) == theKg[i];}));
      }

      // retrieve the Crt part from each saperatedFromKg
      for (let i = 0; i < saperatedFromKg.length; i++) {
        for (let j = 0; j < saperatedFromKg[i].length; j++) {
          saperatedFromKg[i][j] = parseInt(saperatedFromKg[i][j].slice(0, saperatedFromKg[i][j].indexOf("X") - 1));}
      }

      // total up the crt from each saperated Kg order which was retrieved from the crt part
      let theCrt = [];
      for (let i = 0; i < saperatedFromKg.length; i++) {
        theCrt.push(saperatedFromKg[i].reduce((total, num) => total + num));
      }

      // simulately combine theCrt and theKg
      let totalCrtOfEachKg = "";
      for (i = 0; i < theKg.length; i++) {
        totalCrtOfEachKg += theCrt[i] + " X " + theKg[i] + "\n";
      }
      let totalQuantityOfCrt;
      for (i = 0; i < theCrt.length; i++) {
        if (theCrt.length > 0) {
          totalQuantityOfCrt = theCrt.reduce((total, num) => total + num) - bagBdle.length;
        }
      }
      
      // split from the totalCrtOfEachKg
      if (totalCrtOfEachKg !== "") {
        if (totalCrtOfEachKg.match(/X/g).length > 0) {
          splitedCollection = splitedCollection.concat(Array.from(totalCrtOfEachKg.split("\n")));
        }
      }
      
      /* if (splitedCollection.length == 0) {
        currentLowerPart.innerHTML = "<input>"
      } */
      
      let thisVegOrder = splitedCollection;
      
      
      // clear the lower part every time using this function if its splited order not equal to ""
      currentLowerPart.innerHTML = "";
      
    
      
      let thisLastTxt = document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`)[document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`).length - 1].children[0];
      let exception = ["bag", "bdle", "-", /\+/, /\(/, /\)/, "A", "B", "C", "D", "E", "F"];
      for (let i = 0; i < currentCol.length; i++) {
        if (currentCol[i].value.match(" X ") !== null && exception.every((r) => {return currentCol[i].value.match(r) == null})) {
          if (currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2) == "") {
            thisLastTxt.value = "ERROR";
            return
          } else if (!Number.isInteger(Number(currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2)))) {
            console.log(`Alert : Invalid Order! "${currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2)}" is Not A Number`);
            thisLastTxt.value = "ERROR";
            return
          } 
        } else if (currentCol[i].value.match(" X ") !== null && !Number.isInteger(Number(currentCol[i].value.slice(0, currentCol[i].value.indexOf("X") - 1)))) {
          console.log(`Alert : Invalid Order! "${currentCol[i].value.slice(0, currentCol[i].value.indexOf("X") - 1)}" is Not A Number`);
          thisLastTxt.value = "ERROR";
          return
        } else if (currentCol[i].value !== "" && currentCol[i].value.match(" X ") == null && currentCol[i].value.match(/kg|ctn/) == null) {
          thisLastTxt.value = "ERROR";
          return
        } else if (currentCol[i].value.match(" X ") == null && currentCol[i].value.match(/bag|bdle/) !== null) {
          thisLastTxt.value = "ERROR";
          return
        } else if (currentCol[i].value.match(" X ") !== null && !Number.isInteger(Number(currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2).replace(/-|\+|bag|bdle/, "")))) {
          console.log(`Alert : Invalid Order! "${currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2)}" is Not A Number`);
          thisLastTxt.value = "ERROR";
          return
        } else if (currentCol[i].value.match(" X ") !== null && currentCol[i].value.slice(currentCol[i].value.indexOf("X") + 2).replace(/bag|bdle/, "") == "") {
          console.log(`Alert : Invalid Order! No Number Found`);
          thisLastTxt.value = "ERROR";
          return
        } else if (currentCol[i].value.match(" X ") == null && currentCol[i].value.match(/kg/) !== null) {
          if (!Number.isInteger(Number(currentCol[i].value.slice(0, currentCol[i].value.indexOf("k"))))) {
            console.log(`Alert : Invalid Order! "${currentCol[i].value.slice(0, currentCol[i].value.indexOf("k"))}" is Not A Number`);
            thisLastTxt.value = "ERROR";
            return
          } else if (currentCol[i].value.indexOf("k") == 0) {
            console.log(`Alert : Invalid Order! No Number Found`);
            thisLastTxt.value = "ERROR";
            return
          } else if (currentCol[i].value.slice(currentCol[i].value.indexOf("g") + 1) !== "") {
            console.log(`Alert : Invalid Order! "${currentCol[i].value}"`);
            thisLastTxt.value = "ERROR";
            return
          }
        } else if (currentCol[i].value.match(" X ") == null && currentCol[i].value.match(/ctn/) !== null) {
          if (!Number.isInteger(Number(currentCol[i].value.slice(0, currentCol[i].value.indexOf("c"))))) {
            console.log(`Alert : Invalid Order! "${currentCol[i].value.slice(0, currentCol[i].value.indexOf("c"))}" is Not A Number`);
            thisLastTxt.value = "ERROR";
            return
          } else if (currentCol[i].value.indexOf("c") == 0) {
            console.log(`Alert : Invalid Order! No Number Found`);
            thisLastTxt.value = "ERROR";
            return
          } else if (currentCol[i].value.slice(currentCol[i].value.indexOf("n") + 1) !== "") {
            console.log(`Alert : Invalid Order! "${currentCol[i].value}"`);
            thisLastTxt.value = "ERROR";
            return
          }
        }
      }
      
      // appendChild n times depent the splitedCollection.length
      let n = document.createElement("input");
        for (let i = 0; i < splitedCollection.length; i++) {
          currentLowerPart.appendChild(n.cloneNode(true));
          currentLowerPart.children[i].value = splitedCollection[i];
        }
      
      
      if (currentLowerPart.children.length >= 1) {
        if (bagBdle.length > 0 && totalQuantityOfCrt > 0) {
          currentLowerPart.children[currentLowerPart.children.length - 1].value = totalQuantityOfCrt+"("+bagBdle.length+bagBdle[0]+")"
        } else if (bagBdle.length <= 0 && totalQuantityOfCrt > 0){
          currentLowerPart.children[currentLowerPart.children.length - 1].value = totalQuantityOfCrt
        } else if (bagBdle.length > 0 && totalQuantityOfCrt <= 0){
          currentLowerPart.children[currentLowerPart.children.length - 1].value = "("+bagBdle.length+bagBdle[0]+")"
        }
      }
      
      if (ctnCollection.length > 0) {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("rows", "1");
        textarea.setAttribute("spellcheck", "false");
        currentLowerPart.appendChild(textarea);
        currentLowerPart.children[currentLowerPart.children.length - 1].value = totalCtn + "ctn";
      }

      // sum total kg at bottom
      let totalKg = 0;
      for (let i = 0; i < thisVegOrder.length; i++) {
        if (thisVegOrder[i].match(/kg/) !== null) {
          thisVegOrder[i] = thisVegOrder[i].replace(/kg/, "")
          totalKg += parseInt(thisVegOrder[i]);
        }
        if (thisVegOrder[i].match(/ X /) !== null) {
          totalKg += (thisVegOrder[i].slice(0, thisVegOrder[i].indexOf("X") - 1) * thisVegOrder[i].slice(thisVegOrder[i].indexOf("X") + 2))
        }
      }

      thisLastTxt.value = ""
      if (totalKg !== 0) {
        thisLastTxt.value = totalKg;
      }
    } 
}

document.addEventListener("input", sideCrt)
function sideCrt(e) {
  if (document.getElementById("myonoffswitch2").checked == true) return
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(tr:nth-last-child(-n+2)) td:nth-child(n+3)"));
  if (availableTxt.includes(e.target.parentNode)) {
    let thisRow = Array.from(document.querySelectorAll(`#${e.target.parentNode.parentNode.id} textarea, #${e.target.parentNode.parentNode.id} input`)).slice(2);
    let theSideCrt = e.target.parentNode.parentNode.children[0].children[0];
    let orderCollection = [];
    let bagBdleCtn = [];
    for (let i = 0; i < thisRow.length; i++) {
      if (thisRow[i].value.match(" X ") !== null && thisRow[i].value.match(/-|bag|bdle|ctn|kg/) == null) {
        orderCollection.push(thisRow[i].value);
      }
      if (thisRow[i].value.match(/bag|bdle|ctn/) !== null && thisRow[i].value.match(/-/) == null) {
        bagBdleCtn.push(thisRow[i].value);
      }
    }
    
    let filterLabelToDeductCrt;
    let mixedCrtToDeduct;
    // kick out(splice.()) the first occurrence of every label
    filterLabelToDeductCrt = orderCollection.join().match(/A|B|C|D|E|F/g);
    if (filterLabelToDeductCrt !== null) {
      if (filterLabelToDeductCrt.join().match(/F/) !== null) {
        filterLabelToDeductCrt.splice(filterLabelToDeductCrt.indexOf("F"), 1)
      }
      if (filterLabelToDeductCrt.join().match(/E/) !== null) {
        filterLabelToDeductCrt.splice(filterLabelToDeductCrt.indexOf("E"), 1)
      }
      if (filterLabelToDeductCrt.join().match(/D/) !== null) {
        filterLabelToDeductCrt.splice(filterLabelToDeductCrt.indexOf("D"), 1)
      }
      if (filterLabelToDeductCrt.join().match(/C/) !== null) {
        filterLabelToDeductCrt.splice(filterLabelToDeductCrt.indexOf("C"), 1)
      }
      if (filterLabelToDeductCrt.join().match(/B/) !== null) {
        filterLabelToDeductCrt.splice(filterLabelToDeductCrt.indexOf("B"), 1)
      }
      if (filterLabelToDeductCrt.join().match(/A/) !== null) {
        filterLabelToDeductCrt.splice(filterLabelToDeductCrt.indexOf("A"), 1)
      }
      mixedCrtToDeduct = filterLabelToDeductCrt.length;
    }

    let filterLabelToDeductBag;
    let mixedBagToDeduct;
    // kick out(splice.()) the first occurrence of every label
    filterLabelToDeductBag = bagBdleCtn.join().match(/A|B|C|D|E|F/g);
    if (filterLabelToDeductBag !== null) {
      if (filterLabelToDeductBag.join().match(/F/) !== null) {
        filterLabelToDeductBag.splice(filterLabelToDeductBag.indexOf("F"), 1)
      }
      if (filterLabelToDeductBag.join().match(/E/) !== null) {
        filterLabelToDeductBag.splice(filterLabelToDeductBag.indexOf("E"), 1)
      }
      if (filterLabelToDeductBag.join().match(/D/) !== null) {
        filterLabelToDeductBag.splice(filterLabelToDeductBag.indexOf("D"), 1)
      }
      if (filterLabelToDeductBag.join().match(/C/) !== null) {
        filterLabelToDeductBag.splice(filterLabelToDeductBag.indexOf("C"), 1)
      }
      if (filterLabelToDeductBag.join().match(/B/) !== null) {
        filterLabelToDeductBag.splice(filterLabelToDeductBag.indexOf("B"), 1)
      }
      if (filterLabelToDeductBag.join().match(/A/) !== null) {
        filterLabelToDeductBag.splice(filterLabelToDeductBag.indexOf("A"), 1)
      }
      mixedBagToDeduct = filterLabelToDeductBag.length;
    }
    
    // filter out all label bag bdle and box from everyRowOrder
    for (let i = 0; i < orderCollection.length; i++) {
      orderCollection[i] = orderCollection[i].replace("(", "");
      orderCollection[i] = orderCollection[i].replace(")", "");
      orderCollection[i] = orderCollection[i].replace("bag", "");
      orderCollection[i] = orderCollection[i].replace("bdle", "");
      orderCollection[i] = orderCollection[i].replace("kg", "");
      orderCollection[i] = orderCollection[i].replace("ctn", "");
      orderCollection[i] = orderCollection[i].replace(" A", "");
      orderCollection[i] = orderCollection[i].replace(" B", "");
      orderCollection[i] = orderCollection[i].replace(" C", "");
      orderCollection[i] = orderCollection[i].replace(" D", "");
      orderCollection[i] = orderCollection[i].replace(" E", "");
      orderCollection[i] = orderCollection[i].replace(" F", "");
      orderCollection[i] = orderCollection[i].replace("A ", "");
      orderCollection[i] = orderCollection[i].replace("B ", "");
      orderCollection[i] = orderCollection[i].replace("C ", "");
      orderCollection[i] = orderCollection[i].replace("D ", "");
      orderCollection[i] = orderCollection[i].replace("E ", "");
      orderCollection[i] = orderCollection[i].replace("F ", "");
      orderCollection[i] = orderCollection[i].replace(/\+/, "");
    }

    // filter out all label bag bdle and box from everyRowBagBdle
    for (let i = 0; i < bagBdleCtn.length; i++) {
      bagBdleCtn[i] = bagBdleCtn[i].replace("(", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(")", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("bag", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("bdle", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("kg", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("ctn", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(" A", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(" B", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(" C", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(" D", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(" E", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(" F", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("A ", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("B ", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("C ", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("D ", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("E ", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace("F ", "");
      bagBdleCtn[i] = bagBdleCtn[i].replace(/\+/, "");
    }

    // retrieve the crt part from order
    let rowOrderCrtPart = [];
    let totalCrt;
    for (i = 0; i < orderCollection.length; i++) {
      rowOrderCrtPart.push(parseInt(orderCollection[i].slice(0, orderCollection[i].indexOf("X") - 1)))
      if (rowOrderCrtPart.length > 0) {
        totalCrt = rowOrderCrtPart.reduce((total, num) => total + num);
      }
    }

    // retrieve the crt part from bag
    let bagBdleCtnCrtPart = [];
    let totalBag;
    for (let i = 0; i < bagBdleCtn.length; i++) {
      bagBdleCtn[i].match(" X ") !== null ? bagBdleCtnCrtPart.push(parseInt(bagBdleCtn[i].slice(0, bagBdleCtn[i].indexOf("X") - 1))) : null;
      bagBdleCtn[i].match(" X ") == null ? bagBdleCtnCrtPart.push(parseInt(bagBdleCtn[i].slice(0, bagBdleCtn[i].indexOf("c")))) : null;
      if (bagBdleCtnCrtPart.length > 0) {
        totalBag = bagBdleCtnCrtPart.reduce((total, num) => total + num);
      }
    }
    
    if (totalCrt == undefined && mixedCrtToDeduct == undefined && totalBag == undefined && mixedBagToDeduct == undefined) {
      theSideCrt.value = "";
    } else if (totalCrt > 0 && mixedCrtToDeduct == undefined && totalBag == undefined && mixedBagToDeduct == undefined) {
      theSideCrt.value = totalCrt + "  ";
    } else if (totalCrt > 0 && mixedCrtToDeduct > 0 && totalBag == undefined && mixedBagToDeduct == undefined) {
      theSideCrt.value = (totalCrt - mixedCrtToDeduct)+"  ";
    } else if (totalCrt > 0 && mixedCrtToDeduct > 0 && totalBag > 0 && mixedBagToDeduct == undefined) {
      theSideCrt.value = totalBag+" + "+ (totalCrt - mixedCrtToDeduct) + "  ";
    } else if (totalCrt == undefined && mixedCrtToDeduct == undefined && totalBag > 0 && mixedBagToDeduct == undefined) {
      theSideCrt.value = totalBag+"~";
    } else if (totalCrt == undefined && mixedCrtToDeduct == undefined && totalBag > 0 && mixedBagToDeduct > 0) {
      theSideCrt.value = (totalBag - mixedBagToDeduct)+"~";
    } else if (totalCrt > 0 && mixedCrtToDeduct == undefined && totalBag > 0 && mixedBagToDeduct == undefined) {
      theSideCrt.value = totalBag+" + "+ totalCrt + "  ";
    } else if (totalCrt > 0 && mixedCrtToDeduct == undefined && totalBag > 0 && mixedBagToDeduct > 0) {
      theSideCrt.value = (totalBag-mixedBagToDeduct)+" + "+ totalCrt + "  ";
    } else if (totalCrt > 0 && mixedCrtToDeduct > 0 && totalBag > 0 && mixedBagToDeduct > 0) {
      theSideCrt.value = (totalBag-mixedBagToDeduct)+" + "+ (totalCrt - mixedCrtToDeduct) + "  ";
    }

    let firstColValue = Array.from(document.querySelectorAll(`#order-sheet #${e.target.parentNode.parentNode.parentNode.parentNode.id} td:first-child textarea`)).slice(3, -2);
    let allCrtPart = [];
    let allCrtBagPart = [];
    for (let i = 0; i < firstColValue.length; i++) {
      if (firstColValue[i].value.match(/\+/g) == null && firstColValue[i].value !== "" && firstColValue[i].value.match(/\~/g) == null) {
        allCrtPart.push(parseInt(firstColValue[i].value))
      }
      if (firstColValue[i].value.match(/\+/g) !== null) {
        allCrtPart.push(parseInt(firstColValue[i].value.slice(firstColValue[i].value.indexOf("+") + 1)));
        allCrtBagPart.push(parseInt(firstColValue[i].value.slice(0, firstColValue[i].value.indexOf("+") - 1)));
      }
      if (firstColValue[i].value.match(/\~/g) !== null) {
        allCrtBagPart.push(parseInt(firstColValue[i].value.slice(0, firstColValue[i].value.indexOf("~"))))
      }
    }

    let lastCellOfFirstCol = document.querySelector(`#order-sheet #${e.target.parentNode.parentNode.parentNode.parentNode.id} tr:nth-last-child(2) td:first-child textarea`);
    if (allCrtBagPart.length == 0 && allCrtPart.length == 0) {
      lastCellOfFirstCol.value = "";
    } else if (allCrtBagPart.length == 0 && allCrtPart.length > 0) {
      lastCellOfFirstCol.value = allCrtPart.reduce((total, num) => total + num);
    } else if (allCrtBagPart.length > 0 && allCrtPart.length == 0) {
      lastCellOfFirstCol.value = "circle"+"-"+allCrtBagPart.reduce((total, num) => total + num);
    } else if (allCrtBagPart.length > 0 && allCrtPart.length > 0) {
      lastCellOfFirstCol.value = allCrtBagPart.reduce((total, num) => total + num)+" + "+allCrtPart.reduce((total, num) => total + num);
    }

    let exception = ["bag", "bdle", "-", /\+/, /\(/, /\)/, "A", "B", "C", "D", "E", "F"];
      for (let i = 0; i < thisRow.length; i++) {
        if (thisRow[i].value.match(" X ") !== null && exception.every((r) => {return thisRow[i].value.match(r) == null})) {
          if (thisRow[i].value.slice(thisRow[i].value.indexOf("X") + 2) == "") {
            theSideCrt.value = "ERROR1";
            lastCellOfFirstCol.value = "";
          } else if (!Number.isInteger(Number(thisRow[i].value.slice(thisRow[i].value.indexOf("X") + 2)))) {
            theSideCrt.value = "ERROR2";
            lastCellOfFirstCol.value = "";
          } 
        } else if (thisRow[i].value.match(" X ") !== null && !Number.isInteger(Number(thisRow[i].value.slice(0, thisRow[i].value.indexOf("X") - 1)))) {
          theSideCrt.value = "ERROR3";
          lastCellOfFirstCol.value = "";
        } else if (thisRow[i].value !== "" && thisRow[i].value.match(" X ") == null && thisRow[i].value.match(/kg|ctn/) == null) {
          theSideCrt.value = "ERROR4";
          lastCellOfFirstCol.value = "";
        } else if (thisRow[i].value.match(" X ") == null && thisRow[i].value.match(/bag|bdle/) !== null) {
          theSideCrt.value = "ERROR5";
          lastCellOfFirstCol.value = "";
        } else if (thisRow[i].value.match(" X ") !== null && !Number.isInteger(Number(thisRow[i].value.slice(thisRow[i].value.indexOf("X") + 2).replace(/-|\+|bag|bdle/, "")))) {
          theSideCrt.value = "ERROR6";
          lastCellOfFirstCol.value = "";
        } else if (thisRow[i].value.match(" X ") !== null && thisRow[i].value.slice(thisRow[i].value.indexOf("X") + 2).replace(/bag|bdle/, "") == "") {
          theSideCrt.value = "ERROR7";
          lastCellOfFirstCol.value = "";
        } else if (thisRow[i].value.match(" X ") == null && thisRow[i].value.match(/kg/) !== null) {
          if (!Number.isInteger(Number(thisRow[i].value.slice(0, thisRow[i].value.indexOf("k"))))) {
            theSideCrt.value = "ERROR8";
            lastCellOfFirstCol.value = "";
          } else if (thisRow[i].value.indexOf("k") == 0) {
            theSideCrt.value = "ERROR9";
            lastCellOfFirstCol.value = "";
          } else if (thisRow[i].value.slice(thisRow[i].value.indexOf("g") + 1) !== "") {
            theSideCrt.value = "ERROR10";
            lastCellOfFirstCol.value = "";
          }
        } else if (thisRow[i].value.match(" X ") == null && thisRow[i].value.match(/ctn/) !== null) {
          if (!Number.isInteger(Number(thisRow[i].value.slice(0, thisRow[i].value.indexOf("c"))))) {
            theSideCrt.value = "ERROR11";
            lastCellOfFirstCol.value = "";
          } else if (thisRow[i].value.indexOf("c") == 0) {
            theSideCrt.value = "ERROR12";
            lastCellOfFirstCol.value = "";
          } else if (thisRow[i].value.slice(thisRow[i].value.indexOf("n") + 1) !== "") {
            theSideCrt.value = "ERROR13";
            lastCellOfFirstCol.value = "";
          }
        }
      }
 }
}

document.addEventListener("focusin", highlight);
function highlight (e) {
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5) td:nth-child(n+3)"))
  let focusinClassName;
  if (availableTxt.some((td) => {return td == e.target.parentNode})) {
    focusinClassName = document.getElementsByClassName(e.target.parentNode.className);
    focusinClassName[1].style.backgroundColor = "lightblue";
    focusinClassName[2].style.backgroundColor = "lightblue";
    focusinClassName[3].style.backgroundColor = "lightblue";
    focusinClassName[1].children[0].style.backgroundColor = "lightblue";
    focusinClassName[2].children[0].style.backgroundColor = "lightblue";
    focusinClassName[3].children[0].style.backgroundColor = "lightblue";
    e.target.parentNode.parentNode.children[1].style.backgroundColor = "lightblue";
    if (e.target.parentNode.parentNode.children[1].children.length > 1) {
      Array.from(e.target.parentNode.parentNode.children[1].children).forEach((txt) => {
        txt.style.backgroundColor = "lightblue";
      }) 
    } else if (e.target.parentNode.parentNode.children[1].children.length == 1) {
      e.target.parentNode.parentNode.children[1].children[0].style.backgroundColor = "lightblue";
    }
  } 
/*   if (focusinClassName[1].children.length > 1) {
    Array.from(focusinClassName[1].children).forEach((txt) => {
      txt.style.backgroundColor = "lightblue";
    })
  } else if (focusinClassName[1].children.length == 1){
    focusinClassName[1].children[0].style.backgroundColor = "lightblue";
  }
  if (focusinClassName[2].children.length > 1) {
    Array.from(focusinClassName[2].children).forEach((txt) => {
      txt.style.backgroundColor = "lightblue";
    })
  } else if (focusinClassName[2].children.length == 1) {
    focusinClassName[2].children[0].style.backgroundColor = "lightblue";
  } */

}

document.addEventListener("focusout", highlightOut);
function highlightOut(e) {
  Array.from(document.querySelectorAll("#order-sheet td, #order-sheet td textarea, #order-sheet td input")).forEach((n) => {
    if(n.style.backgroundColor == "lightblue") {
      n.style.backgroundColor = "";
    }
  })
  if (document.getElementById("myonoffswitch2").checked == true) return
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(tr:nth-last-child(-n+2)) td:nth-child(n+3)"));
  if (availableTxt.includes(e.target.parentNode)) {
    let thisLastTxt = document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`)[document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`).length - 1].children[0];
      if (e.target.value.match(" X ") !== null) {
        if (e.target.value.slice(e.target.value.indexOf("X") + 2) == "") {
          thisLastTxt.value = "ERROR";
          console.log(`Alert : Invalid Order "${e.target.value}"`);
        }
      }
      if (e.target.value !== "" && e.target.value.match(" X ") == null && e.target.value.match(/kg|ctn/) == null && e.target.value.match(/bag|bdle/) == null) {
        thisLastTxt.value = "ERROR";
        console.log(`Alert : Invalid Order "${e.target.value}"`);
      }
      if (e.target.value.match(" X ") == null && e.target.value.match(/bag|bdle/) !== null) {
        thisLastTxt.value = "ERROR";
        console.log(`Alert : Invalid Order! Please write as "1 X ${e.target.value}"`);
      }
      if (e.target.value.match(" X ") !== null && e.target.value.match(/kg|ctn/) !== null) {
        thisLastTxt.value = "ERROR";
        console.log(`Alert : Invalid Order! Please write as "${e.target.value.slice(e.target.value.indexOf("X") + 2)}"`);
      }
  }
}

// pagination still need to adjust
let pagination = Array.from(document.querySelectorAll("#navbar ul li"));
pagination.pop();
pagination.shift();
pagination.forEach((li) => {
  li.addEventListener("click", switchPage);
})

function switchPage(e) {
  pagination.forEach((li) => {
    li.style.backgroundColor = "";
  })
  e.target.style.backgroundColor = "white";
  if (e.target.innerHTML == "Page 1") {
    window.scrollTo(0,0);
  } else if (e.target.innerHTML == "Page 2") {
    window.scrollTo(1280,0);
  } else if (e.target.innerHTML == "Page 3") {
    window.scrollTo(2560,0);
  } else if (e.target.innerHTML == "Page 4") {
    window.scrollTo(3840,0);
  } else if (e.target.innerHTML == "Page 5") {
    window.scrollTo(5120,0);
  } else if (e.target.innerHTML == "Page 6") {
    window.scrollTo(6400,0);
  } else if (e.target.innerHTML == "Page 7") {
    window.scrollTo(7680,0);
  }
}

document.addEventListener("scroll", toFixedPosition);
function toFixedPosition() {
  pagination.forEach((li) => {
    li.style.backgroundColor = "";
  })
    if (pageXOffset >= 0 && pageXOffset < 855) {
      pagination[0].style.backgroundColor = "white";
    } else if (pageXOffset > 855 && pageXOffset < 2255) {
      pagination[1].style.backgroundColor = "white";
    } else if (pageXOffset > 2255 && pageXOffset < 3555) {
      pagination[2].style.backgroundColor = "white";
    } else if (pageXOffset > 3555 && pageXOffset < 4855) {
      pagination[3].style.backgroundColor = "white";
    } else if (pageXOffset > 4855 && pageXOffset < 6055) {
      pagination[4].style.backgroundColor = "white";
    } else if (pageXOffset > 6055 && pageXOffset < 7355) {
      pagination[5].style.backgroundColor = "white";
    } else if (pageXOffset > 7355) {
      pagination[6].style.backgroundColor = "white";
    }
}

//if(same vege name)
// Use Td instead of textarea
document.addEventListener("click", sumToPage1);
function sumToPage1(e) {
  if (e.target == document.querySelector("#save")) {
    let Page1VegName = [];
  for (let i = 1; i < document.querySelectorAll("#page1-table-upper tr:first-child td").length + 1; i++) {
    Page1VegName.push(Array.from(document.querySelectorAll(`#page1-table-upper td:nth-child(${i}) textarea`)))
  }
  for (let i = 1; i < document.querySelectorAll("#page1-table-lower tr:first-child td").length + 1; i++) {
    Page1VegName.push(Array.from(document.querySelectorAll(`#page1-table-lower td:nth-child(${i}) textarea`)))
  }

  let orderSheetVegName = [];
  for (let i = 0; i < document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:first-child td:nth-child(n+3)").length; i++) {
    orderSheetVegName.push(Array.from(document.querySelectorAll(`#order-sheet .Col${i} textarea`)))
  }

  for (let i = 0; i < Page1VegName.length; i++) {
    for (let j = 0; j < orderSheetVegName.length; j++) {
      if (orderSheetVegName[j][1].value == Page1VegName[i][2].value &&
        orderSheetVegName[j][2].value == Page1VegName[i][3].value &&
        orderSheetVegName[j][3].value == Page1VegName[i][4].value &&
        Page1VegName[i][2].value !== "" &&
        Page1VegName[i][3].value !== "" &&
        Page1VegName[i][4].value !== "") {
          if (i < Page1VegName.length / 2 && orderSheetVegName[j][orderSheetVegName[j].length - 1].parentNode.parentNode.parentNode.parentNode.parentNode.id == "page3") {
            Page1VegName[i][6].value = orderSheetVegName[j][orderSheetVegName[j].length - 1].value;
          } else if (i < Page1VegName.length / 2 && orderSheetVegName[j][orderSheetVegName[j].length - 1].parentNode.parentNode.parentNode.parentNode.parentNode.id == "page5") {
            Page1VegName[i][7].value = orderSheetVegName[j][orderSheetVegName[j].length - 1].value;
          } else if (i >= Page1VegName.length / 2 && orderSheetVegName[j][orderSheetVegName[j].length - 1].parentNode.parentNode.parentNode.parentNode.parentNode.id == "page4") {
            Page1VegName[i][6].value = orderSheetVegName[j][orderSheetVegName[j].length - 1].value;
          } else if (i >= Page1VegName.length / 2 && orderSheetVegName[j][orderSheetVegName[j].length - 1].parentNode.parentNode.parentNode.parentNode.parentNode.id == "page6") {
            Page1VegName[i][7].value = orderSheetVegName[j][orderSheetVegName[j].length - 1].value;
          }

          if (Page1VegName[i][6].value == "") {
            Page1VegName[i][6].value = 0;
            Page1VegName[i][8].value = parseInt(Page1VegName[i][6].value) + parseInt(Page1VegName[i][7].value)
          } else if (Page1VegName[i][7].value == "") {
            Page1VegName[i][7].value = 0;
            Page1VegName[i][8].value = parseInt(Page1VegName[i][6].value) + parseInt(Page1VegName[i][7].value)
          } else {
            Page1VegName[i][8].value = parseInt(Page1VegName[i][6].value) + parseInt(Page1VegName[i][7].value)
          }
        }
      }
    }
  }
}

document.addEventListener("input", estimateMode)
function estimateMode(e) {
  // when clear estimate have to pop up a confirmation notice
  // make estimate area background color lightblue while estimate mode ON
    if (document.getElementById("myonoffswitch2").checked == true) {
      if (Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(:nth-last-child(-n+2)) td:nth-child(n+3)")).some((td) => {return td == e.target.parentNode})) {
        if (e.inputType !== "insertText") return
        e.target.style.textAlign = "right"
        e.target.style.color = "gray";
        e.target.value = e.target.value.replace("+", "");
        e.target.value = e.target.value.replace("`", "");
        e.target.value = e.target.value.replace("/n", "");
        e.target.setAttribute("placeholder", `${e.target.value}`);
        if (e.target.value.match(/u/i) !== null) {
          e.target.style.textAlign = "center";
        }
        if (e.inputType == "deleteContentBackward") return
        if (e.target.value == "u" || e.target.value == "U") {
          e.target.value = e.target.value.replace(/u/i, "U = ")
        }
      }
    }
  }

  
document.querySelector(".switch").addEventListener("click", estimateOff);
function estimateOff() {
  if (document.getElementById("myonoffswitch2").checked == true) {
    Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) input, #order-sheet div:nth-child(n+3) textarea")).forEach((txt) => {
      if(txt.getAttribute("placeholder") !== null) {
        txt.value = txt.getAttribute("placeholder")
        txt.style.color = "gray";
        txt.style.textAlign = "right";
        if (txt.value.match(/u/i) !== null) {
          txt.style.textAlign = "center"
        }
      }
    })
  }

  if (document.getElementById("myonoffswitch2").checked == false) {
    Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) input, #order-sheet div:nth-child(n+3) textarea")).forEach((txt) => {
      if (txt.style.color == "gray" && txt.style.textAlign == "right") {
        txt.value = "";
        txt.style.color = "black";
        txt.style.textAlign = "center";
      }
      if (txt.style.color == "gray" && txt.value.match("U = ") !== null) {
        txt.value = "";
        txt.style.color = "black";
        txt.classList.add("unaco");
      }
    })
  }
}

// if first 3 veg name&farm same more than three times, return this fucntion below and alert error massage.
document.addEventListener("input", sumEstimate);
function sumEstimate(e) {
  if (document.getElementById("myonoffswitch2").checked == false) return
  let availableTxt = Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(n+5):not(tr:nth-last-child(-n+2)) td:nth-child(n+3)"));
  if (availableTxt.includes(e.target.parentNode)) {
    let currentVeg = Array.from(document.querySelectorAll(`#order-sheet .${e.target.parentNode.className} textarea, #order-sheet .${e.target.parentNode.className} input`)).slice(1, 4);
    if (currentVeg.length == 0) return
    let page3AllCol = [];
    let page5AllCol = [];
    for (let h = 3; h < document.querySelectorAll("#page3 tr:first-child td").length + 1; h++) {
      page3AllCol.push(Array.from(document.querySelectorAll(`#page3-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page3-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
    }
    
    for (let h = 3; h < document.querySelectorAll("#page5 tr:first-child td").length + 1; h++) {
      page5AllCol.push(Array.from(document.querySelectorAll(`#page5-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page5-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
    }
    
    let page3Collection = [];
    let page5Collection = [];

    // for page3 & page5 estimate function
    for (let i = 0; i < page3AllCol.length; i++)
    for (let k = 0; k < page5AllCol.length; k++)
    if (page3AllCol[i][0].value !== "" &&
        page3AllCol[i][1].value !== "" &&
        page3AllCol[i][2].value !== "" &&
        page5AllCol[k][0].value !== "" &&
        page5AllCol[k][1].value !== "" &&
        page5AllCol[k][2].value !== "" &&
        page3AllCol[i][0].value == page5AllCol[k][0].value &&
        page3AllCol[i][1].value == page5AllCol[k][1].value &&
        page3AllCol[i][2].value == page5AllCol[k][2].value &&
        page3AllCol[i][0].value == currentVeg[0].value &&
        page3AllCol[i][1].value == currentVeg[1].value &&
        page3AllCol[i][2].value == currentVeg[2].value &&
        page5AllCol[k][0].value == currentVeg[0].value &&
        page5AllCol[k][1].value == currentVeg[1].value &&
        page5AllCol[k][2].value == currentVeg[2].value) {
        page3AllCol[i][0].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page3AllCol[i][1].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page3AllCol[i][2].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page5AllCol[k][0].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page5AllCol[k][1].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page5AllCol[k][2].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
            page3AllCol[i].slice(3,-1).forEach((txt) => {
              if (txt.getAttribute("placeholder") !== null) {
                let thisPlaceholder = txt.getAttribute("placeholder");
                if (thisPlaceholder > 0) {
                page3Collection.push(parseInt(thisPlaceholder))
              }
              if (thisPlaceholder.match("X") !== null && thisPlaceholder.length > 4) {
                page3Collection.push(parseInt(thisPlaceholder.slice(0, thisPlaceholder.indexOf("X") - 1) * thisPlaceholder.slice(thisPlaceholder.indexOf("X") + 2)))
              }
              if (thisPlaceholder.match("U = ") !== null && thisPlaceholder.length > 4) {
                page3Collection.push(parseInt(thisPlaceholder.slice(4)))
              }
            }
          })
          
          page5AllCol[k].slice(3,-1).forEach((txt) => {
            if (txt.getAttribute("placeholder") !== null) {
              let thisPlaceholder = txt.getAttribute("placeholder");
              if (thisPlaceholder > 0) {
                page5Collection.push(parseInt(thisPlaceholder))
              }
              if (thisPlaceholder.match("X") !== null && thisPlaceholder.length > 4) {
                page5Collection.push(parseInt(thisPlaceholder.slice(0, thisPlaceholder.indexOf("X") - 1) * thisPlaceholder.slice(thisPlaceholder.indexOf("X") + 2)))
              }
              if (thisPlaceholder.match("U = ") !== null && thisPlaceholder.length > 4) {
                page5Collection.push(parseInt(thisPlaceholder.slice(4)))
              }
            }
          })
          
          let page3LastTxt = page3AllCol[i][page3AllCol[i].length - 1];
          let page5LastTxt = page5AllCol[k][page5AllCol[k].length - 1];
          let page3Clear = document.querySelectorAll("#order-sheet #page3 tr:last-child td")[1];
          let page5Clear = document.querySelectorAll("#order-sheet #page5 tr:last-child td")[1];
          let spanTextpage3 = document.createElement("span");
          let spanTextpage5 = document.createElement("span");
          let page3ClearImg = document.createElement("img");
          let page5ClearImg = document.createElement("img");
          page3ClearImg.src = "clear.jpg";
          page5ClearImg.src = "clear.jpg";
          page3ClearImg.setAttribute("class", "clear page3");
          page5ClearImg.setAttribute("class", "clear page5");
          if (page3Clear.children.length == 1) {
            page3Clear.appendChild(page3ClearImg);
          }
          if (page5Clear.children.length == 1) {
            page5Clear.appendChild(page5ClearImg);
          }
          
          if (page3LastTxt.parentNode.children.length == 3) {
            page3LastTxt.parentNode.removeChild(page3LastTxt.parentNode.lastChild);
            page3LastTxt.parentNode.removeChild(page3LastTxt.parentNode.lastChild);
            page3LastTxt.parentNode.appendChild(spanTextpage3);
            page3LastTxt.parentNode.appendChild(page3ClearImg.cloneNode(true));
          } else if (page3LastTxt.parentNode.children.length == 1) {
            page3LastTxt.parentNode.appendChild(spanTextpage3);
            page3LastTxt.parentNode.appendChild(page3ClearImg.cloneNode(true));
          }

          if (page5LastTxt.parentNode.children.length == 3) {
            page5LastTxt.parentNode.removeChild(page5LastTxt.parentNode.lastChild);
            page5LastTxt.parentNode.removeChild(page5LastTxt.parentNode.lastChild);
            page5LastTxt.parentNode.appendChild(spanTextpage5);
            page5LastTxt.parentNode.appendChild(page5ClearImg.cloneNode(true));
          } else if (page5LastTxt.parentNode.children.length == 1) {
            page5LastTxt.parentNode.appendChild(spanTextpage5);
            page5LastTxt.parentNode.appendChild(page5ClearImg.cloneNode(true));
          }
          
          
          if (page3Collection.length == 0 && page5Collection.length == 0) {
          spanTextpage3.innerText = "早 = 0\n午 = 0\n总 = 0";
          spanTextpage5.innerText = "早 = 0\n午 = 0\n总 = 0";
          } else if (page3Collection.length > 0 && page5Collection.length == 0) {
          let page3Sum = page3Collection.reduce((total, num) => total + num);
          spanTextpage3.innerText = `早 = ${page3Sum}\n午 = 0\n总 = ${page3Sum}`
          spanTextpage5.innerText = `早 = ${page3Sum}\n午 = 0\n总 = ${page3Sum}`
          } else if (page3Collection.length == 0 && page5Collection.length > 0) {
          let page5Sum = page5Collection.reduce((total, num) => total + num);
          spanTextpage3.innerText = `早 = 0\n午 = ${page5Sum}\n总 = ${page5Sum}`
          spanTextpage5.innerText = `早 = 0\n午 = ${page5Sum}\n总 = ${page5Sum}`
          } else {
          let page3Sum = page3Collection.reduce((total, num) => total + num);
          let page5Sum = page5Collection.reduce((total, num) => total + num);
          spanTextpage3.innerText = `早 = ${page3Sum}\n午 = ${page5Sum}\n总 = ${(page3Sum + page5Sum)}`
          spanTextpage5.innerText = `早 = ${page3Sum}\n午 = ${page5Sum}\n总 = ${(page3Sum + page5Sum)}`
          }
        }

    let page4AllCol = [];
    let page6AllCol = [];
    for (let h = 3; h < document.querySelectorAll("#page4 tr:first-child td").length + 1; h++) {
      page4AllCol.push(Array.from(document.querySelectorAll(`#page4-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page4-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
    }

    for (let h = 3; h < document.querySelectorAll("#page6 tr:first-child td").length + 1; h++) {
      page6AllCol.push(Array.from(document.querySelectorAll(`#page6-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page6-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
    }

    let page4Collection = [];
    let page6Collection = [];
    for (let j = 0; j < page4AllCol.length; j++)
    for (let l = 0; l < page6AllCol.length; l++)
    // for page4 & page6 estimate function
    if (page4AllCol[j][0].value !== "" &&
        page4AllCol[j][1].value !== "" &&
        page4AllCol[j][2].value !== "" &&
        page6AllCol[l][0].value !== "" &&
        page6AllCol[l][1].value !== "" &&
        page6AllCol[l][2].value !== "" &&
        page4AllCol[j][0].value == page6AllCol[l][0].value &&
        page4AllCol[j][1].value == page6AllCol[l][1].value &&
        page4AllCol[j][2].value == page6AllCol[l][2].value &&
        page4AllCol[j][0].value == currentVeg[0].value &&
        page4AllCol[j][1].value == currentVeg[1].value &&
        page4AllCol[j][2].value == currentVeg[2].value &&
        page6AllCol[l][0].value == currentVeg[0].value &&
        page6AllCol[l][1].value == currentVeg[1].value &&
        page6AllCol[l][2].value == currentVeg[2].value) {
        page4AllCol[j][0].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
        page4AllCol[j][1].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
        page4AllCol[j][2].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
        page6AllCol[l][0].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
        page6AllCol[l][1].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
        page6AllCol[l][2].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
        page4AllCol[j].slice(3,-1).forEach((txt) => {
          if (txt.getAttribute("placeholder") !== null) {
            let thisPlaceholder = txt.getAttribute("placeholder");
            if (thisPlaceholder > 0) {
              page4Collection.push(parseInt(thisPlaceholder))
            }
            if (thisPlaceholder.match("X") !== null && thisPlaceholder.length > 4) {
              page4Collection.push(parseInt(thisPlaceholder.slice(0, thisPlaceholder.indexOf("X") - 1) * thisPlaceholder.slice(thisPlaceholder.indexOf("X") + 2)))
            }
            if (thisPlaceholder.match("U = ") !== null && thisPlaceholder.length > 4) {
              page4Collection.push(parseInt(thisPlaceholder.slice(4)))
            }
          }
        })
        
        page6AllCol[l].slice(3,-1).forEach((txt) => {
          if (txt.getAttribute("placeholder") !== null) {
            let thisPlaceholder = txt.getAttribute("placeholder");
            if (thisPlaceholder > 0) {
              page6Collection.push(parseInt(thisPlaceholder))
            }
            if (thisPlaceholder.match("X") !== null && thisPlaceholder.length > 4) {
              page6Collection.push(parseInt(thisPlaceholder.slice(0, thisPlaceholder.indexOf("X") - 1) * thisPlaceholder.slice(thisPlaceholder.indexOf("X") + 2)))
            }
            if (thisPlaceholder.match("U = ") !== null && thisPlaceholder.length > 4) {
              page6Collection.push(parseInt(thisPlaceholder.slice(4)))
            }
          }
        })

      let page4LastTxt = page4AllCol[j][page4AllCol[j].length - 1];
      let page6LastTxt = page6AllCol[l][page6AllCol[l].length - 1];
      let page4Clear = document.querySelectorAll("#order-sheet #page4 tr:last-child td")[1];
      let page6Clear = document.querySelectorAll("#order-sheet #page6 tr:last-child td")[1];
      let spanTextpage4 = document.createElement("span");
      let spanTextpage6 = document.createElement("span");
      let page4ClearImg = document.createElement("img");
      let page6ClearImg = document.createElement("img");
      page4ClearImg.src = "clear.jpg";
      page6ClearImg.src = "clear.jpg";
      page4ClearImg.setAttribute("class", "clear page4");
      page6ClearImg.setAttribute("class", "clear page6");
      if (page4Clear.children.length == 1) {
        page4Clear.appendChild(page4ClearImg);
      }
      if (page6Clear.children.length == 1) {
        page6Clear.appendChild(page6ClearImg);
      }

      if (page4LastTxt.parentNode.children.length == 3) {
        page4LastTxt.parentNode.removeChild(page4LastTxt.parentNode.lastChild);
        page4LastTxt.parentNode.removeChild(page4LastTxt.parentNode.lastChild);
        page4LastTxt.parentNode.appendChild(spanTextpage4);
        page4LastTxt.parentNode.appendChild(page4ClearImg.cloneNode(true));
      } else if (page4LastTxt.parentNode.children.length == 1) {
        page4LastTxt.parentNode.appendChild(spanTextpage4);
        page4LastTxt.parentNode.appendChild(page4ClearImg.cloneNode(true));
      }

      if (page6LastTxt.parentNode.children.length == 3) {
        page6LastTxt.parentNode.removeChild(page6LastTxt.parentNode.lastChild);
        page6LastTxt.parentNode.removeChild(page6LastTxt.parentNode.lastChild);
        page6LastTxt.parentNode.appendChild(spanTextpage6);
        page6LastTxt.parentNode.appendChild(page6ClearImg.cloneNode(true));
      } else if (page6LastTxt.parentNode.children.length == 1) {
        page6LastTxt.parentNode.appendChild(spanTextpage6);
        page6LastTxt.parentNode.appendChild(page6ClearImg.cloneNode(true));
      }

      if (page4Collection.length == 0 && page6Collection.length == 0) {
        spanTextpage4.innerText = "早 = 0\n午 = 0\n总 = 0";
        spanTextpage6.innerText = "早 = 0\n午 = 0\n总 = 0";
      } else if (page4Collection.length > 0 && page6Collection.length == 0) {
        let page4Sum = page4Collection.reduce((total, num) => total + num);
        spanTextpage4.innerText = `早 = ${page4Sum}\n午 = 0\n总 = ${page4Sum}`
        spanTextpage6.innerText = `早 = ${page4Sum}\n午 = 0\n总 = ${page4Sum}`
      } else if (page4Collection.length == 0 && page6Collection.length > 0) {
        let page6Sum = page6Collection.reduce((total, num) => total + num);
        spanTextpage4.innerText = `早 = 0\n午 = ${page6Sum}\n总 = ${page6Sum}`
        spanTextpage6.innerText = `早 = 0\n午 = ${page6Sum}\n总 = ${page6Sum}`
      } else {
        let page4Sum = page4Collection.reduce((total, num) => total + num);
        let page6Sum = page6Collection.reduce((total, num) => total + num);
        spanTextpage4.innerText = `早 = ${page4Sum}\n午 = ${page6Sum}\n总 = ${(page4Sum + page6Sum)}`
        spanTextpage6.innerText = `早 = ${page4Sum}\n午 = ${page6Sum}\n总 = ${(page4Sum + page6Sum)}`
      }
    }
  }



  // if fisrt three name amended then the span text need to remove
  // page7 bean part and page1 veg name first three match then sum to page1(write on afternoon part if(value !== "") then add this sign "+")
}

document.addEventListener("click", clearEstimate); 
function clearEstimate(e) {
  let thisPage = e.target.className.slice(6);
  if (e.target.classList.contains("clear") && e.target.parentNode.children[0].value !== "Total Kg:" && thisPage !== "page1") {
    let currentCol = Array.from(document.querySelectorAll(`#order-sheet .${e.target.parentNode.className} textarea, #order-sheet .${e.target.parentNode.className} input`)).slice(1,-1);
    e.target.parentNode.removeChild(e.target.parentNode.children[1]);
    e.target.parentNode.removeChild(e.target);
    document.getElementById("myonoffswitch2").checked = false;
    Array.from(document.querySelectorAll("#order-sheet textarea, #order-sheet input")).forEach((txt) => {
      if (txt.value !== "" && txt.style.color == "gray") {
        txt.value = "";
        txt.style.color = "black";
        txt.style.textAlign = "center";
      }
    })
    currentCol.forEach((txt) => {
      txt.removeAttribute("placeholder");
    })
    let thisLastRowTdSpan = Array.from(document.querySelectorAll(`#order-sheet #${thisPage} tr:last-child td span`));
    let thisLastRowTd = Array.from(document.querySelectorAll(`#order-sheet #${thisPage} tr:last-child td`));
    if (thisLastRowTdSpan.length == 0) {
      thisLastRowTd[1].removeChild(thisLastRowTd[1].lastChild);
    }

    if (thisPage == "page3") {
      let page5AllCol = [];
      for (let h = 3; h < document.querySelectorAll("#page5 tr:first-child td").length + 1; h++) {
        page5AllCol.push(Array.from(document.querySelectorAll(`#page5-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page5-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
      }
      for (let k = 0; k < page5AllCol.length; k++)
      if (currentCol[0].value == page5AllCol[k][0].value &&
        currentCol[1].value == page5AllCol[k][1].value &&
        currentCol[2].value == page5AllCol[k][2].value) {
        if (page5AllCol[k][page5AllCol[k].length - 1].parentNode.children.length == 3) {
          let spanText = page5AllCol[k][page5AllCol[k].length - 1].parentNode.children[1];
          spanText.innerText = spanText.innerText.slice(spanText.innerText.indexOf("午"), spanText.innerText.lastIndexOf("\n"));
        }
      }
    }
    if (thisPage == "page4") {
      let page6AllCol = [];
      for (let h = 3; h < document.querySelectorAll("#page6 tr:first-child td").length + 1; h++) {
        page6AllCol.push(Array.from(document.querySelectorAll(`#page6-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page6-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
      }
      for (let l = 0; l < page6AllCol.length; l++)
      if (currentCol[0].value == page6AllCol[l][0].value &&
        currentCol[1].value == page6AllCol[l][1].value &&
        currentCol[2].value == page6AllCol[l][2].value) {
        if (page6AllCol[l][page6AllCol[l].length - 1].parentNode.children.length == 3) {
          let spanText = page6AllCol[l][page6AllCol[l].length - 1].parentNode.children[1];
          spanText.innerText = spanText.innerText.slice(spanText.innerText.indexOf("午"), spanText.innerText.lastIndexOf("\n"));
        }
      }
    }
    if (thisPage == "page5") {
      let page3AllCol = [];
      for (let h = 3; h < document.querySelectorAll("#page3 tr:first-child td").length + 1; h++) {
        page3AllCol.push(Array.from(document.querySelectorAll(`#page3-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page3-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
      }
      for (let i = 0; i < page3AllCol.length; i++)
      if (currentCol[0].value == page3AllCol[i][0].value &&
        currentCol[1].value == page3AllCol[i][1].value &&
        currentCol[2].value == page3AllCol[i][2].value) {
        if (page3AllCol[i][page3AllCol[i].length - 1].parentNode.children.length == 3) {
          let spanText = page3AllCol[i][page3AllCol[i].length - 1].parentNode.children[1];
          spanText.innerText = spanText.innerText.slice(0, spanText.innerText.indexOf("\n"));
        }
      }
    }
    if (thisPage == "page6") {
      let page4AllCol = [];
      for (let h = 3; h < document.querySelectorAll("#page4 tr:first-child td").length + 1; h++) {
        page4AllCol.push(Array.from(document.querySelectorAll(`#page4-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page4-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
      }
      for (let j = 0; j < page4AllCol.length; j++)
      if (currentCol[0].value == page4AllCol[j][0].value &&
        currentCol[1].value == page4AllCol[j][1].value &&
        currentCol[2].value == page4AllCol[j][2].value) {
        if (page4AllCol[j][page4AllCol[j].length - 1].parentNode.children.length == 3) {
          let spanText = page4AllCol[j][page4AllCol[j].length - 1].parentNode.children[1];
          spanText.innerText = spanText.innerText.slice(0, spanText.innerText.indexOf("\n"));
        }
      }
    }
  }
  if (e.target.classList.contains("clear") && e.target.parentNode.children[0].value == "Total Kg:" && thisPage !== "page1") {
    e.target.parentNode.removeChild(e.target);
    document.getElementById("myonoffswitch2").checked = false;
    Array.from(document.querySelectorAll("#order-sheet textarea, #order-sheet input")).forEach((txt) => {
      if (txt.value !== "" && txt.style.color == "gray") {
        txt.value = "";
        txt.style.color = "black";
        txt.style.textAlign = "center";
      }
    })
    
    let spanCollection = [];
    let theOppSpanCollection = [];
    let thisLastRowTd = Array.from(document.querySelectorAll(`#order-sheet #${thisPage} tr:last-child td:nth-child(n+3)`));
    let theOppPageLastRowTd = [];
    if (thisPage == "page3") {
      theOppPageLastRowTd = Array.from(document.querySelectorAll("#order-sheet #page5 tr:last-child td:nth-child(n+3)"));
    } else if (thisPage == "page4") {
      theOppPageLastRowTd = Array.from(document.querySelectorAll("#order-sheet #page6 tr:last-child td:nth-child(n+3)"));
    } else if (thisPage == "page5") {
      theOppPageLastRowTd = Array.from(document.querySelectorAll("#order-sheet #page3 tr:last-child td:nth-child(n+3)"));
    } else if (thisPage == "page6") {
      theOppPageLastRowTd = Array.from(document.querySelectorAll("#order-sheet #page4 tr:last-child td:nth-child(n+3)"));
    }
    thisLastRowTd.forEach((td) => {
      if (td.children.length > 2) {
        spanCollection.push(td.children[1].innerText);
        td.removeChild(td.children[1]);
        td.removeChild(td.children[1]);
      }
    })
    theOppPageLastRowTd.forEach((td) => {
      if (td.children.length > 1) {
        theOppSpanCollection.push(td.children[1])
      }
    })
    theOppSpanCollection.forEach((span) => {
      if (thisPage == "page3" || thisPage == "page4") {
        span.innerText = span.innerText.slice(span.innerText.indexOf("午"), span.innerText.lastIndexOf("\n"))
      }
      if (thisPage == "page5" || thisPage == "page6") {
        span.innerText = span.innerText.slice(0, span.innerText.indexOf("\n"))
      }
    })
    Array.from(document.querySelectorAll(`#order-sheet #${thisPage} textarea, #order-sheet #${thisPage} input`)).forEach((txt) => {
      txt.removeAttribute("placeholder");
    })
  }
  if (e.target.classList.contains("clear") && thisPage == "page1") {
    Array.from(document.querySelectorAll("#order-sheet #page1 textarea")).forEach((txt) => {
      txt.disabled = false;
    })
    e.target.parentNode.removeChild(e.target);
    document.getElementById("myonoffswitch2").checked = false;
    let tdToClear = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(6) td, #order-sheet #page1-table-upper tr:nth-child(10) td, #order-sheet #page1-table-lower tr:nth-child(6) td, #order-sheet #page1-table-lower tr:nth-child(10) td"));
    tdToClear.forEach((td) => {
      const textarea = document.createElement("textarea");
      textarea.setAttribute("rows", "1");
      td.innerHTML = "";
      td.appendChild(textarea);
    })
  }
}

document.addEventListener("keyup", strikeText);
function strikeText (e) {
  if (e.keyCode === 192) {
    e.target.value = e.target.value.replace("`", "");
    if (e.target.style.textDecoration == "line-through red") {
      e.target.style.textDecoration = "";
    } else {
      e.target.style.textDecoration = "line-through red";
    }
  }
}

// activate estimate mode on if first three match while it contain placeholder
// input that added by "+" function is not apply to this below function, need to amend the sheet to include farm name textarea
Array.from(document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:nth-child(-n+4) td textarea")).forEach((txt) => {txt.addEventListener("input", detectEstimate)})
function detectEstimate(e) {
  let currentVeg = Array.from(document.querySelectorAll(`#order-sheet .${e.target.parentNode.className} textarea, #order-sheet .${e.target.parentNode.className} input`)).slice(1, 4);
  if (currentVeg.length == 0) return
  let page3AllCol = [];
  let page5AllCol = [];
  for (let h = 3; h < document.querySelectorAll("#page3 tr:first-child td").length + 1; h++) {
    page3AllCol.push(Array.from(document.querySelectorAll(`#page3-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page3-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
  }
  
  for (let h = 3; h < document.querySelectorAll("#page5 tr:first-child td").length + 1; h++) {
    page5AllCol.push(Array.from(document.querySelectorAll(`#page5-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page5-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
  }

  // for page3 & page5 estimate function
  for (let i = 0; i < page3AllCol.length; i++)
  for (let k = 0; k < page5AllCol.length; k++)
  if (page3AllCol[i][0].value !== "" &&
      page3AllCol[i][1].value !== "" &&
      page3AllCol[i][2].value !== "" &&
      page5AllCol[k][0].value !== "" &&
      page5AllCol[k][1].value !== "" &&
      page5AllCol[k][2].value !== "" &&
      page3AllCol[i][0].value == page5AllCol[k][0].value &&
      page3AllCol[i][1].value == page5AllCol[k][1].value &&
      page3AllCol[i][2].value == page5AllCol[k][2].value &&
      page3AllCol[i][0].value == currentVeg[0].value &&
      page3AllCol[i][1].value == currentVeg[1].value &&
      page3AllCol[i][2].value == currentVeg[2].value &&
      page5AllCol[k][0].value == currentVeg[0].value &&
      page5AllCol[k][1].value == currentVeg[1].value &&
      page5AllCol[k][2].value == currentVeg[2].value &&
      (page3AllCol[i].some((txt) => {return txt.getAttribute("placeholder") !== null}) ||
       page5AllCol[k].some((txt) => {return txt.getAttribute("placeholder") !== null}))) {
        page3AllCol[i][0].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page3AllCol[i][1].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page3AllCol[i][2].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page5AllCol[k][0].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page5AllCol[k][1].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        page5AllCol[k][2].parentNode.setAttribute("id", `${page3AllCol[i][1].parentNode.className}+${page5AllCol[k][1].parentNode.className}`);
        Array.from(document.querySelectorAll("#order-sheet input, #order-sheet textarea")).forEach((txt) => {
          if(txt.getAttribute("placeholder") !== null) {
            txt.value = txt.getAttribute("placeholder");
            txt.style.color = "gray";
            txt.style.textAlign = "right";
            if (txt.value.match(/u/i) !== null) {
              txt.style.textAlign = "center";
            }
          }
        })
        document.getElementById("myonoffswitch2").checked = true;
        sumEstimate(e);
      }

      let page4AllCol = [];
      let page6AllCol = [];
      for (let h = 3; h < document.querySelectorAll("#page4 tr:first-child td").length + 1; h++) {
        page4AllCol.push(Array.from(document.querySelectorAll(`#page4-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page4-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
      }
    
      for (let h = 3; h < document.querySelectorAll("#page6 tr:first-child td").length + 1; h++) {
        page6AllCol.push(Array.from(document.querySelectorAll(`#page6-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) textarea, #page6-table tr:not(:first-child):not(:nth-last-child(2)) td:nth-child(${h}) input`)))
      }
    
      for (let j = 0; j < page4AllCol.length; j++)
      for (let l = 0; l < page6AllCol.length; l++)
      // for page4 & page6 estimate function
      if (page4AllCol[j][0].value !== "" &&
          page4AllCol[j][1].value !== "" &&
          page4AllCol[j][2].value !== "" &&
          page6AllCol[l][0].value !== "" &&
          page6AllCol[l][1].value !== "" &&
          page6AllCol[l][2].value !== "" &&
          page4AllCol[j][0].value == page6AllCol[l][0].value &&
          page4AllCol[j][1].value == page6AllCol[l][1].value &&
          page4AllCol[j][2].value == page6AllCol[l][2].value &&
          page4AllCol[j][0].value == currentVeg[0].value &&
          page4AllCol[j][1].value == currentVeg[1].value &&
          page4AllCol[j][2].value == currentVeg[2].value &&
          page6AllCol[l][0].value == currentVeg[0].value &&
          page6AllCol[l][1].value == currentVeg[1].value &&
          page6AllCol[l][2].value == currentVeg[2].value &&
          (page4AllCol[j].some((txt) => {return txt.getAttribute("placeholder") !== null}) ||
           page6AllCol[l].some((txt) => {return txt.getAttribute("placeholder") !== null}))) {
          page4AllCol[j][0].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
          page4AllCol[j][1].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
          page4AllCol[j][2].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
          page6AllCol[l][0].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
          page6AllCol[l][1].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
          page6AllCol[l][2].parentNode.setAttribute("id", `${page4AllCol[j][1].parentNode.className}+${page6AllCol[l][1].parentNode.className}`);
            Array.from(document.querySelectorAll("#order-sheet input, #order-sheet textarea")).forEach((txt) => {
              if(txt.getAttribute("placeholder") !== null) {
                txt.value = txt.getAttribute("placeholder");
                txt.style.color = "gray";
                txt.style.textAlign = "right";
                if (txt.value.match(/u/i) !== null) {
                  txt.style.textAlign = "center";
                }
              }
            })
            document.getElementById("myonoffswitch2").checked = true;
            sumEstimate(e);
          }

// if matched veg name amended immediately remove the both side span text
if (document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`)[document.querySelectorAll(`#order-sheet .${e.target.parentNode.className}`).length - 1].children.length == 1) return;
  let matchId = e.target.parentNode.id;
  let page3o4MatchedCol = matchId.slice(0, matchId.indexOf("+"));
  let page5o6MatchedCol = matchId.slice(matchId.indexOf("+") + 1);
  let page3o4matchedPair = document.querySelectorAll(`#order-sheet .${page3o4MatchedCol}`);
  let page5o6matchedPair = document.querySelectorAll(`#order-sheet .${page5o6MatchedCol}`);
  if (page3o4matchedPair[1].children[0].value !== page5o6matchedPair[1].children[0].value ||
      page3o4matchedPair[2].children[0].value !== page5o6matchedPair[2].children[0].value ||
      page3o4matchedPair[3].children[0].value !== page5o6matchedPair[3].children[0].value) {
        let thisPage = page3o4matchedPair[page3o4matchedPair.length - 1].children[2].className.slice(6);
        let theOppPage = page5o6matchedPair[page5o6matchedPair.length - 1].children[2].className.slice(6);
        page3o4matchedPair[page3o4matchedPair.length - 1].removeChild(page3o4matchedPair[page3o4matchedPair.length - 1].children[1]);
        page3o4matchedPair[page3o4matchedPair.length - 1].removeChild(page3o4matchedPair[page3o4matchedPair.length - 1].children[1]);
        page5o6matchedPair[page5o6matchedPair.length - 1].removeChild(page5o6matchedPair[page5o6matchedPair.length - 1].children[1]);
        page5o6matchedPair[page5o6matchedPair.length - 1].removeChild(page5o6matchedPair[page5o6matchedPair.length - 1].children[1]);
        page3o4matchedPair[1].removeAttribute("id");
        page3o4matchedPair[2].removeAttribute("id");
        page3o4matchedPair[3].removeAttribute("id");
        page5o6matchedPair[1].removeAttribute("id");
        page5o6matchedPair[2].removeAttribute("id");
        page5o6matchedPair[3].removeAttribute("id");
        let thisLastRowTdSpan = Array.from(document.querySelectorAll(`#order-sheet #${thisPage} tr:last-child td span`));
        let thisLastRowTd = Array.from(document.querySelectorAll(`#order-sheet #${thisPage} tr:last-child td`));
        if (thisLastRowTdSpan.length == 0) {
          thisLastRowTd[1].removeChild(thisLastRowTd[1].lastChild);
        }
        let theOppLastRowTdSpan = Array.from(document.querySelectorAll(`#order-sheet #${theOppPage} tr:last-child td span`));
        let theOppLastRowTd = Array.from(document.querySelectorAll(`#order-sheet #${theOppPage} tr:last-child td`));
        if (theOppLastRowTdSpan.length == 0) {
          theOppLastRowTd[1].removeChild(theOppLastRowTd[1].lastChild);
        }
      }
}

document.addEventListener("input", estimatePage1)
function estimatePage1 (e) {
  let availableTd = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(6) td:not(td:nth-child(1)), #order-sheet #page1-table-upper tr:nth-child(10) td:not(td:nth-child(1)), #order-sheet #page1-table-lower tr:nth-child(6) td:not(td:nth-child(1)), #order-sheet #page1-table-lower tr:nth-child(10) td:not(td:nth-child(1))"));
  availableTd.forEach((td) => {for (let i = 0; i < td.children.length; i++) {document.getElementById("myonoffswitch2").checked == true ? td.children[i].style.color = "gray" : td.children[i].style.color = "black";}})
  if (document.getElementById("myonoffswitch2").checked == false) return

  let everyColOfPage1 = [];
  for (let i = 2; i < document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(1) td").length + 1; i++) {
    everyColOfPage1.push(Array.from(document.querySelectorAll(`#order-sheet #page1-table-upper td:nth-child(${i})`)))
  }
  for (let i = 2; i < document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(1) td").length + 1; i++) {
    everyColOfPage1.push(Array.from(document.querySelectorAll(`#order-sheet #page1-table-lower td:nth-child(${i})`)))
  }
  
  everyColOfPage1.forEach((arr) => {
    if (e.target.parentNode == arr[5] || e.target.parentNode == arr[9] || e.target.parentNode == arr[2] || e.target.parentNode == arr[3]) {        
      let result;
      let FarmList = ["J1", "J2", "J3", "29ML", "31A", "31B", "31U", "SA"];
      let arr1_0 = arr[1].children[0];
      let arr5_0Val = arr[5].children[0].value;
      let arr9_0 = arr[9].children[0];
      let arr5_0Num = parseInt(arr5_0Val.slice(arr5_0Val.indexOf(" ")));
      let arr9_0Num = parseInt(arr9_0.value.slice(arr9_0.value.indexOf(" ")));
      let farmListInArr5 = [];
      let farmListInArr9 = [];
      Array.from(arr[5].children).forEach((txt) => {FarmList.some((FN) => {return FN == txt.value.slice(0, txt.value.indexOf(" "))}) && txt.value.indexOf(" ") > 0 && txt.value.match("-") == null ? farmListInArr5.push(txt.value.slice(0, txt.value.indexOf(" "))) : null;});
      Array.from(arr[9].children).forEach((txt) => {FarmList.some((FN) => {return FN == txt.value.slice(0, txt.value.indexOf(" "))}) && txt.value.indexOf(" ") > 0 && txt.value.match("-") == null ? farmListInArr9.push(txt.value.slice(0, txt.value.indexOf(" "))) : null;});
      
      // to disable arr[0]
      Array.from(arr[0].children).forEach((txt) => {arr5_0Val !== "" || arr9_0.value !== "" ? txt.disabled = true : txt.disabled = false;})
      arr[5].children.length == 1 ? arr[4].children[0].disabled = false : arr[4].children[0].disabled = true;
      
      if ((!(e.inputType == "insertText") && arr[2].children[0].value == "" && arr[3].children[0].value == "") && (e.target.parentNode == arr[2] || e.target.parentNode == arr[3])) {
        const textarea1 = document.createElement("textarea");
        const textarea2 = document.createElement("textarea");
        const textarea3 = document.createElement("textarea");
        textarea1.setAttribute("rows", "1");
        textarea1.setAttribute("spellcheck", "false");
        textarea2.setAttribute("rows", "1");
        textarea2.setAttribute("spellcheck", "false");
        textarea3.setAttribute("rows", "1");
        textarea3.setAttribute("spellcheck", "false");
        console.log("Alert : Clear All Estimate For This Column?")
        //if (result) return
        arr[0].innerHTML = "";
        arr[5].innerHTML = "";
        arr[9].innerHTML = "";
        arr[0].appendChild(textarea1);
        arr[5].appendChild(textarea2);
        arr[9].appendChild(textarea3);
        arr1_0.value = "";
        arr[4].children[0].value = "";
      }
        
        if (arr[2].children[0].value == "" && arr[3].children[0].value == "") return
       
        insertInput ();
        removeInput ();
        if (e.target.value.match("-") !== null) return
        toWriteDownFarmName ();
        checkFarmName ();
        if (result) return;
        checkAvailabilityFarm ();
        if (result) return;
        checkDuplicateFarm ();
        if (result) return;
        checkLimit ();
        if (result) return;
        toEqualizeArr0andArr9 ();
        calculateArr1 ();
        forSingleInput ();

        // Default function, work on arr[9]
        function insertInput () {
          if (e.target.value.match(/\+/) !== null) {
            e.target.value = e.target.value.replace("\+", "");
            function appendNewInput () {
              let addtxt9 = document.createElement("input");
              let addtxt0 = document.createElement("input");
              addtxt9.setAttribute("spellcheck", "false");
              addtxt0.setAttribute("spellcheck", "false");
              arr[9].appendChild(addtxt9);
              arr[0].appendChild(addtxt0);
            }
            function appendNewInputForFirstRow () {
              let addtxt9 = document.createElement("input");
              let addtxt0 = document.createElement("input");
              addtxt9.setAttribute("spellcheck", "false");
              addtxt0.setAttribute("spellcheck", "false");
              arr[0].appendChild(addtxt0);
            }
            e.target.parentNode == arr[5] && ((arr[5].children.length == 1 && arr[9].children.length == 1) || (arr[5].children.length == 2 && arr[9].children.length == 2) || (arr[5].children.length == 3 && arr[9].children.length == 3)) ? appendNewInput() : null;
            e.target.parentNode == arr[9] && ((arr[0].children.length == 1 && arr[9].children.length == 1) || (arr[0].children.length == 2 && arr[9].children.length == 2) || (arr[0].children.length == 3 && arr[9].children.length == 3)) ? appendNewInputForFirstRow() : null;
            arr[5].children.length >= 1 ? arr[4].children[0].disabled = true : null; 
          }
        }

        // after remove check equalize
        function removeInput () {
          if (e.target.parentNode.children.length > 1 && e.target.value.match(/-/) !== null) {
            function allFunction () {
              checkFarmName ();
              if (result) return;
              checkAvailabilityFarm ();
              if (result) return;
              checkDuplicateFarm ();
              if (result) return;
              checkLimit();
              if (result) return;
              toEqualizeArr0andArr9 ();
              calculateArr1 ();
              forSingleInput ();
            }
            allFunction ();
            e.target.parentNode == arr[9] && ((arr[9].children.length == 4 && arr[0].children.length == 4) || (arr[9].children.length == 3 && arr[0].children.length == 3) || (arr[9].children.length == 2 && arr[0].children.length == 2)) ? arr[0].removeChild(arr[0].children[Array.from(arr[9].children).indexOf(e.target)]) : null;
            e.target.parentNode == arr[5] && arr[5].children.length == 2 ? arr[4].children[0].disabled = false : arr[4].children[0].disabled = true; 
            farmListInArr5.length > 1 ? arr[4].children[0].value = farmListInArr5.join("+") : null;
            farmListInArr5.length == 1 ? arr[4].children[0].value = farmListInArr5[0] : null;
          }
        }
       
        // if Farm Name correct, No duplicate, for multiple inputs
        function toWriteDownFarmName () {
          if (e.target.parentNode == arr[5]) {
            for (let i = 0; i < arr[5].children.length; i++) {
              if (FarmList.some((FN) => {return FN == arr[5].children[i].value.slice(0, arr[5].children[i].value.indexOf(" "))}) && arr[5].children[i].value.indexOf(" ") > 0) {
                farmListInArr5.length > 1 ? arr[4].children[0].value = farmListInArr5.join("+") : null;
                farmListInArr5.length == 1 ? arr[4].children[0].value = farmListInArr5[0] : null;
                arr[5].children.length > 1 && arr[5].children.length == arr[9].children.length && arr[9].children[i].value == "" ? arr[9].children[i].value = arr[5].children[i].value.slice(0, arr[5].children[i].value.indexOf(" ")) + " " : null;
              }
            }
          }
        }

        function checkDuplicateFarm () {
          //if (e.target.value.indexOf(" ") < 0) return
          //if (e.target.value.match(/-/) !== null) return
          for (let i = 0; i < farmListInArr5.length; i++) {
            for (let j = 0; j < farmListInArr5.length; j++) {
              if (i !== j && farmListInArr5[i] !== "") {
                if (farmListInArr5[i] === farmListInArr5[j]) {
                  console.log(`Alert : Found Duplicate Farm Name "${farmListInArr5[i]}"`);
                  arr1_0.value = "ERROR";
                  result = true;
                }
              }
            }
          }
          for (let i = 0; i < farmListInArr9.length; i++) {
            for (let j = 0; j < farmListInArr9.length; j++) {
              if (i !== j && farmListInArr9[i] !== "") {
                if (farmListInArr9[i] === farmListInArr9[j]) {
                  console.log(`Alert : Found Duplicate Farm Name "${farmListInArr9[i]}"`);
                  arr[0].children[Array.from(arr[9].children).indexOf(e.target)].value = "";
                  arr1_0.value = "ERROR";
                  result = true;
                }
              }
            }
          }
        }
        
        function checkLimit() {
          //if (e.target.value.indexOf(" ") < 0) return
          Array.from(arr[5].children).forEach((txt5) => {
            Array.from(arr[9].children).forEach((txt9) => {
              if (txt5.value.indexOf(" ") > 0 && txt9.value.indexOf(" ") > 0 && txt5.value.match("-") == null && txt9.value.match("-") == null && txt5.value.slice(0, txt5.value.indexOf(" ")) == txt9.value.slice(0, txt9.value.indexOf(" ")) && txt5.value.slice(txt5.value.indexOf(" ")) - txt9.value.slice(txt5.value.indexOf(" ")) < 0) {
                console.log(`Alert : ${txt5.value.slice(0, txt5.value.indexOf(" "))} Over Limit`);
                arr[0].children[Array.from(arr[9].children).indexOf(txt9)].value = "12 - " + txt9.value.slice(0, txt9.value.indexOf(" ")) + " OVER";
                arr1_0.value = "ERROR";
                result = true;
              }
            })
          })
        }

        function checkFarmName () {
          Array.from(arr[5].children).forEach((txt) => {
            if (txt.value.match("-") == null && txt.value.indexOf(" ") > 0) {
              if (FarmList.every((farm) => {return txt.value.slice(0, txt.value.indexOf(" ")) !== farm})) {
                txt.value.slice(0, txt.value.indexOf(" ")) == "" ? console.log("Alert : No Farm Name Found") : console.log("Alert : \""+txt.value.slice(0, txt.value.indexOf(" "))+"\"" + "Not Farm Name");
                arr[0].children.length == 1 ? arr[0].children[0].value = "" : null;
                arr1_0.value = "ERROR";
                result = true;
              }
              if (txt.value.slice(txt.value.indexOf(" ") + 1) !== "" && txt.value.slice(txt.value.indexOf(" ") + 1) !== "✔" && !Number.isInteger(Number(txt.value.slice(txt.value.indexOf(" ") + 1)))) {
                console.log(`Alert : "${txt.value.slice(txt.value.indexOf(" ") + 1)}" Is Not A Number`)
                arr1_0.value = "ERROR";
                result = true;
              }
            }
          })
          Array.from(arr[9].children).forEach((txt) => {
            if (txt.value.match("-") == null && txt.value.indexOf(" ") > 0) {
              if (FarmList.every((farm) => {return txt.value.slice(0, txt.value.indexOf(" ")) !== farm})) {
                txt.value.slice(0, txt.value.indexOf(" ")) == "" ? console.log("Alert : No Farm Name Found") : console.log("Alert : \""+txt.value.slice(0, txt.value.indexOf(" "))+"\"" + "Not Farm Name");
                arr[0].children[Array.from(arr[9].children).indexOf(txt)].value = "";
                arr1_0.value = "ERROR";
                result = true;
              }
              if (txt.value.slice(txt.value.indexOf(" ") + 1) !== "" && !Number.isInteger(Number(txt.value.slice(txt.value.indexOf(" ") + 1)))) {
                console.log(`Alert : "${txt.value.slice(txt.value.indexOf(" ") + 1)}" Is Not A Number`)
                arr1_0.value = "ERROR";
                result = true;
              }
            }
          })
        }

        function checkAvailabilityFarm () {
          //if (e.target.value.indexOf(" ") < 0) return
          if (Array.from(arr[5].children).every((txt) => {return txt.value !== ""}) && Array.from(arr[9].children).every((txt) => {return txt.value !== ""})) {
            for (let i = 0; i < farmListInArr9.length; i++) {
              if (farmListInArr5.every((txt5) => {return txt5 !== farmListInArr9[i]})) {
                console.log(`Alert : Farm Name "${farmListInArr9[i]}" Not Found`);
                e.target.parentNode == arr[9] ? arr[0].children[Array.from(arr[9].children).indexOf(e.target)].value = "" : null;
                arr1_0.value = "ERROR";
                result = true;
              }
            }
          }
        }

        function toEqualizeArr0andArr9 () {
          //if (e.target.value.match("-") !== null) return
         let newArr9 = [];
         Array.from(arr[9].children).forEach((txt) => {txt.value.match("-") == null ? newArr9.push(txt) : null;})
         newArr9.forEach((txt) => {
            if (txt.value.indexOf(" ") > 0) {
              if (FarmList.some((farm) => {return txt.value.slice(0, txt.value.indexOf(" ")) == farm})) {
                farmListInArr5.some((FN) => {return FN == txt.value.slice(0, txt.value.indexOf(" "))}) && parseInt(txt.value.slice(txt.value.indexOf(" "))) > 0 ? arr[0].children[Array.from(arr[9].children).indexOf(txt)].value = "12 - " + txt.value : null;
                parseInt(txt.value.slice(txt.value.indexOf(" "))) == 0 ? arr[0].children[Array.from(arr[9].children).indexOf(txt)].value = "12 - X" : null;
                Number.isNaN(parseInt(txt.value.slice(txt.value.indexOf(" ")))) ? arr[0].children[Array.from(arr[9].children).indexOf(txt)].value = "" : null;
              }
            }
            if (txt.value.indexOf(" ") < 0 || FarmList.every((farm) => {return txt.value.slice(0, txt.value.indexOf(" ")) !== farm}) || farmListInArr5.every((FN) => {return FN !== txt.value.slice(0, txt.value.indexOf(" "))})) {
              Array.from(arr[0].children).forEach((txt) => {txt.value = "";})
            }
          })
        }

        function calculateArr1 () {
          let newArr5 = [];
          let newArr9 = [];
          Array.from(arr[5].children).forEach((txt) => {txt.value.match("-") == null && ((txt.value.indexOf(" ") > 0 && Number.isInteger(parseInt(txt.value.slice(txt.value.indexOf(" "))))) || txt.value.slice(txt.value.indexOf(" ") + 1) == "✔") ? newArr5.push(txt.value.slice(txt.value.indexOf(" ") + 1)) : null;});
          Array.from(arr[9].children).forEach((txt) => {txt.value.match("-") == null && /* (( */txt.value.indexOf(" ") > 0 && Number.isInteger(parseInt(txt.value.slice(txt.value.indexOf(" "))))/*)  || txt.value == "0") */ ? newArr9.push(parseInt(txt.value.slice(txt.value.indexOf(" ")))) : null;});
          if (newArr5.length > 0 && newArr9.length > 0) {
            if (newArr5.some((value) => {return value == "✔"})) {
              arr1_0.value = "✔";
            }
            if (newArr5.every((value) => {return value !== "✔"})) {
              arr1_0.value = newArr5.reduce((a,b) => {return parseInt(a) + parseInt(b)}) - newArr9.reduce((a,b) => {return a + b});
              newArr5.reduce((a,b) => {return parseInt(a) + parseInt(b)}) - newArr9.reduce((a,b) => {return a + b}) == 0 ? arr1_0.value = "-" : null;
              //newArr9[0] == "0" ? arr[0].children[0].value = "12 - X" : null;
              if (newArr5.reduce((a,b) => {return parseInt(a) + parseInt(b)}) - newArr9.reduce((a,b) => {return a + b}) < 0) {
                arr1_0.value = "ERROR";
              }
            }
          } else if (newArr5.length == 0 || newArr9.length == 0) {
            arr1_0.value = "";
          }
        }
        
        function forSingleInput () {
          if (arr[5].children.length == 1 && arr[9].children.length == 1) {
            if (arr5_0Val.indexOf(" ") < 0 && arr9_0.value.indexOf(" ") < 0) {
              if (Number.isInteger(parseInt(arr5_0Val)) && Number.isInteger(parseInt(arr9_0.value))) {
                if (parseInt(arr5_0Val) - parseInt(arr9_0.value) < 0) {
                  console.log("Over Limit");
                  arr[0].children[0].value = "12 - OVER";
                  return
                }
                parseInt(arr5_0Val) - parseInt(arr9_0.value) > 0 ? arr1_0.value = parseInt(arr5_0Val) - parseInt(arr9_0.value) : arr1_0.value = "";
                parseInt(arr5_0Val) - parseInt(arr9_0.value) >= 0 ? arr[0].children[0].value = "12 - " + arr9_0.value : null;
                parseInt(arr5_0Val) - parseInt(arr9_0.value) == 0 ? arr1_0.value = "-" : null;
                parseInt(arr9_0.value) == "0" ? arr[0].children[0].value = "12 - X" : null;
              }
              if (arr5_0Val == "✔" && Number.isInteger(parseInt(arr9_0.value))) {
                arr1_0.value = "✔"
                parseInt(arr9_0.value) == "0" ? arr[0].children[0].value = "12 - X" : null;
                parseInt(arr9_0.value) > 0 ? arr[0].children[0].value = "12 - " + arr9_0.value : null;
              }
            }
            if (arr5_0Val.indexOf(" ") > 0 && arr9_0.value.indexOf(" ") > 0 && FarmList.some((farm) => {return arr5_0Val.slice(0, arr5_0Val.indexOf(" ")) == farm}) && FarmList.some((farm) => {return arr9_0.value.slice(0, arr9_0.value.indexOf(" ")) == farm})) {
              if (arr5_0Num - arr9_0Num < 0) {
                console.log("Over Limit");
                arr[0].children[0].value = "12 - OVER";
                return
              }
              arr5_0Num - arr9_0Num > 0 ? arr1_0.value = arr5_0Num - arr9_0Num : arr1_0.value = "";
              arr5_0Num - arr9_0Num >= 0 ? arr[0].children[0].value = "12 - " + arr9_0.value : null;
              arr5_0Num - arr9_0Num == 0 ? arr1_0.value = "-" : null;
              arr9_0Num == 0 ? arr[0].children[0].value = "12 - X" : null;
              if (arr5_0Val.slice(arr5_0Val.indexOf(" ") + 1) == "✔") {
                arr1_0.value = "✔";
                arr9_0Num > 0 ? arr[0].children[0].value = "12 - " + arr9_0.value : null;
                arr9_0Num == 0 ? arr[0].children[0].value = "12 - X" : null;
              }
            }
            !Number.isInteger(arr9_0Num) ? arr[0].children[0].value = "" : null;
            arr9_0.value == "" ? arr[0].children[0].value = "" : null;
           }
        }
      }

     // clear estimate
     let clearPic = document.createElement("img");
     clearPic.src = "clear.jpg";
     clearPic.setAttribute("class", "clear page1");
     let leftDownCorner = document.querySelector("#order-sheet #page1-table-lower tr:nth-child(14) td:nth-child(1)")
     leftDownCorner.innerText = "";
     leftDownCorner.appendChild(clearPic);

    })

    /* let page3AllCol = [];
    let page5AllCol = [];
    for (let h = 3; h < document.querySelectorAll("#page3 tr:first-child td").length + 1; h++) {
      page3AllCol.push(Array.from(document.querySelectorAll(`#page3-table td:nth-child(${h}) textarea, #page3-table td:nth-child(${h}) input`)))
    }
   
    for (let h = 3; h < document.querySelectorAll("#page5 tr:first-child td").length + 1; h++) {
      page5AllCol.push(Array.from(document.querySelectorAll(`#page5-table td:nth-child(${h}) textarea, #page5-table td:nth-child(${h}) input`)))
    }

    let page4AllCol = [];
    let page6AllCol = [];
    for (let h = 3; h < document.querySelectorAll("#page4 tr:first-child td").length + 1; h++) {
      page4AllCol.push(Array.from(document.querySelectorAll(`#page4-table td:nth-child(${h}) textarea, #page4-table td:nth-child(${h}) input`)))
    }
 
    for (let h = 3; h < document.querySelectorAll("#page6 tr:first-child td").length + 1; h++) {
      page6AllCol.push(Array.from(document.querySelectorAll(`#page6-table td:nth-child(${h}) textarea, #page6-table td:nth-child(${h}) input`)))
    }


    everyColOfPage1.forEach((arrPage1) => {
      page3AllCol.forEach((arrPage3) => {
        if (arrPage1[2].children[0].value == arrPage3[1].value && arrPage1[2].children[0].value !== "" && arrPage3[1].value !== "") {
         arrPage3[0].value = arrPage1[1].children[0].value
        }
      })
    }) */
}



//(be careful not to mix bag with other UOM like bdle or ctn) (kg won't be count both sideCrt() or totalDown())
// date
// page3 - page7 quantity of row and col depend from the setting
// page 1 no stock then page3 - page7 potong veg name
// summerise the code

// CSS bug:
// Header scroll to fix need fixs, different computer different result.
// switch page need modify, diffrent computer different result.
// Estimate mode button width need adjust.
// mix lable need to change small and place at upper.

// javascript bug:
// totalDown() if 1 X55 it will count as 1 X 5, this one need fix
// and if label accidentally erased, the label wont replace
// if the label amended to other will have bugssss
// if order sheet page3 - page7 veg name amended then page1 record need update when press "Save"
// stock in(if name same then quatity also same) error : page 1 "Vege" quantity is not show in any order sheet
// total to page 1 error: pageN "Vege" ?kg is not show in page1 *Warning*
// save button will sum to page1 but auto width not working.