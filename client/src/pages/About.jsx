import React, { Component } from "react";
import ItamarMelamed from './Pics/ItamarMelamed.PNG'
import YoavNahmani from './Pics/YoavNachmani.jpg'
import OmriNir from './Pics/OmriNir.jpg'

export default class About extends Component {



  render() {
    const {adminLogin,isManagerOnline,AdminDisconnect } = this.props

let button 
if(isManagerOnline){
button = <button className="btn btn-warning" onClick={() => AdminDisconnect()}>disconnect</button>
}else{
button = <button className="btn btn-warning" onClick={() => adminLogin()}>login to admin</button>
}

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 mb-3">
            <img
              src={OmriNir}
              style={{height: 370}}
              className="img-fluid"
              alt="omri"
            />
            <h3 className="mt-1">Omri Nir</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src={YoavNahmani}
              style={{height: 370}}
              className="img-fluid"
              alt="yoav"
            />
            <h3 className="mt-1">Yoav Nahmani</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src="https://extrachill.com/wp-content/uploads/2022/05/rick-astley-never-gonna-give-you-up.jpeg"
              style={{height: 370}}
              className="img-fluid"
              alt="tomer"

            />
            <h3 className="mt-1">Tomer Menashe</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src={ItamarMelamed}
              style={{height: 370}}
              className="img-fluid"
              alt="itamar"
            />
            <h3 className="mt-1">Itamar Melamed</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>
          <div>
             {button}
          </div>
        </div>
      </div>
    );
  }
}
