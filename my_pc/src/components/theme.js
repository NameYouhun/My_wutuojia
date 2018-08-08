import React, { Component } from 'react';
import $ from 'jquery'
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import '../css/theme_lzh.css'
import List_1 from '../img/theme_list_1.jpg'
import List_none1 from '../img/theme_list_none1.jpg'
import List_none2 from '../img/theme_list_none2.jpg'
import List_none3 from '../img/theme_list_none3.png'


class Theme extends Component {
    render() {
        return (
            <div className="theme_wrap_lzh">
                <div className="theme_list_wrap_lzh">
                    <ul className="theme_list_ul_lzh">
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="theme_box_wrap_lzh"></div>
                            <div className="theme_list_box_lzh">
                                <div className="theme_list_div_lzh">
                                    <Link to="/">
                                        <img src={List_1} alt=""/>

                                        <div className="theme_img_wrap_lzh"></div>
                                        <div className="theme_img_font_lzh">
                                            <p>去阳台抓住秋风</p>
                                            <div className="theme_font_xin_lzh">
                                                <div className="theme_font_xin_div_lzh">
                                                    <i></i>
                                                    <span>198</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="theme_list_none_lzh">
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none1} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none2} alt=""/>
                                    </div>
                                    <div className="theme_list_none_img_lzh">
                                        <img src={List_none3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="theme_page_lzh">

                </div>
            </div>
        );
    }
    componentDidMount(){
        $(".theme_list_ul_lzh li").each(function (i) {
            $(this).hover(function () {
                $(this).find($('.theme_box_wrap_lzh')).show()
                $(this).find($('.theme_list_none_lzh')).stop().slideToggle("slow")
            },function () {
                $(this).find($('.theme_box_wrap_lzh')).hide()
                $(this).find($('.theme_list_none_lzh')).hide()
            })
        })

    }
}

export default Theme;