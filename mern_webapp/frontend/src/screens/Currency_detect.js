import React, { useState, useEffect } from "react";
// import { singleFileUpload } from "../curre/api";
import { currency_test } from "../features/currency_detection/api";
import Compressor from "compressorjs";
const myStyle = {
  width: "400px",
  height: "200px",
};
const Currency_detect = () => {
  const [singleFile, setSingleFile] = useState({});

  const [Result, setResult] = useState(null);

  // const SingleFileChange = async (e) => {
  //   await setSingleFile(e.target.files[0]);
  // };
  useEffect(() => {
    uploadSingleFile();
  }, [singleFile]);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    // new Compressor(image, {
    //   quality: 0.4, // 0.6 can also be used, but its not recommended to go below.
    //   success: (compressedResult) => {
    // compressedResult has the compressed file.
    // Use the compressed file to upload the images to your server.
    setSingleFile(image);
    //   },
    // });
  };
  const uploadSingleFile = async () => {
    const formData = new FormData();
    console.log(singleFile.name);
    formData.append("file", singleFile);

    const response = await currency_test(formData);
    setResult(response.data);
  };

  return (
    <div className="row mt-3">
      <div className="col-6">
        <div className="form-group">
          <label>Select Single File</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              handleCompressedUpload(e);
              // SingleFileChange(e);

              setResult(null);
            }}
          />
        </div>
        {/* <div className="row">
          <div className="col-10">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => uploadSingleFile()}
            >
              Upload
            </button>
          </div>
        </div> */}
        {Result && (
          <img
            style={myStyle}
            src={`http://ec2-54-206-62-17.ap-southeast-2.compute.amazonaws.com:8080/uploads/${Result.filename}`}
          ></img>
        )}
        {Result && (
          <div>
            <h1>this currency is rupee {Result.result}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Currency_detect;
