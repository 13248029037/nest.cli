import React, { Component } from 'react'
import css from '../less/index.less'
import {Button} from 'antd'
import Head from 'next/head'
// import '../less/index.less'

export default () => <div className={css.example}>
<Head>
    <link rel="stylesheet" href="/static/antd.css"></link>
</Head>
<p>Welcome to next.js nihao !</p>
<Button>nihao </Button>
{/* <img src="/static/example.jpg" alt=""/> */}
</div>