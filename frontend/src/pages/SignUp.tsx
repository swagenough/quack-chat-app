import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto p-4'>
			<div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>
					Sign Up <span className='text-yellow-500'> Fery's Chat App</span>
				</h1>

				<form className="space-y-4">
					<div>
						<label className='block mb-1 text-white'>Full Name</label>
						<input type='text' placeholder='John Doe' className='input input-bordered w-full' />
					</div>

					<div>
						<label className='block mb-1 text-white'>Username</label>
						<input type='text' placeholder='johndoe' className='input input-bordered w-full' />
					</div>

					<div>
						<label className='block mb-1 text-white'>Password</label>
						<input type='password' placeholder='Enter Password' className='input input-bordered w-full' />
					</div>

					<div>
						<label className='block mb-1 text-white'>Confirm Password</label>
						<input type='password' placeholder='Confirm Password' className='input input-bordered w-full' />
					</div>

					<GenderCheckbox />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-yellow-600 inline-block text-white'
					>
						Already have an account?
					</Link>

					<button className='btn btn-block mt-2 border border-slate-700'>Sign Up</button>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
