const superagent = require('superagent');
 
(async() => {
    let s = await superagent.get('http://vv.video.qq.com/getinfo')
        .query({
            // vid
            vids:'y3071zsofi4',
            platform:11001,
            charge:0,
            otype:'json'
        })
        let result = JSON.parse(s.body.toString().replace('QZOutputJson=','').replace(']}};',']}}'))
        const url = result.vl.vi[0].ul.ui[0].url;   
        const fvkey = result.vl.vi[0].fvkey;
        const fn = result.vl.vi[0].fn;
        video = url + fn + '?vkey='+ fvkey;
        console.log(video)
})()