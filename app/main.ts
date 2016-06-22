import { Component } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from '@angular/http'; 
import {HttpClient} from './http-client';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [HTTP_PROVIDERS, HttpClient, APP_ROUTER_PROVIDERS]);