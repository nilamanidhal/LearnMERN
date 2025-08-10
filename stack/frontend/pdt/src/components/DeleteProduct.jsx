import axios from 'axios';
import  { React,useState } from 'react'

const DeleteProduct = () => {
    const [ProductId, changeId] = useState("");

   async function submitHandler(e){
         e.preventDefault();

    try {
          const deleted= await axios.delete(`http://localhost:8000/api/product/${ProductId}`)
        console.log('deleted',ProductId);
    } catch (error) {
       console.log(`error ${error}`);
    }
    }

    function formHandler(e){
        changeId(e.target.value);
        // console.log(ProductId);
    }
  return (
    <div>
        <h2>❌ Delete Product</h2>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter Id of product' value={ProductId} onChange={formHandler} />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default DeleteProduct
