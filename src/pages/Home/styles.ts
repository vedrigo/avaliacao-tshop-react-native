import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {Provider} from './index';

export const Container = styled.View`
  flex: 1;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
`;

export const ProviderContainer = styled(RectButton)`
  margin: 20px 0;
  flex-direction: row;
  align-items: center;
`;

export const ProviderThumbnail = styled.Image`
  width: 136px;
  height: 192px;
  background: #3e3b47;
`;

export const ProviderInfo = styled.View`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #3e3b47;
  flex: 1;
  padding: 20px;
`;

export const ProviderName = styled.Text`
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderMetaText = styled.Text`
  color: #999591;
`;
