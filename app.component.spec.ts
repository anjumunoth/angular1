import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementService } from './user-management.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule
      ],
      declarations: [
        AppComponent, UserDisplayComponent
      ],
      providers:[UserManagementService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testingProjectExample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testingProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testingProject app is running!');
  });

  it('should companyName have the value as Deloitte',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    const app=fixture.componentInstance;
    expect(app.companyName).toEqual('Deloitte')
  })
});

describe('AppComponent', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new AppComponent();
    expect(comp.isOn)
      .withContext('off at first')
      .toBe(false);
    comp.clicked();
    expect(comp.isOn)
      .withContext('on after click')
      .toBe(true);
    comp.clicked();
    expect(comp.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new AppComponent();
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);
    comp.clicked();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });
});
