const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(tokenObj) {
    console.log(tokenObj);
    localStorage.setItem("authorization_token", tokenObj.authorization);
  }

  function _setRole(role) {
    localStorage.setItem("role", role);
  }

  function _getAuthorizationToken() {
    return localStorage.getItem("authorization_token");
  }

  function _getRole() {
    return localStorage.getItem("role");
  }

  function _clearToken() {
    localStorage.removeItem("authorization_token");
  }

  function _clearRole() {
    localStorage.removeItem("role");
  }
  return {
    getService: _getService,
    setToken: _setToken,
    setRole: _setRole,
    getAuthorizationToken: _getAuthorizationToken,
    getRole: _getRole,
    clearToken: _clearToken,
    clearRole: _clearRole,
  };
})();
export default LocalStorageService;
