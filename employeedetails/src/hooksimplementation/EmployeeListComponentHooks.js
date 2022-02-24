import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import EmployeeDetailsComponent from "../components/EmployeeDetailsComponent"

export default function EmployeeListComponentHooks(){
    var [employeeList, setEmpList] = useState([]);

    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee/Getemps")
        dataPromise.then((response) => {
            setEmpList(response.data);
        })
    },[])
    
    return(
        <div>
            <h1>Employee list is:
            {employeeList.map((employee) => {

return <EmployeeDetailsComponent key={employee.id} {...employee} ></EmployeeDetailsComponent>

})}</h1>   
        </div>
    )

}