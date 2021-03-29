//our root app component

import { Component, OnInit } from '@angular/core';
import '@cds/core/divider/register.js';
@Component({
  selector: 'app-execDashboard',
  templateUrl: './execDashboard.html',
  styleUrls: [ './execDashboard.component.css' ]
})
export class ExecDashboardComponent {

  public widgetOption = {
    color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        show:false,
        data: ['W108', 'W109', 'W110', 'W112']
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1,
        show:false
    },
    series: [{
        data: [3.5,3.6,4.2,3.8],
        type: 'bar',
        label:{

        }
    }]
};
public sizeValue = '57%';
public symbolSize = 2.5;
public  option = {
  width:'10',
  legend: {},
  tooltip: {},
  toolbox: {
      left: 'center',
      feature: {
          dataZoom: {}
      }
  },
  grid: [
      {right: this.sizeValue, bottom: this.sizeValue},
      {left: this.sizeValue, bottom: this.sizeValue},
      {right: this.sizeValue, top: this.sizeValue},
      {left: this.sizeValue, top: this.sizeValue}
  ],
  xAxis: [
      {type: 'value', gridIndex: 0, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
      {type: 'category', gridIndex: 1, name: 'Country', boundaryGap: false, axisLabel: {rotate: 50, interval: 0}},
     
  ],
  yAxis: [
      {type: 'value', gridIndex: 0, name: 'Life Expectancy'},
      {type: 'value', gridIndex: 1, name: 'Income'},
 
  ],
 
  series: [
      {
          type: 'scatter',
          symbolSize: this.symbolSize,
          xAxisIndex: 0,
          yAxisIndex: 0,
          encode: {
              x: 'Income',
              y: 'Life Expectancy',
              tooltip: [0, 1, 2, 3, 4]
          }
      },
      {
          type: 'scatter',
          symbolSize: this.symbolSize,
          xAxisIndex: 1,
          yAxisIndex: 1,
          encode: {
              x: 'Country',
              y: 'Income',
              tooltip: [0, 1, 2, 3, 4]
          }
      }
  ]
};
  public chartOption1: any = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.1450, 1680.1890],
      type: 'line',
      areaStyle: {}
    }]
  };

  defectEleOption = {
    title: {
        text: 'Defect Elements',
        subtext: '2021Q1',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
      bottom: '10',
      left: 'center'
    },
    series: [
        {
            name: 'Elements',
            type: 'pie',
            radius: '50%',
            label: {
              show: true,
              formatter: function (params) {
                return  params.value+"%";
              },
              position: 'inside'
          },
            data: [
                {value: 35, name: 'Sn'},
                {value: 15, name: 'Mo'},
                {value: 17, name: 'Te'},
                {value: 14, name: 'Fe'},
                {value: 19, name: 'Others'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

  public color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'];
  public chartOption: any =   {
    color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'],
   tooltip: {
       trigger: 'axis',
       
   },
    title: {
           text: 'PRP 2021Q1',
           subtext:'Overall',
           left: 'center'
       },
   toolbox: {
       feature: {
           dataView: {show: true, readOnly: false},
           saveAsImage: {show: true}
       }
   },
   legend: {
      bottom: '10',
      left: 'center',
       data: ['Wafer Move', 'PRP']
   },
   xAxis: [
       {
           type: 'category',
           data: ['W101', 'W102', 'W103', 'W104', 'W105', 'W106', 'W107', 'W108', 'W109', 'W110', 'W111', 'W112'],
           axisPointer: {
               type: 'shadow'
           }
       }
   ],
   yAxis: [
       {
           type: 'value',
           name: 'Wafer Move(pcs)',
           min: 0,
           max: 2000,
           interval: 200,
           axisLabel: {
               formatter: '{value}'
           }
       },
       {
           type: 'value',
           name: 'PRP(ea)',
           min: 0,
           max: 8,
           interval: 0.5,
           axisLabel: {
               formatter: '{value}'
           }
       }
   ],
   series: [
      
       {
           name: 'Wafer Move',
           type: 'bar',
           label: {
               show: true,
               position: 'inside'
           },
           data: [948, 851, 932, 865, 801, 697, 811,796, 994,1025,1130,956]
       },
       {
           name: 'PRP',
           type: 'line',
           yAxisIndex: 1,
           label: {
               show: true,
               position: 'inside'
           },
           markLine: {
               silent: true,
               lineStyle: {
                   color: 'red'
               },
               data: [{
                   yAxis: 5
               }]
           },
           data: [4.0, 3.2, 4.3, 3.5, 4.3, 3.2, 3.3, 3.4, 3.0, 5.1, 5.3, 4.9]
       }
   ]
};
//APE301
public chartOptionAPE301: any =   {
  color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'],
 tooltip: {
     trigger: 'axis',
     
 },
  title: {
         text: 'PRP',
         subtext:'APE301',
         left: 'center'
     },
 toolbox: {
     feature: {
         dataView: {show: true, readOnly: false},
         saveAsImage: {show: true}
     }
 },
 legend: {
    bottom: '10',
    left: 'center',
     data: ['Wafer Move', 'PRP']
 },
 xAxis: [
     {
         type: 'category',
         data: ['W101', 'W102', 'W103', 'W104', 'W105', 'W106', 'W107', 'W108', 'W109', 'W110', 'W111', 'W112'],
         axisPointer: {
             type: 'shadow'
         }
     }
 ],
 yAxis: [
     {
         type: 'value',
         name: 'Wafer Move(pcs)',
         min: 0,
         max: 1000,
         interval: 150,
         axisLabel: {
             formatter: '{value}'
         }
     },
     {
         type: 'value',
         name: 'PRP(ea)',
         min: 0,
         max: 8,
         interval: 0.5,
         axisLabel: {
             formatter: '{value}'
         }
     }
 ],
 series: [
    
     {
         name: 'Wafer Move',
         type: 'bar',
         label: {
             show: true,
             position: 'inside'
         },
         data: [263, 111, 139, 135, 205, 227, 190, 100, 98, 89, 146, 251]
     },
     {
         name: 'PRP',
         type: 'line',
         yAxisIndex: 1,
         label: {
             show: true,
             position: 'inside'
         },
         markLine: {
             silent: true,
             lineStyle: {
                 color: 'red'
             },
             data: [{
                 yAxis: 5
             }]
         },
         data: [1.0, 2.2, 0.3, 1.5, 0.9, 1.2, 0.0, 0.9, 1.2, 1.1, 1, 1.0]
     }
 ]
};

public chartOptionAPE302: any =   {
  color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'],
 tooltip: {
     trigger: 'axis',
     
 },
  title: {
         text: 'PRP',
         subtext:'APE302',
         left: 'center'
     },
 toolbox: {
     feature: {
         dataView: {show: true, readOnly: false},
         saveAsImage: {show: true}
     }
 },
 legend: {
    bottom: '10',
    left: 'center',
     data: ['Wafer Move', 'PRP']
 },
 xAxis: [
     {
         type: 'category',
         data: ['W101', 'W102', 'W103', 'W104', 'W105', 'W106', 'W107', 'W108', 'W109', 'W110', 'W111', 'W112'],
         axisPointer: {
             type: 'shadow'
         }
     }
 ],
 yAxis: [
     {
         type: 'value',
         name: 'Wafer Move(pcs)',
         min: 0,
         max: 1000,
         interval: 150,
         axisLabel: {
             formatter: '{value}'
         }
     },
     {
         type: 'value',
         name: 'PRP(ea)',
         min: 0,
         max: 8,
         interval: 0.5,
         axisLabel: {
             formatter: '{value}'
         }
     }
 ],
 series: [
    
     {
         name: 'Wafer Move',
         type: 'bar',
         label: {
             show: true,
             position: 'inside'
         },
         data: [184, 200, 111, 141, 109, 127, 130, 190, 68, 99, 111, 101]
     },
     {
         name: 'PRP',
         type: 'line',
         yAxisIndex: 1,
         label: {
             show: true,
             position: 'inside'
         },
         markLine: {
             silent: true,
             lineStyle: {
                 color: 'red'
             },
             data: [{
                 yAxis: 5
             }]
         },
         data: [1.0, 1.2, 2.3, 1.5, 1.9, 0.2, 0.0, 1.0, 2.4, 3.1, 2, 0.9]
     }
 ]
};


public chartOptionAPE303: any =   {
  color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'],
 tooltip: {
     trigger: 'axis',
     
 },
  title: {
         text: 'PRP',
         subtext:'APE303',
         left: 'center'
     },
 toolbox: {
     feature: {
         dataView: {show: true, readOnly: false},
         saveAsImage: {show: true}
     }
 },
 legend: {
    bottom: '10',
    left: 'center',
     data: ['Wafer Move', 'PRP']
 },
 xAxis: [
     {
         type: 'category',
         data: ['W101', 'W102', 'W103', 'W104', 'W105', 'W106', 'W107', 'W108', 'W109', 'W110', 'W111', 'W112'],
         axisPointer: {
             type: 'shadow'
         }
     }
 ],
 yAxis: [
     {
         type: 'value',
         name: 'Wafer Move(pcs)',
         min: 0,
         max: 1000,
         interval: 150,
         axisLabel: {
             formatter: '{value}'
         }
     },
     {
         type: 'value',
         name: 'PRP(ea)',
         min: 0,
         max: 8,
         interval: 0.5,
         axisLabel: {
             formatter: '{value}'
         }
     }
 ],
 series: [
    
     {
         name: 'Wafer Move',
         type: 'bar',
         label: {
             show: true,
             position: 'inside'
         },
         data: [114, 160, 201, 206, 219, 238, 260, 241, 198, 129, 166, 139]
     },
     {
         name: 'PRP',
         type: 'line',
         yAxisIndex: 1,
         label: {
             show: true,
             position: 'inside'
         },
         markLine: {
             silent: true,
             lineStyle: {
                 color: 'red'
             },
             data: [{
                 yAxis: 5
             }]
         },
         data: [0.0, 0.6, 0.3, 1.3, 1.2, 1.2, 1.6, 1.6, 0.9, 0.4, 1.6, 1.3]
     }
 ]
};

public chartOptionAPE304: any =   {
  color: ['#93b7e3', '#FFBF00', '#73c0de', '#FF0087', '#FFBF00'],
 tooltip: {
     trigger: 'axis',
     
 },
  title: {
         text: 'PRP',
         subtext:'APE304',
         left: 'center'
     },
 toolbox: {
     feature: {
         dataView: {show: true, readOnly: false},
         saveAsImage: {show: true}
     }
 },
 legend: {
    bottom: '10',
    left: 'center',
     data: ['Wafer Move', 'PRP']
 },
 xAxis: [
     {
         type: 'category',
         data: ['W101', 'W102', 'W103', 'W104', 'W105', 'W106', 'W107', 'W108', 'W109', 'W110', 'W111', 'W112'],
         axisPointer: {
             type: 'shadow'
         }
     }
 ],
 yAxis: [
     {
         type: 'value',
         name: 'Wafer Move(pcs)',
         min: 0,
         max: 1000,
         interval: 150,
         axisLabel: {
             formatter: '{value}'
         }
     },
     {
         type: 'value',
         name: 'PRP(ea)',
         min: 0,
         max: 8,
         interval: 0.5,
         axisLabel: {
             formatter: '{value}'
         }
     }
 ],
 series: [
    
     {
         name: 'Wafer Move',
         type: 'bar',
         label: {
             show: true,
             position: 'inside'
         },
         data: [109, 150, 161, 121, 133, 175, 151, 152, 99, 98, 136, 146]
     },
     {
         name: 'PRP',
         type: 'line',
         yAxisIndex: 1,
         label: {
             show: true,
             position: 'inside'
         },
         markLine: {
             silent: true,
             lineStyle: {
                 color: 'red'
             },
             data: [{
                 yAxis: 5
             }]
         },
         data: [1.0, 2.2, 2.3, 2.0, 1.5, 0.2, 0.1, 1.1, 2.1, 2.1, 1.2, 1.1]
     }
 ]
};
}
