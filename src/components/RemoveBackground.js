import React, { useState } from "react";

export default function RemoveBackground() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleInput(e) {
    setImage(e.target.files[0]);
    setBgRemove(null);
  }
  const handleRemoveBackground = async () => {
    if (image === null) {
      alert("Please upload an Image");
      return;
    }
    setLoading(true);
    const apiKey = "Kh9EY2z1S8PdXU94FM1S6cbS";
    const apiUrl = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });
      const data = await res.blob();
      const reader = new FileReader();
      reader.onloadend = () => setBgRemove(reader.result);
      reader.readAsDataURL(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-center text-white">
        <div className="">
          <div className="input">
            <div className="input border border-gray-700 px-2 py-2 rounded-lg bg-gray-950 mb-5">
              <input
                type="file"
                onChange={handleInput}
                className="text-sm text-gray-500 file:mr-5 file:py-1 file:px-3  file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 lg:w-[40em] w-10/12"
              />
            </div>

            <div className="flex justify-center mb-5">
              <button
                type="button"
                onClick={handleRemoveBackground}
                className="text-black bg-gradient-to-r from-teal-500 to-blue-200 hover:bg-gradient-to-l hover:from-teal-500 hover:to-blue-200 font-medium  rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Remove Background
              </button>
            </div>
          </div>

          {/* Output  */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-1 mb-5">
            {image && (
              <div className="border border-gray-500 rounded-lg flex justify-center p-2 w-40 lg:w-80">
                <img
                  className="w-90 h-90"
                  src={image ? URL.createObjectURL(image) : ""}
                  alt=""
                />
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center text-base text-center md:text-xl md:ml-6">
                Removing Background
              </div>
            ) : (
              bgRemove && (
                <div className=" rounded-lg flex justify-center p-2 w-40 lg:w-80">
                  <img className="w-90 h-90" src={bgRemove} alt="img" />
                </div>
              )
            )}
          </div>

          {bgRemove && (
            <div className="flex justify-center px-4">
              <a className="w-full" href={bgRemove} download={"save.png"}>
                <button className=" bg-gray-800 text-white w-full py-2 px-3 rounded-lg border border-gray-600">
                  Download
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
