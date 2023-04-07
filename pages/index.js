import Head from "next/head";
import { Inter, Roboto } from "next/font/google";
import styles from "styles/Home.module.scss";
import {
    EyeFilled,
    InfoCircleOutlined,
    SettingFilled,
} from "@ant-design/icons";
import {
    Divider,
    ConfigProvider,
    Button,
    Alert,
    Image,
    Space,
    Checkbox,
    Input,
    Form,
    Tooltip,
    Radio,
    Slider,
} from "antd";
import { CustomDivider } from "Components/CustomDivider/CustomDivider";
import { useMutation } from "react-query";
import axios from "axios";
import { CustomButton } from "Components/CustomButton/CustomButton";
import { useState } from "react";
import { Container } from "Components/Container/Container";
import { Custominput } from "Components/CustomInput/CustomInput";
import { Settings } from "Components/Home/Settings";
import { Feature } from "Components/Home/Feature";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
export default function Home() {
    const [isSettingActive, setSetting] = useState(false);
    const [sliderValue, setSliderValue] = useState(80);

    const { data, mutate, error, isError, isLoading } = useMutation(
        (inputData) => {
            return axios.post(`http://localhost:3000/api/sshot`, inputData, {
                headers: {
                    exponential_api_secret: process.env.API_KEY,
                },
            });
        }
    );
    const bufferArray = data && Buffer.from(data?.data.data);
    const base64Image = data && bufferArray.toString("base64");
    const imageSize = Math.round(bufferArray?.byteLength / 1024);
    const screenShotHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        let cloneData = Object.fromEntries(formData);
        cloneData = { ...cloneData, quality: sliderValue };

        mutate(cloneData);
        setSetting(false);
    };

    const toggleSettings = () => {
        setSetting((prev) => !prev);
    };

    return (
        <>
            <Head>
                <title>Screen-Shot | Quality ScreenShot</title>
                <meta
                    name="description"
                    content="Generated high quality screenshots from webpages"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1
                        className={`${inter.className} ${styles["main-heading"]}`}>
                        Screen-Shot
                    </h1>
                    <h2 className={`${inter.className} ${styles["main-para"]}`}>
                        Create high quality screenshot from websites easily
                    </h2>
                </header>

                <form onSubmit={screenShotHandler}>
                    <div className={styles["input-container"]}>
                        <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            name="url"
                            id="url"
                            placeholder="Enter a valid url"
                        />
                        <CustomButton
                            loading={!!isLoading}
                            onClick={toggleSettings}
                            icon={<SettingFilled />}
                            ghost={true}
                            // disabled={!!isLoading}
                            className={roboto.className}
                            size="large"
                            htmlType="button"
                            type="default"
                            colorPrimaryHover={"aqua"}
                            colorBgContainer={"#18c4c4"}
                            colorPrimaryActive={"#317779"}
                        />
                    </div>

                    <Settings
                        setSliderValue={setSliderValue}
                        isSettingActive={isSettingActive}
                        sliderValue={sliderValue}
                    />

                    <Space align="baseline">
                        <CustomButton
                            style={{ marginBottom: "2vh" }}
                            loading={!!isLoading}
                            className={roboto.className}
                            size="large"
                            htmlType="submit"
                            type="primary"
                            colorPrimary={"#41c3c5"}
                            colorPrimaryHover={"#18dfdf"}
                            colorPrimaryActive={"#317779"}>
                            Screenshot
                        </CustomButton>
                        {!!data && !isError && (
                            <>
                                <CustomButton
                                    download={true}
                                    href={`data:image/jpeg;base64,${base64Image}`}
                                    style={{
                                        marginBottom: "2vh",
                                    }}
                                    className={roboto.className}
                                    size="large"
                                    type="link"
                                    colorLink={"#32da32"}
                                    colorLinkHover={"#69ff69"}
                                    colorLinkActive={"#367e36"}>
                                    Download
                                </CustomButton>
                                <span>{imageSize}kb</span>
                            </>
                        )}
                    </Space>

                    {isError && (
                        <Alert
                            showIcon={true}
                            type="error"
                            message={`${error.response.data}`}
                        />
                    )}
                </form>
                {data && (
                    <>
                        <CustomDivider margin={"4rem auto auto auto"}>
                            {<EyeFilled />} Preview
                        </CustomDivider>

                        <div className={styles["preview"]}>
                            <Image
                                rootClassName={styles["ant-image-container"]}
                                style={{
                                    display: "block !important",
                                }}
                                alt="screenshot"
                                src={`data:image/jpeg;base64,${base64Image}`}
                            />
                        </div>
                    </>
                )}

                <Feature />
            </main>
        </>
    );
}
