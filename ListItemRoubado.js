import React from 'react';
import { ListItem } from 'react-native-elements';

export default function (props) {
        return (<ListItem
          roundAvatar
          avatar={{uri: props.avatar_url}}
          title={props.name}
          titleStyle={{fontSize:20}}
          subtitle={props.subtitle}
          subtitleStyle={{fontSize:15}}
          rightTitle='Liberar'
          rightTitleStyle={{color: '#6da30d'}}
          rightIcon={{name:'send', color:'#6da30d'}}
          containerStyle={{height: 100}}
          avatarStyle={{height:80, width:80}}
          avatarContainerStyle={{height:80, width:80}}

        />)
}
