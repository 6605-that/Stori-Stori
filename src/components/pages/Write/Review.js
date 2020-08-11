import React, { Component } from "react";
import NavLogin from "../../header/NavLogin";

export class Review extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    return (
      <div>
        <NavLogin />
        <div className="container">
          <div className="container">
            <div className="img-thumbnail">{values.bookCover}</div>
          </div>
          <div className="container">{values.title}</div>
          <div className="container">{values.date}</div>
          <div className="container">{values.time}</div>
          <div className="container">{values.chapter}</div>
          <div className="container">{values.content}</div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-light btn-lg "
              onClick={this.back}
            >
              BACK
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg "
              onClick={this.continue}
            >
              SAVE & UPLOAD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
