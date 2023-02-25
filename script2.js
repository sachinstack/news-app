function isAllocationPossible(arr, mid, k) {
  let countOfStudents = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) return false;

    if (sum + arr[i] > mid) {
      countOfStudents++;
      sum = arr[i];

      // if the students required becomes greter than give number of students,return false
      if (countOfStudents > k) return false;
    } else {
      sum = sum + arr[i];
    }
  }
  return true;
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
// console.log(booksallocation([12, 34, 67, 90], 2));

//Find the min time needed to paint a board
function isPaintingAllocationPosiible(arr, mid, k) {
  let noofpainte = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) return false;

    if (sum + arr[i] > mid) {
      noofpainte++;
      sum = arr[i];
    }
    if (noofpainte > k) return false;
    else {
      sum = sum + arr[i];
    }
  }
  return true;
}

function paintAllocation(arr, k) {
  let l = arr[arr.length - 1],
    r = arr.reduce((a, b) => a + b);

  let mid = l + Math.floor(r - l) / 2;
  let ans = -1;
  while (r >= l) {
    if (isPaintingAllocationPosiible(arr, mid, k)) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
}

// console.log(paintAllocation([10, 20, 30, 40], 2));

//To find the median two sorted array
