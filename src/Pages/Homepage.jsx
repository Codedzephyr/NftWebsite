import React from 'react';
import { Box } from '@chakra-ui/react';
import Headers from './../Components/Headers';
import Title from './../Components/Title';
import Liveauctions from '../Components/Liveauctions.jsx';
import TopSeller from '../Components/TopSeller';

const Homepage = () => {
  return (
    <Box backgroundColor="#14141F">
      <Box
        position="absolute"
        right="0px"
        top="-32px"
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'block',
        }}
      >
        <svg
          width="328"
          height="317"
          viewBox="0 0 328 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_31_1276)">
            <ellipse
              rx="88.9941"
              ry="55.0654"
              transform="matrix(-1 0 0 1 239.006 111.065)"
              fill="url(#paint0_linear_31_1276)"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_31_1276"
              x="0.0118408"
              y="-94"
              width="477.988"
              height="410.131"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_31_1276"
              />
            </filter>
            <linearGradient
              id="paint0_linear_31_1276"
              x1="52.8805"
              y1="26.3356"
              x2="106.043"
              y2="120.569"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2B1867" />
              <stop offset="0.487063" stopColor="#3F298D" />
              <stop offset="0.781641" stopColor="#453D9A" />
              <stop offset="1" stopColor="#5D6AA7" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
      <Box
        position="absolute"
        top="-67px"
        left="-159px"
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'block',
        }}
      >
        <svg
          width="679"
          height="599"
          viewBox="0 0 679 599"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_31_1274)">
            <ellipse
              cx="264.458"
              cy="285.048"
              rx="264.458"
              ry="163.634"
              fill="url(#paint0_radial_31_1274)"
              fillOpacity="0.24"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_31_1274"
              x="-150"
              y="-28.5855"
              width="828.915"
              height="627.268"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_31_1274"
              />
            </filter>
            <radialGradient
              id="paint0_radial_31_1274"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(305.659 300.463) rotate(34.1621) scale(179.488 167.508)"
            >
              <stop stopColor="#2B1867" />
              <stop offset="0.487063" stopColor="#382383" />
              <stop offset="0.781641" stopColor="#452896" />
              <stop offset="1" stopColor="#76248E" />
            </radialGradient>
          </defs>
        </svg>
      </Box>
      <Headers />
      <Title />
      <Liveauctions />
      <Box h="100px"></Box>
      <TopSeller />
    </Box>
  );
};

export default Homepage;
