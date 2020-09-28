require('./index.css')
import angular from 'angular'
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.i= [
        {name:'./static/0efd616.jpg',miaoshu:'这是早餐',num:100},
        {name:'./static/1b718f.jpg',miaoshu:'这是午餐',num:150},
        {name:'./static/1ccdf6b.jpg',miaoshu:'这是早餐',num:50},
        {name:'./static/1cde.jpg',miaoshu:'这是晚餐',num:15},
        {name:'./static/3a31d.jpg',miaoshu:'这是早餐',num:180},
        {name:'./static/3d875.jpg',miaoshu:'这是早餐',num:105},
        {name:'./static/4c981e4.jpg',miaoshu:'这是早餐',num:18},
        {name:'./static/9ecd.jpg',miaoshu:'这是早餐',num:10},
];
});