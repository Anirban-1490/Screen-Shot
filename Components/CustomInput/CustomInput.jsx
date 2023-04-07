import inputStyle from "Components/CustomInput/input.module.scss";

export const Custominput = ({
    name,
    id,
    placeHolder,
    autoComplete = "off",
    autoCorrect = "off",
    labelText,
    label = false,
    labelHidden = false,
    inputClassName,
    labelClassName,
    ipStyle,
}) => {
    return (
        <div>
            {label && (
                <label
                    className={labelClassName}
                    hidden={labelHidden}
                    htmlFor={id}>
                    {labelText}
                </label>
            )}
            <input
                style={{ ...ipStyle }}
                className={`${inputStyle["text-input"]} ${inputClassName}`}
                autoComplete={autoComplete}
                autoCorrect={autoCorrect}
                type="text"
                name={name}
                id={id}
                placeholder={placeHolder}
            />
        </div>
    );
};
