// function ternarySearch(arr, x) {
//   let l = 0,
//     r = arr.length - 1;

//   while (r >= l) {
//     let mid1 = l + Math.floor((r - l) / 3);
//     let mid2 = r + Math.floor((r - l) / 3);

//     if (arr[mid1] === x) return mid1;
//     if (arr[mid2] === x) return mid2;

//     if (x < arr[mid1]) r = mid1 - 1;
//     else if (x > arr[mid2]) l = mid2 + 1;
//     else {
//       l = mid1 + 1;
//       r = mid2 - 1;
//     }
//   }
//   return -1;
// }

// // console.log(ternarySearch([0, 1, 2, 6, 6, 4, 7, 8, 9], 6));

// // Recursive Impimentation

// function ternarySearch1(arr, l, x) {
//   if (r >= l) {
//     let mid1 = l + Math.floor(r - l) / 3;
//     let mid2 = r + (r - l) / 3;

//     if (mid1 === x) {
//     }
//   }
// }

// //invoke

// let arr = [-1, 1, 2, 3, 4, 5, 99, 999];

// // console.log(ternarySearch1(arr, 0, arr.length - 1), 89);

// // we make 4 comparision in ternory search and in binary search we compare 2 ...so we use binary search only

// //Find the duplicate

// function duplicate(arr, l, r, x) {
//   if (r >= l) {
//     let mid = Math.floor(l + (r - l) / 2);

//     if ((mid === x && arr[mid - 1] === x) || arr[mid + 1] === x) {
//       return true;
//     }

//     if (mid < x) return duplicate(arr, l, mid - 1, x);

//     if (mid > x) return duplicate(arr, mid + 1, r, x);
//   }
//   return false;
// }
// arr = [1, 2, 3, 4, 4, 7];

// // console.log(duplicate(arr, 0, arr.length - 1, 0));

// //Checking duplicate using recursion

// function Recursionduplicate(arr, l, r, x) {
//   if (r >= l) {
//     let mid = Math.floor(l + (r - l) / 2);

//     if ((mid === x && arr[mid - 1] === x) || arr[mid + 1] === x) {
//       return true;
//     }

//     if (mid < x) return (r = mid - 1);

//     if (mid > x) return (l = mid + 1);
//   }
//   return false;
// }
// arr = [1, 4, 3, 4, 7];

// // console.log(duplicate(arr, 0, arr.length - 1, 4));

// //Ading two get sum x
// function sumogtwo(arr, l, r, x) {
//   if (r >= l) {
//     let mid = l + Math.floor((r - l) / 2);

//     if (arr[mid] + arr[mid - 1] === x || arr[mid] + arr[mid + 1] === x)
//       return true;
//     if (arr[mid] + arr[mid - 1] > x || arr[mid] + arr[mid + 1] > x)
//       return sumogtwo(arr, l, mid - 1, x);
//     else return sumogtwo(arr, mid + 1, r, x);
//   }
//   return -1;
// }

// arr = [1, 3, 4, 5];
// x = 10;
// // console.log(sumogtwo(arr, 0, arr.length - 1, x));

// // to find the Number of rotation in a sorted array

function noRotatio(arr, l, r) {
  if (r < l) return 0;

  if (l == r) return l;

  let mid = l + Math.floor((r - l) / 2);

  if (mid < r && arr[mid + 1] < arr[mid]) return mid + 1;

  if (mid > l && arr[mid] < arr[mid - 1]) return mid;

  if (arr[mid] < arr[r]) noRotatio(arr, l, mid - 1);

  return noRotatio(arr, mid + 1, r);
}

arr = [11, 15, 19, 1, 3, 4, 9];

// console.Consolelog(noRotatio(arr, 0, arr.length - 1));

// Programme to count NO of pairs

function countNumberOfPairs(A, B) {
  let n = A.length;

  let D = new Array(n);

  for (let i = 0; i < n; i++) {
    D[i] = A[i] - B[i];
  }

  D.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (D[i] <= 0) {
      let k = findIndex(D, 0, D.length, -D[i]);
      count = count + (n - k);
    } else {
      count = count + (n - i + (n - i - 1)) / 2;
      break;
    }
  }
  return count;
}

function findIndex(arr, l, h, ele) {
  while (l < h) {
    let mid = l + Math.floor((h - l) / 2); // (n-1)c2 (to find combination)

    if (arr[mid] > ele) h = mid;
    else l = mid + 1;
  }

  return l;
}

// console.log(countNumberOfPairs([4, 8, 2, 6, 2], [4, 5, 4, 1, 3]));

// Finding the square of number using binary Search

function square(n) {
  return n * n;
}

n = 5;
console.log(square(n));
