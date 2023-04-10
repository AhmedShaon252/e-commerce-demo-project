// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
      {
        id:"001",
        name:"Shaon",
        phone:"01628243978",
        mediaurl:"https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        id:"002",
        name:"Nishat",
        phone:"01905130857",
        mediaurl:"https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m1__mfge6fbp7t2m_large.jpg"
      },
      {
        id:"003",
        name:"Shanto",
        phone:"01715933429",
        mediaurl:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
    ])
  }
  