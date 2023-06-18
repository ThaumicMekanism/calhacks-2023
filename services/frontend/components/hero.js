import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <>   
    <div> 
      <div className="heroMain flex flex-wrap bg-heroColor">
        <div className="lg:w-2/3">
            <div className="pl-20 w-fit mb-8">
                <div className="pt-16">
                    <p className="py-2 text-xl leading-normal text-gray-500 lg:text-2xl xl:text-2xl dark:text-gray-300">
                        Revolutionize your
                    </p>
                    <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-8xl xl:leading-none dark:text-white">
                    Notes with the <br></br>Ultimate AI-Powered <br></br>Tool
                    </h1>
                </div>
            </div>
        </div>
    <div className="lg:w-1/3">
        <div className="flex items-center justify-center w-full h-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center py-10">
              <svg aria-hidden="true" className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Maximum file size 20MB</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
    </div>
    </div>
      
    </div>
    <div className="bg-violet-700">
        <h1 className="text-2xl text-yellow-500	">Hello</h1>
      </div>
    </>
  );
}



export default Hero;