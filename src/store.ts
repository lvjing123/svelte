import { writable } from 'svelte/store'

const loginInfo  = {
    username: '',
    password: ''
}
export const loginUser = writable(loginInfo)