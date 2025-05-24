const GetUserID = () => {
    var user_id = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : null;
    if(user_id)
    {
        if(user_id===null || user_id==="")
        {
            user_id=null
        }
        else{
            user_id = user_id
        }
    }
  return user_id
}

export default GetUserID