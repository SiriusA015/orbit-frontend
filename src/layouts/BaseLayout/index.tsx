export const BaseLayout = ({ children }) => {
  return (
    <>
      <div
        className="h-screen overflow-hidden relative flex flex-col"
        style={{
          background: `linear-gradient(180deg, #2D2D2D 0%, #4B4B4B 100%)`,
        }}
      >
        {children}
      </div>
    </>
  );
};
