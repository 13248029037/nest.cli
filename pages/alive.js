import React, { Component } from 'react'
import API from '../lib/api.js'
import {Icon} from 'antd'
import Link from 'next/link'
import Head from 'next/head'
// import '../lib/icon/iconfont.css'

export default class Wrap extends Component {
    static async getInitialProps({ query,  req,pathname }) {
        // console.info(req,'reqreqreqreqreqreqreqreq') 
        // console.info(req,'gggggggggg')
        // console.info(req.headers,'req')
    //    if(req){
        // console.info(pathname,'pathnamepathnamepathnamepathname')
        // console.info(query,'queryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryqueryquery')
        // if(req) {
        //     const data = await API.getData({
        //         params: {},
        //         data: {}
        //     });
        //     console.info(data)
        // //    }    
        //     return {list:data.data.list}
        // }

        return {}
    }
        render()  {
            console.info(this.props,'propsprops')

            return (
                <div >
                    <style jsx>{
                        `
                        span{
                            color:red;
                            font-size:50px;
                            backgroundColor:bluel

                        }
                        #ddd{
                            font-size:50px;
                            backgroundColor:bluel
                        }
                        `
                    }
                    </style>
                    <Head>
                        <link rel="stylesheet" href="/static/icon/iconfont.css"/>
                    </Head>
                    hello async data
                    <Icon type="star" theme="filled" style={{color:'red',fontSize:'20px'}} />
                    <span id="ddd" className="iconfont icon-aixin" style={{color:'red',fontSize:'40px'}}></span>
                    <span>435345345</span>
                    <Link  href="/mission">
                    {/* <a>33434</a> */}
                    <a href="">23324</a>
                    </Link>
                {/* {this.props.list.map(item => <div key={item.viewInfo}><span style={{color:'red'}}>{item.cinemaName}</span></div>)} */}
                   
                </div>
            )
    }
    handleClick () {
        console.info('xiaoshulin')
    }
}