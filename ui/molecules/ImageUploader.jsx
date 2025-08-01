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
  const [image, setImage] = useState(null);
  const { uploadFile, deleteFile, fileUploading, fileDeleting } = useFile();
  const fileInputRef = useRef(null);

  const handleImage = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file?.type?.startsWith("image/")) {
      errorToast("Only image files are allowed!");
      return;
    }

    try {
      const fileData = await uploadFile(file);
      const uploadedImage = fileData?.data?.image;

      if (uploadedImage) {
        setImage(uploadedImage);
        onImageUpload(uploadedImage);
      } else {
        throw new Error();
      }
    } catch (error) {
      errorToast(`${file?.name || "File"} upload failed!`);
    }
  };

  const handleDelete = async () => {
    if (!image) return;

    try {
      await deleteFile(image);
      setImage(null);
      onImageDelete();
    } catch (error) {
      errorToast("File deletion failed!");
    }
  };

  useEffect(() => {
    if (initialImage && typeof initialImage === "string" && initialImage.length > 10) {
      setImage(initialImage);
    } else {
      setImage(null);
    }
  }, [initialImage]);

  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className={`flex w-full flex-col items-center justify-center gap-2 bg-light rounded-lg border border-dashed ${borderColor} relative`}
        style={{ height, width }}
      >
        {fileUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-light rounded-lg z-10">
            <div role="status">
              <svg
                aria-hidden="true"
                className="h-8 w-8 animate-spin fill-dark text-dark"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..."
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116..."
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
            <span className="text-dark">
              <i className={`text-2xl ${icon}`}></i>
            </span>
            <p className="text-xs text-dark">
              Click or drag file to upload
            </p>
          </>
        )}

        {!fileUploading && image && (
          <div className="relative h-full w-full">
            <button
              type="button"
              onClick={handleDelete}
              className="absolute top-1 right-1 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-yellow text-light hover:bg-lightyellow"
            >
              <i className="ri-close-line text-sm" />
            </button>
            <Image
              src={image}
              alt="Uploaded image"
              fill
              className="object-contain rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
