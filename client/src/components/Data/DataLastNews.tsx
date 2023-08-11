import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

import { IPosts } from "../Models/IPosts";

const basePath = "/img/posts/";

let pageX = 0;

interface IState {
    loading: boolean,
    page: number,
    getPosts: IPosts[],
    errorMsg: string
}

const DataLastNews:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        page: 0,
        getPosts: [] as IPosts[],
        errorMsg: ''
    })

    useEffect(() => {
        const loadPosts = () => {
            setState({...state, loading: true, page: pageX});

            console.log("OI");

            

            console.log(state.page);

            
                Axios.get(`http://192.168.0.2:3000/lastnews/${state.page}&5`)
                //Axios.get(`https://api-mundogeek.onrender.com/lastnews/`)
                    .then((response) => setState({
                        ...state, loading:false, getPosts:response.data
                    }))
                    .catch(err => setState({
                        ...state, loading:false, errorMsg:err.message
                    }));

        }

        loadPosts();
    },[state.page, state.getPosts]);

    const loadMore = () => {
        pageX = pageX + 1;
    }


    const {getPosts, loading} = state;

    return (
        <>
            { loading && <p>Carregando...</p>}
            {
                getPosts.length > 0 && getPosts.map( post => (
                    <div className="feed-card" key={post.postID}>
                        <div className="feed-img">
                            <Link to={"post/" + post.postID}><img src={basePath + post.postTHUMBNAIL} /></Link>
                        </div>
                        <div className="feed-data">
                            <Link to={"post/" + post.postID}><h2>{post.postTITLE}</h2></Link>
                            <p>Data</p>
                        </div>
                    </div>
                ))
            }

            <div className="feed-btn-container">
                <button className="feed-btn" onClick={loadMore}>Ver mais</button>
            </div>
        </>
    );
}

export default DataLastNews;