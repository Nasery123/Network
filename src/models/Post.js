export class Post {
    constructor(data) {
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creatorId = data.creatorId
        this.id = data.id
        this.creator = data.creator
        this.likeIds = data.likeIds
        // this.olderPage = data.older
        // this.newerPage = data.newer
        this.date = new Date(data.createdAt).toLocaleDateString('en-us')
        // { weekday: "long", year: "numeric", month: "short", day: "numeric" }



    }
}
