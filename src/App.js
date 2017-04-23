import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock'
import MediaApp from './components/media'
import AppControls from './components/appControls'


/*ROUTER DEPENDANCYS */
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;





class App extends Component {
constructor(props){
    super(props);

    this.state = {
      clientMode : true,
      screenStates : [0,1,2,3],
      activeScreenState : 0
  };
}
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setScreenState(this.state.activeScreenState, this.state.screenStates),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  setScreenState(stateNum, screenStates){
    if (stateNum >= screenStates.length) {
      this.setState({ activeScreenState:0 });
      console.log(this.state.activeScreenState)
    }else{
      this.setState({ activeScreenState: stateNum + 1});
       console.log(this.state.activeScreenState)

    }
  }


  render() {

  var activeState = this.state.activeScreenState;

    return (
     <Router> 
      <div>
            <Switch>
               <Route exact path='/' />
               <Route path='/media' component={MediaApp} />
               <Route path='/app' component={AppControls} />
               <Route render={ function(){
                  return (
                    <div>
                    <h3>404 </h3> 
                    <p> PAGE NOT FOUND </p>
                    </div>
                  )
                }
                } />
            </Switch>
           {/*{activeState === 2 && <p className= 'slideIn'>State is {activeState}</p>*/}
          <Clock location='America/Los_Angeles'/>
          <Clock location='Europe/Warsaw'/>
      </div>
     </Router> 
 
    );
  }
}

export default App;
