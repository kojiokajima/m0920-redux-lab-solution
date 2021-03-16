import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectPostsArray} from '../redux/post.selector'

let count = 0;

class Post extends Component{
    
    render(){
        console.log(`Posts render ${++count}`)
        console.log("this.props.postsArr: ", this.props.postsArr) // --> [{…}, {…}]、selectorでフィルターされた後のやつ
        return(
            <div>
              <h3>Posts</h3>  
              <ul>
                  {
                      this.props.postsArr.map(post => (
                          <li key={post.id}>{post.title}</li>
                      ))
                  }
              </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({ 
    // postsArr: state.postsObj.posts
    // postsArr: state.postsObj.posts.filter(post => post.author === 'user-1')
    postsArr: selectPostsArray(state)
    // stateには、storeの中のstateが入ってる --> {people: {…}, counter: {…}, postsObj: {…}}
    // selectPostArray関数を呼んでるってことは、結局createSelector関数を呼んでるってことか cf) post.selector.js
    // ちなみにselectPostsArray(state)の返り値は[{…}, {…}]、selectorでフィルターされた後のやつ
})

// console.log("In Posts, state: ", state)
export default connect(mapStateToProps)(Post)