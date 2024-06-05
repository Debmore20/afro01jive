interface ArticleData {
    Title: string,
    Body: string,
    Articleid:number,
    Authorid:number,
    PostedAt: string,
    author:[{
      FirstName:string,
      LastName:string,
      Authorid:number,
    }]
  }

  export default ArticleData;