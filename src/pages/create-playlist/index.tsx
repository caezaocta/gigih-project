import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Searchbar from "../../components/Searchbar";
// import Sidebar from '../../components/Sidebar';
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MusicCard from "../../components/MusicCard";
import SignIn from "../../components/SignIn";
import { tokenState } from "../../modules/stateReduxModule";
import { Item } from "../../modules/trackModule";

const CreatePlaylist: FC = () => {
  const token = useSelector((state: tokenState) => state.token.value);

  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedTracksId, setSelectedTracksId] = useState<Item[]>([]);
  const [combinedTracks, setCombinedTracks] = useState<Item[]>([]);

  const TokenHeader = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const handleSearchSong = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchKey}&type=track`,
        TokenHeader()
      )
      .then(function (response) {
        console.log(response.data.tracks.items);
        setTracks(response.data.tracks.items);
      })
      .catch(() => {
        alert("Search error");
      });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKey(e.currentTarget.value);
  };

  const onTrackItemClick = (track: Item) => {
    const alreadySelected = selectedTracksId.find(
      (t: Item) => t.uri === track.uri
    );
    alreadySelected
      ? setSelectedTracksId(
          selectedTracksId.filter((t: Item) => t.uri !== track.uri)
        )
      : setSelectedTracksId((selectedTracksId: Item[]) => [
          ...selectedTracksId,
          track,
        ]);
  };

  useEffect(() => {
    const combinedTracksAndSelectedTracks = tracks.map((track: Item) => ({
      ...track,
      isSelected: selectedTracksId.find((t: Item) => t.uri === track.uri),
    }));
    setCombinedTracks(combinedTracksAndSelectedTracks);
  }, [selectedTracksId, tracks]);

  const renderSearchSong = () =>
    combinedTracks.map((item: Item) => {
      const { uri } = item;
      return (
        <MusicCard
          key={uri}
          selectedList={false}
          onTrackItemClick={onTrackItemClick}
          track={item}
        />
      );
    });

  const renderSelectedSongs = () =>
    selectedTracksId.map((item: Item) => {
      const { uri } = item;
      return (
        <MusicCard
          key={uri}
          track={item}
          onTrackItemClick={onTrackItemClick}
          selectedList={true}
        />
      );
    });

  return (
    <>
      {/* <Sidebar /> */}
      {/* sidebar must be responsive */}
      <Container sx={{ mt: 1, mr: 3 }}>
        <Grid>
          <SignIn />
          <Searchbar
            handleSearchChange={handleSearchChange}
            handleSearchSong={handleSearchSong}
          />
        </Grid>
      </Container>
      {tracks.length > 0 ? renderSearchSong() : <p>No song</p>}
      {renderSelectedSongs()}
    </>
  );
};

export default CreatePlaylist;
