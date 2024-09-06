import { ReactNode } from "react";

interface IGridProps {
  children: ReactNode;
  columns: number;
}

const Grid = ({ children, columns }: IGridProps) => (
  <div
    className="grid"
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    }}
  >
    {children}
  </div>
);

export default Grid;
