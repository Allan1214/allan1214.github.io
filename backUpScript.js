/* 
//This migth be useful when save order
function totalDown() {
    let everyCol = [];
    let orderCollectionAllCol = [];
    let splitedAllCol = [];
    let bagBdleBox = [];
    let kgAllCol = [];
    let totalCrtOfEachKg = [];
    let theKgAllCol = [];
  // create an array for collect all order
  for (let i = 0; i < eachColClass.length; i++) {
    everyCol.push(Array.from(document.querySelectorAll(`#order-sheet tr:nth-child(n + 4):nth-child(-n + ${eachColClass[i].length - 1}) .Col${i} textarea, #order-sheet tr:nth-child(n + 4):nth-child(-n + ${eachColClass[i].length - 1}) .Col${i} input`)));
  }
  // remove last input
  for (let i = 0; i < everyCol.length; i++) {
    orderCollectionAllCol.push([]);
    splitedAllCol.push([]);
    bagBdleBox.push([]);
    kgAllCol.push([]);
    totalCrtOfEachKg.push([]);
    theKgAllCol.push([]);
    for (let j = 0; j < everyCol[i].length; j++) {
      if (everyCol[i][j].value !== "" && everyCol[i][j].value !== "-" && everyCol[i][j].value.match(/X/g) !== null && everyCol[i][j].value.match(/kg/g) == null && everyCol[i][j].value.match(/ctn/g) == null) {
          orderCollectionAllCol[i].push(everyCol[i][j].value);
      }
      // search for "kg" and add to splited collection
      if (everyCol[i][j].value.match(/kg/g) !== null) {
          kgAllCol[i].push(everyCol[i][j].value);
      }
    }
  }
  // add kg to splited collection
  for (let i = 0; i < kgAllCol.length; i++) {
    for (let j = 0; j < kgAllCol[i].length; j++) {
      if (kgAllCol[i].length !== 0) {
        splitedAllCol[i].push(kgAllCol[i][j]);
      }
    }
  }

  // search bag bdle and box quantity
  for (let i = 0; i < orderCollectionAllCol.length; i++) {
    for (let j = 0; j < orderCollectionAllCol[i].length; j++) {
      if (orderCollectionAllCol[i][j].match(/(bag|bdle)/g) !== null)
      bagBdleBox[i].push(orderCollectionAllCol[i][j].match(/(bag|bdle)/g))
    }
  }

  // filter out all label bag bdle and box
  for (let i = 0; i < orderCollectionAllCol.length; i++) {
    for (let j = 0; j < orderCollectionAllCol[i].length; j++) {
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("(", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(")", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("bag", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("bdle", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(" A", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(" B", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(" C", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(" D", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(" E", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace(" F", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("A ", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("B ", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("C ", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("D ", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("E ", "");
      orderCollectionAllCol[i][j] = orderCollectionAllCol[i][j].replace("F ", "");
    }
  }
  
  // retrieve the kg part
  for (let i = 0; i < orderCollectionAllCol.length; i++) {
    for (let j = 0; j < orderCollectionAllCol[i].length; j++) {
      theKgAllCol[i].push(orderCollectionAllCol[i][j].slice(orderCollectionAllCol[i][j].indexOf("X") + 2));
    }
  }
  
  // remove duplicates inside theKg
  for (let i = 0; i < theKgAllCol.length; i++) {
    theKgAllCol[i] = theKgAllCol[i].filter((item, pos, self) => {
      return self.indexOf(item) === pos;
    });
    // sort theKgAllCol[i]
    theKgAllCol[i].sort((a, b) => a - b);
  }
  // filter the orderCollection by each theKg
  let saperatedFromKg = [];
  for (let i = 0; i < theKgAllCol.length; i++) {
    saperatedFromKg.push([]);
    for (let j = 0; j < theKgAllCol[i].length; j++) {
      saperatedFromKg[i].push(orderCollectionAllCol[i].filter((a) => {return a.slice(a.indexOf("X") + 2) == theKgAllCol[i][j];}));
    }
  }

  // retrieve the Crt part from each saperated Kg order
  for (let h = 0; h < saperatedFromKg.length; h++) {
    for (let i = 0; i < saperatedFromKg[h].length; i++) {
      for (let j = 0; j < saperatedFromKg[h][i].length; j++) {
        saperatedFromKg[h][i][j] = parseInt(saperatedFromKg[h][i][j].slice(0, saperatedFromKg[h][i][j].indexOf("X") - 1));}
    }
  }

  // total up the crt from each saperated Kg order which was retrieved from the crt part
  let theCrtAllCol = [];
  for (let i = 0; i < saperatedFromKg.length; i++) {
    theCrtAllCol.push([]);
    for (j = 0; j < saperatedFromKg[i].length; j++) {
      theCrtAllCol[i].push(saperatedFromKg[i][j].reduce((total, num) => total + num));
    }
  }
  // simulately combine theCrt and theKg
  for (i = 0; i < theKgAllCol.length; i++) {
    for (let j = 0; j < theKgAllCol[i].length; j++) {
      totalCrtOfEachKg[i] += theCrtAllCol[i][j] + " X " + theKgAllCol[i][j] + "\n";
    }
  }
  let totalQuantityOfCrt = [];
  for (i = 0; i < theCrtAllCol.length; i++) {
    if (theCrtAllCol[i].length > 0) {
      totalQuantityOfCrt[i] = theCrtAllCol[i].reduce((total, num) => total + num) - bagBdleBox[i].length;
    }
  }
  
  // split from the totalCrtOfEachKg
  for (i = 0; i < totalCrtOfEachKg.length; i++) {
    if (totalCrtOfEachKg[i].length !== 0) {
      if (totalCrtOfEachKg[i].match(/X/g).length > 0) {
        splitedAllCol[i] = splitedAllCol[i].concat(Array.from(totalCrtOfEachKg[i].split("\n")));
      }
    }
  }

  let n = document.createElement("input");
  // clear the lower part every time using this function if its splited order not equal to ""
  for (let i = 0; i < totalCrt.length; i++) {
    totalCrt[i].innerHTML = "";
    if (splitedAllCol[i].length == 0) {
      totalCrt[i].innerHTML = "<input>"
    }
  }

  newSplitedAllCol = splitedAllCol;


  // appendChild n times depent the splited.length
  for (let i = 0; i < splitedAllCol.length; i++) {
    for (let j = 0; j < splitedAllCol[i].length; j++) {
      totalCrt[i].appendChild(n.cloneNode(true));
      totalCrt[i].children[j].value = splitedAllCol[i][j];
    }
  }
  for (let i = 0; i < totalCrt.length; i++) {
    if (totalCrt[i].children.length > 1) {
      if (bagBdleBox[i].length > 0 && totalQuantityOfCrt[i] > 0) {
        totalCrt[i].children[totalCrt[i].children.length - 1].value = totalQuantityOfCrt[i]+"("+bagBdleBox[i].length+bagBdleBox[i][0]+")"
      } else if (bagBdleBox[i].length <= 0 && totalQuantityOfCrt[i] > 0){
        totalCrt[i].children[totalCrt[i].children.length - 1].value = totalQuantityOfCrt[i]
      } else if (bagBdleBox[i].length > 0 && totalQuantityOfCrt[i] <= 0){
        totalCrt[i].children[totalCrt[i].children.length - 1].value = "("+bagBdleBox[i].length+bagBdleBox[i][0]+")"
      }
    }
  }
}
  */

/* document.addEventListener("keyup", sideCrt)
function sideCrt() {
let firstColOfEachPage = [];
let everyRow = [];
let totalTrOfEachPage = [];
for (let i = 3; i < 8; i++) {
  totalTrOfEachPage[i] = Array.from(document.querySelectorAll(`#order-sheet #page${i} tr`));
  for (let j = 4; j < totalTrOfEachPage[i].length; j++) {
    everyRow.push(Array.from(document.querySelectorAll(`#order-sheet #page${i} tr:nth-child(${j}):nth-child(n - ${totalTrOfEachPage[i].length}) textarea, #order-sheet #page${i} tr:nth-child(${j}):nth-child(n - ${totalTrOfEachPage[i].length}) input`)));
    
  }
}
for (var i = 0; i < everyRow.length; i++) {
  firstColOfEachPage.push(everyRow[i][0]);
  everyRow[i] = everyRow[i].slice(2);
}

let everyRowOrder = [];
let everyRowBagBdle = [];
for (let i = 0; i < everyRow.length; i++) {
  everyRowOrder.push([]);
  everyRowBagBdle.push([]);
  for (let j = 0; j < everyRow[i].length; j++) {
    if (everyRow[i][j].value.match(/bag|bdle|ctn/) !== null) {
      everyRowBagBdle[i].push(everyRow[i][j].value);
    }
    if (everyRow[i][j].value.match(/X/g) !== null && everyRow[i][j].value.match(/kg/) == null && everyRow[i][j].value.match(/bag|bdle|ctn/) == null) {
      everyRowOrder[i].push(everyRow[i][j].value);
    }
  }
}

let everyRowOrderString = [];
let filterLabelToDeductCrt = [];
let mixedCrtToDeduct = [];
// kick out(splice.()) the first occurrence of every label
for (let i = 0; i < everyRowOrder.length; i++) {
  mixedCrtToDeduct.push([]);
  everyRowOrderString[i] = everyRowOrder[i].join();
  filterLabelToDeductCrt[i] = everyRowOrderString[i].match(/A|B|C|D|E|F/g);
  if (filterLabelToDeductCrt[i] !== null) {
    if (filterLabelToDeductCrt[i].join().match(/F/) !== null) {
      filterLabelToDeductCrt[i].splice(filterLabelToDeductCrt[i].indexOf("F"), 1)
    }
    if (filterLabelToDeductCrt[i].join().match(/E/) !== null) {
      filterLabelToDeductCrt[i].splice(filterLabelToDeductCrt[i].indexOf("E"), 1)
    }
    if (filterLabelToDeductCrt[i].join().match(/D/) !== null) {
      filterLabelToDeductCrt[i].splice(filterLabelToDeductCrt[i].indexOf("D"), 1)
    }
    if (filterLabelToDeductCrt[i].join().match(/C/) !== null) {
      filterLabelToDeductCrt[i].splice(filterLabelToDeductCrt[i].indexOf("C"), 1)
    }
    if (filterLabelToDeductCrt[i].join().match(/B/) !== null) {
      filterLabelToDeductCrt[i].splice(filterLabelToDeductCrt[i].indexOf("B"), 1)
    }
    if (filterLabelToDeductCrt[i].join().match(/A/) !== null) {
      filterLabelToDeductCrt[i].splice(filterLabelToDeductCrt[i].indexOf("A"), 1)
    }
    mixedCrtToDeduct[i] = filterLabelToDeductCrt[i].length;
  }
}

let everyRowBagBdleString = [];
let filterLabelToDeductBag = [];
let mixedBagToDeduct = [];
// kick out(splice.()) the first occurrence of every label
for (let i = 0; i < everyRowBagBdle.length; i++) {
  mixedBagToDeduct.push([]);
  everyRowBagBdleString[i] = everyRowBagBdle[i].join();
  filterLabelToDeductBag[i] = everyRowBagBdleString[i].match(/A|B|C|D|E|F/g);
  if (filterLabelToDeductBag[i] !== null) {
    if (filterLabelToDeductBag[i].join().match(/F/) !== null) {
      filterLabelToDeductBag[i].splice(filterLabelToDeductBag[i].indexOf("F"), 1)
    }
    if (filterLabelToDeductBag[i].join().match(/E/) !== null) {
      filterLabelToDeductBag[i].splice(filterLabelToDeductBag[i].indexOf("E"), 1)
    }
    if (filterLabelToDeductBag[i].join().match(/D/) !== null) {
      filterLabelToDeductBag[i].splice(filterLabelToDeductBag[i].indexOf("D"), 1)
    }
    if (filterLabelToDeductBag[i].join().match(/C/) !== null) {
      filterLabelToDeductBag[i].splice(filterLabelToDeductBag[i].indexOf("C"), 1)
    }
    if (filterLabelToDeductBag[i].join().match(/B/) !== null) {
      filterLabelToDeductBag[i].splice(filterLabelToDeductBag[i].indexOf("B"), 1)
    }
    if (filterLabelToDeductBag[i].join().match(/A/) !== null) {
      filterLabelToDeductBag[i].splice(filterLabelToDeductBag[i].indexOf("A"), 1)
    }
    mixedBagToDeduct[i] = filterLabelToDeductBag[i].length;
  }
}

// filter out all label bag bdle and box from everyRowOrder
for (let i = 0; i < everyRowOrder.length; i++) {
  for (let j = 0; j < everyRowOrder[i].length; j++) {
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("(", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(")", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("bag", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("bdle", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("kg", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("ctn", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(" A", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(" B", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(" C", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(" D", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(" E", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace(" F", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("A ", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("B ", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("C ", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("D ", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("E ", "");
    everyRowOrder[i][j] = everyRowOrder[i][j].replace("F ", "");
  }
}

// filter out all label bag bdle and box from everyRowBagBdle
for (let i = 0; i < everyRowBagBdle.length; i++) {
  for (let j = 0; j < everyRowBagBdle[i].length; j++) {
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("(", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(")", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("bag", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("bdle", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("kg", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("ctn", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(" A", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(" B", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(" C", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(" D", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(" E", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace(" F", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("A ", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("B ", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("C ", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("D ", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("E ", "");
    everyRowBagBdle[i][j] = everyRowBagBdle[i][j].replace("F ", "");
  }
}

// retrieve the crt part from order
let everyRowOrderCrtPart = [];
let totalCrtOfEachRow = [];
for (i = 0; i < everyRowOrder.length; i++) {
  everyRowOrderCrtPart.push([]);
  totalCrtOfEachRow.push([]);
  for (let j = 0; j < everyRowOrder[i].length; j++) {
    everyRowOrderCrtPart[i].push(parseInt(everyRowOrder[i][j].slice(0, everyRowOrder[i][j].indexOf("X") - 1)))
    totalCrtOfEachRow[i] = everyRowOrderCrtPart[i].reduce((total, num) => total + num)
  }
}

// retrieve the crt part from bag
let everyRowBagBdleCrtPart = [];
let totalBagOfEachRow = [];
for (let i = 0; i < everyRowBagBdle.length; i++) {
  everyRowBagBdleCrtPart.push([]);
  totalBagOfEachRow.push([]);
  for (let j = 0; j < everyRowBagBdle[i].length; j++) {
    everyRowBagBdleCrtPart[i].push(parseInt(everyRowBagBdle[i][j].slice(0, everyRowBagBdle[i][j].indexOf("X") - 1)));
    if (everyRowBagBdleCrtPart[i].length > 0) {
      totalBagOfEachRow[i] = everyRowBagBdleCrtPart[i].reduce((total, num) => total + num);
    }
  }
}

for (let i = 0; i < firstColOfEachPage.length; i++) {
  if (totalCrtOfEachRow[i].length == 0 && mixedCrtToDeduct[i].length == 0 && totalBagOfEachRow[i].length == 0 && mixedBagToDeduct[i].length == 0) {
    firstColOfEachPage[i].value = "";
  }
  if (totalCrtOfEachRow[i] > 0 && mixedCrtToDeduct[i].length == 0 && totalBagOfEachRow[i].length == 0 && mixedBagToDeduct[i].length == 0) {
    firstColOfEachPage[i].value = totalCrtOfEachRow[i] + "  ";
  }
  if (totalCrtOfEachRow[i] > 0 && mixedCrtToDeduct[i] > 0 && totalBagOfEachRow[i].length == 0 && mixedBagToDeduct[i].length == 0) {
    firstColOfEachPage[i].value = (totalCrtOfEachRow[i] - mixedCrtToDeduct[i])+"  ";
  }
  if (totalCrtOfEachRow[i] > 0 && mixedCrtToDeduct[i] > 0 && totalBagOfEachRow[i] > 0 && mixedBagToDeduct[i].length == 0) {
    firstColOfEachPage[i].value = totalBagOfEachRow[i]+" + "+ (totalCrtOfEachRow[i] - mixedCrtToDeduct[i]) + "  ";
  }
  if (totalCrtOfEachRow[i].length == 0 && mixedCrtToDeduct[i].length == 0 && totalBagOfEachRow[i] > 0 && mixedBagToDeduct[i].length == 0) {
    firstColOfEachPage[i].value = totalBagOfEachRow[i]+"~";
  }
  if (totalCrtOfEachRow[i].length == 0 && mixedCrtToDeduct[i].length == 0 && totalBagOfEachRow[i] > 0 && mixedBagToDeduct[i] > 0) {
    firstColOfEachPage[i].value = (totalBagOfEachRow[i] - mixedBagToDeduct[i])+"~";
  }
  if (totalCrtOfEachRow[i] > 0 && mixedCrtToDeduct[i].length == 0 && totalBagOfEachRow[i] > 0 && mixedBagToDeduct[i].length == 0) {
    firstColOfEachPage[i].value = totalBagOfEachRow[i]+" + "+ totalCrtOfEachRow[i] + "  ";
  }
  if (totalCrtOfEachRow[i] > 0 && mixedCrtToDeduct[i].length == 0 && totalBagOfEachRow[i] > 0 && mixedBagToDeduct[i] > 0) {
    firstColOfEachPage[i].value = (totalBagOfEachRow[i]-mixedBagToDeduct[i])+" + "+ totalCrtOfEachRow[i] + "  ";
  }
  if (totalCrtOfEachRow[i] > 0 && mixedCrtToDeduct[i] > 0 && totalBagOfEachRow[i] > 0 && mixedBagToDeduct[i] > 0) {
    firstColOfEachPage[i].value = (totalBagOfEachRow[i]-mixedBagToDeduct[i])+" + "+ (totalCrtOfEachRow[i] - mixedCrtToDeduct[i]) + "  ";
  }
 }

  let firstColValueOfEachPage = [];
  for (let i = 3; i < 8; i++) {
    firstColValueOfEachPage.push(Array.from(document.querySelectorAll(`#order-sheet #page${i} td:first-child textarea`)));
  }
  let allCrtPart = [];
  let allCrtBagPart = [];
  for (let i = 0; i < firstColValueOfEachPage.length; i++) {
    firstColValueOfEachPage[i] = firstColValueOfEachPage[i].slice(3, -1);
 }

 for (let i = 0; i < firstColValueOfEachPage.length; i++) {
    allCrtPart.push([]);
    allCrtBagPart.push([]);
    for (let j = 0; j < firstColValueOfEachPage[i].length; j++) {
      if (firstColValueOfEachPage[i][j].value.match(/\+/g) == null && firstColValueOfEachPage[i][j].value !== "" && firstColValueOfEachPage[i][j].value.match(/\~/g) == null) {
        allCrtPart[i].push(parseInt(firstColValueOfEachPage[i][j].value))
      }
      if (firstColValueOfEachPage[i][j].value.match(/\+/g) !== null) {
        allCrtPart[i].push(parseInt(firstColValueOfEachPage[i][j].value.slice(firstColValueOfEachPage[i][j].value.indexOf("+") + 1)));
        allCrtBagPart[i].push(parseInt(firstColValueOfEachPage[i][j].value.slice(0, firstColValueOfEachPage[i][j].value.indexOf("+") - 1)));
      }
      if (firstColValueOfEachPage[i][j].value.match(/\~/g) !== null) {
        allCrtBagPart[i].push(parseInt(firstColValueOfEachPage[i][j].value.slice(0, firstColValueOfEachPage[i][j].value.indexOf("~"))))
      }
    }
 }

  let lastCellOfFirstColOfEachPage = [];
  for (let i = 3; i < 8; i++) {
    lastCellOfFirstColOfEachPage.push(Array.from(document.querySelectorAll(`#order-sheet #page${i} td:first-child textarea`))[document.querySelectorAll(`#order-sheet #page${i} td:first-child textarea`).length - 1])
  }
  for (var i = 0; i < lastCellOfFirstColOfEachPage.length; i++) {
    if (allCrtBagPart[i].length == 0 && allCrtPart[i].length > 0) {
      lastCellOfFirstColOfEachPage[i].value = allCrtPart[i].reduce((total, num) => total + num);
    }
    if (allCrtBagPart[i].length > 0 && allCrtPart[i].length == 0) {
      lastCellOfFirstColOfEachPage[i].value = "circle"+"-"+allCrtBagPart[i].reduce((total, num) => total + num);
    }
    if (allCrtBagPart[i].length > 0 && allCrtPart[i].length > 0) {
      lastCellOfFirstColOfEachPage[i].value = allCrtBagPart[i].reduce((total, num) => total + num)+" + "+allCrtPart[i].reduce((total, num) => total + num);
    }
  }
} */

// let page1UpperSumPage3 = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(5) td textarea")).slice(1, 14);
// let page1UpperSumPage5 = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(6) td textarea")).slice(1, 14);
// let page1UpperSub = Array.from(document.querySelectorAll("#order-sheet #page1-table-upper tr:nth-child(7) td textarea")).slice(1, 14);
// let page1LowerSumPage4 = Array.from(document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(5) td textarea")).slice(1, 14);
// let page1LowerSumPage6 = Array.from(document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(6) td textarea")).slice(1, 14);
// let page1LowerSub = Array.from(document.querySelectorAll("#order-sheet #page1-table-lower tr:nth-child(7) td textarea")).slice(1, 14);
// let Page1AllSubTotal = page1UpperSumPage3.concat(page1LowerSumPage4, page1UpperSumPage5, page1LowerSumPage6);

//if(same vege name)
// document.addEventListener("keyup", sumToPage1);
// function sumToPage1(e) {
//   let orderSheetVegName = [];
//   for (let i = 0; i < document.querySelectorAll("#order-sheet div:nth-child(n+3) tr:first-child td:nth-child(n+3)").length; i++) {
//     orderSheetVegName.push(Array.from(document.querySelectorAll(`#order-sheet .Col${i} textarea, #order-sheet .Col${i} input`)))
//   }

//   let Page1VegName = [];
//   for (let i = 1; i < document.querySelectorAll("#page1-table-upper tr:first-child td").length + 1; i++) {
//     Page1VegName.push(Array.from(document.querySelectorAll(`#page1-table-upper td:nth-child(${i}) textarea, #page1-table-upper td:nth-child(${i}) input`)))
//   }
//   for (let i = 1; i < document.querySelectorAll("#page1-table-lower tr:first-child td").length + 1; i++) {
//     Page1VegName.push(Array.from(document.querySelectorAll(`#page1-table-lower td:nth-child(${i}) textarea, #page1-table-lower td:nth-child(${i}) input`)))
//   }

//   //thisVegOrder migth need to replace with manual get from each Col, but is lagging now already
//   let totalKg = 0;
//   for (let i = 0; i < thisVegOrder.length; i++) {
//     if (thisVegOrder[i].match(/kg/) !== null) {
//       thisVegOrder[i] = thisVegOrder[i].replace(/kg/, "")
//       totalKg += parseInt(thisVegOrder[i]);
//     }
//     if (thisVegOrder[i].match(/ X /) !== null) {
//       totalKg += (thisVegOrder[i].slice(0, thisVegOrder[i].indexOf("X") - 1) * thisVegOrder[i].slice(thisVegOrder[i].indexOf("X") + 2))
//     }
//   }

//   for (let i = 0; i < Page1VegName.length; i++) {
//     // don't know this one got problem or not "j"
//     for (let j = 0; j < orderSheetVegName.length; j++) 
//     if (orderSheetVegName[j][1].value == Page1VegName[i][1].value &&
//         orderSheetVegName[j][2].value == Page1VegName[i][2].value &&
//         orderSheetVegName[j][3].value == Page1VegName[i][3].value &&
//         Page1VegName[i][1].value !== "" &&
//         Page1VegName[i][2].value !== "" &&
//         Page1VegName[i][3].value !== "") {
//           if (i < Page1VegName.length / 2 && e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id == "page3") {
//             Page1VegName[i][5].value = totalKg;
//           } else if (i < Page1VegName.length / 2 && e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id == "page5") {
//             Page1VegName[i][6].value = totalKg;
//           } else if (i >= Page1VegName.length / 2 && e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id == "page4") {
//             Page1VegName[i][5].value = totalKg;
//           } else if (i >= Page1VegName.length / 2 && e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id == "page6") {
//             Page1VegName[i][6].value = totalKg;
//           }
//           Page1VegName[i][7].value = parseInt(Page1VegName[i][5].value) + parseInt(Page1VegName[i][6].value)
//     }

//   }




//   /* let totalKgOfEachCol = [];
//   if (!Array.isArray(newSplitedAllCol)) return
//   for (let i = 0; i < newSplitedAllCol.length; i++) {
//     totalKgOfEachCol.push([]);
//     for (let j = 0; j < newSplitedAllCol[i].length; j++) {
//         totalKgOfEachCol[i][j] = (newSplitedAllCol[i][j].slice(0, newSplitedAllCol[i][j].indexOf("X") - 1) * newSplitedAllCol[i][j].slice(newSplitedAllCol[i][j].indexOf("X") + 2))
//     }
//     if (totalKgOfEachCol[i].length > 1) {
//       totalKgOfEachCol[i] = [totalKgOfEachCol[i].reduce((total, num) => total + num)];
//     }
//   }
//   totalKgOfEachCol = totalKgOfEachCol.slice(0,52);
//   for (let i = 0; i < totalKgOfEachCol.length; i++) {
//     if (totalKgOfEachCol[i][0] > 0) {
//       Page1AllSubTotal[i].value = totalKgOfEachCol[i]
//     }
//   }
//   for (let i = 0; i < page1UpperSub.length; i++) {
//     if (page1UpperSumPage3[i].value == "") {
//       page1UpperSub[i].value = parseInt(page1UpperSumPage5[i].value);
//     } else if (page1UpperSumPage5[i].value == "") {
//       page1UpperSub[i].value = parseInt(page1UpperSumPage3[i].value);
//     } else {
//       page1UpperSub[i].value = parseInt(page1UpperSumPage3[i].value) + parseInt(page1UpperSumPage5[i].value);
//     }

//     if (page1LowerSumPage4[i].value == "") {
//       page1LowerSub[i].value = parseInt(page1LowerSumPage6[i].value);
//     } else if (page1LowerSumPage6[i].value == "") {
//       page1LowerSub[i].value = parseInt(page1LowerSumPage4[i].value);
//     } else {
//       page1LowerSub[i].value = parseInt(page1LowerSumPage4[i].value) + parseInt(page1LowerSumPage6[i].value);
//     }
//     page1UpperSub[i].value = page1UpperSub[i].value.replace("NaN", "");
//     page1LowerSub[i].value = page1LowerSub[i].value.replace("NaN", "");
//   } */
// }