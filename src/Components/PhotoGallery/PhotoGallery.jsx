import React, {useState} from 'react';
import {PhotoBox, PhotoIcon, ModalPhotoBox, ModalBox, ModalButtonClose} from "./PhotoGallery.styled";
import styles from './photoGallery.module.css'

export const PhotoGallery = () => {
    const images = [
        // { src: require('../../src/stol-jee/IMG-3c708b964dad50588f2957097d8c0bf3-V.jpg'), alt: 'Photo 1' },
        // { src: require('../../src/stol-jee/IMG-20eeb6c64d0dd87d48daef9f168e9fbe-V.jpg'), alt: 'Photo 2' },
        { src: require('../../src/diplom/foto-list-table1.jpg'), alt: 'Photo 3' },
        { src: require('../../src/diplom/IMG-da37f8f669ebccd351e99e60c9f409b6-V.jpg'), alt: 'Photo 4' },
        { src: require('../../src/diplom/IMG-e4a3a8668d4391de33b21c5a4758093b-V.jpg'), alt: 'Photo 5' },
        { src: require('../../src/diplom/IMG-d05fa0efc43b46092fac2a6674700e72-V.jpg'), alt: 'Photo 6' },
        { src: require('../../src/diplom/IMG-f8f553aca79bf282ebe57e47298fdd68-V.jpg'), alt: 'Photo 7' },
        { src: require('../../src/diplom/IMG-c32e21646ae0bdf71a2247c78796ca79-V.jpg'), alt: 'Photo 8' },
        { src: require('../../src/diplom/IMG-bfe04554573687b53d83a51666c4cbd1-V.jpg'), alt: 'Photo 9' },
        { src: require('../../src/diplom/IMG-b3802721f2140f4419f5fc3bd94c2e73-V.jpg'), alt: 'Photo 10' },
        { src: require('../../src/diplom/IMG-b37ee247cc2501767834f3f6497ec257-V.jpg'), alt: 'Photo 12' },
        { src: require('../../src/diplom/IMG-a36c20e9ca4c9210b3a0dbf9138598df-V.jpg'), alt: 'Photo 13' },
        { src: require('../../src/diplom/IMG-a8faa3cea534ca87652ec0354629285d-V.jpg'), alt: 'Photo 14' },
        { src: require('../../src/diplom/IMG-939587242b6632c85b799ecace9dbc36-V.jpg'), alt: 'Photo 15' },
        { src: require('../../src/diplom/IMG-5558fa40078a195885402de5a9a32f61-V.jpg'), alt: 'Photo 16' },
        { src: require('../../src/diplom/IMG-3969a66a9eb3b5dd4b1cae79e1bbd937-V.jpg'), alt: 'Photo 17' },
        { src: require('../../src/diplom/IMG-3900c1733d09bbf06626b7622eb74fe3-V.jpg'), alt: 'Photo 18' },
        { src: require('../../src/diplom/IMG-3274afa493d2f1cbe1f7d48b3228679f-V.jpg'), alt: 'Photo 19' },
        { src: require('../../src/diplom/IMG-869c25323a75dd1e7153ff860b605fc2-V.jpg'), alt: 'Photo 10' },
        { src: require('../../src/diplom/IMG-675ce868376efdcb8140605f40b075f3-V.jpg'), alt: 'Photo 12' },
        { src: require('../../src/diplom/IMG-407ea95b029f3c228baefb8d45d9da9c-V.jpg'), alt: 'Photo 13' },
        { src: require('../../src/diplom/IMG-10d09cb8c940fb9057006c1fc061d729-V.jpg'), alt: 'Photo 14' },
        // { src: require(''), alt: 'Photo 15' },
        // { src: require(''), alt: 'Photo 16' },
        // { src: require(''), alt: 'Photo 17' },
        // { src: require(''), alt: 'Photo 18' },
        // { src: require(''), alt: 'Photo 19' },
        // ...другие фотографии
    ];
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
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

