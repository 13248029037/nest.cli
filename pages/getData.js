import React, { Component } from 'react'
import API from '../lib/api.js'
const Page = ({start,list}) =>
    <div>
    <span>{start || 'hello'}</span>
    {list.map(item =>{
        return (
            <div>{item.cinemaName}</div>
        )
    })}
    </div>

Page.getInitialProps = async ({req}) => {

    const data = await API.getData({
        params: {},
        data: {}
    });
    return {list:data.data.list}
}   


export default Page;

