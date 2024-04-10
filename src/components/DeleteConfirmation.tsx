'use client';

import { useTransition } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { MdDelete } from 'react-icons/md';

import { deleteEvent } from '@/libs/actions/event.actions';

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const pathname = usePathname();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <MdDelete
        onClick={onOpen}
        className="h-[20px] w-[20px] cursor-pointer text-red-500"
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to delete?
              </ModalHeader>
              <ModalBody>
                <p className="text-content_secondary">
                  This will permanently delete this event
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={async () => {
                    await deleteEvent({ eventId, path: pathname });
                  }}
                  onPress={onClose}
                >
                  Action
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

