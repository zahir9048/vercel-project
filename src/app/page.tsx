import Image from "next/image";
import styles from "./page.module.css";
import Student from "@/app/component/Student";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Student name={"zahir"} profession={"student"} />
    </div>
  );
}
