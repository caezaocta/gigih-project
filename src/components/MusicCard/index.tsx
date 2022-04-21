import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
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
        sx={[
          {
            "&:hover": {
              color: "#0047d6",
              backgroundColor: "white",
              cursor: "pointer",
            },
            maxWidth: 200,
            maxHeight: 450,
            border: "none",
            boxShadow: "none",
          },
        ]}
      >
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={album.images[0].url}
          alt="green iguana"
          sx={{ borderRadius: "4px" }}
        />
        <CardContent>
          <Button onClick={() => onTrackItemClick(track)}>
            {isSelected || selectedList ? (
              <Button variant="contained">Selected</Button>
            ) : (
              <Button variant="outlined">Select</Button>
            )}
          </Button>
          <Typography gutterBottom variant="h6" component="div" align="left">
            {name}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary" align="left">
                {artists[0].name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary" align="right">
                Album
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default MusicCard;
