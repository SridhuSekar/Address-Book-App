import React, { Component } from "react";
import "./CssFile/table.css";
import { connect } from "react-redux";
import { addressData } from "../Redux/action";

export class AddressBook extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputPhoneNo: "",
      inputAddress: "",

      arrayData: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleNameChange = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ inputPhoneNo: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ inputAddress: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.inputName,
      phoneNo: this.state.inputPhoneNo,
      address: this.state.inputAddress,
    };

    this.props.addressformData(obj);
    this.state.inputName = "";
    this.state.inputPhoneNo = "";
    this.state.inputAddress = "";
  };

  render() {
    return (
      <div>
        <h1>This is Address Book component</h1>
        <form>
          <div>
            <label>
              Name
              <input
                type="text"
                value={this.state.inputName}
                onChange={this.handleNameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Phone No
              <input
                type="text"
                value={this.state.inputPhoneNo}
                onChange={this.handlePhoneChange}
              />
            </label>
          </div>
          <div>
            <label>
              Address
              <input
                type="text"
                value={this.state.inputAddress}
                onChange={this.handleAddressChange}
              />
            </label>
          </div>
          <button type="submit" onClick={this.handleClick}>
            ADD
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.addressArray &&
              this.props.addressArray.map((rowData, index) => (
                <tr key={index}>
                  <td>{rowData.name}</td>
                  <td>{rowData.phoneNo}</td>
                  <td>{rowData.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addressArray: state.address.addressData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addressformData: (inputObj) => dispatch(addressData(inputObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);
