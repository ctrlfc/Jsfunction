/**
 * Created by king on 2017/7/17.
 */

/*
 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 chunk(array, [size=1])
 */

function slice(array, start, end) {
    let index = -1,
        length = array.length;

    end = end > length ? length : end;
    length = ((end - start) >>> 0);
    start >>>= 0;

    let result = new Array(length);

    // 始终返回一次
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}


function chunk(array, size) {
    let length = null ? 0 : array.length;

    if (!length || size < 1) {
        return [];
    }

    //下标
    let index = 0,
        resIndex = 0,
        //返回一个大于或者等于最小整数
        result = new Array(Math.ceil(length / size));

    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size));
    }
    return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));