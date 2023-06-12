"use client";
import Image from "next/image";
import styles from "./relate.module.css";
import RightArrow from "../../../public/right_arrow_icon.png";

import { useEffect, useState } from "react";

async function getData(category, channel, id) {
  let url = "http://localhost:3003/contents/?_limit=3&";
  if (category) url += `category=${category}&`;
  if (channel) url += `channel=${channel}&`;
  if (id) url += `id_ne=${id}`;

  const response = await fetch(url);
  return response.json();
}

const Relate = async ({ channel, category, id }) => {
  const data = await getData(category, channel, id);

  return (
    <div>
      <div className={styles.relate}>
        <div className={styles.relateTopic}>
          <h2>ข่าวที่เกี่ยวข้อง</h2>
          <Image className={styles.customIcon} src={RightArrow} />
        </div>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {data.map((item) => (
            <div className={styles.relateCard}>
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                alt="Related News image"
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relate;