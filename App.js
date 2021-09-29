import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { Header, Input } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translateLanguage, setTranslateLanguage] = useState("es");
  const [result, setResult] = useState("")
  const [text, setText] = useState("")
  const [langList, setLangList] = useState([])
  useEffect(() => {
    async function getLang() {
      let res = await axios.get(`https://libretranslate.de//languages`)
      const transformed = res.data.map(({ code, name }) => ({ label: name, value: code }));
      setLangList(transformed)
    }
    getLang()
  }, [])
  const translate = async () => {
    let payLoad = {
      "q": text,
      "source": selectedLanguage,
      "target": translateLanguage
    }
    console.log(payLoad)
    let res = await axios.post(`https://libretranslate.de/translate`, payLoad)
    setResult(res.data.translatedText)
    console.log(res.data.translatedText)
  }
  const refresh = () => {
    setText("")
    setResult("")
  }
  return (
    <SafeAreaProvider>
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'TRANSLATER', style: { color: '#fff' } }}
          rightComponent={{ icon: 'refresh', color: '#fff', onPress: refresh }}
        />
        <View style={{
          flex: 1,
          margin: 10,
          paddingTop: 20,
          padding: 10,
          alignItems: "center"
        }}>

          <RNPickerSelect
            value={selectedLanguage}
            onValueChange={(value) => setSelectedLanguage(value)}
            items={langList}
          />
        </View>
        <Input
          placeholder='Enter the word or sentence to traslate'
          value={text}
          onChangeText={setText}
        />
        <View style={{
          flex: 1,
          marginHorizontal: 10,
          paddingTop: 20,
          padding: 10,
          alignItems: "center"
        }}>
          <RNPickerSelect
            onValueChange={(value) => setTranslateLanguage(value)}
            items={langList}
            value={translateLanguage}
          />

          <Button
            title="Translate"
            onPress={() => {
              translate()
            }}
          />
        </View>
        <Input
          placeholder='Enter the word or sentence to traslate'
          value={result}

        />

      </ScrollView>
    </SafeAreaProvider>
  )
}
export default App;
