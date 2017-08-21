/**
 * Created by king on 2017/8/16.
 */

/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。(剔除假值)
 * 参数
 *    array (Array): 待处理的数组
 * 返回值
 *   (Array): 返回过滤掉假值的新数组。
 */

function compact(array) {
    let index = -1,
        length = array == null ? 0 : array.length,
        resIdex = 0,
        result = [];
    
    // 始终会执行一次+1,然后循环一次加一次(先加,或者放最后++)
    while (++index < length) {
        // index下标从0开始
        let value = array[index];
        // 判断是否为真
        if (value) {
            //新数组
            result[resIdex++] = value;
        }
    }
    return result;
}

compact([0, 1, false, 2, '', 3]);
// =>[1, 2, 3]