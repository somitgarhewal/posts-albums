import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { NativeSelect, FormControl } from '@material-ui/core'
import RenderPosts from './renderPosts';

const Post = (props) => {
    const [selectedUser, setSelectedUser] = useState('')
    const [prevSelected, setPrevSelected] = useState(selectedUser)

    useEffect(() => {
        if (prevSelected != selectedUser) {
            //<RenderPosts posts={selectedUser}/>
             console.log("useeffectog post.js")
            setPrevSelected(selectedUser)
        }
    });
    return(
       
        <div className="container-fluid p-3 pb-5 text-center bg-dark">
            {props.data.users ? 
            <div className='row d-flex justify-content-center '>
                <FormControl className=' mt-5 bg-light w-75  '>
                    <NativeSelect defaultValue='' onChange={(e)=>setSelectedUser(props.data.posts.filter((item) => item.userId == e.target.value))}>
                        <option value='please select the one'>  select User</option>
                        {props.data.users.map((user, i) => <option key={i} value ={user.id}>{user.name} </option>)}
                    </NativeSelect>
                </FormControl>
                <br/>
                {console.log("emp",selectedUser)}
            </div>:
            <h1 className="text-warning">Loading...<br/>please wait...</h1>
            }

            {props.data.posts?
                selectedUser?<RenderPosts posts={selectedUser}/> :
            <RenderPosts posts={props.data.posts} />:""}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
  }
  
  export default connect(mapStateToProps)(Post);