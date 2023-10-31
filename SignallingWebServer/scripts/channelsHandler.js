/*
    Channels handler
*/
class ChannelsHandler {
    constructor() {
        this.channels = [];
    }

    //get channel data from db
    //input json: { "Region":"eu-west-2", "Environment":"staging", "Name":"general" }
    //
    async getChannelInfo(region, environment, channelName) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/get', {
                    "Region": region,
                    "Environment": environment,
                    "Name": channelName
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

    //get all channels names from db
    //input json: { "Region":"eu-west-2", "Environment":"staging"}
    //
    async getChannels(region, environment) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/list', {
                    "region": region,
                    "environment": environment
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

    /*add channel to db
    input json: 
    {
        "Region": "london"
        "Environment": "staging",
        "Owner": "AnotherUser1",
        "Name": "EA1",
        "IsPrivate": false
    }*/
    async addChannel(region, environment, name, owner, isprivate) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/add', {
                    "Region": region,
                    "Environment": environment,
                    "Name": name,
                    "Owner": owner,
                    "IsPrivate": isprivate
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
    
    /*remove channel from db
    input json: 
    {
        "Region": "london"
        "Environment": "staging",
        "Name": "EA1",
    }*/
    async removeChannel(region, environment, name) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/remove', {
                    "Region": region,
                    "Environment": environment,
                    "Name": name
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

let chan_handler = new ChannelsHandler();