import React,{useState} from "react";

import EditModal from "./Modal";
const Col = ({ isOver, children, addNewItem, removeColumn, status, saveStatus }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true); // Otwiera modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Zamknij modal
    };

    const handleSave = (updatedStatus) => {
        saveStatus(updatedStatus); // Zapisuje zaktualizowany status
        handleCloseModal();
    };

    const className = isOver ? "highlight-region" : "";

    return (
        <div className={`col ${className}`}>
            <div className="col-header">
                {/* Nagłówek kolumny - kliknięcie otwiera modal */}
                <h3 onClick={handleOpenModal}>
                    {`Flight ID: ${status.airline}${status.flight_number}`}
                </h3>
                <button onClick={addNewItem} className="add-item-btn">
                    Add Item
                </button>
                <button onClick={removeColumn} className="remove-col-btn">
                    Remove Column
                </button>
            </div>
            {children}
            {isModalOpen && (
                <EditModal
                    status={status}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default Col;
