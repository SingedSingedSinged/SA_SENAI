import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { TouchableOpacity } from 'react-native';


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
                        style={styles.escolhaImagem1}
                          source={require('./assets/1.png')}
                        />
                      </View>


                      <View style={styles.escolhaFornecedor}>
                        <Image
                        style={styles.escolhaImagem2}
                        source={require('./assets/2.png')}
                        />
                      </View>
                         
              </View> 

                      <View style={styles.confirmarPerfil}>
                          <TouchableOpacity><Text>Confirmar</Text></TouchableOpacity>
                      </View>

            <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
    textAlign: 'center',
    height: '10%',
    width: '100%',
  },
  fontTitle: {
    color: "gray",
    fontSize: 35,
    textAlign: 'center',
  },tipoPerfil:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: "silver",
    width: '100%'
  },
  escolha: {
    flex: 4 ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    width: '50%',
    height: '100%'
  }, 
  fontEscolha:{
    color: "gray",
    fontSize: 25,
  },
  escolhaComprador: {
    backgroundColor: "green",
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  escolhaFornecedor: {
    backgroundColor: "aquamarine",
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  escolhaImagem1:{
    height: '100%',
    width: '100%',
  },
  escolhaImagem2:{
    height: '100%',
    width: '100%',
  },
  confirmarPerfil: {
    flex: 1,
  }
}); 
