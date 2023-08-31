import axios from 'axios'

const instance = axios.create({
    // baseURL: '',
})

// TODO
instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iUCROHt6JHANdtzT6aOuUgOqVFRalOW20SbzRsn5SkI'

export default instance
