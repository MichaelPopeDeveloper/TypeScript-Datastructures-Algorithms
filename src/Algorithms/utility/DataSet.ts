export const createDataSet = () => {
    // Create data to be tested
    let NumberSet: number[] = new Array(10000);
    // let NewNumberSet = NumberSet.map(number => number = Math.floor(Math.random() * 2000));
    for (let i = 0; i < NumberSet.length; i++) {
        NumberSet[i] = Math.floor(Math.random() * 2000);
    }
    console.log('Number Set: ');
    console.log(NumberSet);
    return NumberSet;
};
