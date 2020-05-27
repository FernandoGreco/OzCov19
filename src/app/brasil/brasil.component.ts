import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.component.html',
  styleUrls: ['./brasil.component.css']
})
export class BrasilComponent implements OnInit {

    url = 'https://brasil.io/api/dataset/covid19/caso/data/?format=json&page=60';
    items= [];

  constructor(private http: HttpClient) {
      this.http.get(this.url).toPromise().then(data =>{
          console.log(data);

          for(let key in data)
            if(data.hasOwnProperty(key))
                this.items.push(data[key]);
      });
   }

  ngOnInit() {
    var myChart = new Chart("covidBrasil", {
      type: 'line',
      data: {
          labels: ['16/3', '25/4', '26/4','27/4', '28/4','29/4','30/4','01/05','2/5'],
          datasets: [{
              label: 'Confirmados',
              data: [497, 544, 549, 931, 929, 1023,1067,1093,1123,1352],
              backgroundColor: [
                  'rgba(255, 99, 132, 0)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)'
              ],
              borderColor: [
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)'
              ],
              borderWidth: 1
          },
          {
            label: 'Recuperados',
            data: [376, 387, 436, 457, 530, 618,628,635,648,743],
            backgroundColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)'

            ],
            borderColor: [
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)'
            ],
         
            borderWidth: 1
        },

        {
          label: 'Óbitos',
          data: [51, 57, 68, 81, 89,91,104,108,111,118],
          backgroundColor: [
              'rgba(3, 99, 132, 0)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)'

          ],
          borderColor: [
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)'
          ],
       
          borderWidth: 1
      },
        
        ],

          
      },
      
      options: {
        layout: {
         
      },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

  }

}
