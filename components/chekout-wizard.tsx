import React from 'react';

const ChekoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="container mx-auto px-4 mb-5 flex flex-wrap">
      {[
        'Авторизация',
        'Адрес Доставки',
        'Способ Оплаты',
        'Оформление Заказа',
      ].map((step, index) => (
        <div
          key={step}
          className={`flex-1 border-b-2 text-center ${
            index <= activeStep
              ? 'border-gray-600 text-gray-600'
              : 'border-gray-400 text-gray-400'
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ChekoutWizard;
