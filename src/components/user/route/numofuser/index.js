import React from 'react'
import './index.css'
import './font/iconfont.css'
import $ from 'jquery';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
const NumOfUser = React.createClass({
	render:function(){
		const style={
			width:"130px",
			height:"50px",
			viewBox:"0 0 65 25"
		}
		return (
			<div className="NumOfUser">
				<div className="com">
					<header>
						过去7天使用时长
					</header>
					<section>
						41小时
					</section>
					<section className="arrow">
						<i className="icon iconfont icon-quanwang-2"></i>
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
			 
	        subtitle: {
	            text: ''
	        },
	        xAxis: {
	        	crosshair: {
		            width: 1,
		            color: '#53d769'
		        },
	            categories: ['2-12', '2-13', '2-14', '2-15', '2-16', '2-17','2-18'],
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
	            backgroundColor:"#57d3f0",
	            borderColor:"#57d3f0",
	            borderRadius:10,
	           	style:{
	           		 "fontSize":"12px"
	           	},
	           	padding: 5,
	            formatter: function() {
                           return '<b style="color:#363b65;">'+ this.y +'</b><br/>';
					
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
			        color:"#53d769",
			        
			        
			   	},
				   	 {
				        name: '<b style="color:#FFFFFF;"></b>',
				    	data: [160000, 510000, 515000, 641500, 515000, 406273, 370000],
				        color:"#59d2f1"
				        
				   	} 
		     ],
		   
		});
		
	}
})
export default NumOfUser;