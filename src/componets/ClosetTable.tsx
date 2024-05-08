import React from "react";
import { ClothingItem } from "../types";
import "../App.css";

interface Props {
  closet: ClothingItem[];
  deleteClothingItem: (id: number) => void;
}

const ClosetTable: React.FC<Props> = ({ closet, deleteClothingItem }) => {
  return (
    <div id="closet">
    <table id="tablica">
      <thead>
        <tr>
          <th>Vrsta</th>
          <th>Boja</th>
          <th>Prigoda</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {closet.map(item => (
          <tr key={item.id}>
            <td>{item.vrsta}</td>
            <td>{item.boja}</td>
            <td>{item.prigoda}</td>
            <td>
              <button id="buttonDelete" onClick={() => deleteClothingItem(item.id)}>Izbriši</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ClosetTable;
