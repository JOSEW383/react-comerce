import "./ProductPagination.css";

function ProductPagination({
  currentPage,
  handlePageChange,
  totalPages,
  factError,
}) {
  if (totalPages === 0 || factError) {
    return null;
  }

  function handleNextPage() {
    handlePageChange(currentPage + 1);
  }

  function handlePrevPage() {
    handlePageChange(currentPage - 1);
  }

  return (
    <div className="pagination-footer">
      <button
        className="pagination-button"
        onClick={handlePrevPage}
        disabled={currentPage < 2}
      >
        Prev page
      </button>
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        Next page
      </button>
    </div>
  );
}

export default ProductPagination;
