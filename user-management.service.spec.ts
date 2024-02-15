import { TestBed } from '@angular/core/testing';

import { UserManagementService } from './user-management.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserManagementService', () => {
  let service: UserManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(UserManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an array for get request',()=>{
    let userObs=service.getUsersFromJsonPlaceHolder();
    userObs.subscribe((data)=>{
      expect(data).toBeInstanceOf(Array);
      expect(data[0].name).toBeDefined();
    })
  })
  it('should have name for get request',()=>{
    let userObs=service.getUsersFromJsonPlaceHolder();
    userObs.subscribe((data)=>{
      expect(data[0].name).toBeDefined();
    })
  })
  
});
