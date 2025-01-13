"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

interface YearData {
  name: string;
  id: number,
  fag: number,
  year: number,
  [key: number]: { name: string; timer?: number };
}

interface FagData {
  [key: number]: { name: string; timer?: number };
}

interface CalculatorProps {
  data: YearData[];
}

const Calculator: React.FC<CalculatorProps> = ({ data }) => {
  const [tableView, setTableView] = useState(true);

  //console.log(data[0][0]);

  let fagData = []
  for(let fagId = 0; fagId < data[0].fag; fagId++){
    fagData.push([data[0][fagId].name, data[0][fagId].timer])
  }

  const handleChangeTableView = (id:number, value:number) => {
    let fravær = Math.round((((value*0.75)/(parseInt(fagData[id][1]?.toString() || "1")))*100)*100)/100
    if (isNaN(fravær)) {
      fravær = 0;
    }

    console.log(document.getElementsByClassName(id.toString()))
    const classElement = document.getElementsByClassName(id.toString())[0];
    const wholePercentText = classElement ? classElement.querySelector('#whole') : null;
    if (wholePercentText) {
      wholePercentText.innerHTML = fravær.toString()+"%";
    }
    const halfPercentText = classElement ? classElement.querySelector('#half') : null;
    if (halfPercentText) {
      halfPercentText.innerHTML = (fravær*2).toString()+"%";
    }
  }

  return (
    <div className="">
      <h1>Calculator</h1>
      <Button onClick={() => setTableView(!tableView)}>Change to {tableView ? <p>normal calculator</p> : <p>table view</p>}</Button>

      {tableView 
      ? 
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fag</TableHead>
              <TableHead>Timer Fri</TableHead>
              <TableHead>Halvår</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
  
          {fagData.map((fag, id) => (
            <TableRow key={id} className={id.toString()}>
              <TableCell id="name">{fag[0]}</TableCell>
              <TableCell id="input"><input className="w-10" type="number" onChange={(input) => handleChangeTableView(id, parseInt(input.target.value))} /></TableCell>
              <TableCell id="half">0%</TableCell>
              <TableCell id="whole">0%</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>
      :
      <div>
        <p>Calculator here</p>
      </div>
      }



      {/*data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Year: {item.year}</p>
          <p>Fag: {item.fag}</p>
        </div>
      ))*/}
    </div>
  );
};

export default Calculator;