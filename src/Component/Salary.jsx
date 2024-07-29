import React, { useEffect } from 'react'

const Salary = () => {

    useEffect(() => {
        const form = document.querySelector('form')
        const sal = document.querySelector('#sal')
        const field = document.querySelector('#salary')
        const it = document.querySelector('#it');
        let final_sal = 0
        let total = 0
        let g_total = 0
        let access_per;
        let access_sal;
        let std_ded
        console.log(form);
        console.log(sal);

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let salary = sal.value
            std_ded = salary - 75000
            if (salary < 375000) {
                final_sal = salary
                field.innerHTML = final_sal
                it.innerHTML = 0
            }
            else{
                
                const five_per = 300000 * 0.05
                const ten_per = 300000 * 0.10
                const fifteen_per = 300000 * 0.15
                console.log(five_per);
                console.log(ten_per);
                console.log(fifteen_per);
                access_sal = std_ded % 300000;
                console.log(access_sal);
                std_ded -= access_sal
                console.log(std_ded);
                let three_count = std_ded / 300000
                console.log(three_count);
                if(three_count == 1){
                    total = 0;
                    access_per = access_sal * 0.05;
                }
                else if (three_count == 2) {
                    total = five_per
                    access_per = access_sal * 0.10;
                }
                else if (three_count == 3) {
                    total = ten_per + five_per
                    access_per = access_sal * 0.15;
                }
                else if (three_count == 4) {
                    total = fifteen_per + five_per * 3
                    access_per = access_sal * 0.20;
                }
                else if (three_count == 5) {
                    total = fifteen_per + five_per + ten_per * 3
                    access_per = access_sal * 0.25;
                }
                else if (three_count == 6) {
                    total = 3 * fifteen_per + ten_per * 3
                    access_per = access_sal * 0.30;
                }
                else {
                    std_ded += access_sal
                    total = 3 * fifteen_per + ten_per * 3 + five_per * 6
                    access_per = access_sal * 0.30;
                    console.log(total);
                }
            console.log(access_per);
            console.log(total);
            console.log(access_per + total);
            let four_percent = (total + access_per) * 0.04;
            console.log(four_percent);
            g_total = total + access_per + four_percent
            console.log(g_total);
            console.log(std_ded);
            final_sal = (std_ded + access_sal) - g_total;
            console.log(final_sal);
            it.innerHTML = g_total
            field.innerHTML = final_sal
            }
            
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
                    <h1 className='text-center text-4xl text-white font-bold mt-10'><span>Income Tax to be deducted : <span id='it'></span></span></h1>
                    <h1 className='text-center text-4xl text-white font-bold mt-10'><span>Salary after IT Deduction is : </span><span id='salary'></span></h1>
                </div>
            </div>
        </div>
    )
}

export default Salary
