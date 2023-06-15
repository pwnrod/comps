import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: "l2kjd",
            label: "Can I use React on a project?",
            content:
                "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
        },
        {
            id: "slridj2",
            label: "Can I use JavaScript on a project?",
            content:
                "You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
        },
        {
            id: "wjdmco44",
            label: "Can I use TypeScript on a project?",
            content:
                "You can use TypeScript on any project you want. You can use TypeScript on any project you want. You can use TypeScript on any project you want.",
        },
    ];

    return <Accordion items={items} />;
};

export default AccordionPage;
