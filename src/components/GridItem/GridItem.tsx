import React from "react";
import * as C from "./styles";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

interface GridItemProps {
  item: {
    id: number;
    categoria: string;
    amount: number;
    type: 'entrada' | 'saida';
  };
  onDelete: (id: number) => void;
}

const GridItem: React.FC<GridItemProps> = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.categoria}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.type === 'saida' ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;