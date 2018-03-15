// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    return prop;
};
const createNotEnumerableProperty = (prop) => {
    return Symbol(prop);
};
const createProtoMagicObject = () => {
    function foo() {};
    foo.prototype = Function.prototype;
    return foo;
};
 
const incrementor = (() => {
    var currentCount = 0;
    function f() {
        currentCount++;
        return f;
    };
    f.toString = function() {
        return currentCount;
    };
    return f;
})();

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;