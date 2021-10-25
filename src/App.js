import styled from '@emotion/styled'
import './App.css';
import DisplayResults from './views/DisplayResult';
import SearchCompanyById from './views/SearchCompanyById';
import SearchCompanyByIsin from './views/SearchCompanyByIsin';
import AddNewCompanyRecord from './views/AddNewCompanyRecord';
import UpdateNewCompany from './views/UpdateCompanyRecord'

function App() {

  const MainDiv = styled.div`
  `;  
  const InnerDiv = styled.div``;

  const LeftDiv = styled.div`
    float: left;
    width: 50%
  `;
  const RighDiv = styled.div`
    float: right;
    width: 50%
  `;
 
  return (

    <MainDiv className="App">
      <h1>Company Records</h1>
      <InnerDiv>
        <LeftDiv>
          <UpdateNewCompany/>
          <AddNewCompanyRecord/>
          <SearchCompanyById/>
          <SearchCompanyByIsin/>
        </LeftDiv>


        <RighDiv>
          <DisplayResults/>
        </RighDiv>
      </InnerDiv>      
    </MainDiv>
  );
}

export default App;
