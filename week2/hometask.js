function squareOrSquareRoot(array) {
  const newArray = [];
  array.forEach((element) => {
    const newElem =
      Math.sqrt(element) % 1 === 0 ? Math.sqrt(element) : element * element;
    newArray.push(newElem);
  });
  //     if (diff === 0) {
  //         newArray.push(sqrNum);
  //     } else {
  //         newArray.push(element * element);
  //     }
  // });

  return newArray;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

function removeEveryOther(arr) {
  //your code here
  return arr.filter((elem, i) => i % 2 == 0);

  // let newarr = [];
  // for (let i = 0; i < arr.length; i++) {
  //     (i % 2 === 0) ? newarr.push(arr[i]) : 0;
  // }
  // return newArr;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

console.log(
  removeEveryOther([
    "Keep",
    "Remove",
    "Keep",
    "Remove",
    "Keep",
    "Remove",
    "Keep",
    "Remove",
  ])
);
