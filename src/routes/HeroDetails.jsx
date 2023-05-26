import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchHero } from '../utils/utils';
import { useEffect, useState } from 'react';

const HeroDetails = () => {
  let { id } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!hero) return null;

  const insertLineBreaks = (description) => {
    const words = description.split(' ');
    const wordsWithBreaks = [];
    for (let i = 0; i < words.length; i++) {
      wordsWithBreaks.push(words[i]);
      wordsWithBreaks.push(" ");
      if ((i + 1) % 15 === 0) {
        wordsWithBreaks.push(<br key={i} />);
      }
    }
    return wordsWithBreaks;
  };

  return (
    <div className="flex flex-col items-center h-screen text-white mt-10">
      <div className="flex flex-row justify-center gap-3">
        <img 
        className="h-40 w-40 object-contain"
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
        alt="hero image full size" />

        <div className="flex flex-col gap-2">
          <h4> <span className='font-semibold text-blue-400'>Name: </span><span className='text-3xl font-extrabold uppercase'>{hero.name}</span></h4>
          {hero.description && (
            <h4 >
              <span className='font-semibold text-blue-400'>Description:</span>
              <br /> <span className='italic'>{insertLineBreaks(hero.description)}</span>
            </h4>
          )}
          {hero.series && (
            <div className="hero__series">
              <h4 className='font-semibold text-blue-400'>Series</h4>
              <ul className="list-disc ml-6">
                {hero.series.items.map((s) => (
                  <li key={Math.random() * 1000}>{s.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
