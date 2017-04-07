import React from 'react'
import './index.css'
import $ from 'jquery';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
const BootRate = React.createClass({
	render:function(){
		

		return (
				<div className="BootRate">
					<div className="com">
						<header onClick={this.handleClick}>
							开机率 Boot Rate
						</header>
						<section>
							2,758,54
						</section>
						<section className="date">
							2017-2-18 13:34:56
						</section>
					</div>
					<div className="chart">
						<div className='line-chart-wrapper'>
				      <div id="container" ></div>
				    </div>
					</div>
				</div>
		)
	},
	componentDidMount:function(){
		// 创建图表
		Highcharts.chart('container', { 
		    /*Highcharts 配置*/
		     chart: {
            type: 'spline',
             backgroundColor: 'rgba(43,48,81,1)',
             width:null,
             height:180,
             plotBorderColor:"",
             plotBorderWidth:"2"
       },
       credits: {  
          enabled:false  
				}, 
				exporting: {  
            enabled:false  
				}, 
				legend: {
	            enabled:false,
	           
	        },
        title: {
	        	useHTML:true,
	            text: "<b style='width:30px;height:2px;float:left;margin-top:0.6rem;background:red;display:inline-block;margin-right:10px;'></b>开机率" ,
	            align: 'right',
	            x: 0,
	         	y:15,
	            style: {
	                color: '#9a9cb0',
	                fontWeight: 'bold',
	                fontSize:"12px"
           	 	}
	        },
        subtitle: {
            text: ''
        },
        xAxis: {
        	 crosshair: {
		            width: 1,
		            color: 'red'
		        },
            categories: ['1', '2', '3', '4', '5', '6',
                         '7', '8',],
            gridLineColor:"rgba(0,0,0,0)",
            gridLineWidth:"1",
            labels: {
               style: {
							    color: 'rgba(255,255,255,.6)',
							    fontSize: "12px",
							    fontWeight: "normal",
							    fontFamily: "Courier new"
							},
				align: 'left',
	            x: 0,
	            y: 20	
            },
            lineColor:"red",
				    lineWidth:"0",
				    tickWidth:0
          
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    return this.value + '';
                },
                style: {
							    color: 'rgba(255,255,255,.6)',
							    fontSize: "12px",
							    fontWeight: "normal",
							    fontFamily: "Courier new"
							},
				align: 'left',
                x: 20,
                y: -5
            },
            gridLineColor:"rgba(52,58,97,1)",
            gridLineWidth:"1",
          
        },
        tooltip: {
	            crosshairs: true,
	            shared: false,
	            backgroundColor:"#ff0000",
	            borderColor:"#ff0000",
	            borderRadius:10,
	            formatter: function() {
                           return '<b style="color:#fff;">'+ this.y +'</b><br/>';
	            }
	       },
        plotOptions: {
            spline: {
                marker: {
                    radius: 2,
                    lineColor: '#fff',
                    lineWidth: 1,
                   
                }
            },
            series:{
	            	
	            	dashStyle:"",
	            	marker: {
			            symbol: 'circle'
			        },
			        events: {
	                    legendItemClick: function() {
	                        // return false 即可禁止图例点击响应
	                        return false;
	                    }
	                },
			       lineWidth:1
			       
	            }
        },
         series: [{
           
            data: [180000, 200000, 190000, 171500, 185000, 246273, 260000,261000],
            color:"red"
        }]
		   
		});
	}
})
export default BootRate;