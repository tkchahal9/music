var app = new Vue({
    el: "#app",
    data: {
        cartItemsCount: 0,
        buttons: "Add to Cart",
        instruments: [
            {
                name: "Guitar",
                type: "String",
                price: "200",
                brand: "Yamaha",
                img: "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
                color: "green",
                show: false
            },
            {
                name: "Piano",
                type: "Keyboard",
                price: "600",
                brand: "Fender",
                img: "https://m.media-amazon.com/images/I/71pA206o0eL._AC_SL1500_.jpg",
                color: "red",
                show: false
            },
            {
                name: "Drums",
                type: "Percussion",
                price: "800",
                brand: "Maton",
                img: "https://www.macmillandictionary.com/us/external/slideshow/full/138255_full.jpg",
                color: "blue",
                show: false
            },
            {
                name: "Violin",
                type: "String",
                price: "350",
                brand: "Yamaha",
                img: "https://d1aeri3ty3izns.cloudfront.net/media/47/474365/1200/preview.jpg",
                color: "green",
                show: false
            },
            {
                name: "Trumpet",
                type: "Wind",
                price: "200",
                brand: "Fender",
                img: "https://i0.wp.com/www.princemusiccompany.com/wp-content/uploads/2020/01/Prince-Student-P-Series-SILVER-TRUMPET-2.jpg?fit=1200%2C1200&ssl=1",
                color: "red",
                show: false
            },
            {
                name: "Flute",
                type: "Wind",
                price: "105",
                brand: "Maton",
                img: "https://m.media-amazon.com/images/I/71KUdr-LtGL._AC_SX425_.jpg",
                color: "blue",
                show: false
            },

        ],
        showPopUp: false,
        popUpItem: {},
        instrumentName: "",
        instrumentType: "",
        brandInput: "",
        priceInput: ""
    },
    methods: {
        addToCart: function(index) {
            this.cartItemsCount = this.cartItemsCount + 1;
            this.instruments.splice(index, 1);
        },

        popUp: function(item) {
            this.showPopUp=!this.showPopUp;
            this.popUpItem=item;
        },

        resetNumber: function(index, data) {
            this.cartItemsCount = 0;
            this.empty = "";
            this.instruments.length = 0;
            this.instruments.push({
                name: "Guitar",
                type: "String",
                price: "200",
                brand: "Yamaha",
                img: "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
                color: "green",
                show: false
            });
            this.instruments.push({
                name: "Piano",
                type: "Keyboard",
                price: "600",
                brand: "Fender",
                img: "https://m.media-amazon.com/images/I/71pA206o0eL._AC_SL1500_.jpg",
                color: "red",
                show: false
            });
            this.instruments.push({
                name: "Drums",
                type: "Percussion",
                price: "800",
                brand: "Maton",
                img: "https://www.macmillandictionary.com/us/external/slideshow/full/138255_full.jpg",
                color: "blue",
                show: false
            });
            this.instruments.push({
                name: "Violin",
                type: "String",
                price: "350",
                brand: "Yamaha",
                img: "https://d1aeri3ty3izns.cloudfront.net/media/47/474365/1200/preview.jpg",
                color: "green",
                show: false
            });
            this.instruments.push({
                name: "Trumpet",
                type: "Wind",
                price: "200",
                brand: "Fender",
                img: "https://i0.wp.com/www.princemusiccompany.com/wp-content/uploads/2020/01/Prince-Student-P-Series-SILVER-TRUMPET-2.jpg?fit=1200%2C1200&ssl=1",
                color: "red",
                show: false
            });
            this.instruments.push({
                name: "Flute",
                type: "Wind",
                price: "105",
                brand: "Maton",
                img: "https://m.media-amazon.com/images/I/71KUdr-LtGL._AC_SX425_.jpg",
                color: "blue",
                show: false
            });


        },
        newInstrument: function() {
            this.instruments.push({
                name: this.instrumentName,
                type: this.instrumentType,
                brand: this.brandInput,
                price: this.priceInput,
                show: false,
                img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
            });

            this.instrumentName = "";
            this.showPopUp = false;
        }
    }
});

