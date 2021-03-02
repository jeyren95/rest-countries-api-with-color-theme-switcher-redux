//This is to create our own history object instead of relying on the history object inside the browser router component
//This gives us control over the object so that we can pass this object to the action creator
//In contrast, it will be alot harder if we had relied on passing the history object that was passed to the component (from the BR component) to the action creator

//the history package was automatically installed with react-router-dom
//it is actually a separate library, but react-router-dom depends upon, as a dependency
//createHistory is a function that we can call to create a history object

import {createBrowserHistory} from "history";

export default createBrowserHistory();
