import axios from 'axios';

const shoeActions = {

  getShoes: () => {
    return async (dispatch) => {

      axios
        .get("https://slipperswebapp.herokuapp.com/api/shoes")
        .then((res) =>
          dispatch({ type: "getShoes", payload: res.data.response })
        )
        .catch(err => console.error(err))
    };
  },
  filterShoes: (shoes, searchValue) => {
    return async (dispatch) => {
      let filteredShoes = [...shoes]
      if (Array.isArray(searchValue)) {

        if (searchValue.length > 0)
          searchValue.forEach(element => {


            filteredShoes = filteredShoes.filter(searchShoes => {
              
              return (
                !element.value.length > 0 ? true
                  : (element.type === 'gender') ? element.value.includes(searchShoes.gender.toLowerCase().trim())
                    : (element.type === 'color') ? element.value.includes(searchShoes.color.toLowerCase().trim())
                      : (element.type === 'season') ? element.value.includes(searchShoes.season.toLowerCase().trim())
                      : (element.type === 'price') ? (searchShoes.price>element.value[0] && searchShoes.price<element.value[1])
                        : (element.type === 'text') && (
                          searchShoes.name.toLowerCase().trim().startsWith(element.value.toLowerCase().trim())
                          || searchShoes.gender.toLowerCase().trim().startsWith(element.value.toLowerCase().trim())
                          || searchShoes.color.toLowerCase().trim().startsWith(element.value.toLowerCase().trim())
                          || searchShoes.season.toLowerCase().trim().startsWith(element.value.toLowerCase().trim())
                        )
              )
            })

          })

      }
      else {
        filteredShoes = filteredShoes.filter(searchShoes => {
          return (
            searchShoes.name.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim())
            || searchShoes.gender.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim())
            || searchShoes.color.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim())
            || searchShoes.season.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim())
          )
        })
      }

      dispatch({ type: 'filterShoes', payload: filteredShoes })
    }
  },
  modifyShoe: (data) => {
    return async (dispatch) => {
      let response = await axios.put("https://slipperswebapp.herokuapp.com/api/shoes", data)
      dispatch({ type: "MODIFY_SHOE", payload: response.data.response })
    }
  },
  uploadShoe: (shoe) => {
    return async (dispatch) => {
      let response = await axios.post("https://slipperswebapp.herokuapp.com/api/shoes", shoe)
      console.log(response)
      dispatch({ type: "UPLOAD_SHOE", payload: response.data.response })
    }
  },
  getOneShoe: (id) => {
    return async (dispatch) => {
      let response = await axios.get(`https://slipperswebapp.herokuapp.com/api/shoe/${id.toString()}`)
      dispatch({type: "getShoe", payload: response.data.response})
    }
  },
  deleteShoe : (id)=>{
      return async (dispatch)=>{
          let response = await axios.delete(`https://slipperswebapp.herokuapp.com/api/shoe/${id}`)
          dispatch({type: "DELETE_SHOE", payload: response.data.response})
      }
  },
  sendIdtoDeleteShoe : (id)=>{
      return (dispatch)=>{
          dispatch({type: "ID_TO_DELETE_SHOE", payload:id})
      }
  }

}

export default shoeActions