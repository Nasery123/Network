import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Add } from "../models/Add.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"


class PostsService {

    async getPosts() {
        const res = await api.get('api/posts')
        logger.log('[HERE IS YOUR POSTS]', res.data.posts)
        logger.log('[HERE IS LINK FOR YOUR BUTTONS', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.olderPage = res.data.older;
        AppState.newerPage = res.data.newer;
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
        AppState.olderPage = res.data.older;
        AppState.newerPage = res.data.newer;

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



    async changePage(url) {
        const res = await api.get(url)
        AppState.posts = res.data.posts.map(p => new Post(p));

        AppState.olderPage = res.data.older;

        logger.log('[HERE IS THE OLDER PAGE', res.data.older)
        AppState.newerPage = res.data.newer;
        logger.log('[HERE IS THE NEWER PAGE', res.data.newer)
    }
    async getAdds() {
        const res = await api.get('api/ads')
        logger.log('[HERE IS ADDS FOR YOUR PAGE', res.data)
        AppState.add = res.data.map(a => new Add(a))
    }
    async editPost(id) {

        const res = await api.put(`api/posts/${id}`)
        AppState.posts = new Post(res.data)

    }
    async getProfileById(id) {
        const res = await api.get('api/profiles/' + id)
        AppState.profile = res.data


    }


}
export const postsService = new PostsService()
