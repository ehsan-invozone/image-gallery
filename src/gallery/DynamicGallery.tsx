// import Gallery from 'react-photo-gallery';
// import arrayMove from 'array-move';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';
// import { useState } from 'react';
// import Images from '../data/Images';
// import Photo from './Photo';
// import { ImageModel } from '../models/ImageModel';

// const SortablePhoto = SortableElement((item: any) => <Photo {...item} />);
// const SortableGallery = SortableContainer((items: ImageModel[]) => (
//   <Gallery photos={items} renderImage={(props) => <SortablePhoto {...props} />} />
// ));

function DynamicGallery() {
  // const [items, setItems] = useState(Images);

  // const onSortEnd = (oldIndex: any, newIndex: any) => {
  //   setItems(arrayMove(items, oldIndex, newIndex));
  // };

  return (
    <div>
      <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>
      {/* <SortableGallery items={items} onSortEnd={onSortEnd} axis="xy" /> */}
    </div>
  );
}
export default DynamicGallery;
