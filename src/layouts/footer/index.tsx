import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center py-6 px-4 text-gray-200 italic font-semibold text-lg">
      <div>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <Link href="https://instagram.com/nesathanozturk/" target="_blank">
            Neşathan ÖZTÜRK
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
