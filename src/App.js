import React from 'react';
import Gallery from './Gallery/Gallery';
import Form from './Form/Form';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            links: [],
            fetching: true,
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(linksList) {
        this.setState({
            links: linksList,
            fetching: false,
        })
    }

    render() {
        return (
            <div className="App">
                <Form handler={this.updateState}/>
                <div id="Gallery-container">
                    <Gallery links={this.state.links}/>
                </div>
            </div>
        );
    }
}

export default App;
