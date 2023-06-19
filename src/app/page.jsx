'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import arrow from 'public/right_arrow_icon.png'
import Slider from '@/components/slider/Slider'
import Mostbar from '@/components/mostbar/Mostbar'
import Scoop from '@/components/scoop/Scoop'
import Review from '@/components/review/Review'

export default function Home() {
  return (
    <div className="my-10 flex flex-wrap">
      <title>Not Sanook</title>
      <Slider />
      <Mostbar />
      <Scoop />
      <div className="mt-3 flex items-center">
        <div className="mr-0.5 text-2xl font-bold">ดวง-ความเชื่อ-หวย</div>
        <Image src={arrow} width={25} height={25} alt="Arrow right icon" />
      </div>
      <div className="flex w-full justify-between p-6">
        <div className="w-4/12 grid grid-flow-row gap-y-3 border-t-4 border-t-red-500 px-4 py-8 text-center shadow-2xl">
          <div className="text-2xl font-bold">ตรวจสลากกินแบ่งรัฐบาล</div>
          <div className="text-base font-bold">งวดวันที่ 1 มิถุนายน 2566</div>
          <div className="text-sm font-normal">รางวัลที่ 1</div>
          <div className="text-5xl font-bold">125272</div>
          <div className="grid grid-flow-col justify-between font-bold">
            <div>
              <div className="text-xs"> เลขหน้า 3 ตัว </div>
              <div className="text-xl"> 000 </div>
              <div className="text-xl"> 681 </div>
            </div>
            <div>
              <div className="text-xs"> เลขท้าย 3 ตัว </div>
              <div className="text-xl"> 386 </div>
              <div className="text-xl"> 971 </div>
            </div>
            <div>
              <div className="text-xs"> เลขท้าย 2 ตัว </div>
              <div className="text-4xl"> 09 </div>
            </div>
          </div>
          <div className="text-lg font-bold">งวดนี้คุณตรวจสลากฯแล้วรึยัง?</div>
          <div className="flex justify-between h-10">
            <div className="border-2 border-gray-300 w-5/12 h-full flex justify-center items-center">
              <p className="text-xs mr-0.5">1 มิถุนายน 2566</p>
              <Image
                src="/down.png"
                width={20}
                height={20}
                alt="Arrow down icon"
              />
            </div>
            <div className="w-5/12 h-full text-xs flex justify-center items-center">
              <input
                className="border-2 border-gray-300 border-r-transparent w-9/12 h-full pl-2"
                type="text"
                placeholder="กรอกเลขสลาก"
              />
              <button
                className="w-3/12 h-full flex justify-center items-center text-white bg-red-500"
                type="submit"
              >
                <Image
                  src="/search.png"
                  width={14}
                  height={14}
                  alt="search icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-7/12 h-full border-t-4 border-t-purple-500 px-12 py-8 text-center items-center shadow-2xl">
          <div className="grid grid-flow-row gap-y-3 mb-7">
            <div className="text-2xl font-bold"> เช็คดวง </div>
            <div className="text-base font-bold"> เลือกหมวดทำนายดวงชะตา </div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col justify-between gap-y-7">
            <div className={styles.typeHoro}>
              <Image src="/hr1.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> ดวงรายวัน </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr2.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> ดวงความรัก </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr3.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> กราฟชีวิต </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr4.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> ดวงรายเดือน </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr5.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> ไพ่ยิปซี </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr6.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> สีมงคล </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr7.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> ดวงรายปี </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr8.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> ทำนายฝัน </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr9.png" width={60} height={60} alt="icon" />
              <div className={styles.textHoro}> อื่นๆ </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>
  )
}
