import React from 'react'
import './index.css'
import $ from 'jquery';
import imgSrc from './image/tv.png'
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
import './font/iconfont.css'
const BootRate = React.createClass({
	render:function(){
		

		return (
				<div className="BootRate">
					<div className="com">
						<header>
							全网用户开机率趋势
						</header>
						<section className="pic">
							<i className="icon iconfont icon-shandongAPPtubiao-05"></i>
						</section>
						<section className="date">2017-2-12 -- 2017-3-11</section>
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
        subtitle: {
            text: ''
        },
        xAxis: {
        	crosshair: {
		            width: 1,
		            color: 'red'
		        },
            categories: ['2-12', '2-13', '2-14', '2-15', '2-16', '2-17',
	                         '2-18'],
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
                    x: -10,
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
	            backgroundColor:"#ff6393",
	            borderColor:"#ff6393",
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
	           
			            data: [290000, 380000, 300000, 161500, 335000, 506273, 520000],
			            color:"#ff6393"
			        }
   			 ]
		   
		});
	}
})
export default BootRate;