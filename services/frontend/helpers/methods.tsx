import axios from "axios";

export const getData = () => {
  axios.get('')
    .then((res: any) => {
      console.log('successful retrieval of data')
    })
    .catch((err: unknown) => {
      console.log('')
    })
}

export const deleteData = () => {
  axios.delete('', { })
    .then((res: any) => {
      console.log('data successfully updated')
      getData();
    })
    .catch((err: unknown) => {
      console.log('failed to delete data')
    })
}