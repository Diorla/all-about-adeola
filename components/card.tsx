export interface PersonalInfo {
  name: string;
  image: string;
  comment: string;
  links: React.ReactNode;
}

export default (props: PersonalInfo) => (
  <div className="card">
    <h1>{props.name}</h1>
    <div>
      <img src={props.image} alt={props.name} />
      {props.comment}
    </div>
    <div>{props.links}</div>
    <style jsx>{`
      h1 {
        font: 24px "Century Gothic", Futura, sans-serif;
      }
      .card {
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;
        padding: 8px;
      }
      .card img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        float: left;
        margin: 2px;
      }
    `}</style>
  </div>
);
