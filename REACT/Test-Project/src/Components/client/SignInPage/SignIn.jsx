function SignIn() {
    return (
        <>
            <body>
                <form action="/submit" method="POST">
                    <h2>Sign In</h2>
                    <div id="firstname-group">
                        <label for="name">First Name:</label>
                        <input type="text" id="firstname" name="firstname" onkeyup="validatefirstName()" />
                        <div id="firstname-error"></div>
                    </div>

                    <div id="lastname-group">
                        <label for="name">Last Name:</label>
                        <input type="text" id="lastname" name="lastnane" onkeyup="validatelastName()" />
                        <div id="lastname-error"></div>
                    </div>

                    <div id="email-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" onkeyup="validateEmail()" />
                        <div id="email-error"></div>
                    </div>

                    <div id="password-group">
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password" onkeyup="validatePassword()" />
                        <div id="password-error"></div>
                    </div>

                    <button type="button" onclick="submitForm()"> Submit </button>

                </form>

            </body>
        </>
    )
}

export default SignIn;