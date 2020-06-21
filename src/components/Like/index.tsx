import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Button} from './styles';
import {like, dislike, selectLike} from './likeSlice';
import {useSelector, useDispatch} from 'react-redux';

const Like: React.FC = () => {
  const WHITE = '#fff';
  const ORANGE = '#ff9000';
  const [likeButtonColor, setLikeButtonColor] = useState(WHITE);
  const [dislikeButtonColor, setDislikeButtonColor] = useState(WHITE);
  const likeStatus = useSelector(selectLike);
  const dispatch = useDispatch();

  useEffect(() => {
    if (likeStatus === null) {
      setLikeButtonColor(WHITE);
      setDislikeButtonColor(WHITE);
    }
    if (likeStatus === 'like') {
      setLikeButtonColor(ORANGE);
      setDislikeButtonColor(WHITE);
    }
    if (likeStatus === 'dislike') {
      setLikeButtonColor(WHITE);
      setDislikeButtonColor(ORANGE);
    }
  }, [likeStatus]);

  return (
    <Container>
      <Button onPress={() => dispatch(like())}>
        <Icon name="thumb-up" size={36} color={likeButtonColor} />
      </Button>
      <Button onPress={() => dispatch(dislike())}>
        <Icon name="thumb-down" size={36} color={dislikeButtonColor} />
      </Button>
    </Container>
  );
};
export default Like;
