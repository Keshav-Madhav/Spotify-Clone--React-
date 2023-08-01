export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQD14UYuFSuc522fOYcjGZmp7YpITywdg63wNz1EttJdUgbeyoeXT4dI-IJPRQGnjccRW5yWFXfkk5OyB8UyasrcfUr54W0cAj55qgKicx2lifPg2Cz4lqMcyB8FhxlcSapZs1jTh7fcA8r8imETmGLbm6m2BzWywheJlzoloW1wGhasuPdIY-QT7xZOz_9rM6bsTywIqzWp3HNSefOU",
};

const reducer= (state, action)=>{
    console.log(action); 
    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer