/*
    Notification representation for EnterAgora
*/
class Notification {
    constructor(Title, Description, Type, StartTime, EndTime, Date) {
        this.Title = Title;
        this.Description = Description;
        this.Type = Type;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
        this.Date = Date;
    }

    setSub(Title) {
        this.Title = Title;
    }

    setUid(Description) {
        this.Description = Description;
    }

    setAccessToken(Type) {
        this.Type = Type;
    }

    setConnected(StartTime) {
        this.StartTime = StartTime;
    }

    setNotificationsState(EndTime) {
        this.EndTime = EndTime;
    }

    setMovemenetTutorial(Date) {
        this.Date = Date;
    }
}
