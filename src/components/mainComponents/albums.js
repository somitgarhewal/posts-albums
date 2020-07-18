import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../redux/actions/action'
import Pagination from './pagination';

function Album(props) {
    const [selectedAlbumId, setSelectedAlbumId] = useState('');
    const [prevSelectedAlbumId, setPrevSelectedAlbumId] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    // To get photos of selected album
    useEffect(() => {
        if (prevSelectedAlbumId != selectedAlbumId) {
            props.getPhotos(selectedAlbumId)
            console.log("useeffectog album.js", prevSelectedAlbumId)
            setPrevSelectedAlbumId(selectedAlbumId)
        }
    });

    return (
        <div className="container-fluid p-3 pb-5 text-center bg-dark">
            <div className="row m-5">
                {props.data.albums ?
                    <>
                    {/* To select only 10 albums slice is used */}
                    {props.data.albums.slice(indexOfFirstItem, indexOfLastItem).map((item) =>
                        <div className="card col-md-3 bg-secondary mx-auto p-3  my-auto border border-warning rounded m-lg-5 float-center text-center" >
                            <div className="card-body">
                                <p1>Album : {item.id}</p1>
                                {/* To display title of album  */}
                                <h4 className="card-title bg-dark text-light" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => { setSelectedAlbumId(item.id) }}>{item.title}</h4>
                                {selectedAlbumId == item.id ?
                                    <div>
                                        {/* To display id and image of a selected album */}
                                        {props.data.photos ?
                                            props.data.photos.filter(item => item.albumId == selectedAlbumId).map(element => <><img className="responsive img-fluid" src={element.url} /><h5 className="card-title text-light">{element.id}</h5></>)
                                            : ""
                                        }
                                    </div>
                                    : ''
                                }
                            </div>
                        </div>
                    )}
                    </>
                    : ''}
            </div>
            {props.data.albums ?
                <Pagination item={props.data.albums} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
                : ""}
        </div>
    )
}
const mapDispatchToProps = { getPhotos }
const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);