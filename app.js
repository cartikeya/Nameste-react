import React from "react";
import ReactDOM from "react-dom/client";


const a =100;
const Component = () => <h1>hello there</h1>;

const Nested = () => (
    <div className="title">
        <h1>this is h1{a}</h1>
        <h2>this is h1</h2>
        <h3>this is h1</h3>
        <Component/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Nested/>);