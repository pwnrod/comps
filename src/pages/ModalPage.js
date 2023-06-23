import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
                vestibulum lorem vitae fringilla. Sed sit amet accumsan risus. Nulla
                rutrum ut nibh sed laoreet. Phasellus sollicitudin gravida lacinia.
                Vivamus quis finibus lectus. Pellentesque vitae justo turpis. Curabitur
                id congue justo, ac tincidunt ante. Maecenas vitae odio a erat placerat
                semper id sed nisi. Donec scelerisque odio ac semper posuere. Etiam nisl
                eros, condimentum at placerat eget, dapibus id ipsum. Nam cursus velit
                at consequat iaculis. Mauris in gravida elit. Donec eget pretium ipsum.
            </p>
        </div>
    );
};

export default ModalPage;
