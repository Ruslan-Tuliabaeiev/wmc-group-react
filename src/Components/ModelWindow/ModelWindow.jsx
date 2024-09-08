import React, {useEffect, useRef, useState} from 'react';
import {
    ButtonBox,
    ButtonClose,
    ButtonOpen,
    LabelNumber,
    Overlay,
    ResultNumber,
    WindowBox,
    WindowButton
} from "./ModelWindow.styled";

export const  ModelWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModalToo = () => {
        setIsOpenModal(true);
    };
    const handleCloseModalToo = () => {
        setIsOpenModal(false);
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
/////////==calculator
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [result, setResult] = useState("");
    const handleCalculate = () => {
        const sum = Number(num1) + Number(num2) + Number(num3);
        setResult(sum);
    };

/////////==calculator-2
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [number3, setNumber3] = useState("");
    const [resultNumber, setResultNumber] = useState("");

    const handleCalculateNumber = () => {
        const summa = Number(number1) - Number(number2) + Number(number3);
        setResultNumber(summa);
    };
//////==function close modal
    const modalRef = useRef(null);
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpenModal(false);
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, );

    return(
        < >
            <ButtonBox>
            <ButtonOpen onClick={handleOpenModalToo}>Open Modal</ButtonOpen>
            <ButtonOpen onClick={handleOpenModal}>Open Modal-2</ButtonOpen>
            </ButtonBox>

                                       {/*ModalWindow-1*/}
            {isOpenModal && ( <Overlay>
                <WindowBox  ref={modalRef} >
                    <span>Calculator</span>
                    <ButtonClose  onClick={handleCloseModalToo}>&times;</ButtonClose>
                    <div>
                        <LabelNumber><label>
                            Number 1:
                            <input
                                type="number"
                                value={num1}
                                onChange={(e) => setNum1(e.target.value)}
                            />
                        </label>
                        </LabelNumber>
                        <LabelNumber><label>
                            Number 2:
                            <input
                                type="number"
                                value={num2}
                                onChange={(e) => setNum2(e.target.value)}
                            />
                        </label>
                        </LabelNumber>
                        <LabelNumber><label>
                            Number 3:
                            <input
                                type="number"
                                value={num3}
                                onChange={(e) => setNum3(e.target.value)}
                            />
                        </label>
                        </LabelNumber>
                        <WindowButton onClick={handleCalculate}>Calculate</WindowButton>
                        {result && <ResultNumber>Result: {result}</ResultNumber>}
                    </div>
                </WindowBox>
            </Overlay>)}
                                       {/*ModalWindow-2*/}
            {isOpen && (
                <Overlay >

                    <WindowBox  ref={modalRef} >
                        <span>Calculator-2</span>
                        <ButtonClose  onClick={handleCloseModal}>&times;</ButtonClose>
                        <div>
                            <LabelNumber><label>
                                Number 1:
                                <input
                                    type="number"
                                    value={number1}
                                    onChange={(e) => setNumber1(e.target.value)}
                                />
                            </label>
                            </LabelNumber>
                            <LabelNumber><label>
                                Number 2:
                                <input
                                    type="number"
                                    value={number2}
                                    onChange={(e) => setNumber2(e.target.value)}
                                />
                            </label>
                            </LabelNumber>
                            <LabelNumber><label>
                                Number 3:
                                <input
                                    type="number"
                                    value={number3}
                                    onChange={(e) => setNumber3(e.target.value)}
                                />
                            </label>
                            </LabelNumber>
                            <WindowButton onClick={handleCalculateNumber}>Calculate</WindowButton>
                            {resultNumber && <ResultNumber>Result: {resultNumber}</ResultNumber>}
                        </div>
                    </WindowBox>
                </Overlay>)}
        </>
    )
}
