import React, { Component } from "react";
import ItamarMelamed from './Pics/ItamarMelamed.PNG'
import YoavNahmani from './Pics/YoavNachmani.jpg'
import OmriNir from './Pics/OmriNir.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 mb-3">
            <img
              src={OmriNir}
              style={{Height: '370px'}}
              className="img-fluid"
              alt="omri"
            />
            <h3 className="mt-1">Omri Nir</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src={YoavNahmani}
              style={{Height: '370px'}}
              className="img-fluid"
              alt="yoav"
            />
            <h3 className="mt-1">Yoav Nahmani</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src="https://extrachill.com/wp-content/uploads/2022/05/rick-astley-never-gonna-give-you-up.jpeg"
              style={{Height: '370px'}}
              className="img-fluid"
              alt="tomer"

            />
            <h3 className="mt-1">Tomer Menashe</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src={ItamarMelamed}
              style={{Height: '370px'}}
              className="img-fluid"
              alt="itamar"
            />
            <h3 className="mt-1">Itamar Melamed</h3>
            <h5 className="text-secondary">CEO</h5>

          </div>
        </div>
      </div>
    );
  }
}
