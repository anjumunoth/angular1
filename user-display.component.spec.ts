import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayComponent } from './user-display.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementService } from '../user-management.service';

describe('UserDisplayComponent', () => {
  let component: UserDisplayComponent;
  let fixture: ComponentFixture<UserDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisplayComponent ],
      imports: [
        RouterTestingModule,HttpClientModule
      ],
      providers:[UserManagementService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
