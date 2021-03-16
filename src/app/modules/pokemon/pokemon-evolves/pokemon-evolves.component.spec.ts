import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEvolvesComponent } from './pokemon-evolves.component';

describe('PokemonEvolvesComponent', () => {
  let component: PokemonEvolvesComponent;
  let fixture: ComponentFixture<PokemonEvolvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonEvolvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
