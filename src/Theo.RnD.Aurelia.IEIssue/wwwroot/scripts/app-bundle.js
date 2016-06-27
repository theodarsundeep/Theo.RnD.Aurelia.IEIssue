define('app',['require','exports','module'],function (require, exports, module) {'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
    function App() {
        _classCallCheck(this, App);

        this.message = 'Running Aurelia RC!';
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
        config.title = 'Sample Aurelia RC App';
        config.map([{ route: ['', 'home'], name: 'home', moduleId: 'welcome', nav: true, title: 'Home' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Users' }]);
        this.router = router;
    };

    return App;
}();
});

define('environment',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.default = {
  debug: true,
  testing: true
};
});

define('main',['require','exports','module','./environment'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.configure = configure;

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

function configure(aurelia) {
  aurelia.use.standardConfiguration().feature('resources');

  if (_environment2.default.debug) {
    aurelia.use.developmentLogging();
  }

  if (_environment2.default.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}
});

define('users',['require','exports','module','aurelia-framework','./DataService/UsersDataService'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.users = undefined;

var _dec, _class;

var _aureliaFramework = require("aurelia-framework");

var _UsersDataService = require("./DataService/UsersDataService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var users = exports.users = (_dec = (0, _aureliaFramework.inject)(_UsersDataService.UsersDataService), _dec(_class = function () {
    function users(dataservice) {
        _classCallCheck(this, users);

        this.userDataSrv = dataservice;
        this.message = 'Running Aurelia RC! - users';
    }

    users.prototype.activate = function activate() {
        var _this = this;

        return this.userDataSrv.getAllUsersData().then(function (resUserData) {
            _this.usersData = resUserData;
        });
    };

    return users;
}()) || _class);
});

define('welcome',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var welcome = exports.welcome = function () {
    function welcome() {
        _classCallCheck(this, welcome);

        console.log("Welcome constructor Called!");
        if (!sessionStorage.hasOwnProperty("counter")) {
            sessionStorage.setItem("counter", 0);
        }
    }

    welcome.prototype.activate = function activate() {
        console.log("Activate Called!");
        var count = sessionStorage.getItem("counter");
        count++;
        this.message = 'Running Aurelia RC! -- Count ' + count;
        sessionStorage.setItem("counter", count);
    };

    return welcome;
}();
});

define('DataService/UsersDataService',['require','exports','module','aurelia-framework','aurelia-http-client'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.UsersDataService = undefined;

var _dec, _class;

var _aureliaFramework = require("aurelia-framework");

var _aureliaHttpClient = require("aurelia-http-client");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersDataService = exports.UsersDataService = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), _dec(_class = function () {
    function UsersDataService(httpclient) {
        _classCallCheck(this, UsersDataService);

        this.httpClient = httpclient;
    }

    UsersDataService.prototype.getAllUsersData = function getAllUsersData(apiUrl) {
        return this.httpClient.get("/api/appdata/GetUsers").then(function (response) {
            return response.content;
        });
    };

    return UsersDataService;
}()) || _class);
});

define('resources/index',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.configure = configure;
function configure(config) {}
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"navbar.html\"></require>\r\n    <!--<require from=\"lib/bootstrap/dist/css/bootstrap.css\"></require>-->\r\n    <navbar router.bind=\"router\"></navbar>\r\n    <div class=\"page-host\">\r\n        <router-view></router-view>\r\n    </div>\n</template>\n"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\r\n                <span class=\"sr-only\">Toggle Navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <span>${router.title}</span>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n                    <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n                    <span>Loading...</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</template>\r\n"; });
define('text!users.html', ['module'], function(module) { module.exports = "<template>\n    <section class=\"au-animate\">\r\n        <h2>${message}</h2>\r\n        <div class=\"row au-stagger\">\r\n            <div class=\"col-sm-6 col-md-3 card-container au-animate\" repeat.for=\"user of usersData\">\r\n                <div class=\"card\">\r\n                    <div class=\"content\">\r\n                        <p class=\"name\">${user.FirstName} ${user.LastName}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\n</template>\n"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map