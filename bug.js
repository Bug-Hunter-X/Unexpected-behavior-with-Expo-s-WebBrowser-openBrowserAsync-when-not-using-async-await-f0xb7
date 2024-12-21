import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://google.com');
  console.log({ result });
}

// This is the incorrect usage and causes unexpected behavior
WebBrowser.openBrowserAsync('https://google.com').then(console.log);
