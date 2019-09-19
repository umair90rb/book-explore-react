import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import Gallery from './gallery';

class Global extends Component {

    constructor(props){
        super(props);
        this.state = {
            'query': '',
            'items': []
        }
    }

    serach(){
        let BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.query}`, {method: "GET"})
        .then(response=>response.json())
        .then(json=> {
            let {items} = json;
            this.setState({items})
        });
    }

    render() {
        return (
            <div className="Global">
                <h2>Book Explore</h2>
            
            <FormGroup>
                <InputGroup>
                    <FormControl type="text"
                            placeholder="Search for a Book" 
                            onChange = {event => this.setState({query: event.target.value})}
                            onKeyPress = {event => {
                                if(event.key === 'Enter'){
                                    this.serach();
                                }
                            }}
                            />
                    <Button onClick={()=>this.serach()}>Search</Button>
                </InputGroup>
            </FormGroup>
            <Gallery items={this.state.items}/>
            </div>
        )
    }
}

export default Global;