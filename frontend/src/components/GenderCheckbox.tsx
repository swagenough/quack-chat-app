const GenderCheckbox = ({
	selectedGender,
	onCheckboxChange,

}: {
	selectedGender:string;
	onCheckboxChange: (gender: "male" | "female") => void;
}) => {
	return (
		<div className='flex flex-col space-y-2 mt-2'>
			<div className='form-control'>
				<label className='label gap-2 cursor-pointer'>
					<input type='checkbox' className='checkbox border-slate-900' 
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
					<span className='label-text text-white'>Male</span>
				</label>
			</div>
			<div className='form-control'>
				<label className='label gap-2 cursor-pointer'>
					<input type='checkbox' className='checkbox border-slate-900' 
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("male")}
					/>
					<span className='label-text text-white'>Female</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
