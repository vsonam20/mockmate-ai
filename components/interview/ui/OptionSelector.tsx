"use client";

import OptionGrid from "./OptionGrid";
import SelectionCard from "./SelectionCard";

interface OptionSelectorProps<T extends string | number> {
  options: T[];
  selected: T | "";
  onSelect: (value: T) => void;
}

export default function OptionSelector<T extends string | number>({
  options,
  selected,
  onSelect,
}: OptionSelectorProps<T>) {
  return (
    <OptionGrid>
      {options.map((option) => (
        <SelectionCard
          key={option}
          title={String(option)}
          selected={selected === option}
          onClick={() => onSelect(option)}
        />
      ))}
    </OptionGrid>
  );
}