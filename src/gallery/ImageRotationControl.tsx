interface ImageRotationProps {
    onLeftRotation: any,
    onRightRotation: any,
}
export default function ImageRotationControl(props: ImageRotationProps) {
  const { onLeftRotation, onRightRotation } = props;
  return (
    <div className="opacity-10 hover:opacity-100 hover:text-white absolute top-0 left-0 mt-32 ml-40 ">
      <button type="button" className="text-white cursor-pointer hover:shadow-outline mr-20" onClick={onLeftRotation}>Left</button>
      <button type="button" className="text-white cursor-pointer hover:shadow-outline mr-20" onClick={onRightRotation}>Right</button>
    </div>
  );
}
