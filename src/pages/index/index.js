import './index.scss';
let tabUI = require('../../lib/tab');
console.log('121');
tabUI.init();
tabUI.tab($('.tab-wrap2'), {
  autoPlay: 2000,
  animate: true
});console.log('index');
