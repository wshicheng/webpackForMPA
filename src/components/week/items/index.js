import React from 'react';
import imgSrc from './image/txt.png'
import './index.css'
import ReactDom from 'react-dom'
var Items =  React.createClass({
	getInitialState:function(){
		return {
			index:0,
			posX:'',
			posY:'',
			direction:'',
			isMove:false,
			startTime:'',
			count:0,
			curColor:""
		}
	},
	render:function(){
		return (
			<div className="navBar">
						<ul id="card">
							<li ref="item" className="stack__item" onTouchStart={this.handleStart} onTouchMove={this.handleMove} onTouchEnd={this.handleEnd}  >
								<div className="con">
									<div className="pic">
										<img src={imgSrc}/>
									</div>
									<div className="rateName">
										<p>
											全国电视剧收视率TOP50排行榜
										</p>
									</div>
								</div>
								<div className="orange">
										
								</div>
								<div className="wrap">
									
									<div className="detail">
										<section>
											<p>全国电视剧收视率TOP50周排行</p>
											<time>2017-2-18--2017-2-24</time>
											<dl>
												
												<dd><span className="dot">1.</span><span className="name">射雕英雄传</span><span className="rate">1.223%</span></dd>
												<dd><span className="dot">2.</span><span className="name">三生三世十里桃花</span><span className="rate">1.223%</span></dd>
												<dd><span className="dot">3.</span><span className="name">因为遇见你</span><span className="rate">1.223%</span></dd>
											</dl>
										</section>
									</div>
									<div className="seeAll">
										<a href="list_1.html">
											查看全榜
										</a>
									</div>
								</div>
							</li>
							<li ref="item" className="stack__item" onTouchStart={this.handleStart} onTouchMove={this.handleMove} onTouchEnd={this.handleEnd}  >
								<div className="con">
									<div className="pic">
										<img src={imgSrc}/>
									</div>
									<div className="rateName">
										<p>
											全国电视剧收视率TOP50排行榜
										</p>
									</div>
								</div>
								<div className="orange">
										
								</div>
								<div className="wrap">
									
									<div className="detail">
										<section>
											<p>全国电视剧收视率TOP50周排行</p>
											<time>2017-2-18--2017-2-24</time>
											<dl>
												
												<dd><span className="dot">1.</span><span className="name">射雕英雄传</span><span className="rate">1.223%</span></dd>
												<dd><span className="dot">2.</span><span className="name">三生三世十里桃花</span><span className="rate">1.223%</span></dd>
												<dd><span className="dot">3.</span><span className="name">因为遇见你</span><span className="rate">1.223%</span></dd>
											</dl>
										</section>
									</div>
									<div className="seeAll">
										<a href="list_2.html">
											查看全榜
										</a>
									</div>
								</div>
							</li>
							<li ref="item" className="stack__item" onTouchStart={this.handleStart} onTouchMove={this.handleMove} onTouchEnd={this.handleEnd}  >
								<div className="con">
									<div className="pic">
										<img src={imgSrc}/>
									</div>
									<div className="rateName">
										<p>
											全国电视剧收视率TOP50排行榜
										</p>
									</div>
								</div>
								<div className="orange">
										
								</div>
								<div className="wrap">
									
									<div className="detail">
										<section>
											<p>全国电视剧收视率TOP50周排行</p>
											<time>2017-2-18--2017-2-24</time>
											<dl>
												
												<dd><span className="dot">1.</span><span className="name">射雕英雄传</span><span className="rate">1.223%</span></dd>
												<dd><span className="dot">2.</span><span className="name">三生三世十里桃花</span><span className="rate">1.223%</span></dd>
												<dd><span className="dot">3.</span><span className="name">因为遇见你</span><span className="rate">1.223%</span></dd>
											</dl>
										</section>
									</div>
									<div className="seeAll">
										<a href="list_3.html">
											查看全榜
										</a>
									</div>
								</div>
							</li>
						</ul>
						
				</div>
		)
	},
	handleStart:function(e){
		var posX = e.touches[0].pageX;
		var posY = e.touches[0].pageY;
		this.setState({posX:posX,posY:posY,isMove:false,startTime:new Date().getTime()});
	},
	handleMove:function(e){
		var posX = e.touches[0].pageX;
		var posY = e.touches[0].pageY;
		var deltaX = posX - this.state.posX;
   		var deltaY = posY - this.state.posY;
	   if (Math.abs(deltaX) > Math.abs(deltaY)){
	    	var direction = deltaX>0?"right":"left"; //判断手指滑动的方向
	    	this.setState({posX:posX,posY:posY,isMove:true,direction:direction});
	   }
	},
	handleEnd:function(){
		if(this.state.isMove){
			var count =this.state.count;
	   		var l = document.getElementsByTagName("li");
			var arr = Array.prototype.slice.call(l);
			arr.push(arr[0]);
			arr.shift();
		
	   		arr[count%3].style.cssText="z-index:3;transform:translate3d(0px, 0px, 0px);opacity:1";
	   		arr[(count+1)%3].style.cssText="z-index:2;transform:translate3d(29px, 20px, -86px)";
   			arr[(count+2)%3].style.cssText="z-index:1;transform:translate3d(60px, 50px, -186px)";
	   		count++;
	   	
			//滑动结束
			this.setState({isMove:false,count:count});
		}
	},
	componentDidMount:function(){
		
	}
	
})
export default Items;