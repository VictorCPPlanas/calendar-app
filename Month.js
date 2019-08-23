import React from 'react'


class Month extends React.Component{

    state = {
        showMonth: 0, 
    }

    showMonth = (event)=>{
        const {className} = event.target;
        if(this.state.showMonth > 0 && className === 'left-arrow'){
            this.setState(prevState =>{
                return {
                    showMonth: prevState.showMonth - 1
                }
            })
        }
        if(this.state.showMonth < 11 && className === 'right-arrow'){
            this.setState(prevState =>{
                return {
                    showMonth: prevState.showMonth + 1
                }
            })
        }
    }

    render(){
        const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"]

        return(
            <div className="month">
                
                <h1>{months[this.state.showMonth]}</h1>
                <span className="left-arrow" onClick={this.showMonth} >❮</span>
                <span className="right-arrow" onClick={this.showMonth} >❯</span>
                
            </div>
        )
    }
}

export default Month