import React from 'react'
import './index.css'
import './font/iconfont.css'
import $ from 'jquery';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
const TotalUser = React.createClass({
	render:function(){
		const style={
			width:"130px",
			height:"50px",
			viewBox:"0 0 65 25"
		}
		return (
			<div className="TotalUser">
				<div className="com">
					<header>
						全网用户数Total Networker User
					</header>
					<section>
						6,488,7212
					</section>
					<section className="arrow">
						<i className="icon iconfont icon-quanwang-5"></i>	
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
             	plotBorderWidth:"1"
      		},
	       	credits: {  
	         		 enabled:false  
					}, 
			exporting: {  
	            		enabled:false  
					}, 
	        title: {
	        	useHTML:true,
	            text: "<b style='width:30px;height:2px;float:left;margin-top:0.6rem;background:#53d769;display:inline-block;margin-right:10px;'></b>上周" ,
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
		            color: '#1c7dfa'
		        },
	            categories: ['1', '2', '3', '4', '5', '6',
	                         '7', '8',],
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
	            padding:5,
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
		                    lineColor: "#fff",
		                    lineWidth: 1,
		                   
		                }
	            },
	            series:{
	            	cursor:"pointer",
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
			    	data: [290000, 380000, 300000, 161500, 335000, 506273, 540000,621000],
			        color:"#53d769",
			        
			        
			   	},
			   	 {
			        name: '<b style="color:#FFFFFF;"></b>',
			        
			    	data: [160000, 510000, 515000, 641500, 515000, 406273, 370000,291000],
			        color:"#1c7dfa"
			        
			   	}
		     ],
		   
		});
		
	}
})
export default TotalUser;