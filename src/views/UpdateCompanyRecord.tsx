import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Panel = styled.div`
    border-radius: 1rem;
    border: 3px solid #BADA55;
    margin: 2rem;
    padding: 0 0 10px 0;
  `;

const SearchCompanyById = () => {
  const [name, setName] = useState("");
  const [exchange, setExchange] = useState("");
  const [ticker, setTicker] = useState("");
  const [isin, setIsin] = useState("");
  const [website, setwebsite] = useState("");

    async function AddNewCompany(){
      const newCompany = {
        companyName: name,
        exchange: exchange,
        ticker: ticker,
        isin: isin,
        website: website
      };
        const res = await fetch(
          `https://localhost:44389/api/company/update`,{
            method: 'PATCH', 
            mode: 'cors',
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': 'https://localhost:44389/'
            },
            body: JSON.stringify(newCompany)
          }
        ).then(response => {
          if (response.status === 400)
          {
            alert("Unable to update the company record, Please re-enter the correct details.")
          }
        })
        .catch(rejected => {
          console.log(rejected);
        });
      }   
      
    return(
        <Panel>
          <h2>Update Existing Company</h2>
          <form 
            onSubmit={ (e) => {
              e.preventDefault();
                           
              AddNewCompany();
            }}>

          <label>            
            <input
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />  
            </label>

            <label>            
            <input
              id="exchange"
              value={exchange}
              placeholder="Exchange"
              onChange={(e) => setExchange(e.target.value)}
            />  
            </label>

            <label>            
            <input
              id="ticker"
              value={ticker}
              placeholder="Ticker"
              onChange={(e) => setTicker(e.target.value)}
            />  
            </label>

            <label>            
            <input
              id="isin"
              value={isin}
              placeholder="Isin"
              onChange={(e) => setIsin(e.target.value)}
            />  
            </label>

            <label>            
            <input
              id="website"
              value={website}
              placeholder="Website"
              onChange={(e) => setwebsite(e.target.value)}
            />  
            </label>
            <button>Submit</button>
          </form>
        </Panel>
    );
}

export default SearchCompanyById;