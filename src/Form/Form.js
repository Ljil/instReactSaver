import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };

        this.handleURLInputChange = this.handleURLInputChange.bind(this);
        this.handleURLButtonClick = this.handleURLButtonClick.bind(this);
    }

    handleURLInputChange(event) { // Установка value при изменении текста в input
        this.setState({inputValue: event.target.value});
    }

    handleURLButtonClick(event) { // Клик по кнопке
        //https://www.instagram.com/p/BwZX4QRH2JM/
        let regex = /https:\/\/www.instagram.com\/p\/[\w\d+_-]*\//i;

        if(this.state.inputValue.match(regex)) {
            console.log('Correct!');
            this.ImageDownload(this.state.inputValue);
        } else {
            console.log('Invalid URL!');
        }
        this.setState({
            inputValue: '',
        });

        event.preventDefault();
    }

    ImageDownload(URL) {
        let request = new XMLHttpRequest();
        request.open('GET', URL + '?__a=1');
        request.responseType = 'json';
        request.onload = () => {
            let response = request.response['graphql']['shortcode_media']['edge_sidecar_to_children']['edges'];
            console.log(response);
            console.log(`props len ${this.props.length}`);
            this.props.handler(response);
        };
        request.send();
    }

    render() {
        return (
            <form onSubmit={this.handleURLButtonClick}>
                <input
                    id="URL"
                    type="text"
                    value={this.state.inputValue}
                    placeholder="https://www.instagram.com/p/BwcKFP4nQ-o/"
                    onChange={this.handleURLInputChange}
                />
                <input
                    type="submit"
                    value="Скачать"
                />
            </form>
        )
    }
}

export default Form;