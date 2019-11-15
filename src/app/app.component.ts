import {Component, Output} from '@angular/core';

export interface Post {
    title: string;
    text: string;
    id?: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Post[] = [
        {
            title: 'first title',
            text: 'first text',
            id: 1
        },
        {
            title: 'second title',
            text: 'secod text',
            id: 2
        }
    ];

    addPost(post: Post) {
        this.posts = [post, ...this.posts];
    }
}
