import { Avatar, Box, Grid, Typography } from '@mui/material';
import { makeStyles } from 'models/makeStyles';
import React from 'react';

const useStyles = makeStyles()((theme) => ({
  sizeAvatar: {
    height: '50%',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    '@media (max-width: 425px)': {
      borderRadius: '4px',
    },
  },
  flag: {
    margin: '20px',
    '@media (max-width: 425px)': {
      margin: '14px',
    },
    boxShadow: '0 4px 20px rgba(0, 0, 0, .25)',
  },
  top: {
    margin: '56px',
    '@media (max-width: 425px)': {
      margin: '20px',
    },
    '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation : portrait)':
      {
        margin: '39px',
      },
  },
  bottom: {
    marginTop: '42px',
    '@media (max-width: 425px)': {
      marginTop: '27px',
    },
    fontSize: '1px',
  },
  item: {
    borderRadius: '100px',
    boxShadow: '0 4px 10px 0px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    margin: '32px',
    '@media (max-width: 425px)': {
      margin: '12px',
    },
  },
  ribbons: {
    marginTop: '-60px',
    '@media (max-width: 425px)': {
      marginTop: '-40px',
    },
    '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation : portrait)':
      {
        marginTop: '-40px',
      },
  },
}));

function LeaderBoard(props) {
  const { countries, handleCountryClick } = props;

  if (countries) {
    // hard code
    countries[0].flag =
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg';
    countries[1].flag =
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg';
    countries[2].flag =
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg';
    countries[3].flag =
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg';
  }

  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.top}>
        <Grid
          container
          columns={16}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              #
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5">COUNTRY</Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography variant="h5" sx={{ textAlign: 'right' }}>
              {'TREES PLANTED '}
              <svg
                width="12"
                height="15"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.13563 12.418C11.1989 11.8238 13.5 9.29931 13.5 6.27516C13.5 2.80948 10.4779 0 6.75 0C3.02208 0 0 2.80948 0 6.27516C0 9.31195 2.32039 11.8449 5.40281 12.4253C5.39574 12.4819 5.39209 12.5395 5.39209 12.598V16.6224C5.39209 17.3833 6.00886 18 6.76969 18C7.53051 18 8.14728 17.3833 8.14728 16.6224V12.598C8.14728 12.537 8.14332 12.4769 8.13563 12.418Z"
                  fill="#86C232"
                />
              </svg>
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>

      {countries &&
        countries.map((country, index) => (
          <Box
            key={country.id}
            className={classes.item}
            onClick={() => handleCountryClick(country.id)}
          >
            <Grid
              container
              columns={16}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={2}>
                {index < 3 ? (
                  <p></p>
                ) : (
                  <Typography
                    variant="h5"
                    sx={{ textAlign: 'center', marginLeft: '50%' }}
                  >
                    {index + 1}
                  </Typography>
                )}
                {/* Here we add the position number for the top 3 countries with an svg file */}
                {index === 0 && (
                  <div className={classes.ribbons}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="26 15 116 116"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_4697_14092)">
                        <path
                          d="M78.0002 46C78.0002 57.0457 69.0459 66 58.0002 66C46.9545 66 36.0002 58 37.0002 46C37.0002 34.9543 46.9545 26 58.0002 26C69.0459 26 78.0002 34.9543 78.0002 46Z"
                          fill="white"
                        />
                        <path
                          d="M49.8 73.7C50.4 73.9 51.2 74.6 52 75.3L43.4 93.5L37.2 85L26.6 85.5L36 65.7C36.3 65.8 36.5 66 36.7 66.2C37.2 66.7 37.6 67.9 38 69.1C38.6 70.9 39.2 73 41 74C41.7 74.4 42.5 74.6 43.5 74.6C44.6 74.6 45.7 74.3 46.8 74.1C47.7 73.9 48.6 73.7 49.4 73.7C49.4 73.7 49.7 73.7 49.8 73.7ZM78.1 66.1C77.6 66.6 77.2 67.8 76.8 69C76.2 70.8 75.6 72.9 73.8 73.9C73.1 74.3 72.3 74.5 71.3 74.5C70.2 74.5 69.1 74.2 68 74C67.1 73.8 66.2 73.6 65.4 73.6C65.2 73.6 65 73.6 64.8 73.7C64.2 73.9 63.4 74.6 62.6 75.3L71.4 93.5L77.6 85L88.2 85.5L78.8 65.7C78.5 65.8 78.3 66 78.1 66.1ZM84.5 61.1C83.2 63.3 78.7 63.2 76.9 65C75.1 66.8 75.2 71.3 73 72.6C70.8 73.9 67 71.5 64.5 72.2C62.1 72.8 60 76.8 57.4 76.8C54.8 76.8 52.7 72.8 50.2 72.2C47.7 71.5 43.9 73.9 41.7 72.6C39.5 71.3 39.6 66.8 37.8 65C36 63.2 31.5 63.3 30.2 61.1C28.9 58.9 31.3 55.1 30.6 52.6C29.9 50.2 26 48.1 26 45.4C26 42.8 30 40.7 30.6 38.2C31.3 35.7 28.9 31.9 30.2 29.7C31.5 27.5 36 27.6 37.8 25.8C39.6 24 39.5 19.5 41.7 18.2C43.9 16.9 47.7 19.3 50.2 18.6C52.6 17.9 54.7 14 57.4 14C60 14 62.1 18 64.6 18.6C67.1 19.3 70.9 16.9 73.1 18.2C75.3 19.5 75.2 24 77 25.8C78.8 27.6 83.3 27.5 84.6 29.7C85.9 31.9 83.5 35.7 84.2 38.2C84.9 40.6 88.8 42.7 88.8 45.4C88.8 48 84.8 50.1 84.2 52.6C83.4 55.1 85.8 58.9 84.5 61.1ZM78.5 45.5C78.5 33.8 69 24.4 57.4 24.4C45.8 24.4 36.3 33.8 36.3 45.5C36.3 57.2 45.7 66.6 57.4 66.6C69.1 66.6 78.5 57.1 78.5 45.5Z"
                          fill="#FFD700"
                        />
                        <path
                          d="M62.42 51.78V54H52.82V51.78H56.336V41.664C56.336 41.264 56.348 40.852 56.372 40.428L53.876 42.516C53.732 42.628 53.588 42.7 53.444 42.732C53.308 42.756 53.176 42.756 53.048 42.732C52.928 42.708 52.82 42.668 52.724 42.612C52.628 42.548 52.556 42.48 52.508 42.408L51.572 41.124L56.864 36.624H59.3V51.78H62.42Z"
                          fill="#222629"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4697_14092"
                          x="0"
                          y="0"
                          width="116"
                          height="116"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4697_14092"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4697_14092"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                )}
                {index === 1 && (
                  <div className={classes.ribbons}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="26 15 116 116"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_4699_24242)">
                        <path
                          d="M78.0002 46C78.0002 57.0457 69.0459 66 58.0002 66C46.9545 66 36.0002 58 37.0002 46C37.0002 34.9543 46.9545 26 58.0002 26C69.0459 26 78.0002 34.9543 78.0002 46Z"
                          fill="white"
                        />
                        <path
                          d="M49.8 73.7C50.4 73.9 51.2 74.6 52 75.3L43.4 93.5L37.2 85L26.6 85.5L36 65.7C36.3 65.8 36.5 66 36.7 66.2C37.2 66.7 37.6 67.9 38 69.1C38.6 70.9 39.2 73 41 74C41.7 74.4 42.5 74.6 43.5 74.6C44.6 74.6 45.7 74.3 46.8 74.1C47.7 73.9 48.6 73.7 49.4 73.7C49.4 73.7 49.7 73.7 49.8 73.7ZM78.1 66.1C77.6 66.6 77.2 67.8 76.8 69C76.2 70.8 75.6 72.9 73.8 73.9C73.1 74.3 72.3 74.5 71.3 74.5C70.2 74.5 69.1 74.2 68 74C67.1 73.8 66.2 73.6 65.4 73.6C65.2 73.6 65 73.6 64.8 73.7C64.2 73.9 63.4 74.6 62.6 75.3L71.4 93.5L77.6 85L88.2 85.5L78.8 65.7C78.5 65.8 78.3 66 78.1 66.1ZM84.5 61.1C83.2 63.3 78.7 63.2 76.9 65C75.1 66.8 75.2 71.3 73 72.6C70.8 73.9 67 71.5 64.5 72.2C62.1 72.8 60 76.8 57.4 76.8C54.8 76.8 52.7 72.8 50.2 72.2C47.7 71.5 43.9 73.9 41.7 72.6C39.5 71.3 39.6 66.8 37.8 65C36 63.2 31.5 63.3 30.2 61.1C28.9 58.9 31.3 55.1 30.6 52.6C29.9 50.2 26 48.1 26 45.4C26 42.8 30 40.7 30.6 38.2C31.3 35.7 28.9 31.9 30.2 29.7C31.5 27.5 36 27.6 37.8 25.8C39.6 24 39.5 19.5 41.7 18.2C43.9 16.9 47.7 19.3 50.2 18.6C52.6 17.9 54.7 14 57.4 14C60 14 62.1 18 64.6 18.6C67.1 19.3 70.9 16.9 73.1 18.2C75.3 19.5 75.2 24 77 25.8C78.8 27.6 83.3 27.5 84.6 29.7C85.9 31.9 83.5 35.7 84.2 38.2C84.9 40.6 88.8 42.7 88.8 45.4C88.8 48 84.8 50.1 84.2 52.6C83.4 55.1 85.8 58.9 84.5 61.1ZM78.5 45.5C78.5 33.8 69 24.4 57.4 24.4C45.8 24.4 36.3 33.8 36.3 45.5C36.3 57.2 45.7 66.6 57.4 66.6C69.1 66.6 78.5 57.1 78.5 45.5Z"
                          fill="#CCCCCC"
                        />
                        <path
                          d="M61.772 51.2399C62.092 51.2399 62.344 51.3319 62.528 51.5159C62.72 51.6919 62.816 51.9279 62.816 52.2239V53.9999H50.912V53.0159C50.912 52.8159 50.952 52.6079 51.032 52.3919C51.12 52.1679 51.256 51.9679 51.44 51.7919L56.708 46.5119C57.148 46.0639 57.54 45.6359 57.884 45.2279C58.236 44.8199 58.528 44.4159 58.76 44.0159C58.992 43.6159 59.168 43.2119 59.288 42.8039C59.416 42.3879 59.48 41.9519 59.48 41.4959C59.48 41.0799 59.42 40.7159 59.3 40.4039C59.18 40.0839 59.008 39.8159 58.784 39.5999C58.568 39.3839 58.304 39.2239 57.992 39.1199C57.688 39.0079 57.344 38.9519 56.96 38.9519C56.608 38.9519 56.28 39.0039 55.976 39.1079C55.68 39.2039 55.416 39.3439 55.184 39.5279C54.952 39.7039 54.756 39.9119 54.596 40.1519C54.436 40.3919 54.316 40.6559 54.236 40.9439C54.1 41.3119 53.924 41.5559 53.708 41.6759C53.492 41.7959 53.18 41.8239 52.772 41.7599L51.212 41.4839C51.332 40.6519 51.564 39.9239 51.908 39.2999C52.252 38.6679 52.68 38.1439 53.192 37.7279C53.712 37.3039 54.304 36.9879 54.968 36.7799C55.64 36.5639 56.36 36.4559 57.128 36.4559C57.928 36.4559 58.66 36.5759 59.324 36.8159C59.988 37.0479 60.556 37.3799 61.028 37.8119C61.5 38.2439 61.868 38.7639 62.132 39.3719C62.396 39.9799 62.528 40.6559 62.528 41.3999C62.528 42.0399 62.432 42.6319 62.24 43.1759C62.056 43.7199 61.804 44.2399 61.484 44.7359C61.172 45.2319 60.804 45.7119 60.38 46.1759C59.956 46.6399 59.512 47.1119 59.048 47.5919L55.136 51.5879C55.512 51.4759 55.884 51.3919 56.252 51.3359C56.628 51.2719 56.984 51.2399 57.32 51.2399H61.772Z"
                          fill="#222629"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4699_24242"
                          x="0"
                          y="0"
                          width="116"
                          height="116"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4699_24242"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4699_24242"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                )}
                {index === 2 && (
                  <div className={classes.ribbons}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="26 15 116 116"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_4699_25049)">
                        <path
                          d="M78.0002 46C78.0002 57.0457 69.0459 66 58.0002 66C46.9545 66 36.0002 58 37.0002 46C37.0002 34.9543 46.9545 26 58.0002 26C69.0459 26 78.0002 34.9543 78.0002 46Z"
                          fill="white"
                        />
                        <path
                          d="M49.8 73.7C50.4 73.9 51.2 74.6 52 75.3L43.4 93.5L37.2 85L26.6 85.5L36 65.7C36.3 65.8 36.5 66 36.7 66.2C37.2 66.7 37.6 67.9 38 69.1C38.6 70.9 39.2 73 41 74C41.7 74.4 42.5 74.6 43.5 74.6C44.6 74.6 45.7 74.3 46.8 74.1C47.7 73.9 48.6 73.7 49.4 73.7C49.4 73.7 49.7 73.7 49.8 73.7ZM78.1 66.1C77.6 66.6 77.2 67.8 76.8 69C76.2 70.8 75.6 72.9 73.8 73.9C73.1 74.3 72.3 74.5 71.3 74.5C70.2 74.5 69.1 74.2 68 74C67.1 73.8 66.2 73.6 65.4 73.6C65.2 73.6 65 73.6 64.8 73.7C64.2 73.9 63.4 74.6 62.6 75.3L71.4 93.5L77.6 85L88.2 85.5L78.8 65.7C78.5 65.8 78.3 66 78.1 66.1ZM84.5 61.1C83.2 63.3 78.7 63.2 76.9 65C75.1 66.8 75.2 71.3 73 72.6C70.8 73.9 67 71.5 64.5 72.2C62.1 72.8 60 76.8 57.4 76.8C54.8 76.8 52.7 72.8 50.2 72.2C47.7 71.5 43.9 73.9 41.7 72.6C39.5 71.3 39.6 66.8 37.8 65C36 63.2 31.5 63.3 30.2 61.1C28.9 58.9 31.3 55.1 30.6 52.6C29.9 50.2 26 48.1 26 45.4C26 42.8 30 40.7 30.6 38.2C31.3 35.7 28.9 31.9 30.2 29.7C31.5 27.5 36 27.6 37.8 25.8C39.6 24 39.5 19.5 41.7 18.2C43.9 16.9 47.7 19.3 50.2 18.6C52.6 17.9 54.7 14 57.4 14C60 14 62.1 18 64.6 18.6C67.1 19.3 70.9 16.9 73.1 18.2C75.3 19.5 75.2 24 77 25.8C78.8 27.6 83.3 27.5 84.6 29.7C85.9 31.9 83.5 35.7 84.2 38.2C84.9 40.6 88.8 42.7 88.8 45.4C88.8 48 84.8 50.1 84.2 52.6C83.4 55.1 85.8 58.9 84.5 61.1ZM78.5 45.5C78.5 33.8 69 24.4 57.4 24.4C45.8 24.4 36.3 33.8 36.3 45.5C36.3 57.2 45.7 66.6 57.4 66.6C69.1 66.6 78.5 57.1 78.5 45.5Z"
                          fill="#9F7A34"
                        />
                        <path
                          d="M51.296 41.4839C51.416 40.6519 51.648 39.9239 51.992 39.2999C52.336 38.6679 52.764 38.1439 53.276 37.7279C53.796 37.3039 54.388 36.9879 55.052 36.7799C55.724 36.5639 56.444 36.4559 57.212 36.4559C58.012 36.4559 58.732 36.5719 59.372 36.8039C60.02 37.0279 60.572 37.3439 61.028 37.7519C61.484 38.1519 61.832 38.6239 62.072 39.1679C62.32 39.7119 62.444 40.2999 62.444 40.9319C62.444 41.4839 62.38 41.9719 62.252 42.3959C62.132 42.8119 61.956 43.1759 61.724 43.4879C61.492 43.7999 61.204 44.0639 60.86 44.2799C60.516 44.4959 60.128 44.6759 59.696 44.8199C60.736 45.1479 61.512 45.6479 62.024 46.3199C62.536 46.9919 62.792 47.8359 62.792 48.8519C62.792 49.7159 62.632 50.4799 62.312 51.1439C61.992 51.8079 61.56 52.3679 61.016 52.8239C60.472 53.2719 59.84 53.6119 59.12 53.8439C58.408 54.0759 57.652 54.1919 56.852 54.1919C55.98 54.1919 55.22 54.0919 54.572 53.8919C53.924 53.6919 53.36 53.3959 52.88 53.0039C52.4 52.6119 51.992 52.1319 51.656 51.5639C51.32 50.9959 51.032 50.3399 50.792 49.5959L52.1 49.0559C52.444 48.9119 52.764 48.8759 53.06 48.9479C53.364 49.0119 53.584 49.1719 53.72 49.4279C53.864 49.7079 54.02 49.9839 54.188 50.2559C54.364 50.5279 54.572 50.7719 54.812 50.9879C55.052 51.1959 55.332 51.3679 55.652 51.5039C55.98 51.6319 56.368 51.6959 56.816 51.6959C57.32 51.6959 57.76 51.6159 58.136 51.4559C58.512 51.2879 58.824 51.0719 59.072 50.8079C59.328 50.5439 59.516 50.2519 59.636 49.9319C59.764 49.6039 59.828 49.2759 59.828 48.9479C59.828 48.5319 59.784 48.1559 59.696 47.8199C59.608 47.4759 59.424 47.1839 59.144 46.9439C58.864 46.7039 58.46 46.5159 57.932 46.3799C57.412 46.2439 56.712 46.1759 55.832 46.1759V44.0639C56.56 44.0559 57.164 43.9879 57.644 43.8599C58.124 43.7319 58.504 43.5559 58.784 43.3319C59.072 43.0999 59.272 42.8239 59.384 42.5039C59.496 42.1839 59.552 41.8319 59.552 41.4479C59.552 40.6319 59.324 40.0119 58.868 39.5879C58.412 39.1639 57.804 38.9519 57.044 38.9519C56.692 38.9519 56.368 39.0039 56.072 39.1079C55.776 39.2039 55.508 39.3439 55.268 39.5279C55.036 39.7039 54.84 39.9119 54.68 40.1519C54.52 40.3919 54.4 40.6559 54.32 40.9439C54.184 41.3119 54.004 41.5559 53.78 41.6759C53.564 41.7959 53.256 41.8239 52.856 41.7599L51.296 41.4839Z"
                          fill="#222629"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4699_25049"
                          x="0"
                          y="0"
                          width="116"
                          height="116"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4699_25049"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4699_25049"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                )}
                {/* Here we add the position number for the rest of the countries */}
              </Grid>
              <Grid item xs={4}>
                <Avatar
                  src={country.flag || countries[index].flag}
                  className={`${classes.flag}  ${classes.sizeAvatar}  `}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5">{country.name}</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'right',
                    marginRight: '19.99%',
                  }}
                >
                  {`${country.planted.toLocaleString()} `}
                  <svg
                    width="12"
                    height="15"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.13563 12.418C11.1989 11.8238 13.5 9.29931 13.5 6.27516C13.5 2.80948 10.4779 0 6.75 0C3.02208 0 0 2.80948 0 6.27516C0 9.31195 2.32039 11.8449 5.40281 12.4253C5.39574 12.4819 5.39209 12.5395 5.39209 12.598V16.6224C5.39209 17.3833 6.00886 18 6.76969 18C7.53051 18 8.14728 17.3833 8.14728 16.6224V12.598C8.14728 12.537 8.14332 12.4769 8.13563 12.418Z"
                      fill="#86C232"
                    />
                  </svg>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      <Box className={classes.bottom}>.</Box>
    </>
  );
}

export default LeaderBoard;
