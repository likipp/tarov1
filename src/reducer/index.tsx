const QuickBillReducer = (state, action) => {
   let temp = []
    switch (action.type) {
        case "increament":
            temp =  state.map((item, index) => {
                const it = item
                if (index == action.index) {
                    it.qty = it.qty + 1
                }
                return it
            })
            return temp
        case "decrement":
            temp =  state.map((item, index) => {
                const it = item
                if (index == action.index) {
                    it.qty = it.qty - 1
                }
                return it
            })
            return temp
        default:
            throw new Error()
    }
}

export default QuickBillReducer