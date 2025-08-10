import React, { createContext,useState } from 'react'
// import { useContext } from 'react'
import ChildA from './ChildA';



//step 1:create Context
//const UserContext=createContext();
const UserMode=createContext();
//step 2:wrap all the child inside a provider
//step 3: pass value
//step 4: export the value and go to nth child and acccec the value

const UseContext = () => {
    // const [user, setUser] = useState("Sagar")
    const [mode, setmode] = useState(false);


    const modeHandel=()=>{
      console.log("tapped");
    {  mode?( document.body.style.backgroundColor="white")&& setmode(false) : (document.body.style.backgroundColor="black") && setmode(true);}
    }

    
  return (
    <div>
      <h1>use context</h1>

        {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}

      <UserMode.Provider value={mode}>
        <ChildA/>
      </UserMode.Provider>

          <button onClick={modeHandel} className='bg-blue-500 p-3 rounded'>change mode</button>
    </div>
  )
}

export default UseContext
// export {UserContext}
export {UserMode}
