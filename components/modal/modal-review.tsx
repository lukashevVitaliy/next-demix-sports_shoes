import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import axios from 'axios';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import { toast } from 'react-toastify';
import Modal from './modal';
import RatingReviewImpression from '../../components/rating/rating-review-impression';
import RatingReviewReliability from '../../components/rating/rating-review-reliability';
import RatingReviewFunctionality from '../../components/rating/rating-review-functionality';
import RatingReviewQuality from '../../components/rating/rating-review-quality';
import RatingReviewPhotoMatching from '../../components/rating/rating-review-photo-matching';
import {
  IPeriodOfUse,
  IFrequencyOfUse,
  IModalProps,
  ISubmitForm,
} from './modal-interface';

const periodOfUse: IPeriodOfUse[] = [
  { id: '1p', period: 'Меньше месяца' },
  { id: '2p', period: 'Около полугода' },
  { id: '3p', period: 'Больше года' },
];
const frequencyOfUse: IFrequencyOfUse[] = [
  { id: '1f', frequency: 'Ежедневно' },
  { id: '2f', frequency: 'Несколько раз в неделю' },
  { id: '3f', frequency: 'Пару раз в месяц' },
];

const ModalReview = ({ slug, name, active, onClose }: IModalProps) => {
  const [periodOfUseUser, setPeriodOfUseUser] = useState(false);
  const [frequencyOfUseUser, setFrequencyOfUseUser] = useState(false);
  const [impression, setImpression] = useState(false);
  const [reliability, setReliability] = useState(false);
  const [functionality, setFunctionality] = useState(false);
  const [quality, setQuality] = useState(false);
  const [photoMatching, setPhotoMatching] = useState(false);
  const [recommend, setRecommend] = useState(false);
  const [discommend, setDiscommend] = useState(false);
  const [policyData, setPolicyData] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHundler = async ({
    aboutProduct,
    advantage,
    disadvantages,
    nameUser,
    userCity,
  }: ISubmitForm) => {
    try {
      if (
        slug &&
        name &&
        aboutProduct &&
        advantage &&
        disadvantages &&
        nameUser &&
        userCity &&
        impression &&
        reliability &&
        functionality &&
        quality &&
        photoMatching &&
        (recommend || discommend) &&
        periodOfUseUser &&
        frequencyOfUseUser &&
        policyData
      ) {
        await axios.post('/api/reviews', {
          slug,
          name,
          aboutProduct,
          advantage,
          disadvantages,
          nameUser,
          userCity,
          impression,
          reliability,
          functionality,
          quality,
          photoMatching,
          recommend,
          discommend,
          periodOfUseUser,
          frequencyOfUseUser,
          policyData,
        });
        toast.success('Ваш отзыв успешно отправлен...');
        reset({
          aboutProduct: '',
          advantage: '',
          disadvantages: '',
          nameUser: '',
          userCity: '',
        });
        setImpression(false);
        setReliability(false);
        setFunctionality(false);
        setQuality(false);
        setPhotoMatching(false);
        setRecommend(false);
        setDiscommend(false);
        setPeriodOfUseUser(false);
        setFrequencyOfUseUser(false);
        setPolicyData(false);
        onClose();
      } else if (
        !impression ||
        !reliability ||
        !functionality ||
        !quality ||
        !photoMatching
      ) {
        toast.info('Пожалуйста, поставьте оценки товару!');
      } else if (!recommend && !discommend) {
        toast.info('Рекомендуете ли Вы данный товар?');
      } else if (
        (!periodOfUseUser && !frequencyOfUseUser) ||
        (periodOfUseUser && !frequencyOfUseUser) ||
        (!periodOfUseUser && frequencyOfUseUser)
      ) {
        toast.info('Пожалуйста, выберите срок и частоту использования товара!');
      } else if (!policyData) {
        toast.info('Необходимо согласиться с политикой обработки данных!');
      }
    } catch (err) {
      toast.error(`Ошибка: ${err}`);
    }
  };

  const handleClickRecommend = () => {
    if (discommend === false && recommend === false) {
      setRecommend(!recommend);
      setDiscommend(discommend);
    } else if (discommend === true && recommend === false) {
      setRecommend(!recommend);
      setDiscommend(!discommend);
    }
  };

  const handleClickDiscommend = () => {
    if (recommend === false && discommend === false) {
      setDiscommend(!discommend);
      setRecommend(recommend);
    } else if (recommend === true && discommend === false) {
      setDiscommend(!discommend);
      setRecommend(!recommend);
    }
  };

  const handleClickPolicy = () => {
    setPolicyData(!policyData);
  };

  return (
    <Modal title="Новый отзыв" active={active} onClose={onClose}>
      <form
        className="grid grid-cols-1 grid-flow-row gap-x-5 gap-y-2 md:grid-cols-2"
        onSubmit={handleSubmit(submitHundler)}
      >
        <p className="col-span-2 text-lime-400 font-bold tracking-wider uppercase">
          {name}
        </p>
        <div className="col-start-1 col-end-2 flex justify-between items-center">
          <p className="text-sm text-gray-400">Общее впечатление</p>
          <RatingReviewImpression
            impression={impression}
            setImpression={setImpression}
          />
        </div>
        <div className="col-start-1 col-end-2 flex justify-between items-center">
          <p className="text-sm text-gray-400">Надежность</p>
          <RatingReviewReliability
            reliability={reliability}
            setReliability={setReliability}
          />
        </div>
        <div className="col-start-1 col-end-2 flex justify-between items-center">
          <p className="text-sm text-gray-400">Функциональность</p>
          <RatingReviewFunctionality
            functionality={functionality}
            setFunctionality={setFunctionality}
          />
        </div>
        <div className="col-start-1 col-end-2 flex justify-between items-center">
          <p className="text-sm text-gray-400">Качество</p>
          <RatingReviewQuality quality={quality} setQuality={setQuality} />
        </div>
        <div className="col-start-1 col-end-2 flex justify-between items-center mb-5">
          <p className="text-sm text-gray-400">Соответствие фото</p>
          <RatingReviewPhotoMatching
            photoMatching={photoMatching}
            setPhotoMatching={setPhotoMatching}
          />
        </div>
        <div className="col-span-2 text-sm">
          <label htmlFor="aboutProduct" className="block text-gray-400 mb-1">
            Впечатления о товаре
          </label>
          <textarea
            id="aboutProduct"
            placeholder="Напиши свои впечатления"
            className="w-full"
            {...register('aboutProduct', {
              required: 'Пожалуйста, напиши свои впечатления о товаре!',
              minLength: {
                value: 2,
                message: 'Введите более 2 символов!',
              },
              maxLength: {
                value: 200,
                message: 'Введите менее 200 символов!',
              },
            })}
          />
          {errors.aboutProduct && (
            <div className="text-red-500 text-xs">
              {errors.aboutProduct.message}
            </div>
          )}
        </div>
        <div className="col-span-2 text-sm">
          <label htmlFor="aboutProduct" className="block text-gray-400 mb-1">
            Достоинства
          </label>
          <textarea
            id="advantage"
            placeholder="Опиши достоинства"
            className="w-full"
            {...register('advantage', {
              required: 'Пожалуйста, укажите преимущества товара!',
              minLength: {
                value: 2,
                message: 'Введите более 2 символов!',
              },
              maxLength: {
                value: 200,
                message: 'Введите менее 200 символов!',
              },
            })}
          />
          {errors.advantage && (
            <div className="text-red-500 text-xs">
              {errors.advantage.message}
            </div>
          )}
        </div>
        <div className="col-span-2 text-sm">
          <label htmlFor="aboutProduct" className="block text-gray-400 mb-1">
            Недостатки
          </label>
          <textarea
            id="disadvantages"
            placeholder="Опиши недостатки"
            className="w-full"
            {...register('disadvantages', {
              required: 'Пожалуйста, укажите недостатки товара!',
              minLength: {
                value: 2,
                message: 'Введите более 2 символов!',
              },
              maxLength: {
                value: 200,
                message: 'Введите менее 200 символов!',
              },
            })}
          />
          {errors.disadvantages && (
            <div className="text-red-500 text-xs">
              {errors.disadvantages.message}
            </div>
          )}
        </div>
        <div className="col-start-1 col-end-2 text-sm mb-1">
          <p className="text-gray-400 mb-1">Рекомендуешь данный товар?</p>
          <div className="flex">
            <button
              type="button"
              className={
                recommend
                  ? 'w-20 rounded bg-lime-400 text-center text-gray-600 py-2 mr-4 transition-all'
                  : 'w-20 rounded border text-center text-gray-400 py-2 mr-4 transition-all'
              }
              onClick={handleClickRecommend}
            >
              Да
            </button>
            <button
              type="button"
              className={
                discommend
                  ? 'w-20 rounded bg-black/70 text-center text-gray-200 py-2 mr-4 transition-all'
                  : 'w-20 rounded border text-center text-gray-400 py-2 mr-4 transition-all'
              }
              onClick={handleClickDiscommend}
            >
              Нет
            </button>
          </div>
        </div>

        <div className="col-start-1 col-end-2 text-sm">
          <label
            htmlFor="nameUser"
            className="block text-sm text-gray-400 mb-1"
          >
            Как тебя зовут?
          </label>
          <input
            id="nameUser"
            type="text"
            placeholder="Твое имя"
            className="w-full"
            {...register('nameUser', {
              required: 'Пожалуйста, укажите Ваше имя!',
              minLength: {
                value: 2,
                message: 'Введите более 2 символов!',
              },
              maxLength: {
                value: 20,
                message: 'Введите менее 20 символов!',
              },
            })}
          />
          {errors.nameUser && (
            <div className="text-red-500 text-xs mt-1">
              {errors.nameUser.message}
            </div>
          )}
        </div>

        <div className="text-sm">
          <label
            htmlFor="userCity"
            className="block text-sm text-gray-400 mb-1"
          >
            Откуда ты?
          </label>
          <input
            id="userCity"
            type="text"
            placeholder="Твой город"
            className="w-full"
            {...register('userCity', {
              required: 'Пожалуйста, укажите Ваш город!',
              minLength: {
                value: 2,
                message: 'Введите более 2 символов!',
              },
              maxLength: {
                value: 20,
                message: 'Введите менее 20 символов!',
              },
            })}
          />
          {errors.userCity && (
            <div className="text-red-500 text-xs mt-1">
              {errors.userCity.message}
            </div>
          )}
        </div>

        <div className="w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-sm text-gray-400 text-left p-2'
                      : 'flex items-center justify-between w-full text-sm text-gray-400 text-left border-b p-2'
                  }
                >
                  <span className="text-sm">Срок использования</span>
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
                  <Disclosure.Panel className=" border-b pb-2">
                    <div className="w-full">
                      <RadioGroup
                        value={periodOfUseUser}
                        onChange={setPeriodOfUseUser}
                      >
                        <div className="space-y-2">
                          {periodOfUse.map(({ id, period }) => (
                            <RadioGroup.Option
                              key={id}
                              value={period}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-2 ring-lime-400 ring-offset-1 ring-offset-white'
                                    : ''
                                }
                                ${
                                  checked
                                    ? 'bg-gradient-to-r from-black/80 via-gray-200 to-lime-400 text-gray-400'
                                    : 'bg-transparent'
                                }																
                                  relative flex cursor-pointer rounded-lg px-2 py-2 focus:outline-none`
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
                                              ? 'text-gray-200'
                                              : 'text-gray-400'
                                          }`}
                                        >
                                          {period}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-gray-700">
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

        <div className="w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={
                    open
                      ? 'flex items-center justify-between w-full text-sm text-gray-400 text-left p-2'
                      : 'flex items-center justify-between w-full text-sm text-gray-400 text-left border-b p-2'
                  }
                >
                  <span className="text-sm">Частота использования</span>
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
                  <Disclosure.Panel className=" border-b pb-2">
                    <div className="w-full">
                      <RadioGroup
                        value={frequencyOfUseUser}
                        onChange={setFrequencyOfUseUser}
                      >
                        <div className="space-y-2">
                          {frequencyOfUse.map(({ id, frequency }) => (
                            <RadioGroup.Option
                              key={id}
                              value={frequency}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-2 ring-lime-400 ring-offset-1 ring-offset-white'
                                    : ''
                                }
                                ${
                                  checked
                                    ? 'bg-gradient-to-r from-black/80 via-gray-200 to-lime-400 text-gray-400'
                                    : 'bg-transparent'
                                }																
                                  relative flex cursor-pointer rounded-lg px-2 py-2 focus:outline-none`
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
                                              ? 'text-gray-200'
                                              : 'text-gray-400'
                                          }`}
                                        >
                                          {frequency}
                                        </RadioGroup.Label>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-gray-700">
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

        <div className="col-span-2 flex items-center text-sm text-center text-gray-400 mt-5">
          <label className="relative block w-5 h-5 mr-2">
            <input
              type="checkbox"
              id="policy"
              checked={policyData}
              onChange={handleClickPolicy}
              className="policyInp absolute top-0 left-0 w-0 h-0 overflow-hidden invisible"
            />
            <span className="policySp absolute top-[50%] translate-y-[-50%] left-0 w-5 h-5 border border-lime-400 rounded cursor-pointer "></span>
          </label>
          <p className="">
            Даю согласие на обработку персональных данных в соответствии с
            указанными{' '}
            <Link href="/personal-data">
              <a target="_blank" className="text-lime-400">
                здесь
              </a>
            </Link>{' '}
            условиями.
          </p>
        </div>
        <button className="block mt-10 py-2 w-1/2 bg-black/80 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 transition-all ">
          Отправить
        </button>
      </form>
    </Modal>
  );
};

export default ModalReview;
