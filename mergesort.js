function split(array) {
  const center = array.length / 2;
  const firstHalf = array.slice(0, center);
  const secondHalf = array.slice(center);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  const merged = [];
  leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  for (; leftIndex < left.length; leftIndex++) merged.push(left[leftIndex]);
  for (; rightIndex < right.length; rightIndex++)
    merged.push(right[rightIndex]);
  return merged;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  const splits = split(array);
  left = splits[0];
  right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
}
