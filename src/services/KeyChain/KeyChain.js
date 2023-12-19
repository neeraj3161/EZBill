import enums from "../enums/enums";
import EncryptedStorage from 'react-native-encrypted-storage';

class KeyChain{
    constructor(){}

    async saveLoginCred(username,password,auth){
        try {
        await EncryptedStorage.setItem(
            "login_session",
            JSON.stringify({
                username : username,
                password : password,
                auth_type : auth,
                languages : ["fr", "en", "de"]
            })
        );

    } catch (error) {

    }
    
}

}

export default KeyChain;