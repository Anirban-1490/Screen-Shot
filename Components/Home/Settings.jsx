import settingStyle from "Components/Home/settings.module.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Space, Checkbox, Tooltip, Radio, Slider } from "antd";
import { CustomDivider } from "Components/CustomDivider/CustomDivider";
import { Container } from "Components/Container/Container";
import { Custominput } from "Components/CustomInput/CustomInput";
export const Settings = ({ setSliderValue, isSettingActive, sliderValue }) => {
    return (
        <div
            style={
                isSettingActive ? { height: "auto", marginBottom: "5vh" } : {}
            }
            className={settingStyle["settings"]}>
            <CustomDivider width={"100%"} orient="left">
                Dimensions
            </CustomDivider>

            <Container className={settingStyle["cnt"]}>
                <Custominput
                    placeHolder={"Width"}
                    name={"width"}
                    id={"width"}
                    inputClassName={settingStyle["md-text-input"]}
                />

                <Custominput
                    placeHolder={"Height"}
                    name={"height"}
                    id={"height"}
                    inputClassName={settingStyle["md-text-input"]}
                />
            </Container>
            <CustomDivider width={"100%"} orient="left">
                Modify
            </CustomDivider>
            <Container
                style={{ flexDirection: "column", gap: "1.2em" }}
                className={settingStyle["cnt"]}>
                <Container
                    style={{ gap: "1%" }}
                    className={settingStyle["cnt"]}>
                    <Checkbox style={{ color: "white" }} name="hide_popups">
                        Remove popups
                    </Checkbox>
                    <Tooltip
                        title={
                            "Remove any popups from screenshot that might appear on website"
                        }>
                        <InfoCircleOutlined />
                    </Tooltip>
                </Container>
                <Container
                    style={{ gap: "1%" }}
                    className={settingStyle["cnt"]}>
                    <Checkbox
                        style={{ color: "white" }}
                        name="capture_full_page">
                        Capture full page
                    </Checkbox>
                    <Tooltip
                        title={
                            "Capture the whole website in a single screenshot"
                        }>
                        <InfoCircleOutlined />
                    </Tooltip>
                </Container>
                <Container className={settingStyle["cnt"]}>
                    <Custominput
                        name={"device_scale_factor"}
                        ipStyle={{ width: "80%" }}
                        inputClassName={settingStyle["md-text-input"]}
                        placeHolder={"Scale (default: 1.0)"}
                    />
                </Container>
            </Container>
            <CustomDivider width={"100%"} orient="left">
                Device
            </CustomDivider>

            <Radio.Group
                name="device"
                optionType="button"
                buttonStyle="solid"
                defaultValue={"desktop"}>
                <Space>
                    {["Desktop", "Laptop", "Mobile", "Tablet"].map((device) => {
                        return (
                            <Radio.Button
                                key={device}
                                value={device.toLowerCase()}>
                                {device}
                            </Radio.Button>
                        );
                    })}
                </Space>
            </Radio.Group>

            <CustomDivider width={"100%"} orient="left">
                Quality
            </CustomDivider>
            <Slider
                onAfterChange={(val) => {
                    setSliderValue(val);
                }}
                tooltip={{ open: !!isSettingActive }}
                defaultValue={sliderValue}
                min={0}
                max={100}
                step={10}
                keyboard
                railStyle={{
                    backgroundColor: "#ffffff49",
                }}
                trackStyle={{
                    backgroundColor: "#18c4c4",
                }}
            />
        </div>
    );
};
