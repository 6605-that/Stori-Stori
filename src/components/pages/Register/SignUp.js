import React, { Component } from "react";
import UserDetails from "./UserDetails";
import UserInterests from "./UserInterests";
import Success from "./Success";

export class SignUp extends Component {
  state = {
    step: 1,
    userName: "",
    email: "",
    password: "",
    interests: [],
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
    const { userName, email, password, interests } = this.state;
    const values = { userName, email, password, interests };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserInterests
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success nextStep={this.nextStep} />;
      //no default
    }
  }
}

export default SignUp;
