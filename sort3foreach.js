var arrayElementsSort = function (sorting) {
    var sorted = sorting.sort(function (a, b) {
        return a.localeCompare(b);
    });
    //console.log(sorted);
    var sameWords = [], cSensitiveSort = [], finalSort = [];
    sorted.forEach(function (val, ind) {
        var first, second, difference;
        if (ind !== sorted.length - 1) {
            first = sorted[ind].toUpperCase().charCodeAt(0);
            second = sorted[ind + 1].toUpperCase().charCodeAt(0);
            difference = second - first;
        }
        if (difference === 0) {
            sameWords.push(val);
        }
        else if (difference > 0) {
            sameWords.push(val);
            cSensitiveSort = sameWords.sort();
            finalSort = finalSort.concat(cSensitiveSort);
            sameWords = [];
        }
        else {
            sameWords.push(val);
            //cSensitiveSort = sameWords.sort();
            finalSort = finalSort.concat(sameWords.sort());
        }
    });
    return finalSort;
};
var sorting = ['Apple', 'app', 'apple 1',
    'apple 2', 'Aud', 'fAjan', 'FAjan', 'anjana', 'balu', 'Building 1', 'build 2', 'B', 'BBBB', 'C',
    'chinna', 'Cunny', 'dhoni', 'Dorababu', 'Phani', 'phani',
    'siva', 'Syam', 'Ruthwik', 'suraj', 'Team'];
console.log(arrayElementsSort(sorting));
