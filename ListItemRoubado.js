import React from 'react';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default function (props) {
        return (<ListItem
          roundAvatar
          //avatar={{uri: props.avatar_url}}
          leftIcon={<Icon name='bike' type='material-community' color='green' size={70} />}
          leftIconUnderlayColor='red'
          title={"Bike "+props.name}
          titleStyle={{fontSize:20}}
          subtitle={props.subtitle}
          subtitleStyle={{fontSize:15}}
          rightTitle='Liberar'
          rightTitleStyle={{color: '#6da30d'}}
          rightIcon={{name:'send', color:'#6da30d'}}
        />)
}
