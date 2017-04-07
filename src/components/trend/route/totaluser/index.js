import React from 'react'
import './index.css'
import imgSrc from './image/tv.png'
import $ from 'jquery';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
const TotalUser = React.createClass({
	render:function(){
		const style={
			width:"150px",
			height:"50px",
			viewBox:"0 0 75 25"
		}
		return (
			<div className="TotalUser">
				<div className="com">
					<header>
					全网用户数趋势
					</header>
					<section className="pic">
						<i className="icon iconfont icon-shandongAPPtubiao-06"></i>
					</section>
					<section className="date">2017-2-12 -- 2017-2-18</section>
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
	        subtitle: {
	            text: ''
	        },
	        xAxis: {
	        	crosshair: {
		            width: 1,
		            color: '#1c7dfa'
		        },
	            categories: ['2-12', '2-13', '2-14', '2-15', '2-16', '2-17',
	                         '2-18'],
	            gridLineColor:"rgba(0,0,0,0)",
	            gridLineWidth:"1",
	            labels: {
	               style: {
								    color: 'rgba(255,255,255,.6)',
								    fontSize: "1.2rem",
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
								    fontSize: "1.2rem",
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
	            backgroundColor:"#1c7dfa",
	            borderColor:"#1c7dfa",
	            borderRadius:10,
	            formatter: function() {
                           return '<b style="color:#fff;">'+ this.y +'</b><br/>';
					
	            }
	        },
	        legend: {
	            enabled:false,
	           
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
		     series: [
			     {
			        name: '<b style="color:#FFFFFF;"></b>',
			    	data: [290000, 380000, 300000, 161500, 335000, 506273, 520000],
			        color:"#1c7dfa",
			        
			        
			   	}
		     ],
		   
		});
		
	}
})
export default TotalUser;