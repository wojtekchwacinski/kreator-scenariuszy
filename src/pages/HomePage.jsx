import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);
    const [statuses, setStatuses] = useState([
        { status: {
            id: Date.now(),
            airline: "LOT",
            flight_number: `FL-${Date.now()}`,
            plane_number: `AIR-${Date.now()}`,
            type_of_aircraft: "None",
            callsign: `FL-${Date.now()}LOT`,
            registrationnumber: "None",
            destination: "None",
            alternative_airports: "None",
            squawk: "None",
            isGrounded: false,
            weather: "None",
            velocity:{
                direction: 0.0,
                value: 0.0
            },
            position:{
                latitude: 0.0,
                longitude: 0.0,
                altitude: 0.0
            },
            sim_id: 1111



        } }
    ]);

    const onDrop = (item, monitor, status) => {
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: "📅" });
            return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };
    const moveItemUp = (index, id) => {
        console.log(`Moving item up at index: ${index}`);
        setItems((prevItems) => {
            const currentIndex = prevItems.findIndex((item) => item.id === id);
            if (currentIndex <= 0) return prevItems; // Nie przesuwaj, jeśli to pierwszy element
            const newItems = [...prevItems];
            [newItems[currentIndex - 1], newItems[currentIndex]] = [
                newItems[currentIndex],
                newItems[currentIndex - 1],
            ];
            return newItems;
        });
    };
    
    const moveItemDown = (index, id) => {
        console.log(`Moving item down at index: ${index}`);
        setItems((prevItems) => {
            const currentIndex = prevItems.findIndex((item) => item.id === id);
            if (currentIndex >= prevItems.length - 1) return prevItems; // Nie przesuwaj, jeśli to ostatni element
            const newItems = [...prevItems];
            [newItems[currentIndex], newItems[currentIndex + 1]] = [
                newItems[currentIndex + 1],
                newItems[currentIndex],
            ];
            return newItems;
        });
    };
    const copyItem = (item, status) => {
        setItems(prevState => {
            const copiedItem = { ...item, status, icon: "📅", id: Date.now() };
            return [...prevState, copiedItem];
        });
    };

    const removeItem = (id) => {
        setItems(prevState => prevState.filter(item => item.id !== id));
    };
    const saveItem = (updatedItem) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    const addColumn = () => {
        const newStatus = {
            id: Date.now(),
            airline: "LOT",
            flight_number: `FL-${Date.now()}`,
            plane_number: `AIR-${Date.now()}`,
            type_of_aircraft: "None",
            callsign: `FL-${Date.now()}LOT`,
            registrationnumber: "None",
            destination: "None",
            alternative_airports: "None",
            squawk: "None",
            isGrounded: false,
            weather: "None",
            velocity:{
                direction: 0.0,
                value: 0.0
            },
            position:{
                latitude: 0.0,
                longitude: 0.0,
                altitude: 0.0
            },
            sim_id: 1111



        };
        setStatuses(prevStatuses => [
            ...prevStatuses,
            { status: newStatus, icon: "📅" },
        ]);
    };
    const removeColumn = (status) => {
        setStatuses(prevStatuses => prevStatuses.filter(col => col.status !== status));
    };
    const addNewItem = (status) => {
        setItems((prevState) => [
            ...prevState,
            {
                id: Date.now(),
                statusId: status.id,  // Zmieniamy na statusId
                time: 0,
                is_entrypoint: false,
                is_exit_point: false,
                fuel_state: 0,
                weather: "None",
                Events: "None",
                position: {
                    latitude: 0.0,
                    longitude: 0.0,
                    altitude: 0.0,
                },
                velocity: {
                    direction: 0.0,
                    value: 0.0,
                },
                squawk: "None",
            },
        ]);
    };
    
    const downloadData = () => {
        const dataToDownload = statuses.map(status => {
            const itemsInStatus = items.filter(item => item.statusId === status.status.id).map(({status, ...rest}) => rest);
            return {
                id: status?.status?.id || null, // Sprawdzamy, czy id jest dostępne
                airline: status?.status?.airline || '', // Sprawdzamy, czy airline jest dostępne
                flight_number: status?.status?.flight_number || '', // Numer lotu
                plane_number: status?.status?.plane_number || '', // Numer samolotu
                type_of_aircraft: status?.status?.type_of_aircraft || '', // Typ samolotu
                callsign: status?.status?.callsign || '', // Callsign
                registrationnumber: status?.status?.registrationnumber || '', // Numer rejestracyjny
                destination: status?.status?.destination || '', // Destynacja
                alternative_airports: status?.status?.alternative_airports || '', // Lotniska alternatywne
                squawk: status?.status?.squawk || '', // Kod transpondera
                isGrounded: status?.status?.isGrounded || false, // Czy uziemiony
                weather: status?.status?.weather || '',
                velocity: {
                    direction: status?.status?.velocity?.direction || 0, // Kierunek lotu
                    value: status?.status?.velocity?.value || 0, // Prędkość
                },
                position: {
                    latitude: status?.status?.position?.latitude || 0.0, // Szerokość geograficzna
                    longitude: status?.status?.position?.longitude || 0.0, // Długość geograficzna
                    altitude: status?.status?.position?.altitude || 0.0, // Wysokość
                },
                sim_id: status?.status?.sim_id || '', // Identyfikator symulacji
                items: itemsInStatus, // Przypisane elementy
            };
        });
    
        const blob = new Blob([JSON.stringify(dataToDownload, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "data.json";
        link.click();
    };

    return (
        <div >
            <button onClick={addColumn} className="add-column-btn">
                Add Events Column
            </button>
            <button onClick={downloadData} className="download-json-btn">
                Download Data as JSON
            </button>
            <div className={"row"}>
                {statuses.map(s => (
                    <div key={s.status.id} className={"col-wrapper"}>
                        
                        <DropWrapper onDrop={(item, monitor) => onDrop(item, monitor, s.status)}>
                        <Col
                            addNewItem={() => addNewItem(s.status)}
                            removeColumn={() => removeColumn(s.status)}
                            status={s.status} 
                            saveStatus={(updatedStatus) => {
                                setStatuses((prevStatuses) =>
                                    prevStatuses.map((col) =>
                                        col.status.id === updatedStatus.id ? { status: updatedStatus } : col
                                    )
                                );
                            }}
                        >
                        {items
                            .filter((i) => {
                                console.log("Filtering item:", i, "for statusId:", s.status.id);
                                return i.statusId === s.status.id;
                            })
                            .map((i, idx) => (
                                <Item
                                    key={i.id}
                                    item={i}
                                    index={idx}
                                    moveItem={moveItem}
                                    status={s.status}
                                    removeItem={removeItem}
                                    saveItem={saveItem}
                                    moveItemUp={(index) => moveItemUp(index, i.id)}
                                    moveItemDown={(index) => moveItemDown(index, i.id)}
                                />
                            ))}

                        </Col>
                        </DropWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
