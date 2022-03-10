import { useState, useEffect } from "react";

const usePagination = (dataEntries, elementsOnPage = 3) => {
  const [actualPageIdx, setActualPageIdx] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(0);

  const [entriesOnSelectedPage, setEntriesOnSelectedPage] = useState([]);

  console.log(dataEntries);

  useEffect(() => {
    setLastPageIdx(Math.ceil(dataEntries.length / elementsOnPage));
  }, [dataEntries.length]);

  useEffect(() => {
    const dataForPage = [];

    for (
      let i = (actualPageIdx - 1) * elementsOnPage;
      i < actualPageIdx * elementsOnPage;
      i++
    ) {
      if (dataEntries[i]) {
        dataForPage.push(dataEntries[i]);
      }
    }

    setEntriesOnSelectedPage(dataForPage);
  }, [actualPageIdx, dataEntries.length]);

  const goToFirstPage = () => setActualPageIdx(1);
  const goToPrevPage = () => {
    if (actualPageIdx - 1 > 0) {
      setActualPageIdx((state) => state - 1);
    }
  };
  const goToNextPage = () => {
    if (actualPageIdx + 1 <= lastPageIdx) {
      setActualPageIdx((state) => state + 1);
    }
  };
  const goToPage = (page) => setActualPageIdx(page);
  const goToLastPage = () => setActualPageIdx(lastPageIdx);

  return [
    { actualPageIdx, lastPageIdx, entriesOnSelectedPage },
    { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
  ];
};

export default usePagination;
