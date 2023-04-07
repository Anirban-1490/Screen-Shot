import {
    PlusOutlined,
    PlusSquareFilled,
    CheckSquareOutlined,
    CheckSquareFilled,
    GithubFilled,
} from "@ant-design/icons";
import featureStyle from "Components/Home/feature.module.scss";
import { Card, Col, Row } from "antd";
import { Inter, Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: "800" });
const inter = Inter({ subsets: ["latin"], weight: "500" });
export const Feature = () => {
    const iconStyle = {
        fontSize: "3.4rem",
        margin: "0.5rem 0",
    };
    const cardContent = [
        {
            title: "High Quality",
            description:
                "Create High Quality screenshot in just few clicks. World's fastes screenshot grabber",
            icon: <PlusSquareFilled style={iconStyle} />,
        },
        {
            title: "Easy to Use",
            description:
                "With our Easy to Use yet robust tools, you can create a screenshot that matches your style",
            icon: <CheckSquareFilled style={iconStyle} />,
        },
        {
            title: "Open Source",
            description:
                "As a Open Source project you can contribute your idea to us. Join us for building a amazing community",
            icon: <GithubFilled style={iconStyle} />,
        },
    ];
    return (
        <section className={featureStyle["section"]}>
            <div className={featureStyle["video-container"]}>
                <video
                    aria-label="intro video"
                    loop={true}
                    className={featureStyle["intro"]}
                    autoPlay={true}
                    muted={true}>
                    <source
                        src="/Screen-shot_video_introduction.mp4"
                        type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos, but
                    don't worry, you can
                    <a href="/Screen-shot_video_introduction.mp4">
                        download the MP4
                    </a>
                    and watch it with your favorite video player!
                </video>
            </div>
            <h2
                className={`${inter.className} ${featureStyle["feature-header"]}`}>
                Say hello{" "}
                <span>
                    <img src="/waving-hand-sign-emoji.png" alt="waving hand" />
                </span>{" "}
                to_____
            </h2>
            <Row gutter={[16, 16]} wrap justify={"space-around"}>
                {cardContent.map((content) => {
                    return (
                        <article
                            key={content.title}
                            className={featureStyle["card"]}>
                            <header>
                                {content.icon}
                                <h3 className={openSans.className}>
                                    {content.title}
                                </h3>
                            </header>
                            <div className={featureStyle["card-body"]}>
                                <p>{content.description}</p>
                            </div>
                        </article>
                    );
                })}
            </Row>
        </section>
    );
};
