import React, { Dispatch, Fragment, useState } from 'react';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const technology = ['Enrblast', 'Cushfoam', 'Flexzone360'];
const typeShoes = ['Кроссовки', 'Кеды', 'Бутсы'];
const sports = [
  'Спортивный стиль',
  'Футбол',
  'Бег',
  'Фитнес',
  'Волейбол',
  'Трейлраннинг',
];
const coverage = [
  'Асфальт',
  'Зал',
  'Все типы покрытий',
  'Грунт и искусственное покрытие',
  'Натуральный и исскуственный газон',
  'Пересеченная местность',
];
const seasons = ['Весна', 'Лето', 'Осень', 'Зима'];
const typePronation = ['Нейтральная пронация', 'Гиперпронация'];
const reflectiveDetails = ['Да'];
const upperMaterils = [
  'Синтетическая кожа',
  'Полиэстер',
  'Натуральная кожа',
  'Полиуретан',
  'Хлопок',
];

interface Iprops {
  activeMenuFilters: boolean;
  setActiveMenuFilters: Dispatch<boolean>;
}

const FiltersMenu = ({ activeMenuFilters, setActiveMenuFilters }: Iprops) => {
  const [activeTechnology, setActiveTechnology] = useState(false);
  const [activeTypeShoes, setActiveTypeShoes] = useState(false);
  const [activeSports, setActiveSports] = useState(false);
  const [activeCoverage, setActiveCoverage] = useState(false);
  const [activeSeasons, setActiveSeasons] = useState(false);
  const [activeTypePronation, setActiveTypePronation] = useState(false);
  const [activeReflectiveDetails, setActiveReflectiveDetails] = useState(false);
  const [activeUpperMaterils, setActiveUpperMaterils] = useState(false);

  return (
    <div
      className={
        activeMenuFilters
          ? 'fixed top-0 right-0 visible opacity-100 w-1/4 h-full bg-black/80 shadow-lg shadow-black z-50 rounded-l-2xl overflow-y-auto transition-all duration-300'
          : 'fixed top-0 -right-[100%] invisible opacity-0 w-1/4 h-full bg-black/80 shadow-lg shadow-black z-50 rounded-l-2xl overflow-y-auto transition-all duration-300'
      }
    >
      <div className="relative text-white m-4 p-4">
        <button
          className="block ml-auto mr-0 mb-10"
          onClick={() => setActiveMenuFilters(false)}
        >
          <RiArrowLeftRightFill className="text-lg hover:text-lime-400 transition-all" />
        </button>
        <div className="text-center mb-10">
          <Link href="/">
            <a>
              <Image
                src="/assets/icons/logo-demiks.svg"
                width={130}
                height={50}
                alt="logo Demix"
              />
            </a>
          </Link>
        </div>

        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">Тип обуви</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeTypeShoes}
                        onChange={setActiveTypeShoes}
                      >
                        <div className="space-y-2">
                          {typeShoes.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">Вид спорта</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeSports}
                        onChange={setActiveSports}
                      >
                        <div className="space-y-2">
                          {sports.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">Покрытие</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeCoverage}
                        onChange={setActiveCoverage}
                      >
                        <div className="space-y-2">
                          {coverage.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">Сезон</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeSeasons}
                        onChange={setActiveSeasons}
                      >
                        <div className="space-y-2">
                          {seasons.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">Технологии</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeTechnology}
                        onChange={setActiveTechnology}
                      >
                        <div className="space-y-2">
                          {technology.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">Тип пронации</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeTypePronation}
                        onChange={setActiveTypePronation}
                      >
                        <div className="space-y-2">
                          {typePronation.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">
                    СВЕТООТРАЖАЮЩИЕ ДЕТАЛИ
                  </span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeReflectiveDetails}
                        onChange={setActiveReflectiveDetails}
                      >
                        <div className="space-y-2">
                          {reflectiveDetails.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider py-3 uppercase'
                      : 'flex items-center justify-between w-full text-xs text-white text-left tracking-wider border-b py-3 uppercase'
                  }
                >
                  <span className="w-5/6 tracking-widest">МАТЕРИАЛ ВЕРХА</span>
                  <BsChevronDown
                    className={
                      open ? 'rotate-180 transform transition-all' : ''
                    }
                    width={16}
                    height={16}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className=" border-b pb-3">
                    <div className="w-full">
                      <RadioGroup
                        value={activeUpperMaterils}
                        onChange={setActiveUpperMaterils}
                      >
                        <div className="space-y-2">
                          {upperMaterils.map((item) => (
                            <RadioGroup.Option
                              key={item}
                              value={item}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-1 ring-lime-400 ring-offset-2 ring-offset-black/70'
                                    : ''
                                }
                  ${checked ? 'bg-gray-200 text-gray-400' : 'bg-transparent'}
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-medium tracking-wider  ${
                                            checked
                                              ? 'text-gray-900'
                                              : 'text-gray-200'
                                          }`}
                                        >
                                          {item}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-black/70">
                                        <MdCheckCircle className="h-6 w-6" />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
