/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React from 'react';

const imgWithClick = { cursor: 'pointer' };

const Photo = (props: any) => {
  const {
    index, onClick, photo, margin, direction, top, left,
  }:
  { index?: any, onClick?: any, photo?: any,
       margin?: any, direction?: any, top?: any, left?: any, item?: any } = props;
  const imgStyle = margin;
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event: any) => {
    onClick(event, { photo, index });
  };

  return (
    <img
      style={{ marginRight: 2, transform: `rotate(${photo.angle}deg)` }}
      {...photo}
      alt="img"
    />
  );
};

export default Photo;
