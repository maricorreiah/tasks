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

export default class Add_Tarefa extends Component{
    render (){
        return(
        <Modal
            transparent = {true} //fica transparente
            visible = {true}   //controla se vai ser visível ou não
            animationType="slide"   //cria uma animação

            >
            <TouchableWithoutFeedback> 
                <View style={styles.fundo}></View>
            </TouchableWithoutFeedback>
            <View style={styles.principal}>
                <Text style={styles.cabecalho}>Nova Tarefa</Text>
                <TextInput
                    placeholder="Descrição da tarefa"
                />{/*campo de texto*/}
                <TouchableOpacity>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Salvar</Text>
                </TouchableOpacity>

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

    }

})