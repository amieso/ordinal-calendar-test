import { useState } from "react";
import { generateYear } from "../utils/toolbox";

export function useOrdinalDays() {
  const [days, setDays] = useState(generateYear());
  return {
    days,
    setDays,
  };
}
