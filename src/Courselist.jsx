import Course from './Course';
import useFetch from './useFetch';

function CourseList(){

    const [courses, dummy, error] = useFetch('http://localhost:3000/courses');

    
    function handleDelete(id){
        console.log(id)
        const newCourse = courses.filter((course) => course.id != id )
        setcourse(newCourse)
    };

    //courses.sort((x,y) => y.price - x.price)

    // const vfmCourses = courses.filter((course) => course.price<200)
    
    if (!courses){
        return (
        <>
        {!error && <img src="data\assets\loading.gif" alt="" /> } 
        {error && <p>{error}</p>}           
        </>
        )
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

export default CourseList;  //npx json-server --watch data/dummy.json --port 3000 --static ./data 