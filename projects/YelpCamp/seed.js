const   Campground = require('./models/campground'),
        Comment = require('./models/comment');

const data = [
    { title: "My Second Day of School", image: "https://images.unsplash.com/photo-1541051595295-e7d4ae8b845f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", description: "This was a bad idea, I should've never come here oh my god" },
    { title: "My Fourth Day of School", image: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", description: "<i>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</i> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of <strong>\"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero</strong>, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." }
]

module.exports = () => {
    // Remove Campgrounds
    Campground.remove({}, err => {
        if (err) { console.log(err); }
        else {
            console.log('Removed all Campgrounds');

            // Create Campgrounds
            data.forEach(seed => {
                Campground.create(seed, (err, campground) => {
                    if (err) { console.log(err); }
                    else {
                        console.log('Created Campground');
                        Comment.create({ text: 'This camp is TIGHT!', author: 'Ryan' }, (err, comment) => {
                            if (err) { console.log(err); }
                            else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log('Comment Added to Campground');
                            }
                        });
                    }
                });
            });
        }
    });
    console.log('executed seed.js');
}