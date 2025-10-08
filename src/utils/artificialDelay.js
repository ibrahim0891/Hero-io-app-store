



export const artificialDelay = (fn, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Delay finished')
        }, delay);
    }).then(() => fn)
}