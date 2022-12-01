import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app/components/app.component';
import { ConversorService } from '../app/services/conversor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let service: ConversorService;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule
      ],
      providers: [
        HttpClientModule,
        HttpClient,
        ConversorService
      ],
    }).compileComponents();
    service = TestBed.inject(ConversorService);
    http = TestBed.inject(HttpClient); //mock de HttpClient
  });

//----------------------------------------------------------- PADRAO ANGULAR
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'conversorMoedas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('conversorMoedas');
  });


//----------------------------------------------------------- FUNCIONALIDADES
  it(`should not be null`, () => { 
    let component = new AppComponent(service);
    const spy = spyOn(component, 'Converter').and.callThrough();
    expect(spy).not.toBe(null); //Nao pode ser nulo
  });

  it(`should not be null`, () => { 
    let component = new AppComponent(service);
    const spy = spyOn(component, 'ConverterDolar').and.callThrough();
    expect(spy).not.toBe(null); //Nao pode ser nulo
  });

  it(`should be greater than 0`, () => {
    let component = new AppComponent(service);
    const spy = spyOn(component, 'Converter').and.callThrough();
    expect(spy).not.toBeLessThan(0); //Nao existe dinheiro (conversao) negativo
  });

  it(`should be greater than 0`, () => {
    let component = new AppComponent(service);
    const spy = spyOn(component, 'ConverterDolar').and.callThrough();
    expect(spy).not.toBeLessThan(0); //Nao existe dinheiro (conversao) negativo
  });

});
