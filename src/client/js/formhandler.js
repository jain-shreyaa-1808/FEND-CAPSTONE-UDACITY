

let baseURL="http://api.geonames.org/searchJSON?maxRows=1&q="
let username="&username=jainshreya232"


const getData=async(baseURL,place,username)=>{
  const response= await fetch(baseURL+place+username);
  try{
    const data=response.json();
    
    console.log(data);
    return(data);
  }catch(error){
    console.log("error",error);
  }
}

const getImage=async(url)=>{
  const response= await fetch(url);
  try{
    const res=response.json();
    return(res)
  }catch(error){
    console.log("error",error);
  }
}

export const handleSearch=async(event)=>{
  event.preventDefault();
  // document.querySelector(".input_submit").innerHTML="Updated";
    const place=document.getElementById("place").value;
    let key="17800591-520d277e752a1f3396bbade4b"

    // console.log(process.env.GEONAME_USER)
  getData(baseURL,place,username)
  .then(function(data){
    const startDate=document.getElementById("start_date").value;
    const endDate=document.getElementById("end_date").value;
    makePost('/addData',{place:place,startDate:startDate,endDate:endDate,countryName:data.geonames[0].countryName,lat:data.geonames[0].lat,lng:data.geonames[0].lng})

    let image=getImage(`https://pixabay.com/api/?key=${key}&q=${place}&image_type=photo`)
    // postImage('/addData',{image:data.body})
    // var image=resp.hits[0].pageURL
    console.log(image);
    updateUI({place:place,startDate:startDate,endDate:endDate,countryName:data.geonames[0].countryName,lat:data.geonames[0].lat,lng:data.geonames[0].lng,image:image});
    // console.log("Image",image.hits["webformatURL"])
  })
}
const makePost= async(url='',data={})=>{
  const response= await fetch(url,
      {
      method:'POST',
      credentials:'same-origin',
      headers:{
          'Content-type':'application/json',
      },
      body:JSON.stringify(data)
      });
      try{
          const newData=await response.json();
          console.log("Make Post",newData);
          return newData;
      }
      catch(error){
          console.log(error);
      }
}
const postImage= async(url='',data={})=>{
  const response= await fetch(url,
      {
      method:'POST',
      credentials:'same-origin',
      headers:{
          'Content-type':'application/json',
      },
      body:JSON.stringify(data)
      });
      try{
          const newData=await response.json();
          console.log("Make Post",newData);
          return newData;
      }
      catch(error){
          console.log(error);
      }
}
const updateUI= async(data={}) => {
  const request=await fetch('/');
    // console.log("Update data",request.json());
      try{
          // const allData=await request.json();
          const allData = data;
          // console.log("uodate UI",data)
          console.log("UpdateUI",allData)
          console.log(allData);
          document.querySelector(".place").innerHTML=allData.place;
          document.querySelector(".country").innerHTML=allData.countryName;
          document.querySelector(".lat").innerHTML=allData.lat;
          document.querySelector(".lng").innerHTML=allData.lng;
          document.querySelector(".weatherImg").src=allData.image;

          // document.getElementById("content").innerHTML=allData.userContent;
      }catch(error){
          console.log("error",error);
      }
}