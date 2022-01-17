import axios from "axios";

const userActions ={
    googleLogin: (user) => {
        return async (dispatch) => {
          let response = await axios.post(
            "http://localhost:4000/api/auth/google",
            user
          );
          if (response.data.response) {
            localStorage.setItem("token", response.data.token);
          }
          console.log(response)
    
          dispatch({
            type: "SAVE_USER",
            payload: { info: response.data, loading: false },
          });
        };
      },
      signUpUser:(user)=>{
          return async (dispatch)=>{
              let response = await axios.post("http://localhost:4000/api/auth/signup",user)
              if (response.data.response) {
                localStorage.setItem("token", response.data.token);
              }
              dispatch({
                type: "SAVE_USER",
                payload: { info: response.data, loading: false },
              });
          }
      },
      signInUser: (user) => {
        return async (dispatch) => {
          let response = await axios.post(
            "http://localhost:4000/api/auth/signin",user
          );
          if (response.data.response) {
            localStorage.setItem("token", response.data.token);
          }
          dispatch({
            type: "SAVE_USER",
            payload: { info: response.data, loading: false },
          });
        };
      },
      logOut: () => {
        return (dispatch) => {
          localStorage.clear();
          alert("Logging out...")
          dispatch({ type: "LOG_OUT", payload: {} });
        };
      },
      authUser: () => {
        return async (dispatch) => {
          try {
            const token = localStorage.getItem("token");
            const user = await axios.get(
              "http://localhost:4000/api/auth",
              {
                headers: { Authorization: "Bearer " + token },
              }
            );
            console.log(user)
    
            dispatch({ type: "IS_AUTH", payload: user.data.response });
            return { response: user.data.response };
          } catch (e) {
            return { error: "Unauthorized user, try login again" };
          }
        };
      },
      verifyEmail : (uniqueString)=>{
          return async (dispatch)=>{
              let response = await axios.get("http://localhost:4000/api/verify/"+uniqueString)
              if (response.data.response) {
                localStorage.setItem("token", response.data.token);
              }
              dispatch({
                type: "SAVE_USER",
                payload: {info: response.data},
              });
    
          }
      },
      addToCart : (cart, isAdded, product)=>{
        
        return async (dispatch)=>{
          //await axios.put("http://localhost:4000/api/cart",{userId, isAdded, product})
          //.then(response=>{
          //  if(response.data.success)dispatch({type:"UPDATE", payload: user})
          //  return response.data.success
          //}).catch(err=>console.error(err))
          let newCart = [...cart] 
          if(isAdded){
            newCart.push(product)
            dispatch({type:"ADD_PRODUCT", payload: newCart})
          }
          else{
            newCart = newCart.filter(element => product !== element)
            dispatch({type:"DELETE_PRODUCT", payload: newCart})
        }

        }
      }
}

export default userActions