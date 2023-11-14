"use client";

import Modal from "../../components/Modal";
import Image from "next/image";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, isOpen, onClose }: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
