import {Component} from 'react'
import './index.css'
import {v4 as uuidV4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
    count: 0,
  }

  userName = event => {
    this.setState({name: event.target.value})
  }

  userComment = event => {
    this.setState({comment: event.target.value})
  }

  submitPage = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const colorClassName =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    console.log(colorClassName)
    const newList = {id: uuidV4(), name, comment, colorClassName, isLike: false}
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newList],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  delete = id => {
    const {commentList} = this.state
    const filterList = commentList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentList: filterList,
      count: prevState.count - 1,
    }))
  }

  like = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comment, commentList, count} = this.state

    return (
      <>
        <div className="bgContainer">
          <div className="formContainer">
            <div>
              <div className="headContainer">
                <h1 className="head">Comments</h1>
              </div>
              <div className="imageContainer1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                  alt="comments"
                  className="image"
                />
              </div>
              <div className="paraCont">
                <p className="para">Say something about 4.0 Technologies</p>
                <form className="form" onSubmit={this.submitPage}>
                  <input
                    className="inputName"
                    type="text"
                    placeholder="Your Name"
                    onChange={this.userName}
                    value={name}
                  />
                  <textarea
                    className="textarea"
                    placeholder="Your Comment"
                    rows="7"
                    cols="37"
                    onChange={this.userComment}
                    value={comment}
                  />
                  <button className="button" type="submit">
                    Add Comment
                  </button>
                </form>
              </div>
            </div>
            <div className="imageContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="image"
                alt="comment"
              />
            </div>
          </div>
        </div>
        <hr className="hr" />

        <div className="commentHead">
          <div className="number">{count}</div>
          <p className="para">Comments</p>
        </div>

        <ul className="list">
          {commentList.map(each => (
            <CommentItem
              item={each}
              key={each.id}
              deleteComment={this.delete}
              toggleLike={this.like}
            />
          ))}
        </ul>
      </>
    )
  }
}
export default Comments

// import {Component} from 'react'
// import './index.css'
// import {v4 as uuidv4} from 'uuid'
// import CommentItem from '../CommentItem'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// // Write your code here
// class Comments extends Component {
//   state = {
//     commentsList: [],
//     name: '',
//     comment: '',
//     count: 0,
//   }

//   userName = event => {
//     this.setState({name: event.target.value})
//   }

//   userComment = event => {
//     this.setState({comment: event.target.value})
//   }

//   submitPage = event => {
//     event.preventDefault()
//     const {name, comment} = this.state
//     const colorClassName =
//       initialContainerBackgroundClassNames[
//         Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
//       ]
//     console.log(colorClassName)
//     const newList = {id: uuidv4(), name, comment, colorClassName, isLike: false}
//     this.setState(prevState => ({
//       commentsList: [...prevState.commentsList, newList],
//       name: '',
//       comment: '',
//       count: prevState.count + 1,
//     }))
//   }

//   delete = id => {
//     const {commentsList} = this.state
//     const filterList = commentsList.filter(eachComment => eachComment.id !== id)
//     this.setState(prevState => ({
//       commentsList: filterList,
//       count: prevState.count - 1,
//     }))
//   }

//   like = id => {
//     this.setState(prevState => ({
//       commentsList: prevState.commentsList.map(eachComment => {
//         if (id === eachComment.id) {
//           return {...eachComment, isLike: !eachComment.isLike}
//         }
//         return eachComment
//       }),
//     }))
//   }

//   render() {
//     const {name, comment, commentsList, count} = this.state

//     return (
//       <>
//         <div className="bg-container">
//           <div className="form-container">
//             <div>
//               <div className="head-container">
//                 <h1 className="heading">Comments</h1>
//               </div>
//               <div className="image-container1">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
//                   alt="comments"
//                   className="image"
//                 />
//               </div>
//               <div className="sub-container">
//                 <p className="description">
//                   Say something about 4.0 Technologies
//                 </p>
//                 <form className="form" onSubmit={this.submitPage}>
//                   <input
//                     type="text"
//                     className="input-name"
//                     placeholder="Your Name"
//                     onChange={this.userName}
//                     value={name}
//                   />
//                   <textarea
//                     className="text-area"
//                     placeholder="Your Comment"
//                     rows="7"
//                     cols="37"
//                     onChange={this.userComment}
//                     value={comment}
//                   />
//                   <button type="button" className="comment-button">
//                     Add Comment
//                   </button>
//                 </form>
//               </div>
//             </div>
//             <div className="image-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
//                 className="image"
//                 alt="comment"
//               />
//             </div>
//           </div>
//         </div>
//         <hr className="hr" />

//         <div className="comment-head-container">
//           <div className="count">{count}</div>
//           <p className="description">Comments</p>
//         </div>

//         <ul className="list-container">
//           {commentsList.map(eachComment => (
//             <CommentItem
//               item={eachComment}
//               key={eachComment.id}
//               deleteComment={this.delete}
//               toggleLike={this.like}
//             />
//           ))}
//         </ul>
//       </>
//     )
//   }
// }

// export default Comments
