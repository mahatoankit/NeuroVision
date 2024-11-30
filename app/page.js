import Link from 'next/link';
import React from 'react';
import ContactMe from './componenets/ContactMe';
import Application from './componenets/Application';
import Features from './componenets/Features';

export default function Page() {
  const tumors = {
    "Pilocytic Astrocytoma": { "accuracy": "87%", "img": "sample/pilocytic_astrocytoma.jpeg" },
    "Medulloblastoma": { "accuracy": "93%", "img": "sample/medulloblastoma.jpg" },
    "Glioblastoma": { "accuracy": "95%", "img": "sample/glioblastoma.jpeg" },
    "Metastasis": { "accuracy": "89%", "img": "sample/metastasis.jpeg" },
    "Meningioma": { "accuracy": "92%", "img": "sample/meningioma.jpeg" },
    "Encephalitis": { "accuracy": "85%", "img": "sample/encephalitis.jpeg" },
  }
  const prediction = {
    "pilocytic_astrocytoma": {
      "symptoms": "seizures, persistent headaches, nausea, vomiting, visual disturbances, cognitive difficulties, and problems with movement or balance",
      "name": "Pilocytic Astrocytoma",
      "img": "/sample/pilocytic_astrocytoma.jpeg",
      "cancer": true
    },
    "medulloblastoma": {
      "symptoms": "persistent headaches, nausea (especially in the morning), balance and coordination issues, vision problems, and cognitive changes, particularly in children",
      "name": "Medulloblastoma",
      "img": "/sample/medulloblastoma.jpg",
      "cancer": true
    },
    "glioblastoma": {
      "symptoms": "persistent headaches, seizures, weakness or numbness (often on one side of the body), speech difficulties, memory loss, confusion, nausea, and difficulty walking or maintaining balance",
      "name": "Glioblastoma",
      "img": "/sample/glioblastoma.jpeg",
      "cancer": true
    },
    "primary_cns_lymphoma": {
      "symptoms": "seizures, cognitive changes (including memory issues), vision problems, weakness or numbness in limbs, speech difficulties, and headaches",
      "name": "Primary CNS Lymphoma",
      "img": "/sample/primary_cns_lymphoma.jpg",
      "cancer": false
    },
    "meningioma": {
      "symptoms": "headaches, seizures, vision or hearing loss, weakness in limbs, and cognitive or memory problems",
      "name": "Meningioma",
      "img": "/sample/meningioma.jpeg",
      "cancer": false
    },
    "metastatic_brain_tumor": {
      "symptoms": "headaches, seizures, nausea, vomiting, cognitive changes, weakness or numbness in limbs, vision problems, and speech difficulties",
      "name": "Metastatic Brain Tumor",
      "img": "/sample/metastasis.jpeg",
      "cancer": true
    }
  };



  return (
    <>
      <div className="bg-[#050505]">
        <div className="min-h-[70vh] flex-wrap gap-2 w-full flex items-center justify-center px-5">
          <img src="img/gif.gif" className="lg:max-w-[500px] md:max-w-[300px] xl:max-w-650px flex-grow" alt="Brain Diagnosis Animation" />
          <div className="xl:w-[800px] lg:w-[700px] md:w-[600px]">

            <h1 className="xl:text-5xl font-bold leading-tight lg:text-4xl md:text-3xl sm:text-2xl">Enhancing Clarity in Brain Diagnosis</h1>

            <p className="mt-3 xl:text-lg md:text-md  sm:text-sm leading-relaxed">
              Empowering the future of brain tumor diagnosis with cutting-edge technology and precise imaging analysis. Transforming complex neuroimaging data into clear, actionable insights for better patient outcomes and advanced medical care.
            </p>

            <div className="gap-3 flex">
              <div className="rounded-md cursor-pointer xl:p-3 md:p-2 bg-[#f99601] my-4 w-fit shadow-lg hover:scale-105 transition-transform">
                <Link href="/analysis" className="text-[#353434] font-medium">
                  Analyze Now
                </Link>
              </div>

              <div className="rounded-md cursor-pointer xl:p-3 md:p-2 border border-[#494848] my-4 w-fit shadow-lg hover:scale-105 transition-transform">
                <Link href="/analysis" className="text-[#f99601] font-medium">
                  Buy Now
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Features />

      <div className="bg-[#101010] py-12 px-6">
        <h2 className="text-center text-3xl font-bold">What Model Does?</h2>
        <p className='text-center mb-8'>The Model classify the given type of tumor with the given accuracy.</p>
        <div className="flex flex-wrap max-w-[1300px] mx-auto justify-evenly gap-6">

          {Object.keys(tumors).map((_tu) => {
            let name = _tu
            _tu = tumors[_tu]
            return <div className="bg-[#1c1c1c] flex items-center flex-col p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h3 className="text-2xl text-[#f99601] font-semibold mb-3">{name}</h3>
              <img src={_tu.img} alt={name} className='flex-grow object-cover rounded-full w-[200px]' />
              <div className="h-[3px] rounded-sm bg-gray-100 my-2 w-full">
                <div style={{ width: _tu.accuracy }} className="bg-[#f99601] rounded-sm h-full"></div>
              </div>
              <p>Accuracy:- {_tu.accuracy}</p>
            </div>
          })}
        </div>
      </div>

      <div className="bg-[#050505] py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">Model Performances</h2>
        <div className="flex flex-wrap max-w-[1300px] mx-auto justify-evenly gap-6">
          {Object.keys(prediction).map((_tu, index) => {
            _tu = prediction[_tu]

            return <div key={index} className="bg-[#1c1c1c] max-w-[600px] flex items-center w- gap-2 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center gap-2">
                <img src={_tu.img} className='object-cover max-w-[200px]' />
              </div>
              <div className="w-full">
                <p className='mb-2 text-[#f99601] text-xl'>{_tu.name}</p>
                <p>Model Prediction:- <span className='text-white ml-2'>{_tu.name}</span></p>
                <p>Cancerous:- <span className='text-white ml-2'>{_tu.cancer ? "Yes" : "No"}</span></p>
                <p>Symptoms:- <span className='text-white ml-2 capitalize'>{_tu.symptoms}</span></p>
              </div>
            </div>
          })}
        </div>
      </div>

      <Application />

      <ContactMe />
    </>
  );
}