"use client" ;
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { ReactNode } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }

const CustomModal = ({
    isOpen,
    onClose,
    title,
    children,
    size,
}: IProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="border-b flex flex-col">
          <h3 className="text-xl text-background font-semibold">{title}</h3>
          <ModalBody className="space-y-4 py-6"> {children}</ModalBody>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
