const posts = [
    { title: 'post one', body: 'this is post one', createdAt: new Date().getTime() },
    { title: 'post two', body: 'this is post two', createdAt: new Date().getTime() }
];

let intervalId;
function getPost() {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((x, index) => {
            output += `<li>${x.title}</li> last updated ${(new Date().getTime() - x.createdAt) / 1000}`
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(y, callback) {
    setTimeout(() => {
        posts.push({ ...y, createdAt: new Date().getTime() })
        callback();
    }, 2000);
};

getPost();

createPost({
    title: 'post three', body: 'this is post three'
}, getPost);

function createPost2(z, callback) {
    setTimeout(() => {
        posts.push({ ...z, createdAt: new Date().getTime() })
        callback();
    }, 3000);
};
createPost2({
    title: 'post four', body: 'this is fourth post', createdAt: new Date().getTime()
}, getPost)



