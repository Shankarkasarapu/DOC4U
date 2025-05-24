import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DoctorItem from '../components/DoctorItem'
import SecurityHeaders from '../data/SecurityHeaders'
import ENDPOINT from '../data/ENDPOINT'

const DoctorsList = () => {
	const [data, setdata] = useState([])
	const GetDoctors = async () => {
		try {
		  var data = new FormData();
		  var res = await axios.post(ENDPOINT +"get-doctors", data, SecurityHeaders);
		  if (res) {
			if (res.data.status === 'success') {
			  setdata(res.data.data);
			  console.log(res);
			}
		  }
		} catch (error) {
		  console.log(error)
		}
	  };	  
	useEffect(() => {
		GetDoctors()
	}, [])
	return (
		<div className="content top-space">
			<div className="container">
				<div className="row">
					<div className="row">
						<div className=" d-flex align-items-center" >

							<div className="section-header-one section-header-slider ">

								<h2 class="section-title fs-3">Meet Our Expert Physicians</h2>


							</div>

						</div>

					</div>
					<div className="col-xl-12 col-lg-12">

						<div className="row">
							{data.map((item) => (
								<DoctorItem item={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DoctorsList