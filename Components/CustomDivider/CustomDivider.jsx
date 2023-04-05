import { Divider, ConfigProvider } from "antd";
import style from "Components/CustomDivider/divider.module.scss";

export const CustomDivider = ({ colorSplit, colorTextHeading, children }) => {
    return (
        <div className={style["divider"]}>
            <ConfigProvider
                theme={{
                    components: {
                        Divider: {
                            colorSplit: colorSplit || "#ffffffa9",
                            colorTextHeading: colorTextHeading || "white",
                        },
                    },
                }}>
                <Divider>{children}</Divider>
            </ConfigProvider>
        </div>
    );
};
