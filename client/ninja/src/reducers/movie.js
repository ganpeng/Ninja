

const initializeState = [
    {
        id: 1,
        name: "电影1",
        desc: "这是电影1的描述"
    },
    {
        id: 2,
        name: "电影2",
        desc: "这是电影2的描述"
    }
];

export default (state = initializeState, action = {}) => {

    switch (action.type) {
        default:
            return state;
    }
}

