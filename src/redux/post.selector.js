import { createSelector } from 'reselect'

const selectPosts = state => {
    console.log("In selector, state: ", state) // ---> {people: {…}, counter: {…}, postsObj: {…}}
    // 結局これもstateの中にはstoreの中身が入ってるのか

    console.log("In selector, state.postsObj: ", state.postsObj) // ---> {posts: [{…}, {…}, {…}, {…}, {…}, {…}]}
    console.log([state.postsObj])

    return state.postsObj
    // storeの中のpostsObjをreturnしてる
    // selectPostsの中身はstate.postsObj、つまり{posts: [{…}, {…}, {…}, {…}, {…}, {…}]}
}
// ↑本来は、
// const selectPosts - state => state.postsObj
// だけでいい。storeのなかにあるstateの内、keyがpostsObjのものをselectPostsって変数に入れてる


// selectPostsArrayには関数が入ってる！
export const selectPostsArray = createSelector(
    // console.log("YO: ", postsObj)
    [selectPosts],
    (postsObj) => postsObj.posts.filter(post => post.author === 'user-1')
    // 第一引数[selectPosts]の返り値(つまりstate.postsObj)が、第二引数の中の関数の引数に入るってことにしとく
    // 第二引数の中の関数の引数postsObjは、自分でつけた名前だと思う
)

console.log("YOOO: ", selectPostsArray)
// console.log("KOOO: ", postsObj)
