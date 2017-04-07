import React from 'react'
import {Router,Route,hashHistory,IndexRoute,Link} from 'react-router'
import BootRate from './route/bootrate'
import NumOfUser from './route/numofuser'
import TotalUser from './route/totaluser'
import './index.css'
const App = React.createClass({
	render:function(){
		return (
			<div>
				
				<div className="detail">
					{this.props.children}
				</div>
				<div className="navBar">
					
						<Link to="/totalUser" activeClassName="active">
							<canvas id="canvas1" width="60" height="60">
								
							</canvas>
							<div className="title">
								全网用户数
							</div>
							<div className="num">
								6,488,721
							</div>
						</Link>
						<Link to="/bootrate" activeClassName="active">
							<canvas id="canvas2" width="60" height="60">
								
							</canvas>
							<div className="title">
								开机率
							</div>
							<div className="num">
								2,758,54
							</div>
						</Link>
						<Link to="/numOfUser" activeClassName="active">
							<canvas id="canvas3" width="60" height="60">
								
							</canvas>
							<div className="title">
								开机用户数
							</div>
							<div className="num">
								21,488,27
							</div>
						</Link>
					
				</div>
			</div>
		)
	},
	circle:function(id,lineBeginCol,lineEndCol,percent,radioBeginCol,radioEndColor){
			
			var canvas = document.getElementById(id);
			var ctx =  canvas.getContext("2d");
			var startAngle = 3*Math.PI/2;//起始位置
			var endAngle = 3*Math.PI/2+(percent*360/100)*Math.PI/180;//终点位置
		    //起始点坐标
		    var x1 = 30+20*Math.cos(startAngle);
		    var y1 = 30+20*Math.sin(startAngle);
		    //终点的坐标
		    var x2 = 30+20*Math.cos(endAngle);
		    var y2 = 30+20*Math.sin(endAngle);
		    //画空心圆环
		    ctx.fillStyle="#384267";
		    ctx.beginPath();
		    ctx.arc(30,30,20,0,Math.PI*2,true);
		  	ctx.lineWidth=4;
		  	ctx.strokeStyle="#313d63";
		  	ctx.fill()
		  	ctx.stroke();
			ctx.closePath();
			//线性渐变
			ctx.beginPath()
			ctx.arc(30,30,20,startAngle,endAngle,false);
			ctx.lineCap="round";
			var grd = ctx.createLinearGradient(x1,y1,x2,y2);
			grd.addColorStop(0, lineBeginCol);
    		grd.addColorStop(1, lineEndCol);
			ctx.strokeStyle=grd;
			ctx.stroke()
			ctx.closePath();
			//镜像渐变
			ctx.beginPath();
			var radial = ctx.createRadialGradient(x2,y2,2,x2,y2,10);
			radial.addColorStop(0,radioBeginCol);
			radial.addColorStop(1,radioEndColor);
			ctx.fillStyle = radial;
 			ctx.fillRect(0,0,60,60);
 			ctx.closePath();
	},
	componentDidMount:function(){
			this.circle("canvas1","rgba(104,134,245,1)","rgba(148,202,230,1)",30,"rgba(104,134,245,.5)","rgba(148,202,230,0)");
			this.circle("canvas2","rgba(255,97,148,1)","rgba(254,170,124,1)",45,"rgba(255,97,148,.5)","rgba(254,170,124,0)");
			this.circle("canvas3","rgba(87,211,243,1)","rgba(96,217,201,1)",75,"rgba(87,211,243,.5)","rgba(96,217,201,0)");
	}
})
const Rou = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={TotalUser}/>
					<Route path="/totalUser" component={TotalUser}/>
					<Route path="/bootrate" component={BootRate}/>
					<Route path="/numOfUser" component={NumOfUser}/>
				</Route>
			</Router>
			
		)
	}
})
export default Rou;