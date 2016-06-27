import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export  class UsersDataService {

    constructor(httpclient)
    {
        this.httpClient = httpclient;
    }

    getAllUsersData(apiUrl)
    {
        return this.httpClient.get("/api/appdata/GetUsers")
                                        .then(response => {
                                            return response.content;
                                        });
    }
}