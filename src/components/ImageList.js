import React from 'react';

//passing images from app state as props to ImageList component then map over props and render the props
const ImageList = (props) => {
	const images = props.images.map((element) => {
		return <img alt='images' src={element.urls.regular} />;
	});
	return <div>{images}</div>;
};

export default ImageList;
 