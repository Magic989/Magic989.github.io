const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    audio: [
        {
            name: '跨越无数的夜晚',
            artist: 'V.A',
            url: 'http://music.163.com/song/media/outer/url?id=30148575.mp3',
            cover: '/music/cover/1-跨越无数的夜晚.webp',
            lrc: '/music/lrc/1-跨越无数的夜晚.lrc'
        },
        {
            name: '夢桜 ～ 幾千の願い (梦樱 ～ 数千愿望)',
            artist: '川江美奈子',
            url: 'http://music.163.com/song/media/outer/url?id=756165.mp3',
            cover: '/music/cover/2-夢桜 ～ 幾千の願い (梦樱 ～ 数千愿望).webp',
            lrc: '/music/lrc/2-夢桜 ～ 幾千の願い (梦樱 ～ 数千愿望).lrc'
        },
        {
            name: '風への誓い (于风的誓言)',
            artist: '福原綾香',
            url: 'http://music.163.com/song/media/outer/url?id=569212129.mp3',
            cover: '/music/cover/3-風への誓い (于风的誓言).jpg',
            lrc: '/music/lrc/3-風への誓い (于风的誓言).lrc'
        },

    ]
});