import { createSelector } from 'reselect'

const selectPosts = state => state.postsObj

export const selectPostsArray = createSelector(
    [selectPosts],
    (postsObj) => postsObj.posts.filter(post => post.author === 'user-1')
)