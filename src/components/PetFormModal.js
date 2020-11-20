import React from 'react'

export default function PetFormModal(props){
  const display = props.display ? "block" : "none"
  const { name, happiness, description, image, toggle, onSubmit, onChange, isAdopted } = props
  return(
    <div id="myModal" className="modal" style={{ display }}>
      <div className="modal-content">
        <span onClick={toggle} className="close">&times;</span>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={onChange} value={name} />
          </label>
          <br/>
          <br/>
          <label>
            Happiness:
            <input type="number" name="happiness" onChange={onChange} value={happiness} />
          </label>
          <br/>
          <br/>
          <label>
            Description:
            <textarea type="text" name="description" onChange={onChange} value={description} ></textarea>
          </label>
          <br/>
          <br/>
          <label>
            Image
            <input type="text" name="image" onChange={onChange} value={image} />
          </label>
          <br/>
          <br/>
          <label>
            Is Adopted?
          <input
            name="isAdopted"
            type="checkbox"
            checked={isAdopted}
            onChange={onChange} />
        </label>
          <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )


}
