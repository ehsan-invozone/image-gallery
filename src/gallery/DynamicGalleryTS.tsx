import { useState } from 'react';
import { swap } from 'react-grid-dnd';
import Gallery from 'react-photo-gallery';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Images from '../data/Images';
import { ImageModel } from '../models/ImageModel';
import Photo from './Photo';

const SortablePhoto = SortableElement((item: any) => (<Photo {...item} />));

const SortableList = SortableContainer(({ items }: {items: ImageModel[]}) => (
  <Gallery
    photos={items}
    renderImage={(props: any) => (<SortablePhoto {...props} />)}
  />
));

function DynamicGalleryTS() {
  const [items, setItems] = useState(Images);

  const onSortEnd = ({ oldIndex, newIndex }: {oldIndex: number, newIndex: number}) => {
    setItems(swap(items, oldIndex, newIndex));
  };

  return <SortableList items={items} onSortEnd={onSortEnd} axis="xy" />;
}
export default DynamicGalleryTS;
