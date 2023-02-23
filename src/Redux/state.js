let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', like: 15 },
                { id: 2, message: 'It is my project.', like: 20 },
                { id: 3, message: 'My posts.', like: 40 }
            ],
            newPostText: 'Hello!'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dmytro' },
                { id: 2, name: 'Max' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Viktor' },
                { id: 5, name: 'Elena' },
                { id: 6, name: 'Vlad' }
            ],
            messagesData: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'What are you doing?' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yes' },
                { id: 6, message: 'No' }
            ]
        },
        sidebar: {
            friendsData: [
                { id: 1, name: 'Elena' },
                { id: 2, name: 'Max' },
                { id: 3, name: 'Sveta' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

export default store;