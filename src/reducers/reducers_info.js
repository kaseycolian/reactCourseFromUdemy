import {
  INFO_FETCHED
} from '../actions/actions_info'

//this is just a file that has a variable that gets info

//switch statement, so it'll check if it's INFO_FETCHED. 
//If it is a INFO_FETCHED, then it'll return the action.payload what we got from the fetch call in action_info

const info = (state = [], action) => {
	//this action listens for fetchInfo()
	console.log(action)
	switch (action.type) {
	    case INFO_FETCHED:
	    //after action returns json, this is the action.payload
	    //this will be put into info and returned out by this reducer
	      return action.payload
	    //the default state is empty []  
	    default:
	      return state
 	}
}


//we export this info variable from where it's defined above.
//this info equals the state of what the info is (how big it is, if it's empty, etc)
//by default it returns an empty [] b/c state's default = []
//info is from the action.payload from action
//this is what came back from AJAX call
export default info
