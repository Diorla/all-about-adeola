export interface Reference {
  name: string;
  image: string;
  comment: string;
  links: React.ReactNode;
}

export default ({ name, image, comment, links }: Reference) => (
  <div className="card">
    <h1>{name}</h1>
    <div>
      <img src={image} alt={name} />
      {comment}
    </div>
    <div>{links}</div>
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
      .card > div:last-child {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </div>
);
