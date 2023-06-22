import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const Panel = ({ children, className, ...rest }) => {
    const classes = twMerge(
        classnames(className, "border rounded p-3 shadow bg-white w-full")
    );

    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
};

export default Panel;
