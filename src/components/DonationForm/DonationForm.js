import React from 'react';

export default function DonationForm(props) {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>New Donation</legend>
                    <div>
                        <label htmlFor="">Avaliable Until</label>
                        <input type="text" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Delivery Avaliable</label>
                        <input type="text" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Contact</label>
                        <input type="text" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Info</label>
                        <input type="text" id="" />
                    </div>
                    <div>
                        <label htmlFor="">City</label>
                        <input type="text" id="" />
                    </div>
                    <div>
                        <label htmlFor="">State</label>
                        <input type="text" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Zip</label>
                        <input type="text" id="" />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}