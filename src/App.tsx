import React, { useState } from "react";
import Closet from "./componets/Closet";
import { ClothingItem } from "./types";
import podaci from "./podaci.json";
import "./App.css";

const App: React.FC = () => {
  const [closet, setCloset] = useState<ClothingItem[]>(podaci);

  const addClothingItem = (item: ClothingItem) => {
    setCloset([...closet, item]);
  };

  const deleteClothingItem = (id: number) => {
    setCloset(closet.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Moj Ormar</h1>
      <div>
      <Closet
        closet={closet}
        addClothingItem={addClothingItem}
        deleteClothingItem={deleteClothingItem}
      />
      </div>
    </div>
  );
};

export default App;
