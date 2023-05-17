import "./Problema.css";

export const Problema = ({ title, date, description }) => {
  return (
    <div id="card">
      <div class="header-card">
        <span>{title}</span>
        <span>{date}</span>
      </div>
      <p id="description">{description}</p>
    </div>
  );
};
