import containerStyle from "Components/Container/Container.module.scss";

export const Container = ({ children, style, className }) => {
    return (
        <div
            style={{ ...style }}
            className={`${containerStyle["container"]} ${className}`}>
            {children}
        </div>
    );
};
