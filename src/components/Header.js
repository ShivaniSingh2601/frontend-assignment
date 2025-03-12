import {HEADER_IMAGE_URL} from "../utils/constants"
const Header = () => {
    return <>
        <header>
            <div className="header-logo">
                <img src={HEADER_IMAGE_URL}/>
            </div>
        </header>
    </>
}

export default Header