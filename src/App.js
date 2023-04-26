import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./scss/App.scss";
import data from "./data";

//* data yı import edip props olarak Card componentine gönderiyoruz

function App() {
  return (
    <div>
      <Header />
      {/* //*Birinci yöntem -- data dosyasının tamamını Card componenetine props olarak gönderiyoruz*/}
      {/* <Card data={data} /> */}

      {/* //*İkinci yöntem -- data dosyasını map ile itera edip data içindeki item ların elemanlarını props olarak gönderiyoruz*/}
      {data.map((item) => {
        const { name, job, comment, img, id } = item;
        return (
          <Card key={id} name={name} job={job} comment={comment} img={img} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
