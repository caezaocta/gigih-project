import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlaylistForm from "../../components/CreatePlaylist";
import MusicCard from "../../components/MusicCard";
import Searchbar from "../../components/Searchbar";
// import Sidebar from "../../components/Sidebar";
import SignIn from "../../components/SignIn";
import { tokenState } from "../../modules/stateReduxModule";
import { Item } from "../../modules/trackModule";

const CreatePlaylist: FC = () => {
  const token = useSelector((state: tokenState) => state.token.value);

  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedTracksId, setSelectedTracksId] = useState<Item[]>([]);
  const [combinedTracks, setCombinedTracks] = useState<Item[]>([]);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });

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
    const combinedTrackWithSelectedTrack = tracks.map((track: Item) => ({
      ...track,
      isSelected: selectedTracksId.find((t: Item) => t.uri === track.uri),
    }));
    setCombinedTracks(combinedTrackWithSelectedTrack);
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

  // const renderSelectedSongs = () =>
  //   selectedTracksId.map((item: Item) => {
  //     const { uri } = item;
  //     return (
  //       <MusicCard
  //         key={uri}
  //         track={item}
  //         onTrackItemClick={onTrackItemClick}
  //         selectedList={true}
  //       />
  //     );
  //   });

  const handlePlaylistChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setPlaylist({ ...playlist, [name]: value });
  };

  const handleCreatePlaylist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uris = selectedTracksId.map((item: Item) => item.uri);
    console.log(uris);
    axios
      .get("https://api.spotify.com/v1/me", TokenHeader())
      .then(function (response) {
        axios
          .post(
            `https://api.spotify.com/v1/users/${response.data.id}/playlists`,
            {
              name: playlist.title,
              description: playlist.description,
              public: false,
            },
            TokenHeader()
          )
          .then(function (response) {
            axios.post(
              `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
              {
                uris: uris,
              },
              TokenHeader()
            );
          });
      });
    alert("New Playlist added");
  };

  return (
    <>
      {/* <Sidebar /> */}
      {/* sidebar must be responsive */}

      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <SignIn />
        <Grid
          container
          justifyContent="flex-start"
          sx={{
            marginTop: 4,
          }}
        >
          <Grid item xs={8}>
            <Searchbar
              handleSearchChange={handleSearchChange}
              handleSearchSong={handleSearchSong}
            />
            {tracks.length > 0 ? renderSearchSong() : null}
          </Grid>
          <Grid item xs={4}>
            <PlaylistForm
              playlist={playlist}
              handleChange={handlePlaylistChange}
              handleSubmit={handleCreatePlaylist}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreatePlaylist;
