import React, { useState } from "react";
import { ClothingItem } from "../types";
import ClosetTable from "./ClosetTable";
import AddClothingForm from "./AddClothingForm";
import "../App.css";

interface Props {
  closet: ClothingItem[];
  addClothingItem: (item: ClothingItem) => void;
  deleteClothingItem: (id: number) => void;
}

const Closet: React.FC<Props> = ({ closet, addClothingItem, deleteClothingItem }) => {
  const [filter, setFilter] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredCloset = filter ? closet.filter(item => item.vrsta === filter) : closet;

  return (
    <div>
      <select id="dropDownOption" onChange={handleChange}>
        <option value="">All</option>
        {[...new Set(closet.map(item => item.vrsta))].map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <ClosetTable closet={filteredCloset} deleteClothingItem={deleteClothingItem} />
      <AddClothingForm addClothingItem={addClothingItem} />
    </div>
  );
};

export default Closet;
