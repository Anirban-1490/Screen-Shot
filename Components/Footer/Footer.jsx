import footerstyle from "Components/Footer/footer.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
    return (
        <footer className={footerstyle["footer"]}>
            <div className={inter.className}>
                &copy; Screen-Shot, {new Date().getFullYear()}
            </div>
        </footer>
    );
};
