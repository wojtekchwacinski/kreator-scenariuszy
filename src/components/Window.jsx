import React, { useState } from "react";
import Modal from "react-modal";
import { FaTrash } from "react-icons/fa";

Modal.setAppElement("#root");

const Window = ({ show, onClose, item, onSave, onDelete }) => {
    const [editableItem, setEditableItem] = useState({
        ...item,
        velocity: item.velocity || { direction: 0, value: 0 },
        position: item.position || { latitude: 0, longitude: 0, altitude: 0 },
    });
    const predefinedPoints = [
        { name: "IAF PO481", latitude: "52°18'08,9''N", longitude: "017°17'03,8''E" },
        { name: "IF PO482", latitude: "52°20'08,1''N", longitude: "017°09'35,3''E" },
        { name: "FAF PO483", latitude: "52°22'06,9''N", longitude: "017°02'06,1''E" },
        { name: "SDF PO484", latitude: "52°24'21,5''N", longitude: "016°53'34,2''E" },
        { name: "MAPt", latitude: "52°25'09,6''N", longitude: "016°50'30,5''E" },
        { name: "PO486", latitude: "52°29'15,1''N", longitude: "016°34'46,1''E" },
        { name: "PO707", latitude: "52°16'17,4''N", longitude: "016°33'23,0''E" },
        { name: "DVOR/DME CMP", latitude: "52°07'59,9''N", longitude: "016°43'08,5''E" },
        { name: "RWY 10", latitude: "", longitude: "" },
        { name: "IAF PO411", latitude: "52°29'01,2''N", longitude: "016°24'16,1''E" },
        { name: "IF PO421", latitude: "52°27'53''N", longitude: "016°32'13,9''E" },
        { name: "FAF PO431", latitude: "52°26'44,4''N", longitude: "016°40'11,2''E" },
        { name: "MAPt*", latitude: "52°25'33,0''N", longitude: "016°48'23,0''E" },
        { name: "PO414", latitude: "52°22'32,0''N", longitude: "017°08'51,3''E" },
        { name: "PO632", latitude: "52°12'37,2''N", longitude: "016°52'33,1''E" },

    
        // Added points from the list you provided
        { name: "AKAPI", latitude: "51°55'12,0''N", longitude: "016°28'22,0''E" },
        { name: "BANPI", latitude: "52°28'00,4''N", longitude: "017°05'06,3''E" },
        { name: "DEKUT", latitude: "53°06'58,0''N", longitude: "017°02'07,0''E" },
        { name: "DENKO", latitude: "52°49'00,7''N", longitude: "015°49'57,0''E" },
        { name: "GOBSU", latitude: "52°17'20,0''N", longitude: "017°00'42,7''E" },
        { name: "KELOD", latitude: "52°14'02,0''N", longitude: "015°53'00,0''E" },
        { name: "MASIV", latitude: "52°00'44,9''N", longitude: "017°51'23,9''E" },
        { name: "NILPU", latitude: "51°57'10,0''N", longitude: "017°10'30,0''E" },
        { name: "NUNBI", latitude: "52°21'48,2''N", longitude: "017°07'20,0''E" },
        { name: "OLBUV", latitude: "52°15'02,8''N", longitude: "017°12'20,9''E" },
        { name: "PO703", latitude: "52°20'16,4''N", longitude: "017°15'05,8''E" },
        { name: "PO704", latitude: "52°18'44,2''N", longitude: "017°22'51,0''E" },
        { name: "PO706", latitude: "52°12'06,2''N", longitude: "016°55'01,8''E" },
        { name: "PO721", latitude: "52°02'26,8''N", longitude: "016°44'36,7''E" },
        { name: "PO731", latitude: "52°09'20,5''N", longitude: "017°09'21,7''E" },
        { name: "PO732", latitude: "52°04'28,5''N", longitude: "017°33'21,3''E" },
        { name: "PO741", latitude: "52°39'05,1''N", longitude: "016°58'36,5''E" },
        { name: "PO742", latitude: "52°44'17,2''N", longitude: "016°55'09,0''E" },
        { name: "PO743", latitude: "52°46'44,9''N", longitude: "016°22'03,3''E" },
        { name: "REKRA", latitude: "52°13'30,7''N", longitude: "017°20'05,3''E" },
        { name: "RERMU", latitude: "52°25'30,0''N", longitude: "017°17'51,3''E" },
    
        // Additional points for RWY 10
        { name: "BAISA", latitude: "52°39'05,1''N", longitude: "016°37'35,5''E" },
        { name: "DIDPU", latitude: "52°35'19,3''N", longitude: "016°27'04,3''E" },
        { name: "ETABI", latitude: "52°17'37,8''N", longitude: "016°26'38,1''E" },
        { name: "GUBNU", latitude: "52°24'49,8''N", longitude: "016°21'44,6''E" },
        { name: "NEPSU", latitude: "52°33'50,2''N", longitude: "016°34'53,7''E" },
        { name: "OBELI", latitude: "52°28'35,7''N", longitude: "016°32'12,7''E" },
        { name: "OKEKI", latitude: "52°23'21,1''N", longitude: "016°29'32,4''E" },
        { name: "PO603", latitude: "52°30'04,6''N", longitude: "016°24'24,1''E" },
        { name: "PO631", latitude: "52°15'56,2''N", longitude: "016°35'29,6''E" },
    
        // Additional points for RWY 28 4-2-2-0
        { name: "ELSUP", latitude: "52°32'24,0''N", longitude: "015°24'41,0''E" },
        { name: "ERNOX", latitude: "52°01'36,0''N", longitude: "016°01'14,0''E" },
        { name: "OBOKU", latitude: "52°15'08,0''N", longitude: "018°00'00,0''E" },
        { name: "PO801", latitude: "52°29'05,0''N", longitude: "016°29'38,7''E" },
        { name: "PO802", latitude: "52°23'50,3''N", longitude: "016°26'58,6''E" },
        { name: "PO803", latitude: "52°22'03,3''N", longitude: "016°36'19,5''E" },
        { name: "PO804", latitude: "52°20'15,6''N", longitude: "016°45'39,5''E" },
        { name: "PO806", latitude: "52°08'49,7''N", longitude: "016°39'48,1''E" },
    
        // Additional points for RWY 10 4-2-1-0
        { name: "PO901", latitude: "52°23'16,6''N", longitude: "016°59'48,1''E" },
        { name: "PO902", latitude: "52°33'38,4''N", longitude: "017°01'50,7''E" },
        { name: "PO903", latitude: "52°39'05,9''N", longitude: "016°58'23,2''E" },
        { name: "PO904", latitude: "52°45'04,3''N", longitude: "016°53'57,4''E" },
    
    ];
    const weatherOptions = ["Sky clear", "Few clouds", "Very cloudy", "Rain", "Heavy rain", "Snow", "Thunderstorm", "Strong winds"];
    const eventOptions = [
        "No emergency",
        "Fire in engine",              
        "Engine failure",              
        "Cabin depressurization",      
        "Pilot incapacitation",        
        "Medical emergency",           
        "Landing gear failure",        
        "Severe turbulence",           
        "Fuel leak",                   
        "Navigation system failure",   
        "Smoke in cockpit"             
      ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = !isNaN(value) && value !== "" ? parseFloat(value) : value;
        setEditableItem((prev) => ({
            ...prev,
            [name]: parsedValue,
        }));
    };
    const [selectedPoint, setSelectedPoint] = useState(() => {
        // Sprawdzamy, czy współrzędne pasują do któregoś punktu na liście
        const match = predefinedPoints.find(
            (point) =>
                point.latitude === item.position.latitude &&
                point.longitude === item.position.longitude
        );
        return match ? match.name : ""; // Jeśli pasuje, ustawiamy nazwę punktu, w przeciwnym razie puste pole
    });
    const handleCoordinateChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = !isNaN(value) && value !== "" ? parseFloat(value) : value;
        setEditableItem((prev) => ({
            ...prev,
            position: {
                ...prev.position,
                [name]: parsedValue,
            },
        }));
    };
    const handlePointChange = (e) => {
        const selectedPointName = e.target.value;
        const selectedPoint = predefinedPoints.find(
            (point) => point.name === selectedPointName
        );
        setSelectedPoint(selectedPointName);

        if (selectedPoint) {
            setEditableItem((prev) => ({
                ...prev,
                position: {
                    ...prev.position,
                    latitude: selectedPoint.latitude,
                    longitude: selectedPoint.longitude,
                },
            }));
        }
    };
    const handleVelocityChange = (e) => {
        const { name, value } = e.target;
        setEditableItem((prev) => ({
            ...prev,
            velocity: {
                ...prev.velocity,
                [name]: value,
            },
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setEditableItem((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSave = () => {
        onSave(editableItem);
        onClose();
    };

    const handleDelete = () => {
        onDelete(item.id);
        onClose();
    };

    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>Waypoint</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>

            {/* Formularz z podziałem na dwie kolumny */}
            <div
                className="form-container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                }}
            >
                {/* Kolumna lewa */}
                <div className="form-column" style={{ flex: 1 }}>
                    <label>Current Time</label>
                    <input
                        type="time"
                        step="any"
                        name="time"
                        value={editableItem.time}
                        onChange={handleChange}
                    />

                    <label>Current Fuel Level</label>
                    <input
                        type="number"
                        step="any"
                        name="fuel_state"
                        value={editableItem.fuel_state}
                        onChange={handleChange}
                    />

                    <label>Weather</label>
                    <select
                        name="weather"
                        value={editableItem.weather}
                        onChange={handleChange}
                        style={{ padding: "10px", width: "100%" }}
                    >
                        <option value="" disabled>
                            Select weather
                        </option>
                        {weatherOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <h2>Velocity</h2>
                    <label>Value</label>
                    <input
                        type="number"
                        step="any"
                        name="value"
                        value={editableItem.velocity.value}
                        onChange={handleVelocityChange}
                    />
                    <label>Direction</label>
                    <input
                        type="number"
                        step="any"
                        name="direction"
                        value={editableItem.velocity.direction}
                        onChange={handleVelocityChange}
                    />

                </div>

                {/* Kolumna prawa */}
                <div className="form-column" style={{ flex: 1 }}>
                    {/* Latitude and Longitude as a dropdown */}
                    <h2>Position</h2>
                    <label>Latitude and Longitude</label>
                    <select
                        value={selectedPoint} // Ustawienie wybranego punktu
                        onChange={handlePointChange}
                        style={{ padding: "10px", width: "100%" }}
                    >
                        <option value="" disabled>
                            Select a predefined point
                        </option>
                        {predefinedPoints.map((point) => (
                            <option key={point.name} value={point.name}>
                                {point.name} (Lat: {point.latitude}, Lon: {point.longitude})
                            </option>
                        ))}
                    </select>

                    <label>Altitude</label>
                    <input
                        type="number"
                        step="any"
                        name="altitude"
                        value={editableItem.position.altitude}
                        onChange={handleCoordinateChange}
                    />
                    <label>Events</label>
                    <select
                        name="Events"
                        value={editableItem.Events}
                        onChange={handleChange}
                        style={{ padding: "10px", width: "100%" }}
                    >
                        <option value="" disabled>
                            Select an event
                        </option>
                        {eventOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <h2>Is Entry Point?</h2>
                    <input
                        type="checkbox"
                        name="is_entrypoint"
                        checked={editableItem.is_entrypoint}
                        onChange={handleCheckboxChange}
                    />

                    <h2>Is Exit Point?</h2>
                    <input
                        type="checkbox"
                        name="is_exit_point"
                        checked={editableItem.is_exit_point}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>

            {/* Ikony i przyciski */}
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <button
                    onClick={handleDelete}
                    style={{ background: "none", border: "none", cursor: "pointer", marginRight: "20px" }}
                    aria-label="Delete item"
                >
                    <FaTrash size={30} color="red" />
                </button>
                <button
                    onClick={handleSave}
                    style={{ padding: "10px 20px", backgroundColor: "green", color: "white" }}
                >
                    Save
                </button>
            </div>
        </Modal>
    );
};

export default Window;
