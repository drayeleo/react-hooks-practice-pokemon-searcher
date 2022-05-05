import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [frontSprite, setFrontSprite] = useState(true);

  function handleClickImage() {
    setFrontSprite(!frontSprite);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img
            alt="oh no!" 
            src={frontSprite ? pokemon.sprites.front : pokemon.sprites.back}
            onClick={handleClickImage}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
