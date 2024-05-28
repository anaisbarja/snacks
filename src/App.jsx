import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { snacksList } from './snacks'

function App() {

  // let favoriteSnack = "pringles"
  // let snackCount = 0
  //       value     update function     initial value
  const [snackCount, setSnackCount]= useState(0)
  const [snacks, setSnacks]= useState(snacksList)
  const [favoriteSnack, setFavoriteSnack] = useState(null)
  console.log(snacksList)

  function updateCount(){
    // snackCount+=1
    setSnackCount(snackCount+1)
    console.log(snackCount)
    // write code to add a new random snack object to your snacks list
    // modify your code to use a state variable instead
    // let randomSnack = {id:8, name:"popcorn", count:2}

    // Method 1: spread operator
    // setSnacks([...snacks,{id:8, name:"popcorn", count:2}])
    // [{},{},{},randomSnack]

    // Method 2: adding object to array, then setting value
    let combinedSnacks = snacks
    combinedSnacks.push({id:8, name:"popcorn", count:2})
    setSnacks(combinedSnacks)
    
    // snacksList.push(randomSnack)
    console.log(snacks)
  }

  function selectsFavorite(id){

    // setFavoriteSnack(id)

    // we only have access to the id and the snacksArray
    // we want to set the favorite snack state variable to entire obj
    let favSnackObj = snacks.find(snack=>snack.id==id)
    console.log(id)
    setFavoriteSnack(favSnackObj.name)

  }


  return (
    <>
    {/* do this or do that */}
    {favoriteSnack? <p>{favoriteSnack}</p>: <p>no favorite selected</p>}
    {/* either you do or don't */}
    {/* {favoriteSnack&& <p>{favoriteSnack}</p>} */}
    {/* ternary operator */}
    {/* conditional rendering */}
    {/* whats the name of this? */}

    {/* <p>hello {favoriteSnack}</p> */}
    <p>snack count {snackCount}</p>
    <button onClick={updateCount}>update count</button>
    {
      snacks.map(({id,name,count})=>{
        return(
          <div className="card" key={id} onClick={()=>selectsFavorite(id)}>
            <p>id: {id} </p>
            <p>name: {name}</p>
            <p>count: {count}</p>
          </div>
        )
      })
    }

{/* {
      snacks.map((snack)=>{
        return(
          <div className="card" key={snack.id} onClick={selectsFavorite(snack.id)}>
            <p>id: {snack.id} </p>
            <p>name: {snack.name}</p>
            <p>count: {snack.count}</p>
          </div>
        )
      })
    } */}
     
    </>
  )
}

export default App
