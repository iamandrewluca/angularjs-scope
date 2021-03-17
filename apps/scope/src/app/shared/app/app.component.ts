import { IComponentController, IComponentOptions, IScope } from 'angular'
import AppTemplate from './app.component.html'

class AppController implements IComponentController {
    static $inject = ['$scope']
    constructor($scope: IScope) {
        console.log($scope);
    }
}

export const AppComponent: IComponentOptions = {
  controller: AppController,
  template: AppTemplate,
}