export const naivePatternSearch = (txt: string, pat: string) => {
    const M = pat.length;
    const N = txt.length;
    for (let i = 0; i <= N - M; i++) {
        for (let j = 0; j < M; j++) {
            if (txt[i + j] != pat[j]) {
                break;
            }
            if (j == M) {
                console.log('Found a pattern match at index: ' + i);
            }
        }
    }
}