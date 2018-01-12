import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import { Alert } from 'react-native';

export default function (props) {
        return (<ListItem
          roundAvatar
          //avatar={{uri: props.avatar_url}}
          disabled={false}
          leftIcon={<Icon name='bike' type='material-community' color={props.color} size={70} />}
          leftIconUnderlayColor='red'
          title={"Bike "+props.name}
          titleStyle={{fontSize:20, marginLeft:30}}
          subtitle={props.subtitle}
          subtitleStyle={{fontSize:15,  marginLeft:30}}
          rightTitle='Liberar'
          rightTitleStyle={{color: '#6da30d'}}
          rightIcon={{name:'send', color:'#6da30d'}}
          disabled={props.disable}
          onPress={lendingConf = () => {
                  Alert.alert('Empréstimo',
                   'Você confirma o empréstimo da bicicleta?',
                   [
                       {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                       {text: 'Emprestar', onPress: () =>
                       fetch('http://192.168.1.3:3000/loans/', {
                         method: 'POST',
                         headers: {
                           'Accept': 'application/json',
                           'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                        	"type": "empréstimo",
                          	"id_user": props.id_user,
                          	"id_station": props.id_station,
                          	"id_bike": props.id_bike,
                          	"n_slot": props.name
                            })
                        })

                        },
                   ]
                    )
          }}
        />)
}
