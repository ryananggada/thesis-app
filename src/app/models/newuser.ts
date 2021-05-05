export class User {
    public userId: number = 0;
    public userName: string = "";
    public creationTime: string = "";

    public constructor(username: string) {
        this.userName = username;
    }
}