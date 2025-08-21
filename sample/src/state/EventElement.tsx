import { useState } from "react";
const EventElement:React.FC =()=>{
    const [value,setValue] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);

    }

    function handleDrag(e: React.DragEvent<HTMLDivElement>) {
        console.log("dragging", e);
    }

    return(
        <>
        <input
            type="text"
            value={value}
            onChange={handleChange}
        />

        <div draggable onDrag={handleDrag}>drag me</div>
        </>
    )
}

export default EventElement;