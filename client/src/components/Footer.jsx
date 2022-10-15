import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { BiChevronLeft } from "react-icons/bi";
import { BiSquareRounded } from "react-icons/bi";
// lightPrimaryColor = "#6200EE";
// primaryColor = "#3700B3";
// secondaryColor = "#03DAC5";

const FooterIcon = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <props.Icon size={80} className="text-[#6200EE]" />
      <p>{props.title}</p>
    </div>
  );
};

const Contact = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
      <div className="flex items-center gap-1 justify-center flex-wrap transition-all duration-300 transform hover:scale-105 ease cursor-pointer rounded-t-3xl">
        <p className="bg-gray-100 text-black font-semibold py-2 px-4 rounded-t flex gap-2 items-center">
          <span onClick={scrollToTop}>بازگشت به بالا</span>
          <AiFillCaretUp />
        </p>
      </div>
      <div className="flex justify-between bg-gray-100 rounded-2xl p-8">
        {/* start div */}
        <div className="leading-8">
          <div>
            <p>پشتیبانی</p>
            <div className="flex gap-4 items-center">
              <p className="text-gray-500">تلفنی:</p>
              <p>032-45264356</p>
              <p className="text-gray-500">|</p>
              <p>شنبه تا چهارشنبه 8 الی 21 - پنجشنبه 8 الی 20:30</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-gray-500">ایمیل:</p>
              <p>info@shoply.ir</p>
            </div>
          </div>
        </div>
        {/* end div */}
        <div className="flex gap-14">
          <FooterIcon Icon={TbTruckDelivery} title="ارسال سریع کالا" />
          <FooterIcon Icon={BiCheckShield} title="تضمین اصالت کالا" />
          <FooterIcon Icon={BiSupport} title="پشتیبانی تلفنی" />
          <FooterIcon Icon={TbTruckReturn} title="مهلت 7 روزه بازگشت کالا" />
        </div>
      </div>
    </>
  );
};

const footer_link = "leading-8 cursor-pointer";

const FooterLinks = (props) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="flex flex-col">
          <p className="font-semibold">با شاپلی</p>
          <p className={footer_link}>درباره شاپلی</p>
          <p className={footer_link}>تماس با شاپلی</p>
          <p className={footer_link}>فرصت های شغلی</p>
          <p className={footer_link}>فروشنده شوید</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">راهنمای خرید</p>
          <p className={footer_link}>روش های پرداخت</p>
          <p className={footer_link}>روش های ارسال کالا</p>
          <p className={footer_link}>لغو و بازگشت کالا</p>
          <p className={footer_link}>ضمانت اصالت کالا</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">خدمات مشتریان</p>
          <p className={footer_link}>راهنمای جامع</p>
          <p className={footer_link}>شرایط و قوانین</p>
          <p className={footer_link}>سوالات متداول</p>
          <p className={footer_link}>حریم خصوصی</p>
          <p className={footer_link}>باشگاه مشتریان شاپلی</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">قیمت گوشی</p>
          <p className={footer_link}>قیمت روز گوشی موبایل</p>
          <p className={footer_link}>قیمت گوشی سامسونگ</p>
          <p className={footer_link}>قیمت گوشی شیائومی</p>
          <p className={footer_link}>قیمت گوشی اپل</p>
          <p className={footer_link}>قیمت گوشی هواوی</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">قیمت کالای دیجیتال</p>
          <p className={footer_link}>قیمت هدفون، هدست، هندزفری</p>
          <p className={footer_link}>قیمت تلویزیون</p>
          <p className={footer_link}>قیمت کنسول بازی خانگی</p>
          <p className={footer_link}>قیمت لپتاپ</p>
          <p className={footer_link}>قیمت تبلت</p>
        </div>
        {/* End column */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <p className="font-semibold">با ما همراه باشید</p>
            <div className="flex items-center gap-5 text-gray-400">
              <AiOutlineInstagram />
              <TbBrandTelegram />
            </div>
          </div>
          <p className="font-semibold">از آخرین تخفیف ها با خبر شوید</p>
          <input
            className="bg-gray-100  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 "
            placeholder="ایمیل خود را وارد کنید"
          />
          <button className="text-white bg-[#03DAC5] hover:bg-[#03DAC5]  focus:outline-none font-medium rounded-lg text-sm w-[50%]  px-5 py-2.5 text-center dark:bg-[#03DAC5] dark:hover:bg-[#02b3a1] ">
            ثبت
          </button>
        </div>
      </div>
    </>
  );
};

const ApplicationReference = (props) => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-5">
        <div className="flex items-center gap-3 text-[#6200EE]">
          <BiSquareRounded size={25} />
          <p className="font-bold">کارایی بهتر در اپلیکیشن شاپلی</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="https://i.postimg.cc/7Lsxcymq/bazaar-badge2-300x89.png"
            alt="دانلود از بازار"
            className="w-28 rounded-2xl shadow-md cursor-pointer"
          />
          <img
            src="https://i.postimg.cc/mDPbW65C/emtiyaz-get-gp.png"
            alt="دانلود از گوگل پلی"
            className="w-28 rounded-2xl shadow-md cursor-pointer"
          />
          <div className="flex items-center gap-3 text-black bg-white shadow-md   focus:outline-none font-medium rounded-lg text-sm w-[50%]  px-5 py-2 text-center ">
            <p className="cursor-pointer">بیشتر</p>
            <AiFillCaretDown />
          </div>
        </div>
      </div>
    </>
  );
};

const Copyright = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 items-center">
        <div className="col-span-3">
          <p className="font-semibold mb-3">
            این وبسایت صرفا جنبه نمایشی دارد و برای رزومه کاری استفاده می شود
          </p>
          <p className="leading-7">
            آیکون ها و لوگوهای روبرو هیچ گونه صحت قانونی ندارند و صرفا برای
            نمایش و ارائه می باشند تا قالب وبسایت تکمیل به نظر برسد
          </p>
        </div>
        <div className="col-span-2">
          <div className="flex flex-row-reverse gap-10 cursor-pointer">
            <img src="https://i.postimg.cc/RZsKBdQ9/enamad.png" alt="enamad" />
            <img
              src="https://i.postimg.cc/pd3j9d66/samandehi.png
"
              alt="samandehi"
            />
          </div>
        </div>
        <hr className="mb-5" />
      </div>

      <div>
        <p>
          کلیه حقوق این سایت متعلق به{" "}
          <a href="#" className="text-[#6200EE] font-bold">
            کریپتیک
          </a>{" "}
          می باشد.
        </p>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <Contact />
      <div className="mb-5"></div>
      <FooterLinks />
      <div className="mb-5"></div>
      <ApplicationReference />
      <div className="mb-5"></div>
      <Copyright />
    </>
  );
};

export default Footer;
