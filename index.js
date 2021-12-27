const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express();
const newspapers = [
    {
        name: 'PremierLeague',
        address:'https://www.premierleague.com/',
        base:"https://www.premierleague.com/"
    },
    {name: 'Skysport',
    address:'https://www.skysports.com/premier-league',
    base:''
},
    {
        name: 'beIN sport',
        address: 'https://www.beinsports.com/en/premier-league/',
        base:'https://www.beinsports.com'
    },
    {
        name: 'chelseafc',
        address: 'https://www.chelseafc.com/en',
        base: '',

    },
    {
        name: 'Man City',
        address:'https://www.mancity.com/',
        base: '',

    },
    {
        name: 'GOAL',
        address:'https://www.goal.com/en/premier-league/fixtures-results/2kwbbcootiqqgmrzs6o5inle5',
        base: 'https://www.goal.com',

    },
]

const articles = []

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
    .then((response)=> {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("Premier League")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Chelsea")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Liverpool")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("City")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Man United")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Tottenham")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Arsenal")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Everton")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Aston villa")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
        $('a:contains("Newcastle")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaper.base + url,
                source: newspaper.name
            })
        })
    })
});

app.get('/', (req, res) => {
    res.json('welcome to Football news')
})

app.get('/news', (req, res)=> {
        res.json(articles)
})
app.get('/news/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId
    const newspaperAddress = newspapers.filter( newspaper => newspaper.name === newspaperId)[0].address
    const newspaperBase = newspapers.filter(newspaper => newspaper.name === newspaperId)[0].base
    axios.get(newspaperAddress)
    .then((response)=> {
        const html = response.data
        const $ = cheerio.load(html)
        const specificArticles = []

        $('a:contains("Chelsea")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Liverpool")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Man City")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            articles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Man United")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Tottenham")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Arsenal")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Everton")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Aston villa")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        $('a:contains("Newcastle")', html).each(function(){
            const title = $(this).text().replace(/\s\s+/g, '');
            const url = $(this).attr('href')
            specificArticles.push({
                title,
                url: newspaperBase + url,
                source: newspaperId
            })
        })
        res.json(specificArticles)
    }).catch((err)=> console.log(err))
    
})

app.listen(PORT, console.log(` server is running on ${PORT}`))