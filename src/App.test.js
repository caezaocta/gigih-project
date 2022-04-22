import { render, screen } from "@testing-library/react";
import SearchBar from '../src/components/Searchbar'

test("renders components in Create Playlist", () => {
  render(
    <SearchBar />
  );
  const createPlaylist = screen.getByText(/Search Song/i);
  expect(createPlaylist).toBeInTheDocument();
});
