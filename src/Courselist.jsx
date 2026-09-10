import Course from './Course';
import html from './assets/html.jpg'
import css  from './assets/css.avif'
import js from './assets/js.png'
import react from './assets/react.png'
import { useState, useEffect } from 'react';

function CourseList(){

    const [courses, setcourse] = useState([
        {
            id :1,
            name :"HTML full Course" ,
            price :199 ,
            image : html ,
            rating : 5
        },
        {
            id :2,
            name : "CSS",
            price : 199,
            image : css,
            rating : 5
        },
        {
            id :3,
            name :"JavaScripts",
            price :499,
            image : js,
            rating : 4,
        },
        {
            id :4,
            name : "React",
            price : 999,
            image : react,
            rating : 5
        }
    ]);

    const [dummy, setdummy] = useState(true);

    useEffect(() => {
        console.log("useEffect Called")
        console.log(dummy)
    },[]);


    function handleDelete(id){
        console.log(id)
        const newCourse = courses.filter((course) => course.id != id )
        setcourse(newCourse)
    };

    courses.sort((x,y) => y.price - x.price)
    // courses.sort((p,g) => p.rating - g.rating)

    // const vfmCourses = courses.filter((course) => course.price<200)
    // const rcourses = courses.filter((courses) =>courses.rating>4 )
    

    const coursesList = courses.map(
        (course) => 
        <Course key={course.id} name={course.name} 
        image={course.image} 
        price={course.price} 
        rating={course.rating} delete={handleDelete} id={course.id}/> )

    return(
        <>
          {coursesList}
          <button onClick={()=>{setdummy(false)}}>dummy Button</button> 
        </>

    );
};

export default CourseList;