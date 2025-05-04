import React, { useContext } from 'react'
import { component } from '../dummyData';
import { contextApi } from '../utils/context';

const SearchRestaurants = () => {
  //const [openSearch, setOpenSearch] = useState<boolean>(false)
    const context = useContext(contextApi);
  
    if (!context) {
      throw new Error('MyComponent must be used within a ContextProvider');
    }
  
    const { openSearch, setOpenSearch } = context;
  return (
    <div className='absolute left-0 top-[80px] bg-[#FFFFFF] hide-scrollbar overflow-y-scroll w-full h-screen'>
      <div>
        <h1 className='ml-20 max-sm:ml-5 text-[22px] tracking-[1px] my-5 font-[600]'>Categories</h1>
        <div>
          {
            component.map((item) => {
              return (
                <div key={item.id} className='py-7 max-sm:p-5 cursor-pointer hover:bg-[#f7f7f7] px-20 border-[#f7f7f7] border-b-[1px]'>
                  <p className='text-[16px] tracking-[1px] font-[600]'>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchRestaurants