import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const allDiseases = [
  "Influensa",
  "Tuberkulose",
  "Fotsopp",
  "Malaria",
  "Covid-19",
  "Spedalskhet",
  "Klamydia",
  "Ringorm",
  "Meslinger",
  "HIV/AIDS",
  "Giardiasis",
  "Borreliose",
  "Skabb",
  "Candida (trøske)"
];

export default function Sorteringsoppgave() {
  const [pool, setPool] = useState(allDiseases);
  const [bakterier, setBakterier] = useState([]);
  const [virus, setVirus] = useState([]);
  const [sopp, setSopp] = useState([]);
  const [parasitter, setParasitter] = useState([]);

  const moveItem = (item, from, to, setFrom, setTo) => {
    setFrom(from.filter(i => i !== item));
    setTo([...to, item]);
  };

  const Box = ({ title, items, setItems }) => (
    <Card className="p-3">
      <CardContent>
        <h2 className="font-semibold mb-2">{title}</h2>
        <div className="space-y-2 min-h-[200px]">
          {items.map(item => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              className="p-2 bg-gray-100 rounded cursor-pointer"
              onClick={() => moveItem(item, items, pool, setItems, setPool)}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Klikk for å flytte tilbake</p>
      </CardContent>
    </Card>
  );

  const TargetBox = ({ title, items, setItems }) => (
    <Card className="p-3">
      <CardContent>
        <h2 className="font-semibold mb-2">{title}</h2>
        <div className="space-y-2 min-h-[200px]">
          {items.map(item => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              className="p-2 bg-blue-100 rounded cursor-pointer"
              onClick={() => moveItem(item, items, pool, setItems, setPool)}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Klikk for å flytte tilbake</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Sorter sykdommene etter mikroorganisme</h1>
      <p>Klikk på en sykdom for å plassere den i riktig kategori. Klikk igjen for å angre.</p>

      <Card className="p-3">
        <CardContent>
          <h2 className="font-semibold mb-2">Sykdommer (usortert)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {pool.map(item => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="p-2 bg-green-100 rounded cursor-pointer"
                onClick={() => {
                  /* midlertidig: la elev velge selv hvor den skal */
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">(Eleven velger selv riktig kategori)</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TargetBox title="Bakterier" items={bakterier} setItems={setBakterier} />
        <TargetBox title="Virus" items={virus} setItems={setVirus} />
        <TargetBox title="Sopp" items={sopp} setItems={setSopp} />
        <TargetBox title="Parasitter" items={parasitter} setItems={setParasitter} />
      </div>
    </div>
  );
}
