import Stylesheet from "./page.module.css"
import Link from "next/link";
export default function HomePage (){
  return (
    <>
    <header>
    <nav className={Stylesheet.navbar}>
     <h3 className={Stylesheet.logo}>Next App</h3>
      <ul className={Stylesheet.anchor}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>  
    </nav>
    <nav className={Stylesheet.navbar2}>
    <ul className={Stylesheet.anchor2}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul> 
    </nav>
    </header>
    <main>
    <div className={Stylesheet.container}>
      <div className={Stylesheet.container2}>
      <h1>Welcome to my Home Page</h1>
      <p>This is a simple Next.js page with a heading and a paragraph.</p>
      </div>
    </div>
    </main>
    <footer className={Stylesheet.footer}>
      <p>&copy; 2024 Next App. All rights reserved.</p> 
      </footer>
    </>
  );
}
