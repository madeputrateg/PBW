import React, { useState } from 'react';

const Tab1Content = () => {
  return (
        <div className='grid grid-cols-2 gap-4 justify-items-center pt-8'>
            <div className=' col-span-1'>
                <div className="w-[429px] h-[488px] relative">
                    <div className="w-[429px] h-[488px] left-0 top-0 absolute bg-cyan-600 rounded-[15px]" />
                    <img className="w-[429px] h-[248px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/429x248" />
                    <div className="w-[429px] h-[248px] left-0 top-0 absolute bg-gradient-to-b from-cyan-600 to-cyan-600 rounded-[15px]" />
                    <div className="w-[429px] h-[34px] left-0 top-[214px] absolute bg-slate-100" />
                    <div className="left-[14px] top-[217px] absolute text-center text-cyan-600 text-base font-bold leading-7">Website Application</div>
                    <div className="left-[14px] top-[268px] absolute text-slate-100 text-2xl font-bold leading-7">Paket Start-Up Pro</div>
                    <div className="w-[391px] h-[92px] left-[14px] top-[312px] absolute text-slate-100 text-sm font-normal leading-normal">Lorem ipsum dolor sit amet consectetur. At elementum nulla pulvinar malesuada consequat. Integer dapibus tortor et vitae ultricies ultricies.</div>
                    <div className="left-[14px] top-[414px] absolute text-slate-300 text-sm font-semibold line-through leading-normal">Rp 1.250.000</div>
                    <div className="left-[14px] top-[438px] absolute text-center text-slate-100 text-2xl font-bold leading-7">Rp 1.000.000</div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className="w-[429px] h-[488px] relative">
                    <div className="w-[429px] h-[488px] left-0 top-0 absolute bg-cyan-600 rounded-[15px]" />
                    <img className="w-[429px] h-[248px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/429x248" />
                    <div className="w-[429px] h-[248px] left-0 top-0 absolute bg-gradient-to-b from-cyan-600 to-cyan-600 rounded-[15px]" />
                    <div className="w-[429px] h-[34px] left-0 top-[214px] absolute bg-slate-100" />
                    <div className="left-[14px] top-[217px] absolute text-center text-cyan-600 text-base font-bold leading-7">Website Application</div>
                    <div className="left-[14px] top-[268px] absolute text-slate-100 text-2xl font-bold leading-7">Paket Start-Up Pro</div>
                    <div className="w-[391px] h-[92px] left-[14px] top-[312px] absolute text-slate-100 text-sm font-normal leading-normal">Lorem ipsum dolor sit amet consectetur. At elementum nulla pulvinar malesuada consequat. Integer dapibus tortor et vitae ultricies ultricies.</div>
                    <div className="left-[14px] top-[414px] absolute text-slate-300 text-sm font-semibold line-through leading-normal">Rp 1.250.000</div>
                    <div className="left-[14px] top-[438px] absolute text-center text-slate-100 text-2xl font-bold leading-7">Rp 1.000.000</div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className="w-[429px] h-[488px] relative">
                        <div className="w-[429px] h-[488px] left-0 top-0 absolute bg-cyan-600 rounded-[15px]" />
                        <img className="w-[429px] h-[248px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/429x248" />
                        <div className="w-[429px] h-[248px] left-0 top-0 absolute bg-gradient-to-b from-cyan-600 to-cyan-600 rounded-[15px]" />
                        <div className="w-[429px] h-[34px] left-0 top-[214px] absolute bg-slate-100" />
                        <div className="left-[14px] top-[217px] absolute text-center text-cyan-600 text-base font-bold leading-7">Website Application</div>
                        <div className="left-[14px] top-[268px] absolute text-slate-100 text-2xl font-bold leading-7">Paket Start-Up Pro</div>
                        <div className="w-[391px] h-[92px] left-[14px] top-[312px] absolute text-slate-100 text-sm font-normal leading-normal">Lorem ipsum dolor sit amet consectetur. At elementum nulla pulvinar malesuada consequat. Integer dapibus tortor et vitae ultricies ultricies.</div>
                        <div className="left-[14px] top-[414px] absolute text-slate-300 text-sm font-semibold line-through leading-normal">Rp 1.250.000</div>
                        <div className="left-[14px] top-[438px] absolute text-center text-slate-100 text-2xl font-bold leading-7">Rp 1.000.000</div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className="w-[429px] h-[488px] relative">
                        <div className="w-[429px] h-[488px] left-0 top-0 absolute bg-cyan-600 rounded-[15px]" />
                        <img className="w-[429px] h-[248px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/429x248" />
                        <div className="w-[429px] h-[248px] left-0 top-0 absolute bg-gradient-to-b from-cyan-600 to-cyan-600 rounded-[15px]" />
                        <div className="w-[429px] h-[34px] left-0 top-[214px] absolute bg-slate-100" />
                        <div className="left-[14px] top-[217px] absolute text-center text-cyan-600 text-base font-bold leading-7">Website Application</div>
                        <div className="left-[14px] top-[268px] absolute text-slate-100 text-2xl font-bold leading-7">Paket Start-Up Pro</div>
                        <div className="w-[391px] h-[92px] left-[14px] top-[312px] absolute text-slate-100 text-sm font-normal leading-normal">Lorem ipsum dolor sit amet consectetur. At elementum nulla pulvinar malesuada consequat. Integer dapibus tortor et vitae ultricies ultricies.</div>
                        <div className="left-[14px] top-[414px] absolute text-slate-300 text-sm font-semibold line-through leading-normal">Rp 1.250.000</div>
                        <div className="left-[14px] top-[438px] absolute text-center text-slate-100 text-2xl font-bold leading-7">Rp 1.000.000</div>
                </div>
            </div>
    </div>
  );
};

const Tab2Content = () => {
  return (
    <div>
      {/* Konten Tab 2 */}
    </div>
  );
};

const Tab3Content = () => {
  return (
    <div>
      {/* Konten Tab 3 */}
    </div>
  );
};
const Tab4Content = () => {
  return (
    <div>
      {/* Konten Tab 3 */}
    </div>
  );
};

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='pt-12 pb-12 rounded-t-[50px] bg-slate-400'>
        <div className='max-w-6xl mx-auto'>
            <div className="flex justify-between">
                <button
                    className={`tab-button ${activeTab === 'tab1' ? 'active, bg-[#2F9DC0] px-8 py-4 rounded-full font-light text-white' : 'px-8 py-4 hover:text-[#2F9DC0]'}`}
                    onClick={() => handleTabClick('tab1')}
                >
                Website Application
                </button>
                <button
                    className={`tab-button ${activeTab === 'tab2' ? 'active bg-[#2F9DC0] px-8 py-4 rounded-full font-light text-white' : 'px-8 py-4 hover:text-[#2F9DC0]'}`}
                    onClick={() => handleTabClick('tab2')}
                >
                Mobile Application
                </button>
                <button
                    className={`tab-button ${activeTab === 'tab3' ? 'active bg-[#2F9DC0] px-8 py-4 rounded-full font-light text-white' : 'px-8 py-4 hover:text-[#2F9DC0]'}`}
                    onClick={() => handleTabClick('tab3')}
                >
                Software Development
                </button>
                <button
                    className={`tab-button ${activeTab === 'tab4' ? 'active bg-[#2F9DC0] px-8 py-4 rounded-full font-light text-white' : 'px-8 py-4 hover:text-[#2F9DC0]'}`}
                    onClick={() => handleTabClick('tab4')}
                >
                Design
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'tab1' && <Tab1Content />}
                {activeTab === 'tab2' && <Tab2Content />}
                {activeTab === 'tab3' && <Tab3Content />}
                {activeTab === 'tab4' && <Tab4Content />}
            </div>
        </div>
    </div>
  );
};

export default TabMenu;
