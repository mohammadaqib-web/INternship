function addSymbol(arr) {
  let newArr = arr.map((item, index) => {
    let str = "₹" + item;
    return str;
  });
  console.log(newArr);
}

addSymbol([100, 250, 500]);
