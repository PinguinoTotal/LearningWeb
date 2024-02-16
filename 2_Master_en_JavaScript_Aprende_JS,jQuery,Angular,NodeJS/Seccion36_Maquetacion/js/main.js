'use strict'
$(document).ready(function(){

    //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //posts
    var posts = [ 
        {
            title: 'Pueba de titulo 1',
            date : moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta quam ac neque tempus dapibus. Etiam luctus scelerisque fringilla. Ut a odio eget lacus malesuada pretium. Morbi nec vehicula erat. Aliquam lacus nulla, pretium non metus in, commodo pretium dolor. Aliquam tincidunt est lorem, et interdum est pretium sed. Vestibulum luctus et neque sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed mattis mi. Etiam at nibh id turpis viverra hendrerit ut nec quam. Integer tempus purus a fermentum vestibulum. Integer dignissim finibus justo vitae bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a purus a nunc aliquet fringilla.'
        },
        {
            title: 'Pueba de titulo 1',
            date : new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta quam ac neque tempus dapibus. Etiam luctus scelerisque fringilla. Ut a odio eget lacus malesuada pretium. Morbi nec vehicula erat. Aliquam lacus nulla, pretium non metus in, commodo pretium dolor. Aliquam tincidunt est lorem, et interdum est pretium sed. Vestibulum luctus et neque sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed mattis mi. Etiam at nibh id turpis viverra hendrerit ut nec quam. Integer tempus purus a fermentum vestibulum. Integer dignissim finibus justo vitae bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a purus a nunc aliquet fringilla.'
        },
        {
            title: 'Pueba de titulo 2',
            date : new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta quam ac neque tempus dapibus. Etiam luctus scelerisque fringilla. Ut a odio eget lacus malesuada pretium. Morbi nec vehicula erat. Aliquam lacus nulla, pretium non metus in, commodo pretium dolor. Aliquam tincidunt est lorem, et interdum est pretium sed. Vestibulum luctus et neque sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed mattis mi. Etiam at nibh id turpis viverra hendrerit ut nec quam. Integer tempus purus a fermentum vestibulum. Integer dignissim finibus justo vitae bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a purus a nunc aliquet fringilla.'
        },
        {
            title: 'Pueba de titulo 3',
            date : new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta quam ac neque tempus dapibus. Etiam luctus scelerisque fringilla. Ut a odio eget lacus malesuada pretium. Morbi nec vehicula erat. Aliquam lacus nulla, pretium non metus in, commodo pretium dolor. Aliquam tincidunt est lorem, et interdum est pretium sed. Vestibulum luctus et neque sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed mattis mi. Etiam at nibh id turpis viverra hendrerit ut nec quam. Integer tempus purus a fermentum vestibulum. Integer dignissim finibus justo vitae bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a purus a nunc aliquet fringilla.'
        },
        {
            title: 'Pueba de titulo 4',
            date : new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta quam ac neque tempus dapibus. Etiam luctus scelerisque fringilla. Ut a odio eget lacus malesuada pretium. Morbi nec vehicula erat. Aliquam lacus nulla, pretium non metus in, commodo pretium dolor. Aliquam tincidunt est lorem, et interdum est pretium sed. Vestibulum luctus et neque sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed mattis mi. Etiam at nibh id turpis viverra hendrerit ut nec quam. Integer tempus purus a fermentum vestibulum. Integer dignissim finibus justo vitae bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a purus a nunc aliquet fringilla.'
        },
        {
            title: 'Pueba de titulo 5',
            date : new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta quam ac neque tempus dapibus. Etiam luctus scelerisque fringilla. Ut a odio eget lacus malesuada pretium. Morbi nec vehicula erat. Aliquam lacus nulla, pretium non metus in, commodo pretium dolor. Aliquam tincidunt est lorem, et interdum est pretium sed. Vestibulum luctus et neque sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed mattis mi. Etiam at nibh id turpis viverra hendrerit ut nec quam. Integer tempus purus a fermentum vestibulum. Integer dignissim finibus justo vitae bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a purus a nunc aliquet fringilla.'
        }
    ];

    posts.forEach((item,index)=>{
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        
        $("#posts").append(post);
    });
});