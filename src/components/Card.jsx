import React from "react";
import './Card.css'; // Arquivo CSS com as classes

export default function Card({ title, children, color = "blue" }) {
    return (
        <div className="card" style={{ borderTopColor: color }}>
            <div className="card-header" style={{ backgroundColor: color }}>
                <span>{title}</span>
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}
