import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
services = [
{
title: 'UI/UX Design',
description: 'Crafting seamless, user-first interfaces that look great and feel intuitive across every screen.',
icon: '🎨'
},
{
title: 'Graphics Design',
description: 'Creating bold, on-brand visuals from social posts to digital assets—that leave a lasting impact.',
icon: '🖼️'
},
{
title: 'Video Editing',
description: 'Turning raw footage into captivating stories with sleek transitions, sound design, and style.',
icon: '🎬'
},
{
title: 'Web Development',
description: 'Building fast, responsive and scalable websites using modern technologies and clean code.',
icon: '💻'
},
{
title: 'Mobile Development',
description: 'Developing smooth, high-performance mobile apps that bring your ideas to life on iOS and Android.',
icon: '📱'
},
{
title: 'SEO Optimization',
description: 'Improving visibility and ranking through smart SEO strategies that drive real, organic growth.',
icon: '📈'
}
];


contactFor(service: string) {
alert(`Requesting more info about: ${service}`);
}


openContact() {
alert('Open contact form (implement navigation/modal)');
}
}
