import Link from "next/link";
import Style from "./page.module.css";
export default function ContactPage() {
  return (
    <>
      <header>
        <nav className={Style.navbar}>
          <h3 className={Style.logo}>Next App</h3>
          <ul className={Style.anchor}>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className={Style.navbar2}>
          <ul className={Style.anchor2}>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={Style.container}>
        <div className={Style.container2}>
          <h1>CONTACT US</h1>
          <p></p>
          <form className={Style.form}>
            <input
              className={Style.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <input
              className={Style.input}
              type="email"
              name="email"
              placeholder=" Enter your Email"
              required
            />

            <textarea
              className={Style.input}
              name="feedback"
              id="101"
              placeholder="Enter Your Message"
            ></textarea>
            <button className={Style.button}>submit</button>
          </form>
        </div>
      </main>
      <footer className={Style.footer}>
        <p>&copy; 2024 Next App. All rights reserved.</p>
      </footer>
    </>
  );
}
