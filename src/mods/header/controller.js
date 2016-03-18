import app from 'app/app';
console.log(app);
app.controller('headerCtrl',['$rootScope','$scope','$state','$stateParams','$cookies','$cookieStore','$window', '$location', function($rootScope,$scope,$state,$stateParams,$cookies,$cookieStore,$window,$location){
    $scope.navs = [
        {
            id: 'dashboard',
            label: '大盘',
            icon: 'fa fa-dashboard',
            isNav: true,
            href: '#/dashboard'
        },
        {
            id: 'search',
            label: '搜索',
            icon: 'fa fa-search',
            isNav: true,
            href: '#/search'
        },
        {
            id: 'chart',
            label: '分析',
            icon: 'fa fa-bar-chart',
            isNav: true,
            href: ''
        },
        {
            id: 'eye',
            label: '监控',
            icon: 'fa fa-eye',
            isNav: true,
            href: ''
        },
        {
            id: 'setting',
            label: '设置',
            icon: 'fa fa-cog',
            isNav: true,
            href: ''
        },
        {
            id: 'help',
            label: '帮助',
            icon: 'fa fa-question-circle',
            isNav: true,
            href: ''
        }
    ];
    var username = $cookies.get('dt_username');
    if(username && username.indexOf("\"")==0){//去除用户名前后引号
        username = username.substring(1,username.length-1);
    }
    $scope.username = username;

    var loginUrl = 'http://account.dtstack.com/login.html';
    $scope.logout = function() {

        $cookies.remove('dt_token',{domain:'dtstack.com'});//cookie存放在主域名下
        $cookies.remove('dt_userid',{domain:'dtstack.com'});//cookie存放在主域名下
        $cookies.remove('dt_username',{domain:'dtstack.com'});//cookie存放在主域名下

        $window.location.href = [loginUrl, '?callback=', encodeURIComponent($location.absUrl())].join('');
    };

}])
