import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {View,TextInput,TouchableOpacity, Text, Image } from 'react-native'
import estilo from './src/estilos';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style = {estilo.container}>
      <LinearGradient
      colors ={['white', '#2a5df2']}
      style = {estilo.gradientBackground}
      >
    </LinearGradient>

    <Image source = {{uri : 'https://t.ctcdn.com.br/QeJlxSm6qkivX-Sro9SP3Pyen_Q=/1400x788/smart/i575891.jpeg'}}
        style ={estilo.image}
        />
    <View style = {estilo.box}>

      <View style ={estilo.viewIcons}>
      <Feather name="user" size={24} color="black" />
      <TextInput style = {estilo.input} placeholder='e-mail' />
      </View>

      <View style ={estilo.viewIcons}>
      <Ionicons name="key" size={24} color="black" />
      <TextInput style = {estilo.input} placeholder='senha' />
      </View>
      <TouchableOpacity style = {{width:'80%'}}>
        <LinearGradient
        colors = {['green', 'brown']}
        style = {estilo.button}
        >

          <Text style={estilo.text}>Entrar</Text>

        </LinearGradient>
        

      </TouchableOpacity>

    </View>

    </View>
  );
}

