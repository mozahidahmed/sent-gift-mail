import React from 'react';




const Video = () => {
    return (
        <div>
           <div className="card card-side bg-base-100 shadow-xl">
  <figure>

 
  <video  controls typeof='video/mp4' 
  src="https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif"
  
  ></video>

  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> 





<div className="card card-side bg-base-100 shadow-xl">
  <figure>
  <video  src="https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif" controls typeof='video/mp4'></video>

  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Video;