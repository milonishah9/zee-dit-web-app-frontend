import React from "react";
// import calander from '../../Images/calander.svg';
// import tvuser from '../../Images/tv-user.svg';
import './CatalogueEnrichment.css'


const CatalogueEnrichmentBottomCard = (props) => {
    const {data} = props;
    console.log(data);
    return (
        <div className="catalogue-enrichment-bottom-card">
            <div className="catalogue-enrichment-heading-icons">
                <h6>{data[0]}</h6>
                <div className="catalogue-enrichment-icons">
                    <label>
                    <svg className="mx-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.90446 13.4539C1.54461 13.4541 1.1994 13.3116 0.944481 13.0577L0.944474 13.0577C0.689555 12.8038 0.545617 12.4592 0.544323 12.0994L0.544323 12.0992L0.544323 3.23415C0.544323 2.48543 1.15693 1.88618 1.90443 1.88618H2.20458V0.813007V0.811806L2.2046 0.811807C2.20793 0.663714 2.32974 0.545875 2.47776 0.547265M1.90446 13.4539H1.90443V13.4006L1.90446 13.4539ZM1.90446 13.4539H12.305M12.305 13.4539H12.305V13.4006L12.305 13.4539ZM12.305 13.4539C12.6648 13.4541 13.0101 13.3116 13.265 13.0577L13.265 13.0577C13.5199 12.8038 13.6638 12.4592 13.6651 12.0994V12.0992V3.23415C13.6651 2.48543 13.0525 1.88618 12.305 1.88618H12.305H12.0048L12.0049 0.813007L12.0048 0.811807C12.0015 0.663714 11.8797 0.545875 11.7317 0.547265M11.7317 0.547265H11.7319V0.600598L11.7314 0.547268C11.7315 0.547267 11.7316 0.547266 11.7317 0.547265ZM11.7317 0.547265H9.41829C9.27455 0.547265 9.14002 0.661382 9.14002 0.813007V1.88618M9.14002 1.88618H5.06941M9.14002 1.88618V1.93952H5.06941V1.88618M9.14002 1.88618H9.19335H5.01607H5.06941M5.06941 1.88618V0.813007C5.06941 0.661396 4.93498 0.547265 4.79114 0.547265H2.47776M2.47776 0.547265H2.4775V0.600598L2.47806 0.547268C2.47796 0.547267 2.47786 0.547266 2.47776 0.547265ZM12.0048 1.93952H11.9515V1.88618L12.0048 1.93952ZM0.597656 12.0992C0.5989 12.4449 0.737189 12.776 0.982112 13.0199L0.597656 12.0992ZM1.90445 2.4213H2.2046V2.92275H2.20459L2.2046 2.92359C2.20697 3.07309 2.32679 3.19394 2.47612 3.19785L2.47612 3.19786H2.47751H4.79115V3.19788L4.79232 3.19785C4.94251 3.19455 5.06397 3.07474 5.06939 2.92467L5.06942 2.92468V2.92275V2.4213H9.14003V2.92275H9.14L9.14007 2.92467C9.14548 3.07474 9.26694 3.19455 9.41713 3.19785V3.19786H9.4183H11.7319V3.19788L11.7333 3.19785C11.8827 3.19394 12.0025 3.07309 12.0049 2.92359V2.92275V2.4213L12.305 2.4213L12.3054 2.4213C12.5227 2.41959 12.7317 2.50435 12.8864 2.65688C13.041 2.8094 13.1287 3.0171 13.13 3.2343C13.13 3.23435 13.13 3.23441 13.13 3.23446L13.13 4.05522H1.07942V3.2343C1.08072 3.0171 1.16842 2.80941 1.32302 2.65688C1.47771 2.50435 1.68672 2.4196 1.904 2.4213V2.4213H1.90441H1.90445ZM12.3051 12.9187H12.305H1.90445H1.90438C1.68639 12.9189 1.47719 12.8328 1.3225 12.6791C1.16795 12.5255 1.08057 12.3169 1.07946 12.0989V4.5901H13.13L13.13 12.0988C13.13 12.0988 13.13 12.0989 13.13 12.099C13.1289 12.3169 13.0415 12.5255 12.887 12.6791C12.7323 12.8328 12.5231 12.919 12.3051 12.9187ZM12.305 12.972H1.90445H12.305ZM9.67524 1.08238H11.4698V2.66273H9.67524V1.08238ZM2.73972 1.08238H4.5343V2.66273H2.73972V1.08238Z" fill="#808080" stroke="#808080" stroke-width="0.106667"/>
                    </svg>

                        {data[1]}
                    </label>
                    <label>
                        <svg className="mx-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00535 12.318C4.06772 12.318 1.68683 9.93638 1.68683 6.99944C1.68683 4.06181 4.06772 1.67999 7.00535 1.67999C9.94322 1.67999 12.3239 4.06181 12.3239 6.99944C12.3239 9.93638 9.94299 12.318 7.00535 12.318ZM7.00535 0.598633C10.5397 0.598633 13.4055 3.46439 13.4055 6.99944C13.4055 10.5338 10.5397 13.3986 7.00535 13.3986C3.471 13.3986 0.605469 10.5338 0.605469 6.99944C0.605469 3.46439 3.47123 0.598633 7.00535 0.598633ZM7.00535 2.76186C6.70618 2.76186 6.46467 3.00425 6.46467 3.30345V6.9908V6.99351C6.46377 7.13416 6.51514 7.27472 6.62239 7.38198L9.23577 9.99444C9.34122 10.1007 9.47906 10.153 9.61782 10.153C9.75567 10.153 9.89453 10.1007 9.99996 9.99444C10.2108 9.78355 10.2108 9.44114 9.99996 9.23025L7.54604 6.77633V3.30322C7.54604 3.00405 7.30446 2.76164 7.00529 2.76164L7.00535 2.76186Z" fill="#808080"/>
                        </svg>
                        {data[2]}min
                    </label>
                </div>
            </div>
            <div className="catalogue-enrichment-bottom-icons">
                <label>
                <svg width="31" height="31" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9192 11.2869V4.90375C21.9169 4.19097 21.6327 3.50806 21.1288 3.00394C20.6246 2.50002 19.9417 2.21582 19.2289 2.21351H18.4921V1.35675C18.4921 1.05057 18.3288 0.767739 18.0637 0.614745C17.7986 0.461752 17.472 0.461752 17.2069 0.614745C16.9419 0.767739 16.7786 1.05058 16.7786 1.35675V2.21351H5.64063V1.35675C5.64063 1.05057 5.47731 0.767739 5.21225 0.614745C4.94718 0.461752 4.62054 0.461752 4.35548 0.614745C4.09043 0.767739 3.9271 1.05058 3.9271 1.35675V2.21351H3.19024C2.47746 2.21581 1.79454 2.5 1.29043 3.00394C0.786502 3.50806 0.502301 4.19097 0.5 4.90375V18.3721C0.502295 19.0849 0.786482 19.7678 1.29043 20.2719C1.79454 20.7758 2.47746 21.06 3.19024 21.0623H13.42C14.5252 22.9845 16.4919 24.2532 18.6986 24.4678C20.9056 24.6824 23.0798 23.8162 24.5344 22.1431C25.9892 20.4697 26.5446 18.1962 26.0253 16.0405C25.5061 13.885 23.9762 12.1139 21.919 11.2865L21.9192 11.2869ZM3.19033 3.92753H3.9272V4.78429C3.9272 5.09047 4.09052 5.37331 4.35558 5.5263C4.62065 5.67929 4.94729 5.67929 5.21235 5.5263C5.4774 5.37331 5.64073 5.09046 5.64073 4.78429V3.92753H16.7787V4.78429C16.7787 5.09047 16.942 5.37331 17.207 5.5263C17.4721 5.67929 17.7987 5.67929 18.0638 5.5263C18.3289 5.37331 18.4922 5.09046 18.4922 4.78429V3.92753H19.229C19.488 3.92753 19.7364 4.03042 19.9196 4.21363C20.1028 4.39684 20.2057 4.64526 20.2057 4.90418V6.49781H2.21366V4.90418C2.21366 4.64524 2.31655 4.39683 2.49976 4.21363C2.68297 4.03043 2.93142 3.92753 3.19033 3.92753ZM2.21367 18.3726V8.21135H20.2057V10.8417C19.9215 10.8042 19.6354 10.7843 19.3489 10.7817C17.5312 10.7817 15.7878 11.5038 14.5023 12.7891C13.217 14.0747 12.4948 15.818 12.4948 17.6358C12.4954 18.2141 12.5704 18.7899 12.7176 19.3493H3.19042C2.93148 19.3493 2.68307 19.2464 2.49987 19.0632C2.31667 18.88 2.21377 18.6316 2.21377 18.3726L2.21367 18.3726ZM19.3489 22.7763C18.3761 22.7761 17.4235 22.4997 16.6016 21.9796C15.7794 21.4594 15.1219 20.7166 14.7052 19.8377C14.3736 19.1513 14.2036 18.398 14.2084 17.6357C14.2084 16.2723 14.75 14.9648 15.7141 14.0008C16.6781 13.0367 17.9856 12.4951 19.349 12.4951C20.7124 12.4951 22.0199 13.0367 22.9839 14.0008C23.948 14.9648 24.4896 16.2723 24.4896 17.6357C24.4896 18.9991 23.948 20.3066 22.9839 21.2706C22.0198 22.2347 20.7124 22.7763 19.349 22.7763H19.3489Z" fill="#FF9355"/>
                    <path d="M21.0625 16.7786H20.2057V14.2083C20.2057 13.9021 20.0424 13.6193 19.7773 13.4663C19.5123 13.3133 19.1856 13.3133 18.9206 13.4663C18.6555 13.6193 18.4922 13.9021 18.4922 14.2083V17.6354C18.4922 17.8626 18.5825 18.0806 18.7431 18.2412C18.9037 18.4019 19.1218 18.4921 19.349 18.4921H21.0625C21.3687 18.4921 21.6515 18.3288 21.8045 18.0637C21.9575 17.7987 21.9575 17.472 21.8045 17.207C21.6515 16.9419 21.3686 16.7786 21.0625 16.7786Z" fill="#FF9355"/>
                </svg>
                    <p className="m-2 icon-text-syn">{data[3]}M</p>
                </label>

                <label>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99289 19.0795C9.38465 18.6865 9.91645 18.4656 10.4712 18.4649C10.4712 18.4649 10.4712 18.4649 10.4712 18.4649L10.4714 18.6149L8.99289 19.0795ZM8.99289 19.0795C8.60119 19.4723 8.38154 20.0046 8.3824 20.5594L8.99289 19.0795ZM18.6926 19.0795C19.0844 18.6865 19.6163 18.4656 20.171 18.4649C20.171 18.4649 20.171 18.4649 20.1711 18.4649L20.1713 18.6149L18.6926 19.0795ZM18.6926 19.0795C18.3009 19.4723 18.0814 20.0047 18.0823 20.5594M18.6926 19.0795L21.547 19.1833C21.912 19.5482 22.1166 20.0432 22.1157 20.5592M18.0823 20.5594C18.0823 20.5594 18.0823 20.5594 18.0823 20.5594L18.2323 20.5592L18.0823 20.5594ZM18.0823 20.5594C18.083 21.113 18.3032 21.644 18.6947 22.0355C19.0863 22.427 19.6171 22.6474 20.1708 22.6482M20.1708 22.6482C20.1709 22.6482 20.1709 22.6482 20.1709 22.6482L20.1711 22.4982L20.1708 22.6482ZM20.1708 22.6482C20.7256 22.6491 21.2582 22.4296 21.651 22.0377C22.0439 21.646 22.265 21.1141 22.2657 20.5594C22.2657 20.5594 22.2657 20.5594 22.2657 20.5594L22.1157 20.5592M22.1157 20.5592C22.1151 21.0742 21.9098 21.5679 21.545 21.9315L22.1157 20.5592ZM2.47536 3.60503L2.47532 3.60501L2.47311 3.60811C2.35345 3.77639 2.31498 4.00031 2.38446 4.19633C4.14806 9.69908 4.14782 15.2861 2.38371 20.7889L2.38352 20.7895C2.3163 21.0022 2.3522 21.2045 2.47306 21.3747L2.47305 21.3747L2.47401 21.376C2.59266 21.5393 2.77272 21.6501 3.00267 21.6501H7.83824H8.05421L7.9788 21.4477C7.87235 21.1621 7.81045 20.8678 7.81045 20.5594V20.5079V20.3579H7.66045H3.86861C5.38437 15.1329 5.38452 9.85135 3.86886 4.64856H26.5611C25.0427 9.85417 25.0429 15.1357 26.5613 20.3579H22.9817H22.8317V20.5079V20.5594C22.8317 20.8697 22.7745 21.168 22.6741 21.4498L22.6028 21.6501H22.8154H27.4217C27.6523 21.6501 27.8302 21.5389 27.9534 21.3796L27.9538 21.3799L27.9609 21.369C28.0652 21.207 28.1154 21.004 28.0464 20.7888L28.0463 20.7885C26.2676 15.2859 26.2674 9.69912 28.0456 4.19652C28.1167 3.9959 28.0642 3.77401 27.9608 3.61371L27.9611 3.61351L27.9547 3.60503C27.8265 3.43404 27.64 3.35 27.4217 3.35H3.00267C2.7825 3.35 2.60256 3.43543 2.47536 3.60503ZM6.55271 26.2252L6.55179 26.3186L6.63523 26.3607L6.65816 26.3722L6.66737 26.3769L6.67713 26.3802C7.86426 26.7859 9.11256 26.9561 10.3625 26.9561H11.2974H11.4054V27.282V27.4147L11.5371 27.4309C12.7393 27.5786 14.0147 27.65 15.324 27.65C16.6364 27.65 17.9031 27.5786 19.1052 27.4309L19.2369 27.4147V27.282V26.956H19.3507H20.28C21.5302 26.956 22.7838 26.7827 23.9706 26.3801L23.9851 26.3752L23.9965 26.3685L23.9995 26.367L24.0056 26.364L24.0139 26.3599L24.0962 26.3176L24.0953 26.2251C24.0769 24.3483 22.5493 22.8413 20.6815 22.8413L19.672 22.8415C18.7935 22.8415 17.9876 23.1736 17.3847 23.7302L17.2576 23.8476C16.8229 23.6472 16.3388 23.5356 15.8288 23.5356H14.8193C14.3098 23.5356 13.8257 23.6473 13.3906 23.8479L13.2635 23.7304C12.6607 23.1736 11.8546 22.8416 10.9763 22.8416L9.96655 22.8415C8.09874 22.8415 6.57108 24.3484 6.55271 26.2252ZM12.5657 20.5594C12.5666 20.0036 12.3462 19.4703 11.9532 19.0773L12.5657 20.5594ZM15.3241 19.1589C14.7492 19.1589 14.2215 19.3934 13.8471 19.7764C13.4644 20.1503 13.2296 20.6723 13.2296 21.2477C13.2296 22.406 14.1756 23.3422 15.3241 23.3422C16.4795 23.3422 17.4129 22.4049 17.4129 21.2477C17.4129 20.099 16.4762 19.1589 15.3241 19.1589Z" fill="#768CFF" stroke="#768CFF" stroke-width="0.3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.735 9.77832C14.6668 9.77832 13.8008 10.6443 13.8008 11.7126C13.8008 12.7808 14.6668 13.6468 15.735 13.6468C16.8033 13.6468 17.6693 12.7808 17.6693 11.7126C17.6693 10.6443 16.8033 9.77832 15.735 9.77832ZM15.0903 11.7126C15.0903 11.3565 15.3789 11.0679 15.735 11.0679C16.0911 11.0679 16.3798 11.3565 16.3798 11.7126C16.3798 12.0687 16.0911 12.3573 15.735 12.3573C15.3789 12.3573 15.0903 12.0687 15.0903 11.7126Z" fill="#768CFF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7516 10.0127C17.982 7.24315 13.4912 7.24315 10.7216 10.0127L9.47793 11.2564C9.22611 11.5082 9.22611 11.9165 9.47793 12.1683L10.7216 13.4119C13.4912 16.1815 17.982 16.1815 20.7516 13.4119L21.9952 12.1683C22.2469 11.9164 22.2469 11.5082 21.9952 11.2564L20.7516 10.0127ZM11.6335 10.9246C13.8996 8.65842 17.5736 8.65842 19.8397 10.9246L20.6275 11.7123L19.8397 12.5001C17.5735 14.7663 13.8996 14.7663 11.6335 12.5001L10.8457 11.7123L11.6335 10.9246Z" fill="#768CFF"/>
                    </svg>
                    <p className="m-2 icon-text-syn">{data[4]}M</p>
                </label>

                <label>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                        <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                    </svg>
                    <p className="m-2 icon-text-syn">{data[5]} min.</p>
                </label>
            </div>
        </div>
    )
}

export default CatalogueEnrichmentBottomCard;