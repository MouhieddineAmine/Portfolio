import React, { useContext } from 'react';
import { TemoignageContext } from '../context/TemoignageContext';

// Utilisation du contexte TemoignageContext pour accéder aux témoignages
const ListeTemoignage = () => {
  const { temoignages } = useContext(TemoignageContext);
// Rendu JSX du composant
  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">Liste des Témoignages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {temoignages && temoignages.map((temoignage) => (
          <div key={temoignage.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-300">{temoignage.name}</h2>
            <p className="mt-4 text-gray-400">{temoignage.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeTemoignage;
