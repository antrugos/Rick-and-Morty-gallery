import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getData from "../../utils/API/getData";
import "./Gallery.css";
import { Selected } from "../selected/Selected";

export const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const fetchCharacters = async () => {
    try {
      const data = await getData();
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (selectedCharacter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedCharacter]);

  return (
    <main className="main">
      <h1 className="galleryTitle">RICK AND MORTY GALLERY</h1>
      {characters.map((character) => (
        <div className="gallery">
          <img
            key={character.id}
            src={character.image}
            alt={character.name}
            className="galleryImage"
            onClick={() => openModal(character)}
          />
        </div>
      ))}

      {selectedCharacter && (
        <Selected
          selectedCharacter={selectedCharacter}
          closeModal={closeModal}
        />
      )}
    </main>
  );
};
