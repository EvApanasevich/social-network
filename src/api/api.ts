import axios from "axios";
import {InfoFormType} from "../components/profile/profileInfo/ProfileInfoForm";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '42158ad3-0459-43fc-bd2e-c5ba93ee5f31'
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
    getProfile(userId: number | null) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number | null) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
    },
    updatePhoto(photofile: any) {
        const formData = new FormData()
        formData.append('image', photofile)
        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfileInfo(formData: InfoFormType) {
        return instance.put('profile', formData)
    }
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}


