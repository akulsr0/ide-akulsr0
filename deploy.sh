echo 'Creating a build'
echo '----------------->'

npm run build

echo 'Deploying to Firebase'
echo '--------------------->'
firebase deploy