import { Component } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from '@angular/http'; 
import {HttpClient} from './http-client';

bootstrap(AppComponent, [HTTP_PROVIDERS, HttpClient]);