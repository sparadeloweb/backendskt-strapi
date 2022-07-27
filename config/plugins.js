module.exports = () => {
    return {
        ckeditor: true,
        slugify: {
            enabled: true,
            config: {
              contentTypes: {
                article: {
                  field: 'slug',
                  references: 'title',
                },
              },
            },
        },
    }
}