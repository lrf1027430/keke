//CommonJs
// var sub = require('./sub');
// require('./css/main.scss');
// var $ = require('jquery');
// var moment = require('moment');
// var app  = document.createElement('div');
// app.innerHTML = '<h1>Hello World it</h1>';
// document.body.appendChild(app);
// app.appendChild(sub());
// $('body').append('<p>look at me! now is ' + moment().format() + '</p>');

//ES6 模式 关闭或者打开
import './css/main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>aaaapromise result is ' + number + ' now is ' + moment().format() + '</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());