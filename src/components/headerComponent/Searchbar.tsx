import React from "react"
import { TextField  } from "@mui/material";

interface Props {
    city: string;
    onCityChange: (value : string) => void ;
}

const SearchBar : React.FC <Props>=({city , onCityChange })=>{
    return(
      <TextField
      label='search your location'
      variant="outlined"
      fullWidth
      size="small"
      value={city}
      onChange={(e)=>onCityChange(e.target.value)}
      sx={{pr:2}}
      />
    )
}
export default SearchBar;