import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

/* const[perfil, setPerfil] = useState(1); */

function selecionar1(){
  alert('Você escolheu comprador!')
}
function selecionar2(){
  alert('Você escolheu fornecedor!')
}


export default function App() {
  return (
    
  <View style={styles.container}>
    <View style={styles.title}> 
          <Text style={styles.fontTitle}>Seja Bem-Vindo ao MyBo! </Text>
    </View>

    <View style={styles.tipoPerfil}>
      <Text style={styles.fontEscolha}>
         Escolha seu perfil:
      </Text>
    </View>
              <View style={styles.escolha}>     

                      <View style={styles.escolhaComprador}>
                        
                        <Image
                        onClick={()=> selecionar1() }
                        style={styles.escolhaImagem1}
                        source={require('./assets/1.png')}
                        />
                         <Text style={styles.TextoComprador}> QUERO  SER COMPRADOR!</Text>  
                        
                      </View>


                      <View style={styles.escolhaFornecedor}>
                        <Image
                        onClick={()=> selecionar2() }
                        style={styles.escolhaImagem2}
                        source={require('./assets/2.png')}
                        />
                        <Text style={styles.TextoFornecedor}>QUERO SER FORNECEDOR!</Text>
                      </View>
                         
              </View> 

                      <View style={styles.confirmarPerfil}>
                          <TouchableOpacity style={styles.botaoConfirmar}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
                      </View>

            <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#63D5FF'
  },
  title: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '10%',
    width: '100%',
  },
  fontTitle: {
    color: "#6D6767",
    fontSize: 35,
    textAlign: 'center',
  },tipoPerfil:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%'
  },
  escolha: {
    flex: 4 ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%'
  }, 
  fontEscolha:{
    color: "#6D6767",
    fontSize: 25,
  },
  escolhaComprador: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  escolhaFornecedor: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  escolhaImagem1:{
    height: '100%',
    width: '100%',
    marginRight: '10%',
    marginTop: '15%'
  },
  escolhaImagem2:{
    height: '100%',
    width: '100%',
    marginRight: '15%',
    marginTop: '6%'
  },
  confirmarPerfil: {
    flex: 2,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoConfirmar: {
    fontSize: 35,
    textAlign: 'center',
    marginRight: '2%'
  },
  botaoConfirmar: {
    width: '60%',
    height: '35%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: '-20%',
    alignItems: 'center',
  },
  TextoComprador: {
    fontSize: 15,
    fontFamily: 'bold',
    textAlign: 'center',
    marginBottom: '70%'
  },
  TextoFornecedor: {
    fontSize: 15,
    fontFamily: 'bold',
    textAlign: 'center',
    marginBottom: '61%'
  }
}); 
