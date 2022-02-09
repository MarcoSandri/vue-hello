var app = new Vue (
    {
        el: '#root',
        data: {
            messaggio : "Hello World",
            src : "https://picsum.photos/50",
            side: 50
        },
        methods: {
            changeImage() {
                this.side += 50;
                this.src = `https://picsum.photos/${this.side}`;
            },
        }
    }
);