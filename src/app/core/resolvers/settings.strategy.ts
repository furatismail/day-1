import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { delay, Observable, of, switchMap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SettingsStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        const preloadDelay = route.data?.["preloadDelay"] ?? 0;
        return route.data?.["preload"] === true ? of(null).pipe(
            delay(preloadDelay), 
            switchMap(load)
        ) : of(null)
    }
}