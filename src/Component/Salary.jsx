import React, { useEffect } from 'react'

const Salary = () => {

    useEffect(() => {
        const form = document.querySelector('form')
        const sal = document.querySelector('#sal')
        const field = document.querySelector('#salary')
        let final_sal = 0
        let total = 0
        let g_total = 0
        let access_per;
        console.log(form);
        console.log(sal);

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let salary = sal.value
            let std_ded = salary - 75000
            if (sal < 300000) {
                final_sal = sal
            }
            else {
                
                const five_per = 300000 * 0.05
                const ten_per = 300000 * 0.10
                const fifteen_per = 300000 * 0.15
                let access_sal = std_ded % 300000;
                std_ded -= access_sal
                let three_count = std_ded / 300000
                if (three_count == 2) {
                    total = five_per
                    access_per = access_sal * 0.10;
                }
                else if (three_count == 3) {
                    total = ten_per + five_per
                    access_per = access_sal * 0.15;
                }
                else if (three_count == 4) {
                    total = fifteen_per + ten_per + five_per
                    access_per = access_sal * 0.20;
                }
                else if (three_count == 5) {
                    total = 2*fifteen_per + 2*five_per + ten_per
                    access_per = access_sal * 0.25;
                }
                else if (three_count == 6 && access_sal == 0) {
                    total = 3*fifteen_per + 3*ten_per
                    access_per = access_sal * 0.30;
                }
                else {
                    std_ded += access_sal
                    total = std_ded * 0.30 * 5 + five_per
                }
            }
            g_total = (total + access_per) * 0.04;
            final_sal = std_ded - g_total;
            field.innerHTML = final_sal
        })
    }, [])

    return (
        <div className="flex items-center flex-col h-screen w-screen bg-gradient-to-tr from-slate-950  to-slate-600">
            <div className='mt-16 flex justify-center flex-col items-center p-4 border border-black md:m-10 md:w-1/3 mx-5'>
                <h1 className='text-3xl font-bold text-white'>Salary Calculator</h1>
                <div className="p-4 w-full">
                    <form action="" className='text-center'>
                        <label htmlFor="Salary" className='text-center text-2xl mb-2 font-bold'>Enter the Annual Salary</label>
                        <input type="number" className='w-full h-10 mt-3 rounded-md border-none p-4 text-2xl text-center' id='sal' />
                        <input type="submit" className='p-3 rounded-lg mt-5 cursor-pointer bg-white text-2xl' />
                    </form>
                    <h1 className='text-center text-4xl text-white font-bold mt-10'><span>Salary after IT Deduction is : </span><span id='salary'></span></h1>
                </div>
            </div>
        </div>
    )
}

export default Salary
