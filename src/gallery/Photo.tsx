import React, { useState } from 'react';
import ImageRotationControl from './ImageRotationControl';

const Photo = (props: any) => {
  const {
    photo, margin, onRotationChanged,
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
    if (photo.angle - 90 === -360) {
      photo.angle = 0;
      setAngle(0);
    } else {
      photo.angle -= 90;
      setAngle(angle - 90);
    }

    onRotationChanged(photo);
  };

  const rotateRight = () => {
    if (photo.angle + 90 === 360) {
      photo.angle = 0;
      setAngle(0);
    } else {
      photo.angle += 90;
      setAngle(angle + 90);
    }
    onRotationChanged(photo);
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
