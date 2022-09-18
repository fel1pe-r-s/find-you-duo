import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props{
  label:string,
  value:string,
  colorValues?: ColorValue
}

export function DuoInfor({label, value, colorValues = THEME.COLORS.TEXT}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text 
      style={[styles.value, {color: colorValues}]}
      numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}