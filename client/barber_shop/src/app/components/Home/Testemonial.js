import React from 'react'

const Testemonial = () => {
  return (
    <div className='login relative h-[600px]  md:h-[520px] z-10 flex flex-col gap-12 items-center align-top p-4 py-12 text-white'>
        <div className=' absolute inset-0 bg-black opacity-75'></div>
      <div className='text-center  z-10 '>
        <h1 className=' text-2xl font-bold tracking-widest '>TESTEMONIAL</h1>
        <p className=' font-medium tracking-widest text-gray-200'> What our clients say about us?</p>
      </div>
      <div className=' z-10'>
        <div className=' flex flex-col  gap-4 justify-center items-center'>
          <div className=' text-center flex items-center justify-center'>
            <img className='  bg-slate-300 rounded-full h-16 w-16 ' src="/assets/icons/hairdress.png" alt=""/>
          </div>
          <div className=' flex flex-col gap-1 justify-center items-center text-center'>
            <p className=' font-bold tracking-wider'>Saleamlak Ymer</p>
            <p className=' txet-sm text-gray-200 italic md:w-1/2'>
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec urna tincidunt fringilla. Nullam auctor, purus nec
                ultrices. "
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec urna tincidunt fringilla. Nullam auctor, purus nec
                ultrices. "
            </p>
          </div>
        </div>
      </div>
      <div className=' mt-5 z-10 '>
        <button className=' border border-gray-500 p-3 rounded-md active:scale-95 duration-150'>
            Give your Testemonial
        </button>
      </div>
    </div>
  )
}

export default Testemonial
