import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-white mb-4'>
					Login to <span className='text-yellow-500'>Fery's Chat App</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input type='text' placeholder='Enter your username' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<Link
						to='/signup'
						className='text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block'
					>
						Don’t have an account? Sign up here
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-4'>Log In</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
