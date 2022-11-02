import * as React from 'react';
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'center',
        }}>
        Campanha de saúde contra doenças e as cores dos meses do ano.
        <p/>
        Este aplicativo tem o objetivo de conscientizar a população sobre os perigos causados por algumas doenças.
      </Text>
       <Image style={{width:300, height:200}} source={require('./assets/img1.jpg')} />
          
        />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Janeiro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        Janeiro Branco é um alerta sobre a saúde mental. A campanha visa demonstrar a importância que cuidar da saúde não significa apenas cuidar da saúde do corpo. Cuidar da mente também é fundamental para o total bem-estar e equilíbrio entre corpo e mente.
      </Text>
      <Image style={{width:300, height:200}} source={require('./assets/Janeiro.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Fevereiro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        Fevereiro Roxo é o mês de conscientização sobre as doenças: lúpus, fibromialgia e mal de alzheimer. O Fevereiro Laranja, por sua vez, conscientiza sobre a leucemia.

      </Text>
      <Image style={{width:300, height:200}} source={require('./assets/fevereiro.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}


function Março({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        O Março Azul traz o debate sobre a prevenção ao câncer colorretal.
 

      </Text>
      <Image style={{width:300, height:200}} source={require('./assets/marco.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Abril({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        Abril Verde significa a conscientização sobre a importância da segurança no trabalho. O mês também é chamado de Abril Azul para trazer o debate sobre o autismo, que tem a data 02.04 como o Dia Mundial da Conscientização do Autismo.


      </Text>
       <Image style={{width:300, height:300}} source={require('./assets/abril.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Maio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        O Maio Amarelo reacende o debate sobre a prevenção de acidentes de trânsito. Já o Maio Vermelho tem por objetivo prevenir a hepatite.



      </Text>
       <Image style={{width:300, height:200}} source={require('./assets/maio.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Junho({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        Vermelho é a cor comemorativa do mês de junho sobre a importância da doação de sangue, que tem a data 14.06 como o Dia Mundial do Doador de Sangue. E o Junho Laranja é voltado para a conscientização sobre a anemia e leucemia.
 



      </Text>
       <Image style={{width:300, height:200}} source={require('./assets/junho.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Julho({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        O Julho Amarelo traz à tona a conscientização sobre as hepatites virais e também sobre o câncer ósseo.

 



      </Text>
       <Image style={{width:300, height:200}} source={require('./assets/julho.png')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Agosto({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        O Agosto Dourado é o mês de informação sobre o aleitamento materno, que, inclusive, tem os dias entre 01 a 07 de agosto como a Semana Mundial da Amamentação.

 



      </Text>
       <Image style={{width:300, height:200}} source={require('./assets/agosto.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Setembro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
       Verde é a cor do mês de setembro para a conscientização sobre a doação de órgãos e prevenção ao câncer de intestino. Neste mês, a data 27 de setembro é o Dia Nacional de Doação de Órgãos e Tecidos. Outra cor para o mês de setembro é o amarelo, que tem como objetivo a prevenção ao suicídio. Setembro também recebe a cor vermelha para a conscientização sobre a prevenção das doenças cardiovasculares.

 



      </Text>
       <Image style={{width:200, height:200}} source={require('./setembro.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Outubro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
       Sendo o mês mais divulgado e conhecido por todos, o Outubro Rosa é dedicado à conscientização sobre o câncer de mama, foi criado nos Estados Unidos na década de 1990.


 



      </Text>
       <Image style={{width:300, height:200}} source={require('./assets/outubro.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Novembro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
       O mês de novembro também é bastante conhecido por ser o mês azul, de combate ao câncer de próstata e ao diabetes. O mês também tem a cor dourada, em referência à conscientização sobre o câncer infanto-juvenil.
 



 



      </Text>
       <Image style={{width:300, height:300}} source={require('./assets/novembro.png')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}

function Dezembro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 24, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
       O mês de dezembro também tem mais de uma cor, o vermelho e o laranja. O Dezembro Vermelho ressalta a importância da prevenção contra a AIDS, e o Dezembro Laranja traz o debate sobre o combate ao câncer de pele.

 



 



      </Text>
       <Image style={{width:400, height:200}} source={require('./assets/dezembro.jpg')} />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}



const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Janeiro" component={Janeiro} />
        <Drawer.Screen name="Fevereiro" component={Fevereiro} />
        <Drawer.Screen name="Março" component={Março} />
        <Drawer.Screen name="Abril" component={Abril} />
        <Drawer.Screen name="Maio" component={Maio} />
        <Drawer.Screen name="Junho" component={Junho} />
        <Drawer.Screen name="Julho" component={Julho} />
        <Drawer.Screen name="Agosto" component={Agosto} />
        <Drawer.Screen name="Setembro" component={Setembro} />
        <Drawer.Screen name="Outubro" component={Outubro} />
        <Drawer.Screen name="Novembro" component={Novembro} />
        <Drawer.Screen name="Dezembro" component={Dezembro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1, alignItems: 'center', justifyContent: 'center'
}
})

export default App;