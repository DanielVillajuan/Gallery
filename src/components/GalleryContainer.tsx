import { Grid } from "@mui/material";
import GalleryItem from "../components/GalleryItem";
import { GalleryType } from "../types/gallery";

const GalleryContainer = ({ list }: { list: GalleryType[]}): JSX.Element => {

  return (
    <Grid container width='80%' spacing={5} justifyContent='center' alignItems='center' paddingY={4} >
      {list.map((item: GalleryType) =>
        <Grid item alignItems={'center'} justifyContent={'center'} display={'flex'} xs={4} key={item.id} >
          <GalleryItem item={item}/>
        </Grid>
      )}
    </Grid>
  )
}

export default GalleryContainer;
