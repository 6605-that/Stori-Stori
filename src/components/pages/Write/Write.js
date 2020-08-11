import React, { Component } from "react";
import NavLogin from "../../header/NavLogin";

export class Write extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <NavLogin />
        <div className="container">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              onChange={handleChange("title")}
              defaultValue={values.title}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="date"
              placeholder="Upload Date"
              onChange={handleChange("date")}
              defaultValue={values.date}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="time"
              placeholder="Upload Time"
              onChange={handleChange("time")}
              defaultValue={values.time}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Book Cover</span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                onChange={handleChange("bookCover")}
                defaultValue={values.bookCover}
              />
              <label className="custom-file-label">Choose file</label>
            </div>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Chapter" />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Content</span>
            </div>
            <textarea
              className="form-control"
              aria-label="With textarea"
              onChange={handleChange("content")}
              defaultValue={values.content}
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              onClick={this.continue}
            >
              PREVIEW
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
