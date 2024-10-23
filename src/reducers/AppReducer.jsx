
export const initialAppPostsState = {
  posts: [
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of post 1",
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of post 2",
    },
    {
      id: 3,
      title: "Post 3",
      content: "This is the content of post 3",
    },
  ],
}

export const initialAppReelsState = {
  hasUploadedReels: false,
}

export function postReducer(posts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...posts, action.payload];
    case 'DELETE_POST':
      return posts.filter(post => post.id !== action.payload);
    case 'UPDATE_POST':
      return posts.map(post => post.id === action.payload.id ? action.payload : post);
    default:
      return posts;
  }
}

export function reelsReducer(hasUploadedReels, action) {
  switch (action.type) {
    case 'UPLOAD_REELS':
      return true;
    default:
      return hasUploadedReels;
  }
}
