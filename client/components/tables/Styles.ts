import tw from 'tailwind-styled-components';

export const TableContainer = tw.div`
  flex 
  flex-col 
  items-center 
  m-4 
  p-4 
  justify-content
  `;

export const TableTitle = tw.h1`
  font-semibold 
  text-xl 
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  break-word 
  font-[Montserrat]
  mb-4
  text-blue-900
  `;

export const StyledTable = tw.table`
table-auto
border-solid
border-l-2
border-r-2
border-b-2
border-t-2
border-blue-700
`;

export const TableHead = tw.thead`
text-base
border-b-2
border-solid
border-blue-700
bg-blue-100
`;

export const TableRow = tw.tr`
`;

export const HeaderCell = tw.th`
max-w-md
py-2
px-4
text-sm
sm:text-base
md:text-lg
text-center
text-slate-600`;

export const DataCell = tw.td`
font-semibold
text-slate-500
border-2
border-dotted
border-blue-500
text-sm
sm:text-base
md:text-lg
text-center
p-1`;

export const TableBody = tw.tbody``;
