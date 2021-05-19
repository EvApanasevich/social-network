import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '52b2236a-5e9e-4ab8-8c8f-edf0cef72f57'
    }
})

export const usersApi = {
    getUsers(currentPage: number, count: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${count}`)
                .then(response => {
                    return response.data
                })
        )
    },
    follow(userId: number) {
        return (
            instance.post(`follow/${userId}`)
                .then(respons => {
                    return respons.data.resultCode
                })
        )
    },
    unfollow(userId: number) {
        return (
            instance.delete(`follow/${userId}`)
                .then(respons => {
                    return respons.data.resultCode
                })
        )
    }
}

export const profileApi = {
    getProfile(userId: string | undefined) {
        return (
            instance.get(`profile/` + (!userId ? 2 : userId))
                .then(respons => {
                    return respons.data
                })
        )
    }
}

export const authApi = {
    getAuthMe() {
        return (
            instance.get(`auth/me`)
                .then(respons => {
                    if (respons.data.resultCode === 0) {
                        return respons.data.data
                    }
                })
        )
    }
}

