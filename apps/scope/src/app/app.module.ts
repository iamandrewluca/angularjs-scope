import angular from 'angular'
import { AppComponent } from './shared/app/app.component'

export const AppModule = angular.module('angular-scope', [])

AppModule.component('app', AppComponent)
