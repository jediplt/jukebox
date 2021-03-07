const SET_USER_CARD = 'SET_USER_CARD'
const SET_USER_ANSWER = 'SET_USER_ANSWER'
// box: archived, removed, hour, day, week, month




const initialState = {
    innerWidth: 0,
    innerHeight: 0,
    viewIndex: 0,
    cards: [
        { key: 'test8', name: 'swift', pathname: 'Front End Development', items: [{ itemKey: '', name: '' }] },
        { key: 'test16', name: 'javascript', pathname: 'Front End Development', items: [{ itemKey: '', name: '' }] },
        { key: 'test23', name: 'rxjs', pathname: 'Front End Development', items: [{ itemKey: '', name: '' }] }
    ],
    devicePixelRatio: 1,
    // ...require('private/setupData.json').common
    // const cards = [{
    //     cardKey: ""
    // }]

    // const slots = [{
    //     slotKey: "",
    //     cardKey: "",
    //     box: "",
    // }]

    // const answers = [{
    //     cardKey: "",
    //     answerKey: "",
    // }]


    // const itemLists = [{
    //     cardKey: "",
    //     itemListKey: "",
    //     itemKeys: [""],
    //     type: ["recommended", "sorted", "shuffled"]
    // }]

    // const hintLists = [{
    //     cardKey: "",
    //     hintListKey: "",
    //     hintKeys: [""],
    //     itemKey,
    //     type: ["recommended", "sorted", "shuffled"]
    // }]
}

const setValue = (state, action, propName) => {
    const partitionKey = parseInt(Math.round((new Date()).getTime() / 1000) / 1000000);
    const propValues = state[propName + 's'] || {};    
    return {
        ...state,
        [propName + 's']: {
            ...state[propName + 's'],
            [partitionKey]: [
                ...(propValues[partitionKey] || []),
                { date: action.date, ...action.payload, [propName + "Key"]: action.date }
            ]
        }
    }
}

export default (state = initialState, action) => {
    if (action.type !== "persist/REHYDRATE" && (action.payload?.['slots'] || action.payload?.['answers'] || action.payload?.['itemLists'] || action.payload?.['hintLists'])) {
        throw Error("bad issue 1");
    }
    switch (action.type) {
        case "SET_VALUE": return { ...state, ...action.payload }
        case "SET_SLOT": return setValue(state, action, 'slot')
        case "SET_ANSWER": return setValue(state, action, 'answer')
        case "SET_ITEM_LIST": return setValue(state, action, 'itemList')
        case "SET_HINT_LIST": return setValue(state, action, 'hintList')
        case "SET_CURRENT_CARD": return setValue(state, action, 'currentCard')



    }
    return state
}
