// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:"001",
      name:"Apple Watch",
      price:"$1900",
      description:"This is Apple Watch",
      mediaurl:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      id:"002",
      name:"MackBook Pro",
      price:"$1600",
      description:"This is MackBook pro",
      mediaurl:"https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
    },
    {
      id:"003",
      name:"i-Pad",
      price:"$1200",
      description:"This is Apple i-Pad",
      mediaurl:"https://images.unsplash.com/photo-1590252973641-1352f1a8885e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:"004",
      name:"Air Pod",
      price:"$200",
      description:"This is Apple Air Pod",
      mediaurl:"https://images.unsplash.com/photo-1603680373177-e762186bdc3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:"005",
      name:"Apple Tv+",
      price:"$1500",
      description:"This is Apple Tv+",
      mediaurl:"https://images.unsplash.com/photo-1621685950846-9323d993bbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:"006",
      name:"i-Phone",
      price:"$900",
      description:"This is Apple i-Phone",
      mediaurl:"https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ])
}
