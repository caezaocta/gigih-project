import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Item } from "../../modules/trackModule";

interface MusicCardProps {
  track: Item;
  onTrackItemClick(track: Item): void;
  selectedList: boolean;
}

const MusicCard = ({
  track,
  selectedList,
  onTrackItemClick,
}: MusicCardProps) => {
  const { album, name, artists, isSelected } = track;

  return (
    <>
      <Card
        variant="outlined"
        sx={[
          {
            "&:hover": {
              color: "#0047d6",
              backgroundColor: "white",
              cursor: "pointer",
            },
            padding: 1,
            marginBottom: 2,
            width: 500,
            height: 150,
            display: "flex",
            justifyContent: "space-between",
          },
        ]}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography gutterBottom variant="h6" component="div" align="left">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              {artists[0].name}
            </Typography>
          </CardContent>
          <IconButton onClick={() => onTrackItemClick(track)} size="small">
            {isSelected || selectedList ? (
              <Button
                color="error"
                startIcon={<RemoveIcon />}
                variant="contained"
                disableElevation
                size="small"
                sx={{ borderRadius: 5 }}
              >
                Remove
              </Button>
            ) : (
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                disableElevation
                size="small"
                sx={{ borderRadius: 5 }}
              >
                Select
              </Button>
            )}
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          image={album.images[0].url}
          alt="green iguana"
          sx={{ borderRadius: "4px", width: 151, alignSelf: "flex-end" }}
        />
      </Card>
    </>
  );
};

export default MusicCard;
