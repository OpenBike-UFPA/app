import React from "react";
import { StyleSheet, Text, ScrollView, Alert, View, StatusBar } from "react-native";
import { List, Card, Tile } from "react-native-elements";
import ListItemRoubado from "./ListItemRoubado";
import { Constants } from "expo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        station: {},
        body: ""
      },
      isLoad: false
    };
  }

  componentDidMount() {
    fetch("http://200.239.93.85:3000/station/", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
          isLoad: true
        });
      })
      .catch(error => {
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
    // const station = {
    //   name: "ITEC",
    //   q_slots: 5,
    //   address: "Em frente ao Sorvete, no terceiro portão da UFPA",
    //   cep: 6664000,
    //   status: "online",
    //   geo: { lat: 45, lng: 50 },
    //   bikes: [
    //     {
    //       _id: 1,
    //       bike: "5895"
    //     },
    //     {
    //       _id: 2,
    //       bike: "548"
    //     },
    //     {
    //       _id: 3,
    //       bike: null
    //     },
    //     {
    //       _id: 4,
    //       bike: null
    //     },
    //     {
    //       _id: 5,
    //       bike: null
    //     }
    //   ]
    // };

    // const { isLoad, data: { station, body } } = this.state;
    const { isLoad, data: { station } } = this.state;

    return (
      <ScrollView>
        <StatusBar backgroundColor="red" barStyle="light-content" />

        {isLoad ? (
          <View>
            <Tile
              imageSrc={require("./station.jpg")}
              title={"Estação " + station.name}
              titleStyle={{ textAlign: "center" }}
              contentContainerStyle={{ height: 70 }}
            />

            <Text style={{ marginLeft: 15, fontSize: 15 }}>
              Endereço: {station.address}
            </Text>
            <Text style={{ marginLeft: 15, marginBottom: 10, fontSize: 15 }}>
              Quantidade de Bicicletas: {station.q_slots}
            </Text>
            <Text style={{ marginLeft: 15, marginBottom: 10, fontSize: 15 }}>
              Status: {station.status}
            </Text>
            <List>
              {station.bikes.map((bike, i) => (
                <ListItemRoubado
                  key={i}
                  name={bike._id}
                  subtitle={bike.bike != null ? "Disponível" : "Indisponível"}
                  color={bike.bike != null ? "green" : "red"}
                  disable={bike.bike != null ? false : true}
                  id_bike={bike.bike}
                  id_user="1234567" //PREENCHER INFO DO USUÁRIO E ESTAÇÂO AQUI
                  id_station="1234567"
                />
              ))}
            </List>
          </View>
        ) : (
          <Text> LOADING... </Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight
  }

  // rest of the styles
});

export default App;
