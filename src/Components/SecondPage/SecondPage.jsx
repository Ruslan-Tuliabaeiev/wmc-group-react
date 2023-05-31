

// import {PhotoIcon} from "../PhotoGallery/PhotoGallery.styled";
import photo from "../../src/stol-jee/IMG-3c708b964dad50588f2957097d8c0bf3-V.jpg";

export function SecondPage () {


    return (
        <div>
            <h1>page-2 Photo Gallery</h1>


           <img src={photo}  key={"id-1"} alt={'photo table'} width={200} height={200}/>
        </div>
    );
}

