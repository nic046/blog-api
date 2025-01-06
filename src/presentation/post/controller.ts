import {Request, Response} from 'express';
import { PostService } from '../services/post.service';
import { error } from 'console';

export class PostController {
    constructor(
        private readonly postService: PostService
    ){}

    createPost = async (req: Request, res: Response) => {
        this.postService.createPost()
        .then((data) => {
            return res.status(201).json(data)
        })
        .catch(error => {
            return res.status(500).json({
                message: "Create Post",
                error
            })
        })
    }

    findAllPost = async (req: Request, res: Response) => {
        this.postService.findAllPost()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch(error => {
            return res.status(500).json({
                message: "Find posts",
                error
            })
        })
    }
}