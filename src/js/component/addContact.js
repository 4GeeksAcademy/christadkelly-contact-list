import React from "react";

const addContact = () => {
    return(
        <div>
            <form>
                <label for="fname">Full Name:</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"></input>
                <label for="email">Phone:</label>
                <input type="text" id="phone" name="phone"></input>
                <label for="email">Address:</label>
                <input type="text" id="address" name="address"></input>
            </form>
        </div>
    )
}