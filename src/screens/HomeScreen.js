import React, {useState, useEffect} from 'react'

import { StyleSheet, ScrollView} from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
const HomeScreen = ({ navigation, }) => {
    const list1 = [
        {
            id:1,
            name:"i am first",
            page:"first"
        },
        {
            id:2,
            name:"i am second",
            page:"second"
        }
    ]
    const [list2, setlist2] = useState(list1)

    return (
        <Container contentContainerStyle={styles.container}>

  

                {list2.length == 0 ? (
                <Container style={styles.container}>
                    <H1 style={styles.heading}>
                        Watchlist is empty.
                    </H1>
                </Container>
            ) : (
                <Content>
                <List>

           

                   {list2.map(info =>(
                     <ListItem
                     key = {info.id}
                     onPress={()=>navigation.navigate('Index',
                     {
                         value:info,
                         value1: info.page                
                    })}
                    >
     <Left>
     <Text>{info.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

                     
                    </ListItem>  
                   ))}
                </List>
                </Content>
            )}
   
      
        </Container>
      );
  
}
export default HomeScreen

const styles = StyleSheet.create({
    emptyContainer: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginVertical: 15,
      marginHorizontal: 5,
    },
    actionButton: {
      marginLeft: 5,
    },
    seasonName: {
      color: '#fdcb9e',
      textAlign: 'justify',
    },
    listItem: {
      marginLeft: 0,
      marginBottom: 20,
    },
  });