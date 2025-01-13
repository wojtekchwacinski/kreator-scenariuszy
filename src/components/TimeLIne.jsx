import React, { useState } from "react";
import Item from "./Item";
import { FaPlus } from "react-icons/fa";

const Timeline = () => {
    const [items, setItems] = useState([]); // Lista elementów

    // Dodawanie nowego elementu
    const addItem = () => {
        const newItem = {
            id: Date.now(), // Unikalny identyfikator
            content: "New Item",
            flightId: "",
            coordinates: { latitude: "", longitude: "" },
            status: { color: "#000" },
            icon: "✈️",
        };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    // Aktualizacja istniejącego elementu
    const updateItem = (updatedItem) => {
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
    };

    // Usuwanie elementu
    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="timeline">
            <div className="timeline-header">
                <h2>Timeline</h2>
                <button onClick={addItem} className="add-item-btn">
                    <FaPlus size={20} /> Add Item
                </button>
            </div>
            <div className="timeline-items">
                {items.map((item, index) => (
                    <Item
                        key={item.id}
                        item={item}
                        index={index}
                        moveItem={() => {}} // Nie potrzebne w tej wersji
                        status={item.status}
                        copyItem={() => {}}
                        removeItem={removeItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
