/* eslint-disable array-callback-return */
import React from 'react'

// function GetPager(totalItems, currentPage, pageSize) {
//   // default to first page
//   if (pages <= 5) {
//     middlePagination = [...Array(pages)].map((_, idx) => (
//       <button
//         key={idx + 1}
//         onClick={() => changePage(idx + 1)}
//         disabled={page === idx + 1}
//       >
//         {idx + 1}
//       </button>
//     ));
//   } else {
//     const startValue = Math.floor((page - 1) / 5) * 5;

//     middlePagination = (
//       <>
//         {[...Array(5)].map((_, idx) => (
//           <button
//             key={startValue + idx + 1}
//             disabled={page === startValue + idx + 1}
//             onClick={() => changePage(startValue + idx + 1)}
//           >
//             {startValue + idx + 1}
//           </button>
//         ))}

//         <button>...</button>
//         <button onClick={() => changePage(pages)}>{pages}</button>
//       </>
//     );

//     if (page > 5) {
//       if (pages - page >= 5) {
//         middlePagination = (
//           <>
//             <button onClick={() => changePage(1)}>1</button>
//             <button>...</button>
//             <button onClick={() => changePage(startValue)}>{startValue}</button>
//             {[...Array(5)].map((_, idx) => (
//               <button
//                 key={startValue + idx + 1}
//                 disabled={page === startValue + idx + 1}
//                 onClick={() => changePage(startValue + idx + 1)}
//               >
//                 {startValue + idx + 1}
//               </button>
//             ))}

//             <button>...</button>
//             <button onClick={() => changePage(pages)}>{pages}</button>
//           </>
//         );
//       } else {
//         let amountLeft = pages - page + 5;
//         middlePagination = (
//           <>
//             <button onClick={() => changePage(1)}>1</button>
//             <button>...</button>
//             <button onClick={() => changePage(startValue)}>{startValue}</button>
//             {[...Array(5)].map((_, idx) => (
//               <button
//                 key={startValue + idx + 1}
//                 disabled={page === startValue + idx + 1}
//                 style={
//                   pages < startValue + idx + 1 ? { display: "none" } : null
//                 }
//                 onClick={() => changePage(startValue + idx + 1)}
//               >
//                 {startValue + idx + 1}
//               </button>
//             ))}
//           </>
//         );
//       }
//     }
//   }

//   return (
//     pages > 1 && (
//       <div className="pagination">
//         <button
//           className="pagination__prev"
//           onClick={() => changePage((page) => page - 1)}
//           disabled={page === 1}
//         >
//           &#171;
//         </button>
//         {middlePagination}
//         <button
//           className="pagination__next"
//           onClick={() => changePage((page) => page + 1)}
//           disabled={page === pages}
//         >
//           &#187;
//         </button>
//       </div>
//     )
//   );
// }

const Pagination = ({totalItem , pageSize , pageNumber , currentPage}) => {
  let middlePagination;

  pageNumber = pageNumber || 1;

  // default page size is 10
  pageSize = pageSize || 3;

  // calculate total pages
  var totalPages = Math.ceil(totalItem / pageSize);

  var startPage, endPage;
  if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 0;
      endPage = totalPages;
      // eslint-disable-next-line no-unused-vars
      middlePagination = [...Array(endPage)].map((_ , idx) => {
        return( <>
         
          <button
            id="pagination" 
            key={startPage + idx + 1}
            onClick={() => currentPage(startPage + idx  + 1)}
          >
            {startPage + idx + 1}
          </button>
         
        </>)
      })
  } else {
      // more than 10 total pages so calculate start and end pages
      if (pageNumber <= 6) {
        console.log( 'page Number   =  '  + pageNumber)
          startPage = 0;
          endPage = 10;
          // eslint-disable-next-line no-unused-vars
          
          middlePagination = [...Array(10)].map((_ , idx) => {
          return( <>
            
            <button
              id="pagination"  
              key={startPage + idx +  1}
              onClick={() => currentPage(startPage + idx + 1)}
              
            >
              {startPage + idx + 1}
            </button>
            
            </>)
        })
      } else if (pageNumber + 4 >= totalPages) {
          startPage = totalPages - 10;
          endPage = totalPages ;
          // eslint-disable-next-line no-unused-vars
          
      middlePagination = [...Array(10)].map((_ , idx) => {
        return (<>
            <button
              id="pagination" 
              key={startPage +  idx + 1}
              onClick={() => currentPage(startPage + idx + 1)}
            >
            {startPage + idx + 1}
            </button>
        </>)
      })
        } else {
          startPage = pageNumber - 6 ;
          endPage =  pageNumber + 3  ;
          middlePagination = [...Array(10)].map((_ , idx) => {
           return( <>
            
            <button
              id="pagination" 
              key={startPage + idx +  1}
              onClick={() => currentPage(startPage + idx + 1)}
            >
            { startPage + idx + 1}
            </button>
            </>)
        })
      }
  }
  return(
    <>
    <p> StartPage {startPage} , pageNumber + {pageNumber} , endPage {endPage} .  totalpage = {totalPages} </p>
    {middlePagination}
    </>
  )
};

export default Pagination;