import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getComment } from '../../redux/actions/action'
import Pagination from './pagination';

const RenderPosts = (props) => {

    const [selectedPostId, setSelectedPostId] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [prevSelected, setPrevSelected] = useState("")
    const [prevProps, setPrevProps] = useState(props.posts)
    const postsPerPage = 10;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    useEffect(() => {
        if (prevSelected != selectedPostId) {
            const postId= selectedPostId
            props.getComment(postId)
            setPrevSelected(selectedPostId)
        }
        if (prevProps != props.posts) {
             setCurrentPage(1)
            setPrevProps(props.posts)
        }
    });

    return (
        <>
        <div className="row m-5">
            {/* To select only 10 albums slice is used */}
            {props.posts.slice(indexOfFirstPost, indexOfLastPost).map((item) =>
                <div className="card col-md-3 bg-secondary mx-auto p-3  my-auto border border-warning rounded m-lg-5 float-center text-center" >
                    <div className="card-body">
                        {/* TO display post title */}
                        <h4 className="card-title bg-dark text-light" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() =>{setSelectedPostId(item.id)}}>{item.title}</h4>
                        {selectedPostId == item.id ?
                            <div>
                                {/* To display comments on clicking the posts */}
                                {props.comments? 
                                    props.comments.map(element => <><h4 className="card-title text-warning">{element.name}</h4><h5 className="card-title text-light">Comment: {element.body}</h5></>)
                                    :""
                                }
                            </div>
                            : ''
                        }
                    </div>
                </div>
            )}
             </div>            
       <Pagination setCurrentPage={setCurrentPage} itemsPerPage={postsPerPage} item={props.posts}/>
        </>
    )
}
const mapDispatchToPops = {getComment}
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToPops)(RenderPosts);