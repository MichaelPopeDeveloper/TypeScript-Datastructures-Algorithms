import { linearSearch } from '../../Searching/linearSearch';
import { createOrderedNumberArray } from '../../utility/DataSet';

const orderedNumberSet = createOrderedNumberArray();
console.log(linearSearch(orderedNumberSet, 9000));
console.time('Linear Search: ');
linearSearch(orderedNumberSet, 9000);
console.timeEnd('Linear Search: ');