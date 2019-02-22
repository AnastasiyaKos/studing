/*
Отсоритуйте массив массивов так, чтобы вначале располагались наименьшие массивы(размер массивов определяется
его длиной) :
[[14,15], [1], ['a', 'c', 'd']] = [[1], [14,15], ['a', 'c', 'd']];
 */


 exports.sortArray = (previous, next) => {
     if (previous.length < next.length) return 1;
     if (previous.length > next.length) return -1;
};

//console.log(sortArray([[14,15], [1], ['a', 'c', 'd']]))


