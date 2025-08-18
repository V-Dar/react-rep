import React from "react";
const date = new Date();
const FooterItem = () => {
    return (
        <div>
            <footer>
                <p className='m-3'>© Авторские права мои {date.getFullYear()}</p>
            </footer>
        </div>
    );
}

export default FooterItem;