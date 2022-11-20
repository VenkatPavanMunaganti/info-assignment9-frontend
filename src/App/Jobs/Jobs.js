import React from 'react'

export default function Jobs(props) {
  var divStyles = {
    backgroundColor: "wheat",
    padding: "15px",
    borderRadius: "10px",
    margin: "10px",
    overflow: "auto"
  };

  var applyStyle = {
    display: "inline-block",
    backgroundColor: "#d59111",
    fontWeight: "bold",
    color: "white",
    width: "80px",
    padding: "5px 0",
    fontSize: 14,
    borderRadius: "5px",
    float: "right",
    textAlign: "center"
  };

  return (
        <div style={divStyles}> {props.job} <span style={applyStyle}>Apply</span></div>
  )
}
