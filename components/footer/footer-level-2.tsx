import { MdComputer } from 'react-icons/md';

export default function FooterLevel_2() {
  return (
    <div className="bg-lime-400">
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <div className="text-xs text-center font-light mb-2">
          <p>© 2022 Sport & Fashion Management Pte. Ltd. All Rights Reserved</p>
          <p>
            Demix является зарегистрированным товарным знаком The Sport &
            Fashion Management Pte. Все права защищены.
          </p>
          <p>
            ООО &quot;Спортмастер&quot;. Юр. адрес: 117437, г. Москва, улица
            Миклухо-Маклая, д. 10, корп. 2, комн. 102. ОГРН: 1057747320278
          </p>
        </div>
        <div className="flex justify-start">
          <p className="flex italic text-xs text-gray-600 font-light text-center">
            <MdComputer className="text-lg mr-2" />
            Разработка и дизайн SPA - приложения:
            <br />
            Лукашев Виталий
          </p>
        </div>
      </div>
    </div>
  );
}
