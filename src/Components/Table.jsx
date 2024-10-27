import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'
import Modal from './Modal/Modal'

export const TableComponent = () => {
    const tableData = [
        {
            "id": 1,
            "date": "July 23, 2023",
            "name": "John",
            "gender": "Female",
            "email": "john@gmail.com"
        },
        {
            "id": 2,
            "date": "Aug 5, 2023",
            "name": "Selena",
            "gender": "Female",
            "email": "john@gmail.com"
        }
    ]
      
    return (
        <Table className="rounded-none"> {/* Apply rounded-none to the whole table */}
            <TableHeader className="rounded-none">
                <TableRow className="rounded-none">
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="max-w-[250px]">SL</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[120px]">REGISTERED NO.</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[85px]">NAME</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[90px]">GENDER</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[90px]">EMAIL</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[80px]">STATUS</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[80px]">ACTION</div>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((item) => (
                    <TableRow key={item.id} className="rounded-none border-none ">
                        <TableCell className='bg-[#424756] rounded-none text-white'>
                            <div className="max-w-[250px] truncate">{item.id}</div>
                        </TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.date}</TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.name}</TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.gender}</TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.email}</TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-[#D0FD3E]'><div className='w-28 flex justify-center items-center text-xs bg-[#D0FD3E1A] h-10 rounded-full'>
                        SUBSCRIBER</div></TableCell>
                        <TableCell className='bg-[#424756] rounded-none'>
                              <div className='flex justify-center gap-4 items-center'>
                              <div className='w-6 h-6 flex justify-center items-center border border-[#D0FD3E] rounded-lg'>
                               <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.84375 5C4.84375 4.62704 4.99191 4.26935 5.25563 4.00563C5.51935 3.74191 5.87704 3.59375 6.25 3.59375C6.62296 3.59375 6.98065 3.74191 7.24437 4.00563C7.50809 4.26935 7.65625 4.62704 7.65625 5C7.65625 5.37296 7.50809 5.73065 7.24437 5.99437C6.98065 6.25809 6.62296 6.40625 6.25 6.40625C5.87704 6.40625 5.51935 6.25809 5.25563 5.99437C4.99191 5.73065 4.84375 5.37296 4.84375 5Z" fill="#D0FD3E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 6.025 0.265625 6.36937 0.796875 7.06C1.8575 8.4375 3.63625 10 6.25 10C8.86375 10 10.6425 8.4375 11.7031 7.06C12.2344 6.37 12.5 6.02437 12.5 5C12.5 3.975 12.2344 3.63063 11.7031 2.94C10.6425 1.5625 8.86375 0 6.25 0C3.63625 0 1.8575 1.5625 0.796875 2.94C0.265625 3.63125 0 3.97563 0 5ZM6.25 2.65625C5.6284 2.65625 5.03226 2.90318 4.59272 3.34272C4.15318 3.78226 3.90625 4.3784 3.90625 5C3.90625 5.6216 4.15318 6.21774 4.59272 6.65728C5.03226 7.09682 5.6284 7.34375 6.25 7.34375C6.8716 7.34375 7.46774 7.09682 7.90728 6.65728C8.34682 6.21774 8.59375 5.6216 8.59375 5C8.59375 4.3784 8.34682 3.78226 7.90728 3.34272C7.46774 2.90318 6.8716 2.65625 6.25 2.65625Z" fill="#D0FD3E"/>
</svg>

                               </div>
                               <Modal></Modal>
                              </div>

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
