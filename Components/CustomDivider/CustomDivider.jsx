import { Divider, ConfigProvider } from "antd";
import style from "Components/CustomDivider/divider.module.scss";

export const CustomDivider = ({
    orient = "middle",
    colorSplit,
    colorTextHeading,
    children,
    margin,
    width,
}) => {
    return (
        <div
            style={{ margin: margin, width: width }}
            className={style["divider"]}>
            <ConfigProvider
                theme={{
                    components: {
                        Divider: {
                            colorSplit: colorSplit || "#ffffffa9",
                            colorTextHeading: colorTextHeading || "white",
                        },
                    },
                }}>
                <Divider orientation={orient}>{children}</Divider>
            </ConfigProvider>
        </div>
    );
};
