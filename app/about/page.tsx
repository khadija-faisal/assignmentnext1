import Style from './page.module.css'
import Link from 'next/link';
export default function AboutPage (){
    return (
        <>
      <header>
    <nav className={Style.navbar}>
     <h3 className={Style.logo}>Next App</h3>
      <ul className={Style.anchor}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>  
    </nav>
    <nav className={Style.navbar2}>
    <ul className={Style.anchor2}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul> 
    </nav>
    </header>
    <main>
    <div className={Style.container}>
      <div className={Style.container2}>
      <h1>Welcome to my About Page</h1>
      <p>This is a simple Next.js page with a heading and a paragraph.</p>
      </div>
      <button className={Style.button}><Link href="about/moreabout">More About</Link></button>
    </div>
    
    </main>
    <footer className={Style.footer}>
      <p>&copy; 2024 Next App. All rights reserved.</p> 
      </footer>
         </>
    );
}