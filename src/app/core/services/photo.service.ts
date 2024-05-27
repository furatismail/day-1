import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class PhotoService {

    // imagine HTTP call
    getAll() : Observable<any> { 
        return of([
            {photoUrl: 'www.something.com', id: "1"}
        ])
    }

}