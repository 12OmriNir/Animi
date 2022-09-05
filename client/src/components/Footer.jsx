import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-center text-lg-start footer-fix">
        <div className="text-center p-3">
          <p className="text-light fancy">
            Build by Yoav, Omri, Itamar, and Tomer - Roim Rahok 2022 ©
          </p>
        </div>
      </footer>
    );
  }
}

export { Footer };