import React, {ReactNode, useRef, useState} from "react";

type CallbackFunction = (data: string) => void;
export type Props = {
    onChange: CallbackFunction;
    initialValue: string;
}

export default function SearchInput({onChange, initialValue}: Props) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDivClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <div
            className={"secondary-container rounded-xl px-4 py-1 flex cursor-text"}
            onClick={handleDivClick}>
            <svg className={"fill-[--md-sys-color-on-secondary-container]"} xmlns="http://www.w3.org/2000/svg"
                 height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/>
            </svg>
            <input
                type={"search"}
                placeholder={"Search"}
                className={"secondary-container body-large ml-1 outline-none on-secondary-container-text placeholder-[--md-sys-color-on-secondary-container] focus:placeholder-transparent"}
                ref={inputRef}
                defaultValue={initialValue}
                onInput={handleInputChange}
            />
        </div>
    );
}