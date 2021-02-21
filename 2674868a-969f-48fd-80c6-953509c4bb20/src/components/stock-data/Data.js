import React from 'react';

function Data({prices}) {
    return (
        <>
            <li className="py-10">Open : {prices.open}</li>
            <li className="py-10">High : {prices.high}</li>
            <li className="py-10">Low : {prices.low}</li>
            <li className="py-10">Close : {prices.close}</li>
        </>
    );
}

export default Data;