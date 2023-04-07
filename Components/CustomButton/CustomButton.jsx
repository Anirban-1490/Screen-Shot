const { Button, ConfigProvider } = require("antd");

export const CustomButton = ({
    children,
    disabled = false,
    loading = false,
    size = "large",
    type = "primary",
    htmlType = "button",
    className,
    ghost = false,
    onClick,
    colorPrimaryBorder,
    colorPrimary,
    colorBgContainer,
    colorBorder,
    colorPrimaryHover,
    colorTextLightSolid = "white",
    colorPrimaryActive,
    icon,
    style,
}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimaryBorder: colorPrimaryBorder,
                        colorPrimary: colorPrimary,
                        colorPrimaryHover: colorPrimaryHover,
                        colorBorder: colorBorder,
                        colorBgContainer: colorBgContainer,
                        colorTextLightSolid: colorTextLightSolid,
                        colorPrimaryActive: colorPrimaryActive,
                    },
                },
            }}>
            <Button
                style={{ ...style }}
                icon={icon}
                onClick={onClick}
                ghost={ghost}
                className={className}
                size={size}
                type={type}
                htmlType={htmlType}
                disabled={!!disabled}
                loading={!!loading}>
                {children}
            </Button>
        </ConfigProvider>
    );
};
