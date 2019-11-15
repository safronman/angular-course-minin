import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from '../app.component';



@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

    title = '';
    text = '';

    @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();

    createPost() {
        const post: Post = {
            text: this.text,
            title: this.title
        };
        this.onAddPost.emit(post);
        this.title = this.text = '';
    }
}
