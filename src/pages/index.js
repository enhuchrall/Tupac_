import Image from "next/image";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from "react";
import Link from "next/link";
import Header from "./Header";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden h-[560vh] bg-gray-950">
      <div className="w-[99vw] relative left-[80vh] h-[150vh] bg-gradient-radial from-yellow-300 via-slate-950 opacity-30 blur-3xl to-slate-950 rounded-full"></div>
      <div className="w-[99vw] h-[150vh] relative right-[80vh] bg-gradient-radial from-pink-300 via-slate-950 opacity-30 blur-3xl to-slate-950 rounded-full"></div>
      <div className="w-[100vw] h-[150vh] relative left-[60vh] bg-gradient-radial from-emerald-300 via-slate-950 opacity-30 blur-xl to-slate-950 rounded-full"></div>
      <div className="w-[70vw] relative right-[25vh] bottom-[35vh] h-[140vh] bg-gradient-radial from-yellow-300 via-slate-950 opacity-30 blur-xl to-slate-950 rounded-full"></div>
      <div className="h-[560vh] w-full absolute right-0 top-0 flex flex-col items-center">
        {/* Header */}
     
        {/* Body */}
        {/* Undarmaltsetseg */}
        <div className="text-3xl flex flex-col items-center  mt-[11vh]">
          <b className="block">БАГА АНГИ</b>
          <b className="text-yellow-500 text-3xl">ТӨВ СУРГУУЛЬ</b>
        </div>
        <div className="w-[65vw] h-[160vh] overflow-hidden mr-[10vw] mt-[8vh] flex gap-[1vw]">
          <div>
            <img className="w-[16vw] h-[33vh] bg-cover bg-center bg-no-repeat rounded-xl" src="https://nhs.edu.mn/assets/images/bagsh3.jpg"/>
            <b className="text-2xl relative top-[2vh]">Д. Ундармалцэцэг</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.3vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Минжбадрах</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Мөнхцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Наранзаяа</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Нарантуяа</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>С. Нямцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Дүрслэх урлагийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Оюударь</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн туслах багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Х. Пүрэвсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бүжгийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Пүрэвсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Солонго</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>А. Туул</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Т. Түвшинжаргал</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>С. Тү5ндэмбэрэл</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Ууганзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Үржиг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Цэвэлсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bayarmaa */}
        <div className="text-3xl flex flex-col items-center mt-[5vh] flex-wrapc">
          <b className="block">БАГА АНГИ</b>
          <b className="text-pink-400 text-3xl uppercase">Хан-Уул салбар</b>
        </div>
        <div className="w-[65vw] h-[95vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <img className="w-[16vw] h-[33vh] bg-center bg-cover rounded-xl" src="https://nhs.edu.mn/assets/images/undraa.jpg"/>
            <b className="text-2xl relative top-[2vh]">Ж. Баяармаа</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw] items-center">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw] ">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Gerelmaa */}
        <div className="text-3xl flex flex-col items-center">
          <b className="block uppercase">Дунд сургуулийн</b>
          <b className="text-purple-500 text-3xl uppercase">багш нар</b>
        </div>
        <div className="w-[65vw] h-[110vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <img className="w-[16vw] h-[33vh] bg-center bg-cover rounded-xl" src="https://nhs.edu.mn/assets/images/bayarmaa.jpg"/>
            <b className="text-2xl relative top-[2vh]">Д. Гэрэлмаа</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Минжбадрах</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Мөнхцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Наранзаяа</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Нарантуяа</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>С. Нямцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Дүрслэх урлагийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Оюударь</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн туслах багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Х. Пүрэвсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бүжгийн багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tamir */}
        <div className="text-3xl flex flex-col items-center mt-[10vh]">
          <b className="block">Ахлах сургуулийн</b>
          <b className="text-emerald-400 text-3xl uppercase">багш нар</b>
        </div>
        <div className="w-[65vw] h-[100vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>0
            <img className="w-[16vw] h-[33vh] bg-cover bg-center rounded-xl" src="https://nhs.edu.mn/assets/images/bagsh3.jpg"/>
            <b className="text-2xl relative top-[2vh]">О. Тамир</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Минжбадрах</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Мөнхцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Наранзаяа</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Sod-Od */}
        <div className="text-3xl flex flex-col items-center mt-[35vh]">
          <b className="block">Мэдээлэл технологийн</b>
          <b className="text-white text-3xl">хэлтэс</b>
        </div>
        <div className="w-[65vw] h-[100vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <img src="https://nhs.edu.mn/assets/images/sodod-min.jpg" className="w-[16vw] h-[33vh] bg-center  bg-cover  rounded-xl"/>
            <b className="text-2xl relative top-[2vh]">Б. Сод-Од</b>
            <p className="relative top-[3vh]">Технологи эрхэлсэн захирал</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Компьютерийн ухааны Магистр</p>  
            <p className="text-gray-400">2014</p>
            <p className="text-cyan-400 mt-[2vh]">Компьютерийн ухааны Докторант</p>
            <p className="text-gray-400">2017</p>
            <p className="mt-[2vh]">Программ хангамжийн багш</p>
            <p className="text-cyan-400">ШУТИС-КТМС </p>
            <p className="text-gray-400">2012-2014</p>
            <p className="mt-[2vh]">Компьютерийн ухааны салбарын багш</p>
            <p className="text-cyan-400">ШУТИС-МХТС</p>
            <p className="text-gray-400">2014-2022</p>
            <p className="mt-[2vh]">Үүсгэн байгуулагч</p>
            <p className="text-cyan-400">LIT Academy</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-g100vhray-400">Бага ангийн багш</p>
              </div>  
            </div>
          </div>
        </div>
        
        {/* Footer */}
       

      </div>
    </div>
  );
}
