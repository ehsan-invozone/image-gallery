import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
// import arrayMove from 'array-move';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Photo from './Photo';
import Images from '../data/Images';

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={(props) => <SortablePhoto {...props} />} />
));

function SortableJS() {
  const [items, setItems] = useState(Images);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div>
      <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis="xy" />
    </div>
  );
}
export default SortableJS;
