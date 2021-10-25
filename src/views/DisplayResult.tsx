import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Results from './Results';

const Panel = styled.div``;

const DisplayResult = () => {

    const [companies, setCompanies] = useState([]);
  
    useEffect(() => {
      requestCompanies();
    }, [companies]); //Update when new companies are added in

    async function requestCompanies(){
        const res = await fetch(
          `https://localhost:44389/api/company/getAllCompanyRecords`,{
            method: 'GET', 
            mode: 'cors',
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': 'https://localhost:44389/'
            } 
          }
        ).then(response => {
          return response.text()
        })
        .then((data) => {
          return JSON.parse(data)
        }) 
        .catch(rejected => {
          console.log(rejected);
        });
        setCompanies(res);
      }   
      
    return(
        <Panel>
            <h1>Display All Company</h1>
            <Results companies={companies}/>
        </Panel>
    );
}

export default DisplayResult;