interface link {
  title: string;
  description: string;
  address: string;
  tags: string[];
}

export default (web: link) => {
  return (
    <div className="weblink">
      <a href={web.address}>{web.title}</a>
      <div>{web.description}</div>
      <div>
        {web.tags.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
      <style jsx>{`
        .weblink {
          margin-bottom: 8px;
          box-shadow: 0 1px 1px silver;
          padding: 8px;
        }
        span {
          margin: 4px;
          font-style: italic;
          text-transform: lowercase;
        }
        span::before {
          content: "-"
        }
      `}</style>
    </div>
  );
};
