import CompanyRecordDetails from "./CompanyRecordsDetails";
import styled from "@emotion/styled";

const Company = styled.div`
`;

const Results = ({ companies }) => {
    return (
        <Company className="search">
            { !companies.length ? (
                <h2> No company Found </h2>
            ): (
                companies.map((company) => (
                    <CompanyRecordDetails
                        id={company.id}
                        companyName={company.companyName}
                        exchange={company.exchange}
                        ticker={company.ticker}
                        isin={company.isin}
                        website={company.website}                    
                    />)
                )
            )
        }
        </Company>
    )
};

export default Results