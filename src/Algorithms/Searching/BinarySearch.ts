export const binarySearch = (arr: number[], x: number, l: number = 0, r: number): number => {
    if (r >= l) {
        let mid: number = Math.floor(l + (r - l) / 2);

        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] > x) {
            return binarySearch(arr, x, l, mid - 1);
        }
        if (arr[mid] < x) {
            return binarySearch(arr, x, mid + 1, r);
        }
    }
    return -1;
}