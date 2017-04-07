import React from 'react';
import './index.css'
import './font/iconfont.css'
import ReactDom from 'react-dom'
import imgSrc from './image/txt.png'
import request from 'superagent'
import $ from 'jquery'

var Items =  React.createClass({
	getInitialState:function(){
		
		return {
			items:[]
		}
	},
	currentClass:function(index){
		return this.state.current === index ? 'current' : '';
	},
	contentClass:function(index){
		 return this.state.current === index ? 'active' : '';
	},
	render:function(){
		const data01 = [
						{
							"num":"1",
							"channelName":"山东卫视高清",
							"broadCast":"咱家",
							"ratings":"2.0856%",
							"sharing":"7.4313%",
							"viewNumber":"10428"
						},
						{
							"num":"2",
							"channelName":"CCTV-1",
							"broadCast":"遥远的距离",
							"ratings":"1.6958%",
							"sharing":"6.0424%",
							"viewNumber":"8479"
						},
						{
							"num":"3",
							"channelName":"CCTV-4",
							"broadCast":"华人世界",
							"ratings":"1.688%",
							"sharing":"6.0146%",
							"viewNumber":"8440"
						},
						{
							"num":"4",
							"channelName":"CCTV-6",
							"broadCast":"杀戒",
							"ratings":"1.39%",
							"sharing":"4.9528%",
							"viewNumber":"6950"
						},
						{
							"num":"5",
							"channelName":"海看热播",
							"broadCast":"王牌对王牌",
							"ratings":"1.0538%",
							"sharing":"3.7548%",
							"viewNumber":"5269"
						}
					];
					
		const data02 =[
   
	{
		"num":"6",
		"channelName":"央视",
		"broadCast":"咱家",
		"ratings":"2.0856%",
		"sharing":"7.4313%",
		"viewNumber":"10428"
	},
	{
		"num":"7",
		"channelName":"央视-1",
		"broadCast":"遥远的距离",
		"ratings":"1.6958%",
		"sharing":"6.0424%",
		"viewNumber":"8479"
	},
	{
		"num":"8",
		"channelName":"央视-4",
		"broadCast":"华人世界",
		"ratings":"1.688%",
		"sharing":"6.0146%",
		"viewNumber":"8440"
	},
	{
		"num":"9",
		"channelName":"央视-6",
		"broadCast":"杀戒",
		"ratings":"1.39%",
		"sharing":"4.9528%",
		"viewNumber":"6950"
	},
	{
		"num":"10",
		"channelName":"央视",
		"broadCast":"王牌对王牌",
		"ratings":"1.0538%",
		"sharing":"3.7548%",
		"viewNumber":"5269"
	}
]	;
const data03 = [
   
	{
		"num":"11",
		"channelName":"卫视",
		"broadCast":"咱家",
		"ratings":"2.0856%",
		"sharing":"7.4313%",
		"viewNumber":"10428"
	},
	{
		"num":"12",
		"channelName":"卫视-1",
		"broadCast":"遥远的距离",
		"ratings":"1.6958%",
		"sharing":"6.0424%",
		"viewNumber":"8479"
	},
	{
		"num":"13",
		"channelName":"卫视-4",
		"broadCast":"华人世界",
		"ratings":"1.688%",
		"sharing":"6.0146%",
		"viewNumber":"8440"
	},
	{
		"num":"14",
		"channelName":"卫视-6",
		"broadCast":"杀戒",
		"ratings":"1.39%",
		"sharing":"4.9528%",
		"viewNumber":"6950"
	},
	{
		"num":"15",
		"channelName":"卫视",
		"broadCast":"王牌对王牌",
		"ratings":"1.0538%",
		"sharing":"3.7548%",
		"viewNumber":"5269"
	}
];
const data04 = [
   
	{
		"num":"16",
		"channelName":"本地",
		"broadCast":"咱家",
		"ratings":"2.0856%",
		"sharing":"7.4313%",
		"viewNumber":"10428"
	},
	{
		"num":"17",
		"channelName":"本地-1",
		"broadCast":"遥远的距离",
		"ratings":"1.6958%",
		"sharing":"6.0424%",
		"viewNumber":"8479"
	},
	{
		"num":"18",
		"channelName":"本地-4",
		"broadCast":"华人世界",
		"ratings":"1.688%",
		"sharing":"6.0146%",
		"viewNumber":"8440"
	},
	{
		"num":"19",
		"channelName":"本地-6",
		"broadCast":"杀戒",
		"ratings":"1.39%",
		"sharing":"4.9528%",
		"viewNumber":"6950"
	},
	{
		"num":"20",
		"channelName":"本地",
		"broadCast":"王牌对王牌",
		"ratings":"1.0538%",
		"sharing":"3.7548%",
		"viewNumber":"5269"
	}
];
const data05 = [
   
	{
		"num":"21",
		"channelName":"自办",
		"broadCast":"咱家",
		"ratings":"2.0856%",
		"sharing":"7.4313%",
		"viewNumber":"10428"
	},
	{
		"num":"22",
		"channelName":"自办-1",
		"broadCast":"遥远的距离",
		"ratings":"1.6958%",
		"sharing":"6.0424%",
		"viewNumber":"8479"
	},
	{
		"num":"23",
		"channelName":"自办-4",
		"broadCast":"华人世界",
		"ratings":"1.688%",
		"sharing":"6.0146%",
		"viewNumber":"8440"
	},
	{
		"num":"24",
		"channelName":"自办",
		"broadCast":"杀戒",
		"ratings":"1.39%",
		"sharing":"4.9528%",
		"viewNumber":"6950"
	},
	{
		"num":"25",
		"channelName":"自办",
		"broadCast":"王牌对王牌",
		"ratings":"1.0538%",
		"sharing":"3.7548%",
		"viewNumber":"5269"
	}
];
		return (
			<div className="con">
				<header>
					<timer>
						<i className="icon iconfont icon-quanwang-6 "></i>
					</timer>
					<span>2017-03-20 13:22:59</span>
				</header>
				<div className="category">
					<span>
						<div>
							<p className="num">634482</p>
							<p>累计用户</p>
						</div>
					</span>
					<span>
						<div>
							<p className="num">258953</p>
							<p>实时用户</p>
						</div>
					</span>
					<span>
						<div>
							<p className="num">172934</p>
							<p>直播用户</p>
						</div>
					</span>
					<span>
						<div>
							<p className="num">41406</p>
							<p>点播用户</p>
						</div>
					</span>
					<span>
						<div>
							<p className="num">4290</p>
							<p>时移用户</p>
						</div>
					</span>
					<span>
						<div>
							<p className="num">5576</p>
							<p>回看用户</p>
						</div>
					</span>
				</div>
				<div className="dataTV tab">
					<div className="tab-btn">
						<div className="channel active" onClick={this.handleClick} data-url={JSON.stringify(data01)}>
							<p className="icon"><i className="icon iconfont icon-quanwang-8"></i></p>
							<p className="name">全部</p>
						</div>
						<div className="channel" onClick={this.handleClick} data-url={JSON.stringify(data02)}>
							<p className="icon"><i className="icon iconfont icon-quanwang-8"></i></p>
							<p className="name">央视</p>
						</div>
						<div className="channel" onClick={this.handleClick} data-url={JSON.stringify(data03)}>
							<p className="icon"><i className="icon iconfont icon-quanwang-8"></i></p>
							<p className="name">卫视</p>
						</div>
						<div  className="channel" onClick={this.handleClick} data-url={JSON.stringify(data04)}>
							<p className="icon"><i className="icon iconfont icon-quanwang-8"></i></p>
							<p className="name">本地</p>
						</div>
						<div  className="channel" onClick={this.handleClick} data-url={JSON.stringify(data05)}>
							<p className="icon"><i className="icon iconfont icon-quanwang-8"></i></p>
							<p className="name">自办</p>
						</div>
					</div>
					<div className="template">
							<table>
								<thead>
									<tr>
										<th>排名</th>
										<th>频道</th>
										<th>收视率</th>
										<th>收视份额</th>
										<th>收视户数</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.items.map(function(item,index){
											return (
												<tr key={index}>
													<td className="num">{item.num}</td>
													<td>
														<p>{item.channelName}</p>
														<p className="proName">{item.broadCast}</p>
													</td>
													<td>{item.ratings}</td>
													<td>{item.sharing}</td>
													<td>{item.viewNumber}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</div>
				</div>
				
			</div>
		)
	},
	siblings:function(elem){
		var a = [];
	    var b = Array.prototype.slice.call(elem.parentNode.children);
	    var length = b.length;
	    for(var i =0;i<length;i++) {
	        if(b[i] !== elem)
	        a.push(b[i]);
	    }
	    return a;
	},
	handleClick:function(e){
		console.log("aaa")
		var res = this.siblings(e.currentTarget);
		for(var i=0;i<res.length;i++){
			res[i].setAttribute("class","channel")
		}
		e.currentTarget.setAttribute("class","channel active")
		const url = e.currentTarget.dataset.url;
		
		this.setState({
			items:JSON.parse(url),
		})
		/*request
			.get(url)
			.end(function(err,res){
				if(res.ok){
					var result = JSON.stringify(res.body);
					alert("等待后台提供数据接口")
				}else{
					console.log("on no! error "+ res.text)
				}
			})*/
	},
	componentDidMount:function(){
		var jsonData=[
			{
				"num":"1",
				"channelName":"山东卫视高清",
				"broadCast":"咱家",
				"ratings":"2.0856%",
				"sharing":"7.4313%",
				"viewNumber":"10428",
				
			},
			{
				"num":"2",
				"channelName":"CCTV-1",
				"broadCast":"遥远的距离",
				"ratings":"1.6958%",
				"sharing":"6.0424%",
				"viewNumber":"8479",
				
			},
			{
				"num":"3",
				"channelName":"CCTV-4",
				"broadCast":"华人世界",
				"ratings":"1.688%",
				"sharing":"6.0146%",
				"viewNumber":"8440",
				
			},
			{
				"num":"4",
				"channelName":"CCTV-6",
				"broadCast":"杀戒",
				"ratings":"1.39%",
				"sharing":"4.9528%",
				"viewNumber":"6950",
				
			},
			{
				"num":"5",
				"channelName":"海看热播",
				"broadCast":"王牌对王牌",
				"ratings":"1.0538%",
				"sharing":"3.7548%",
				"viewNumber":"5269",
				
			}
		];
		this.setState({
			items:jsonData
		})
	}
	
})
export default Items;