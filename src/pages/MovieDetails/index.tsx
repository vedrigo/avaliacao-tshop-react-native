import React, {useEffect, useState} from 'react';
import {Container, MovieImage, Title, PlotLocal, Scroll} from './styles';

import api from '../../services/api';
import filme from '../../services/filme';
import {useRoute} from '@react-navigation/native';
import Like from '../../components/Like';
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

  const route = useRoute();

  const {providerId} = route.params as RouteParams;

  useEffect(() => {
    // api.get(`/Title/k_qpl9kJN7/${providerId}`).then((response) => {
    //   setProvider(response.data);
    // });
    setProvider(filme);
  }, [providerId]);

  return (
    <Scroll>
      <Container>
        <Title>{provider.title}</Title>
        <MovieImage source={{uri: provider.image}} />
        <Like />
        <PlotLocal>{provider.plotLocal}</PlotLocal>
      </Container>
    </Scroll>
  );
};
export default MovieDetails;
