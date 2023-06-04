class AddsService {

    async getAdds() {

        const res = await api.get('api/ads')
        logger.log('[HERE IS YOUR ADDS]', res.data)
    }

}
export const addsService = new AddsService()
