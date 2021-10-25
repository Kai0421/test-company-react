import styled from '@emotion/styled';

const Details = styled.div`    
    border-radius: 1rem;
    border: 3px solid #BADA55;
    margin: 2rem;
`;

const CompanyRecordDetails = (props: any) =>  {
    const { id, companyName, exchange, ticker, isin, website} = props
    return (
        <Details>
            <h1>{companyName}</h1>
            <h2>{id} - {exchange} - {ticker} - {isin}</h2>
            <a> {website} </a>
        </Details>
    );
};

export default CompanyRecordDetails;