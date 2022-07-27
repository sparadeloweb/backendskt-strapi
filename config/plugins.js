module.exports = () => {
    return {
        ckeditor: true,
        slugify: {
            enabled: true,
            config: {
              contentTypes: {
                post: {
                  field: 'slug',
                  references: 'title',
                },
              },
            },
        },
    }
}