import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs {
  items = [
    {
      title: "User Research",
      content: "We take the time to understand your users — who they are, what they need, and how they interact with digital products. This research forms the foundation of a product that’s intuitive, relevant, and user-centered.",
      isOpen: false
    },
    {
      title: "Market Research",
      content: "We explore the competitive landscape and current market trends to position your brand effectively. By identifying gaps and opportunities, we help shape a strategy that connects with your audience.",
      isOpen: false
    },
    {
      title: "Client Briefing",
      content: "Every project begins with a focused conversation around your goals, challenges, and vision. This ensures we align our approach with your expectations and business objectives from day one.",
      isOpen: false
    },
    {
      title: "UX Workshop",
      content: "Through collaborative workshops, we map out user journeys, define core features, and refine structure. This hands-on approach brings clarity to the design process and keeps everyone on the same page.",
      isOpen: false
    }
  ]

  toggleItem(item: AccordionItem): void {
    this.items.forEach(i => {
      if (i !== item) {
        i.isOpen = false;
      }
    });
    item.isOpen = !item.isOpen;
  }
}
