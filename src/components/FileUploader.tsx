import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { useDropzone } from '@uploadthing/react/hooks';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { convertFileToUrl } from '@/libs/utils';
import { Button } from '@nextui-org/button';
import { FaCloudUploadAlt } from 'react-icons/fa';

type FileUploaderProps = {
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({ setFiles }: FileUploaderProps) => {
  const [img, setImg] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    setImg(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined
  });

  return (
    <div
      {...getRootProps()}
      className="flex h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {img ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={img}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-5 text-gray-500">
          <FaCloudUploadAlt className="h-[77px] w-[77px]" />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;

