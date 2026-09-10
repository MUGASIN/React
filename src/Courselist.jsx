import Course from './Course';
import { useState, useEffect } from 'react';

function CourseList(){

    const [courses, setcourse] = useState(null);

    const [dummy, setdummy] = useState(true);

    useEffect(() =>{
        fetch('http://localhost:3000/courses')
        .then(response => {
            console.log(response)
            return response.json()
        }).then(data => setcourse(data))
    },[])


    function handleDelete(id){
        console.log(id)
        const newCourse = courses.filter((course) => course.id != id )
        setcourse(newCourse)
    };

    //courses.sort((x,y) => y.price - x.price)

    // const vfmCourses = courses.filter((course) => course.price<200)
    
    if (!courses){
        return <></>
    }

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