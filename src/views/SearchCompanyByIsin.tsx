import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CompanyRecordDetails from "./CompanyRecordsDetails";
import CompanyRecord from "../models/CompanyRecord";

const Panel = styled.div`
  border-radius: 1rem;
  border: 3px solid #BADA55;
  margin: 2rem;
`;

const SearchCompanyById = () => {

    const [company, setCompany] = useState({} as CompanyRecord);
    const [isin, setIsin] = useState();

    useEffect(() => {
      requestCompany();
    }, []);

    function toCompanyRecord(dto: any) : CompanyRecord{
      return {
        ...dto
      };
    }

    async function requestCompany(){
        const res = await fetch(
          `https://localhost:44389/api/company/isin/${isin}`,{
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
        setCompany(toCompanyRecord(res));
      }   
      
    return(
        <Panel>
          <h2>Search Company By Isin</h2>
          <form 
            onSubmit={ (e) => {
              e.preventDefault();
              requestCompany();
            }}>

          <label>
            Search Company By 
            <input
              id="isin"
              value={isin}
              placeholder="Isin"
              onChange={(e) => setIsin(e.target.value)}
            />  
            </label>

          </form>
         
            <CompanyRecordDetails
              id={company.id}
              companyName={company.companyName}
              exchange={company.exchange}
              ticker={company.ticker}
              isin={company.isin}
              website={company.website}                    
            />
        </Panel>
    );
}

export default SearchCompanyById;