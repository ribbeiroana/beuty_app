import { StyleSheet, Text, View } from 'react-native';
import FotosSalao from '../../components/FotosSalao';
import InforSalao from '../../components/InforSalao';
import Menu from '../../components/Menu';

export default function Salao() {
  return (
      <View>
      <FotosSalao/>
      <InforSalao/>
      <Menu/>
      </View>
  )
}
