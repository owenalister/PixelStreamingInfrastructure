/*
    Notifications handlers
*/
class NotificationsHandler {
    constructor() {
        this.notifications = [];
    }

    //get all notifications names from db
    //input json: { "Region":"eu-west-2", "Environment":"staging" }
    //
    async listNotifications(region, environment) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/notifications/list', {
                    "Region": region,
                    "Environment": environment
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }  

    //get notification data from db
    //input json: { "Region":"eu-west-2", "Environment":"staging", "Title":"test" }
    //
    async getNotification(region, environment, title) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/notifications/get', {
                    "Region": region,
                    "Environment": environment,
                    "Title": title
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }  

    /*add notification
    input json:
    {
        "Region": "eu-west-2",
        "Environment": "staging",
        "Title": "AnotherUser1",
        "Description": "Description",
        "Type": "keynote",
        "StartTime": "10:00",
        "EndTime": "11:00",
        "Date": "1/2/2021"
    }*/
    async addNotification(region, environment, title, description, type, starttime, endtime, date) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/notifications/add', {
                    "Region": region,
                    "Environment": environment,
                    "Title": title,
                    "Description": description,
                    "Type": type,
                    "StartTime": starttime,
                    "EndTime": endtime,
                    "Date": date
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }  

    /*remove notification
    input json:
    {
        "Region": "eu-west-2",
        "Environment": "staging",
        "Title": "AnotherUser1",
    }*/
    async removeNotification(region, environment, title) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/notifications/remove', {
                    "Region": region,
                    "Environment": environment,
                    "Title": title
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }  

}

let notif_handler = new NotificationsHandler();