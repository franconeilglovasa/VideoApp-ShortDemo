import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../shared/models/video.model';
import { VideoService } from '../shared/service/video.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    this.fetchVideos(); // Fetch videos on component initialization
  }

  fetchVideos(): void {
    this.videoService.getVideos().subscribe({
      next: (videos) => {
        this.videos = videos; // Assign the fetched videos to the component property
      },
      error: (err) => {
        console.error('Error fetching videos:', err); // Handle error appropriately
      },
    });
  }

  navigateToVideo(id: number) {
    this.router.navigate(['/video', id]);
  }
}

