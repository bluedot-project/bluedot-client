import { Box, List, ListItem } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const PostsList = (props: Props) => {
  return (
    <Box as="section" border="2px solid crimson" w="90vw">
      <h2>장르별 아티스트 게시물</h2>
      <List>
        <ListItem>전체</ListItem>
        <ListItem>음악</ListItem>
        <ListItem>드쟌</ListItem>
      </List>
      <List>
        <ListItem>무한</ListItem>
        <ListItem>ß</ListItem>
        <ListItem>KK</ListItem>
      </List>
    </Box>
  );
};

export default PostsList;
