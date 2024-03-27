import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {

  return (
    <div className="w-full h-[10vh] z-50 fixed top-0 opacity-100 backdrop-blur-lg flex items-center justify-around text-lg text-zinc-500">
     <Link href="/"> 
      <div className="bg-[url('https://nestmoodle.xyz/pluginfile.php/1/core_admin/logo/0x150/1708914414/NHS.d046134c.png')] w-36 h-[4.5vh] relative left-[4vw] bg-cover bg-center"></div>
     </Link>
      <div className="gap-[2vw] flex ">
        <Link href="/">
        <div>Нүүр</div></Link>
        <Menu as="div" className="relative inline-block text-left backdrop-blur-lg">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm   hover:text-white">
          Бидний тухай
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex justify-start absolute right-0 left-0 z-50 mt-2 w-56 origin-top-right rounded-md backdrop-blur-lg shadow-lg  focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/intro"
                 
                >
                  <div  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>ТАНИЛЦУУЛГА</div>
                  
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-slate-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  ТҮҮХЭН ЗАМНАЛ
                </a>
              )}
            </Menu.Item>
           
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    УДИРДЛАГЫН БАГ
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    <div  >
      <Link href="/info">
    <button>Мэдээлэл</button></Link>
    </div>
       
<Link href="/hutulbur">
        <div href="">Хөтөлбөр</div>
</Link>
        <a href="">Холбогдох</a>
      </div>
      <div className="gap-[1vw] flex items-center relative">
        <b className="text-md">EN</b>
        <b>|</b>
        <b className="text-white">  MN</b>
        <div  className='  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-1'>        <div className="z-50 p-1 w-full rounded-md text-white bg-gradient-to-r from-slate-800 to-slate-900">Элсэлт</div></div>
      </div>
    </div>
  );
}
