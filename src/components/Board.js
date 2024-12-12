import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  const renderRow = (start) => {
    return (
      <div className="board-row">
        {renderSquare(start + 0)}
        {renderSquare(start + 1)}
        {renderSquare(start + 2)}
        {renderSquare(start + 3)}
        {renderSquare(start + 4)}
      </div>
    );
  };

  return (
    <div>
      {renderRow(0)}
      {renderRow(5)}
      {renderRow(10)}
      {renderRow(15)}
      {renderRow(20)}
    </div>
    // 五子棋棋盘通常是15x15或19x19，这里为了简化使用5x5
  );
};

export default Board;