import React, { Component } from 'react'
 class Sample extends Component {
constructor(props){
    super(props)
    this.state={
     Name:""
    }
}

    render() {
        return (
            <div>
<input type="text" onChange={(e)=>{this.setState({Name:e.target.value})}}/>
<button onClick={()=>this.props.name(this.state.Name)}>search</button>
            </div>
        )
    }
}

export default Sample
