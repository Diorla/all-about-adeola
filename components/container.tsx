export default ({ children }: {children: React.ReactNode}) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.015);
      }
    `}</style>
  </div>
);
