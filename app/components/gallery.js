import React, {Component} from 'react';

class Gallery extends Component{
    render(){
        return (
            <div>
                {
                    this.props.items.map((item, index)=>{
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        let alternate = 'https://indicbookclub.com/backendassets/book_images/default.png';
                        return(
                            
                            <a 
                            key={index}
                            className="book"
                            href={infoLink}
                            target="_blank"
                            >
                                <img 
                                className="book-img"
                                src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                                alt="book image"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;