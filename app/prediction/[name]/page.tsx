const getPredictedAge = async (name : string) =>{
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json()
}

const getPredictedGender = async (name : string) =>{
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json()
}

const getPredictedCountry = async (name : string) =>{
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}

interface Params{
  params: { name: string};
}

export default async function Page({params }: Params) {
    const ageData = getPredictedAge(params.name)
    const contryData = getPredictedCountry(params.name)
    const genderData = getPredictedGender(params.name)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {params.name}
  
      </main>
    );
  }
  