export default class BookstoreService {
    data = [
        {
            id: 1,
            author: 'Jon Stokes',
            title: 'INSIDE THE MACHINE: AN ILLUSTRATED INTRODUCTION TO MICROPROCESSORS AND COMPUTER ARCHITECTURE',
            price: 20,
            imageUrl: 'https://learntocodewith.me/wp-content/uploads/2020/01/Inside-the-machine-1-1024x576.jpeg'
        },
        {
            id: 2,
            author: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
            title: 'STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS',
            price: 40,
            imageUrl: 'https://learntocodewith.me/wp-content/uploads/2020/01/Structure-and-interpretation-1024x576.jpeg'
        },
        {
            id: 3,
            author: 'Charles Petzold ',
            title: 'CODE: THE HIDDEN LANGUAGE OF COMPUTER HARDWARE AND SOFTWARE',
            price: 50,
            imageUrl: 'https://learntocodewith.me/wp-content/uploads/2020/01/Code-1024x680.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, rej) => {
            setTimeout(() => {
                if (Math.random() > .9) {
                    rej(new Error('something bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 800);
        })
    }
}
