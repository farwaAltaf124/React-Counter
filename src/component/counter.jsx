import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super();
        this.state={
         count:0
        }
    }
 increase=()=>{
     this.setState({count:this.state.count+1})
 }
 decrease=()=>{
     this.setState({count:this.state.count-1})
 }
    
    render(){
        return(
            <counter>
                <h1>Counter 
                    <br/>
                    {this.state.count}
                </h1>
             
     <div >
       
        <button onClick={this.increase}>increment</button>
     </div>
     <br/>
     <div>
        <button onClick={this.decrease}>decrement</button>
         </div>
                
                
    </counter>
        )
    
    }
    

}
    
  
    
export default Counter;