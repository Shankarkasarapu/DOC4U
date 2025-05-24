import React from 'react'

const EditInfoArea = ({details}) => {
  return (
    <div className="col-lg-8 col-xl-9">
          <form action="/profile-settings">
            <div className="setting-card">
              <div className="change-avatar img-upload">
                <div className="profile-img">
                  <i className="fa-solid fa-file-image" />
                </div>
                <div className="upload-img">
                  <h5>Profile Image</h5>
                  <div className="imgs-load d-flex align-items-center">
                    <div className="change-photo">
                      Upload New
                      <input type="file" className="upload" />
                    </div>
                    <a className="upload-remove">
                      Remove
                    </a>
                  </div>
                  <p className="form-text">
                    Your Image should Below 4 MB, Accepted format jpg,png,svg
                  </p>
                </div>
              </div>
            </div>
            <div className="setting-title">
              <h5>Information</h5>
            </div>
            <div className="setting-card">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder={details.fullName}/>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Date of Birth <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder={details.emergencyContact} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="email" className="form-control" placeholder={details.email} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Blood Group <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder={details.bloodGroup} />
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-title">
              <h5>Address</h5>
            </div>
            <div className="setting-card">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      City <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Pincode <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-btn text-end">
              <a className="btn btn-gray">
                Cancel
              </a>
              <button type="submit" className="btn btn-primary prime-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
  )
}

export default EditInfoArea