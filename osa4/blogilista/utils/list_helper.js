const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
    if(!blogs.length || blogs.length < 1)
        return 0
    
    return blogs.reduce((n, blog) => Number(n) + Number(blog.likes), 0)
}

const favoriteBlog = (blogs) => {
    if(!blogs.length || blogs.length < 1)
        return {}
    
    return blogs.reduce(
        (res, blog) => Number(res.likes) < Number(blog.likes) ? 
            {
                title: blog.title,
                author: blog.author,
                likes: blog.likes
            } 
            : res
        , blogs[0])
}

const mostBlogs = (blogs) => {
    if(!blogs.length || blogs.length < 1)
        return {}
    
    return blogs.reduce(
        (res, blog) => { 
            console.log(res, blog)

            let ret = [...res];

            if(res.findIndex(r => r.author === blog.author) !== -1) {
                let name = res.find(r => r.author === blog.author).author
                let blogs = res.find(r => r.author === blog.author).blogs

                ret = ret.filter(r => r.author !== name)

                return ret.concat({
                    author: name, 
                    blogs: Number(blogs) + 1
                })
            }
                
            return ret.concat({
                author: blog.author, 
                blogs: 1
            })
        }
        , []
    ).sort((a, b) => Number(b.blogs) - Number(a.blogs))[0]
}

const mostLikes = (blogs) => {
    if(!blogs.length || blogs.length < 1)
        return {}
    
    return blogs.reduce(
        (res, blog) => { 
            console.log(res, blog)

            let ret = [...res];

            if(res.findIndex(r => r.author === blog.author) !== -1) {
                let name = res.find(r => r.author === blog.author).author
                let likes = res.find(r => r.author === blog.author).likes

                ret = ret.filter(r => r.author !== name)

                return ret.concat({
                    author: name, 
                    likes: Number(likes) + Number(blog.likes)
                })
            }
                
            return ret.concat({
                author: blog.author, 
                likes: blog.likes
            })
        }
        , []
    ).sort((a, b) => Number(b.likes) - Number(a.likes))[0]
}
  
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}