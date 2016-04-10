function steamroller(arr) {
    var finalArr = finalArr ? finalArr : [];

    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            steamroller(arr[i]);
        } else {
            finalArr.push(arr[i]);
        }
    }

    return finalArr;
}

console.log(
    steamroller([1, {}, [3, [[4]]]])
);
