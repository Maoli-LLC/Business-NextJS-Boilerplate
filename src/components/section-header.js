import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="h1"
        sx={{
          variant: 'sectionHeader.Title',
          color: isWhite ? 'white' : 'text_special',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h1"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'Heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
