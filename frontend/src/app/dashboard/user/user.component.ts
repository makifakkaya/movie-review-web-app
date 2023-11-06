import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
    selector: 'app-user-role',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    currentUrl: string | undefined;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            // @ts-ignore
            .subscribe((event: NavigationEnd) => {
                this.currentUrl = event.url;
            });
    }
}
