import { defineStore } from 'pinia'
export const userStoreToken = defineStore('token', () => {
    const token = ref('')
    function importToken(value) {
        token.value = value
        console.log(value)
    }
    return { token, importToken }
})