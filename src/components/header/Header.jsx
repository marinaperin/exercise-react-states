import "./Header.css";

export default function ({
  roomUrl,
  roomAlt,
  oldClass,
  title,
  description,
  invite,
}) {
  return (
    <header className={oldClass}>
      <figure>
        <div id="room-box">
          <img src={roomUrl} alt={roomAlt} />
        </div>
      </figure>
      <section id="room-desc" className={oldClass}>
        <h1 className={oldClass}>{title}</h1>
        <p className={oldClass}>{description}</p>
        <button className={oldClass} id="room-btn">
          <a href="">Explore Our Rooms</a>
        </button>
        <p className={oldClass} id="invite">
          {invite}
        </p>
      </section>
    </header>
  );
}
