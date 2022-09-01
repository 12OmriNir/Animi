import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div class="row">
          <div className="col-6 mb-3">
            <img
              src="https://i.ytimg.com/vi/ySES_T4FZ1A/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBw_X2j_L2Rv1Vn8nzKfRctPAc8aA"
              style={{ width: "75%", height: "75%", objectFit: "cover" }}
            />
            <h3 className="mt-1">Omri Nir</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src="https://pbs.twimg.com/ext_tw_video_thumb/1460415678683484163/pu/img/Ji1gBFgG6PtbS1jr?format=jpg&name=large"
              style={{ width: "75%", height: "75%", objectFit: "cover" }}
            />
            <h3 className="mt-1">Yoav Nahmani</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src="https://extrachill.com/wp-content/uploads/2022/05/rick-astley-never-gonna-give-you-up.jpeg"
              style={{ width: "75%", height: "75%", objectFit: "cover" }}
            />
            <h3 className="mt-1">Tomer Menashe</h3>
            <h5 className="text-secondary">CEO</h5>
          </div>

          <div className="col-6 mb-3">
            <img
              src="https://i.ytimg.com/vi/i8a3gjt_Ar0/maxresdefault.jpg"
              style={{ width: "75%", height: "75%", objectFit: "cover" }}
            />
            <h3 className="mt-1">Itamar Melamed</h3>
            <h5 className="text-secondary">CEO</h5>
            <h4></h4>
          </div>
        </div>
      </div>
    );
  }
}
