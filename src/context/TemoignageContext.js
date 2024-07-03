import React, { createContext, useState, useEffect } from 'react';

export const TemoignageContext = createContext();

export const TemoignageProvider = ({ children }) => {
  const [temoignages, setTemoignages] = useState(() => {
    
    const storedTemoignages = localStorage.getItem('temoignages');
    return storedTemoignages ? JSON.parse(storedTemoignages) : [];
  });
//sauvegarder les témoignages dans localStorage à chaque changement
  useEffect(() => {
    
    localStorage.setItem('temoignages', JSON.stringify(temoignages));
  }, [temoignages]);
// Fonction pour ajouter un témoignage à la liste actuelle
  const addTemoignage = (newTemoignage) => {
    setTemoignages([...temoignages, newTemoignage]);
  };
// Fonction pour éditer un témoignage existant dans la liste
  const editTemoignage = (editedTemoignage) => {
    const updatedTemoignages = temoignages.map((temoignage) =>
      temoignage.id === editedTemoignage.id ? editedTemoignage : temoignage
    );
    setTemoignages(updatedTemoignages);
  };
// Fournit le contexte aux composants enfants avec les valeurs nécessaires
  return (
    <TemoignageContext.Provider value={{ temoignages, addTemoignage, editTemoignage }}>
      {children}
    </TemoignageContext.Provider>
  );
};
