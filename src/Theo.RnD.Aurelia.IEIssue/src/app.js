export class App {
    constructor() {
        this.message = 'Running Aurelia RC!';
    }

    configureRouter(config, router) {
        config.title = 'Sample Aurelia RC App';
        config.map([
          { route: ['', 'home'], name: 'home',      moduleId: 'welcome',      nav: true, title: 'Home' },
          { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Users'}
        ]);
        this.router = router;
    }
}
