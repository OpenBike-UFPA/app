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

                const station = {
                      "name" : "teste",
                      "q_slots" : 5,
                      "address" : "rua do teste",
                      "cep" : 6664000,
                      "status" : "online",
                      "geo" : {"lat": 45, "lng": 50},
                      "bikes":
                          [
                              {
                                  "_id": 1,
                                  "bike": 5895
                              },
                              {
                                  "_id": 2,
                                  "bike": 548
                              },
                              {
                                  "_id": 3,
                                  "bike": null
                              },
                              {
                                  "_id": 4,
                                  "bike": null
                              },
                              {
                                  "_id": 5,
                                  "bike": null
                              }
                          ]
                };

                return(
                        <View>
                        <List containerStyle={{marginBottom: 20}}>
                          {
                            list.map((l, i) => (
                              <ListItemRoubado avatar_url={l.avatar_url}
                    key={i}
                    name={l.name}
                    subtitle={l.subtitle}
                     />
                            ))
                          }
                        </List>
                        </View>
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
