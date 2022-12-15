import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { Store } from '../utils/store';
import Button from './button';

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
  const [activeTypeShoes, setActiveTypeShoes] = useState('');
  const [activeSports, setActiveSports] = useState('');
  const [activeCoverage, setActiveCoverage] = useState('');
  const [activeSeasons, setActiveSeasons] = useState('');
  const [activeTechnology, setActiveTechnology] = useState('');
  const [activeTypePronation, setActiveTypePronation] = useState('');
  const [activeReflectiveDetails, setActiveReflectiveDetails] = useState('');
  const [activeUpperMaterils, setActiveUpperMaterils] = useState('');

  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    switch (activeTypeShoes) {
      case 'Кроссовки': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTypeShoes,
        });
        setActiveTechnology('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Кеды': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTypeShoes,
        });
        setActiveTechnology('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Бутсы': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTypeShoes,
        });
        setActiveTechnology('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeTypeShoes, dispatch]);

  useEffect(() => {
    switch (activeSports) {
      case 'Спортивный стиль': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSports,
        });
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Футбол': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSports,
        });
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Бег': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSports,
        });
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Фитнес': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSports,
        });
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Волейбол': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSports,
        });
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Трейлраннинг': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSports,
        });
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeSports, dispatch]);

  useEffect(() => {
    switch (activeCoverage) {
      case 'Асфальт': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeCoverage,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Зал': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeCoverage,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Все типы покрытий': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeCoverage,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Грунт и искусственное покрытие': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeCoverage,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Натуральный и исскуственный газон': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeCoverage,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Пересеченная местность': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeCoverage,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeCoverage, dispatch]);

  useEffect(() => {
    switch (activeSeasons) {
      case 'Весна': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSeasons,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Лето': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSeasons,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Осень': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSeasons,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Зима': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeSeasons,
        });
        setActiveSports('');
        setActiveTypeShoes('');
        setActiveTechnology('');
        setActiveCoverage('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeSeasons, dispatch]);

  useEffect(() => {
    switch (activeTechnology) {
      case 'Enrblast': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTechnology,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Cushfoam': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTechnology,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Flexzone360': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTechnology,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeTechnology, dispatch]);

  useEffect(() => {
    switch (activeTypePronation) {
      case 'Нейтральная пронация': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTypePronation,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
      case 'Гиперпронация': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeTypePronation,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveReflectiveDetails('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeTypePronation, dispatch]);

  useEffect(() => {
    switch (activeReflectiveDetails) {
      case 'Да': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeReflectiveDetails,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveTypePronation('');
        setActiveUpperMaterils('');
        break;
      }
    }
  }, [activeReflectiveDetails, dispatch]);

  useEffect(() => {
    switch (activeUpperMaterils) {
      case 'Синтетическая кожа': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeUpperMaterils,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        break;
      }
      case 'Полиэстер': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeUpperMaterils,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        break;
      }
      case 'Натуральная кожа': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeUpperMaterils,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        break;
      }
      case 'Полиуретан': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeUpperMaterils,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        break;
      }
      case 'Хлопок': {
        dispatch({
          type: 'FILTER_METHOD_VALUE',
          payload: activeUpperMaterils,
        });
        setActiveTypeShoes('');
        setActiveSports('');
        setActiveCoverage('');
        setActiveSeasons('');
        setActiveTechnology('');
        setActiveTypePronation('');
        setActiveReflectiveDetails('');
        break;
      }
    }
  }, [activeUpperMaterils, dispatch]);

  useEffect(() => {
    resetClickHandler();
  }, []);

  const resetClickHandler = () => {
    dispatch({ type: 'RESET_FILTER_METHOD_VALUE' });
    setActiveTypeShoes('');
    setActiveTechnology('');
    setActiveSports('');
    setActiveCoverage('');
    setActiveSeasons('');
    setActiveTypePronation('');
    setActiveReflectiveDetails('');
    setActiveUpperMaterils('');
  };

  return (
    <div
      className={
        activeMenuFilters
          ? 'fixed top-0 right-0 visible opacity-100 w-5/6 sm:w-2/3 md:w-3/5 lg:w-1/3  h-full bg-black/80 shadow-lg shadow-black z-50 rounded-l-2xl overflow-y-auto transition-all duration-300'
          : 'fixed top-0 -right-[100%] invisible opacity-0 xl:w-1/3 2xl:w-1/4 h-full bg-black/80 shadow-lg shadow-black z-50 rounded-l-2xl overflow-y-auto transition-all duration-300'
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
        <Button
          title="Сбросить Фильтры"
          onClick={resetClickHandler}
          addClass=""
        />
      </div>
    </div>
  );
};

export default FiltersMenu;
