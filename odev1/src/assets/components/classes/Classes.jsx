import React, { useState } from 'react';
import YogaImg from '../../assets/images/yoga.jpg';
import GroupImg from '../../assets/images/group.webp';
import SoloImg from '../../assets/images/solo.jpg';
import StretchImg from '../../assets/images/stret.webp';

const Classes = () => {
    const [activeClass, setActiveClass] = useState('yoga'); // Varsayılan olarak yoga içeriği gösterilecek

    const showContent = (className) => {
        setActiveClass(className);
    };

    return (
<section id="classes" className="section-white">
            <div className="shape"></div>
            <div className="container">
                <div className="section-title">
                    <h2>OUR CLASSES</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga a fugiat similique. <br />
                        Numquam, explicabo ea.</p>
                </div>
                <div className="class-btn-group">
                    <button id="yoga-btn" className={`class-btn ${activeClass === 'yoga' ? 'active' : ''}`} 
                        onClick={() => showContent('yoga')}>Yoga</button>
                    <button className={`class-btn ${activeClass === 'group' ? 'active' : ''}`} 
                        onClick={() => showContent('group')}>Group</button>
                    <button className={`class-btn ${activeClass === 'solo' ? 'active' : ''}`} 
                        onClick={() => showContent('solo')}>Solo</button>
                    <button className={`class-btn ${activeClass === 'stretching' ? 'active' : ''}`} 
                        onClick={() => showContent('stretching')}>Stretching</button>
                </div>

                {/*Yoga content*/}
                {activeClass === 'yoga' && (
                    <div id="yoga" className="content-box">
                    <div className="content">
                        <article>
                            <h3>Why are your Yoga?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod perspiciatis vero
                                mollitia temporibus placeat enim! Veritatis doloremque obcaecati placeat asperiores
                                soluta, vel voluptatem laudantium ullam possimus. Quisquam, eum aliquid?</p>
                        </article>
                        <article>
                            <h3>When comes Yoga your time?</h3>
                            <p>Saturday-Sunday: 8:00am - 10:00am</p>
                            <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                            <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                        </article>
                    </div>
                    <img src={YogaImg} alt="" />
                </div>
                )}
                
                {/*Group content*/}
                { activeClass === 'group' && (
                    <div id="group" className="content-box" >
                    <div className="content">
                        <article>
                            <h3>Do you want a Group training?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis natus voluptas
                                consequatur provident eius vitae excepturi cupiditate cumque explicabo quaerat iure,
                                fugiat debitis!</p>
                        </article>
                        <article>
                            <h3>When comes Group your time?</h3>
                            <p>Saturday-Sunday: 10:00am - 12:00pm</p>
                            <p>Monday-Tuesday: 3:00pm - 5:00pm</p>
                            <p>Wednesday-Friday: 8:00pm - 10:00pm</p>
                        </article>
                    </div>
                    <img src={GroupImg} alt="" />
                </div>
                )}
                
                {/*Solo content*/}
                { activeClass === 'solo' && (
                    <div id="solo" className="content-box">
                    <div className="content">
                        <article>
                            <h3>Why are your Solo?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis natus voluptas
                                consequatur provident eius vitae excepturi cupiditate cumque explicabo quaerat iure,
                                fugiat debitis!</p>
                        </article>
                        <article>
                            <h3>When comes Solo your time?</h3>
                            <p>Saturday-Sunday: 8:00am - 10:00am</p>
                            <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                            <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                        </article>
                    </div>
                    <img src={SoloImg} alt="" />
                </div>
                )}
                
                {/*Stretching content*/}
                { activeClass === 'stretching' && (
                    <div id="stretching" className="content-box">
                    <div className="content">
                        <article>
                            <h3>Why are your Stretching?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis natus voluptas
                                consequatur provident eius vitae excepturi cupiditate cumque explicabo quaerat iure,
                                fugiat debitis!</p>
                        </article>
                        <article>
                            <h3>When comes Stretch your time?</h3>
                            <p>Saturday-Sunday: 8:00am - 10:00am</p>
                            <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                            <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                        </article>
                    </div>
                    <img src={StretchImg} alt="" />
                </div>
                )}
            </div>
        </section>
    )
}
export default Classes;