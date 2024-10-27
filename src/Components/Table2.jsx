import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'
import Modal from './Modal/Modal'
import Modal2 from './Modal2'

export const Table2 = () => {
    const tableData = [
        {
            "id": 1,
            "name": "John",
            "plan": "Basic",
            "startDate": "July 23, 2023",
            "paymentStatus": "PAID",
            "accountStatus": "ACTIVE"
        },
        {
            "id": 2,
            "name": "Selena",
            "plan": "Standard",
            "startDate": "August 5, 2023",
            "paymentStatus": "PENDING",
            "accountStatus": "Expired"
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
                        <div className="w-[85px]">NAME</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[90px]">PLAN</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[120px]">DATE SUBSCRIBED</div>
                    </TableHead>
                    <TableHead className='bg-[#E5FF8FCF] rounded-none'>
                        <div className="w-[90px]">PAYMENT</div>
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
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.name}</TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.plan}</TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white'>{item.startDate}</TableCell>
                        
                        <TableCell className="bg-[#424756] rounded-none text-[#D0FD3E]">
    <div
        className={`w-28 flex justify-center items-center text-xs h-10 rounded-full ${
            item.paymentStatus === 'PAID' ? 'bg-[#D0FD3E1A]' : 'bg-[#FD3E3E1A] text-[#FD3E3E]'
        }`}
    >
        {item.paymentStatus}
    </div>
</TableCell>

                        <TableCell className='bg-[#424756] rounded-none text-[#D0FD3E]'>
                        <div
        className={`w-28 flex justify-center items-center text-xs h-10 rounded-full ${
            item.accountStatus === 'ACTIVE' ? 'bg-[#D0FD3E1A]' : 'bg-[#FD3E3E1A] text-[#FD3E3E]'
        }`}
    >
        {item.accountStatus}
    </div>
                        </TableCell>
                        <TableCell className='bg-[#424756] rounded-none text-white' >
                       <Modal2></Modal2>
                        </TableCell>
                       
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
