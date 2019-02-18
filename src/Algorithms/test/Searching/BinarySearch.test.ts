import { binarySearch } from '../../Searching/BinarySearch';
import { createOrderedNumberArray } from '../../utility/DataSet';

const orderedNumberSet = createOrderedNumberArray();
console.log(binarySearch(orderedNumberSet, 9003, undefined, orderedNumberSet.length - 1));
console.time('Binary Search: ');
binarySearch(orderedNumberSet, 9003, undefined, orderedNumberSet.length - 1);
console.timeEnd('Binary Search: ');