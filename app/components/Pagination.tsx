import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pagination = [];
  
  if (totalPages > 1) {
    if (currentPage != 1) {
      pagination.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="bg-[white] hover:bg-[#ffcb08] [filter:drop-shadow(1px_5px_4px_lightgray)] hover:[filter:drop-shadow(0px_0px_0px_white)]  hover:-mt-[10px] mt-[0px] transition-all  border-[1px] border-[solid] border-[lightgray] rounded-[8px] w-[45px] flex text-center justify-center h-[45px] items-center"
          disabled={currentPage === 1}
        >
          1
        </button>
      );
    }

    if (currentPage > 4) {
      pagination.push(<span key="start-ellipsis" className="px-3 py-1">...</span>);
    }

    if (currentPage > 2) {
      pagination.push(
        <button
          key={currentPage - 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-[white] hover:bg-[#ffcb08] hover:-mt-[10px] [filter:drop-shadow(1px_5px_4px_lightgray)] hover:[filter:drop-shadow(0px_0px_0px_white)] mt-[0px] transition-all border-[1px] border-[solid] border-[lightgray] rounded-[8px] w-[45px] flex text-center justify-center h-[45px] items-center"
        >
          {currentPage - 1}
        </button>
      );
    }

    pagination.push(
      <button
        key={currentPage}
        className="bg-[#ffcb08] -mt-[10px] transition border-[1px] border-[solid] border-[lightgray] rounded-[8px] w-[45px] flex text-center justify-center h-[45px] items-center"
        disabled
      >
        {currentPage}
      </button>
    );

    if (currentPage < totalPages - 1) {
      pagination.push(
        <button
          key={currentPage + 1}
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-[white] hover:-mt-[10px] mt-[0px] [filter:drop-shadow(1px_5px_4px_lightgray)] hover:[filter:drop-shadow(0px_0px_0px_white)] transition-all hover:bg-[#ffcb08] border-[1px] border-[solid] border-[lightgray] rounded-[8px] w-[45px] flex text-center justify-center h-[45px] items-center"
        >
          {currentPage + 1}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pagination.push(<span key="end-ellipsis" className="px-3 py-1">...</span>);
    }

    if (currentPage < totalPages) {
      pagination.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 ${currentPage === totalPages ? 'bg-gray-400 text-white' : 'bg-[white]  [filter:drop-shadow(1px_5px_4px_lightgray)] hover:[filter:drop-shadow(0px_0px_0px_white)] hover:-mt-[10px] mt-[0px] transition-all  hover:bg-[#ffcb08] border-[1px] border-[solid] border-[lightgray] rounded-[8px] w-[45px] flex text-center justify-center h-[45px] items-center '}`}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>
      );
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8 [@media(max-width:768px)]:fixed [@media(max-width:768px)]:bottom-[0px] [@media(max-width:768px)]:w-full [@media(max-width:768px)]:bg-[white] [@media(max-width:768px)]:h-[88px] [@media(max-width:768px)]:[filter:drop-shadow(2px_4px_15px_lightgray)]">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="bg-[white] hover:bg-[#ffcb08] transition border-[1px] border-[solid] border-[lightgray] rounded-full w-[45px] flex text-center justify-center h-[45px] items-center cursor-pointer"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pagination}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="bg-[white] hover:bg-[#ffcb08] transition border-[1px] border-[solid] border-[lightgray] rounded-full w-[45px] flex text-center justify-center h-[45px] items-center cursor-pointer"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};
