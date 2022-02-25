function HigherOrderComponent(Component) {
    function EmployeeDetailsComponent(props) {

        var styleObject =  {
            containerStyle: {
                width: "18rem", 
                margin: "20px", 
                display: "inline-block"
            }
        };
    
        return (
              <div className="card" style={styleObject.containerStyle}>
                  <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
                  <div className="card-body">
                      <div>
                          <div>
                            <p className="card-text">{props.id} <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Component props={props}></Component>
                        </div>
                        
                      </div>
                  </div>
              </div>
        )
    }
    return EmployeeDetailsComponent;
}

function WithButton(props) {
    return (
        <div>
            <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
            <input style={{marginLeft: "5px"}} type="button" name={props.id} className="btn btn-primary" value="Update" onClick={props.updateEmployee} />
        </div>
    )
}

function WithouUpdateButton(props) {
    return (
        <div>
            <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
        </div>
    )
}

function NoButton(props) {
    return (
        <div>
            <b style={{color: "red"}}>** User Cannot Perform any Action</b>
        </div>
    )
}

const NewComponent = HigherOrderComponent(NoButton)
export default NewComponent;
export var NewOtherComponent = HigherOrderComponent(WithouUpdateButton)