import React from 'react';
import ImageGallery from 'react-image-gallery'



export const ImgGallery = props => {

  return <ImageGallery lazyLoad={true} showFullscreenButton={false} className='' items={props.images} />
}