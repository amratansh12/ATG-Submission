import { Button,Row, Col, Container, Dropdown } from "react-bootstrap";
import Post from "../Post/Post";
import './Feed.css'
import { GeoAlt, HandThumbsUp } from "react-bootstrap-icons";

const Feed = () => {

    const data = [
        {
            postImage: "https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg?q=75&w=1710&h=906&resize=cover",
            type: "✍️ Article",
            heading: "What if famous brands had regular fonts? Meet RegularBrands!",
            description: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
            userImage: "https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
            user: 'Sarthak Kamra',
            views: '1.4k'
        },
        {
            postImage: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",
            type: "🔬️ Education",
            heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
            description: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
            userImage:"https://cdn-icons-png.flaticon.com/512/190/190613.png",
            user: 'Sarah West',
            views: '1.5k'
        },
        {
            postImage: "https://www.topgear.com/sites/default/files/2022/07/6_0.jpg",
            type: "🗓️ Meetup",
            heading: "Finance & Investment Elite Social Mixer @Lujiazui",
            time: 'Fri, 12 Oct, 2018',
            location: 'Ahmedabad, India',
            userImage:"https://cdn-icons-png.flaticon.com/512/190/190613.png",
            user: 'Ronal Jones',
            views: '1.5k'
        },
        {
            type: "💼️ Job",
            heading: "Software Developer",
            organisation: 'Innovaccer Analytics Private Ltd.',
            location: 'Noida, India',
            userImage:"https://cdn-icons-png.flaticon.com/512/190/190613.png",
            user: 'Joseph Gray',
            views: '1.5k'
        },
    ]

    const recommended = [
        {
            image: 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=',
            name: 'Leisure',
            followed: true
        },
        {
            image: 'https://blog.shillingtoneducation.com/wp-content/uploads/2020/08/Activism_0000_Layer-8.jpg',
            name: 'Activism',
            followed: false
        },
        {
            image: 'https://static.wikia.nocookie.net/prisonbreak/images/6/66/Scofield.png/revision/latest?cb=20061129185321',
            name: 'MBA',
            followed: false
        },
        {
            image: 'https://i0.wp.com/www.thestonestudio.in/wp-content/uploads/2020/09/Apollo-the-Greek-God-Sculpture-in-Marble.png?fit=1080%2C1080&ssl=1',
            name: 'Philosophy',
            followed: false
        }
    ]

    return(
        <Container fluid>   
            <div className="feedBar py-2">
                <div className="d-flex align-items-center">
                    <ul className="m-0 p-0 d-none d-sm-flex">
                        <li className="active-feed">All posts({data.length})</li>
                        <li>Article</li>
                        <li>Event</li>
                        <li>Education</li>
                        <li>Job</li>
                    </ul>

                    <ul className="m-0 p-0 d-flex d-sm-none">
                        <li className="active-feed">Posts({data.length})</li>
                    </ul>
                </div>

                <div className="buttons-feed">
                    <Dropdown className="d-none d-md-block">
                        <Dropdown.Toggle style={{background: "#edeef0", border: 'none', color: 'black'}} id="dropdown-basic">
                            Write a post
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-block d-md-none">
                        <Dropdown.Toggle style={{background: "#edeef0", border: 'none', color: 'black'}} id="dropdown-basic">
                            Filter: All
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Filter: Article</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Filter: Event</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Filter: Job</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="primary" className="d-none d-md-block">
                        <svg style={{marginRight: '4px'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clip-path="url(#clip0_1_859)">
                                <path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_859">
                                <rect width="22" height="22" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Join group
                    </Button>
                </div>
            </div>
            

            <Row>
                <Col className="d-flex justify-content-center justify-content-lg-start">
                <div>
                    {data.map(post => (
                        <Post post={post}/>
                    ))}
                </div>
                </Col>

                <Col lg={3} className="d-none d-sm-none d-lg-flex">
                <Container className="d-flex justify-content-start align-items-end px-0 py-5" style={{flexDirection: 'column'}}>
                    <div className="feed-location p-1">
                        <span><GeoAlt />Noida, India</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_1_848)">
                                <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_848">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="sidebar-info my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g opacity="0.5" clip-path="url(#clip0_1_853)">
                                <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_853">
                                <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Your location will help us serve better and extend a personalised experience.</span>
                    </div>

                    <div className="recommendedGroups">
                        <p>
                            <HandThumbsUp />
                            <span>RECOMMENDED GROUPS</span>
                        </p>

                        {recommended.map(group => (
                            <div className="recommendedGroupItem">
                                <div>
                                    <img 
                                    src={group.image} 
                                    alt="groupImage" 
                                    width={"36px"}
                                    height={"36px"}
                                    style={{borderRadius: '50%', marginRight: '12px'}}
                                    />
                                    {group.name}
                                </div>
                                <button
                                className={group.followed ? "groupFollowed" : "follow-btn"}
                                >
                                    {group.followed ? "Followed" : "Follow"}
                                </button>
                            </div>
                        ))}

                        <span
                        style={{letterSpacing: '0px', cursor: 'pointer', color: '#2f6ce5'}}
                        >See more...</span>
                    </div>
                </Container>
                </Col>
            </Row> 
        
        </Container>
    )
}

export default Feed;