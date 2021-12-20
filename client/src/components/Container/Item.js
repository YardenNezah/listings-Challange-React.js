import './Item.css';
import Search from './Search'
import account from "../../assets/account.svg";
import headerdesktop from "../../assets/bg-header-desktop.svg";
import headermobile from "../../assets/bg-header-mobile.svg";
import eyecamco from "../../assets/eyecam-co.svg";
import faceit from "../../assets/faceit.svg";
import insure from "../../assets/insure.svg";
import loopstudios from "../../assets/loop-studios.svg";
import manage from "../../assets/manage.svg";
import myhome from "../../assets/myhome.svg";
import photosnap from "../../assets/photosnap.svg";
import shortly from "../../assets/shortly.svg";
import theairfiltercompany from "../../assets/the-air-filter-company.svg";


const Item = ({job}) => {
        function getImg() {
        const companyName = job.listedCompany;
        let backgroundImg;

        switch (companyName.toLowerCase()) {
            case "account": backgroundImg = account;
                break;
            case "headerdesktop": backgroundImg = headerdesktop;
                break;
            case "headermobile": backgroundImg = headermobile;
                break;
            case "eyecamco": backgroundImg = eyecamco;
                break;
            case "faceit": backgroundImg = faceit;
                break;
            case "insure": backgroundImg = insure;
                break;
            case "loopstudios": backgroundImg = loopstudios;
                break;
            case "manage": backgroundImg = manage;
                break;
            case "myhome": backgroundImg = myhome;
                break;
            case "photosnap": backgroundImg = photosnap;
                break;
            case "shortly": backgroundImg = shortly;
                break;
            case "theairfiltercompany": backgroundImg = theairfiltercompany;
                break;
            default: backgroundImg = "";
        }
        return backgroundImg;
    }

    return (<div className="list-item-container">
        <div className="company-image">
            <img src={
                    getImg()
                }
                alt=""
                class="img"></img>
        </div>
        <div className="left-item">

            <div className="top-tags top">

                <div className="listed-company">
                    <p>{
                        job.listedCompany
                    }</p>
                </div>

                <div className="new-job-tag">
                    {
                    < p className = "new-tag new" > NEW !
                </p>} </div>

            <div className="is-featured">
                {
                job.isFeatured && <p className="featured-tag featured">
                    FEATURED
                </p>
            } </div>
        </div>

        <div className="job-title">
            <p className="title">
                {
                job.listingTitle
            }</p>
        </div>

        <div class="bottom-tags bottom">
            <div className="time-registered">
                {
                job.timeRegistered
            }</div>
            <div className="dot"></div>
            <div className="listing-type">
                {
                job.listingType
            }</div>
            <div className="dot"></div>
            <div className="listing-location">
                {
                job.listingLocation
            }</div>
        </div>
    </div>

    <div class="right-item">
        {
        job.languages.map((lang) => {
            return <p className="right-tags"
                onClick={
                    () => document.getElementById('filter').value = lang
            }>
                {lang}</p>
    })
    }

        {
        job.tools && job.tools.map((tools) => {
            return <p className="right-tags"
                onClick={
                    () => document.getElementById('filter').value = tools
            }>
                {tools}</p>
    })
    } </div>
</div>

    )

}

export default Item;
