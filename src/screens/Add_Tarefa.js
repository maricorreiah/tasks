import React, {Component} from "react";
import { 
    Text, 
    TextInput, 
    View, 
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"; //import dos icones
import moment from "moment"; //faz a conversão das datas
import DateTimePicker from "@react-native-community/datetimepicker"; //calendário para escolher a data quando o usuário clicar 
export default class Add_Tarefa extends Component{
    render (){
        const data_formada = moment(new Date()).format('ddd. D[de] MMM [de] YYYY')
        return(
        <Modal //criação do modal: telinha que sobrepõe a tela principal 
            transparent = {true} //fica transparente
            visible = {true}   //controla se vai ser visível ou não
            animationType="slide"   //cria uma animação
        >
            <TouchableWithoutFeedback> 
                <View style={styles.fundo}></View>
            </TouchableWithoutFeedback>
            <View style={styles.principal}>
                <Text style={styles.cabecalho}>Nova Tarefa</Text>
                <View style={styles.container}> 
                    <Icon name ="clipboard-check" size={25}></Icon> {/*colocando o icon*/}
                    <TextInput
                        style={styles.input}
                         placeholder="Descrição da tarefa"
                    />{/*campo de texto*/}
                </View>
                {/*icone de calendário*/}
                <TouchableOpacity style={styles.input}>
                    <Icon name="calendar" size={25}></Icon>
                    <Text style={styles.data}>{data_formatada}</Text>
                </TouchableOpacity>

                <View style={styles.botoes}>
                <TouchableOpacity>
                    <Text style={styles.botao}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.botao}>Salvar</Text>
                </TouchableOpacity>
                </View>
            </View>
        
            <TouchableWithoutFeedback> 
                <View style={styles.fundo}></View>
            </TouchableWithoutFeedback>
        </Modal>
        )

    }
}

const styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0,7)', //proporciona transparencia (70% opaca)
    },
    principal:{
        flex: 1, //aumenta o modal
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor: "#B13B44",
        color: '#FFF',
        textAlign: 'center',
        padding: 20,
        fontSize: 25

    },
    //css do input 
    input:{
        width: '85%', //ocupa 85% da tela
        margin: 15,
        borderWidth: 1, //coloca uma borda arredondada cinza, em volta do campo
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    // css botao de cancelar e botão de salvar
    botao:{
        margin: 20,
        marginRight: 30,
        color: '#B13B44' 
    },
    //css do container
    container:{
        flexDirection: 'row', //alinha o icone com a caxinha de texto e a data
        alignItems: 'center',
        marginLeft: 15,
        paddingVertical: 10
    },
    //css data (espaçamento)
    data:{
        margin: 10,
    }


})