import data from "../../data/data";
import Logo from "../../assets/images/logo.png";
import CopyrightSign from "../../assets/svgs/copyrightSign.svg";
import { HashLink as Link } from "react-router-hash-link";
import SocialMedia from "../../components/SocialMedia";
import FooterNavigation from "../../components/FooterNavigation";

const Footer = () => {
  return (
    <footer
      id="contact-section"
      className="h-fit w-full pb-8 pt-32 px-16 border-t border-gray-600 bg-[#0d1117]"
    >
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start gap-20 flex-wrap lg:flex-row">
          <div className="flex flex-col items-start">
            <Link>
              <span className="inline-flex items-center">
                <img src={Logo} alt="logo" width={100} height={46} />
                <h5 className="font-semibold font-lora text-2xl text-rose-600">
                  Mish Mash
                </h5>
              </span>
            </Link>
            <p className="text-base md:text-lg leading-7 font-martel sm:max-w-sm text-center md:text-left indent-1 md:indent-2 break-words">
              Come to try our food, we are waiting for you. You can check, our
              social media accounts, to find some inspiring pictures and to be
              up to date.
            </p>
            <span className="inline-flex items-center mx-auto md:mx-0 gap-x-5 mt-6">
              {data.socialMedia.map((socialHref) => {
                const Icon = socialHref.icon;
                return (
                  <SocialMedia
                    key={socialHref.id}
                    Icon={Icon}
                    socialHref={socialHref}
                  />
                );
              })}
            </span>
          </div>
          <span className="flex flex-auto lg:gap-10 flex-wrap items-center justify-around">
            <div>
              <h5 className="footer-semi-headings">Links</h5>
              <ul>
                {data.footerLinks.map((item) => {
                  return <FooterNavigation key={item.id} item={item} />;
                })}
              </ul>
            </div>
            <div>
              <h5 className="footer-semi-headings">Get in touch</h5>
              <ul>
                {data.websiteLinks.map((socialMedia) => {
                  return (
                    <li
                      key={socialMedia.id}
                      className="font-lora text-base leading-normal mt-3 ml-1 hover:text-rose-600 cursor-pointer"
                    >
                      <Link to={socialMedia.link}>{socialMedia.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </span>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center justify-center mt-4 mx-auto">
          <div className="w-fit flex justify-cebter items-center">
            <img
              src={CopyrightSign}
              alt="copyright-sign"
              width={20}
              height={20}
              className="rounded-full m-0 mr-1"
            />
            <p className="font-martel">Copyright. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
