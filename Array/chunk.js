/**
 * Created by king on 2017/7/17.
 */
import baseSlice from "../base/baseSlice";

/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * 参数
 *   array (Array): 需要处理的数组
 *   [size=1] (number): 每个数组区块的长度
 * 返回
 *  (Array): 返回一个包含拆分区块的新数组
 */

function chunk(array, size) {
    let length = null ? 0 : array.length;

    if (!length || size < 1) {
        return [];
    }

    //下标
    let index = 0,
        resIndex = 0,
        //返回一个大于或者等于最小整数,向上取整
        result = new Array(Math.ceil(length / size));

    while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
    }
    return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));