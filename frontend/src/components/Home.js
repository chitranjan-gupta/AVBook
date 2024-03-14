import React, { useState, useEffect } from 'react';
import search from '../images/search.svg';
import left_arrow from '../images/left_arrow.svg';
import right_arrow from '../images/right_arrow.svg';
import { useHistory } from 'react-router-dom';
import loki from '../images/loki.png';

function Home(){

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch("/api/movies/");
    setMovies(await res.json());  
  }

  useEffect(() => {
    getMovies();
  },[])

  const history = useHistory();

  const [searchWord, getWord] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    getWord(e.target.value);
  };

  const getResult = async (e) => {
    e.preventDefault();
    if(searchWord){
      try{
        const res = await fetch('/api/movies/s',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({word:searchWord})
        });
        if(res.status === 404){
          history.push("/404");
          return;
        }
        const data = await res.json();
        console.log(data.message);
      }catch(err){
        
      }
    }else{
      window.alert('Type The Word');
    }  
  }

    return(
         <div>
  <div className="extra">
  <h1>moviesdawnload.<b className="th">com</b></h1>
  <span><b className="wh">moviesdawnload.</b><b className="th">com</b> is among the best website for sharing movies and shows for free</span>
  <div className="searchbar">
    <input type="text" value={searchWord} onChange={handleSearch} onSubmit={getResult} placeholder="Movies Search"/>
    <button className="sicon" onClick={getResult}>
      <img alt="Search" src={search}/>
    </button>
  </div>
  <div className="link-container">
  <a className="circle-link" title="Animations" href="https://movies4u" >
    <svg id="Group_20" data-name="Group 20" xmlns="http://www.w3.org/2000/svg" width="21.813" height="23.453" viewBox="0 0 21.813 23.453">
      <path id="Path_15" data-name="Path 15" d="M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z" transform="translate(-4088.702 -972.736)" fill="#ffa726"/>
      <path id="Path_16" data-name="Path 16" d="M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z" transform="translate(-4170.633 -972.736)" fill="#fb8c00"/>
      <path id="Path_17" data-name="Path 17" d="M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z" transform="translate(-4125.003 -1058.315)" fill="#ffe0b2"/>
      <path id="Path_18" data-name="Path 18" d="M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z" transform="translate(-4125.003 -1036.757)" fill="#fff3e0"/>
      <path id="Path_19" data-name="Path 19" d="M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z" transform="translate(-4125.003 -1015.199)" fill="#fff"/>
    </svg>
  </a>

  <a className="circle-link" title="CLI" href="https://movies4u/" >
    <svg xmlns="http://www.w3.org/2000/svg" width="21.762" height="23.447" viewBox="0 0 21.762 23.447">
      <title>Angular CLI Logo</title>
      <g id="Group_21" data-name="Group 21" transform="translate(0)">
        <path id="Path_20" data-name="Path 20" d="M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z" transform="translate(-2649.48 -313.618)" fill="#37474f"/>
        <path id="Path_21" data-name="Path 21" d="M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z" transform="translate(-2731.05 -313.618)" fill="#263238"/>
        <path id="Path_22" data-name="Path 22" d="M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z" transform="translate(-2687.274 -362.17)" fill="#fff"/>
        <path id="Path_23" data-name="Path 23" d="M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z" transform="translate(-2702.289 -380.631)" fill="#fff"/>
        <rect id="Rectangle_12" data-name="Rectangle 12" width="3.517" height="0.469" transform="translate(9.709 13.744)" fill="#fff"/>
      </g>
    </svg>
  </a>

  <a className="circle-link" title="Find a Local Meetup" href="https://www.meetup.com/find/?keywords=movies4u" >
    <svg xmlns="http://www.w3.org/2000/svg" width="24.607" height="23.447" viewBox="0 0 24.607 23.447">
      <title>Meetup Logo</title>
      <path id="logo--mSwarm" d="M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z" transform="translate(0 0.123)" fill="#f64060"/>
    </svg>
  </a>

  <a className="circle-link" title="Join on Discord For Latest Updates" href="https://discord.gg/moviesdawnload.com" >
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 245 240">
      <title>Join on Discord For Latest Updates</title>
      <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/>
      <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
    </svg>
  </a>
</div>

</div>
<div className="card-title"><span>Latest Movies & Shows</span></div>
<div className="card-container">
  {
    movies.map((movie) => {
      return(
        <div className="card" key={movie._id}>
          <div>
          <img alt={movie.poster} src={loki}/>
          </div>
          <span><h1>{movie.name}</h1></span>
        </div>
      )
    })
  }
</div>
  <div className="pagenumber">
    <div className="preno" title="Previous">
      <img alt="Previous" src={left_arrow}/>
    </div>
    <div className="curno" title="Current">1</div>
    <div className="nexno" title="Next">
      <img alt="Next" src={right_arrow}/>
    </div>
  </div>
  <footer className="copyright">
    <div>
        <a className="disclaimer" href="disclaimer" > Copyright © 2021 — moviesdawnload.<b className="th">com</b>. All Rights Reserved. Free Movies & TV Shows by moviesdawnload.<b className="th">com</b>. Disclaimer:- moviesdawnload.<b className="th">com</b> does not host any files on it's servers. All files or contents hosted on third party websites. moviesdawnload.<b className="th">com</b> does not accept responsibility for contents hosted on third party websites. We just index those links which are already available in internet.
        </a>
      </div>
      <div className="weight">
        <h1>moviesdawnload.<b className="th">com</b></h1>
      </div>
  </footer>
  </div>
    );
}

export default Home;