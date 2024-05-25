import { useContext } from "react";
import { BulbContext } from "../context/BulbContextProvider";

export default function RightSection() {
  // Consuming values and functions from BulbContext
  const { isOn, switchOn, switchOff } = useContext(BulbContext);

  return (
    <div className="right-section">
      <p>Right Section ( Bulb ) </p>
      <div className="light-bulb-container">
        {/* Displaying the light bulb with dynamic class */}
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        
        {/* Button to switch on the bulb */}
        <button onClick={switchOn}>SWITCH ON</button>
        
        {/* Button to switch off the bulb */}
        <button onClick={switchOff}>SWITCH OFF</button>
      </div>
    </div>
  );
}
