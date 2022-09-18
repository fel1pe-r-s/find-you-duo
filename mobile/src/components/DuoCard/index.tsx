import { View, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";
import { DuoInfor } from "../DuoInfor";
import { GameController } from "phosphor-react-native";

import { styles } from "./styles";

export interface DuoCardProps {
  id: string;
  name: string;
  hourEnd: string;
  hourStar: string;
  weekDays: string[];
  yearsPlaing: number;
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfor label="Nome" value={data.name} />
      <DuoInfor label="Tempo de Jogo" value={`${data.yearsPlaing} anos`} />
      <DuoInfor
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStar} - ${data.hourEnd}`}
      />
      <DuoInfor
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValues={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}></Text>
      </TouchableOpacity>
    </View>
  );
}
