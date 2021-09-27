# Digital Namecard

## How to use

1. Clone project
2. Using the `data_template.ts` as a data template for your personal information, edit the fields accordingly
3. Then, rename the file to `mockJson.ts` and place it inside `./src/utils/mockData`
4. perform `npm install` to install the dependencies
5. cd into the project and perform `npm start`
6. You should be able to view the prototype in port 3000, make sure you are viewing it on mobile mode
7. subsequently, you can perform `npm run build` to build the project and deploy the build folder into free hosting platforms such as netlify

## NOTE

If you would like to deploy this digital namecard on your domain, do take note that the vCard-js library is having an issue where the social link is not properly displayed on mobile devices. Hence, please follow the following steps for the fix. Do take note that you are to perform `npm run build` for manual deployment instead of CD pipeline

1. In `node_modules` find `vscard-js`
2. Go to `lib` and then `vCardFormatter.js`,
3. Replace the following code snippet

```
if (vCard.socialUrls) {
	for (var key in vCard.socialUrls) {
		if (vCard.socialUrls.hasOwnProperty(key) &&
			vCard.socialUrls[key]) {
			formattedVCardString += 'X-SOCIALPROFILE' + encodingPrefix + ';TYPE=' + key + ':' + e(vCard.socialUrls[key]) + nl();
		}
	}
}
```

with

```
if (vCard.socialUrls) {
	let index = 0;
	for (var key in vCard.socialUrls) {
		index++;
		if (vCard.socialUrls.hasOwnProperty(key) &&
		vCard.socialUrls[key]) {
			formattedVCardString += 'item' + index + '.URL:' + vCard.socialUrls[key] + nl();
			formattedVCardString += 'item' + index + '.X-ABLabel:' + key + nl();
		}
	}
}
```

This fix is contributed by mgecawicz from https://github.com/enesser/vCards-js/issues/56
