import URL from 'url'

import Axios from 'axios'
// import Cookies from 'js-cookie'
// import { saveAs } from 'file-saver'



export const fetch = async ({ method, url, data, query }) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  }
  try {
    const response = await Axios({
      method,
      url: `${url}${URL.format({ query })}`,
      data,
      headers,
    })
    return { status: response.status, data: response.data }
  } catch (error) {

    if (error.request) {
      console.log(error.request)
      return { status: '500', data: 'Server is out of reach' }
    }
    console.log('Error', error.message)
    return { status: '500', data: 'Fetch error' }
  }
}





