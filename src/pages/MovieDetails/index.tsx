import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  MovieImage,
  Title,
  PlotLocal,
  Like,
  Scroll,
  Button,
} from './styles';

import api from '../../services/api';
import filme from '../../services/filme';
import {useRoute} from '@react-navigation/native';
class Provider {
  id: string = '';
  title: string = '';
  originalTitle: string = '';
  fullTitle: string = '';
  type: string = '';
  year: string = '';
  image: string =
    'https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/loading_throbber_time_loader-256.png';
  releaseDate: string = '';
  runtimeMins: number = 0;
  runtimeStr: string = '';
  plot: string = '';
  plotLocal: string = '';
  //TODO FAlta mapear o restante dos atributos
}

interface RouteParams {
  providerId: string;
}

const MovieDetails: React.FC = () => {
  const [provider, setProvider] = useState(new Provider());
  const [likeButtonColor, setLikeButtonColor] = useState('#fff');
  const [dislikeButtonColor, setDislikeButtonColor] = useState('#fff');
  const [likeStatus, setLikeStatus] = useState('');

  const route = useRoute();

  const {providerId} = route.params as RouteParams;

  useEffect(() => {
    // api.get(`/Title/k_qpl9kJN7/${providerId}`).then((response) => {
    //   setProvider(response.data);
    // });
    setProvider(filme);
  }, [providerId]);

  const handleLike = (action: string) => {
    likeStatus === action ? setLikeStatus('') : setLikeStatus(action);
  };

  useEffect(() => {
    if (likeStatus === '') {
      setLikeButtonColor('#fff');
      setDislikeButtonColor('#fff');
    }
    if (likeStatus === 'like') {
      setLikeButtonColor('#ff9000');
      setDislikeButtonColor('#fff');
    }
    if (likeStatus === 'dislike') {
      setLikeButtonColor('#fff');
      setDislikeButtonColor('#ff9000');
    }
  }, [likeStatus]);

  return (
    <Scroll>
      <Container>
        <Title>{provider.title}</Title>
        <MovieImage source={{uri: provider.image}} />
        <Like>
          <Button onPress={() => handleLike('like')}>
            <Icon name="thumb-up" size={36} color={likeButtonColor} />
          </Button>
          <Button onPress={() => handleLike('dislike')}>
            <Icon name="thumb-down" size={36} color={dislikeButtonColor} />
          </Button>
        </Like>
        <PlotLocal>{provider.plotLocal}</PlotLocal>
      </Container>
    </Scroll>
  );
};
export default MovieDetails;
