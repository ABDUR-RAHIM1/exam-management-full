const { cookies } = require("next/headers");

const userToken = () => {
    const cookieStore = cookies();
    const token = cookieStore.get("userToken");
 
    if (!token) {
        return null;  
    }

    return token.value;
};

export default userToken;