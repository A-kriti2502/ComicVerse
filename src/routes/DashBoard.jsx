import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const IMAGE_SIZE = "portrait_fantastic";

const Dashboard = () => {
  const [heroes, setHeroes] = useState([]);

  let cards;
  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        id={hero.id}
        key={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
      />
    ));
  }

  return (
    <main className="flex flex-col items-center justify-start h-screen mt-20 gap-5 text-white">
      <h1 className="text-5xl font-extrabold uppercase">Discover Marvel Heroes</h1>
      <SearchBar setHeroes={setHeroes} />
      <div className="flex flex-wrap justify-center gap-3">
        {cards}
      </div>
    </main>
  );
};

export default Dashboard;
