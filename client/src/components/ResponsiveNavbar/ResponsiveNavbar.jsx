import React from "react";
import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ResponsiveNavbar = () => {
  return (
    <>
      <div className="wrapper shadow-lg">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <GiHamburgerMenu size={30} />
          </label>
          <div className="content">
            <div className="logo">
              <a href="#">شاپلی</a>
            </div>
            <ul className="links shadow-2xl">
              <li>
                <a href="#" className="desktop-link">
                  Services
                </a>
                <input type="checkbox" id="show-services" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BiCategoryAlt />
                    <label htmlFor="show-services">
                      <div className="flex gap-24">
                        <p className="text-base">دسته بندی محصولات</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="#" className="desktop-link">
                      More Items
                    </a>

                    <input type="checkbox" id="show-phones" />
                    <label htmlFor="show-phones">
                      <div className="flex gap-5 justify-between">
                        <p className="text-base mb-1">موبایل</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                    <ul>
                      <li>
                        <a href="#">
                          <p className="text-sm">اپل</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">سامسونگ</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">شیائومی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">هواوی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">وان پلاس</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">نوکیا</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">موتورولا</p>
                        </a>
                      </li>
                    </ul>

                    <input type="checkbox" id="show-laptops" />
                    <label htmlFor="show-laptops">
                      <div className="flex gap-5 justify-between">
                        <p className="text-base mb-1">لپتاپ</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                    <ul>
                      <li>
                        <a href="#">
                          <p className="text-sm">اپل</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">ایسر</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">ایسوس</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">اچ پی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">لنوو</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">ام اس آی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">مایکروسافت</p>
                        </a>
                      </li>
                    </ul>

                    <input type="checkbox" id="show-tablets" />
                    <label htmlFor="show-tablets">
                      <div className="flex gap-5 justify-between">
                        <p className="text-base mb-1">تبلت</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                    <ul>
                      <li>
                        <a href="#">
                          <p className="text-sm">اپل</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">مایکروسافت</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">سامسونگ</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">شیائومی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">وان پلاس</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">لنوو</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">آمازون</p>
                        </a>
                      </li>
                    </ul>

                    <input type="checkbox" id="show-console" />
                    <label htmlFor="show-console">
                      <div className="flex gap-5 justify-between">
                        <p className="text-base mb-1">کنسول بازی</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                    <ul>
                      <li>
                        <a href="#">
                          <p className="text-sm">سونی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">مایکروسافت</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">نینتندو</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">انویدیا</p>
                        </a>
                      </li>
                    </ul>

                    <input type="checkbox" id="show-headset" />
                    <label htmlFor="show-headset">
                      <div className="flex gap-5 justify-between">
                        <p className="text-base mb-1">هدفون و هدست</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                    <ul>
                      <li>
                        <a href="#">
                          <p className="text-sm">سونی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">اپل</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">سنهایزر</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">جی بی ال</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">وان پلاس</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">بیتس</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">جبرا</p>
                        </a>
                      </li>
                    </ul>

                    <input type="checkbox" id="show-camera" />
                    <label htmlFor="show-camera">
                      <div className="flex gap-5 justify-between">
                        <p className="text-base mb-1">دوربین</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </label>
                    <ul>
                      <li>
                        <a href="#">
                          <p className="text-sm">کنون</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">نیکون</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">سونی</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">پاناسونیک</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="text-sm">پنتاکس</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineLogin className="text-[#6200EE] font-bold" />
                  <a href="#">
                    <p className="text-base">ورود | ثبت نام</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <FiShoppingCart className="text-[#6200EE] font-bold" />
                  <a href="#">
                    <p className="text-base">سبد خرید</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineHome className="text-[#6200EE] font-bold" />
                  <a href="#">
                    <p className="text-base">صفحه اصلی</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineFire className="text-[#6200EE] font-bold" />
                  <a href="#">
                    <p className="text-base">پرفروشترین ها</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <MdOutlineWbSunny className="text-[#6200EE] font-bold" />
                  <a href="#">
                    <p className="text-base">تازه ها</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineQuestionCircle className="text-[#6200EE] font-bold" />
                  <a href="#">
                    <p className="text-base">سوالی دارید؟</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <BiSearch className="ms-10 text-gray-500" size={30} />
          </label>
          <form action="#" className="search-box">
            <input type="text" placeholder="جستجو" required />
            <button type="submit" className="go-icon">
              <BsArrowReturnLeft size={0} className="text-gray-600" />
            </button>
          </form>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
