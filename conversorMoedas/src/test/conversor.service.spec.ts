import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app/components/app.component';
import { ConversorService } from '../app/services/conversor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConversorService', () => {
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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the values from GET', () => {
    const spy = spyOn(http, 'get').and.callThrough(); 
    service.RealizarConversao();
    expect(spy).not.toBe(null)
  });
});
