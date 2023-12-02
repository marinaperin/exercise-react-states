import "./Header.css";

export default function ({
  roomUrl,
  roomAlt,
  changingClass,
  title,
  description,
  btnText,
  invite,
}) {
  return (
    <header className={changingClass}>
      <figure>
        <div id="room-box">
          <img src={roomUrl} alt={roomAlt} />
        </div>
      </figure>
      <section id="room-desc" className={changingClass}>
        <h1 className={changingClass}>{title}</h1>
        <p className={changingClass}>{description}</p>
        <button className={changingClass} id="room-btn">
          <a href="">{btnText}</a>
        </button>
        <p className={changingClass} id="invite">
          {invite}
        </p>
      </section>
    </header>
  );
}
