export class Profile {
    public Profileid: number;
    public Firstname: string;
    public Lastname: string;
    public Gender: string;
    public Dateofbirth: string;
    public Address: string;
    public Email: string;
    public Username: string;
    public Password: string;

    public constructor(profileId: number, firstName: string, lastName: string, Gender: string, dateofBirth: string, Address: string, Email: string, userName: string, Password: string){
        this.Profileid = profileId;
        this.Firstname = firstName;
        this.Lastname = lastName;
        this.Gender = Gender;
        this.Dateofbirth = dateofBirth;
        this.Address = Address;
        this.Email = Email;
        this.Username = userName;
        this.Password = Password;
    }
}