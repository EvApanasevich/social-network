import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f2303fc9-e527-4a0d-a589-c2b1964ace41'
    }
})

export const usersApi = {
    getUsers(currentPage: number, count: number) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileApi = {
    getProfile(userId: string | undefined, myId: number | null) {
        return instance.get(`profile/` + (!userId ? myId : userId))
    },
    getStatus(userId: string | undefined, myId: number | null) {
        return instance.get('profile/status/' + (!userId ? myId : userId))
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
    }
}

export const authApi = {
    getAuthMe() {
        return instance.get(`auth/me`)
    }
}

