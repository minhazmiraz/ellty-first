import { useState } from "react";
import Button from "./button";
import Card, { CardDivider } from "./card";
import Checkbox from "./checkbox";

interface PageSelectionProps {
  onDone?: () => void;
}

export default function PageSelection({ onDone }: PageSelectionProps) {
  const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set());

  const pages = ["All pages", "Page 1", "Page 2", "Page 3", "Page 4"];

  const handleToggle = (page: string) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(page)) {
      newSelected.delete(page);
    } else {
      newSelected.add(page);
    }
    setSelectedPages(newSelected);
  };

  return (
    <Card
      style={{ width: "370px" }}
      className="flex items-center justify-center bg-white"
    >
      <div className="w-full">
        {pages.map((page, index) => (
          <div key={page}>
            <label className="flex items-center justify-between pt-[10px] pb-[9px] px-[22px] cursor-pointer group">
              <span className="text-[#1F2128] font-['Montserrat'] font-normal text-[14px] leading-[130%]">
                {page}
              </span>
              <Checkbox
                checked={selectedPages.has(page)}
                onChange={() => handleToggle(page)}
              />
            </label>
            {index === 0 && <CardDivider className="w-full" />}
          </div>
        ))}
      </div>
      <CardDivider className="w-full" />
      <div className="px-[15px] py-[10px] w-full">
        <Button onClick={onDone} className="mx-auto">
          Done
        </Button>
      </div>
    </Card>
  );
}
