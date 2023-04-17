import Head from "next/head";
import Header from "@components/Header/Header";
import c from "@app/styles/Catalog.module.css";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";
import Footer from "@components/Footer/Footer";
import Tab from "@components/Tab/Tab";
import TabRow from "@components/TabRow/TabRow";
import ServiceCentrePreview from "@pictures/services/service_centre.png";
import CreditPreview from "@pictures/services/rassrochka.png";
import SberPreview from "@pictures/services/sberbank.png";
import DeliveryPreview from "@pictures/services/delivery.png";
import GiftPreview from "@pictures/services/gift.png";
import TradePreview from "@pictures/services/trade_in.png";
import BuyoutPreview from "@pictures/services/buyout.png";
import IndependentPreview from "@pictures/services/independent.png";
import InsurancePreview from "@pictures/services/insurance.png";


const breadcrumbsItems = [
    {name: "Главная", link: "/"},
    {name: "Услуги", link: "/service"},
]

export default function Service() {

    return (
        <>
            <Head>
                <title>Услуги</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="wrap">
                <Breadcrumbs items={breadcrumbsItems}/>
                <section className={[c['section'], c['section--catalog']].join(' ')}>
                    <h1 className="mb-30">Услуги</h1>
                    <TabRow>
                        <Tab
                            title="Сервисный центр"
                            description="Мы не только продаем, но и чиним! Квалифицированные специалисты, оригинальные запчасти и многое другое!"
                            preview={ServiceCentrePreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Рассрочка и кредит"
                            description="Почти любой товар из каталога можно приобрести в рассрочку без переплаты на срок до 6 месяцев"
                            preview={CreditPreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Рассрочка от СберБанка"
                            description="Рассмотрим заявку за несколько минут. Не нужно идти в банк и подписывать документы — всё онлайн"
                            preview={SberPreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Доставка и оплата"
                            description="Доставка от 390 ₽ на следующий день и самовывоз в розничном магазине. А еще можно получить заказ в пункте выдачи и постамате"
                            preview={DeliveryPreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Подарочные сертификаты"
                            description="Подарите электронный сертификат. Ведь вариантов отличных подарков так много!"
                            preview={GiftPreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Trade-in"
                            description="Сдайте свои устройства в трейд-ин и получите выгоду при покупке новых"
                            preview={TradePreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Выкуп устройства"
                            description="Сдайте свои устройства и сразу получите деньги"
                            preview={BuyoutPreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Независимые сервисные центры"
                            description="Отремонтируем ваше устройство Apple независимо от того, где и когда вы его приобрели"
                            preview={IndependentPreview.src}
                            link="/service/remont"
                        ></Tab>
                        <Tab
                            title="Программы страхования вашей техники"
                            description="Защитите свои устройства от самых распространённых рисков, в том числе не покрываемых гарантией производителя"
                            preview={InsurancePreview.src}
                            link="/service/remont"
                        ></Tab>
                    </TabRow>
                </section>
            </main>
            <Footer/>
        </>
    );
}
