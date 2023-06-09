import Head from "next/head";
import Header from "@components/Header/Header";
import c from "@app/styles/Product.module.css";
import Breadcrumbs from "@app/components/Breadcrumbs/Breadcrumbs";
import ProductGallery from "@app/components/ProductGallery/ProductGallery";
import RadioButton from "@app/components/RadioButton/RadioButton";
import Button from "@app/components/Button/Button";
import LikeProductSlider from "@app/components/LikeProductSlider/LikeProductSlider";
import CharsArticle from "@app/components/CharsArticle/CharsArticle";
import Footer from "@components/Footer/Footer";

const breads = [
  { name: "Главная", link: "/" },
  { name: "Apple", link: "/" },
  { name: "iPhone", link: "/" },
  { name: "iPhone 14 pro", link: "/" },
];

const chars = [
  { label: "Гарантия предоставляется:", value: "От магазина" },
  { label: "Объем встроенной памяти:", value: "2G, 3G, 4G, 5G, Wi-Fi" },
  { label: "Диагональ дисплея:", value: "NanoSIM и eSIM" },
  { label: "Основная камера:", value: "128 ГБ  256ГБ  512ГБ" },
  { label: "Модуль NFC:", value: "Три модуля (48 + 12 + 12 Mpix + 3D ToF)" },
  { label: "Операционная система:", value: "Да" },
  { label: "Комплектация:", value: "iPhone с iOS, кабель USB Type-C/Lightning, документация" },
];

const slider = [
  {
    preview:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
    name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
    price: "114 990 ₽",
  },
  {
    preview:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
    name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
    price: "114 990 ₽",
  },
  {
    preview:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
    name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
    price: "114 990 ₽",
  },
  {
    preview:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
    name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
    price: "114 990 ₽",
  },
  {
    preview:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/449cb666b727649cff62fe809f7aef8b/1e1c38dddec3afc30852238aba122d91dd490a33a5eeff1c86cdf090fc81130f.jpg.webp",
    name: "Наушники Apple AirPods Pro с зарядным футляром MagSafe (2-го поколения; 2022)",
    price: "114 990 ₽",
  },
];

const images = [
  {
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/0/0/dd7baa61979e66f63325704aed3b6d0d/97c5cac2aabbc83a09317e4d7677d6d626118dbf0370881c9229fb2fc494644e.jpg.webp",
  },
  {
    image:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9111deb91cfa178540597660795ce475/d23194c7f575a35f9b0c80e5a0ef14b22fc3a8bde3b17229dc65f18723770673.jpg.webp",
  },
  {
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/4b1bd26fec220f046fe32d3895f51e87/f18f5a76a181c3989d857679947a8244f94e29311f30d380218ce7263402a939.jpg.webp",
  },
  {
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/18828aad4b6ce6b111c6f16128bd4ea8/43215f315af627e901ae83e409ab3c7182b0647b4a0fe1f7fda53b1e0a309a0f.jpg.webp",
  },
];

export default function Product() {
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="wrap">
        <Breadcrumbs items={breads} />

        <section className={c.section + " " + c["section--introduction"]}>
          <ProductGallery items={images} />
          <div className={c.introduction}>
            <div className={c.introduction__header}>
              <h1>Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)</h1>
            </div>
            <form className={c.introduction__content}>
              <p className={c.introduction__article}>Артикул: 18503</p>
              <p className={c.introduction__price}>109 990₽</p>
              <fieldset>
                <RadioButton attr={"sim"} name={"eSIM"} value={"109 990₽"} />
                <RadioButton attr={"sim"} name={"nano-SIM и eSIM"} value={"116 990₽"} />
                <RadioButton attr={"sim"} name={"2 nano-SIM"} value={"122 990₽"} disabled={true} />
              </fieldset>
              <fieldset>
                <RadioButton attr={"memory"} name={"128 gb"} value={"109 990₽"} />
                <RadioButton attr={"memory"} name={"256 gb"} value={"116 990₽"} />
              </fieldset>
              <Button color="purple">
                <div className={c.form__submit}>
                  <span>В корзину</span>
                </div>
              </Button>
            </form>
          </div>
        </section>
        <section className={c.section + " " + c["section--description"]}>
          <h2>Характеристики</h2>

          <CharsArticle title="Основные характеристики" items={chars} />
          <CharsArticle title="Общие характеристики" items={[...chars, ...chars]} />
          <CharsArticle title="Стандарты связи" items={[...chars, ...chars]} />
        </section>

        <section className={c.section + " " + c["section--like"]}>
          <h2>Похожие товары</h2>
          <LikeProductSlider items={slider} />
        </section>
      </main>
      <Footer />
    </>
  );
}
