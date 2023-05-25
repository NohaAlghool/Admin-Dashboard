import React from 'react'
import './widgetSm.css'
import { Visibility } from '@material-ui/icons'
const widgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">


                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>


                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2689398/pexels-photo-2689398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1772476/pexels-photo-1772476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1753799/pexels-photo-1753799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>





            </ul>
        </div>
    )
}

export default widgetSm