import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Estadisticas } from '../Estadisticas/Estadisticas';
import { ReservaCitasScreen } from '../ReservaCitas/ReservaCitasScreen';
import { PerfilUsuario } from '../Usuario/PerfilUsuario';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
        ta = {{
            activeTintColor: '#e91e63',
        }}
    >
      <Tab.Screen name="Reserva de Citas" component={ReservaCitasScreen} />
      <Tab.Screen name="Estadisticas" component={Estadisticas} />
      <Tab.Screen name="Perfil Usuario" component={PerfilUsuario} />
    </Tab.Navigator>
  );
}