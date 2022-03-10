const Pagination = ({
  lastPageIdx,
  goToFirstPage,
  goToPrevPage,
  goToPage,
  goToNextPage,
  goToLastPage,
  actualPageIdx,
}) => {
  const createButtonsNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= lastPageIdx; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
      <li>
        <button disabled={actualPageIdx === 1} onClick={goToFirstPage}>
          First page
        </button>
      </li>
      <li>
        <button disabled={actualPageIdx === 1} onClick={goToPrevPage}>
          Prev page
        </button>
      </li>
      {createButtonsNumbers().map((number, index) => (
        <li key={index}>
          <button
            disabled={actualPageIdx === number}
            onClick={() => goToPage(number)}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button disabled={actualPageIdx === lastPageIdx} onClick={goToNextPage}>
          Next page
        </button>
      </li>
      <li>
        <button disabled={actualPageIdx === lastPageIdx} onClick={goToLastPage}>
          Last page
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
