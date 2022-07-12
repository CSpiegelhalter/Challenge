import React, { useState, useEffect } from "react";
import './List.css'

function List({props}) {

    return (
        <ul className="list">
            {props.map((item, i) =>
            <li>
                <a className="item" key={item.name} href={`https://finance.yahoo.com/quote/${item.symbol}`}>{item.name}</a>
            </li>
            )}
        </ul>
    );
}

export default List;