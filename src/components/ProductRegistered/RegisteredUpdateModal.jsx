import React from "react";
import { createPortal } from "react-dom";
import "./RegisteredUpdateModal.css";

const RegisteredUpdateModal = ({ isUpdate, setIsUpdate }) => {
  if (!isUpdate) return null;

  return createPortal(
    <div className="registered-modal-overlay">
      <div className="registered-modal-content">
        <button
          onClick={() => setIsUpdate(false)}
          className="registered-modal-close-btn"
        >
          닫기
        </button>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default RegisteredUpdateModal;
