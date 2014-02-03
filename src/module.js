(function(scope) {

  function withDependencies(task, depends) {
    return task.apply(this, depends && depends.map(marshal) || []);
  }

  function module(name, depends, moduleFactory) {
    modules[name] = withDependencies(moduleFactory, depends);
  };

  function marshal(name) {
    return modules[name];
  }

  var modules = {};

  function using(depends, task) {
    if (HTMLImports.ready) {
      withDependencies(task, depends);
    } else {
      addEventListener('HTMLImportsLoaded', function() {
        withDependencies(task, depends);
      });
    }
  };

  // exports

  scope.marshal = marshal;
  scope.module = module;
  scope.withDependencies = withDependencies;
  scope.using = using;

})(window);