const GenderCheckbox = () => {
	return (
		<div className='flex flex-col space-y-2 mt-2'>
			<div className='form-control'>
				<label className='label gap-2 cursor-pointer'>
					<input type='checkbox' className='checkbox border-slate-900' />
					<span className='label-text text-white'>Male</span>
				</label>
			</div>
			<div className='form-control'>
				<label className='label gap-2 cursor-pointer'>
					<input type='checkbox' className='checkbox border-slate-900' />
					<span className='label-text text-white'>Female</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
