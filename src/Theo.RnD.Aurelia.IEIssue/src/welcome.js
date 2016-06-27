export class welcome {
    
 
    constructor() {
        console.log("Welcome constructor Called!");
        if (!sessionStorage.hasOwnProperty("counter")) {
            sessionStorage.setItem("counter",0);
        }
    }

    activate() {
        console.log("Activate Called!");
        var count = sessionStorage.getItem("counter");
        count++;
        this.message = 'Running Aurelia RC! -- Count ' + count;
        sessionStorage.setItem("counter",count);
    }
}
