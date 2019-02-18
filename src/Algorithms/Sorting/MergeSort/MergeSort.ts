import { createDataSet } from '../../utility/DataSet';

const mergeSort = (arr: any[]/*, l: number, r: number*/) => {
  const l: number = 0;
  const r: number = arr.length - 1;
  const merge = (arr: any[], l: number, m: number, r: number) => {
    // Find sizes of two subarrays to be merged
    const n1: number = m - l + 1;
    const n2: number = r - m;

    /*Create temp arrays */
    const L: any[] = [];
    const R: any[] = [];

    // Copy data to temp arrays
    for (let i = 0; i < n1; i += 1) {
      L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j += 1) {
      R[j] = arr[m + 1 + j];
    }

    // Merge the temp arrays

    // Initial indexes of first and second subarrays
    let i: number = 0;
    let j: number = 0;

    // Initial index of merged subarray array
    let k: number = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i += 1;
      } else {
        arr[k] = R[j];
        j += 1;
      }
      k += 1;
    }

    // console.log(L);
    // Copy remaining elements of L[] if any
    while (i < n1) {
      arr[k] = L[i];
      i += 1;
      k += 1;
    }

    // Copy remaining elements of R[] if any
    while (j < n2) {
      arr[k] = R[j];
      j += 1;
      k += 1;
    }
    return arr;
  };

  // Main function that sorts arr[]
  const sort = function (arr: any[], l: number, r: number) {
    if (l < r) {
      // Find middle point
      const m: number = Math.floor((l + r) / 2);

      // Sort first and second halves
      sort(arr, l, m);
      sort(arr, m + 1, r);

      // Merge the sorted halves
      return merge(arr, l, m, r);
    }
  };
  return sort(arr, l, r);
};

// console.log(mergeSort([1, 9, 2, 7, 3, 6, 3, 9, 5]/*, 0, 8*/));
let NumberSet = createDataSet();
// Move to test area
console.time('Merge Sort: ');
mergeSort(NumberSet);
console.timeEnd('Merge Sort: ');
