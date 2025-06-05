import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const CameraCapture: React.FC = () => {
  const navigate = useNavigate();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isCaptured, setIsCaptured] = useState<boolean>(false);

  const handleClick = () => {
    navigate('/home');
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Ask for opening camera's permission
  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        setHasPermission(true);
      } catch (err) {
        console.error('Permission denied or error:', err);
        setHasPermission(false);
      }
    };

    getCameraPermission();

    return () => {
      // stop camera tracking
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const capturePhoto = async () => {
    console.log('capturePhoto called');
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) {
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    if (context) {
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      if (imageData.data.length === 0) {
        console.log('Canvas is empty!');
        return;
      }
    }

    //convert to URL (base64)
    const imageUrl = canvas.toDataURL('image/png');
    console.log(imageUrl);
    setImageUrl(imageUrl); // save the image as URL
    setIsCaptured(true); // set state that the image is captured
  };

  const sendImage = async () => {
    if (!imageUrl) {
      return;
    }

    //convert URL to blob
    const formData = new FormData();
    const blob = await fetch(imageUrl).then((r) => r.blob());

    formData.append('file', blob, 'capture-image.png'); // send blob to FormData

    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File is sent:', response.data);
    } catch (error) {
      console.error('Error from sending occurred:', error);
    }
  };

  const retakePhoto = () => {
    setImageUrl(null); // delete image
    setIsCaptured(false); //reset state
  };

  if (hasPermission === null) {
    return <p>Verifying Camera Access...</p>;
  }

  if (hasPermission === false) {
    return <p>The permission was denied</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-5">Your Camera</h1>
      {!isCaptured ? (
        //User hasn't captured the photo
        <div className="flex flex-col justify-center items-center">
          <video className="w-xl h-auto rounded-xl" ref={videoRef} autoPlay playsInline muted></video>
          <button
            className="my-5 bg-green-500 hover:bg-green-600 px-8 py-2 font-bold rounded-lg"
            onClick={capturePhoto}
          >
            Take Photo
          </button>
        </div>
      ) : (
        // User has already taken the photo
        <div className="flex flex-col justify-center items-center">
          <h2>Are you confirm?</h2>
          <img src={imageUrl || ''} alt="Captured" className="my-5 rounded-lg" />
          <div>
            <button className="my-2 bg-blue-500 hover:bg-blue-600 px-8 py-2 font-bold rounded-lg" onClick={sendImage}>
              Confirm
            </button>
            <button className="my-2 bg-red-500 hover:bg-red-600 px-8 py-2 font-bold rounded-lg" onClick={retakePhoto}>
              Retake
            </button>
          </div>
        </div>
      )}
      <button className="my-5 bg-red-500 hover:bg-red-600 px-8 py-2 font-bold rounded-lg" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default CameraCapture;
