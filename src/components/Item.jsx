import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import { FaTrash, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Item = ({ item, index, moveItem, status, copyItem, removeItem, saveItem, moveItemUp, moveItemDown }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            if (item.status === "Events") {
                copyItem(item); 
            } else {
                moveItem(dragIndex, hoverIndex);
                item.index = hoverIndex;
            }
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);

    drag(drop(ref));

    const handleRemove = () => {
        removeItem(item.id); // Wywołanie funkcji usuwania, przekazanej jako props
    };
    const handleSave = (updatedItem) => {
        saveItem(updatedItem); // Wywołanie funkcji saveItem, aby zaktualizować stan w rodzicu
        setShow(false); // Zamknięcie okna po zapisaniu
    };

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <div className={"color-bar"} />
                <p className={"item-coordinates"}>{item.position.latitude}</p>
                <p className={"item-coordinates"}>{item.position.longitude}</p>

                <div className="item-controls">
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Zapobiegaj otwieraniu okna
                        moveItemUp(index);
                    }}
                    className="arrow-btn"
                    aria-label="Move item up"
                    disabled={index === 0} // Zablokuj dla pierwszego elementu
                >
                    <FaArrowUp />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Zapobiegaj otwieraniu okna
                        moveItemDown(index);
                    }}
                    className="arrow-btn"
                    aria-label="Move item down"
                    disabled={index === item.length - 1} // Zablokuj dla ostatniego elementu
                >
                    <FaArrowDown />
                </button>
                 
                </div>
            </div>

            <Window
                item={item}
                onClose={onClose}
                show={show}
                onSave={handleSave} 
                onDelete={removeItem}
            />
        </Fragment>
    );
};

export default Item;
