const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");

let mainWindow;

Object.defineProperty(exports, "__esModule", { value: true });
const DemoServer_1 = require("./DemoServer");

const ENV = "production";

function createWindow() {
	startServer();
	mainWindow = new BrowserWindow({ width: 900, height: 680 });
	mainWindow.loadURL(
		ENV === "development" ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
	);
	mainWindow.on("closed", () => (mainWindow = null));
}

function startServer() {
	let server = new DemoServer_1.default(ENV);
	server.start(ENV === "development" ? 3001 : 8081);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
