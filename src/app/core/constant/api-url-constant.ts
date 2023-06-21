import {environment} from "../../../environments/environment";

const API_ENDPOINT = environment.apiUrl

export class ApiEndPoints {

  static readonly API_URL = API_ENDPOINT;

  static readonly USERS = {
    SAVE: API_ENDPOINT + '/users',
    UPDATE: API_ENDPOINT + '/users',
    ALL: API_ENDPOINT + '/users',
  }

  static readonly AUTH = {
    LOGIN: API_ENDPOINT + '/auth/login'
  }


}
