import React from "react";
import "./Selected.css";

export const Selected = ({ selectedCharacter, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className="modalImage"
        />
        <h2>{selectedCharacter.name}</h2>
        <p>Especie: {selectedCharacter.species}</p>
        <p>Estado: {selectedCharacter.status}</p>
        <p>Género: {selectedCharacter.gender}</p>
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};
