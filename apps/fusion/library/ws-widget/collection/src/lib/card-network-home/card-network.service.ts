import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core'

const API_END_POINTS = {
  GET_ALL_ACTIVE_USER: `/apis/protected/v8/networkHub/users`,
  GET_ALL_SEARCH_USER: `/apis/protected/v8/user/autocomplete/`,
}

@Injectable({
  providedIn: 'root',
})
export class CardNetWorkService {
  constructor(
    private http: HttpClient) { }

  fetchLatestUserInfo(data: any) {
    return this.http.post<any>(API_END_POINTS.GET_ALL_ACTIVE_USER, data).pipe(
      map(response => {
        console.log(response)
        return response
      }),
    )
  }
  fetchSearchUserInfo(searchKey: string) {
    return this.http.get<any>(API_END_POINTS.GET_ALL_SEARCH_USER + searchKey).pipe(
      map(response => {
        return response
      }),
    )
  }

}
