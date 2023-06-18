import axios from "axios";

export const getData = (id: number, callback: any) => {
  axios.get(`http://localhost:5004/card_deck/${id}`)
    .then((res: any) => {
      console.log('successful retrieval of data', res.data)
      callback(res.data)
    })
    .catch((err: unknown) => {
      console.log('failed to get data')
      callback(null)
    })
}

export const postData = (obj: {user_input: string}, callback: any) => {
  axios.post('http://localhost:5004/user_input', obj)
    .then((res: any) => {
      console.log('data successfully posted', res.data)
      // {user_input_id: 2, card_deck_id: 2}
      getData(res.data.card_deck_id, callback)
    })
    .catch((err: unknown) => {
      console.log('failed to post data', err)
    })
}

export const patchData = (/* object */) => {
  axios.patch('', /* object */)
    .then((res: any) => {
      console.log('data successfully patched')
      getData();
    })
    .catch((err: unknown) => {
      console.log('failed to patch data')
    })
}


export const deleteData = () => {
  axios.delete('', { })
    .then((res: any) => {
      console.log('data successfully deleted')
      getData();
    })
    .catch((err: unknown) => {
      console.log('failed to delete data')
    })
}