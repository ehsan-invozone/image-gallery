import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadFileProps {
  onFileUploaded: any,
}
export default function UploadFile(props: UploadFileProps) {
  const { onFileUploaded } = props;

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onloadend = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result?.toString();
        onFileUploaded(binaryStr);
        // setImage(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {/* {image && <img src={image.toString()} alt="iasd" height={200} width={200} />} */}
      <p>Drag n drop some files here, or click to select files</p>
    </div>
  );
}
