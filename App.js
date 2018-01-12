import React from 'react';
import { StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { List, Card, Tile } from 'react-native-elements';
import ListItemRoubado from './ListItemRoubado'

export default class App extends React.Component {

        componentDidMount = () => {
              fetch('https://jsonplaceholder.typicode.com/posts/1', {
                 method: 'GET'
              })
              .then((response) => response.json())
              .then((responseJson) => {
                 console.log(responseJson);
                 this.setState({
                    data: responseJson,
                    isLoad: true
                 })
              })
              .catch((error)=> {
                 console.error(error);
              });
           }

           LendingBike() {
                //    fetch('https://mywebsite.com/endpoint/', {
                //           method: 'POST',
                //           headers: {
                //             'Accept': 'application/json',
                //             'Content-Type': 'application/json',
                //           },
                //           body: JSON.stringify({
                //             firstParam: 'yourValue',
                //             secondParam: 'yourOtherValue',
                //           })
                //   });
                console.log("Ta chamando a função");
           }

        render() {
                state = {
                        data: {},
                        isLoad: false
                }

                const station = {
                      "name" : "ITEC",
                      "q_slots" : 5,
                      "address" : "Em frente ao Sorvete, no terceiro portão da UFPA",
                      "cep" : 6664000,
                      "status" : "online",
                      "geo" : {"lat": 45, "lng": 50},
                      "bikes":
                          [
                              {
                                  "_id": 1,
                                  "bike": "5895"
                              },
                              {
                                  "_id": 2,
                                  "bike": "548"
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
                        <ScrollView>

                        <Tile
                          imageSrc={require('./station.jpg')}
                          title={"Estação " +station.name}
                          titleStyle={{textAlign: 'center'}}
                          contentContainerStyle={{height: 70}}
                        >
                        </Tile>

                        <Text style={{marginLeft: 15, fontSize: 15}}>
                        Endereço: {station.address}
                        </Text>
                        <Text style={{marginLeft: 15, marginBottom: 10, fontSize: 15}}>
                        Quantidade de Bicicletas: {station.q_slots}
                        </Text>
                        <Text style={{marginLeft: 15, marginBottom: 10, fontSize: 15}}>
                        Status: {station.status + " AQUI A MÁGICA "+state.data.body}
                        </Text>

                        <List>
                        {
                            station.bikes.map((bike, i) => (
                                    <ListItemRoubado
                                    key={i}
                                    name={bike._id}
                                    subtitle={bike.bike!=null ? 'Disponível' : 'Indisponível'}
                                    color= {bike.bike!=null ? 'green' : 'red'}
                                    disable={bike.bike!=null ? false : true}
                                    id_bike={bike.bike}
                                    id_user='1234567'
                                    id_station='1234567'
                                    />
                            ))
                          }
                        </List>
                        </ScrollView>
                );
        }
}

// styles = StyleSheet.create({
//   subtitleView: {
//     flexDirection: 'row',
//     paddingLeft: 10,
//     paddingTop: 5
//   },
//   ratingImage: {
//     height: 50,
//     width: 100
//   },
//   ratingText: {
//     paddingLeft: 10,
//     color: 'grey'
//   }
// })
