import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { homeData } from "../Redux/action";

export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",

      valueArray: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();

    this.props.formData(this.state.inputValue);

    this.state.inputValue = "";
  };
  render() {
    return (
      <div>
        <h1>Home Screen Component</h1>
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick} type="submit">
            ADD
          </button>
        </form>

        {this.props.valueArray &&
          this.props.valueArray.map((e, index) => (
            <ul key={index}>
              <Link to={`/addressBook/${e.text}`}>{e.text}</Link>
            </ul>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    valueArray: state.home.homeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formData: (inputValue) => dispatch(homeData(inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
