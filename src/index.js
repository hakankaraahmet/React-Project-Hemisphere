import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";
 

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { 
            latitude: null ,
            longitude : null,
            errorMessage : null
        }
    }

    // state = {latitude: null , errorMessage: ""}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
                this.setState({longitude: position.coords.longitude})
            }, 
            (error) => {
                this.setState({errorMessage : error.message})
            }
        );
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude){
            return (<div> {this.state.errorMessage} </div>)
        }

        else if(!this.state.errorMessage && this.state.latitude && this.state.longitude) {
            return (<div> 
                        <HemisphereDisplay
                        latitude = {this.state.latitude}
                        longitude = {this.state.longitude}
                        />
                    </div>)
        }

        else {
            return (<div> Loading... </div>)
        }
    }
}

export default App

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);