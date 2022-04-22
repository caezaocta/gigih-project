import { useState } from "react";
import { Card, Button, TextField } from "@mui/material";

interface CreatePlaylistProps {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  playlist: {
    title: string;
    description: string;
  };
}

const CreatePlaylist = ({
  handleSubmit,
  handleChange,
  playlist,
}: CreatePlaylistProps) => {
  return (
    <>
      <Card sx={{ padding: 2 }}>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              margin="normal"
              variant="standard"
              type="text"
              onChange={handleChange}
              id="playlist-title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter your playlist title"
              value={playlist.title}
              // minLength={10}
              sx={{ minLength: 10 }}
              inputProps={{
                minLength: 10,
              }}
            />
          </div>
          <div>
            <TextField
              margin="normal"
              variant="standard"
              type="text"
              name="description"
              onChange={handleChange}
              id="playlist-desc"
              placeholder="Enter your playlist description"
              value={playlist.description}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            sx={{ borderRadius: 5, marginTop: 3 }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default CreatePlaylist;
