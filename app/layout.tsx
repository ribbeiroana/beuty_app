import { Stack } from 'expo-router'
// import { useFonts } from 'expo-font'
// import * as SplashScreen from 'expo-splash-screen'
// import { useEffect } from 'react'
import App from './index';

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
// //     const [loaded, error] = useFonts({
// //         'SOLARSPACEDEMO-Regular': require('@/assets/fonts/SOLARSPACEDEMO-Regular.otf'),
// //         SPACEMISSION: require('@/assets/fonts/SPACEMISSION.otf'),
// //     })

// //     useEffect(() => {
// //         if (loaded || error) {
// //             SplashScreen.hideAsync()
// //         }
// //     }, [loaded, error])

// //     if (!loaded && !error) {
// //         return null
// //     }

    return (
        // <Stack screenOptions={{ headerShown: false }}>
        //     <Stack.Screen name="index" />
        // </Stack>
        <Stack>
        <App/>
        </Stack>
    )
}
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Salao from '@/pages/Salao'; // Ajuste para o caminho correto
// import OutraPagina from '@/pages/Perfil'; // Ajuste para o caminho correto

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Salao">
//         <Stack.Screen name="Salao" component={Salao} />
//         <Stack.Screen name="OutraPagina" component={OutraPagina} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
