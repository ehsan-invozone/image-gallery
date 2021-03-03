import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from 'react-grid-dnd';
import React from 'react';
import Images from '../data/Images';

export default function Gallery() {
  const [images, setImages] = React.useState(Images);

  function onChange(sourceId: any, sourceIndex: number, targetIndex: number) {
    const updatedImages = swap(images, sourceIndex, targetIndex);
    setImages(updatedImages);
  }
  return (
    <GridContextProvider onChange={onChange}>
      <GridDropZone
        id="gallery"
        boxesPerRow={2}
        rowHeight={150}
        style={{ height: '400px' }}
      >
        {images.map((image) => (
          <GridItem key={image.src}>
            <div>
              <img className="image-item" src={image.src} alt="Gallery Item" />
            </div>
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  );
}
