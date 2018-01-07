import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public navCtrl: NavController) {
        this.station = {
            "name" : "teste",
            "q_slots" : 5,
            "address" : "rua do teste",
            "cep" : 6664000,
            "status" : "online",
            "geo" : {"lat": 45, "lng": 50},
            "bikes":
                [
                    {
                        "_id": 1,
                        "bike": 5895
                    },
                    {
                        "_id": 2,
                        "bike": 548
                    },
                    {
                        "_id": 3,
                        "bike": null
                    },
                    {
                        "_id": 4,
                        "bike": null
                    },
                    {
                        "_id": 5,
                        "bike": null
                    }
                ]
        }

    }
    confirmation () {
        this.station.bikes[1].bike=null;
    }

}
