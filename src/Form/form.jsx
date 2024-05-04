"use client";
import React, { useReducer } from "react";

export default function ContactForm() {
  const initState = {
    data: {
      fullName: "",
      postCode: "",
      houseNumber: "",
      streetName: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
    errorStatus: false,
    isSubmitting: false, // Add a new state property for form submission status
  };

  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_FORM_DATA":
        // Make a copy of current state
        let newState = { ...state };

        // grab the data out of your action's payload
        const fieldName = action.payload.name;
        const newFieldValue = action.payload.value;

        // update the newState with the changed data
        newState.data[fieldName] = newFieldValue;

        // return new state 🔥🚀
        console.log(newState);
        return newState;

      // don't forget your breaks - important
      // removed the break statement here as it is unreachable after the return statement

      case "SUBMIT_STARTED":
        console.log("Form is submitting")
        return { ...state, isSubmitting: true }; // Set isSubmitting to true

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initState);

  // Dispatch function to send data from the form to reducer

  function handleChange(event) {
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: event.target.name,
        value: event.target.value,
      },
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT_STARTED' });
    // Simulate form submission (you can replace this with your actual API call)
    setTimeout(() => {
      // Handle form submission success or failure
      // ...
      dispatch({ type: 'SUBMIT_COMPLETED' }); // Set isSubmitting back to false
    }, 2000); // Simulating a delay
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label>Full Name: </label>
          <input type="text" name="fullName" onChange={handleChange} />
        </li>
        <li>
          <label>Post Code: </label>
          <input type="text" name="postCode" onChange={handleChange} />
        </li>
        <li>
          <label>House Number: </label>
          <input type="text" name="houseNumber" onChange={handleChange} />
        </li>
        <li>
          <label>Street Name: </label>
          <input type="text" name="streetName" onChange={handleChange} />
        </li>
        <li>
          <label>City: </label>
          <input type="text" name="city" onChange={handleChange} />
        </li>
        <li>
          <label>Phone Number: </label>
          <input type="text" name="phoneNumber" onChange={handleChange} />
        </li>
        <li>
          <label>Email Address: </label>
          <input type="text" name="email" onChange={handleChange} />
        </li>
        <li>
          <button type="submit">Request Design Consultation</button>
        </li>
      </ul>
      {state.isSubmitting && <p>Form Submitting...</p>} 
    </form>
  );
}