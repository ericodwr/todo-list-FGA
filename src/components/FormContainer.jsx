import React, { Component } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import Title from './Title';

export class FormContainer extends Component {
  render() {
    return (
      <div className="form-container">
        <Title title={'Notes App'} />
        <a
          href="https://github.com/ericodwr/todo-list-FGA"
          target={'_blank'}
          rel="noreferrer"
        >
          <Button name={'Github'} />
        </a>
        <FormInput addNoteHandler={this.props.addNoteHandler} />
      </div>
    );
  }
}

export default FormContainer;
