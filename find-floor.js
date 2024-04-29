//function to get index of floor of num in sorted array low to high
function findFloor(arr, num, low = 0, high = arr.length - 1) {
  let mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  } else if (num >= arr[high]) {
    return arr[high];
  } else if (arr[mid] === num) {
    return arr[mid];
  } else if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  } else if (num < arr[mid]) {
    return findFloor(arr, num, low, mid - 1);
  } else {
    return findFloor(arr, num, mid + 1, high);
  }
}

module.exports = findFloor;
