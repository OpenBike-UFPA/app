import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    // teste() {
    //     this.teste2 = "mudou";
    // }
    constructor(public navCtrl: NavController) {
        // this.station = {
        //     name : 'teste',
        //     q_slots : 5,
        //     address : 'rua do teste',
        //     cep : 6664000,
        //     status : 'online',
        //     geo : {lat: 45, lng: 50},
        //     bikes:
        //         [
        //             {
        //             _id: 1,
        //             bike: 5895
        //             }
        //         ]
        // }
        //
        // this.teste2 = "ooooooooolé";
  }

}
