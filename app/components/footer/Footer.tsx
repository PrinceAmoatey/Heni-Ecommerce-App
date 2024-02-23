import Link from "next/link";
import Container from "../Container";
import FooterContent from "./FooterContent";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram,} from "react-icons/ai";

const Footer = () => {
    return  <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 bp-8">
                <FooterContent>
                    <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Consoles</Link>
                        <Link href="#">Tvs</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">Accessories</Link>
                    
                </FooterContent>
                <FooterContent>
                    <h3 className="text-base font-bold mb-2">Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Delivery Policy</Link>
                        <Link href="#">Returns & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                </FooterContent>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">About Us</h3>
                <p className="mb-2">We are forever dedicated to providing the latest and best quality of devices, appliance and Accessories to cherished customers with wide range of variety to suit every need</p>
                <p> &copy; {new Date().getFullYear()} Heni. All rights reserved</p>
                </div>
                <FooterContent>
                <h3 className="text-base font-bold mb-2">Follow Us</h3>
                <div className="flex gap-2">
                <Link href="#">
                    <MdFacebook size={24}/>
                </Link>
                <Link href="#">
                    <AiFillTwitterCircle size={24}/>
                </Link>
                <Link href="#">
                    <AiFillInstagram size={24}/>
                </Link>
                </div>

                </FooterContent>
        
            </div>

        </Container>
    </footer> ;
}
 
export default Footer;