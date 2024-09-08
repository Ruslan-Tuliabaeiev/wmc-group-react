import React, {useEffect, useRef, useState} from 'react';
import {PhotoBox, PhotoIcon, ModalPhotoBox, ModalBox, ModalButtonClose} from "./PhotoGallery.styled";
import styles from './photoGallery.module.css'

export const PhotoGallery = () => {
    const images = [
        { src: require('../../foto/diplom/foto-list-table1.jpg'), alt: 'Photo 3' },
        { src: require('../../foto/diplom/IMG-da37f8f669ebccd351e99e60c9f409b6-V.jpg'), alt: 'Photo 4' },
        { src: require('../../foto/diplom/IMG-e4a3a8668d4391de33b21c5a4758093b-V.jpg'), alt: 'Photo 5' },
        { src: require('../../foto/diplom/IMG-d05fa0efc43b46092fac2a6674700e72-V.jpg'), alt: 'Photo 6' },
        { src: require('../../foto/diplom/IMG-f8f553aca79bf282ebe57e47298fdd68-V.jpg'), alt: 'Photo 7' },
        { src: require('../../foto/diplom/IMG-c32e21646ae0bdf71a2247c78796ca79-V.jpg'), alt: 'Photo 8' },
        { src: require('../../foto/diplom/IMG-bfe04554573687b53d83a51666c4cbd1-V.jpg'), alt: 'Photo 9' },
        { src: require('../../foto/diplom/IMG-b3802721f2140f4419f5fc3bd94c2e73-V.jpg'), alt: 'Photo 10' },
        { src: require('../../foto/diplom/IMG-b37ee247cc2501767834f3f6497ec257-V.jpg'), alt: 'Photo 12' },
        { src: require('../../foto/diplom/IMG-a36c20e9ca4c9210b3a0dbf9138598df-V.jpg'), alt: 'Photo 13' },
        { src: require('../../foto/diplom/IMG-a8faa3cea534ca87652ec0354629285d-V.jpg'), alt: 'Photo 14' },
        { src: require('../../foto/diplom/IMG-939587242b6632c85b799ecace9dbc36-V.jpg'), alt: 'Photo 15' },
        { src: require('../../foto/diplom/IMG-5558fa40078a195885402de5a9a32f61-V.jpg'), alt: 'Photo 16' },
        { src: require('../../foto/diplom/IMG-3969a66a9eb3b5dd4b1cae79e1bbd937-V.jpg'), alt: 'Photo 17' },
        { src: require('../../foto/diplom/IMG-3900c1733d09bbf06626b7622eb74fe3-V.jpg'), alt: 'Photo 18' },
        { src: require('../../foto/diplom/IMG-3274afa493d2f1cbe1f7d48b3228679f-V.jpg'), alt: 'Photo 19' },
        { src: require('../../foto/diplom/IMG-869c25323a75dd1e7153ff860b605fc2-V.jpg'), alt: 'Photo 10' },
        { src: require('../../foto/diplom/IMG-675ce868376efdcb8140605f40b075f3-V.jpg'), alt: 'Photo 12' },
        { src: require('../../foto/diplom/IMG-407ea95b029f3c228baefb8d45d9da9c-V.jpg'), alt: 'Photo 13' },
        { src: require('../../foto/diplom/IMG-10d09cb8c940fb9057006c1fc061d729-V.jpg'), alt: 'Photo 14' },
        { src: require('../../foto/carcas-triugol/IMG-adc5809a6ab6f7ab07ec38399f67c403-V.jpg'),  alt: 'Photo 15' },
        { src: require('../../foto/carcas-triugol/IMG-e1ae581d904b3f013ea11b7886eafe8c-V.jpg'), alt: 'Photo 16' },
        { src: require('../../foto/carcas-triugol/IMG-ee998d6e2d21b519f6698d88b0e2492a-V.jpg'), alt: 'Photo 17' },
        { src: require('../../foto/6-mal/IMG-a4658aa0a7fe94f204abf12c46122d5c-V.jpg'), alt: 'Photo 18' },
        { src: require('../../foto/6-mal/IMG-8a10605c4ac5f5e17f9cde68b47ea2f0-V.jpg'), alt: 'Photo 19' },
        { src: require('../../foto/6-mal/IMG-b1198a0900cd915f9df5ab51e2ed310c-V.jpg'), alt: 'Photo 20' },
        { src: require('../../foto/stol-jee/IMG-20eeb6c64d0dd87d48daef9f168e9fbe-V.jpg'), alt: 'Photo 21' },
        { src: require('../../foto/stol-jee/IMG-3c708b964dad50588f2957097d8c0bf3-V.jpg'), alt: 'Photo 22' },
        { src: require('../../foto/stol-jee/IMG-70aa8d9bdaab168392b71501be573401-V.jpg'), alt: 'Photo 23' },
        { src: require('../../foto/stol-jee/IMG-280af725267656d5216e3c84cc9262ea-V.jpg'), alt: 'Photo 24' },
        { src: require('../../foto/stol-jee/IMG-ac77aa65e524398de00a61ff0aa00eb6-V.jpg'), alt: 'Photo 25' },
        { src: require('../../foto/stol-jee/IMG-af5d0a6f1288808dbb9cda69a2f59058-V.jpg'), alt: 'Photo 26' },
        { src: require('../../foto/stol-jee/IMG-a0a0082009ed700e3dfc4f416c162836-V.jpg'), alt: 'Photo 27' },
        { src: require('../../foto/stol-jee/IMG-ae98ed0f9bae2202dbd54d491ae503f8-V.jpg'), alt: 'Photo 28' },
        { src: require('../../foto/stol-jee/IMG-fa65a0d1aaadd9f0bf905d5f799d6ba2-V.jpg'), alt: 'Photo 29' },
        { src: require('../../foto/stol-jee/IMG-d60cb71099057274667c749394a11138-V.jpg'), alt: 'Photo 30' },
        { src: require('../../foto/stol-jee/IMG-ce83c42b7938ee7ef29f5a1cd1363583-V.jpg'), alt: 'Photo 31' },
        { src: require('../../foto/stol-jee/IMG-c3924df1ab8657152348feedbf3043d9-V.jpg'), alt: 'Photo 32' },
        { src: require('../../foto/3-6/IMG-ff9399050819e836003f8bc771285a10-V.jpg'), alt: 'Photo 33' },
        { src: require('../../foto/3-6/IMG-d755a1b157513b89308754d10c757c88-V.jpg'), alt: 'Photo 34' },
        { src: require('../../foto/3-6/IMG-2f1fb882df72ee218d5577b34e6e50f9-V.jpg'), alt: 'Photo 35' },
        { src: require('../../foto/stol-1100/изображение_viber_2021-06-14_13-06-37.jpg'), alt: 'Photo 36' },
        { src: require('../../foto/stol-worck/IMG-f16a682013642a0677dfbaaa49faff3c-V.jpg'), alt: 'Photo 37' },
        { src: require('../../foto/stol-worck/IMG-bf022e031d0efc33ab82d031bea8c7e1-V.jpg'), alt: 'Photo 38' },
        { src: require('../../foto/stol-p/IMG-6e0f9204d30bac6b4d06142e8c2ea4d3-V.jpg'), alt: 'Photo 39' },
        { src: require('../../foto/stol-p/IMG-25ab5eeabe7847bb2af00a6b792fae64-V.jpg'), alt: 'Photo 40' },
        { src: require('../../foto/stol-p/IMG-51b30370c36dfaf6c791f86cceef660c-V.jpg'), alt: 'Photo 41' },
        { src: require('../../foto/stol-p/IMG-51b30370c36dfaf6c791f86cceef660c-V.jpg'), alt: 'Photo 42' },
        { src: require('../../foto/stol-p/IMG-a2de86a6bcb6dd968411c9cd9372334c-V.jpg'), alt: 'Photo 43' },
        { src: require('../../foto/stol-p/IMG-a2de86a6bcb6dd968411c9cd9372334c-V.jpg'), alt: 'Photo 44' },
        { src: require('../../foto/stol-p/IMG-a273f907dfb5bd80d50864e688d09a75-V.jpg'), alt: 'Photo 45' },
        { src: require('../../foto/stol-p/IMG-a273f907dfb5bd80d50864e688d09a75-V.jpg'), alt: 'Photo 46' },
        { src: require('../../foto/stol-p/IMG-ff4d4593dcb487588345700bda2edadb-V.jpg'), alt: 'Photo 47' },
        { src: require('../../foto/stol-p/IMG-ef417393f3d4e460f52be0e5ec79246c-V.jpg'), alt: 'Photo 48' },
        { src: require('../../foto/stol-p/IMG-cfcf495d1e267cd8a1f7e00d6ede7e38-V.jpg'), alt: 'Photo 49' },
        { src: require('../../foto/stol-p/IMG-b865680782908fd8ec06ea413d918c16-V.jpg'), alt: 'Photo 50' },
        // { src: require('../../foto/stol-p'), alt: 'Photo 46' },
        // { src: require('../../foto/stol-p'), alt: 'Photo 46' },
        // { src: require('../../foto/stol-p'), alt: 'Photo 46' },
        // { src: require('../../foto/stol-p'), alt: 'Photo 46' },
        // ...другие фотографии
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef(null);
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, );

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
            <ModalPhotoBox className="modal" ref={modalRef}>
                <ModalButtonClose onClick={handleCloseModal}>Close</ModalButtonClose>
                <img src={selectedImage.src} alt={selectedImage.alt} className={styles.imageStyles}  />

            </ModalPhotoBox></ModalBox>
        )}

        </>
    );
}

// .container {
//     display: grid;
//     grid-template-areas: 'heder header' 'sidebar content';
//     grid-template-columns: 154px 1fr ;

//   }
//   .Header {
//     grid-area: header;
//   }

//   .Sidebar {
//     grid-area: sidebar;
//   }

//   .Content {
//     grid-area: content;
//   }