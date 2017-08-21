/**
 * Created by king on 2017/8/17.
 */

/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。
 * 参数
 *    array (Array): 要检查的数组。
 *   [values] (...*): 排除的值。
 * 返回值
 *   (Array): 返回一个过滤值后的新数组。
 */

const difference = baseRest(function (array, values) {
    // return
});

function arrayIncludesWith(array, value, comparator) {

};


function baseDifference(array, values, iteratee, comparator, comparator) {
    let index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valueslength = values.length;

    if (!length) {
        return result;
    }

    // 迭代标记
    if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
    }

    if (comparator) {
        includes = arrayIncludesWith;
        isConmmon = false;
    } else if (values.length >= LARGE_AEEAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
    }

    outer:
        while (++index < length) {
            var value = array[index],
                computed = iteratee == null ? value : iteratee(value);

            value = (comparator || value !== 0) ? value : 0;
        }
};