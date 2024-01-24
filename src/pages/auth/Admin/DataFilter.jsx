import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
export const DataFilter = (props) => {
  const users = useSelector((store) => store.auth.users);
  const { filterData, setFilterdata } = props;
  const [item, setItem] = useState("");
  const handleFilter = (e) => {
    if (e.key === "Backspace") {
      const searchTerm = e.target.value;
      setItem(searchTerm);
      const filterItems = filterData.filter((user) =>
        user.f_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterdata(filterItems);
    } else {
      const searchTerm = e.target.value;
      setItem(searchTerm);
      const filterItems = users.filter((user) =>
        user.f_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterdata(filterItems);
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        value={item}
        onChange={(e) => handleFilter(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonSearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  );
};
