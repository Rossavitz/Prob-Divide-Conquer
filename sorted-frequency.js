//find left index of target number in sorted array
function findLeftIndex(arr, target, leftIdx = 0, rightIdx = arr.length - 1) {
  if (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (
      (middleIdx == 0 || target > arr[middleIdx - 1]) &&
      arr[middleIdx] == target
    ) {
      return middleIdx;
    } else if (target > arr[middleIdx]) {
      return findLeftIndex(arr, target, middleIdx + 1, rightIdx);
    } else {
      return findLeftIndex(arr, target, leftIdx, middleIdx - 1);
    }
  }
  return -1;
}

//find right index of target number in sorted array
function findRightIndex(arr, target, leftIdx = 0, rightIdx = arr.length - 1) {
  if (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (
      (middleIdx == arr.length - 1 || target < arr[middleIdx + 1]) &&
      arr[middleIdx] == target
    ) {
      return middleIdx;
    } else if (target < arr[middleIdx]) {
      return findRightIndex(arr, target, leftIdx, middleIdx - 1);
    } else {
      return findRightIndex(arr, target, middleIdx + 1, rightIdx);
    }
  }
  return -1;
}

//count the frequency of number in a sorted array
function sortedFrequency(arr, num) {
  let leftIndex = findLeftIndex(arr, num);
  if (leftIndex == -1) return leftIndex;
  let rightIndex = findRightIndex(arr, num);
  return rightIndex - leftIndex + 1;
}
module.exports = sortedFrequency;
