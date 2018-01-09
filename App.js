import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {Station} from './Station';
import { List } from 'react-native-elements';
import ListItemRoubado from './ListItemRoubado'

export default class App extends React.Component {
        componentDidMonth() {
                fetch();

        }
        render() {
                const list = [
                                  {
                                    name: 'Amy Farha',
                                    avatar_url: 'https://www.w3schools.com/w3css/img_avatar3.png',
                                    subtitle: 'Vice President'
                                  },
                                  {
                                    name: 'Chris Jackson',
                                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                    subtitle: 'Vice Chairman'
                                  }
                          ];
                return(
                        <List containerStyle={{marginBottom: 20}}>
                          {
                            list.map((l, i) => (
                              <ListItemRoubado avatar_url={l.avatar_url}
                    key={i}
                    name={l.name} />
                            ))
                          }
                        </List>
                );
        }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 50,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
