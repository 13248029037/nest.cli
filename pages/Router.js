import React, { Component } from 'react'
import router from 'next/router'
import API from '../lib/api.js'



// on: (eventName: EventName, handler: EventHandler | ErrorEventHandler) => void;
router.events.on('routeChangeStart',(props) =>{
 alert('xoap')
 return false
})

export default class Router extends Component {

    static async getInitialProps({ query,  req,pathname }) {

        if(req) {
            const data = await API.getData({
                params: {},
                data: {}
            });
            console.info(data) 
            return {list:data.data.list}
        }
        return {}

    }


    render () {
        return <div>
            <span onClick ={this.handleClick}>点击</span>
            {this.props.list.map(item => <div>{item.cinemaName}</div>)}
            
        </div>
    }

    handleClick () {
        // router.push('/mission?id=43535434543')

        // alert('xiao')
        router.push('/xiao')

        router.beforePopState(({ url, as, options }) => {

            // alert('xiao')
            // I only want to allow these two routes!
            // if (as !== "/" || as !== "/other") {
            //   // Have SSR render bad routes as a 404.
            //   window.location.href = as
            //   return false
            // }
          
            return true
          });


    }
}

