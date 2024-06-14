import { writable } from 'svelte/store'

const loginInfo  = {
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password')
}
export const loginUser = writable(loginInfo)