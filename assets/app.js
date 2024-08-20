const templates = {
    template1: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                </radialGradient>
                <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
                    <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="black" />
            ${Array.from({ length: 50 }, (_, i) => `
                <circle cx="${Math.random() * 500}" cy="${Math.random() * 300}" r="${Math.random() * 5 + 2}" fill="white"/>
            `).join('')}
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="url(#text-grad)" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template2: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="black" />
            ${Array.from({ length: 50 }, (_, i) => `
                <circle cx="${Math.random() * 500}" cy="${Math.random() * 300}" r="${Math.random() * 5 + 2}" fill="yellow" opacity="0.6"/>
            `).join('')}
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template3: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgb(0,255,0);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="black" />
            <path d="M0,150 Q250,50 500,150 T1000,150" fill="none" stroke="url(#grad3)" stroke-width="5"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="url(#grad3)" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template4: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(255,0,255);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(0,255,255);stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad4)" />
            <circle cx="250" cy="150" r="100" fill="white" opacity="0.5"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="black" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template5: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(255,165,0);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(255,69,0);stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad5)" />
            <path d="M0,150 C100,100 200,200 300,150 S500,100 500,150" fill="none" stroke="white" stroke-width="5"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template6: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="grad6" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color:rgb(0,255,255);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
                </radialGradient>
            </defs>
                                <rect width="100%" height="100%" fill="url(#grad6)" />
            <circle cx="250" cy="150" r="120" fill="white" opacity="0.3"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template7: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(255,0,255);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(0,255,0);stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad7)" />
            <path d="M0,0 L500,300 L0,300 Z" fill="rgba(255,255,255,0.2)"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template8: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="grad8" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(128,0,128);stop-opacity:1" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad8)" />
            <circle cx="250" cy="150" r="150" fill="white" opacity="0.2"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template9: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad9)" />
            <path d="M0,150 A150,150 0 1,1 500,150 A150,150 0 1,1 0,150 Z" fill="rgba(255,255,255,0.2)"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `,
    template10: `
        <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(0,128,128);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(128,0,128);stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad10)" />
            <path d="M0,0 L250,300 L500,0 Z" fill="rgba(255,255,255,0.3)"/>
            <text x="50%" y="50%" font-size="24" text-anchor="middle" fill="white" dy=".3em">
                Your Text Here
            </text>
        </svg>
    `
};

function generateSVG() {
    const template = document.getElementById('template-selector').value;
    const text = document.getElementById('text-input').value || 'Your Text Here';
    const textColor = document.getElementById('color-picker').value;
    let svg = templates[template];

    svg = svg.replace(/Your Text Here/g, text);
    svg = svg.replace(/fill="white"/g, `fill="${textColor}"`);

    return svg;
}

function svgToPng(svgString, width, height, callback) {
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(function(blob) {
            callback(blob);
        }, 'image/png');
    };

    img.src = url;
}

function sendToDiscord() {
    const webhookUrl = document.getElementById('webhook-url').value;
    if (!webhookUrl) {
        alert('Please enter a Discord webhook URL.');
        return;
    }

    const svg = generateSVG();
    svgToPng(svg, 500, 300, (blob) => {
        const formData = new FormData();
        formData.append('file', blob, 'image.png');

        const embed = {
            embeds: [{
                title: "Look At My Cool Embed!",
                description: "Powered by SVG 2 Embed : https://github.com/akeanti/SVG-2-Embed",
                color: 16711680,
                image: {
                    url: 'attachment://image.png'
                },
                footer: {
                    text: 'SVG 2 Embed',
                    icon_url: 'https://media.discordapp.net/attachments/1213837998366396508/1275270920478523424/embed-photo-svgrepo-com2.png?ex=66c54818&is=66c3f698&hm=c1d51b1dd8590ad32dcc70aaa169ab56dc7e7e85214d66783445e60a7806c19d&=&format=webp&quality=lossless&width=558&height=558'
                }
            }]
        };

        formData.append('payload_json', JSON.stringify(embed));

        fetch(webhookUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('PNG sent to Discord successfully!');
            } else {
                alert('Failed to send PNG to Discord.');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    });
}

document.getElementById('generate-svg').addEventListener('click', () => {
    const svgContainer = document.getElementById('svg-container');
    svgContainer.innerHTML = generateSVG();
});

document.getElementById('send-discord').addEventListener('click', sendToDiscord);
