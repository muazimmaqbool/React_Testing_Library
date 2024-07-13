import React from 'react'

/*
->getAllByRole | Lec: #20

->getAllByRole: this is used to test multiple elements

->important: we can do multiple element testing by getByRole as well but they need to have different attributes but what if both
            the elements have same attributes in that case we use getAllByRole


*/

const GetAllByRole = () => {
  return (
    <div>
        <h1>GetAllByRole Query</h1>

        {/*here both buttons are same with no attribute so we use getAllByRole */}
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>

        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
    </div>
  )
}

export default GetAllByRole