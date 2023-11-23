import {Platform, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",
        marginBottom: Platform.OS == "ios" ? 40 : 20
    },
    titleStyle: {
        color: "#970AED",
        fontSize: 30,
        fontWeight: "700",
        marginTop: Platform.OS == "ios" ? 70 : 50
    },
    containerArticle: {
        backgroundColor: "#FFFAFA",
        marginTop: 30,
        width: Platform.OS == "ios" ? 364 : 342,
        height: 350,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: 20,
        marginBottom: 30,
    },
    ArticleImage: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    titleArticle: {
        padding: 10,
        color: "#970AED",
        fontSize: Platform.OS == "ios" ? 27 : 20,
        fontWeight: "400",
    },
    textArticle: {
        padding: 10,
        marginTop: -10,
        textAlign: "left"
    },
    modalDetailArticle: {
        width: "90%", 
        marginLeft: 20
    },
    titleModalDetailArticle: {
        color: "#970AED"
    },
    modalCloseButton: {
        color: "#970AED"
    }

})

export default styles