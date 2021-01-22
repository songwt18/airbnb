export const setCacheVal = (key,val) => {
    localStorage.setItem(key,val)
}

export const getCacheVal = (key) => {
    return localStorage.getItem(key)
}

export const clearCacheVal = () => {
    localStorage.clear()
}
export const getArray = (key)=>{
    let val = localStorage.getItem(key)
    return val === null ? [] : val.split(',')
}

export const setArray = (key,val)=>{
    let arr = getArray(key)
    if (arr.indexOf(val) < 0) {
        arr.push(val)
        localStorage.setItem(key,arr.toString())
    }
}