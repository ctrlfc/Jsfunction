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

function concat() {
    let length = arguments.length;
    if (!length) {
        return [];
    }

    let args = Array(length - 1),
        array = arguments[0],
        index = length;
    
    while (index--) {
        args[index - 1] = arguments[index];
    }

    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
 }