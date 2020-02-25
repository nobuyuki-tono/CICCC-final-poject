import React from "react";
import industryLists from "./industryLists"

const IndustryOption = () => {
    const showIndustryOptions = () => {
        return industryLists.map((industry, key) => {
            return (
                <option key={key} value={industry}>{industry}</option>
            );
        });
    }

    return(
        <>
            {showIndustryOptions()}
        </>
    );
}

export default IndustryOption;