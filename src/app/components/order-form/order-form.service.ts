import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "../../models/types";


@Injectable({providedIn:'root'})

export class OrderFormService {
    constructor(private http: HttpClient){}

    sendUserData(data: UserInfo) {
        this.http.post('https://fakeurl.com', data).subscribe()
    }
}