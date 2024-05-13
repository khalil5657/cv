import { useState } from "react";
function Greet(){
    return (
        <div>
            <h1>Hello there JoJo!!</h1>
            {/* <img src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        </div>
        
    )
}
// export default Greet;
export {Greet as Kol}
function ListItem(props) {
    return <li>{props.animal}</li>
  }
  
  // function List(props) {
  //   return (
  //     <ul>
  //       {props.animals.map((animal) => {
  //         return <ListItem key={animal} animal={animal} />;
  //       })}
  //     </ul>
  //   );
  // }
  
// export function Appi() {
//     const [fName, setFName]= useState("")
//     const [lName, setLName]= useState("")
//     const [fullName, setFullName]= useState("");
//     function handleFNChange(e){
//       setFName(e.target.value)
//       setFullName(e.target.value + lName)
//     }
//     function handleLNChange(e){
//       setLName(e.target.value)
//       setFullName(fName + e.target.value)
//     }


//     return <>
//         <label htmlFor="">Fisr name:</label>
//         <input type="text" value={fName} onChange={handleFNChange}/>
//         <label htmlFor="">Last name:</label>
//         <input type="text" value={lName} onChange={handleLNChange}/>
//         <h5>{fullName}</h5>
//           </>
//   }

export function All(){
  const [allInfo, setAllInfo] = useState({firstName:"", lastName:"", age:"", phone:"", email:"", highshcool:"", university:""});

  function handleCV(firstName, lastName, age, phone, email, highschool, university){
    setAllInfo({firstName:firstName, lastName:lastName,
                age:age, phone:phone, email:email, highschool:highschool,
                university:university});
  }

  return (
    <div className="all">
      <Parent fun={handleCV}/>
      <Cv obj={allInfo}/>
    </div>
    
  )
}
function Parent({fun}){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [highschool, setHighschool] = useState("")
  const [university, setUniversity] = useState("")

  function handleFirstName(e){
    setFirstName(e.target.value)
  }
  function handleLastName(e){
    setLastName(e.target.value)
  }
  function handleAge(e){
    setAge(e.target.value)
  }
  function handlePhone(e){
    setPhone(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handleHighschool(e){
    setHighschool(e.target.value)
  }
  function handleUniversity(e){
    setUniversity(e.target.value)
  }
  function s(){
    fun(firstName, lastName, age, phone, email, highschool, university)
  }

  return (
    <div className="parent">
      <Personal firstName={firstName} lastName={lastName} age={age} handleFChange={handleFirstName} handleLChange={handleLastName} handleAge={handleAge} submit={s}/>
      <Contact phone={phone} email={email} handlePhoneChange={handlePhone} handleEmailChange={handleEmail} submit={s}/>
      <Education highschool={highschool} university={university} handleHighschoolChange={handleHighschool} handleUniversityChange={handleUniversity} submit={s}/>

    </div>
  )
}
function Personal(props){

  const [showState, setShowState] = useState(false)

  function changeState(){
    if (showState == true){
      setShowState(false)
      props.submit();

    }else{
      setShowState(true)
    }
    
  }

  return (showState?<section className="inputDiv">
    <label>first name:</label>
    <input type="text" value={props.firstName} onChange={props.handleFChange}/>
    <label>last name:</label>
    <input type="text" value={props.lastName} onChange={props.handleLChange}/>
    <label>age:</label>
    <input type="text" value={props.age} onChange={props.handleAge}/>
    <input type="submit" onClick={changeState}/>
  </section>:<section className="defaultDiv">
    <h1>Personal Info</h1>
    <p>fullname and age</p>
    <button onClick={changeState}>Edit</button>
  </section>)
}
function Contact(props){

    const [showState, setShowState] = useState(false)
  
    function changeState(){
      if (showState == true){
        setShowState(false)
        props.submit();

      }else{
        setShowState(true)
      }
      
    }
  
    return (showState?<section className="inputDiv">
      <label>phone:</label>
      <input type="text" value={props.phone} onChange={props.handlePhoneChange}/>
      <label>email:</label>
      <input type="text" value={props.email} onChange={props.handleEmailChange}/>
      <input type="submit" onClick={changeState}/>
    </section>:<section className="defaultDiv">
      <h1>contact info</h1>
      <p>info about how to contact me</p>
      <button onClick={changeState}>Edit</button>
    </section>)
  
}
function Education(props){

    const [showState, setShowState] = useState(false)
  
    function changeState(){
      if (showState == true){
        setShowState(false)
        props.submit();
      }else{
        setShowState(true)
      }
      
    }
  
    return (showState?<section className="inputDiv">
      <label>highschool:</label>
      <input type="text" value={props.highschool} onChange={props.handleHighschoolChange}/>
      <label>university:</label>
      <input type="text" value={props.university} onChange={props.handleUniversityChange}/>
      <input type="submit" onClick={changeState}/>
    </section>:<section className="defaultDiv">
      <h1>education info</h1>
      <p>info about my education</p>
      <button onClick={changeState}>Edit</button>
    </section>)
  
}

function Cv(props){
  return (
    <div className="cv">
      <h3>personal data</h3>
      <h5>Name: {props.obj.firstName} {props.obj.lastName}</h5>
      <h5>age: {props.obj.age}</h5>
      <h3>contact data</h3>
      <h5>Phonenumber: {props.obj.phone}</h5>
      <h5>Email: {props.obj.email}</h5>
      <h3>education data</h3>
      <h5>highschool: {props.obj.highschool}</h5>
      <h5>University: {props.obj.university}</h5>
    </div>
  )
}