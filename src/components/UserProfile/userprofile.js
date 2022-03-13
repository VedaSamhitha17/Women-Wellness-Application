import React from "react";
import "./userprofile.css";
function UserProfile() {
    return (
    <>
        <div class="container">
		<div class="main">
			<div class="topbar">
				<a href="">logout</a>
		        <a href="">Support</a>
		        <a href="">Work</a>
		        <a href="">Home</a>
	        </div>
	        <div class="row">
	            <div class="col-1 mt-1">
			        <div class="card text-center sidebar">
				         <div class="card-body">
					        <div class="mt-2">
                                <h1 class="m-3 pt-3">User Profile</h1>
                                <br></br>
                               <h3> User Name      : Kavya <br></br>
						        E-mail Address : Kavya.123@gmail.com <br></br>
                                Phone          : 9848****** <br></br></h3>
					        </div>
				        </div>
			        </div>
		        <div class="col-1 mt-1">
		        	<div class="card mb-3 content">
		        		<h1 class="m-3 pt-3">Additional Details</h1>
		        		<div class="card-body">
		        			<div class="row">
		        				<div class="col-md-3">
		        					<h3>Full Name: Kavya Mohan </h3>
                                
		        				</div>

		        			</div>
		        			
		        			<div class="row">
		        				<div class="col-md-3">
		        					<h3>Age</h3>
		        				</div>
		        				<div class="col-md-9 text-secondary">
		        					21
		        				</div>
		        			</div>
		        			
		        		    <div class="row">
		        		    	<div class="col-md-3">
		        		    		<h3>Height</h3>
		        		    	</div>
		        		    	<div class="col-md-9 text-secondary">
		        		    		156cm
		        		    	</div>
		        		    </div>
		        		    <div class="row">
		        		        <div class="col-md-3">
		        		             <h3>Weight</h3>
		        		        </div>
		        		        <div class="col-md-9 text-secondary">
		        		               52kg
		        		        </div>
		        		    </div>
		        		</div>
		            </div>
		         </div>
	        </div>
	    </div>
        </div>
	</div>
        </>
    );
}
export default UserProfile;
