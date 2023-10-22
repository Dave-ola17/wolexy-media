import {
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-800 text-center md:text-left text-white py-6"
    >
      <div className="container mx-auto space-y-8 md:space-y-0 md:flex md:justify-around">
        <div className="text-center flex flex-col md:text-left md:flex md:justify-start md:items-center">
          <h3 className="underline text-yellow-500 decoration-solid underline-offset-8 text-2xl font-serif">
            Contact Us
          </h3>
          <div className="flex flex-col item-center justify-center mx-auto mt-4 gap-3">
            <p className="flex flex-row gap-1">
              <FaEnvelope className="my-auto" size={15} />{" "}
              <i>ademuyiwanur81@gmail.com</i>
            </p>
            <p className="flex flex-row gap-1">
              <FaPhone className="my-auto" size={15} /> <i>+234 816 156 2003</i>
            </p>
            <p className="flex flex-row gap-1">
              <FaHome className="my-auto" size={15} />{" "}
              <i>F.U.T Gidankwano, Minna.</i>
            </p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="underline decoration-solid text-yellow-500 underline-offset-8 text-2xl font-serif">
            Quick Links
          </h3>
          <ul className="mt-4 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="underline text-yellow-500 decoration-solid underline-offset-8 text-2xl font-serif">
            Follow Us
          </h3>
          <div className="flex gap-1 justify-center md:justify-start mt-4 md:space-x-4">
            <div>
              <a
                href="https://wa.me/qr/X6KE7UFVXSZEA1"
                className="text-white hover:text-black"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
            <div>
              <a
                href="https://instagram.com/lifeezy_media?igshid=MzMyNGUyNmU2YQ=="
                className="text-white hover:text-black"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/adewole-ademuyiwa-17b81a266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-white hover:text-black"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="text-center md:text-left md:flex md:justify-start md:items-center">
          <h3 className="underline text-yellow-500 decoration-solid underline-offset-8 text-2xl font-serif">
            Developer
          </h3>
          <div className="mt-4 gap-3">
            <p className="flex flex-row gap-1">
              <FaEnvelope className="my-auto" size={15} />{" "}
              <i>dave.the.dev@gmail.com</i>
            </p>
            <p className="flex flex-row gap-1">
              <FaPhone className="my-auto" size={15} /> <i>+234 813 971 2970</i>
            </p>
            <p className="flex flex-row gap-1">
              <FaHome className="my-auto" size={15} /> <i>No.2 Alimi Road, Kaduna</i>
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
