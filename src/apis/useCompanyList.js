import { useState, useEffect } from "react";

const localCache = {};

export default function useCompanyList(company) {
  const [companyList, setCompanyList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!company) {
      setCompanyList([]);
    } else if (localCache[company]) {
      setCompanyList(localCache[company]);
    } else {
      requestCompanyList();
    }

    async function requestCompanyList() {
      setCompanyList([]);
      setStatus("loading");
      const res = await fetch(
        `https://localhost:44389/api/company/getAllCompanyRecords`
      );
      const json = await res.json();
      localCache[company] = json || [];
      setCompanyList(localCache[company]);
      setStatus("loaded");
    }
  }, [company]);

  return [companyList, status];
}
