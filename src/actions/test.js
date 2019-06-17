export function helloWorld(firstName, lastName) {
    return {
        type: 'NEW_HELLO_WORLD',
        payload: {
            firstName: firstName,
            lastName: lastName
        }
    }
}

export const NEW_WORLD_HELLO = 'NEW_WORLD_HELLO'
// export default helloWorld()