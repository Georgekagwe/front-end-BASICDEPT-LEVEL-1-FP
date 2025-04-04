// Array with image sources and descriptions
const imageData = [
    {
        src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhdGFnb25pYXxlbnwwfHwwfHx8MA%3D%3D',
        desc: 'PATAGONIA AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIAS BRAND MISSION'
    },
    {
        src: 'https://images.unsplash.com/photo-1695918428860-a3bc6a2f1d4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsc29uJTIwc2hvcnRzfGVufDB8fDB8fHww',
        desc: 'WILSON A CENTURY OLD SPORTS BRAND FINDING ITS PLACE IN THE CULTURE'
    },
    {
        src: 'https://images.unsplash.com/photo-1730817403180-e1efaba2f0c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlJTIwZ2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D',
        desc: 'GOOGLE STORE AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE'
    }
];

const imageContainer = document.getElementById("images-container");

imageData.forEach(item => {
    // Create a container for each image and its description
    const figure = document.createElement('figure');
    figure.className = 'image-card';
    
    // Create the image element
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.desc;
    img.className = "gallery-image";
    
    // Create the description element
    const caption = document.createElement('figcaption');
    caption.textContent = item.desc;
    caption.className = 'image-description';
    
    // Add image and description to the figure
    figure.appendChild(img);
    figure.appendChild(caption);
    
    // Add the figure to the container
    imageContainer.appendChild(figure);
});