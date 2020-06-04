import { ResponsiveLayoutService } from './../../services/responsive-layout.service';
import { Component, OnInit } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public faLightbulb = faLightbulb;

  public categories = ['All', 'Buisness', 'Creative', 'Education', 'Blog'];
  public selectedCategory = this.categories[0];
  public images = [
    {
      image: 'assets/images/portfolio-1.png',
      category: 'Buisness'
    },
    {
      image: 'assets/images/portfolio-2.png',
      category: 'Buisness'
    },
    {
      image: 'assets/images/portfolio-3.png',
      category: 'Creative'
    },
    {
      image: 'assets/images/portfolio-4.png',
      category: 'Education'
    },
    {
      image: 'assets/images/portfolio-5.png',
      category: 'Creative'
    },
    {
      image: 'assets/images/portfolio-6.png',
      category: 'Blog'
    }
  ];

  public filteredPortfolio = [];

  constructor(public responsiveLayout: ResponsiveLayoutService) { }

  ngOnInit(): void {
    this.filterPortfolio();
  }

  filterPortfolio() {
    if (this.selectedCategory === 'All') {
      this.filteredPortfolio = this.images;
    } else {
      this.filteredPortfolio = this.images.filter(image => {
        return this.selectedCategory === image.category;
      });
    }
  }

  changeCategory(category) {
    this.selectedCategory = category;
    this.filterPortfolio();
  }
}
