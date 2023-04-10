// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
      {
        id:"001",
        name:"Shaon",
        phone:"01628243978",
      },
      {
        id:"002",
        name:"Nishat",
        phone:"01905130857",
      },
      {
        id:"003",
        name:"Shanto",
        phone:"01715933429",
      }
    ])
  }
  