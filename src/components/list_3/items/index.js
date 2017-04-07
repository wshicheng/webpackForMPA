import React from 'react';
import './index.css'
import './font/iconfont.css'
import ReactDom from 'react-dom'
import imgSrc from './image/txt.png'
var Items =  React.createClass({
	getInitialState:function(){
		return {
			items:[
				{cnlName:'射雕英雄传',cnlRate:'1.223%'},
				{cnlName:'三生三世十里桃花',cnlRate:'2.223%'},
				{cnlName:'因为遇见你',cnlRate:'3.223%'},
				{cnlName:'动物世界',cnlRate:'6.223%'},
				{cnlName:'我是歌手第三季',cnlRate:'3.523%'},
				{cnlName:'速度与激情7',cnlRate:'0.283%'},
				{cnlName:'一只狗的使命',cnlRate:'5.123%'},
				{cnlName:'西游记',cnlRate:'3.51%'},
				{cnlName:'爱情公寓4',cnlRate:'2.256%'},
				{cnlName:'天天向上',cnlRate:'1.273%'},
				{cnlName:'大头儿子小头爸爸',cnlRate:'3.83%'},
				{cnlName:'奥特曼',cnlRate:'2.453%'},
				{cnlName:'盲探',cnlRate:'1.03%'},
				{cnlName:'漂洋过海来看你',cnlRate:'6.76%'},
				{cnlName:'53号白公馆',cnlRate:'5.154%'}
			]
		}
	},
	render:function(){
		return (
			<div className="content">
				<div className="bg">
					<div className="fn">
						<a className="back" href="week.html"><i className="icon iconfont icon-quanwang-10"></i></a>
						<a className="share" href="javascript:void(0)"><i className="icon iconfont icon-fenxiang"></i></a>
					</div>
					<div className="banner">
						<img src={imgSrc}/>
						
					</div>
					<div className="con">
						<p>全国电视剧TOP50排行版</p>
						<time>2017-2-18--2017-2-24</time>
					</div>
				</div>
				<div className="list">
					<dl>
						{
							this.state.items.map(function(item,index){
								return (
									<dd>
										<span className="dot">{index+1}.</span>
										<span className="name">{item.cnlName}</span>
										<span className="rate">{item.cnlRate}</span>
									</dd>
								)
							})
						}
					</dl>
				</div>
			</div>
		)
	}
})
export default Items;