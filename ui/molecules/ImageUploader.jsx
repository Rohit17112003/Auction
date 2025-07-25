"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useFile from "@/hooks/useFile";
import { errorToast } from "@/utils/toastMessage";

const ImageUploader = ({
  onImageUpload,
  onImageDelete,
  initialImage,
  accept = "image/*",
  height = "6rem",
  width = "100%",
  borderColor = "border-gray-300",
  icon = "ri-image-ai-line",
}) => {
  const [image, setImage] = useState(initialImage);
  const { uploadFile, deleteFile, fileUploading, fileDeleting } = useFile();
  const fileInputRef = useRef(null);

  const handleImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const fileData = await uploadFile(file);
        const uploadedImage = fileData?.data?.image;
        setImage(uploadedImage);
        onImageUpload(uploadedImage);
      } catch (error) {
        errorToast("File upload failed!");
      }
    }
  };

  const handleDelete = async () => {
    if (image) {
      try {
        await deleteFile(image);
        setImage(null);
        onImageDelete();
      } catch (error) {
        errorToast("File deletion failed!");
      }
    }
  };

  useEffect(() => {
    setImage(initialImage?.length > 10 ? initialImage : null);
    return () => {};
  }, [initialImage]);

  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className={`flex w-full flex-col items-center justify-center gap-2 bg-[#f3f3f3] rounded-lg border border-dashed ${borderColor} relative`}
        style={{ height, width }}
      >
        {fileUploading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        )}

        {!fileUploading && !fileDeleting && !image && (
          <>
            <input
              ref={fileInputRef}
              onChange={handleImage}
              type="file"
              accept={accept}
              className="absolute z-10 h-full w-full cursor-pointer opacity-0"
            />
            <span className="text-blue-400">
              <i className={`text-2xl ${icon}`}></i>
            </span>
            <p className="text-xs text-gray-400">
              Click or drag file to upload
            </p>
          </>
        )}

        {!fileUploading && image && (
          <div className="relative h-full w-full">
            <button
              type="button"
              onClick={handleDelete}
              className="absolute top-1 right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
            >
              <i className="ri-close-line"></i>
            </button>
            <Image
              src={image}
              alt="Uploaded image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
