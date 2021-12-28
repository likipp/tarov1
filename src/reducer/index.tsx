const QuickBillReducer = (state, action) => {
    // let qty = state[action.index].qty
    // console.log(action, "action")
    // console.log(state[action.index], "qty")
    console.log(state, "state")
   
    switch (action.type) {
        case "create": 
            state.push({name: action.item.name, qty: action.item.qty + 1})
            // console.log(state, "修改后的state")
            return {state}
        case "increament":
            state.map((item, index) => {
                const it = item
                if (index == action.index) {
                    it.qty = it.qty + 1
                }
                return it
            })
            return {...state}
        case "decrement":
            return {...state, qty: state.qty - 1}
        default:
            throw new Error()
    }
}

export default QuickBillReducer