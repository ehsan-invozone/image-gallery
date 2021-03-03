import { useState } from 'react';
import Gallery from 'react-photo-gallery';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Images from '../data/Images';
import { ImageModel } from '../models/ImageModel';
import Photo from './Photo';

function SortableGallery() {
  const [images, setImages] = useState(Images);

  const onSortEnd = ({ oldIndex, newIndex }: {oldIndex: number, newIndex: number}) => {
    setImages(arrayMove(images, oldIndex, newIndex));
  };

  const updateImages = (image: ImageModel, index: number) => {
    images[index] = image;
    setImages(images);
  };

  const SortablePhoto = SortableElement((props: any) => (
    <Photo
      {...props}
      onRotationChanged={
          (image: ImageModel, index:number) => props.onRotationChanged(image, index)
        }
    />
  ));

  const SortableImages = SortableContainer(({ items }: {items: ImageModel[]}) => (
    <Gallery
      photos={items}
      renderImage={(props: any) => (
        <SortablePhoto
          {...props}
          onRotationChanged={
            (image: ImageModel) => updateImages(image, props.index)
          }
        />
      )}
    />
  ));

  return (
    <SortableImages
      items={images}
      onSortEnd={onSortEnd}
      axis="xy"
    />
  );
}
export default SortableGallery;
