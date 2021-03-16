import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokemonsComponent } from './all-pokemons.component';

describe('AllPokemonsComponent', () => {
  let component: AllPokemonsComponent;
  let fixture: ComponentFixture<AllPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
