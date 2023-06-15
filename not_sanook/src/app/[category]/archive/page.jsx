"use client"

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Mostview from "@/components/mostview/Mostview";
import ArticleList from './ArticleList'

export default function Archive({ params }) {
  const [data, setData] = useState([])
  const [filterChannel, setFilterChannel] = useState()
  const [filterSortBy, setFilterSortBy] = useState('date')

  const fetchData = async ({ category }) => {
    let url = `http://localhost:3003/contents/?category=${category}`

    if (filterChannel !== undefined) {
      url = `${url}&channel=${filterChannel}`
    }

    if (filterSortBy !== undefined) {
      url = `${url}&_sort=${filterSortBy}&_order=desc`
    }

    const response = await fetch(url);
    const data = await response.json()

    setData(data)
  };

  useEffect(() => {
    fetchData(params)
  }, [params, filterChannel, filterSortBy])

  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <div>เนื้อหาทั้งหมด</div>

        <FilterChannel channel={filterChannel} onChange={setFilterChannel}  />
        <FilterSortBy channel={filterChannel} onChange={setFilterSortBy}  />

        <ArticleList data={data} />     
      </div>
      <div className={styles.boxRight}>
        <Mostview category={params.category} />
      </div>
    </div>
  );
};


function FilterChannel({ value, onChange }) {
  return (
    <select onChange={(e) => {
      onChange(e.target.value)
    }} value={value}>
      <option value="">select channel</option>
      <option value="news">News</option>
      <option value="travel">Travel</option>
    </select>
  )
}

function FilterSortBy({ value, onChange }) {
  return (
    <select onChange={(e) => {
      onChange(e.target.value)
    }} value={value}>
      <option value="">select sort by</option>
      <option value="date">Latest</option>
      <option value="views">Most viewd</option>
    </select>
  )
}