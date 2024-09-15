const Footer = () => {
  return (
    <footer className="mt-[10px] ">
      <header className="flex justify-center">
        <h3 className="py-[24px] text-[16px] font-semibold text-center">
          CAMPROMEDIO &copy; 2021 - {new Date().getFullYear()}
        </h3>
      </header>
    </footer>
  );
};

export default Footer;
