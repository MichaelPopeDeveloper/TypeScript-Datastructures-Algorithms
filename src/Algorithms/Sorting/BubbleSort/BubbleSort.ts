import { createDataSet } from '../../utility/DataSet';
const BubbleSort = (items: number[]) => {
    let swapped: boolean;

    while (swapped != false) {
        swapped = false;
        for (let i = 1; i < items.length; i++) {
            if (items[i - 1] > items[i]) {
                let temp = items[i];
                items[i] = items[i - 1];
                items[i - 1] = temp;
                swapped = true;
            }
        }
    }
    return items;
};

// console.log(BubbleSort([1, 9, 2, 7, 3, 6, 3, 9, 5]/*, 0, 8*/));
let NumberSet = createDataSet();
// Move to test area
console.time('Bubble Sort: ');
BubbleSort(NumberSet);
console.timeEnd('Bubble Sort: ');