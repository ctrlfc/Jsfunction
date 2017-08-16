/**
 * Created by king on 2017/8/16.
 */

/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 * 参数
 *    array (Array): 被连接的数组。
 *   [values] (...*): 连接的值。
 * 返回值
 *   (Array): 返回连接后的新数组。
 */

// 添加数组元素
function arrayPush(array, values) {
    let index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}

// 检查"vulue"是否是一个数组
const isArray = Array.isArray;

// 复制一个数组到另一个array=[](默认为空)
function copyArray(source, array) {
    let index = -1,
        length = source.length;

    // 没有则创建一个数组
    array || (array = new Array(length));
    while (++index < length) {
        array[index] = source[index];
    }
    return array;
}


function concat() {
    // 本次函数调用时传入函数的实参数量.
    let length = arguments.length;
    if (!length) {
        return [];
    }

    let args = new Array(length - 1),
        array = arguments[0],
        index = length;

    while (index--) {
        args[index - 1] = arguments[index];
    }

    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}