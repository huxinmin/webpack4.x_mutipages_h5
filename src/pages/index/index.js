import './index.less';
import './arcgis';
import tabUI from '../../lib/tab';

console.log('121');
tabUI.init();
tabUI.tab($('.tab-wrap2'), {
  autoPlay: 2000,
  animate: true
});

// layui

var layer = layui.layer;
layer.msg('Hello World');
