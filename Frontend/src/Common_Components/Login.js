import register from '../assets/images/hero-banner.png';
import Navbar from './Navbar';
const Login = () => {
    return (
        <>
         <Navbar/>
        
            <div class="contain">

                <div class="left-section">

                    <div class="host-info">z
                        <img src={register} alt="Host Image" class="host-image" />

                    </div>
                </div>
                
                <div className="right-section">
                
                    <form className="registration-form">
                        <h2>Login Form</h2>
z
                        {/* <div className="form-group">
                            <label htmlFor="client_id">Client ID</label>
                            <input type="text" id="client_id" name="client_id" required />
                        </div> */}

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="tel" id="mobile" name="mobile" required />
                        </div> */}

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="repass">Re-enter Password</label>
                            <input type="password" id="repass" name="repass" required />
                        </div> */}

                        {/* <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select id="status" name="status" required>
                                <option value="" disabled selected>Select a role</option>
                                <option value="user admin">User Admin</option>
                                <option value="task manager admin">Task Manager Admin</option>
                                <option value="company admin">Company Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div> */}

                        {/* <div className="form-group">
                            <label htmlFor="profile_pic_url">Profile Picture URL</label>
                            <input type="url" id="profile_pic_url" name="profile_pic_url" />
                        </div> */}

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            
        </>
    );
}

export default Login;