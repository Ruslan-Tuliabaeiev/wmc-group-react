
import React, {useState} from "react";
import {ModalBox, ModalButtonClose, ModalPhotoBox, PhotoBox, PhotoIcon} from "./SecondPage.styled";
import styles from "../PhotoGallery/photoGallery.module.css";

export function SecondPage () {
    const images = [
          { src: require('../../foto/3-6/IMG-2f1fb882df72ee218d5577b34e6e50f9-V.jpg'), alt: 'Photo 1' },
         { src: require('../../foto/3-6/IMG-744ce3432a56ef7dd5e68248c3af7df6-V.jpg'), alt: 'Photo 15' },
         { src: require('../../foto/3-6/IMG-d755a1b157513b89308754d10c757c88-V.jpg'), alt: 'Photo 16' },
         { src: require('../../foto/3-6/IMG-ff9399050819e836003f8bc771285a10-V.jpg'), alt: 'Photo 17' },
         { src: require('../../foto/6-mal/IMG-8a10605c4ac5f5e17f9cde68b47ea2f0-V.jpg'), alt: 'Photo 18' },
         { src: require('../../foto/6-mal/IMG-86f20ebe63e983e67e6e6338155cb486-V.jpg'), alt: 'Photo 19' },
         { src: require('../../foto/6-mal/IMG-a4658aa0a7fe94f204abf12c46122d5c-V.jpg'), alt: 'Photo 20' },
         { src: require('../../foto/6-mal/IMG-b1198a0900cd915f9df5ab51e2ed310c-V.jpg'), alt: 'Photo 21' },
        // { foto: require('../../foto/'), alt: 'Photo 22' },
        // { foto: require('../../foto/stol-jee/IMG-20eeb6c64d0dd87d48daef9f168e9fbe-V.jpg'), alt: 'Photo 2' },
    ]
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    return (
        <><h2>Page-2</h2>
            <PhotoBox>
                {images.map((image, index) => (
                    <PhotoIcon>
                        <img key={index}
                             src={image.src}
                             alt={image.alt}
                             width={200} height={200}
                             onClick={() => handleImageClick(image)}
                             className={styles.photoStyle} />
                    </PhotoIcon>
                ))}
            </PhotoBox>

            {/* модальное окно */}
            {selectedImage && (<ModalBox>
                    <ModalPhotoBox className="modal">
                        <ModalButtonClose onClick={handleCloseModal}>Закрыть</ModalButtonClose>
                        <img src={selectedImage.src} alt={selectedImage.alt} className={styles.imageStyles}  />

                    </ModalPhotoBox></ModalBox>
            )}

        </>
    );
}

