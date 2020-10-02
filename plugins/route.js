export default ({app}) => {
    app.router.afterEach((to, from) => {
        app.store.dispatch('syncBrainPoints', app.$auth.user._id)
    })
}