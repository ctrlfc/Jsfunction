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

function arrayIncludes(array, value) {
    let length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
}

function arrayIncludesWith(array, value, comparator) {

};

function cacheHas(cache, key) {
    return cache.has(key);
}

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
            const value = array[index],
                computed = iteratee == null ? value : iteratee(value);

            value = (comparator || value !== 0) ? value : 0;
            if (isCommon && computed === computed) {
                const valuesIndex = valueslength;
                while (valuesIndex--) {
                    if (values[valuesIndex] === computed) {
                        continue outer;
                    }
                }
                result.push(value);
            } else if (!includes(values, computed, comparator)) {
                result.push(value);
            }
        }
    return result;
};