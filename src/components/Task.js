import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text} from "react-native" //import do css, view e text

import moment from "moment" // uma biblioteca que trabalha com datas e horas
import 'moment/locale/pt-br' //importa os padrões de horas no pt-br
//props: componente q monta as tasks
export default props =>{ //modelo de como os dados ficarão na lista (saem do banco de dados do cllr)
    return(
        <View style ={styles.container}> 
            <Text style={styles.desc}>Descrição da tarefa</Text>
            <Text style={styles.date}>Data Estimada conclusão</Text>
            <Text style={styles.date}>Data conclusão</Text>
        </View>
        

    )
}

// css :)
const styles = StylesSheet.create({
//container    
    container:{
        borderColor: '#AAA', 
        borderBottomWidth: 1, //borda apenas embaixo para separação
        alignItems: 'center',
        paddingVertical: 10
    },
//css descrição    
    desc:{
        fontFamily: 'Arial',
        fontSize: 20
    },
//css date     
    date:{
        fontFamily: 'Arial'
    }
})
