As a user when I submit the form it should show me that it is submitting.

Add onSubmit={handleSubmit}> to the form
Create a function called handleSubmit

Maybe give your fancy new initial state object a property called { loading: false }.

Then create a new action called "SUBMIT_STARTED". When the reducer receives an action.type matching that you change the loading property to true and return a new state.

Now make your component use that new state property to show/hide different button text.



As a user I should not be able to submit again while it is submitting.

As a user when I submit the form in a correct way (passes validation) I should see the form replaced with a simple success message.

As a user when I submit the form in an incorrect way I should see that the form is no longer submitting and that there are errors.

As a user who has incorrectly submitted the form I should see an error under each field that has failed validation. The error should be specific to the field ("Not a valid phone number", "No bookings outside of England, Wales or Scotland").

-> Refactor to code to have new state object that combines all of the things into a const variable.
-> Initial state value to pass to useReducer
-> Add reducer function in
-> Take in state & action object as arguments
->


function reducer(state, action) {
  
  switch (action.type) {
    case "CHANGE_FORM_DATA":

      // Make a copy of current state
      let newState = {...state}; 
      
      // grab the data out of your action's payload
      const fieldName = action.payload.name;
      const newFieldValue = action.payload.value;
      
      // update the newState with the changed data
      newState.data[fieldName] = newFieldValue;
      
      // return new state 🔥🚀
      return newState;
      
      // dont forget your breaks - important
      break;
      
    default:
      return state;
  }