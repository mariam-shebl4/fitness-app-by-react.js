export const exrciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '7116f01750mshaaaec0674cbe8c4p197d1cjsn573a6cddb421',
      // process.env.REACT_APP_RAPID_KEY,//process.env.REACT_APP
      'X-RapidAPI-Host':'exercisedb.p.rapidapi.com'
    }
  };

export  const youtubeOptions = {
    method: 'GET',
    // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    // params: {
    //   id: 'YQHsXMglC9A',
    //   hl: 'en',
    //   gl: 'US',
    //   next: 'CBQSDRILWVFIc1hNZ2xDOUEYACreAQjQr43tubfzi64BCNi24eOapu-n7AEIgejpz9fcuPajAQjwqMe8v7SEuJ0BCI3CwqDWu4nahAEItNrrwNnAzuQ1CK6-ooCH-Jj5JAik8O-ahq3L1sYBCMb965f10YS4UwiNkaXwtL_gzi4I1vOMu5f7r4HeAQjEuYHvqNfimgwIzvHK75mt1Z27AQjw_7n5yaLZ3_UBCJOq5eCOo-XS_QEIocGSnpeajIsXCN2F2tj65L_4zwEI4KbhwtjP98duCI_C_IbhttbzTAi2gO-y3KbjuZgBCNbN7-m31YCKVmoPd2F0Y2gtbmV4dC1mZWVk'
    // },
    headers: {
      'X-RapidAPI-Key':'7116f01750mshaaaec0674cbe8c4p197d1cjsn573a6cddb421',
      //  process.env.REACT_APP_RAPID_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData=async(url, options)=>{
const response= await fetch(url, options);
const data= await response.json();
return data
}