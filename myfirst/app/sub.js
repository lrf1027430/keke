function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 worldgfdgdgfd";
    return element;
}

module.exports = generateText;

//ES6 模式 关闭或者打开
// export default function() {
//     var element = document.createElement('h2');
//     element.innerHTML = "Hello h2 world hahaha";
//     return element;
// }
