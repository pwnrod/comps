import classnames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children, className, activeClassName }) => {
    const { navigate, currentPath } = useNavigation();

    const classes = classnames(
        "text-blue-500",
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlkey) {
            return;
        }

        event.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
