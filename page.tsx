import Link from "next/link";
import Style from "./page.module.css";
export default function MoreAboutPage (){
    return (
        <main className={Style.container}>
            <h1>for About Visit My Account</h1>
            <div className={Style.container2}>
                <button className={Style.button1}><Link href="https://github.com/khadija-faisal">Github</Link></button>
                <button className={Style.button2}><Link href="https://www.linkedin.com/in/khadijamughal19/">LinkedIn</Link></button>
            </div>
           <button className={Style.button3}><Link href="/about">About</Link></button>
        </main>
    );
}