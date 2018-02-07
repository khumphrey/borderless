
app.directive('navbar', function ($rootScope, AuthFactory, $state) {


    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {
            scope.online = $rootScope.online;

            $rootScope.$on('onlineChange', function(event, onlineStatus) {
                scope.online = onlineStatus;
            });

            scope.isLoginState = function() {
                return $state.is('login');
            };

            function setUser() {
                AuthFactory.getUser()
                    .then(function(user) {
                        if (user) scope.user = user;
                    });      
            }

            scope.logout = function() {
                AuthFactory.logout()
                .then(function() {
                    $state.go('login');
                });
            };

            scope.toggleSidebar = function () {
                $('body').hasClass('sidebar-collapse') ? $('body').removeClass('sidebar-collapse') : $('body').addClass('sidebar-collapse');
            };

            setUser();

            // scope.items = [
            //     { label: 'Home', state: 'home' },
            //     { label: 'About', state: 'about' },
            //     { label: 'Documentation', state: 'docs' },
            //     { label: 'Forms', state: 'form-data'},
            //     { label: 'Members Only', state: 'membersOnly', auth: true }
            // ];

            // scope.user = null;

            // scope.isLoggedIn = function () {
            //     return AuthService.isAuthenticated();
            // };

            // scope.logout = function () {
            //     AuthService.logout().then(function () {
            //        $state.go('home');
            //     });
            // };

            // let setUser = function () {
            //     AuthService.getLoggedInUser().then(function (user) {
            //         scope.user = user;
            //     });
            // };

            // let removeUser = function () {
            //     scope.user = null;
            // };

            // setUser();

            $rootScope.$on('login-success', setUser);
            // $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            // $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
