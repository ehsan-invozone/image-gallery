import { useState } from 'react';
import Gallery from 'react-photo-gallery';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Images from '../data/Images';
import { ImageModel } from '../models/ImageModel';
import UploadFile from '../uploading/UploadFile';
import Photo from './Photo';

const SortablePhoto = SortableElement((props: any) => (
  <Photo
    {...props}
    onRotationChanged={
      (image: ImageModel, index:number) => props.onRotationChanged(image, index)
    }
  />
));

const SortableImages = SortableContainer((
  { items, onRotationChanged }: {items: ImageModel[], onRotationChanged: any},
) => {
  const updateImages = (image: ImageModel, index: number) => {
    onRotationChanged(image, index);
  };
  return (

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
  );
});

function SortableGallery() {
  const [images, setImages] = useState<ImageModel[]>(Images);
  // useEffect(() => {
  //   setImages(images);
  //   console.log(images);
  // }, [images]);

  const updateImages = (image: ImageModel, index: number) => {
    images[index] = image;
    setImages(images);
  };

  const onSortEnd = ({ oldIndex, newIndex }: {oldIndex: number, newIndex: number}) => {
    setImages(arrayMove(images, oldIndex, newIndex));
    console.log(images);
  };

  const saveImage = (image: string) => {
    console.log(image);
    images.push({
      id: Math.random(), src: image, angle: 0, height: 4, width: 3,
    });
    // setImages(images);
    console.log(image);
    console.log(images);
    setImages(images);
    // images.push(images)
    // setImages(arrayMove(images, images.length - 1, images.length - 1));
  };

  return (
    <div>
      <UploadFile onFileUploaded={(image: string) => saveImage(image)} />
      <SortableImages
        items={images}
        onSortEnd={onSortEnd}
        onRotationChanged={(image: ImageModel, index: number) => updateImages(image, index)}
        axis="xy"
      />
      {images.map((image: ImageModel) => image.id)}
    </div>
  );
}
export default SortableGallery;
