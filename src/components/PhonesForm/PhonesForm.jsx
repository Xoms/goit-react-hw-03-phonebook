import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import './PhonesForm.styles.scss';

class PhonesForm extends Component  {
  state = {
    name: '',
    number: '',
    isExist: false
  }

  changeHandler = ({target}) => {
    this.setState( () => {
      return {
        [target.name]: target.value
      }
    })
  }

  submitHandler = (e) => {
    e.preventDefault();

    if (this.isContactExists(this.state.name)){
      this.setState({
        isExist: true
      })
      return;
    }

    const newRecord = this.makeRecord()
    this.setState({
      name: '',
      number: '',
      isExist: false
      })
    this.props.onContactAdd(newRecord);
  }

  isContactExists(currName){
    return (this.props.contacts.some( ({name}) => name === currName))
  }

  makeRecord(){
    const id = uuid();
    const {name, number} = this.state;
    return {id, name, number}
  }

  render(){
    const {name, number, isExist} = this.state
    return (
      <form className="contacts-form" onSubmit={this.submitHandler}>

        <div className="contacts-form__group">
          <label className="contacts-form__label" htmlFor="contactName" >Name</label>
          <input className="contacts-form__input" 
            onChange={this.changeHandler} 
            id="contactName"
            name="name"
            value={name}/>
        </div>

        <div className="contacts-form__group">
          <label className="contacts-form__label" htmlFor="contactNumber">Number</label>
          <input 
            className="contacts-form__input" 
            onChange={this.changeHandler} 
            id="contactNumber"
            name="number"
            value={number}/>
        </div>

        <button type="submit" className="contacts-form__submit-btn">Add contact</button>

        {isExist && <span className="err-msg">This person is already in your contacts list</span>}
      </form>
    )
  }  
};

PhonesForm.propTypes = {
  onContactAdd: PropTypes.func.isRequired,
};

export default PhonesForm;
