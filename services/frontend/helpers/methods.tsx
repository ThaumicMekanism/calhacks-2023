import axios from "axios";

export const getData = () => {
  axios.get(/* user_input/id OR card_deck/id */ '')
    .then((res: any) => {
      console.log('successful retrieval of data')
    })
    .catch((err: unknown) => {
      console.log('failed to get data')
    })
}

export const postData = (obj: {user_input: string}) => {
  axios.post('http://localhost:5004/user_input', {data: obj})
    .then((res: any) => {
      console.log('data successfully posted', res.data)
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