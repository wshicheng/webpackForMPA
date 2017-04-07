import React from 'react'
import {Router,Route,hashHistory,IndexRoute,Link} from 'react-router'
import BootRate from './route/bootrate'
import NumOfUser from './route/numofuser'
import TotalUser from './route/totaluser'
import './index.css'
import './route/font-awesome/css/font-awesome.css'
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
								<p>7天趋势</p>
							</div>
						</Link>
						<Link to="/bootrate" activeClassName="active">
							<canvas id="canvas2" width="60" height="60">
								
							</canvas>
							<div className="title">
								全网开机率
								<p>7天趋势</p>
							</div>
							
						</Link>
						<Link to="" activeClassName="active">
							<i className="fa fa-plus"></i>
						</Link>
					
				</div>
			</div>
		)
	},
	circle:function(id,dataColor,dataArr){
			var canvas = document.getElementById(id);
			var ctx =  canvas.getContext("2d");
			var w = canvas.width;
			var h = canvas.height;
			//开始绘图 生成背景
			ctx.beginPath();
			ctx.fillStyle="#53d769"
			for (var i=1;i<8;i++){
				ctx.save();
				ctx.translate(0,h-i*(h/8))
				ctx.fillRect((i-1)*(w/14)+5*(i-1),0,w/12,h-1*(h/8));
				ctx.restore()
			}
			ctx.closePath();
			//开始绘图 嵌套柱子
			ctx.beginPath();
			ctx.fillStyle=dataColor;
			rate(dataArr);
			ctx.closePath();
			//开始绘图，生成小矩形
			ctx.beginPath();
			ctx.fillStyle="#384266";
			rect(dataArr);
			ctx.closePath();
			
			//生成比例图
			function rate(dataArr){
				for (var i=1;i<8;i++){
					ctx.save();
					ctx.translate(0,h-i*(h/8)*dataArr[i-1]/100)
					ctx.fillRect((i-1)*(w/14)+5*(i-1),0,w/12,h-1*(h/8)*70/100);
					ctx.restore()
				}
				
			}
			
			//生成小矩形
			function rect(arr){
				for (var i=1;i<8;i++){
					ctx.save();
					ctx.translate(0,h-i*(h/8)*arr[i-1]/100)
					ctx.fillRect((i-1)*(w/14)+5*(i-1),0,w/12,2);
					ctx.restore()
				}
				
			}
			
			
			
	},
	componentDidMount:function(){
			/*
			 @param id:dom元素id
		  	 @param dataColor:数组数据颜色
			 @param dataArr:数组
			 * */
			this.circle("canvas1","#1b7dfa",[60,20,70,40,50,60,70]);
			this.circle("canvas2","#ff6a94",[30,10,20,50,70,80,50]);
			
			
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