import axios from "axios";
import {
  ToastAndroid
} from "react-native";

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
              let response = await axios.post("https://slipperswebapp.herokuapp.com/api/auth/signup",user)
              if(response.data.error) {
                ToastAndroid.showWithGravityAndOffset(
                  `❌ ${response.data.error}`,
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  35,
                  60
                )
              }
              if(response.data.message) {
                ToastAndroid.showWithGravityAndOffset(
                  `✅ ${response.data.message}`,
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  35,
                  60
                )
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
            "https://slipperswebapp.herokuapp.com/api/auth/signin",user
          );
          console.log("action response",response)
          if(response.data.error) {
            ToastAndroid.showWithGravityAndOffset(
              `❌ ${response.data.error}`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              55,
              60
            )
          }
          if(response.data.success){
            ToastAndroid.showWithGravityAndOffset(
              `👞 Welcome to slippers ${response.data.response.name}!`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              55,
              60
            )
          }
          // if (response.data.response) {
          //   localStorage.setItem("token", response.data.token);
          // }
          dispatch({
            type: "SAVE_USER",
            payload: { info: response.data, loading: false },
          });
        };
      },
      logOut: () => {
        return (dispatch) => {
          // localStorage.clear();
          alert("Logging out...")
          dispatch({ type: "LOG_OUT", payload: {} });
        };
      },
      authUser: () => {
        return async (dispatch) => {
          try {
            const token = localStorage.getItem("token");
            const user = await axios.get(
              "https://slipperswebapp.herokuapp.com/api/auth",
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
              let response = await axios.get("https://slipperswebapp.herokuapp.com/api/verify/"+uniqueString)
              if (response.data.response) {
                localStorage.setItem("token", response.data.token);
              }
              dispatch({
                type: "SAVE_USER",
                payload: {info: response.data},
              });
    
          }
      },
      addToCart: (cart, isAdded, product) => {

        return async (dispatch) => {
    
          let newCart = [...cart]
          if (isAdded) {
            ToastAndroid.showWithGravityAndOffset(
              `🛒 ${product.name} Added to Cart!`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              55,
              60
            )
            // if (!product.quantity && !cart.filter((shoe) => shoe._id === product._id).length) {
            //   product.quantity = 1
            //   newCart.push(product)
            // }
            // else {
            //   product.quantity += 1
            // }
            let newProduct = cart.filter(shoe=>shoe._id===product._id)
            if(newProduct.length){
                cart.map(shoe=>{
                    return((shoe._id===product._id)&&(shoe.quantity+=1))
                })
            }
            else{
              product.quantity?product.quantity+=1:product.quantity=1
                newCart.push(product)
            }
            dispatch({ type: "ADD_PRODUCT", payload: newCart })
          }
          else {
            ToastAndroid.showWithGravityAndOffset(
              `❌ ${product.name} Removed!`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              55,
              60
            )
            product.quantity -= 1
            if (product.quantity < 1) {
    
              newCart = newCart.filter(element => product._id !== element._id)
            }
    
    
            dispatch({ type: "DELETE_PRODUCT", payload: newCart })
          }
    
        }
      }
}

export default userActions