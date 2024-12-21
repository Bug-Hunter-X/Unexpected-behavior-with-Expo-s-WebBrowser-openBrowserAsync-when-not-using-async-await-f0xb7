import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://google.com');
  console.log({ result });
}

// Correct usage
handlePress();
