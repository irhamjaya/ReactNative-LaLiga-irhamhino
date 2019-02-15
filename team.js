import React, { Component } from 'react'
import { Container, Header, Content, Footer, Button, Icon, Text, Item, Input, List, ListItem, Body, Left, Thumbnail, } from 'native-base'
import axios from 'axios';
import { Alert } from 'react-native'
import { ScrollView } from 'react-native'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            nama: '',
            klub: []
        }
    }
    static navigationOptions = {
        title: 'La liga'
    }
    componentDidMount() {
        this.setState({
            isLoading: 'https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif'
        });

        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain').then((x) => {
            this.setState({
                klub: x.data.teams,
                isLoading: ''
            });
        });
    }
    // getapi = () => {
    //     var url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.nama}`
    //     axios.get(url)
    //         .then((res) => {
    //             console.log(res)
    //             if (res) {
    //                 this.setState({
    //                     players: res.data.player
    //                 })
    //             } else {
    //                 Alert.alert('Data Not Found Bro ')
    //             }
    //         })
    //         .catch((err) => {
    //             Alert.alert('eror')
    //             console.log(err)
    //         })
    // }

    render() {
        var dataKlub = this.state.klub.map((item, index) => {
            var klubId = item.idTeam;
            var klubNama = item.strTeam;
            var klubWeb = item.strWebsite;
            var klubLogo = item.strTeamBadge
            return (
                <ListItem key={index} avatar onPress={() => {
                    this.props.navigation.navigate('HalDua', {
                        klubId: klubId,
                        klubNama: klubNama
                    })
                }}>
                    <Left>
                        <Thumbnail source={{ uri: klubLogo }} />
                    </Left>
                    <Body>
                        <Text>{klubNama}</Text>
                        <Text note>{klubWeb}</Text>
                    </Body>

                </ListItem>
            )
        })
        return (
            <Container>
                <Header>
                    <Item>
                    </Item>
                </Header>
                <Content>
                    <ScrollView>
                        <List>
                            {dataKlub}
                        </List>
                    </ScrollView>
                </Content>
                <Footer></Footer>
            </Container >
        )
    }
}