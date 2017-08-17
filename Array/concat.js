/**
 * Created by king on 2017/8/17.
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

// 拆分?最小个数?每次迭代调用的函数?限制通过迭代调用检查的值?基本结果
function baseFlatten(array, depth, predicate, isStrict, result) {
    let index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
        let value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
                arrayPush(result, value);
            }
        } else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}

// 判断是否能拆分(默认)
function isFlattenable(value) {
    return isArray(value) || !!(spreadableSymbol && value && value[spreadableSymbol])
}

// 是否展开其数组元素。
const spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

function concat() {
    // 本次函数调用时传入函数的实参数量.
    let length = arguments.length;
    if (!length) {
        return [];
    }

    // 下标比长度少一位
    let args = new Array(length - 1),
        // 第一位数组参数    
        array = arguments[0],
        index = length;

    while (index--) {
        args[index - 1] = arguments[index];
    }

    // 是否是数组,是则复制过来,不是则初始化一个
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

let array = [1];
let other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]


/*
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
};*/
