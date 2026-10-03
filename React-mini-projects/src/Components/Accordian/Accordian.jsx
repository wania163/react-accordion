import React, { useState } from "react";
import data from "./data";
import "./Accordian.css";

const Accordian = () => {

    // Single selection
    // which question is open in single mode
    const [selected, setSelected] = useState(null);

    // Multiple selection
    // which questions are open in multiple mode
    const [multipleSelected, setMultipleSelected] = useState([]);

    // Selection mode
    // which selection mode we're currently using
    const [multiple, setMultiple] = useState(false);


    // Single selection
    function handleSingleSelection(getCurrentId) {
        setSelected(
            getCurrentId === selected ? null : getCurrentId
        );
    }


    // Multiple selection
    function handleMultipleSelection(getCurrentId) {
// multiple selested waly array ki copy bnai jo k initially empty hai
        let copyMultipleSelected = [...multipleSelected];

        const findIndexOfCurrentId =
        // if a user clicks id 3 copyMultipleSelected.indexOf(3)
        // jis id pr user ny click kia hai wo kaya array ma hai??
            copyMultipleSelected.indexOf(getCurrentId);
//  agr id nhi hai 
        if (findIndexOfCurrentId === -1) {
            // push() array ke end mein new value add karta hai.
            // agr user  pr click krta hai tu copyMultipleSelected.push(5);
            copyMultipleSelected.push(getCurrentId);
        } else {
            // Current ID already array mein hai.Iska matlab question already open hai.Agar user dobara us question par click karega, humein usko close karna hai.
            copyMultipleSelected.splice(findIndexOfCurrentId, 1);
            // splice() array se item remove kar sakta hai.
        }
// jo chnges kiy usko orginal waly ma save bhi krny
        setMultipleSelected(copyMultipleSelected);
    }


    return (
        <div className="wrapper">

            <button onClick={() => setMultiple(!multiple)}>
                {multiple
                    ? "Switch to Single Selection"
                    : "Enable Multiple Selection"}
            </button>


            <div className="accordian">

                {data && data.length > 0 ? (

                    data.map((dataItems) => (

                        <div className="item" key={dataItems.id}>

                            <div
                                onClick={() =>
                                    multiple
                                        ? handleMultipleSelection(dataItems.id)
                                        : handleSingleSelection(dataItems.id)
                                }
                                className="title"
                            >

                                <h3>{dataItems.question}</h3>

                                <span>
                                    {multiple
                                        ? multipleSelected.includes(dataItems.id)
                                            ? "-"
                                            : "+"
                                        : selected === dataItems.id
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </div>


                            {/* Single Selection */}

                            {!multiple && selected === dataItems.id && (
                                <div className="content">
                                    {dataItems.answer}
                                </div>
                            )}


                            {/* Multiple Selection */}

                            {multiple &&
                                multipleSelected.includes(dataItems.id) && (
                                    <div className="content">
                                        {dataItems.answer}
                                    </div>
                                )
                            }

                        </div>

                    ))

                ) : (
                    <div>No data found</div>
                )}

            </div>

        </div>
    );
};

export default Accordian;
