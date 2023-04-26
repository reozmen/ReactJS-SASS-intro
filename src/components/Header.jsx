import headerStyle from "../scss/header.module.scss";

//* module css dosyalarını import etmek normal css dosyalarından farklıdır.
//* module css dosyalarını import ederken dosyaya bir isim vermemiz gerekir.
//* ve daha sonra bunu componenetin içinde kullanırken verdiğimiz isimle beraber kullanırız.
//* örneğin yukarıda isim olarak headerStyle verdik ve bunu aşağıda kullanırken
//* headerStyle["title"] şeklinde kullanırız.
//* veya headerStyle.title şeklinde de kullanabiliriz.
//* ama dosyamızdaki class isimlerinde tire(-) varsa . yerine [] kullanmamız gerekir.
//* örneğin headerStyle["btn-container--small"] şeklinde kullanırız.
//* headerStyle.btn-container--small şeklinde kullanamayız, hata alırız..

const Header = () => {
  return (
    <header>
      <h1 className={headerStyle["title"]}>COMMENTS</h1>
    </header>
  );
};

export default Header;
