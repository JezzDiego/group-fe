import "./styles.css";

type CardProps = {
  id: number;
  name: string;
  img_url: string;
  sci_name: string;
};

const Card = ({ id, name, img_url, sci_name }: CardProps) => {
  return (
    <div id="card">
      <img src={img_url} />
      <h2>
        #{id} - {name}
      </h2>
      <p>{sci_name}</p>
    </div>
  );
};

export default Card;
