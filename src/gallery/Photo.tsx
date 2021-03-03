import React, { useState } from 'react';
import ImageRotationControl from './ImageRotationControl';

const Photo = (props: any) => {
  const {
    index, photo, margin, onRotationChanged,
  }:
  { index: number, onClick?: any, photo?: any,
       margin?: number, direction?: any, top?: number, left?: number, item?: any,
        onRotationChanged?: any } = props;

  const [angle, setAngle] = useState(photo.angle);

  const cont = {
    backgroundColor: '#eee',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    left: 0,
    top: 0,
  } as React.CSSProperties;

  const rotateLeft = () => {
    photo.angle -= 90;
    setAngle(angle - 90);
    onRotationChanged(photo);
  };

  const rotateRight = () => {
    photo.angle += 90;
    setAngle(angle + 90);
    onRotationChanged(photo, index);
  };

  return (
    <div
      style={{
        margin, height: photo.height, width: photo.width, ...cont,
      }}
    >
      <img
        style={{
          marginRight: 2, height: photo.height, width: photo.width, transform: `rotate(${angle}deg)`,
        }}
        {...photo}
        alt="img"
      />
      <ImageRotationControl
        onLeftRotation={rotateLeft}
        onRightRotation={rotateRight}
      />
    </div>
  );
};

export default Photo;
