import React from 'react';

class Gallery extends React.Component{
    render() {
        if(this.props.links.length < 1) {
            return <p>use link to download!</p>
        } else {
            return this.props.links.map(url => (
                <a href={url['node']['display_url']} target="_blank" rel="noopener noreferrer">
                    <img src={url['node']['display_url']} alt="downloaded"/>
                </a>
            ));
        }
    }
}

export default Gallery;