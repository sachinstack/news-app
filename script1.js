const square = function (num, precison) {
  let s = 0,
    end = num;

  let mid,
    ans = 0.0;

  while (s <= end) {
    mid = s + Math.floor((s - end) / 2);

    if (mid * mid === num) {
      ans = mid;
      break;
    }

    if (mid * mid < num) {
      //finding on the left side of the array
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  // for franctional part
  let increment = 0.1;

  for (let i = 0; i < precison; i++) {
    while (ans * ans <= num) {
      ans = (parseFloat(ans) + parseFloat(increment)).toFixed(precison);
    }
    ans = (parseFloat(ans) - parseFloat(increment)).toFixed(precison);
    increment = increment / 10;
  }
  return ans;
};

// console.log(square(5, 5));

//Find Sixtuplets

function findSixpul(arr) {
  let n = arr.length;
  let index = 0;
  let RHS = new Array(n * n * n + 1);

  // To find RHS
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          RHS[index++] = arr[i] * (arr[j] + arr[k]);
        }
      }
    }
  }
  let RHSLength = RHS.length;
  RHS.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        let val = arr[i] * arr[j] + arr[k];
        count = count + (lastOccurence(RHS, val) - firstOccurence(RHS, val));
      }
    }
  }
  return count;
}
//Find lastOccurence and firstOccurence and complete the programmen

// Programme to find no of books allocation to student
function isAllocationPossible(arr, mid, k) {
  let countOfStudents = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) return false;

    if (sum + arr[i] > mid) {
      countOfStudents++;
      sum = arr[i];

      // if the students required becomes greter than give number of students,return false
      if (countOfStudents > k) {
        return false;
      } else {
        sum = sum + arr[i];
      }
    }
    return true;
  }
}

function booksallocation(arr, k) {
  //k= No of students
  if (arr.length < k) {
    return -1;
  }
  let l = arr.length - 1,
    r = arr.reduce((a, b) => a + b); //To find the sumation of all the elements in array
  let ans = -1;

  while (r >= l) {
    let mid = l + Math.floor((l - r) / 2);

    if (isAllocationPossible(arr, mid, k)) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
}
console.log(booksallocation([12, 34, 67, 90], 2));
