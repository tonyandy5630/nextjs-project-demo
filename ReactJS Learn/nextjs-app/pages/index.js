import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {" "}
          <Link href='/news/nextgood'>NextJs is good</Link>
        </li>
        <li>
          <Link href='/news/nextok'>NextJs is ok</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
