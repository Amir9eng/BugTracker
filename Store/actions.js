export const addBug = (id, description) => ({
    type: 'ADD_BUG',
    payload: {
        id,
        description 
    }

})

export const removeBug = (id) => ({
    type: 'REMOVE_BUG',
    payload: {
        id
    }
})


export const resolveBug = (id) => ({
    type: 'RESOLVE_BUG',
    payload: {
        id
    }
})

export const unresolveBug = (id) => ({
    type: 'UNRESOLVE_BUG',
    payload: {
        id
    }
})