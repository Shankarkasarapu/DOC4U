import React from 'react'
import { CircularProgress, Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const HealthOverview = () => {
  return (
    <div>
        <div className="col-xl-12 d-flex">
			<div className="dashboard-card w-100">
				<div className="dashboard-card-head">
					<div className="header-title">
						<h5>Health Records</h5>
					</div>
					</div>
					<div className="dashboard-card-body">
						<div className="row">
							<div className="col-sm-7">
								<div className="row">
									<div className="col-lg-6">
										<div className="health-records icon-orange">
											<span><i className="fa-solid fa-heart"></i>Heart Rate</span>
											<h3>140 Bpm <sup> 2%</sup></h3>
										</div>
									</div>
								<div className="col-lg-6">
									<div className="health-records icon-amber">
										<span><i className="fa-solid fa-temperature-high"></i>Body Temprature</span>
										<h3>37.5 C</h3>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="health-records icon-dark-blue">
										<span><i className="fa-solid fa-notes-medical"></i>Glucose Level</span>
										<h3>70 - 90<sup> 6%</sup></h3>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="health-records icon-blue">
										<span><i className="fa-solid fa-highlighter"></i>SPo2</span>
										<h3>96%</h3>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="health-records icon-red">
										<span><i className="fa-solid fa-syringe"></i>Blood Pressure</span>
										<h3>100 mg/dl<sup> 2%</sup></h3>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="health-records icon-purple">
										<span><i className="fa-solid fa-user-pen"></i>BMI </span>
										<h3>20.1 kg/m2</h3>
									</div>
								</div>
								<div className="col-md-12">
									<div className="report-gen-date">
										<p>Report generated on last visit : 25 Mar 2024 <span><i className="fa-solid fa-copy"></i></span></p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-5">
                            <div className="chart-over-all-report">
                                <h5>Overall Report</h5>
                                <Box sx={{ position: 'relative', display: 'inline-block', width: 120, height: 120 }}>
                                <CircularProgress
                                    variant="determinate"
                                    value={66}
                                    size={120}
                                    thickness={4}
                                    color="primary"
                                />
                                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Typography variant="h6">{`${66}%`}</Typography>
                                </Box>
                                </Box>
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                                Last visit 25 Mar 2024
                                </Typography>
                                <Typography variant="body2" color="textPrimary">
                                Your health is {66}% Normal
                                </Typography>
                            </div>
                        </div>
					</div>
				</div>						
			</div>
		</div>
    </div>
  )
}

export default HealthOverview