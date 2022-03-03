export const incrementCounter = (counter) => {
    (counter => dispatch({type: "INCREMENT", payload: counter}))
}