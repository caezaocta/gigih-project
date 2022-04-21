import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";

interface SearchBarProps {
  handleSearchSong(e: React.FormEvent<HTMLFormElement>): void;
  handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

function SearchBar({ handleSearchChange, handleSearchSong }: SearchBarProps) {
  return (
    <>
      <form onSubmit={handleSearchSong}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Search your song"
            variant="standard"
            onChange={handleSearchChange}
          />
          <Button type="submit">Search</Button>
        </Box>
      </form>
    </>
  );
}

export default SearchBar;
