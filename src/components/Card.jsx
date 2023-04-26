import cardStyle from "../scss/card.module.scss";

//* data propsunun props olarak alıyoruz ve map fonksiyonu ile döngüye sokuyoruz.

const Card = ({ data }) => {
  return (
    <div className={cardStyle["container"]}>
      {data.map((item) => {
        //* item ın içindeki name, job, comment, img, id yi destructuring ile alıyoruz.

        const { name, job, comment, img, id } = item;
        return (
          <div className={cardStyle["card"]} key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className={cardStyle["btn-container"]}>
              <button className={cardStyle["btn-container--small"]}>
                Small
              </button>
              <button className={cardStyle["btn-container--large"]}>
                Large
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
