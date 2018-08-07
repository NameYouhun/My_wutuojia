import React from 'react'
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import '../css/footer_li.css'
import footer_logo from '../img/wtj-logo.png'
import qrcode from '../img/qrcode.png'
class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer_li">
                <div className="footer_wrap_li">
                    <div className="footer_top_li">
                        <ul>
                            <li>
                                <Link to='/home'>
                                    <i className="footer_tu_lzh"></i>
                                    <span>大厂直供</span>
                                    <p>出厂价格出口品质</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/home'>
                                    <i className="footer_tu2_lzh"></i>
                                    <span>家居灵感</span>
                                    <p>海量家居美图发现梦想的家</p>
                                </Link>
                            </li>
                            <li className='footer_v250_lzh'>
                                <Link to='/home'>
                                    <i className="footer_tu3_lzh"></i>
                                    <span>私人搭配师</span>
                                    <p>资深设计师免费帮你搭</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer_center_lzh'>
                        <div className="footer_logo_lzh">
                            <img src={footer_logo} alt=""/>
                            <p className="footer_logo_p_lzh">
                                粤ICP备15037979号-1
                            </p>
                            <p>©2015~2018 wutuojia.com 广州乌托家信息科技有限公司</p>
                        </div>
                        <div className='fr f_list_lzh'>
                            <div className="about-us_lzh">
                                <span>关于我们</span>
                                <ul className="about-us-ul_lzh">
                                    <li>
                                        <a href="" >关于乌托家</a>
                                    </li>
                                    <li>
                                        <a href="" >战略合作</a>
                                    </li>
                                    <li>
                                        <a href="" >社会招聘</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-us_lzh">
                                <span>帮助中心</span>
                                <ul className="about-us-ul_lzh">
                                    <li>
                                        <a href="" >用户指南</a>
                                    </li>
                                    <li>
                                        <a href="" >常见问题</a>
                                    </li>
                                    <li>
                                        <a href="" >意见反馈</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-us_lzh">
                                <span>配送安装</span>
                                <ul className="about-us-ul_lzh">
                                    <li>
                                        <a href="" >配送服务</a>
                                    </li>
                                    <li>
                                        <a href="" >安装服务</a>
                                    </li>
                                    <li>
                                        <a href="" >收货指南</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-us_lzh">
                                <span>售后保障</span>
                                <ul className="about-us-ul_lzh">
                                    <li>
                                        <a href="" >退货政策</a>
                                    </li>
                                    <li>
                                        <a href="" >退货流程</a>
                                    </li>
                                    <li>
                                        <a href="" >联系我们</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="qrcode_lzh">
                                <img src={qrcode}/>
                                <p>关注乌托家公众号</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f_yqlj_lzh">
                    <div className="fl f_yqlj_a_lzh ">
                        <Link to="#" className="fl">友情连接：</Link>
                        <div className="f_yqlj_div_lzh">
                            <a href="" target="_blank" title="家居网">家居</a>
                            <a href="" target="_blank" title="家居知识百科">家居百科</a>
                            <a href="" target="_blank" title="家居资讯">家居资讯</a>
                            <a href="" target="_blank" title="家居文库">家居文库</a>
                            <a href="" target="_blank" title="家具品牌">家具品牌</a>
                            <a href="" target="_blank" title="家居图片">家居图片</a>
                            <a href="" target="_blank" title="家具搭配">家具搭配</a>
                            <a href="" target="_blank" title="精品家具">精品家具</a>
                            <a href="" target="_blank" title="软装配饰">软装配饰</a>
                            <a href="" target="_blank" title="一美居网瓷砖">一美居网</a>
                            <a href="" target="_blank" title="软装设计公司">软装设计公司</a>
                            <a href="" target="_blank" title="依旧东方情">依旧东方情</a>
                            <a href="" target="_blank" title="福州装修网">福州装修网</a>
                            <a href="" target="_blank" title="家居O2O">家居O2O</a>
                            <a href="" target="_blank" title="全国家具生产厂家企业名录">家具厂</a>
                            <a href="" target="_blank" title="乌托家手机版">乌托家手机版</a>
                            <a href="" target="_blank" title="瓷砖批发">瓷砖批发</a>
                            <a href="" target="_blank" title="装装汇装饰网">装装汇装饰网</a>
                            <a href="" target="_blank" title="家具网">家具网</a>
                            <a href="" target="_blank" title="谈家具">谈家具</a>
                            <a href="" target="_blank" title="定制家具">定制家具</a>
                            <a href="" target="_blank" title="武汉装饰公司">武汉装饰公司</a>
                            <a href="" target="_blank" title="沙发品牌">沙发品牌</a>
                            <a href="" target="_blank" title="苏州家居网">苏州家居网</a>
                            <a href="" target="_blank" title="装修网">装修网</a>
                            <a href="" target="_blank" title="好房网">好房网</a>
                            <a href="" target="_blank" title="橱柜拉篮">橱柜拉篮</a>
                            <a href="" target="_blank" title="上海佳纳软装修公司">上海佳纳软装修公司</a>
                            <a href="" target="_blank" title="中式装修">中式装修</a>
                            <a href="" target="_blank" title="资讯导航">资讯导航</a>
                            <a href="" target="_blank" title="广州装修">广州装修</a>
                            <a href="" target="_blank" title="赤峰房地产">赤峰房地产</a>
                            <a href="" target="_blank" title="美猴网装修门户">美猴网装修门户</a>
                            <a href="" target="_blank" title="不锈钢屏风">不锈钢屏风</a>
                            <a href="" target="_blank" title="成都装饰公司">成都装饰公司</a>
                            <a href="" target="_blank" title="常州装修网">常州装修网</a>
                            <a href="" target="_blank" title="成都室内设计">成都室内设计</a>
                            <a href="" target="_blank" title="实木家具">实木家具</a>
                            <a href="" target="_blank" title="电动桌">电动桌</a>
                            <a href="" target="_blank" title="甲醛清除">甲醛清除</a>
                            <a href="" target="_blank" title="包头装修 ">包头装修 </a>
                            <a href="" target="_blank" title="装修图库网">装修图库网</a>
                            <a href="" target="_blank" title="集成吊顶">集成吊顶</a>
                            <a href="" target="_blank" title="家居电商">家居电商平台</a>
                            <a href="" target="_blank" title="整体衣柜加盟">整体衣柜加盟</a>
                            <a href="" target="_blank" title="攀枝花分类信息">攀枝花分类信息</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;