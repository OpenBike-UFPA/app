import React from 'react';
import { ListItem } from 'react-native-elements';

export default function (props) {
        return (<ListItem
          roundAvatar
          avatar={{uri: props.avatar_url}}
          title={props.name}
          containerStyle={{height: 128}}
          avatarStyle={{height:80, width:80}}
          avatarContainerStyle={{height:80, width:80}}

        />)
}
