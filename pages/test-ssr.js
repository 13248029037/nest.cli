import React, { Component } from 'react'
import Template from '../component/template'
import {Button,Input} from 'antd'

export default class test extends Component {

    constructor() {
        super()
    }
    render() {
        return (
            <Template>
                <div>
                    <span id="ddd" className={"iconfont icon-aixin"} style={{ color: 'red', fontSize: '40px' }}></span>
                    <span>435345345</span>
                    <div>
                        ewtrertret
                </div>
                    <div >
                        <span>retetret</span>
                        <Button>234234</Button>
                        <Input></Input>
                    </div>
                </div>
            </Template>

        )
    }
}