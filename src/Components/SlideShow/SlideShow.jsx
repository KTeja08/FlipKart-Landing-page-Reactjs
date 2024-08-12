import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundSize: 'cover',
    // height: '400px'
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain', // Maintain aspect ratio without cropping
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '300px' // Adjust this value as needed
}
const slideImages = [
    {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20',
        caption: 'Slide 1'
    },
    {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9acf393d8283e657.jpg?q=20',
        caption: 'Slide 2'
    },
    {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4d279cfffa536c76.png?q=20',
        caption: 'Slide 3'
    },
    {
        url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/588364d5f0372d98.png?q=20',
        caption: 'Slide 4'
    },
    {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5a51a6ffa84d75a7.png?q=20',
        caption: 'Slide 5'
    },
    {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20',
        caption: 'Slide 6'
    },

    {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4d946b3cdabec95f.png?q=20',
        caption: 'Slide 7'
    },
    {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/25e306273d3609bc.jpg?q=20',
        caption: 'Slide 8'
    },
    {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/66e2e813dba880a7.jpg?q=20',
        caption: 'Slide 9'
    }

];

const SlideShow = () => {
    return (
        <div className="slide-container">
            <Slide autoplay={true} duration={3000}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}

            </Slide>
        </div>
    )
}

export default SlideShow;