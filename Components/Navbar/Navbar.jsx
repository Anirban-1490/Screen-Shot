import { GithubFilled } from "@ant-design/icons";
import navStyle from "Components/Navbar/navbar.module.scss";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export const Navbar = () => {
    return (
        <nav className={navStyle["nav"]}>
            <header>
                <h2 className={`${inter.className}`}>
                    Screen-<span>Shot</span>
                </h2>
            </header>
            <Link href={"#"}>
                <GithubFilled
                    style={{
                        fontSize: "1.6rem",
                        color: "white",
                    }}
                />
            </Link>
        </nav>
    );
};
