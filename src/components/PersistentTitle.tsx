const PersistentTitle = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] flex flex-col justify-end"
    >
      <div
        className="pl-12 md:pl-20 lg:pl-28"
        style={{ maxWidth: '42%', minWidth: 320, paddingBottom: '24rem' }}
      >
        <h1
          className="text-white tracking-tight"
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(48px, 9vw, 128px)',
            lineHeight: 1,
            fontWeight: 300,
            letterSpacing: '-0.01em',
          }}
        >
          Triệu
          <br />
          Tóc Đẹp
        </h1>
      </div>
    </div>
  );
};

export default PersistentTitle;
