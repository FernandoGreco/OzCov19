import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-osasco',
  templateUrl: './osasco.component.html',
  styleUrls: ['./osasco.component.css']
})
export class OsascoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['16/3', '25/4', '26/4','27/4', '28/4','29/4','30/4','01/05','2/5','3/5','4/5','5/5'],
          datasets: [{
              label: 'Confirmados',
              data: [497, 544, 549, 931, 929, 1023,1067,1093,1123,1352,1350,1403],
              backgroundColor: [
                  'rgba(255, 255, 255, 0)',
                  'rgba(175, 33, 210, 1)',
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
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)',
                  'rgba(175, 33, 210, 1)'
              ],
              borderWidth: 1
          },
          {
            label: 'Recuperados',
            data: [376, 387, 436, 457, 530, 618,628,635,648,743,780,802],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
                'rgba(20, 210, 16, 1)',
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
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)',
                'rgba(20, 210, 16, 1)'
            ],
         
            borderWidth: 1
        },

        {
          label: 'Óbitos',
          data: [51, 57, 68, 81, 89,91,104,108,111,118,134,140],
          backgroundColor: [
              'rgba(255, 255, 255, 0)',
              'rgba(0, 0, 0, 1)',
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


  var myChart = new Chart("isolamentoSocial", {
    type: 'line',
    data: {
        labels: ['24/4', '25/4', '26/4','27/4', '28/4','29/4','30/4','01/05','2/5','3/5','4/5'],
        datasets: [{
           

    
      label: 'Isolamento Social',
      data: [50, 55, 61, 51, 50, 50, 49, 58,54,62,50,100],
      backgroundColor: [
        'rgba(255, 255, 255, 0)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 255, 1)'
          

      ],
      borderColor: [
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 255, 1)'
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
