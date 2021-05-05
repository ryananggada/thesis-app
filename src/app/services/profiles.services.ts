import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Profile } from '../models/userprofile';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  //The users profile
  //The users profile
  public Profile!: Profile;
  profilesUrl: string | undefined;
  constructor(private httpClient: HttpClient, private router: Router) { }

  public getProfileOfUser(id: string) {
    return this.httpClient.get<Profile>(this.profilesUrl + '/' + 'user' + '/' + id)
  }

  public ValidationUpdateUser(profile: Profile) {

    if (profile.Firstname == null || profile.Firstname.length == 0) {
      return false;
    }

    if (profile.Lastname == null || profile.Lastname.length == 0) {
      return false;
    }

    if (profile.Gender == null || profile.Gender.length == 0) {
      return false;
    }

    if (profile.Dateofbirth == null || profile.Dateofbirth.length == 0) {
      return false;
    }

    if (profile.Address == null || profile.Address.length == 0) {
      return false;
    }

    if (profile.Email == null || profile.Email.length == 0) {
      return false;
    }

    if (profile.Username == null || ( profile.Username.length > 12)) {
      return false;
    }

    if (profile.Password == null || ( profile.Password.length > 12)) {
      return false;
    }

    return true;
  }

  //validates a user when its registered. takes variables into account
  public validateUser(profile: Profile) {
    if (profile.Firstname == null || profile.Firstname.length == 0) {
      return false;
    }

    if (profile.Lastname == null || profile.Lastname.length == 0) {
      return false;
    }

    if (profile.Gender == null || profile.Gender.length == 0) {
      return false;
    }

    if (profile.Dateofbirth == null || profile.Dateofbirth.length == 0) {
      return false;
    }

    if (profile.Address == null || profile.Address.length == 0) {
      return false;
    }

    if (profile.Email == null || profile.Email.length == 0) {
      return false;
    }

    if (profile.Username == null || ( profile.Username.length > 12)) {
      return false;
    }

    if (profile.Password == null || ( profile.Password.length > 12)) {
      return false;
    }

    return true;
  }

  //Updates a profile, POST Request
  public updateProfile(profile: Profile) {
    return this.httpClient.put<any>(this.profilesUrl + '/' + profile.Profileid, profile);
  }
}

  

    



  







