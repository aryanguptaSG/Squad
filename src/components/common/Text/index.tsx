import React from "react";
import { cn } from "@/lib/utils";

type Props = {
    as? : any,
    className? : string,
    capitalize? :string,
    children: React.ReactNode
}

function Text(props:Props) {
    const { as = "span", className, capitalize } = props;
    const Ele = as;
    return (
        <Ele
            className={`${cn('text-black dark:text-light-gray' ,className)}`}
            style={{ textTransform: capitalize ? "uppercase" : "none" }}
        >
            {props.children}
        </Ele>
    );
}

export default Text;