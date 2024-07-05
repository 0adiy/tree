"use client";
import useTreeStore from "@/store/useTreeStore";
import { useRef, useEffect, useState } from "react";

export default function EditModal() {
  const {
    currentNodeAt,
    treeData,
    editModalVisible,
    openEditModal,
    closeEditModal,
    EditTree,
    enteredValue,
    setEnteredValue,
  } = useTreeStore();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    editModalVisible ? modalRef.current.showModal() : modalRef.current.close();
  }, [editModalVisible]);

  const handleClose = () => {
    closeEditModal();
  };

  const handleESC = event => {
    event.preventDefault();
    handleClose();
  };

  const handleChange = event => {
    setEnteredValue(event.target.value);
  };

  const handleEdit = () => {
    EditTree();
    closeEditModal();
  };

  return (
    <dialog
      ref={modalRef}
      id='my_modal_1'
      className='modal'
      onCancel={handleESC}
    >
      <form method='dialog' className='modal-box'>
        <h3 className='font-bold text-lg mb-2'>
          Edit node {currentNodeAt} (with value {treeData[currentNodeAt]})
        </h3>
        <input
          type='text'
          className='input input-bordered w-full'
          value={enteredValue}
          onChange={handleChange}
        />
        <div className='modal-action'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-primary' onClick={handleEdit}>
            Change
          </button>
          <button className='btn' onClick={handleClose}>
            Discard
          </button>
        </div>
      </form>
    </dialog>
  );
}
