import axios from 'axios'
const serverURL = "http://localhost:9150/api";

class AuthenticationService {

 // send username, password to the SERVER
    executeJwtAuthenticationService(userData) {
        return axios.post(serverURL+'/authenticate', userData, { withCredentials: true })
    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.get(serverURL+'/hello');        
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }

    createJWTToken(jwtToken) {
        return 'Bearer ' + jwtToken
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const jwtToken = localStorage.getItem('jwtToken');
                if (jwtToken) {
                    config.headers['Authorization'] = 'Bearer ' + jwtToken;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("jwtToken");
    }

    isUserLoggedIn() {
        
        //let user = sessionStorage.getItem('authenticatedUser')
        const jwtToken = localStorage.getItem('jwtToken');
        console.log("===UserloggedInCheck===");
        console.log(jwtToken);

        if (jwtToken) {
            return true;
        }
        //if(user===null) return false
        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }


}

export default new AuthenticationService()