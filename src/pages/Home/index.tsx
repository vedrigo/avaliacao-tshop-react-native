import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderThumbnail,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

export interface Provider {
  id: string;
  rank: number;
  rankUpDown: number;
  title: string;
  fullTitle: string;
  year: number;
  image: string;
  crew: string;
  imDbRating: number;
  imDbRatingCount: number;
}

const Home: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const {navigate} = useNavigation();

  useEffect(() => {
    api.get('/MostPopularMovies/k_qpl9kJN7').then((response) => {
      setProviders(response.data.items);
    });
  }, []);

  const navigateToMovieDetails = useCallback(
    (providerId: string) => {
      navigate('MovieDetails', {providerId});
    },
    [navigate],
  );

  return (
    <Container>
      <ProvidersList
        data={providers}
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={
          <ProvidersListTitle>Top Filmes Populares</ProvidersListTitle>
        }
        renderItem={({item: provider}) => (
          <ProviderContainer
            onPress={() => navigateToMovieDetails(provider.id)}>
            <ProviderThumbnail source={{uri: provider.image}} />

            <ProviderInfo>
              <ProviderName>{provider.title}</ProviderName>

              <ProviderMeta>
                <ProviderMetaText>
                  Posição: {provider.rank} | Ano: {provider.year}
                </ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="star" size={18} color="#ff9000" />
                <ProviderMetaText>
                  {provider.imDbRating} | Votos: {provider.imDbRatingCount}
                </ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Home;
