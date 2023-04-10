import Head from "next/head";
import Header from "@components/Header/Header";
import c from "@app/styles/Home.module.css";
import Button from "@app/components/Button/Button";
import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";
import airpods from "@pictures/home/airpods.png";
import ipad from "@pictures/home/ipad.png";
import macbook from "@pictures/home/macbook.png";
import SectionSlider from "@components/SectionSlider/SectionSlider";
import Footer from "@components/Footer/Footer";
import ContactForm from "@components/ContactForm/ContactForm";
import TabRow from "@components/TabRow/TabRow";
import Tab from "@components/Tab/Tab";
import ServiceCentrePreview from "@pictures/services/service_centre.png";
import CreditPreview from "@pictures/services/rassrochka.png";
import SberPreview from "@pictures/services/sberbank.png";
import DeliveryPreview from "@pictures/services/delivery.png";
import GiftPreview from "@pictures/services/gift.png";
import TradePreview from "@pictures/services/trade_in.png";
import BuyoutPreview from "@pictures/services/buyout.png";
import IndependentPreview from "@pictures/services/independent.png";
import InsurancePreview from "@pictures/services/insurance.png";
import Section from "@components/Section/Section";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import ArrowLink from "@components/ArrowLink/ArrowLink";
import {items} from "@app/common/samples/items";

const IntroductionSlider = () => {
    const [active, setActive] = useState(0);

    const SwitchButtons = () =>
        items.map((item, ind) => (
            <button
                key={ind}
                className={c["switch-button"] + " " + (active === ind ? c["switch-button--active"] : "")}
                onClick={() => setActive(ind)}
            >
                {item.attr}
            </button>
        ));

    const Container = styled.div`
      background-image: url("${items[active].preview}");
    `;

    return (
        <div className={c["introduction-slider"]}>
            <Container className={c.introduction__container}>
                <div className={c.introduction__header}>
                    <h2>{items[active].name}</h2>
                    <Link href="/catalog" className={c.introduction__link}>
                        <Button color="purple">
                            <span>Смотреть</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.46552 4.44896C7.16736 4.73334 7 5.11803 7 5.51901C7 5.91999 7.16736 6.30468 7.46552 6.58906L13.1326 12.0379L7.46552 17.4109C7.16736 17.6953 7 18.08 7 18.481C7 18.882 7.16736 19.2667 7.46552 19.551C7.61434 19.6933 7.7914 19.8062 7.98648 19.8833C8.18156 19.9603 8.39081 20 8.60214 20C8.81348 20 9.02272 19.9603 9.2178 19.8833C9.41288 19.8062 9.58994 19.6933 9.73876 19.551L16.5265 13.1156C16.6765 12.9745 16.7956 12.8066 16.8769 12.6217C16.9582 12.4367 17 12.2383 17 12.0379C17 11.8376 16.9582 11.6392 16.8769 11.4542C16.7956 11.2693 16.6765 11.1014 16.5265 10.9603L9.73876 4.44896C9.58994 4.3067 9.41288 4.19379 9.2178 4.11673C9.02272 4.03967 8.81348 4 8.60214 4C8.39081 4 8.18156 4.03967 7.98648 4.11673C7.7914 4.19379 7.61434 4.3067 7.46552 4.44896Z"
                                    fill="white"
                                />
                            </svg>
                        </Button>
                    </Link>
                </div>
            </Container>
            <div className={c.introduction__buttons}>
                <SwitchButtons/>
            </div>
        </div>
    );
};

export default function Home() {


    const subIntroductionItems = [
        {name: "Big Sale", description: "Для хороших скидок повод не нужен", background: ""},
        {name: "AirPods Pro 2", description: "Больше музыки Меньше шума", background: airpods.src},
        {name: "Apple MacBook", description: "Быстрые и компактные. Для любых задач", background: macbook.src},
        {name: "Apple iPad", description: "Выбери свой iPad. Для развлечений и работы", background: ipad.src},
        {name: "Компьютеры iMac", description: "Все преимущества Mac  едином корпусе", background: airpods.src},
    ]

    const slider = [
        {
            preview:
                "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
            name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
            price: "114 990",
        },
        {
            preview:
                "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
            name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
            price: "114 990",
        },
        {
            preview:
                "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
            name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
            price: "114 990",
        },
        {
            preview:
                "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
            name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
            price: "114 990",
        },
        {
            preview:
                "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
            name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
            price: "114 990",
        },
    ];

    const SubIntroductionTemplate = ({background, name, description}) => {
        let Template = styled.div`
          background-image: url("${background}");
        `;

        return (
            <Template className={c['sub-introduction__item']}>
                <h3 className={c['sub-introduction__title']}>{name}</h3>
                <p className={c['sub-introduction__description']}>{description}</p>
            </Template>
        );
    };

    const SubIntroductionMapped = () => subIntroductionItems.map((item) => <SubIntroductionTemplate
        background={item.background} name={item.name} description={item.description}/>);

    return (
        <>
            <Head>
                <title>Main</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="wrap">
                <section className={c.section + " " + c["section--introduction"]}>
                    <IntroductionSlider/>
                </section>
                <section className={c.section}>
                    <div className={c["sub-introduction"]}>
                        <SubIntroductionMapped/>
                    </div>
                </section>
                <SectionSlider items={slider}>
                    <h2>Рекомендации</h2>
                </SectionSlider>
                <SectionSlider items={slider}>
                    <h2 className="text-red">Скидки %%%</h2>
                </SectionSlider>
                <Section className={c.section + ' ' + c['section--section']}>
                    <SectionHeader title="Услуги"><ArrowLink link="/service">посмотреть все услуги</ArrowLink></SectionHeader>
                    <TabRow>
                        <Tab
                            title="Сервисный центр"
                            description="Мы не только продаем, но и чиним! Квалифицированные специалисты, оригинальные запчасти и многое другое!"
                            preview={ServiceCentrePreview.src}
                        ></Tab>
                        <Tab
                            title="Рассрочка и кредит"
                            description="Почти любой товар из каталога можно приобрести в рассрочку без переплаты на срок до 6 месяцев"
                            preview={CreditPreview.src}
                        ></Tab>
                        <Tab
                            title="Рассрочка от СберБанка"
                            description="Рассмотрим заявку за несколько минут. Не нужно идти в банк и подписывать документы — всё онлайн"
                            preview={SberPreview.src}
                        ></Tab>
                    </TabRow>
                </Section>
                <section className={c.section + ' ' + c['form-section']}>
                    <h2>Остались вопросы?</h2>
                    <p className={c['form-description']}>Оставьте онлайн заявку, после чего с вами свяжется наш специалист! И да, это бесплатно</p>
                    <ContactForm></ContactForm>
                </section>
            </main>
            <Footer/>
        </>
    );
}
