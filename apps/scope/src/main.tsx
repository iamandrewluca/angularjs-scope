import angular from 'angular'
import { AppModule } from './app/app.module'

angular.element(function () {
  angular.bootstrap(document, [AppModule.name], {
      strictDi: true,
  });
});