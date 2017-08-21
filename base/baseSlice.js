function baseSlice(array, start, end) {
    let index = -1,
        length = array.length;

    end = end > length ? length : end;
    length = (end - start) >>> 0;
    start >>>= 0;

    const result = new Array(length);

    // 始终返回一次
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
