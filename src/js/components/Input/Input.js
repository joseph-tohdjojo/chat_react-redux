import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setInputValue } from '../../redux/action.creators'





function Input({ email, password, onChange, ...props }) {
  return (
    <input
      { ...props }
      value={ props.type === 'email' ? email : password }
      onChange={ ev => {
        onChange({
          type: props.type,
          value: ev.target.value,
        })
      } }
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.credentials.email,
    password: state.credentials.password,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: input => {
      dispatch(setInputValue(input))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)
