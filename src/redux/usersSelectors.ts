import {AppRootStateType} from "./Redux-store";
import {createSelector} from "reselect";

//////////////////////////////////// example reselect ////////////////////////////  // если в селекторе используется логика которая в любом случае
                                                                                    // возвращает измененные данные (напримет метод filter),
const getUsersSimpleSelector = (state: AppRootStateType) => {                       // необходимо создавать другой селектор что бы предотвратить
    return state.usersPage.users                                                    // постоянную перерисовку. (библиотека 'reselect')
}                                                                                   // Селектор (getUsers) принимает в зависимость
export const getUsers = createSelector(getUsersSimpleSelector, (users) => { // (getUsersSimpleSelector) который достаёт всех
    return users.filter(u => true)                                                  // users. Селектор getUsers отфильтровывает всех юзеров и
})                                                                                  // запоминает этот отфильтрованный массив юзеров. Когда в следующий
                                                                                    // раз вызовется getUsers он посмотрит, если приходящие юзеры те же,
//////////////////////////////////////////////////////////////////////////////////  // он не станет снова фильтровать, а возьмёт массив который ранее
                                                                                    // запомнил, и перересовки не произойдёт.
export const getCount = (state: AppRootStateType) => {
    return state.usersPage.count
}
export const getTotalCount = (state: AppRootStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getLoading = (state: AppRootStateType) => {
    return state.usersPage.loading
}
export const getFollowingProgress = (state: AppRootStateType) => {
    return state.usersPage.followingProgress
}
