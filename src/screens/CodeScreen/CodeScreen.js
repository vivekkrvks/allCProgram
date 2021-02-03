
import React, {useState, useEffect} from 'react'
import HTML from "react-native-render-html";
import { StyleSheet, ScrollView,useWindowDimensions} from 'react-native'
import { Card,CardItem, Content,  } from 'native-base';
const CodeScreen = ({ navigation,route }) => {
  const list1 = route.params.value
 
// fileName.pageName
 const htmlContent = list1;
const contentWidth = useWindowDimensions().width;
return (
  <ScrollView style={{ flex: 1,marginLeft:2,marginRight:2 }}>
            <Content>
          <Card>
            <CardItem>
            <HTML source={{ html: htmlContent }} contentWidth={contentWidth} />

            </CardItem>
          </Card>
        </Content>
  </ScrollView>
);
  
}
export default CodeScreen
