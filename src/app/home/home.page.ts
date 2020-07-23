import {Component} from '@angular/core';

import {DetailsPage} from "../details/details.page";
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    list: any;

    constructor(private router: Router) {
        this.list = [
            {
                id: 1,
                "title": "Promotion 1",
                "price": "10.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 2,
                "title": "Promotion 2",
                "price": "10.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 3,
                "title": "Promotion 3",
                "price": "30.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 4,
                "title": "Promotion 4",
                "price": "40.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 5,
                "title": "Promotion 5",
                "price": "50.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 6,
                "title": "Promotion 6",
                "price": "60.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 7,
                "title": "Promotion 7",
                "price": "70.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 8,
                "title": "Promotion 8",
                "price": "80.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 9,
                "title": "Promotion 9",
                "price": "90.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 10,
                "title": "Promotion 10",
                "price": "10.50",
                "address": "Guatemala",
                "latitude": "14.1234561",
                "longitude": "-90.5456323",
                "created_at": null,
                "updated_at": null
            }
        ];
    }

    showDetail(id) {
        const item = this.list.find(item => item.id === id);

    }

}
