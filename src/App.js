import React, { Component } from 'react';
import MyTimer from './MyTimer';

class App extends Component {
    render() {
        return(
            <div>
                <MyTimer />
            </div>
        )
    }    
}  

export default App;        
        
        
        
 /*       
        console.log('La création du composant va avoir lieu');
    

    componentDidMount() {
        console.log('La création du composant a eu lieu');
    
    
    render()
        <Timer 
            counter=10 
        />
    componentWillUpdate() 

    componentDidUpdate() {
    }
  
    render() {
        this.setState((state,props) => {
            return {counter: state.counter + props.step};
        });
         
           
          
        console.log('un update a eu lieu');
    }





export default Timer; */