import { CalendarEvent, Eye, ShareFill, Briefcase, ThreeDots, GeoAlt } from 'react-bootstrap-icons';
import './Post.css'
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

const Post = ({post}) => {
    const [dropdown, setDropdown] = useState(false);

    const toggle = () => {
        setDropdown(!dropdown);
    }

    if(post.type==='🔬️ Education' || post.type==='✍️ Article'){
        return(
            <div className="post">
                <img 
                src={post.postImage} 
                alt="postImage" />
                <p className='type'>{post.type}</p>
                <div className='heading d-flex justify-content-space-between'>
                    <p>{post.heading}</p>
                    <Dropdown> 
                        <ThreeDots onClick={toggle} style={{cursor: 'pointer', height: '28px', width:'28px'}}/>
                        <Dropdown.Menu show={dropdown}>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <p className='desc'>{post.description}</p>
                <div className='postInfo d-flex justify-content-space-between align-items-center'>
                    <div className='userInfo d-flex align-items-center'>
                        <img 
                        src={post.userImage} 
                        alt="userPic" />
                        <span>{post.user}</span>
                    </div>

                    <div className='misc d-flex align-items-center'>
                        
                        <span><Eye />{post.views} views</span>
                        <button><ShareFill /></button>
                    </div>
                </div>
            </div>
        )
    }

    if(post.type==='🗓️ Meetup'){
        return(
            <div className="post">
                <img 
                src={post.postImage} 
                alt="postImage" />
                <p className='type'>{post.type}</p>
                <div className='heading d-flex justify-content-space-between'>
                    <p>{post.heading}</p>
                    <Dropdown> 
                        <ThreeDots onClick={toggle} style={{cursor: 'pointer', height: '28px', width:'28px'}}/>
                        <Dropdown.Menu show={dropdown}>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='placeInfo d-flex align-items-center' >
                    <div className='d-flex align-items-center' style={{gap: '4px'}}>
                        <CalendarEvent />{post.time}
                    </div>
                    <div className='d-flex align-items-center' style={{gap: '4px'}}>
                        <GeoAlt />{post.location}
                    </div>
                </div>
                <button className='jobButton'>View Website</button>
                <div className='postInfo d-flex justify-content-space-between align-items-center'>
                    <div className='userInfo d-flex align-items-center'>
                        <img 
                        src={post.userImage} 
                        alt="userPic" />
                        <span>{post.user}</span>
                    </div>

                    <div className='misc d-flex align-items-center'>
                        
                        <span><Eye />{post.views} views</span>
                        <button><ShareFill /></button>
                    </div>
                </div>
            </div>
        )
    }

    if(post.type==='💼️ Job'){
        return(
            <div className="post" id="job" style={{height: '269px'}}>
                <p className='type'>{post.type}</p>
                <div className='heading d-flex justify-content-space-between'>
                    <p>{post.heading}</p>
                    <Dropdown> 
                        <ThreeDots onClick={toggle} style={{cursor: 'pointer', height: '28px', width:'28px'}}/>
                        <Dropdown.Menu show={dropdown}>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='placeInfo d-flex align-items-center' >
                    <div className='d-flex align-items-center' style={{gap: '4px'}}>
                        <Briefcase />{post.organisation}
                    </div>
                    <div className='d-flex align-items-center' style={{gap: '4px'}}>
                        <GeoAlt />{post.location}
                    </div>
                </div>
                <button className='jobButton' style={{color: '#02B875'}}>View Website</button>
                <div className='postInfo d-flex justify-content-space-between align-items-center'>
                    <div className='userInfo d-flex align-items-center'>
                        <img 
                        src={post.userImage} 
                        alt="userPic" />
                        <span>{post.user}</span>
                    </div>

                    <div className='misc d-flex align-items-center'>
                        <span><Eye />{post.views} views</span>
                        <button><ShareFill /></button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Post;