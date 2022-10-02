import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

const ExchangeAndRefundPage: NextPage = () => {
  return (
    <Layout title="Обмен и возврат">
      <Breadcrumbs
        title="Обмен и возврат"
        path="/exchange-and-refund"
        title2=""
      />
      <div className="container mx-auto px-4">
        <h2 className="mb-10">ОБМЕН И ВОЗВРАТ</h2>
        <p className="mb-4">
          Согласно Закону о защите прав потребителей, при дистанционном способе
          покупки обмен товара происходит через оформление возврата.
        </p>

        <h5 className="mb-4">ВОЗВРАТ ТОВАРА НАДЛЕЖАЩЕГО КАЧЕСТВА</h5>
        <p className="mb-4">
          Возврат товара надлежащего качества, если он не подходит по размеру,
          цвету, фасону или любой другой причине, производится на основании
          заявления на возврат, которое необходимо подать в течение 14 дней с
          момента покупки товара, не считая дня покупки.
        </p>
        <p className="mb-4">
          При возврате товара надлежащего качества возвращается только стоимость
          товара. Стоимость доставки, а также стоимость обратной пересылки не
          компенсируются.
        </p>
        <p className="mb-4">
          Вы не вправе отказаться от товара надлежащего качества, имеющего
          индивидуально-определенные свойства, если указанный товар может быть
          использован исключительно приобретающим его потребителем.
        </p>

        <h5 className="mb-4">УСЛОВИЯ ВОЗВРАТА ТОВАРА</h5>
        <p className="mb-4">
          Возврат товара надлежащего качества возможен при условии:
        </p>
        <p className="mb-4">
          сохранения его потребительских свойств и товарного вида (отсутствие
          следов эксплуатации и носки, наличие оригинальной и неповрежденной
          упаковки и ярлыков);
        </p>
        <p className="mb-4">
          наличия документа, подтверждающего факт и условия покупки товара
          (кассовый чек или товарный чек)*.
        </p>

        <h5 className="mb-4">ВОЗВРАТ ТОВАРА НЕНАДЛЕЖАЩЕГО КАЧЕСТВА</h5>
        <p className="mb-4">
          Под товаром ненадлежащего качества подразумевается товар, не способный
          обеспечить свои функциональные качества из-за недостатка. Возврат
          товара ненадлежащего качества производится на основании заявления на
          возврат, которое необходимо подать в течение действия гарантийного
          срока на товар.
        </p>
        <p className="mb-4">
          При возврате товара ненадлежащего качества возвращается полная
          стоимость товара, доставки и обратной пересылки (если она
          производилась за счет клиента).
        </p>
        <p className="mb-4">
          При частичном возврате стоимость доставки и обратной пересылки не
          возвращается.
        </p>

        <h5 className="mb-4">УСЛОВИЯ ВОЗВРАТА ТОВАРА</h5>
        <p className="mb-4">
          Возврат товара ненадлежащего качества возможен при условии сохранения
          документа, подтверждающего факт и условия покупки указанного товара
          (кассовый чек или товарный чек)*.
        </p>

        <h5 className="mb-4">СПОСОБЫ ВОЗВРАТА ТОВАРА</h5>
        <p className="mb-4">
          По техническим причинам возврат товара возможен не ранее, чем через 3
          (три) дня с момента покупки товара.
        </p>
        <p className="italic font-light mb-4">
          Возврат товара в розничный магазин Demix
        </p>
        <p className="font-bold mb-4">
          Если в Вашем городе есть розничный магазин Demix, вы можете
          осуществить возврат через{' '}
          <Link href="/shops">
            <a className="text-lime-400" target="_blank">
              магазин.
            </a>
          </Link>
        </p>
        <p className="mb-4">
          Для осуществления возврата необходимо обратиться на стойку
          Администратора или на кассу магазина. При себе необходимо иметь
          товарный чек*, кассовый чек* и паспорт.
        </p>
        <p className="mb-4">
          Возврат осуществляется в той же форме, в какой была произведена
          оплата.
        </p>
        <p className="mb-4">
          Если заказ был оплачен по безналичному расчёту, то получить денежные
          средства за товар вы сможете тоже только по безналичному расчёту:
          деньги возвращаются на расчетный счет или банковскую карту, с которых
          осуществлялся платеж. Срок зачисления денег на счет зависит от
          внутреннего регламента банка-получателя. Приблизительный срок – 3-5
          банковских дней.
        </p>
        <p className="italic font-light mb-4">Вызов курьера</p>
        <p className="font-bold mb-4">
          Если магазина Demix в вашем городе нет, то возврат осуществляется
          через курьера.
        </p>
        <p className="mb-4">
          Для осуществления возврата Вам необходимо обратиться в
          интернет-магазин по телефону{' '}
          <Link href="tel:84957777757">
            <a className="text-lime-400">8 (495) 777-77-57</a>
          </Link>
          , где Вам предоставят полную информацию о порядке и сроках возврата и
          проконсультируют о правилах заполнения заявления на возврат.
        </p>
        <p className="mb-4">Общие правила:</p>
        <p className="mb-4">
          Вместе с возвращаемым товаром необходимо передать курьеру оригинал
          заполненного заявления на возврат, которое находится внутри упаковки с
          заказом. В случае если Вы потеряли бланк заявления, то Вы можете
          обратиться к менеджеру интернет-магазина.
        </p>
        <p className="mb-4">
          Для отправки возвращаемого товара через курьерскую компанию,
          рекомендуем Вам упаковать товар таким образом, чтобы обеспечить его
          сохранность при транспортировке. Просим сохранять индивидуальную
          заводскую упаковку товара и общую упаковку посылки.
        </p>
        <p className="mb-4">
          Возврат денег при наличной форме оплаты заказа осуществляется:
        </p>
        <p className="mb-4">
          наличными (для Москвы и Московской области возврат денег производится
          по адресу : г.Москва, Кочновский проезд, д. 4, корп. 3, БЦ «Авиатор»);
        </p>
        <p className="mb-4">
          на лицевой счет клиента. Реквизиты Вашего банковского счета и банка
          необходимо указать в заявлении на возврат.
        </p>
        <p className="mb-4">
          Для возврата денег при наличной форме оплаты необходимо иметь при себе
          следующие документы:
        </p>
        <p className="mb-4">
          документ, удостоверяющий личность (паспорт гражданина
          РФ/загранпаспорт, временное удостоверение личности гражданина РФ,
          выдаваемое на период оформления паспорта); кассовый чек*.
        </p>
        <p className="italic font-light mb-4">Почта России</p>
        <p className="mb-4">
          В настоящее время товар, приобретенный в интернет-магазине Demix, не
          может быть возвращен через Почту России.
        </p>

        <h5 className="mb-4">СРОКИ ВОЗВРАТА ДЕНЕЖНЫХ СРЕДСТВ</h5>
        <p className="mb-4">
          Срок возврата денежных средств составляет не более 10 дней с даты
          поступления возвращенного товара в интернет-магазин Demix вместе с
          заполненным заявлением на возврат. По итогам проведения экспертизы
          товара принимается решение о возврате или не возврате денежных
          средств.
        </p>
        <p className="mb-4">
          * Отсутствие кассового или товарного чека, либо иного документа,
          удостоверяющих факт и условия покупки товара, не является основанием
          для отказа в удовлетворении требований о возврате товара. Однако мы
          оставляем за собой право проверить факт приобретения товара в нашем
          интернет-магазине. В случае отсутствия указанных документов перед
          возвратом товара просьба обратиться в интернет-магазин Demix.
        </p>
        <p className="">
          Для получения дополнительной информации и/или подачи претензий к
          качеству товара, комплектации заказа или доставке звоните на
          бесплатный номер 8 (495) 777-77-57 или пишите в службу поддержки Demix
          на электронный адрес:{' '}
          <Link href="mailto:support@demix.ru">
            <a className="text-lime-400">support@demix.ru</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default ExchangeAndRefundPage;
