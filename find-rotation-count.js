//returns the count of rotations for a sorted array and then rotated
function findRotationCount(arr) {
  n = arr.length;
  low = 0;
  high = n - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let prev = (mid - 1) % n;
    let next = (mid + 1) % n;

    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid;
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1;
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
