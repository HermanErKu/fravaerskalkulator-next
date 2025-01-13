"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

interface YearData {
  name: string;
  id: number,
  fag: number,
  year: number,
  [key: number]: { name: string; timer?: number };
}

interface CalculatorProps {
  data: YearData[];
}

const Calculator: React.FC<CalculatorProps> = ({ data }) => {
  const [tableView, setTableView] = useState(false);

  return (
    <div className="">
      <h1>Calculator</h1>
      <Button onClick={() => setTableView(!tableView)}>Change to {tableView ? <p>normal calculator</p> : <p>table view</p>}</Button>

      {tableView 
      ? 
      <div>
        <p>Table view not ready yet:</p>
      </div>
      :
      <div>
        <p>Calculator here</p>
      </div>
      }



      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Year: {item.year}</p>
          <p>Fag: {item.fag}</p>
        </div>
      ))}
    </div>
  );
};

export default Calculator;