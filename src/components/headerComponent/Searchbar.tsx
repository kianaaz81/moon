import React, { useEffect, useState } from "react"
import { TextField  } from "@mui/material";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
interface Props {
    city: string;
    onCityChange: (value : string) => void ;
}

const SearchBar : React.FC <Props>=({city , onCityChange })=>{
  const [inputValue, setInputValue] = useState(city);
  const debouncedInput = useDebounce(inputValue, 200);

  useEffect(() => {
    onCityChange(debouncedInput);
  }, [debouncedInput, onCityChange]);

  useEffect(() => {
    setInputValue(city);
  }, [city]);
  
    return(
      <TextField
      label='search your location'
      variant="outlined"
      fullWidth
      size="small"
      value={city}
      onChange={(e)=>setInputValue(e.target.value)}
      sx={{pr:2}}
      />
    )
}
export default SearchBar;