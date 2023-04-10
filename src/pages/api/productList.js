// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:"001",
      name:"Apple Watch",
      price:"$1900",
      description:"This is Apple Watch"
    },
    {
      id:"002",
      name:"MackBook Pro",
      price:"$1600",
      description:"This is MackBook pro"
    },
    {
      id:"003",
      name:"i-Pad",
      price:"$1200",
      description:"This is Apple i-Pad"
    },
    {
      id:"004",
      name:"Air Pod",
      price:"$200",
      description:"This is Apple Air Pod"
    },
    {
      id:"005",
      name:"Apple Tv+",
      price:"$1500",
      description:"This is Apple Tv+"
    },
    {
      id:"006",
      name:"i-Phone",
      price:"$900",
      description:"This is Apple i-Phone"
    }
  ])
}
