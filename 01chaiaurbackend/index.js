const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const data = {
  "login": "rohitvaru",
  "id": 112805275,
  "node_id": "U_kgDOBrlFmw",
  "avatar_url": "https://avatars.githubusercontent.com/u/112805275?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rohitvaru",
  "html_url": "https://github.com/rohitvaru",
  "followers_url": "https://api.github.com/users/rohitvaru/followers",
  "following_url": "https://api.github.com/users/rohitvaru/following{/other_user}",
  "gists_url": "https://api.github.com/users/rohitvaru/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rohitvaru/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rohitvaru/subscriptions",
  "organizations_url": "https://api.github.com/users/rohitvaru/orgs",
  "repos_url": "https://api.github.com/users/rohitvaru/repos",
  "events_url": "https://api.github.com/users/rohitvaru/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rohitvaru/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 5,
  "following": 6,
  "created_at": "2022-09-04T10:33:09Z",
  "updated_at": "2024-05-10T05:28:03Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/express',(req,res)=>{
    res.send("express server is work properly bro")
})

app.get('/youtube',(req,res)=>{
    res.send("<h1 style='color:red'> This is animator_rd_444 h1 tag</h1>")
})

app.get('/data',(req,res)=>{
  res.json(data)
})


app.listen(process.env.port, () => {
  console.log(`http://localhost:${port}`)
})