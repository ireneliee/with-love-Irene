import "./MovingTitle.scss";
const MovingTitle: React.FC = () => {
  return (
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">I am</p>

        <ul className="content__container__list">
          <li className="content__container__list__item">Irene Lie</li>
          <li className="content__container__list__item"> an aspiring</li>
          <li className="content__container__list__item">full-stack</li>
          <li className="content__container__list__item">developer</li>
        </ul>
      </div>
    </div>
  );
};

export default MovingTitle;
