import Shimmer from "./shimmer";

export default () => (
  <div className="weblink">
    <div className="title">
      <Shimmer />
    </div>
    <Shimmer />
    <div className="tags">
      <div className="tag">
        <Shimmer />
      </div>
      <div className="tag">
        <Shimmer />
      </div>
      <div className="tag">
        <Shimmer />
      </div>
    </div>
    <style jsx>{`
      .weblink {
        margin-bottom: 8px;
        box-shadow: 0 1px 1px silver;
        padding: 8px;
      }
      .tags {
        display: flex;
      }
      .tag {
        margin-right: 4px;
        width: 40px;
      }
      .title {
        width: 60px;
      }
    `}</style>
  </div>
);
