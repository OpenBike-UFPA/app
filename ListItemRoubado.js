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
                  Alert.alert('You need to...')
          }}
        />)
}
