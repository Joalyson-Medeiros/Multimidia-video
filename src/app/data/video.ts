export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
}

const videos: Video[] = [
    {
        videoURL: "video/video01.mp4",
        imageURL: "image/image01.jpg",
        description: "Tipos de vinhos presentes no mercado."
    },
    {
        videoURL: "video/video02.mp4",
        imageURL: "image/image02.jpg",
        description: "Aprecie um bom vinho em companhia."
    },
    {
        videoURL: "video/video03.mp4",
        imageURL: "image/image03.jpg",
        description: "Curiosidades sobre vinhos."
    },
    {
        videoURL: "video/video04.mp4",
        imageURL: "image/image04.jpg",
        description: "Tipos de uvas para fabricação de vinhos."
    },
    {
        videoURL: "video/video05.mp4",
        imageURL: "image/image05.jpeg",
        description: "Aperitivos que evidenciam o sabor."    
    }
]

export default videos;