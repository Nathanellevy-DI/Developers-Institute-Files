// Daily Challenge: Creating Objects

// Create the Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// Instantiate first Video instance
const video1 = new Video("Introduction to JavaScript", "Nathaniel", 300);
video1.watch();

// Instantiate second Video instance
const video2 = new Video("How to Build a Website", "John Doe", 600);
video2.watch();


// BONUS: Array of video data
// Best structure = an array of objects
const videoData = [
    { title: "React Tutorial", uploader: "Sarah", time: 900 },
    { title: "Node.js Basics", uploader: "Mike", time: 1200 },
    { title: "CSS Animations", uploader: "Emma", time: 450 },
    { title: "Python for Beginners", uploader: "Alex", time: 800 },
    { title: "Async JavaScript", uploader: "Chris", time: 700 }
];

// BONUS: Loop through array and create Video instances
videoData.forEach(videoInfo => {
    const video = new Video(videoInfo.title, videoInfo.uploader, videoInfo.time);
    video.watch();
});
