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

        let copyMultipleSelected = [...multipleSelected];

        const findIndexOfCurrentId =
            copyMultipleSelected.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultipleSelected.push(getCurrentId);
        } else {
            copyMultipleSelected.splice(findIndexOfCurrentId, 1);
        }

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
