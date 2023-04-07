import {
    PlusOutlined,
    PlusSquareFilled,
    CheckSquareOutlined,
    CheckSquareFilled,
    GithubFilled,
} from "@ant-design/icons";
import featureStyle from "Components/Home/feature.module.scss";
import { Card, Col, Row } from "antd";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: "800" });

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
