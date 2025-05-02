import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const {loading, signup} = useSignup()

	const handleCheckboxchange = (gender:"male" | "female") => {
		setInputs({ ...inputs, gender });
	}

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		signup(inputs)
	}


	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto p-4'>
			<div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>
					Sign Up <span className='text-yellow-500'> Fery's Chat App</span>
				</h1>

				<form className="space-y-4" onSubmit={handleSubmitForm}>
					<div>
						<label className='block mb-1 text-white'>Full Name</label>
						<input type='text' placeholder='John Doe' className='input input-bordered w-full' 
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value})}
						/>
					</div>

					<div>
						<label className='block mb-1 text-white'>Username</label>
						<input type='text' placeholder='johndoe' className='input input-bordered w-full' 
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value})}
						/>
					</div>

					<div>
						<label className='block mb-1 text-white'>Password</label>
						<input 
							type='password' 
							placeholder='Enter Password' 
							className='input input-bordered w-full'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value})}
						/>
					</div>

					<div>
						<label className='block mb-1 text-white'>Confirm Password</label>
						<input 
							type='password' 
							placeholder='Confirm Password' 
							className='input input-bordered w-full'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value})}
						/>
					</div>

					<GenderCheckbox 
						selectedGender={inputs.gender}
						onCheckboxChange={handleCheckboxchange}
					/>

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-yellow-600 inline-block text-white'
					>
						Already have an account?
					</Link>

					<button className='btn btn-block mt-2 border border-slate-700' disabled = {loading}>
						{loading ? "Loading..." : "Sign Up"}
					</button>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
