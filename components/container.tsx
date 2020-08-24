export default ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
      }
    `}</style>
  </div>
);
