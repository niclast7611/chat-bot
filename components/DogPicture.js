// new file called DogPicture.jsx
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="a dog"
        width={20}
        height={20}
      />
    </div>
  );
};

export default DogPicture;
