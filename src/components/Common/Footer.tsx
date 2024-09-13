import "./Footer.css";

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <a>Privacy Policy</a>
        <p>Copyright Ⓒ {date} Waves</p>
      </div>
    </>
  );
};

export default Footer;
