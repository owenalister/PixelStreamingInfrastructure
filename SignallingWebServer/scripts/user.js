/*
    User representation for EnterAgora
*/
class User {
    constructor(Sub, Uid, DisplayName, Email, Connected, NotificationState, MovemenetTutorial, HudTutorial) {
        this.sub = Sub;
        this.uid = Uid;
        this.display_name = DisplayName;
        this.email = Email;
        this.connected = Connected;
        this.notificationsState = NotificationState;
        this.movemenetTutorial = MovemenetTutorial;
        this.hudTutorial = HudTutorial;        
    }

    setSub(Sub) {
        this.Sub = Sub;
    }

    setUid(Uid) {
        this.Uid = Uid;
    }

    setConnected(Connected) {
        this.Connected = Connected;
    }

    setNotificationsState(NotificationsState) {
        this.NotificationsState = NotificationsState;
    }

    setMovemenetTutorial(MovemenetTutorial) {
        this.MovemenetTutorial = MovemenetTutorial;
    }

    setHudTutorial(HudTutorial) {
        this.HudTutorial = HudTutorial;
    }

    getSub() {
        return this.sub;
    }

    getDisplayName() {
        return this.display_name;
    }

    getHudTutorial(HudTutorial) {
        return this.hudTutorial;
    }

    getNotificationsState(NotificationsState) {
        return this.notificationsState;
    }

    getConnected(Connected) {
        return this.connected;
    }

    getUid(Uid) {
        return this.uid;
    }

    async getLogedinUserData(sub) {
        return new Promise(function(resolve) {
            axios.get('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/getuserdata', {
                    headers: {
                        'Content-Type': 'application/json',                       
                        'Authorization': sub
                    }
                })
                .then(function(response) {
                    const user_data = response.data;
                    //console.log(user_data);
                    resolve(user_data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }
}


let current_user = new User(null, null, null, false, "[]", true, true);