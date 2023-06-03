import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"


class PostsService {

    async getPosts() {
        const res = await api.get('api/posts')
        logger.log('[HERE IS YOUR POSTS]', res.data.posts)
        AppState.posts = res.data.posts.map(p => new Post(p))
    }
    async createPost(formData) {
        const res = await api.post('api/posts', formData)
        AppState.posts.unshift(new Post(res.data))
    }
    async deletPost(id) {

        const res = await api.delete('api/posts/' + id)

        AppState.posts = AppState.posts.filter(p => p.id != id)
    }
    async getPostsByProfile(id) {
        AppState.posts = []
        const res = await api.get('api/posts', {

            params: {
                creatorId: id
            }
        })
        logger.log('[HERE IS YOUR DATA', res.data.results)
        AppState.posts = res.data.posts.map(p => new Post(p))

    }
    async postLikes(id) {

        const res = await api.post(`api/posts/${id}/like`)
        logger.log('[HERE IS THE LIKE ARRAY]', res.data)
        const index = AppState.posts.findIndex(p => p.id == id)
        AppState.posts.splice(index, 1, new Post(res.data))
    }
    async searchPosts(searchTerm) {
        const res = await api.get(`api/posts?query=${searchTerm}`)
        AppState.query = searchTerm
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    async getAdds() {

        const res = await api.get('api/ads')
        logger.log('[HERE IS YOUR ADDS]', res.data)
    }

}
export const postsService = new PostsService()
