import axios from '@/axios.js'
import { ref } from 'vue'

export async function axiosFetch(url, payload = null, method = 'GET') {
    const data = ref(null)
    const error = ref(null)

    await axios({ method, url, data: payload })
        .then((res) => {
            data.value = res
        })
        .catch((err) => {
            error.value = err
        })

    return { data, error }
}


