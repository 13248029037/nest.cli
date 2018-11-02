import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import '../less/index.less'
export default class extends Component {

    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="/static/icon/iconfont.css" />
                    <link rel="stylesheet" href="/static/antd.css"></link>
                    <title>react-ssr同构</title>
                </Head>
                <Header></Header>
               
                {this.props.children}
            </div>

        )

    }
}


