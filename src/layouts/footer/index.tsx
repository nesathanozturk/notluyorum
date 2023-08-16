import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center py-6 px-4 text-gray-700 dark:text-gray-200 font-semibold text-lg">
      <div>
        <p>
          Copyright © 2023 - Tüm hakları saklıdır.&nbsp;
          <Link
            className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
            href="https://instagram.com/nesathanozturk/"
            target="_blank"
          >
            Neşathan ÖZTÜRK
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
