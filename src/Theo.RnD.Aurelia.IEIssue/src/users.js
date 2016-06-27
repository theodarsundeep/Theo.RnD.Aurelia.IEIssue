import {inject} from "aurelia-framework";
import {UsersDataService} from "./DataService/UsersDataService";

@inject(UsersDataService)
export class users {
    constructor(dataservice) {
        this.userDataSrv = dataservice;
        this.message = 'Running Aurelia RC! - users';
    }

    activate() {
        return this.userDataSrv.getAllUsersData()
                               .then(resUserData => {
                                   this.usersData = resUserData;
                               });
    }

}
