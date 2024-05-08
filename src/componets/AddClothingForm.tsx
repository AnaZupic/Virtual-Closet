import React, { useState } from "react";
import { ClothingItem } from "../types";
import "../App.css";

interface Props {
  addClothingItem: (item: ClothingItem) => void;
}

const AddClothingForm: React.FC<Props> = ({ addClothingItem }) => {
  const [newItem, setNewItem] = useState<ClothingItem>({
    id: 0,
    vrsta: "",
    boja: "",
    prigoda: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newItem.vrsta || !newItem.boja || !newItem.prigoda) {
      alert("Molimo odaberite vrstu, boju i prigodu!");
      return;
    }

    addClothingItem({ ...newItem, id: Date.now() });
    setNewItem({ id: 0, vrsta: "", boja: "", prigoda: "" });
  };

  return (
    <form id="addContainer" onSubmit={handleSubmit}>
      <select id="dropDownOption" name="vrsta" value={newItem.vrsta} onChange={handleChange}>
        <option value="">Odaberi vrstu</option>
        <option value="Majica">Majica</option>
        <option value="Hlače">Hlače</option>
        <option value="Haljina">Haljina</option>
        <option value="Jakna">Jakna</option>
        <option value="Cipele">Cipele</option>
        <option value="Suknja">Suknja</option>
      </select>
      <select id="dropDownOption" name="boja" value={newItem.boja} onChange={handleChange}>
        <option value="">Odaberi boju</option>
        <option value="Crvena">Crvena</option>
        <option value="Plava">Plava</option>
        <option value="Crna">Crna</option>
        <option value="Bijela">Bijela</option>
        <option value="Zelena">Zelena</option>
        <option value="Roza">Roza</option>
        <option value="Žuta">Žuta</option>
        <option value="Siva">Siva</option>
        <option value="Smeđa">Smeđa</option>
      </select>
      <select id="dropDownOption" name="prigoda" value={newItem.prigoda} onChange={handleChange}>
        <option value="">Odaberi prigodu</option>
        <option value="Slobodno vrijeme">Slobodno vrijeme</option>
        <option value="Posao">Posao</option>
        <option value="Posebna prigoda">Posebna prigoda</option>
        <option value="Izlazak">Izlazak</option>
      </select>
      <button id="buttonAdd" type="submit">Dodaj u ormar</button>
    </form>
  );
};

export default AddClothingForm;
