import React from "react";

export default function LoginForm() {
    const [formData , setFormData] = React.useState({
        firstName:"" , 
        lastName:"" ,
        email:"" ,
        country:"" ,
        address:"" ,
        pin:"" ,
        comments:true ,
        candidates:false ,
        offers:true ,
        notification:""
    })
    function formHandler(event){
        const { name,value,checked,type } = event.target
        setFormData(prevForm => {
            return {
                ...prevForm ,
                [name]: type==="checkbox" ? checked:value
            }

        })
    }
    function submitHandler(event) {
        event.preventDefault()
        console.log("yelo Form ka data hihihi")
        console.log(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <legend>General Details</legend>
                <p>First Name</p>
            <input 
                type="text" placeholder="Piyush" 
                name="firstName"
                value={formData.firstName}
                onChange={formHandler}
            />
            <p>Last Name</p>
            <input 
                type="text" placeholder="Bhawsar" 
                name="lastName"
                value={formData.lastName}
                onChange={formHandler}
            />
            <p>Email Adress</p>
            <input 
                type="text" placeholder="@gmail.com"  
                name="email"
                value={formData.email}
                onChange={formHandler}
            />
            <p>Country</p>
            <select 
                name="country" 
                value={formData.country} 
                onChange={formHandler}
            >
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="America">America</option>
                <option value="Australia">Australia</option>
                <option value="Italy">Italy</option>
            </select>
            
            <p>address</p>
            <input 
                type="text" placeholder="Jane NY street" 
                name="address"
                value={formData.address}
                onChange={formHandler}
            />
            <p>ZIP / Postal Code</p>
            <input 
                type="text" placeholder="1100XX" 
                name="pin"
                value={formData.pin}
                onChange={formHandler}
            />
            </fieldset>
            <fieldset>
                <legend>Emailing Options</legend>
                <label htmlFor="comments">Comments</label>
                <input 
                    type="checkbox" 
                    name="comments" 
                    checked={formData.comments === true}
                    id="comments" 
                    onChange={formHandler}
                /><br/>
                <label htmlFor="candidates">Candidates</label>
                <input 
                    type="checkbox" 
                    name="candidates" 
                    checked={formData.candidates === true}
                    id="candidates" 
                    onChange={formHandler}
                /><br/>
                <label htmlFor="offers">Offers</label>
                <input 
                    type="checkbox" 
                    name="offers" 
                    checked={formData.offers === true}
                    id="offers" 
                    onChange={formHandler}
                    /><br/>
            </fieldset>
            <fieldset>
                <legend>Push Notification</legend>
                <input 
                    type="radio" 
                    name="notification" 
                    value="All-Notifications"
                    id="eveything" 
                    checked = {formData.notification ==="All-Notifications"}
                    onChange={formHandler} 
                />
                <label htmlFor="eveything">Everything</label><br />
                <input 
                    type="radio" 
                    name="notification" 
                    value="Same-as-email"
                    id="same-as-email" 
                    checked = {formData.notification ==="Same-as-email"}
                    onChange={formHandler} 
                />
                <label htmlFor="same-as-email">Same As Email</label><br />
                <input 
                    type="radio" 
                    name="notification" 
                    value="No-Notification"
                    id="none" 
                    checked = {formData.notification ==="No-Notification"}
                    onChange={formHandler} 
                />
                <label htmlFor="none">No Push Notification</label><br />
            </fieldset>
            <button>SUBMIT</button>
        </form>
    )
}