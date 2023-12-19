class enums{

    getAuthType(auth){
        var auth_type = {
            1:'admin',
            2:'staff'
        }
        return auth_type.auth;
    }
}
export default enums;