import styled from 'styled-components/native';

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const MovieImage = styled.Image`
  width: 100%;
  height: 500px;
  background: #3e3b47;
  margin: 15px 0;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 32px;
  margin-top: 40px;
`;

export const PlotLocal = styled.Text`
  color: white;
  font-size: 18px;
  text-align: justify;
  margin-bottom: 40px;
`;

export const Like = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 25px;
  margin: 0 10px;
  border-radius: 8px;
  border: 1px solid #111;
`;
