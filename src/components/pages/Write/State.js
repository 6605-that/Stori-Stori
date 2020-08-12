import React, { Component } from "react";
import BookDetails from "./bookDetails";
import Write from "./Write";
import Review from "./Review";
import Success from "./Success";

export class State extends Component {
  state = {
    step: 1,
    bookCover: "",
    title: "",
    author: "",
    description: "",
    genre: "",
    tags: [],
    copyright: "",
    content: "",
    viewers: "",
  };
  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      bookCover,
      title,
      chapter,
      description,
      genre,
      tags,
      copyright,
      content,
      author,
      viewers,
    } = this.state;
    const values = {
      bookCover,
      title,
      chapter,
      description,
      genre,
      tags,
      copyright,
      content,
      author,
      viewers,
    };

    switch (step) {
      case 1:
        return (
          <BookDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Write
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Review
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success nextStep={this.nextStep} />;
      //no default
    }
  }
}

export default State;
