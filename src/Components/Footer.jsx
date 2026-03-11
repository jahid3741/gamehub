const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content mt-16">

      <aside>

        <p className="font-bold text-lg">
          GameHub
        </p>

        <p>
          Discover and support amazing indie games
        </p>

        <p>
          Copyright © {new Date().getFullYear()}
        </p>

      </aside>

    </footer>
  );
};

export default Footer;