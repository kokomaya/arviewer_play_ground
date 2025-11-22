module.exports = {
  name: "HelloPlugin",
  version: "1.0.0",
  activate(api, context) {
    const disposable = api.registerCommand("sayHello", () => {
      api.showInfo("Hello from HelloPlugin!");
    });
  },
  deactivate() {
    vscode.window.showWarningMessage(`⚠️ deactivate called for HelloPlugin`);
    disposable.dispose();
    console.log("Goodbye from HelloPlugin");
  }
};