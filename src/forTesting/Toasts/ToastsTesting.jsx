import React, {useState} from 'react';
import {Button, Col, Row, Toast} from "react-bootstrap";
import styles from './Toasts.module.css'

const Toasts = ({value}) => {
    const [show, setShow] = useState(true);

    return (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast! {value}</Toast.Body>
        </Toast>
    )
};

const ToastsTesting = () => {

    const [toastsList, setToastsList] = useState(false);

    const [arr, setArr] = useState(['one', 'two', 'three', 'four']);

    React.useEffect(() => {
        if (arr.length > 0) {
            console.log("render");
            const timer = setTimeout(deleteElementFromArr, 5000, arr);
            return () => clearTimeout(timer)
        }
    });


    const showAllToasts = () => {
        setToastsList(true);
        setTimeout(setToastsList, 3100, false)
    };

    const addNewElementToArr = (mass) => {
        let temp = mass.slice();
        const string = `${new Date().getSeconds()} ${new Date().getMilliseconds()}`
        temp.push(string);
        setArr(temp);
    };

    const deleteElementFromArr = (mass) => {
        if (mass.length > 0) {
            console.log(mass);
            let temp = mass.slice();
            temp.splice(0, 1);
            setArr(temp);
        }
    };

    return (<div>
        <Row>
            <Col md={6}>
                <Button className={styles.myButton} onClick={showAllToasts}>
                    StartThisShit
                </Button>

                <Button className={styles.myButton} onClick={() => addNewElementToArr(arr)}>
                    add
                </Button>

                <Button className={styles.myButton} onClick={() => deleteElementFromArr(arr)}>
                    delete
                </Button>
            </Col>

            <Col md={6}>
                {arr.map(a => `${a} `)}
            </Col>
        </Row>
    </div>)
};

export default ToastsTesting




