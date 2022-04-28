import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useRef } from 'react';
import { useStyles } from './style'; // the style file
import Link from '../Link';

function FeaturedTreesSlider({ trees, size = null }) {
  // default size of images = 208px;
  // if size="small" props is passed in, size of images= 144px
  const { classes } = useStyles(size);
  const sliderRef = useRef();

  const scrollHandler = (num) => {
    sliderRef.current.scrollLeft += num;
  };

  return (
    <div className={classes.SliderContainer}>
      <Button
        className={classes.arrow}
        onClick={() => scrollHandler(500)}
        sx={{
          right: 0,
          borderRadius: '40px 0 0 40px',
        }}
      >
        <ArrowForwardIosIcon />
      </Button>
      <Grid ref={sliderRef} className={classes.SliderImgContainer}>
        {trees.map((tree) => (
          <Card
            key={tree.id}
            elevation={8}
            sx={{
              transition: 'all .5s',
              scrollSnapAlign: 'center',
              scrollBehavior: 'smooth',
              // position: 'relative',
              padding: (theme) => theme.spacing(5),
              borderRadius: (theme) => theme.spacing(4),
              // boxShadow: '0px 2px 16px rgba(34, 38, 41, 0.15)',
              // width: [152, 208],
              overflow: 'initial',
            }}
          >
            <CardMedia
              component="img"
              image={tree.image_url}
              alt="tree"
              sx={{
                borderRadius: '16px',
                transition: 'transform .5s',
                width: 208,
                height: 232,
                minWidth: [144, 208],
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '20px',
                  marginTop: 4,
                }}
              >
                <Link href={`/trees/${tree.id}`}>Tree - {tree.id}</Link>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: 1.5,
                }}
              >
                West-Smith-Nayer
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Button
        className={classes.arrow}
        onClick={() => scrollHandler(-500)}
        sx={{
          left: 0,
          borderRadius: ' 0 40px 40px 0',
        }}
      >
        <ArrowBackIosIcon />
      </Button>
    </div>
  );
}

export default FeaturedTreesSlider;
